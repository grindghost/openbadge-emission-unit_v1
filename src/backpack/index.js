import { ref } from 'vue';
import { getAuth } from 'firebase/auth';
import { useUserStore } from '@/store';
import Bowser from 'bowser';

const store = useUserStore(); // get store

export const loading = ref(false);

async function downloadBackpack() {

  const auth = getAuth();
  const user = auth.currentUser;
  const token = await user.getIdToken(); // Retrieve this from your authentication flow
  try {
    console.log(store.project.api);
    const response = await fetch(`${store.project.api}/api/downloadBackpack`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const blob = await response.blob();
      const urlObject = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = urlObject;
      a.download = 'mon_sac_a_dos_academique.pdf';

      // Detect if the user is using Firefox
      const browser = Bowser.getParser(window.navigator.userAgent);
      const isFirefox = browser.getBrowserName() == 'Firefox';

      
      if (isFirefox) {
        // If Firefox, open in a new tab
        // a.target = '_blank';
        // a.download = '';
        
        let tab = window.open();
        tab.location.href = urlObject;
        console.log('User is using Firefox. Opening in a new tab.');
        return;
      } 
  

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(urlObject);
    } else {
      // Handle any errors that come back from the server
      console.error('Error downloading backpack:', await response.text());
    }
  } catch (err) {
    console.error('Error:', err);
  }
}



async function _downloadBackpack() {
  const auth = getAuth();
  const user = auth.currentUser;
  const token = await user.getIdToken(); // Retrieve this from your authentication flow
  try {
    /*
    const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/api/downloadBackpack`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    */
   console.log(store.project.api);
    const response = await fetch(`${store.project.api}/api/downloadBackpack`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'backpack.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      
      // Handle any errors that come back from the server
      console.error('Error downloading backpack:', await response.text());
    }
  } catch (err) {
    console.error('Error:', err);
  }
}


export default downloadBackpack;

