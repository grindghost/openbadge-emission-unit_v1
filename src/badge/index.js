import { ref } from 'vue';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useUserStore } from '@/store'

const store = useUserStore(); // get store

export const loading = ref(false);
export const message = ref('');
export const badgeImageUrl = ref('');
export const emissionDate = ref('');

const earnBadge = async (projectId) => {
  loading.value = true;
  message.value = '';
  badgeImageUrl.value = '';
  emissionDate.value = '';

  const auth = getAuth();
  const user = auth.currentUser;
  const token = await user.getIdToken();

  try {
    // https://ulaval-openbadge-api-v1.cyclic.cloud
    // const result = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/api/createBadgeAssertion`, { projectId }, { headers: { Authorization: `Bearer ${token}` }});

    const result = await axios.post(`${store.project.api}/api/createBadgeAssertion`, { projectId }, { headers: { Authorization: `Bearer ${token}` }});

    // If the function executed successfully, the badge was earned.
    message.value = '<strong>Vous avez gagné ce badge!</strong> Vous pouvez le télécharger en cliquant sur le bouton ci-dessous. Une preuve de son obtention peut également être trouvée dans la version PDF de votre sac à dos académique.';
    emissionDate.value = result.data.assertion.issuedOn;
    badgeImageUrl.value = result.data.badgeImageUrl;
    store.assertionData = result.data.assertion;

  } catch (error) {
    // If the function threw an error, handle it based on the error code.
    if (error.response) {
      if (error.response.status === 409) {
        message.value = '<strong>Vous avez déjà gagné ce badge.</strong> Vous pouvez le télécharger à nouveau en cliquant sur le bouton ci-dessous. Une preuve de son obtention peut également être trouvée dans la version PDF de votre sac à dos académique.';
        emissionDate.value = error.response.data.assertion.issuedOn;
        badgeImageUrl.value = error.response.data.badgeImageUrl;
        store.assertionData = error.response.data.assertion;

      } else if (error.response.status === 403) {

        const reason = error.response.data.assertion.revocationDetails.reason;

        if (reason == 'expired') {
          message.value = '<strong>Vous avez déjà gagné ce badge</strong>, mais sa période de validité a atteint son terme. Une trace de son obtention peut être trouvée dans la version PDF de votre sac à dos académique, témoignant ainsi de vos accomplissements antérieurs.'; 
        } else {
          message.value = '<strong>Vous avez déjà gagné ce badge</strong>, mais il a été révoqué. Une trace de son obtention peut être trouvée dans la version PDF de votre sac à dos académique, témoignant ainsi de vos accomplissements antérieurs.';
        }
        emissionDate.value = error.response.data.assertion.issuedOn;
        badgeImageUrl.value = error.response.data.badgeImageUrl;
        store.assertionData = error.response.data.assertion;
        store.assertionData.badgeStatus = 'revoked';
      
      } else if (error.response.status === 410) {
        message.value = 'This badge has expired.';
        emissionDate.value = error.response.data.assertion.issuedOn;
        badgeImageUrl.value = error.response.data.badgeImageUrl;
        store.assertionData = error.response.data.assertion;
    } else {
        message.value = 'An error occurred. Please try again.';
      }
    } else {
      console.error('An error occurred while earning badge:', error);
      message.value = 'An error occurred. Please try again.';
    }
  } finally {
    loading.value = false;
  }
};



export default earnBadge;

