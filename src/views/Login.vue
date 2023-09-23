<template>
    <div v-show="store.showForms" class="form-container">
      <div v-if="store.isVerifyingEmail" class="dark-overlay">
        <div class="landing-spin">
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div>
         <p class="preparing-msg">
          Veuillez vérifier votre adresse courriel...
         </p>
        <button @click="cancelEmailVerification">Annuler la vérification</button>
     
      </div>
      <AuthForms/>
      
    </div>

  <!-- 800 x 533 ~534 -->  
  <div class="landing-container">

    <!-- White box with shadow -->
    <div v-if="!store.publicConfigs.maintenance" :class="{ 'wrapper': true, 'blurred': store.showForms }">
        <!-- header -->
        <div class="header fade-in">
        
        <!-- <img src="@/assets/certificate-icon.svg" class="badge-icon" alt="logo"> -->
        <div class="badge-icon">
          <CertificateIcon />
        </div>

        <div class="title">
            <!-- h2 & h3 -->
            <h2>Un nouveau badge est disponible</h2>
            <span>Ajoutez-le à votre sac à dos académique</span>
        </div>
            <!-- backpack button -->
            <img v-if="badgeImageLoaded && store.projectFetched" src="@/assets/backpack-icon.svg" class="backpack-button" @click="ShowLoginRegisterForms" alt="">

        <!-- Small bottom blue line in ::after -->
    </div>


    <div v-if="badgeImageLoaded && store.projectFetched" class="content">
        <!-- Left side with the badge image -->
        <div class="badge">
            <!-- <img :src="store.targetBadge.image"  class="badge-image bounce-in"> -->
            <img :src="imgUrl"  class="badge-image bounce-in">

            <img src="@/assets/shadow.svg" class="shadow fade-in">
        </div> 
        <!-- Right side with the badge infos -->
        <div class="badge-infos fade-in">
                <h3>{{ `${store.targetBadge.name}` }}</h3>
                <a :href="`https://backpacks3-default-rtdb.firebaseio.com/badges/${store.targetBadge.badgeClass}.json`" target="_blank" style="text-decoration: none;">
                  <div class="badge-informations">
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <h4>Badge ID: <span style="font-weight: 800;">{{ `${store.targetBadge.badgeClass}` }}</span></h4>
                  </div>
                </a>
                <p v-html="store.targetBadge.description"></p>
                <button @click="ShowLoginRegisterForms">Récupérer ce badge</button>

                <!-- Open badge mention -->
                <div class="openbadge-mention">
                  
                  <a id="openbadge-img-link" href="https://openbadges.org/" target="_blank">
                    <img class="openbadge-logo" src="@/assets/openbadge.png"/>
                  </a>  
                    
                    <!-- Message -->
                    <span>Nous émettons des <a href="https://openbadges.org/" target="_blank">Open Badges</a></span>
                </div>
            </div>  
    </div>

    <div v-else>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </div>

    <div class="footer fade-in">

        <div class="auth-directive">  
            <span><a href="#" @click="() => ShowLoginRegisterForms('login')">Connectez-vous</a> à votre sac à dos académique <br>ou <a href="#" @click="() => ShowLoginRegisterForms('register')">créez un compte</a> pour obtenir ce badge.</span>
          </div>
        <div class="copyright">  
            <span>Développé pour l'Université Laval.</span>
        </div>
        
    </div>

    </div>

    <div class="wrapper-alternate fade-in" v-else>
      <i class="fa-solid fa-screwdriver-wrench fa-beat"></i>
      <span>L'application <strong>Mon sac à dos académique</strong> est présentement en maintenance.<br>Veuillez réessayer plus tard.

      </span>
    </div>

  </div>


  </template>
  
  <script setup>
  import AuthForms from '@/components/AuthForms.vue'
  import { launchConfettis } from '@/helpers/confettis'
  import { ref, onUnmounted, watchEffect, onMounted, watch } from 'vue'
  import { useUserStore } from '@/store'
  import { useRouter } from 'vue-router'

  import CertificateIcon from '@/components/CertificateIcon.vue';


  const router = useRouter()
  const store = useUserStore()

  // Get the targeted badge infos for this project.
  //store.fetchTargetedBadge();

  const formToShow = ref('login') // default to login form

  const imgUrl = ref('')
  const badgeImageLoaded = ref(false)

  watchEffect(() => {
  if (!store.isVerifyingEmail && store.user) {
    //router.push(`/${store.projectId}`)
    router.push(`/?projectId=${store.projectId}`)
  } else if (!store.user && router.currentRoute.value.path !== '/login') {
    router.push('/login')
  }
})

const cancelEmailVerification = () => {
  store.cancelEmailVerification();
}

  // When component is setup, start an interval to check email verification
  const checkEmailVerificationInterval = setInterval(() => {
    store.checkEmailVerification()
  }, 5000) // Check every 5 seconds

  const ShowLoginRegisterForms = (formType) => {
  
  store.showForms = true;
  store.formToShow = formType; // Set the form type
}

  onMounted(() => {
    // Fetch the targeted badge image before displaying the component
    setTimeout(() => {
      fetch(store.publicConfigs.proxyURL + store.targetBadge.image)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();  // Use blob() for images
        })
        .then(imageBlob => {
            // Convert blob to a local URL and update the image src
            const imageUrl = URL.createObjectURL(imageBlob);
            imgUrl.value = imageUrl;
            badgeImageLoaded.value = true;

            if (!store.user) {
              launchConfettis();
            }



        })
        .catch(error => {
            // Handle errors, you might want to log them or display a user-friendly message
            console.log('There was a problem with the fetch operation:', error.message);
        });
  }, 2000) 

  })

  // When component is unmounted, clear the interval
  onUnmounted(() => {
    clearInterval(checkEmailVerificationInterval)
  })

  </script>

<style scoped>

.dark-overlay{
z-index:20;
    position: absolute;
    background: var(--color-theme-overlays-gradient);
    left:0;
    width: 800px;
    /* height: 533px; */
    height: 516px;  
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: (var(--color-theme-overlays-gradient));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white; /* Add color to the text in overlay */
  z-index: 9999; /* To ensure overlay is above all other elements */
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


  .landing-container {
    background-color: white;
    width: 800px;
    /* height: 533px; */
    height: 516px;
    min-width: 800px;
    /* min-height: 533px;  */
    min-height: 516px; 
    padding: 2px 2px 1px 2px; 
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 2px 1px rgba(5,20,36,.25)
}

.wrapper-alternate {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: 'Source Sans 3';
    text-align: center;
    box-shadow: 0 0 2px 1px rgba(5,20,36,.25)
}

.wrapper-alternate i {
  font-size: 50px;
  margin-bottom: 40px
}


.header {
    width: 100%;
    height: 100px;
    align-items: flex-start;
    display: flex;
    gap: 8px;
    padding-bottom: 20px;
    padding-left: 32px;
    padding-right: 25px;
    padding-top: 32px;
}

.header .badge-icon {
    max-width: 44px;
    height: 40px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    outline: none;
    flex-shrink: 0;
    margin-left: -8px;
    /* margin-top: -8px; */
}

.header .title {
    width: 100%;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3;
    font-family: 'Source Sans 3';
    margin-left: 10px;
}

.header .title h2 {
    font-style: normal;
    box-sizing: inherit;
    color: #0f263e;
    font-family: 'Overpass';
    margin: 0;
    overflow-wrap: break-word;
    font-size: 28;
    font-weight: 600;
    line-height: 1;
}

.header .title span {
    font-size: 16px;
    font-style: normal;
    font-family: 'Source Sans 3';
    line-height: 16px;
    color: var(--color-theme-accent);
    font-weight: 500;
}

.header .backpack-button  {
    margin-top:-10px;
    max-width: 40px;
}

.header .backpack-button:hover {
    cursor: pointer;
    opacity: 80%;
}

.header::after {
    background-color: var(--color-theme-accent);
    top: 90px;
    content: "";
    display: block;
    height: 4px;
    left: 20px;
    margin-top: 16px;
    position: absolute;
    width: 54px;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 50px 0px 50px;
}

.content .badge {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}

.content .badge .badge-image {
    width: 200px;
    /* pointer-events: none; */    
    /* cursor: pointer; */

    -webkit-mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    -webkit-mask-size: 500%;
    mask-size: 400%;
    -webkit-mask-position: 0;
    mask-position: 0;
}

.content .badge .badge-image:hover {
    transition: mask-position 2s ease,-webkit-mask-position 2s ease;
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
}

.content .badge .shadow {
    position: absolute;
    top: 310px;
    width: 400px;
}

.content .badge-infos {
    width: 100%;
    margin-left: 60px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.content .badge-infos h3 {
    font-size: 22px;
    font-family: 'Source Sans 3';
    line-height: 16px;
    color: var(--color-theme-accent);
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: -16px;
}


.content .badge-infos p {
    font-size: 16px;
    font-family: 'Source Sans 3';
    color: #000;
    font-weight: 300;
    line-height: 130%;
    margin-bottom: 18px;
}

.content .badge-infos strong {
    font-weight: 500;
}

.dark-overlay button {
    width: fit-content;
    border: 1px solid var(--color-theme-accent);
    border-radius: 4px;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    outline: none;
    padding: 16px 20px 14px 16px; 
    text-align: left;
    cursor: pointer;
    background: var(--color-theme-accent);
    border-color: var(--color-theme-accent);
    color: #fff;
    transition: 0.4s;
}

.dark-overlay button:hover {
    background: var(--color-theme-button-hover);
    border-color: var(--color-theme-button-hover);
}

.dark-overlay button:disabled{
    background: var(--color-theme-button-disabled);
    border-color: var(--color-theme-button-disabled);
    cursor:not-allowed;
}

.content .badge-infos button {
    width: fit-content;
    border: 1px solid var(--color-theme-button);
    border-radius: 4px;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    outline: none;
    padding: 16px 20px 14px 16px; 
    text-align: left;
    cursor: pointer;
    background: var(--color-theme-button);
    border-color: var(--color-theme-button);
    color: #fff;
    transition: 0.4s;
}

.content .badge-infos button:hover {
    background: var(--color-theme-button-hover);
    border-color: var(--color-theme-button-hover);
}

.landing-container .footer {
    width: 100%;
    min-height: 100px;
    max-height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 0px 40px;
    font-family: 'Source Sans 3';
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    background-color: #f4f6f8;
}

.landing-container .footer .auth-directive {
    width: 50%;
}

.landing-container .footer .copyright span {
    white-space: nowrap;
}

.landing-container .footer a {
    color: var(--color-theme-accent);
    font-weight: 500;
    text-decoration: none;
}

.landing-container .footer a {
    color: var(--color-theme-accent);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
}

.landing-container .footer a:hover {
    text-decoration: underline;
}

.openbadge-mention {
    z-index: 5;
    display: flex;
    flex-direction: row;
    gap:10px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 14px;
  }

  .openbadge-mention .openbadge-logo {
    max-width: 30px;
    cursor: pointer;
  }

  .openbadge-mention span {
    color: #000;
    font-size: 15px;
    font-family: 'Source Sans 3';
    color: #000;
    font-weight: 400;
    line-height: 124%;
  }

  .openbadge-mention span a {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
  }


.bounce-in {
    animation: bounce-in 1s ease;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% { transform: scale(.9); }
    100% { transform: scale(1); }
  }


  .fade-in {
    animation: fade-in 1s linear;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .blurred {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }

  i {
    color: #c1c9d2;
/*     font-size: 24px;
 */}


 .landing-spin i {
    color: #c1c9d2;
    margin-top: 70px;
/*     font-size: 24px;
 */}
  
 .preparing-msg {
  color: white;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 40px;
}


.badge-informations {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  font-size: 12px;
  margin-left: 2px;
  margin-bottom: 8px;
}


.badge-informations h4 {
  font-size: 12px;
  font-family: 'Source Sans 3';
  font-weight: 500;
  color:#969da5;
}

.badge-informations:hover i,
.badge-informations:hover h4 {
  cursor: pointer;
  text-decoration: underline;
  color: var(--color-theme-accent);
}

</style>
  