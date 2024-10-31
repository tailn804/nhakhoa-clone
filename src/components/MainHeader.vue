<template>
  <div v-if="!isMenuOpen" class="w-full h-[56px] flex  items-center fixed z-30 bg-[#1C1C1C]">

    <div class="flex justify-between items-center px-5 w-full text-white text-xl ">
      <div class="flex items-center gap-4 ">

        <!-- Button Menu Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </div>
        <!-- Logo -->
        <div>
          <router-link to="/">
            <span>Sites.wiki</span>
          </router-link>
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
          <button @click="toggleSearch"> <font-awesome-icon class="text-[18px]" :icon="['fas', 'magnifying-glass']" /></button>
      </div>
    </div>     
  </div>

  <!-- Over lay Input Search -->
  <div v-if="showSearch" @click="toggleSearch" class="fixed  inset-0 bg-black opacity-40  flex justify-center items-center">
  </div>
  <!-- SideBar Search -->
  <div v-if="showSearch">
      <div class="  fixed justify-center top-0 left-0 right-0 flex bg-[#eeeeee] z-30 py-[14px] shadow-lg w-full ">
        <button v-if="!isMobile" class="w-[48px] h-[48px]" @click="toggleSearch">
          <font-awesome-icon class="ml-5 w-[18px] h-[18px] font-thin" :icon="['fas', 'arrow-left']" />
        </button>
      <div class=" w-[414px] flex justify-center items-center mx-auto sm:w-full ">
        <div class=" flex w-[683px]  bg-white rounded">
          <button  v-if="isMobile" class="w-[48px] h-[48px]" @click="toggleSearch">
          <font-awesome-icon class="ml-5 w-[18px] h-[18px] font-thin" :icon="['fas', 'arrow-left']" />
        </button>
          <button v-else class=" h-[48px] w-[48px] ">
            <font-awesome-icon  :icon="['fas', 'magnifying-glass']" />
          </button>
          <input ref="searchInput" v-model="searchQuery" placeholder="Search this site" class="rounded pl-3 w-full p2 text-base outline-none" type="search"/>
        </div>

      </div>
    </div>

  </div>

  <!-- Sidebar Overlay -->
  <div v-if="isMenuOpen">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 z-0" @click="toggleMenu">
    </div>
    
  </div>
  <!-- Sidebar move slide left -->
  <div class=" fixed top-0 left-0 w-[200px] h-full bg-[#1C1C1C] p-5 transform transition-transform ease-in-out duration-500"
    :class="{'-translate-x-full' : !isMenuOpen, 'translate-x-0' : isMenuOpen}"
    >
      <button @click="toggleMenu" class=" text-white text-2xl mb-4 ">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>

      <div class="flex flex-col gap-4">
        <template v-for="item in menuData" :key="item.id">
          <router-link :to="item.link" class="text-white no-underline hover:text-gray-400" @click="handleLinkClick" replace="">
            <span>{{ item.title }}</span>
          </router-link>
        </template>
      </div>
    </div>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted, ref} from 'vue';
import HomePage from '@/pages/HomePage.vue';
import { Input, Button } from 'ant-design-vue';

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

// Variable check mobile
const isMobile = ref(window.innerWidth <= 768)

// Manage Status 
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
// Check size window
const handleResize = () =>{
  isMenuOpen.value = window.innerWidth >= 768? false : isMenuOpen.value;
  isMobile.value = window.innerWidth <= 768;
}

const handleLinkClick = () =>{
  console.log('linked')
  isMenuOpen.value = false;
}
// Add handle
onMounted(()=>{
  window.addEventListener('resize',handleResize);
})
// Remove handle
onUnmounted(() => {
  window.removeEventListener('resize',handleResize);
})

const showSearch = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)

const toggleSearch = ()=>{
  showSearch.value = !showSearch.value
  if(showSearch.value){
    nextTick(()=>{
      searchInput.value?.focus()
    })
  }
}

const handleSearch = () =>{
  console.log("Searching " , searchQuery.value)
  showSearch.value = false
  
}

</script>