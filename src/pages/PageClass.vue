<template>

    <!-- Banner -->
    <div class=" h-[250px] w-full sm:h-[370px]  overflow-hidden bg-white">
        <img class=" w-full h-full object-cover bg-center bg-no-repeat   " src="/src/assets/images/Page.jpg" alt="">
    </div>

    <!-- Content -->
    <div class=" grid sm:w-full grid-cols-1 sm:px-24 w-[90%] pt-[72px] mx-auto">
        <!-- Logo -->
        <div class="text-[32px]">
            <font-awesome-icon class=" text-[#1C1C1C]" :icon="['fas', 'book']" />
            <span class="font-bold">
                Wiki/Page
            </span>
        </div>
        <!-- About -->
        <div class="text-2xl">Your Sample Base Page</div>
        <div class="mt-2">
            <div class="text-[19px]">Have you explored Google Spaces for internal communications?</div>
            <div class="text-[19px]">Set up your teams for success and foster collaboration.</div>
        </div>

        <div class="sm:flex  justify-between text-center pt-[62px] ">
            <div class=" flex flex-col py-4" v-for="item in listDataIcon" :key="item.id">
                <font-awesome-icon class="text-[40px]" :icon="item.icon" />
                <span class="mt-2 text-[19px]">
                    {{ item.title }}
                </span>
            </div>
        </div>
        
        <div class="pt-[92px] grid sm:grid-cols-2 grid-cols-1 px-3 text-[19px] gap-7 leading-9">
            <div>
                <span class="font-bold text-lg block">
                    Mission & Vision
                </span>
                <span class="block mt-2" >
                    You can use spaces or group conversations in Google Chat to <br> communicate with one or more people.
                </span>
                <ul class="list-square pl-5">
                    <li >
                        Spaces: A central place where people can share files, assign tasks, and stay connected.
                    </li>
                    <li>
                        Group conversations: Chat directly with a group. For example, <br> use group conversations to have a quick discussion after a meeting.
                    </li>
                </ul>
                <span>
                    Tip: Group conversations aren’t threaded.
                </span>
            </div>
            <div>
                <div>
                <span class="font-bold text-lg block">
                    Five Year Plan Aligned Goals
                </span>
                <span class="block mt-2" >
                    Collaborate on long-term projects with teams or specific <br> groups. 
                </span>
                <ul class="list-square pl-5">
                    <li >
                        History is on by default and kept based on your organization’s policy. 
                    </li>
                    <li>
                        If you use a work or school Google Account, the administrator may turn history on or off. 
                    </li>
                </ul>
                <span>
                    When history is:
                </span>
                <ul class="list-square pl-5">
                    <li >
                        On: Messages follow your organization's data retention policy. If you use a personal account, messages are kept indefinitely.
                    </li>
                    <li>
                        Off: Messages are removed after 24 hours.
                    </li>
                </ul>
                <span>
                    Tip: Group conversations aren’t threaded.
                </span>
            </div>
            </div>
        </div>
    </div>

    <div class="py-[84px] sm:px-24 sm:grid sm:grid-cols-3 flex flex-col justify-center items-center    bg-[#f9f9f9]">
        <div class="sm:w-full col-span-2 sm:pr-6 leading-8 w-[90%]">
            <span class="text-2xl block">
                Wider Page Content Block
            </span>
            <span class="mt-2 block text-[19px]">
                Google Sites started out as JotSpot, the name and sole product of a software company that offered enterprise social software.[citation needed] It was targeted mainly at small-sized and medium-sized businesses. The company was founded by Joe Kraus and Graham Spencer, co-founders of Excite.
            </span>
            <span class="mt-2 block text-[19px]">
                In February 2006, JotSpot was named part of Business 2.0, "Next Net 25",[1] and in May 2006, it was honored as one of InfoWorld's "15 Start-ups to Watch".[2] In October 2006, JotSpot was acquired by Google.[3] Google announced a prolonged data transition of webpages created using Google Page Creator (also known as "Google Pages") to Google Sites servers in 2007. On February 28, 2008, Google Sites was unveiled using the JotSpot technology.[4] The service was free, but users needed a domain name, which Google offered for $10. However, as of May 21, 2008, Google Sites became available for free, separately from Google Apps, and without the need for a domain.[5]
            </span>
        </div>
        <div class="mt-14 w-full flex flex-col justify-center items-center">
            <div class="sm:w-[380px] sm:h-[300px] h-[204px] w-[90%] border-dashed border-2 border-[#e0e0e0] bg-[#f1f1f1]"></div>
            <span class="px-2 py-3 block text-center text-[16px]">
                Side image small text caption description
            </span>
        </div>    
    </div>

    <div class="sm:w-full sm:px-24  flex flex-col justify-center items-center  pb-[76px] bg-[#f9f9f9] ">   
            <div class="sm:w-full w-[90%]">
                <div class="sm:w-[783px] sm:h-[407px]  h-[304px] border-dashed border-2 border-[#e0e0e0] bg-[#f1f1f1]"></div>
            <div class="sm:w-[783px] px-2 pt-10">
                <span class="mt-2 block text-[19px]">
                In June 2016, Google introduced a complete rebuild of the Google Sites platform, named the New Google Sites,[6][7] along with transition schedule from Classic Google Sites.[8] The new Google Sites does not use JotSpot technology.
            </span>
            <span class="mt-2 block text-[19px]">
                In August 2020, the new Google Sites became the default option for website creation, while in November 2021, all websites made with classic Google Sites were archived.[9]
            </span>
            </div>
            </div>
    </div>
</template>
<style >

</style>
<script setup>
import { icon } from '@fortawesome/fontawesome-svg-core';
import { ref } from 'vue';


const listDataIcon =ref([
    {
        id:1,
        icon: ['far', 'folder-open'],
        title: 'Open Google Drive Folder',
    },
    {
        id:2,
        icon: ['fas', 'film'],
        title: 'Watch a Tutorial Video',
    },
    {
        id:3,
        icon:['fas', 'earth-americas'],
        title: 'View Maps & Local Amenities',
    },
    {
        id:4,
        icon: ['fas', 'egg'] ,
        title: 'Learn How to Get Started',
    },
    
]);

// const listMenu = ref([
//     {
//         id:1,
//         name:'Mission & Vision',
        
//         itemArr:[
//             {
//                 id:1,
//                 title:'You can use spaces or group conversations in Google Chat to <br> communicate with one or more people.',
//                 subTitle:[
//                     {
//                         id:1,
//                         subTitleItem:'Spaces: A central place where people can share files, assign tasks, and stay connected.',
//                     },
//                     {
//                         id:2,
//                         subTitleItem:'Group conversations: Chat directly with a group. For example, use group conversations to have a quick discussion after a meeting.',
//                     },
//                 ],
//             }
//         ]
//     },
//     {
//         id:2,
//         name:'Five Year Plan Aligned Goals',
//         itemArr:[
//             {
//                 id:1,
//                 title:'Collaborate on long-term projects with teams or specific groups. ',
//                 subTitle:[
//                     {
//                         id:1,
//                         subTitleItem:'History is on by default and kept based on your organization’s policy.',
//                     },
//                     {
//                         id:2,
//                         subTitleItem:'If you use a work or school Google Account, the administrator may turn history on or off.',
//                     },
//                 ],
//             }
//         ],
//         itemArr:[
//             {
//                 id:2,
//                 title:'When history is:',
//                 subTitle:[
//                     {
//                         id:1,
//                         subTitleItem:"On: Messages follow your organization's data retention policy. If you use a personal account, messages are kept indefinitely.",
//                     },
//                     {
//                         id:2,
//                         subTitleItem:'Off: Messages are removed after 24 hours.',
//                     },
//                 ],
//             }
//         ],
       
//     },
   

// ])
 </script> 