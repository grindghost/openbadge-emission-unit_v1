<template>
    <div class="container">
      <input type="checkbox" id="check" v-model="isRegister">
    
        <div class="left-side" @click.self="hideForms">
            <p>Connectez-vous à votre <strong>sac à dos académique</strong> pour authentifier et enregistrer l'émission de votre nouveau badge.</p>
            <!-- Open badge mention -->
            <div class="openbadge-mention">      
                <a id="openbadge-img-link" href="https://openbadges.org/" target="_blank">
                    <img class="openbadge-logo" src="@/assets/openbadge.png"/>
                </a>  
                <!-- Message -->
                <span>Nous émettons des <a href="https://openbadges.org/" target="_blank">Open Badges</a></span>
                </div>
        </div>
        <transition name="tray" mode="out-in">
      <div v-if="store.showForms" class="form-container">
      <!-- Login -->
      <div class="form" v-if="!isRegister">
		<header>
            <img class="bp-logo" src="@/assets/logo-1.svg" alt="">
            Connexion
        </header>
		<form @submit.prevent="login">
		  <input type="text" placeholder="Adresse courriel" v-model="login_form.email">
		  <input type="password" placeholder="Mot de passe" v-model="login_form.password">
		  <!-- You can add logic for forgot password if you want -->
		  <a href="#" @click.prevent="forgotPassword">Mot de passe oublié?</a>
		  <input type="submit" class="button" value="Se connecter" :disabled="!login_form.email || !login_form.password">
		</form>
		<div class="signup">
		  <span class="signup">
		   <label for="check">
        <!-- <img src="@/assets/more.svg" alt=""> -->        
        <MoreIcon />
        Vous n'avez pas de compte?
      </label>
		  </span>
		</div>
	  </div>
	 <!-- Register -->
      <div class="form" v-if="isRegister">
		<header>
            <img class="bp-logo" src="@/assets/logo-1.svg" alt="">
            Créer un compte
        </header>
		<form @submit.prevent="register">
        <div class="register-fields">
        <input type="text" placeholder="Nom" v-model="register_form.name">
        <input type="text" placeholder="Email" v-model="register_form.email">
        </div>
 
        <input type="password" placeholder="Mot de passe" v-model="register_form.password">
		  <!-- This is not supported currently in your logic -->
		  <!-- <input type="password" placeholder="Confirm your password"> -->
          <div class="infos">
            <i class="fas fa-info-circle"></i>
            <!-- <i class="fa-solid fa-triangle-exclamation fa-beat"></i> -->
            <span>Veuillez compléter tous les champs et inscrire une adresse courriel valide.</span> 
          </div>
		  <input type="submit" class="button" value ="Confirmer" :disabled="!register_form.name || !register_form.email || !register_form.password">
            <!--<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
         <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> -->


        </form>
		<div class="signup">
            
		  <span class="signup">


		   <label for="check">
        <!-- <img src="@/assets/more.svg" alt=""> -->        
        <MoreIcon />
        Vous avez déjà un compte?
      </label>
		  </span>
		</div>
	  </div>
    </div>
</transition>
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, onMounted, ref, watchEffect } from 'vue'
  import { useUserStore } from '@/store'
  import MoreIcon from '@/components/MoreIcon.vue';

  
  const store = useUserStore()
  const isRegister = ref(false)
  const login_form = ref({ email: '', password: '' })
  const register_form = ref({ email: '', password: '', name: '' })

  
  const login = async () => {
    await store.login(login_form.value)
 }
  
  const register = async () => {
    await store.register(register_form.value)
  }

  const hideForms = () => {
    store.showForms = false
  }

  const forgotPassword = async () => {
    const email = prompt('Entrez votre adresse courriel:');
    if (email) {
      await store.sendPasswordReset(email);
    }
  }

  watchEffect(() => {
    if (store.formToShow == 'register') {
      isRegister.value = true
    } else {
      isRegister.value = false
    }
  })


  </script>


<style scoped>

.container{
z-index:10;
    position: absolute;
    z-index:10;
    background: var(--color-theme-overlays-gradient);
    left:0;
    width: 800px;
    /* height: 533px;  */
    height: 516px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}

.left-side {
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 50px 40px 40px;
    opacity: 1;
    animation: fade 2s linear;
}

@keyframes fade {
  0% { opacity: 0 }
  50% { opacity: 0 }
  100% { opacity: 1 }
}

.left-side p {
    color: #fff;
    font-family: 'Source Sans 3' !important;
    line-height: 120%;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
}

.left-side p::before {
    background-color: white;
    content: "";
    margin-top: -30px;
    display: block;
    height: 4px;
    left: 38px;
    position: absolute;
    width: 54px;
}

.form-container{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
}

#check:checked ~ .registration{
  display: block;
}
#check:checked ~ .login{
  display: none;
}
#check{
  display: none;
}

.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}

.form form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 38px;
}

.bp-logo{
    width: 280px;
}

.form header{
  font-size: 2rem;
  letter-spacing: -0.02em;
  font-weight: 500;
  text-align: left;
  padding-left: 38px;
  padding-top: 38px;
  margin-bottom: 20px;
}
 .form input{
   height: 54px;
   width: 100%;
   padding: 0 15px;
   font-size: 17px;
   margin-bottom: 14px;
   border: 1px solid #ddd;
   border-radius: 4px;
   outline: none;
 }
 .form input:focus{
   /* box-shadow: 0 1px 0 rgba(0,0,0,0.2); */
    border-color: var(--color-theme-accent);

 }

 .form input::placeholder{
   color: #999;
   font-family: "Source Sans 3";
 }

 .form input:hover::placeholder {
  color: var(--color-theme-accent);
  transition: 0.6s;
}


.form a{
    font-size: 15px;
    font-style: normal;
    font-family: 'Source Sans 3';
    line-height: 16px;
    color: var(--color-theme-accent);
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
}
.form a:hover{
  text-decoration: underline;
}
.form input.button{
    width: fit-content;
    height: 50px;
    padding-top: 2px;
    border: 1px solid var(--color-theme-button);
    border-radius: 4px;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    background: var(--color-theme-button);
    border-color: var(--color-theme-button);
    color: #fff;
    transition: 0.4s;
    margin-top: auto;
    margin-bottom: 0px;
}

.form input.button:disabled{
    background: var(--color-theme-button-disabled);
    border-color: var(--color-theme-button-disabled);
    cursor:not-allowed;
}

.form input.button:active:hover:not([disabled]){
    background: var(--color-theme-button-hover);
    border-color: var(--color-theme-button-hover);
}
.signup{
    width: 100%;
    min-height: 70px;
    max-height: 70px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    background-color: #f4f6f8;
    margin-top: auto;
    padding-left: 10px;
}

.signup img {
    width: 23px;
}
.signup label{
    font-size: 15px;
    font-style: normal;
    font-family: 'Source Sans 3';
    line-height: 16px;
    color: var(--color-theme-accent);
    font-weight: 500;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.signup label:hover{
  text-decoration: underline;
}

.register-fields{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}

.infos {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-left: 6px;
}

.infos i {
    color: var(--color-theme-button-disabled);
    font-size: 24px;
}

.infos span {
    max-width: 80%;
    font-family: 'Source Sans 3';
    font-weight: 300;
    font-size: 13px;
    line-height: 116%;
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
    color: white;
    font-size: 15px;
    font-family: 'Source Sans 3';
    font-weight: 500;
    line-height: 124%;
  }

  .openbadge-mention span a {
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
  }

.tray-enter-from,
.tray-leave-to { 
    opacity: 0;
    transform: translateX(100%); 
}

.tray-leave,
.tray-enter-to { 
    opacity: 1;
    transform: translateX(0%); 
 }

.tray-enter-active,
.tray-leave-active { 
    transition: transform 1s ease, opacity 1s ease; 
}

</style>