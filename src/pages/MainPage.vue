<template>
  <ion-page>
    <menu-base-layout>

    <div class = "h-full w-full " id = "mainPage">
     
        <ion-content class = "relative h-full w-full ">
          <div class = "div_content w-full h-full">
            <ion-header class="flex px-4 items-center ion-no-border">
              <ion-menu-toggle class = "toggle_btn">
                <ion-icon name="reorder-two-outline" class="text-5xl text-primary"></ion-icon>
              </ion-menu-toggle>
              <ion-title class="text-2xl font-semibold font-font2">Our Foods</ion-title>
              <ion-icon name="bag-handle" class="text-3xl text-primary"></ion-icon>
            </ion-header>
      
            <div class="flex flex-row gap-5 h-[50px] px-[20px]">
              <div class="h-full relative w-full flex flex-row items-center border-2 border-solid border-[#E6E9EC] rounded-[15px] px-5 bg-[#F8F9FA]">
                <ion-icon name="search-outline" class="text-[1.5rem] text-primary"></ion-icon>
                <input type="search" placeholder="try our new Beef Bibimbowl" class="p-3 font-font1 text-[0.9rem] placeholder:text-[#7D858C] w-full border-none outline-none bg-[#F8F9FA]">
                <ion-icon name="options-outline" class="text-4xl text-primary font-bold"></ion-icon>
              </div>
            </div>

            <div class=" mt-3 w-full" lines="none">
              <div class = " flex overflow-x-auto whitespace-nowrap">
                <div class = "flex items-center space-x-2  px-2 py-1">
                  <ion-chip v-for="category in product_categories" :key="category" :class="{'bg-primary text-[#fff]': allCategory === category, 'bg-light': allCategory !== category}" @click="navigate_category(category)">
                    <ion-label>{{ category }}</ion-label>
                  </ion-chip>
              
              </div>
              </div>
            </div>

          <ion-list class="mt-3 sm:ml-[20px] flex flex-wrap gap-[5px] justify-center items-center sm:justify-start">
            <div v-for="item in filter_products" :key="item.id">
              <div class="w-[170px] sm:w-[200px] bg-fifth pt-[30px] px-3 rounded-[20px] flex flex-col items-center ">
                <ion-thumbnail>
                  <ion-img :src="item.img"></ion-img>
                </ion-thumbnail>
                <div class="mt-5 flex flex-col space-y-[-0.5rem] w-full">
                  <h1 class="font-font2 font-bold text-[0.8rem]">{{ item.name }}</h1>
                  <p class="font-font2 text-[0.8rem]">{{ item.desc }}</p>
                </div>
                <div class="w-full flex justify-end">
                  <ion-note class="flex flex-row items-center justify-center space-x-8">
                    <p class="text-[1rem] font-bold text-primary font-font1 font-semibold">{{ item.price }}</p>
                    <div class="space-x-[0.1rem]">
                      <ion-icon name="star" class="text-sixth"></ion-icon>
                      <ion-icon name="star" class="text-sixth"></ion-icon>
                      <ion-icon name="star" class="text-sixth"></ion-icon>
                      <ion-icon name="star" class="text-sixth"></ion-icon>
                      <ion-icon name="star-half" class="text-sixth"></ion-icon>
                    </div>
                  </ion-note>
                </div>
              </div>
            </div>
          </ion-list>
          
          </div>
        </ion-content>
      
      <transition name = "fade">
        <div v-show="isMenuOpen" class=" fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] transition-bg duration-400 ease-in-out"></div>
      </transition>
    </div>
</menu-base-layout>
  </ion-page>
</template>



<script>
import {
  IonPage,
  IonToolbar,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonButton,
  IonMenuToggle,
  IonSearchbar,
  IonChip,
  IonThumbnail,
  IonList
} from '@ionic/vue';
import { defineComponent, ref, computed } from 'vue';
import { product_list } from '../components/data.js';
import {navdata} from '../components/navdata.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MenuBaseLayout from './MenuBaseLayout.vue';

export default defineComponent({
  components: {MenuBaseLayout
  },
  setup() {
      //chips
      const menuType = ref('push');
      const allCategory = ref('All');
      const product_categories = ['All', 'Breakfast', 'Chicken', 'Seafood', 'Veggie', 'Pizza', 'Desserts', 'Steak'];
  
      const navigate_category = (category) => {
        allCategory.value = category;
      };
  
      const filter_products = computed(() => {
        if (allCategory.value === 'All') {
          return product_list;
        } else {
          return product_list.filter(item => item.category === allCategory.value);
        }
      });
  
  
      //overlay
      const isMenuOpen = ref(false);
      const showBackdrop = () => {
        isMenuOpen.value = true;
      };
  
      const hideBackdrop = () => {
        isMenuOpen.value = false;
      };
  
      const hideMenu = () => {
        hideBackdrop();
        document.querySelector('ion-menu').close();
      };
  
      //nav
      const sidelink_id = ref(null);
      const sidelink_category = (id) => {
        sidelink_id.value = id;
      };
      
  
      return { menuType, navigate_category, filter_products, product_categories, allCategory, showBackdrop, hideBackdrop, isMenuOpen, hideMenu , sidelink_category, sidelink_id};
    },
    data() {
      return {
        product: product_list,
        navdata: navdata
      };
    },
  });
 
</script>

<style scoped>
::-webkit-scrollbar{
  scrollbar-width:none;
}
ion-content::part(scroll)::-webkit-scrollbar {
  display: none;
}
ion-content::part(scroll) {
  scrollbar-width: none;
}

ion-menu{
  --transition-duration:6s !important;

}
ion-page::-webkit-scrollbar {
  width: 0;
}
ion-thumbnail{
  --size:100px;
}
ion-thumbnail.user{
  --size:60px;
}

.side-ion-content{
  background:blue;
}
.side_list{
  background:blue !important;
}
.ion-item-divider{
  padding-bottom:20px;
  border-bottom:2px solid #ebebeb !important;
}

.fade-enter-active, .fade-leave-active{
  transition:opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to{
  opacity:0;
}
.custom-ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding: 0;
}

</style>
