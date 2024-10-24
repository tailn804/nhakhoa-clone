<template>
   <main class="w-full bg-white ">
        <div class=" mx-auto sm:px-12 py-[72px] sm:max-w-[1280px] w-[392px]  ">
            <font-awesome-icon class="text-[32px] block" :icon="['fas', 'hammer']" />
            <span class="font-bold text-[28px] sm:text-[32px] block my-2" >
                Tasks.co
            </span>
            <span class="text-2xl block leading-10">
                Work Assignments
            </span>
           <div class="grid grid-cols-3 leading-8">
            <span class="mt-2 text-[20px] block col-span-2 ">
                Make sure things get done around the office and keep track of who is responsible. This is a sample task type page for sites and everything is drag and drop so you can quickly reorganize.
            </span>
           </div>
            
            <div class="grid sm:grid-cols-3 grid-cols-1 gap-x-4 pt-[72px] ">
                <div class="" v-for="item in listData" :key="item.id">
                    <div class="pt-5 pb-6"  >
                        <font-awesome-icon class="text-[22px] pr-1" :style="{backgroundColor: item.bgColor}" :icon="item.img" />
                        <span class="text-[20px]" :style="{backgroundColor: item.bgColor}">{{ item.name }}</span>
                    </div>
                    
                    <span class="pt-3 text-[20px] font-bold">
                        {{ item.title }}
                    </span>

                    <div class="mt-2 text-[20px]  font-sans">
                        <font-awesome-icon class="mr-2" :icon="item.icon" />
                        <span>{{ item.subtitle }}</span>
                    </div>

                    <span class="mt-2 text-[20px]  font-sans">
                        {{ item.text }}
                    </span>
                </div>
            </div>
           <div class="grid sm:grid-cols-3 grid-cols-1 mt-6 gap-4 justify-items-center  ">
            <div></div>
            <div class="col-span-1" v-for="item in listData1" :key="item.id">
                    
                    <span class="pt-3 text-[20px]  font-bold">
                        {{ item.title }}
                    </span>

                    <div class="mt-2 text-[20px]  font-sans">
                        <font-awesome-icon class="mr-2" :icon="item.icon" />
                        <span>{{ item.subtitle }}</span>
                    </div>

                    <span class="mt-2 text-[20px]  font-sans">
                        {{ item.text }}
                    </span>
            </div>
           </div>
        </div>
        
   </main>

   <div class=" bg-[#f9f9f9]">
            <div class="mx-auto sm:px-12 py-[72px] sm:max-w-[1280px] w-[392px] flex flex-col justify-center ">
                <div class="text-2xl">
                    <font-awesome-icon class="mr-2 " :icon="['fas', 'file']" />
                    <span >Archive of Tasks</span>
                </div>

                <span class="text-[20px] mt-2 block">
                    Collaborate on long-term projects with teams or specific groups. 
                </span>

                <div class="col-span-1" v-for="item in listData2" :key="item.id">
                    <span class="pt-6 text-[20px] block  font-bold">
                        {{ item.title }}
                    </span>

                    <div class="mt-2 text-[20px] font-sans block">
                        <font-awesome-icon class="mr-2" :icon="item.icon" />
                        <span>{{ item.subtitle }}</span>
                    </div>

                    <span class="mt-2 text-[20px]  font-sans block">
                        {{ item.text }}
                    </span>
                </div>
            </div>
        </div>
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
]);

const listData2 = ref([
    {
        id:7,
        name:'',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.'
    },
    {
        id:8,
        name:'',
        title:'Task Title Write Job Descriptions',
        icon:['fas', 'person'],
        subtitle:'Bill Trask',
        text:'If you need a description of the tasks go ahead and write something here or link out.'
    },
])

</script>