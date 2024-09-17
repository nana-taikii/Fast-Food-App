<template>
    <ion-page class="flex flex-col h-full overflow-y-auto">
     
       
      <div>
        <ion-header class="flex px-4 ion-no-border justify-between">
                <ion-menu-toggle class = "toggle_btn">
                  <ion-icon name="reorder-two-outline" class="text-5xl text-primary"></ion-icon>
                </ion-menu-toggle>
            <div class="flex justify-between items-center">
            <div class="flex items-center justify-center space-x-4">
                <font-awesome-icon :icon="['fas', 'crown']" class="text-[#FFC02E] text-2xl"/>
                <p class="font-font1 font-semibold text-[0.9rem]">0 Points</p>
                <ion-icon name="chevron-forward-outline" class="ml-2 text-primary text-[0.9rem]"></ion-icon>
            </div>
            
            </div>
            <ion-thumbnail class="user mt-2">
                <ion-img src="images/user.png"></ion-img>
            </ion-thumbnail>
        </ion-header>
       
      </div>
  
    
      <div class="flex flex-row items-center justify-center px-4  mt-[-20px]">
        <ion-thumbnail class="logo">
          <ion-img src="/images/logo.png" class="w-full h-full object-contain"></ion-img>
        </ion-thumbnail>
        <div class="ml-2">
          <p class="font-font1 text-[#7F7F7F] text-[0.9rem] mt-6">Anneoyong, Chou!</p>
          <h2 class="font-font1 text-[1.4rem] mt-[-15px]">What do you want to eat?</h2>
        </div>
      </div>
  
   
      <div class="flex flex-row gap-5 h-[50px] px-[20px]">
        <div class="h-full relative w-full flex flex-row items-center border-2 border-solid border-[#E6E9EC] rounded-[15px] px-5 bg-[#F8F9FA]">
          <ion-icon name="search-outline" class="text-[1.5rem] text-primary"></ion-icon>
          <input type="search" placeholder="try our new Beef Bibimbowl" class="p-3 font-font1 text-[0.9rem] placeholder:text-[#7D858C] w-full border-none outline-none bg-[#F8F9FA]">
          <ion-icon name="options-outline" class="text-4xl text-primary font-bold"></ion-icon>
        </div>
      </div>
  
      
      <div class="flex-1 px-[20px] pr-[0px]">
        <div>
            <div class = "flex w-full justify-between pr-[20px]">
                <h2 class = "font-font2 text-[1rem] font-semibold">Special Offers!</h2>
                <p class = "font-font1 text-[0.9rem] text-primary font-medium flex items-center">View All <ion-icon name="chevron-forward-outline" class="ml-1 text-primary text-[0.8rem]"></ion-icon></p>
            </div>

            <div>
                <div class = "flex space-x-3 overflow-x-auto no-scrollbar h-[150px] py-1">
                    <div class = "flex-shrink-0 w-[320px] h-full rounded-[20px] bg-[orange] overflow-hidden">
                        <img src = "/images/offer2.png" class = "w-full h-full object-fit ">
                    </div>
                    
                    <div class = "flex-shrink-0 w-[320px] h-full rounded-[20px] bg-[orange] overflow-hidden">
                        <img src = "/images/offer1.png" class = "w-full h-full object-fit ">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class = "w-full">
            <h2 class = "font-font2 text-[1rem] font-semibold">Category</h2>
            <div class = "flex space-x-3 overflow-x-auto no-scrollbar">
                <div v-for = "item in category" :key = "item.id" class = "w-[200px] h-[300px] bg-[blue] rounded-[20px] relative overflow-hidden flex-shrink-0">
                    <div class = "w-full h-full rounded-[20px]">
                        <img :src="item.img" :alt="item.name" class = "w-full h-full object-cover rounded-[20px]">
                    </div>
                    <div class="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
                    <div class = "absolute bottom-2 px-3 ">
                        <h3 class = "text-[#fff] font-font2 text-[1.1rem]">{{ item.name }}</h3>
                        <p class = "text-[#fff] mt-[-5px] text-[0.8rem] font-thin">{{ item.recipes }} Recipes</p>
                    </div>
                </div>
            </div>
        </div>

        <div class = "mr-[20px]">
            <h2 class = "font-font2 text-[1rem] font-semibold">What's New?</h2>
            <div class ="w-full h-full flex items-center justify-center sm:justify-start">
                <div class = "flex item-center justify-center w-full h-full rounded-[20px] bg-[orange] overflow-hidden sm:w-[500px] ">
                            <img src = "/images/offer4.png">
                </div>
            </div>
        </div>

        <div class="ml-[-10px] sm:ml-[0px]">
            <h2 class="font-font2 text-[1rem] font-semibold">Most Popular</h2>
            <ion-list class="mt-3 pr-[10px] flex flex-wrap gap-[5px] justify-center items-center sm:justify-start">
                <div v-for="item in product" :key="item.id" >
                    <div v-if="item.mark === 'Popular'" class="w-[170px] sm:w-[200px] bg-fifth pt-[30px] px-3 rounded-[20px] flex flex-col items-center">
                        <ion-thumbnail class="product_thumbnail">
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


      </div>
    
      <ion-footer class="ion-no-border p-4 w-full sticky bottom-0">
        <ion-buttons class = "float-right">
          
            <router-link to = "/OrderNowPage" class = "bg-primary text-[#fff] capitalize text-[0.8rem] font-font1 font-medium w-[140px] p-4 rounded-[15px] no-underline text-center">Order Now!</router-link>
           
        </ion-buttons>
      </ion-footer>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonThumbnail, IonImg, IonFooter, IonButtons, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import {category} from '../components/category.js';
  import { product_list } from '../components/data.js';
  
  export default defineComponent({
    components: {
      IonPage,
      IonThumbnail,
      IonImg,
      IonFooter,
      IonButtons,
      IonButton
    },
    data(){
        return{
            category:category,
            product:product_list
        };

    },
  });
  </script>
  
  <style scoped>
  ion-thumbnail.logo {
    --size: 130px;
  }
  
  ion-thumbnail.user {
    --size: 40px;
  }
  ion-thumbnail.product_thumbnail{
    --size:100px;
  }
  *::-webkit-scrollbar{
    display:none;
  }
  </style>
  