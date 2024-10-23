
<template>
  
    <MainHeader class="pt-[68px]" />
    <div class="h-[68px]"></div>
    <div>
      <RouterView />
    </div>
    <MainFooter />
  
</template>


<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<style scoped>

</style>
