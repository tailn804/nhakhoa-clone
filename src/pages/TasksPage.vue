<template>
   <main class="w-full bg-white">
        <div class=" mx-auto px-9 py-[72px] max-w-[1280px]">
            <font-awesome-icon class="text-[32px] block" :icon="['fas', 'hammer']" />
            <span class="font-bold text-[32px] block" >
                Tasks.co
            </span>
            <span class="text-2xl block">
                Work Assignments
            </span>
            <span class="mt-2 text-[19px] block">
                Make sure things get done around the office and keep track of who is responsible. This is a sample task type page for sites and everything is drag and drop so you can quickly reorganize.
            </span>
            
            <div class="grid grid-cols-3 gap-x-4 ">
                <div class="" v-for="item in listData" :key="item.id">
                    <div class="py-3" >
                        <font-awesome-icon class="text-[22px] mr-1" :icon="item.img" />
                        <span class="text-[19px]">{{ item.name }}</span>
                    </div>
                    
                    <span class="pt-3 text-[19px]">
                        {{ item.title }}
                    </span>

                    <div class="mt-2">
                        <font-awesome-icon :icon="item.icon" />
                        <span>{{ item.subtitle }}</span>
                    </div>

                    <span class="mt-2">
                        {{ item.text }}
                    </span>
                </div>
            </div>
           <div class="flex flex-row justify-center space-x-4">
            <div class="w-1/3" v-for="item in listData1" :key="item.id">
                    
                    <span class="pt-3 text-[19px]">
                        {{ item.title }}
                    </span>

                    <div class="mt-2">
                        <font-awesome-icon :icon="item.icon" />
                        <span>{{ item.subtitle }}</span>
                    </div>

                    <span class="mt-2">
                        {{ item.text }}
                    </span>
            </div>
           </div>
        </div>
   </main>
</template>
<script setup>
import { icon } from '@fortawesome/fontawesome-svg-core';
import { ref } from 'vue';

const listData = ref([
    {
        id:1,
        bgColor: '#f4cccc',
        name:'Not Started',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.',
        img:['fas', 'stop'],
    },
    {
        id:2,
        bgColor: '#fff2cc',
        name:'In Progress',
        title:'Task Title Write Job Descriptions',
        icon: ['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.',
        img:['fas', 'user-nurse'],
    },
    {
        id:3,
        bgColor: '#d9ead3',
        name:'Completed',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.',
        img:['fas', 'tree'],
    },
    {
        id:4,
        name:'',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.'
    },
    {
        id:5,
        name:'',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.'
    },
   
]);
const listData1 = ref([
{
        id:6,
        name:'',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.'
    },
])
</script>