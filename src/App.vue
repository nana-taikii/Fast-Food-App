<template>
  <ion-app>
    <!-- Loading Screen -->
    <transition name="fade">
      <LoadingScreen v-if="isLoading" key="loading" />
    </transition>

    <!-- Login Page -->
    <transition  @before-enter = "beforeEnter" @enter = "enter" @leave = "leave">
      <LoginPage v-if="!isLoggedIn && !isLoading" @login="handleLogin" key="login" />
    </transition>

    <!-- Main App Content -->
    <transition name="fade" @before-enter = "beforeEnter" @enter = "enter" @leave = "leave">
      <ion-page v-if="isLoggedIn" key="main">
        <ion-menu :type="menuType" content-id="mainPage" @ionWillOpen="showBackdrop" @ionWillClose="hideBackdrop">
          <ion-header class="ion-no-border p-3">
            <div class="flex items-center space-between space-x-[30px]">
              <ion-thumbnail class="user">
                <ion-img src="images/user.png"></ion-img>
              </ion-thumbnail>
              <font-awesome-icon :icon="['fas', 'crown']" class="text-[#FFC02E] text-2xl"/>
              <div class="flex items-center justify-center">
                <p class="font-font1 font-semibold text-[0.9rem]">0 Points</p>
                <ion-icon name="chevron-forward-outline" class="ml-2 text-primary text-[0.9rem]"></ion-icon>
              </div>
            </div>
            <div class="mt-[-8px]">
              <h3 class="font-font1">Chou Tzuyu</h3>
              <p class="font-font1 text-fourth text-[0.8rem] mt-[-5px]">+63 912 345 6789</p>
            </div>
          </ion-header>
          <div class="w-full h-full mt-[-20px] overflow-y-auto no-scrollbar">
            <ion-content class="side-ion-content">
              <router-link v-for="nav in navdata" :to="nav.link" :key="nav.id" class="no-underline"  @click.native="sidelink_category(nav.id); closeMenu()">
                <ion-item lines="none">
                  <ion-label :class="{'ion-item-divider': nav.id === 5}">
                    <div class="flex items-center justify-between" @click="sidelink_category(nav.id)">
                      <div class="flex space-x-4">
                        <font-awesome-icon
                          :icon="['fas', nav.icon_name]"
                          :class="{'text-primary text-1xl': sidelink_id === nav.id, 'text-[#DEE2E6] text-1xl': sidelink_id !== nav.id}"
                        />
                        <p class="font-font1 text-[0.85rem] font-semibold">{{ nav.desc }}</p>
                      </div>
                      <span
                        v-if="nav.nav_count > 0"
                        class="text-right mr-4 bg-[#ffc02e] py-[0.2rem] px-[0.35rem] rounded-[50%] text-[0.6rem] text-[#fff]"
                      >{{ nav.nav_count }}</span>
                    </div>
                  </ion-label>
                </ion-item>
              </router-link>
            </ion-content>
          </div>
          <ion-footer class="ion-no-border p-4">
            <ion-buttons>
              <ion-button class="bg-primary text-[#fff] capitalize text-[0.8rem] font-font1 font-medium w-[150px] p-[5px] rounded-[15px]">Logout</ion-button>
            </ion-buttons>
          </ion-footer>
        </ion-menu>

        <div class="h-full w-full" id="mainPage">
          
          <ion-content class="relative h-full w-full">
            <div class="div_content w-full h-full">
              <transition name = "slide-fade" @before-enter = "beforeEnter" @enter = "enter" @leave = "leave">
                <router-view/>
              </transition>
            </div>
          </ion-content>
      
          <transition name="fade">
            <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] transition-bg duration-400 ease-in-out"></div>
          </transition>
        </div>
      </ion-page>
    </transition>
  </ion-app>
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
  IonList,
  IonApp,
  IonRouterOutlet,
} from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import { navdata } from './components/navdata.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LoginPage from './pages/LoginPage.vue';
import LoadingScreen from './pages/LoadingScreen.vue';

export default defineComponent({
  methods:{
    beforeEnter(page){
      page.style.transform = 'translateX(100%)';
      page.style.opacity = '0';
    },
    enter(page, done){
      page.offsetWidth;
      page.style.transform = 'translateX(0)';
      page.style.transition = "transform 0.4s ease, opacity 0.4s ease-in-out";
      page.style.opacity = '1';
      done();
    },
    leave(page, done){
      page.style.transform = 'translateX(-100%)';
      page.style.transition = "transform 0.4s ease, opacity 0.4s ease-in-out";
      page.style.opacity = '0';
      done()
    }
  },
  components: {
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
    IonList,
    IonApp,
    IonRouterOutlet,
    LoginPage,
    LoadingScreen,
  },
  setup() {
    //saves state
    const isLoading = ref(true);
    const isLoggedIn = ref(false);

    onMounted(() => {
      const savedLoginState = localStorage.getItem('isLoggedIn');
      if (savedLoginState) {
        isLoggedIn.value = JSON.parse(savedLoginState);
      }
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    const handleLogin = () => {
      isLoggedIn.value = true;
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn.value));
    };


    // Menu logic
    const menuType = ref('push');
    const isMenuOpen = ref(false);
    const showBackdrop = () => {
      isMenuOpen.value = true;
    };
    const hideBackdrop = () => {
      isMenuOpen.value = false;
    };

    // Navigation logic
    const sidelink_id = ref(null);
    const sidelink_category = (id) => {
      sidelink_id.value = id;
    };

    //close Menu
    const closeMenu = () => {
      document.querySelector("ion-menu").close();
    }

    return { isLoading, isLoggedIn, handleLogin, menuType, isMenuOpen, showBackdrop, hideBackdrop, sidelink_category, sidelink_id, navdata , closeMenu};
  }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.login_transition-enter {
  opacity: 0;
}
.login_transition-enter-active {
  transition: opacity 0.8s;
  transition-delay: 0.3s;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-enter, .slide-leave-to /* leaving */ {
  transform: translateX(100%); /* Start off-screen to the right */
  opacity: 0; /* Optionally fade it in */
}
.slide-enter-to, .slide-leave {
  transform: translateX(0); /* End at normal position */
  opacity: 1;
}
</style>
