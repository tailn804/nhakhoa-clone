<template>
  <div class="w-full fixed z-30 bg-[#1C1C1C]">
    <div class="flex justify-between items-center p-5 text-white text-xl ">
      <div>
        <span>Sites.wiki</span>
      </div>
      <div class="flex flex-row gap-5 justify-center items-center">
        <template v-for="item in menuData">
          <router-link :to="item.link" class="text-white no-underline hover:text-gray-400">
            <span>{{item.title}}</span>
          </router-link>
        </template>
        <button> <font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

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

</script>