<template>
  <div class=" h-full pt-[72px] sm:h-auto bg-white pb-12 grid grid-cols-1 sm:px-4  w-full " >
    <div class="sm:max-w-3xl mx-auto container flex flex-col justify-center items-center pt-16 ">
      <div class="sm:px-2 sm:py-3 w-[90%] sm:w-full " >
        <!-- About -->
        <div>
          <font-awesome-icon class="text-3xl" :icon="['fas', 'book']" />
          <!-- <span class="font-sans text-3xl">📚</span> -->
        </div>
        <div class="mt-2">
          <span class="font-bold text-3xl">Sites.wiki</span>
        </div>
        <div class="mt-2">
          <span class="font-normal text-2xl">About</span>
        </div>
        <div class="mt-2">
          <span class=" text-lg">
            Minimalist wiki template powered by Google Sites for your company <br> 
            intranet included in Google Workspace.
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="sm:grid sm:grid-cols-2 sm:px-2 mt-10 py-3 w-full flex flex-col justify-center items-center">
        <div class="sm:w-full w-[276px]" v-for="category in dataCategories" :key="category.id">
          <div class="border-bottom py-2 sm:w-[75%]">
            <span class="leading-8 font-bold text-lg">
            {{ category.title }}
          </span>
          </div>
          <div class="py-[14px] px-2">
            <div class="my-3" v-for="item in category.items" :key="item.name">
            <router-link class="text-xl" :to="item.url">
              <font-awesome-icon class="mr-2" :icon="item.icon" />
              <span class="text-lg">{{ item.name }}</span>
            </router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    isMenuOpen:{
      type: Boolean,
      default: false,
    }
  })

  const dataCategories = ref([
    {
      id: 1,
      title: 'Top Wiki Pages',
      items: [
        {
        name:'Announcements', icon: ['far', 'star'], url:'',
        },
        {
        name:'Company Directory', icon: ['far', 'gem'], url:'',
        },
        {
        name:'Instant Messaging', icon: ['far', 'comment-dots'], url:'',
        },
        {
        name:'Customer Service', icon: ['fas', 'phone'], url:'',
        },
    ]
    },
    {
      id: 2,
      title: 'New Employees',
      items: [
        {
        name:'Onboarding', icon: ['fas', 'person-snowboarding'], url:'',
        },
        {
        name:'Glossary', icon: ['fas', 'book-medical'], url:'',
        },
        {
        name:'FAQ', icon: ['fas', 'clipboard-question'], url:'',
        },
        {
        name:'Training', icon: ['far', 'circle'], url:'',
        },
    ]
    },
    {
      id: 3,
      title: 'Extras',
      items: [
        {
        name:'Scheduling', icon: ['far', 'clock'], url:'',
        },
        {
        name:'Support', icon: ['fas', 'rainbow'], url:'',
        },
        {
        name:'Pay Stubs', icon: ['fas', 'truck'], url:'',
        },
    ]
    },
    {
      id: 4,
      title: 'News & Updates',
      items: [
        {
        name:'Employee Feedback', icon: ['far', 'face-smile'], url:'',
        },
        {
        name:'Calendars', icon: ['far', 'calendar'], url:'',
        },
        {
        name:'Health & Safety', icon: ['fas', 'shield'], url:'',
        },
    ]
    },
    {
      id: 5,
      title: 'Documents',
      items: [
        {
        name:'HR Forms', icon: ['far', 'folder-open'], url:'',
        },
        {
        name:'Social ', icon: ['far', 'lightbulb'], url:'',
        },
        {
        name:'Network', icon: ['fas', 'network-wired'], url:'',
        },
        {
        name:'Event', icon: ['fas', 'fish'], url:'',
        },
    ]
    },
    {
      id: 6,
      title: 'Social Platforms',
      items: [
        {
        name:'Professional Dev', icon: ['fas', 'heart'], url:'',
        },
        {
        name:'From the CEO', icon: ['fas', 'bullhorn'], url:'',
        },
        {
        name:'Learning System', icon: ['fas', 'sun'], url:'',
        },
    ]
    },
  ])

  
</script>

<style scoped>
.border-bottom{
  border-bottom: 1px solid black;
}
</style>