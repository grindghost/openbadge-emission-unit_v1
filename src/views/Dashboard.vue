<template>

  <div class="dark-overlay" v-show="preparingPDFBackpack">
      <div class="landing-spin">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      </div>
      <p class="preparing-msg">
        Nous préparons votre sac à dos...
      </p>
  </div>

  <!-- 800 x 533 ~534 -->  
  <div :class="{ 'landing-container': true, 'blurred': preparingPDFBackpack }">

      <!-- White box with shadow -->
      <div class="wrapper">
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
              <img v-if="badgeImageUrl && badgeImageLoaded" src="@/assets/backpack-icon.svg" class="backpack-button" alt="" @click="sendDownloadBackpackRequest">

          <!-- Small bottom blue line in ::after -->
      </div>

      <div v-if="badgeImageUrl && badgeImageLoaded" class="content">
          <!-- Left side with the badge image -->
          
          <div class="badge">
             <!--  <img :src="badgeImageUrl"  class="badge-image bounce-in"> -->
             <img :src="imgUrl" 
                  :class="['badge-image', 'bounce-in', (store.assertionData.badgeStatus == 'revoked' || store.assertionData.badgeStatus == 'expired') ? 'revoked' : '']">
                  <BadgeStatusIcon class="badge-status-icon" :status="store.badgeStatus" />
 
                  <i v-if="store.assertionData.badgeStatus == 'revoked' || store.assertionData.badgeStatus == 'expired'" class="fa-solid fa-triangle-exclamation"></i>


              <img src="@/assets/shadow.svg" class="shadow fade-in">
          </div> 
          <!-- Right side with the badge infos -->
          <div class="badge-infos fade-in">
                <h3>{{ `${store.targetBadge.name}` }}</h3>
                <a :href="store.assertionData.verify.url" target="_blank" style="text-decoration: none;">
                <div class="badge-informations">
                  <i class="fa-solid fa-up-right-from-square"></i>
                  <h4>Attestation ID: <span style="font-weight: 800;">{{ `${store.assertionData.uid}` }}</span></h4>
                </div>
              </a>
                <p v-if="message" v-html="message"></p>
                  <button @click="downloadBadge" :disabled="store.assertionData.badgeStatus == 'revoked'">Télécharger mon badge</button>

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

      <div class="landing-spin" v-else>
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      </div>

      <div class="footer fade-in">
          <div class="auth-directive">  
              <span><a href="#" @click="logout">Déconnexion</a> de mon sac à dos académique.</span>
          </div>
          <div class="copyright">  
              <span>Développé pour l'Université Laval.</span>
          </div>    
      </div>

    </div>

  </div>


  </template>
  
  <script setup>
  import Bowser from 'bowser';
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '@/store'

  import earnBadge, { message, badgeImageUrl, emissionDate } from '../badge'
  import CertificateIcon from '@/components/CertificateIcon.vue';
  import BadgeStatusIcon from '@/components/BadgeStatusIcon.vue';

  import downloadBackpack from '../backpack' 
  const store = useUserStore(); // get store

  const preparingPDFBackpack = ref(false)

  const logout = () => {
    store.logout()
  }

  const GetAssertionStatus = async () => {
    console.log('hey')
    if (store.assertionData.badgeStatus == 'revoked' || store.assertionData.badgeStatus == 'expired') {
      return true;
    }
    return false;
  }

  const sendDownloadBackpackRequest = async () => {

    preparingPDFBackpack.value = true;
    await downloadBackpack();
    preparingPDFBackpack.value = false;
  }

  const downloadBadge = async () => {

    if (store.assertionData.badgeStatus == 'revoked' || store.assertionData.badgeStatus == 'expired') {
      return;
    }

  try {
    // const url = `${import.meta.env.VITE_APP_API_BASE_URL}/api/bakeBadge?emissionData=${encodeURIComponent(JSON.stringify(store.assertionData))}&imageUrl=${encodeURIComponent(badgeImageUrl.value)}`;

    const url = `${store.project.api}/api/bakeBadge?emissionData=${encodeURIComponent(JSON.stringify(store.assertionData))}&imageUrl=${encodeURIComponent(badgeImageUrl.value)}`;

    //console.log('Sending request to:', url);
    
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const urlObject = window.URL.createObjectURL(blob);

    // Detect if the user is using Firefox
    const browser = Bowser.getParser(window.navigator.userAgent);
    const isFirefox = browser.getBrowserName() == 'Firefox';

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = urlObject;
    link.download = `assertion-${store.assertionData.uid}.png`;

    if (isFirefox) {
      // If Firefox, open in a new tab
      // link.target = '_blank';
      // link.download = '';

      let tab = window.open();
      tab.location.href = urlObject;

    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  } catch (error) {
    console.error('An error occurred while downloading the badge:', error);
  }
}

const imgUrl = ref('');
const badgeImageLoaded = ref(false);

  onMounted(async () => {
    // If user is already signed in, earn the badge
    if (store.user) {
      try {
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
            earnBadge(store.projectId);
            
          })
          .catch(error => {
            // Handle errors, you might want to log them or display a user-friendly message
            console.log('There was a problem with the fetch operation:', error.message);
         });
    // launchConfettis();
  }, 2000)

      } catch (error) {
        console.error('An error occurred while earning badge:', error);
      }
    }
  });
  </script>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-theme-overlays-gradient);
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
    /* min-height: 533px; */  
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

.content .badge-infos button {
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

.content .badge-infos button:hover {
    background: var(--color-theme-button-hover);
    border-color: var(--color-theme-button-hover);
}

.content .badge-infos button:disabled{
    background: var(--color-theme-button-disabled);
    border-color: var(--color-theme-button-disabled);
    cursor:not-allowed;
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

  .landing-spin i {
    color: #c1c9d2;
/*     font-size: 24px;
 */}

 .preparing-backpack-spin {
  color: #c1c9d2;
  display: flex;
  justify-content: center;
  align-content: center;
 }

 .revoked {
    filter: grayscale(100%); /* Grayscale effect to indicate revoked */
    opacity: 0.1; /* Optional: Lower the opacity to make it seem faded */
    animation: oscillateOpacity 2s infinite;
}

.fa-triangle-exclamation {
    position: absolute;
    font-size: 50px; /* Adjust size as required */
    color:#0f0f10; /* #50758f; */
    top: 225px !important;
    z-index: 10; /* Ensure the icon is on top */
}

@keyframes oscillateOpacity {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.08;
  }
  100% {
    opacity: 0.2;
  }
}

.dark-overlay{
z-index:20;
    position: absolute;
    background: var(--color-theme-overlays-gradient);
    left:0;
    width: 800px;
    /* height: 533px;  */
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

.preparing-msg {
  color: white;
  font-size: 16px;
  margin-top: 30px;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}


.badge-informations {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  font-size: 12px;
  margin-left: 2px;
  margin-bottom: 8px;
  color:#c1c9d2;
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

@keyframes bounceIn {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

.badge-status-icon {
    filter: none;
    opacity: 1;
    animation: bounceIn 1s;
}

</style>
  