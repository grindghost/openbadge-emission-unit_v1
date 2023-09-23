<template>
    <div v-if="isVisible" :class="['status-icon', status]" @click="handleClick">
      <i :class="getIconClass()"></i>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, onMounted } from 'vue';
  const isVisible = ref(false);

  const { status } = defineProps(['status']);
  
  const getIconClass = () => {
  switch (status) {
    case 'new':
      return 'fa fa-star';
    case 'existing':
      return 'fa-solid fa-lock';
    case 'revoked':
      return 'fa-solid fa-xmark';
    default:
      return '';
  }
};
  
  const handleClick = () => {
    // Handle click event if necessary
  };

  onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 2000); // Adjust the timeout as needed
});
  
  </script>

  <style scoped>

  .status-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 163px;
    left: 40px;
    animation: bounceIn 1s;
    font-size: 16px;
    color: white;

  }
  
  .status-icon.new {
    background-color: rgb(0, 189, 116);
  }
  
  .status-icon.existing {
    background-color: var(--color-theme-accent)
  }
  
  .status-icon.revoked {
    background-color: red;
  }
  
  @keyframes bounceIn {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Font Awesome Icons */
  .status-icon i {
    color: white;
    font-size: 20px;
  }
  </style>
  