import { defineStore } from 'pinia'
import router from '../router'
import { auth, db } from '../firebase'

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  getAuth,
  onIdTokenChanged,
  sendPasswordResetEmail
} from 'firebase/auth'
import { ref as ref_fb, set, get } from 'firebase/database'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    publicConfigs: null,
    project: {"theme": "brio"},
    projectId: null, // entry point
    projectFetched: false,
    targetBadge: null,
    assertionData: null, //{"badgeStatus": "unearned"},
    emailVerificationSent : false,
    isVerifyingEmail: false,
    isLoading: true,
    /* 
    isLoading: {
    configs: true,
    user: true,
    project: true,
    badge: true,
    }, 
    */
    showForms: false,
    formToShow: "login"
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
    async login(details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("Cet utilisateur n'existe pas. Veuillez vous inscrire.")
            break
          case 'auth/wrong-password':
            alert("Mauvais mot de passe. Veuillez réessayer.")
            break
          default:
            alert("Quelque chose s'est mal passé. Veuillez réessayer.")
        }
        return
      }
      this.setUser(auth.currentUser)
      /* this.showForms = false */

    },
    async register(details) {
      const { email, password, name } = details;
    
      try {
        // await createUserWithEmailAndPassword(auth, email, password);

        const { user } = await createUserWithEmailAndPassword(auth, email, password, name)
        await sendEmailVerification(user)
        this.emailVerificationSent = true
        this.isVerifyingEmail = true
    
        // New user successfully created, now create a database record.
        const uid = auth.currentUser.uid; // Get current user's uid
    
        console.log(`User created with UID: ${uid}`); // DEBUGGING
    
        // Define the initial data for the new user.
        const initialData = {
          email: email,
          name: name,
          points: 0,
          badges: "placeholder",
          answers: "placeholder",
          registeredAt: Date.now() // Add the timestamp of when the user registers
        };
    
        console.log(`Attempting to write to database with data: ${JSON.stringify(initialData)}`); // DEBUGGING
    
        // Create a reference to the user's record in the database.
        const userRef = ref_fb(db, 'users/' + uid);
    
        // Set the initial data for the new user.
        try {
          await set(userRef, initialData);
          console.log('Data successfully written to database.'); // DEBUGGING
        } catch (error) {
          console.error('Error writing to database:', error); // DEBUGGING
          return;
        }
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break;
          case 'auth/invalid-email':
            alert("Invalid email")
            break;
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break;
          case 'auth/weak-password':
            alert("Weak password")
            break;
          default:
            console.error("Error during user registration:", error); // DEBUGGING
        }    
        return;
      }  
      this.setUser(auth.currentUser);
    
    },
    async logout() {
      await signOut(auth)
      this.clearUser()
      this.showForms = false
      router.push('/login')
    },
    async fetchTargetedBadge() {

      // Get the default projectId from the configs, if none is provided.
      if (this.projectId == null) {
        this.projectId = this.publicConfigs.defaultProject;
      }
      // ...

      const projectRef = await get(ref_fb(db, 'projects/' + this.projectId))
      const projectData = projectRef.val() 
      
      this.project = projectData
      this.project.projectId = this.projectId
      
      const targetBadgeRef = await get(ref_fb(db, 'badges/' + projectData.badgeClass))
      const targetBadgeData = targetBadgeRef.val()

      // Assign the badge data to the store.
      this.targetBadge = targetBadgeData

      // Assign the project data to the store.
      this.targetBadge.badgeClass = projectData.badgeClass
      this.projectFetched = true
    },
    async fetchPublicConfigs() {
      const configsRef = await get(ref_fb(db, 'configs/'))
      const configsData = configsRef.val()      
      this.publicConfigs = configsData

      // If the site is not in maintenance mode, fetch the user.
      if (this.publicConfigs.maintenance == false) {

        this.fetchUser()
        this.fetchTargetedBadge();
        
      // If the site is in maintenance mode, show the maintenance page.
      } else {
        this.isLoading = false;
      }

    },
    fetchUser() {
      onIdTokenChanged(auth, async (user) => {
        if (user) {
          this.setUser(user)
 
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            this.isVerifyingEmail = !user.emailVerified
          }
        } else {
          this.clearUser()
        }
        this.isLoading = false;
      })
    },
    async checkEmailVerification() {
      const auth = getAuth();
    
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        await auth.currentUser.reload();
    
        if (auth.currentUser.emailVerified) {
          this.isVerifyingEmail = false;
          this.emailVerificationSent = false;
    
          // Now this should redirect to the dashboard only after email verification
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      }
    },
    // your store code
    cancelEmailVerification() {
      const auth = getAuth();

      if (auth.currentUser) {
        signOut(auth).then(() => {
          this.clearUser();
          this.isVerifyingEmail = false;
          this.emailVerificationSent = false;
          router.push('/login');
        }).catch(error => {
          console.error('Error signing out:', error);
        });
      }
    },

    async sendPasswordReset(email) {
      try {
        await sendPasswordResetEmail(auth, email);
        alert('Le courriel de réinitialisation du mot de passe a été envoyé.');
      } catch (error) {
        console.error('Error sending password reset email:', error);
        alert('Nous n\'avons pas pu envoyer le courriel de réinitialisation du mot de passe. Veuillez réessayer.');
      }
    }

  }
})
