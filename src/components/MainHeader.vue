<template>
    <div class="bg-blue-300 w-full">
        <header class="flex relative justify-between mx-auto max-w-[1100px] bg-white">
           <router-link to="/" class="no-underline">
            <div class="flex p-2">
                <img class="w-20 h-14" src="https://nhakhoakim.com/wp-content/themes/kimdental-child/assets/images/logo.svg" alt="Logo">
                <h1 class="font-bold ml-3">NHA KHOA KIM</h1>
            </div>
           </router-link>
            <div class="flex flex-row gap-3 items-center mr-3 text-black">
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

                  <li v-for="item in dataMenu" :key="item.id" class="no-underline " >
                    <a-dropdown  class="no-underline flex py-5 px-2 items-center">
                      <RouterLink :to="item.url" class="ant-dropdown-link" @click.prevent>
                        {{ item.title }}
                        <DownOutlined  class="text-black  text-[6px] ml-2 mr-2 font-bold"/>
                      </RouterLink>
                      
                      <template #overlay v-if="item.children && item.children.length">
                        <a-menu >
                          <a-menu-item v-for="subItem in item.children" :key="subItem.id">
                            <RouterLink :to="subItem.url" >{{ subItem.title }}</RouterLink>
                          </a-menu-item>
                        </a-menu>
                      </template>
                      
                      <template  class=""  #overlay v-if="item.childrenGroup1 && item.childrenGroup2">

                        <div class=" flex relative top-0 left-[133px]" >
                          
                          <a-row>
                            <!-- col 1 image -->
                            <a-col >
                              <img :src="item.image" alt="">
                            </a-col>
                             <div class="flex pa">
                              <a-col class="border-none">
                                <a-menu class="!border-none !shadow-none">
                                  <a-menu-item class="!bg-transparent ant-dropdown-link" v-for="subItem in item.childrenGroup1"  :key="subItem.id">
                                    <router-link class="" :to="subItem.url">{{ subItem.title }}</router-link>
                                  </a-menu-item>
                                </a-menu>
                              </a-col>
                              <a-col class="">
                                <a-menu>
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
import { Dropdown, Menu } from 'ant-design-vue';
import { ref } from 'vue';

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
        title: "Những thành tựu Nha KHoa Kim",
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
  },
])

const dataUser = ref([
  {
    id: 1,
    name: "Mỹ Hương",
    sdt: "1232345344",
    email: "Myhuong@gmail.com",
    avatar: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/20/thieu-nu-ha-thanh-xinh-xan-dien-do-goi-cam-thieu-dot-moi-anh-nhindocx-1624197301278.png',
  },
  {
    id: 1,
    name: "asda",
    sdt: "123123",
    email: "qwerqw",
    avatar: "https://cdn.24h.com.vn/upload/3-2022/images/2022-08-19/Gai-xinh-ngay-tho-lo-qua-khu-277585438_4600347833405176_193249803126218059_n-1660905398-70-width1754height2048.jpg",
  },
  {
    id: 1,
    name: "qwer",
    sdt: "1534345324",
    email: "wqwer@",
    avatar: "https://cdn.24h.com.vn/upload/3-2022/images/2022-08-19/Gai-xinh-ngay-tho-lo-qua-khu-277585438_4600347833405176_193249803126218059_n-1660905398-70-width1754height2048.jpg",
  },
  {
    id: 1,
    name: "adfas",
    sdt: "57685678567",
    email: "asfsdf@",
    avatar: "https://cdn.24h.com.vn/upload/3-2022/images/2022-08-19/Gai-xinh-ngay-tho-lo-qua-khu-277585438_4600347833405176_193249803126218059_n-1660905398-70-width1754height2048.jpg",
  },
  {
    id: 1,
    name: "sfasasdf",
    sdt: "4524645734",
    email: "fSSFADS@",
    avatar: "https://cdn.24h.com.vn/upload/3-2022/images/2022-08-19/Gai-xinh-ngay-tho-lo-qua-khu-277585438_4600347833405176_193249803126218059_n-1660905398-70-width1754height2048.jpg",
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
:deep(.ant-dropdown-link:hover) {
  color: aqua;
}
</style>
