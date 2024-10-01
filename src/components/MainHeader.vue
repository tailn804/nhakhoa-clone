<template>
    <div class="bg-blue-300 w-full">
        <header class="flex justify-between mx-auto container bg-white">
           <router-link to="/" class="no-underline">
            <div class="flex p-2">
                <img class="w-20 h-14" src="https://nhakhoakim.com/wp-content/themes/kimdental-child/assets/images/logo.svg" alt="Logo">
                <h1 class="font-bold ml-3">NHA KHOA KIM</h1>
            </div>
           </router-link>
            <div class="flex flex-row gap-3 items-center mr-3 ">
                <ul class="flex gap-5 list-none">
                    <li>
                      <router-link to="/gioi-thieu" class="no-underline text-base font-medium">
                        Giới thiệu 
                        <DownOutlined class="text-[6px]"/>
                      </router-link>
                    </li>
                    <li><router-link to="/dich-vu" class="no-underline text-base font-medium">
                      Dịch vụ
                      <DownOutlined class="text-[6px]"/>
                    </router-link></li>
                    <li><router-link to="/bang-gia" class="no-underline text-base font-medium">
                      Bảng giá

                    </router-link></li>
                    <li><router-link to="/tin-tuc" class="no-underline text-base font-medium">
                      Tin tức
                      <DownOutlined class="text-[6px]"/>
                    </router-link></li>
                </ul>
                <button class="p-2 border-none bg-red-500 text-white ">ĐẶT HẸN</button>
                <button class="p-2 border-none bg-blue-400 text-white  ">19006899</button>
                <button class="p-2 border-none bg-blue-400 text-white  ">EN</button>
            </div>
        </header>
    </div>
    <div>
      <!-- 
      <template v-for="item in data" :key="item.id">
        <img :src="item.img" :alt="item.title">
        {{ item.title }}
      </template> 
      -->
    </div>
</template>
  
<script setup>
import { DownOutlined } from '@ant-design/icons-vue';

</script>
<!-- <script setup>
import { ref } from 'vue'



const data = ref([
  {
    id: 1,
    title: 'Scook',
    img: 'https://cdn.tgdd.vn/bachhoaxanh/menuheader/-202401091450502576.png'
  },
  {
    id: 2,
    title: 'Gạo, các loại',
    img: 'https://cdn.tgdd.vn/bachhoaxanh/menuheader/-202401091450502576.png'
  },
  {
    id: 3,
    title: 'Bia, nước có cồn',
    img: 'https://cdn.tgdd.vn/bachhoaxanh/menuheader/-202401091450502576.png'
  },
  {
    id: 4,
    title: 'Nước ngọt',
    img: 'https://cdn.tgdd.vn/bachhoaxanh/menuheader/-202401091450502576.png'
  }
])
</script> -->

<style lang="scss" scoped>
.container {
  width: 1100px;
}

.ant-btn-group .ant-btn{

}
</style>
