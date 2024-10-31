
<template>
  
    <MainHeader class="pt-[56px]" />
  
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
