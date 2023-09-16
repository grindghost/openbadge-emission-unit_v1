<template>
<div class="landing-container fade-in" v-if="isLoading">
  <div class="wrapper-alternate">
    <!-- Replace this with your actual loading spinner -->
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
  </div>

</div>
  <div v-on:contextmenu.prevent :class="`theme-${computedTheme}`" v-else>
    <router-view/>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue'
import { useUserStore } from '@/store'

const store = useUserStore()

const user = computed(() => store.user)
const isLoading = computed(() => store.isLoading)
const isVerifyingEmail = computed(() => store.isVerifyingEmail) // Add this line

const computedTheme = computed(() => {
  if (
    store.project.theme == "brio" ||
    store.project.theme == "ul-yellow" ||
    store.project.theme == "ul-red"
  ) {
    // return the actual theme
    return store.project.theme;
  } else {
    // return the default theme, with accent color
    const root = document.documentElement;
    root.style.setProperty("--color-theme", store.project.theme);
    root.style.setProperty("--color-theme-light", store.project.theme);
    root.style.setProperty("--color-theme-accent", store.project.theme);
    root.style.setProperty("--color-theme-button", store.project.theme);
    root.style.setProperty("--color-theme-button-hover", store.project.theme);
    return "default";
    // ...
  }
});

onBeforeMount(() => {
  //store.fetchUser()
  setTimeout(() => {
    store.fetchPublicConfigs()
  }, 1000)

})

const logout = () => {
  store.logout()
}
</script>

<style scoped>


.landing-container {
    background-color: white;
    width: 800px;
    /* height: 533px; */
    height: 516px;
    min-width: 800px;
    /* min-height: 533px;  */ 
    min-height: 516px;
    /* padding: 10px; */
    padding: 2px 2px 1px 2px; 
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
    box-shadow: 0 0 2px 1px rgba(5,20,36,.25);
}

.fade-in {
    animation: fade-in 1s linear;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  i {
    color: #c1c9d2;
/*     font-size: 24px;
 */}

</style>

