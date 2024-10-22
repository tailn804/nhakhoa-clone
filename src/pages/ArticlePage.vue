<template>
    <div class=" w-full h-auto bg-white pb-12">
        <div class=" mx-auto max-w-3xl container flex flex-col py-4 pt-16 items-start">
            <div class="px-2 py-3">
                <div>
                    <font-awesome-icon class="text-3xl" :icon="['fas', 'book']" />
                </div>
                <div class="mt-2" >
                    <span class="font-bold text-3xl">
                        Sites.wiki
                    </span>
                </div>
                <div class="mt-2 text-2xl">
                    <span>
                        Spaces
                    </span>
                </div>
                <div class="mt-2 text-lg">
                    <span>
                        Have you explored Google Spaces for internal communications? Set up your teams for success and foster collaboration.
                    </span>
                </div>
            </div>
            <div class="h-7"></div>
            <div class="px-3">
                <div class=" my-4">
                    <img class="w-auto h-[250px] bg-contain" src="/src/assets/images/Space.png" alt="">
                </div>
                <div class="h-5"></div>
                <div class="px-2 py-3 ">
                    <p class="text-[19px] font-bold block">
                        Purpose
                    </p>
                    <span class="mt-2 block text-xl font-thin" >
                        You can use spaces or group conversations in Google Chat to communicate <br> with one or more people.
                    </span>
                    <ul class="mt-[6px] list-square pl-5">
                        <li class=" text-xl font-thin"  >
                            Spaces: A central place where people can share files, assign tasks, and <br>stay connected.
                        </li>
                        <li class=" text-xl font-thin" >
                            Group conversations: Chat directly with a group. For example, use group <br> conversations to have a quick discussion after a meeting.
                        </li>
                    </ul>
                    <span class="mt-2 block text-xl font-thin" >
                        Tip: Group conversations aren’t threaded.
                    </span>
                </div>
            </div>
        </div>
        
    </div>
    <div class="bg-white ">
        <div class=" mx-auto  container flex   pl-60  pt-16 items-start">
            <div class="px-2 py-3 leading-8 ">
                    <p class="text-[19px] font-bold block">
                        Message History
                    </p>
                    <span class="mt-2 block text-[20px] font-thin" >
                        Collaborate on long-term projects with teams or specific groups. 
                    </span>
                    <span class="mt-2 block text-[20px] font-thin" >
                        History is on by default and kept based on your organization’s policy. 
                    </span>
                    <span class="mt-2 block text-[20px] font-thin" >
                        If you use a work or school Google Account, the administrator may turn <br> history on or off. 
                    </span>
                    <span class="mt-2 block text-[20px] font-thin" >
                        When history is:
                    </span>
                    <ul class="mt-[6px]   list-square pl-5">
                        <li class=" text-[20px] font-thin"  >
                            On: Messages follow your organization's data retention policy. If you use <br> a personal account, messages are kept indefinitely.
                        </li>
                        <li class=" text-[20px] font-thin" >
                            Off: Messages are removed after 24 hours.
                        </li>
                    </ul>
            </div>
            <div class=" ml-4">
                <img class="px-3 w-full h-[224px] bg-cover" src="/src/assets/images/Message.jpg" alt="">
                <div class="px-2 py-3 text-center " >
                    <span class=" !leading-6 ">
                        Picture caption option with a short <br> description of image
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { text } from '@fortawesome/fontawesome-svg-core';
import { ref } from 'vue';


</script>