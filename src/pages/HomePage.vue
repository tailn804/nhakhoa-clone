<template>
  <div class="w-full h-auto bg-white pt-32">
    <div class="max-w-3xl mx-auto container flex flex-col items-start px-36">
      <div >
        <div class="">
          <span class="font-sans text-3xl">📚</span>
        </div>
        <div class="pt-2">
          <span>Sites.wiki</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>
            Minimalist wiki template powered by Google Sites for your company intranet included in Google Workspace.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const dataCategories = ref([
    {
      id: 1,
      title: 'Top Wiki Pages',
      items: [
        {
        name:'Announcements', icon: '⭐️', url:'',
        },
        {
        name:'Company Directory', icon: '💎', url:'',
        },
        {
        name:'Instant Messaging', icon: '💬', url:'',
        },
        {
        name:'Customer Service', icon: '📞', url:'',
        },
    ]
    },
    {
      id: 2,
      title: 'New Employees',
      items: [
        {
        name:'Onboarding', icon: '🏄‍♀️', url:'',
        },
        {
        name:'Glossary', icon: '📋', url:'',
        },
        {
        name:'FAQ', icon: '🌿', url:'',
        },
        {
        name:'Training', icon: '', url:'',
        },
    ]
    },
    {
      id: 3,
      title: 'Extras',
      items: [
        {
        name:'Scheduling', icon: '⌚', url:'',
        },
        {
        name:'Support', icon: '🌈', url:'',
        },
        {
        name:'Pay Stubs', icon: '🎫', url:'',
        },
    ]
    },
    {
      id: 4,
      title: 'News & Updates',
      items: [
        {
        name:'Employee Feedback', icon: '🥳', url:'',
        },
        {
        name:'Calendars', icon: '🗓', url:'',
        },
        {
        name:'Health & Safety', icon: '🌸', url:'',
        },
    ]
    },
    {
      id: 5,
      title: 'Documents',
      items: [
        {
        name:'HR Forms', icon: '📁', url:'',
        },
        {
        name:'Social ', icon: '🔮', url:'',
        },
        {
        name:'Network', icon: '🕸', url:'',
        },
        {
        name:'Event', icon: '🐠', url:'',
        },
    ]
    },
    {
      id: 6,
      title: 'Social Platforms',
      items: [
        {
        name:'Professional Dev', icon: '🖤', url:'',
        },
        {
        name:'From the CEO', icon: '📣', url:'',
        },
        {
        name:'Learning System', icon: '🌞', url:'',
        },
    ]
    },
  ])
</script>