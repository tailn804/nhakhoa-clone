<template>
  <div v-if="!isMenuOpen" class="w-full fixed z-30 bg-[#1C1C1C]">

    <div class="flex justify-between items-center p-5 text-white text-xl ">
      <div class="flex items-center gap-4 ">

        <!-- Button Menu Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </div>
        <!-- Logo -->
        <div>
          <span>Sites.wiki</span>
        </div>
      </div>

      <!-- Button Search Menu Right -->
      <div class="flex items-center gap-4">
        <!-- Item Menu Hidden  -->
        <div class="hidden sm:flex flex-row gap-5 justify-center items-center">
            <template v-for="item in menuData" :key="item.id">
              <router-link :to="item.link" class="text-white no-underline hover:text-gray-400">
                <span>{{item.title}}</span>
              </router-link>
            </template>
          </div>
          <!-- Button Search -->
          <button> <font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
      </div>
    </div>     
  </div>

  <!-- Sidebar Overlay -->
  <div v-if="isMenuOpen">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 z-20" @click="toggleMenu">
    </div>
    
  </div>
  <!-- Sidebar move slide left -->
  <div class="fixed top-0 left-0 w-[200px] h-full bg-[#1C1C1C] p-5 transform transition-transform ease-in-out duration-500"
    :class="{'-translate-x-full' : !isMenuOpen, 'translate-x-0' : isMenuOpen}"
    >
      <button @click="toggleMenu" class=" text-white text-2xl mb-4 ">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>

      <div class="flex flex-col gap-4">
        <template v-for="item in menuData" :key="item.id">
          <router-link :to="item.link" class="text-white no-underline hover:text-gray-400" @click="toggleMenu">
            <span>{{ item.title }}</span>
          </router-link>
        </template>
      </div>
    </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

const menuData = ref([
  {
    id: 1,
    link: '/',
    title: 'Wiki'
  },
  {
    id: 2,
    link: '/classic',
    title: 'Class Wiki'
  },
  {
    id: 3,
    link: '/article',
    title: 'Article'
  },
  {
    id: 4,
    link: '/page',
    title: 'Page'
  },
  {
    id: 5,
    link: '/tasks',
    title: 'Tasks'
  },

])
// Status close / open Menu
const isMenuOpen = ref(false);
// Manage Status 
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
// Check size window
const handleResize = () =>{
  if(window.innerWidth >= 768){
    isMenuOpen.value = false;
  }
}
// Add handle
onMounted(()=>{
  window.addEventListener('resize',handleResize);
})
// Remove handle
onUnmounted(() => {
  window.removeEventListener('resize',handleResize);
})

</script>