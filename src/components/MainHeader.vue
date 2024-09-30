<template>
    <div class=" bg-[red] w-full ">
        <header class=" flex justify-between mx-auto left-0 right-0 container bg-orange-500" >
            <div class="flex p-2">
                <img class="w-20 h-14" src="https://nhakhoakim.com/wp-content/themes/kimdental-child/assets/images/logo.svg" alt="">
                <h1 >NHA KHOA KIM </h1>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <ul class="flex gap-5">
                    <li><router-link > Giới thiệu 
                        <i class="fa-solid fa-chevron-down size-4"></i>
                    </router-link></li>
                    <li> <router-link >Dịch vụ</router-link></li>
                    <li><router-link >Bảng giá</router-link></li>
                    <li><router-link >Tin tức</router-link></li>
                </ul>
                <button class="p-2">
                    ĐẶT HẸN
                </button>
                <button>
                    19006899
                </button>
                <button>
                    EN
                </button>
            </div>

        </header>
    </div>
    <div>
      <!-- <template v-for="item in data">
       <img :src="item.img" alt="" srcset="">
        {{ item.title}}
      </template> -->
    </div>
</template>
  
  <script setup>
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
  
  </script>