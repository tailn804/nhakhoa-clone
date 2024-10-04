<template>
    <div class="bg-blue-300 w-full">
        <header class="flex relative justify-between mx-auto max-w-[1100px] bg-white">
           <router-link to="/" class="no-underline">
            <div class="flex p-2">
                <img class="w-20 h-14" src="https://nhakhoakim.com/wp-content/themes/kimdental-child/assets/images/logo.svg" alt="Logo">
                <h1 class="font-bold ml-3">NHA KHOA KIM</h1>
            </div>
           </router-link>
            <div class="flex flex-row gap-2 items-center mr-3 text-black">
              <!-- <template v-for="item in dataMenu" :key="item.id">
                <nuxt-link :to="item.url">
                  <span>{{ item.title }}</span>
                </nuxt-link>
              </template> -->
                <ul class="flex gap-5 list-none">
                  <!-- <li v-for="item in dataMenu" :key="item.id" >
                    <router-link :to="item.url">
                      {{ item.title }}
                      <DownOutlined/>
                      <ul>
                        <li >

                        </li>
                      </ul>
                    </router-link>
                  </li> -->

                  <li v-for="item in dataMenu" :key="item.id" class="no-underline text-base  " >
                    <a-dropdown  class=" no-underline flex py-5 items-center text-black">
                      <RouterLink :to="item.url" class="ant-dropdown-link-nav font-medium " @click.prevent>
                        {{ item.title }}
                        <DownOutlined v-if="item.id !== 31" class="text-black  text-[6px] ml-2 mr-2 font-bold"/>
                      </RouterLink>
                      
                      <template #overlay v-if="item.children && item.children.length">
                        <a-menu class="ant-subnav-menu first:rounded-t-none last:rounded-b-[4px] ">
                          <a-menu-item class="!bg-transparent ant-dropdown-link  " v-for="subItem in item.children" :key="subItem.id">
                            <RouterLink class="text-[15px] font-normal" :to="subItem.url" >{{ subItem.title }}</RouterLink>
                          </a-menu-item>
                        </a-menu>
                      </template>
                      
                      <template  class=""  #overlay v-if="item.childrenGroup1 && item.childrenGroup2">

                        <div class=" ant-subnav-menu first:rounded-t-none last:rounded-b-[4px] flex relative top-0 left-[133px]" >
                          
                          <a-row>
                            <!-- col 1 image -->
                            <a-col >
                              <img :src="item.image" alt="">
                            </a-col>
                             <div class="flex  bg-orange-400 p-10">
                              <a-col class="py-2 pl-7 ">
                                <a-menu class="!border-none !shadow-none">
                                  <a-menu-item class="!bg-transparent ant-dropdown-link" v-for="subItem in item.childrenGroup1"  :key="subItem.id">
                                    <router-link class="" :to="subItem.url">{{ subItem.title }}</router-link>
                                  </a-menu-item>
                                </a-menu>
                              </a-col>
                              <a-col class=" py-2 pl-7">
                                <a-menu class="!border-none !shadow-none">
                                  <a-menu-item v-for="subItem in item.childrenGroup2" :key="subItem.id">
                                    <router-link :to="subItem.url">{{ subItem.title }}</router-link>
                                  </a-menu-item>
                                </a-menu>
                              </a-col>
                             </div>
                   
                          </a-row>
                        </div>
                      </template>

                    </a-dropdown>
                  </li>
                </ul>

                  <a-button class="bg-[#c80000] text-white hover:text-white hover:opacity-5 custom-button rounded-none" size="large">
                    <font-awesome-icon class="pb-[1px] pr-1":icon="['fas', 'calendar-days']" />
                    <span>ĐẶT HẸN</span>
                  </a-button>
                  <a-button class="bg-[#005f9d] text-white custom-button rounded-none" size="large">
                    <font-awesome-icon class="text-xl pr-1" :icon="['fas', 'phone-volume']" />
                    1900 6899
                  </a-button>
                  <a-button class="bg-[#005f9d] text-white custom-button rounded-none" size="large">
                    <img class="bg-contain w-6 h-3 pt-[1px] pr-1" src="https://nhakhoakim.com/wp-content/themes/kimdental-child/assets/images/flag-eng-uk.svg" alt="">
                    EN
                  </a-button>

                <!-- <button class="p-2 border-none bg-red-500 text-white ">ĐẶT HẸN</button>
                <button class="p-2 border-none bg-blue-400 text-white  ">19006899</button>
                <button class="p-2 border-none bg-blue-400 text-white  ">EN</button> -->
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
import { Dropdown, Menu } from 'ant-design-vue';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const dataMenu = ref([
  {
    id: 1,
    title: "Giới thiệu",
    url: "#",
    children:[
      {
      id: 1,
      title: "Về Nha Khoa Kim",
      url: "",
      },
      {
        id: 2,
        title: "Đội ngũ bác sĩ",
        url: "",
      },
      {
        id: 3,
        title: "Những thành tựu Nha Khoa Kim",
        url: "",
      },
      {
        id: 4,
        title: "Nhà máy sản xuất răng sứ ",
        url: "",
      },
      {
        id: 5,
        title: "Tiêu chuẩn chất lượng",
        url: "",
      },
      {
        id: 6,
        title: "Trải nghiệm khách hàng",
        url: "",
      },
      {
        id: 7,
        title: "Địa chỉ chi nhánh",
        url: "",
      },
      {
        id: 8,
        title: "Cơ sở pháp lý phòng khám",
        url: "",
      },
        ]
  },
  {
    id: 2,
    title: "Dịch vụ ",
    url: "#",
    image:"https://nhakhoakim.com/wp-content/uploads/2019/05/Banner_DichVu-01-2-1.jpg",
    childrenGroup1:[
      {
        id: 1,
        title:"Bọc răng sứ",
        url:"",
      },
      {
        id: 2,
        title:"Cấy ghép implant",
        url:"",
      },
      {
        id: 3,
        title:"Niềng răng thẩm mỹ",
        url:"",
      },
      {
        id: 4,
        title:"Mặt dán sứ veneer",
        url:"",
      },
      {
        id: 5,
        title:"Tẩy trắng răng",
        url:"",
      },
    ],
    childrenGroup2:[
      {
        id: 1,
        title:"Nhổ răng khôn",
        url:"",
      },
      {
        id: 1,
        title:"Bệnh lý nha chu",
        url:"",
      },
      {
        id: 1,
        title:"Điều trị tủy",
        url:"",
      },
      {
        id: 1,
        title:"Hàm trắng răng",
        url:"",
      },
      {
        id: 1,
        title:"Chăm sóc răng miệng cho thai phụ",
        url:"",
      },
    ],
  },
  {
    id:31,
    title: "Bảng giá",
    url: "#",
  },
  {
    id: 4,
    title: "Tin tức",
    url: "#",
    children:[
      {
        id: 1,
        title: "Hoạt động nha khoa kim",
        url:"",
      },
      {
        id: 1,
        title: "Hợp tác chiến lược",
        url:"",
      },
      {
        id: 1,
        title: "Tin tức & sự kiện",
        url:"",
      },
      {
        id: 1,
        title: "Kiến thức răng miệng",
        url:"",
      },
      {
        id: 1,
        title: "Hành trình răng hạnh phúc",
        url:"",
      },
      {
        id: 1,
        title: "Liên kết web ",
        url:"",
      },

    ]
  },
])


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

<!-- <style lang="scss" scoped>
.container {
  width: 1100px;
}

.ant-btn-group .ant-btn{

}
</style> -->

<style scoped>
.ant-nav-text{
  font-weight: 700;
}

.custom-button{
  border-radius: 0;
}

.ant-subnav-menu{
  border-top: 3px solid #017afd;
}

:deep(.ant-dropdown-link-nav:hover){
  color: #017afd;
}

:deep(.ant-dropdown-link:hover) {
  color: aqua;
  /* color: #404a64; */
}
</style>
