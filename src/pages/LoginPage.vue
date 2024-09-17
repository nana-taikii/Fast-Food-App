<template>
  <ion-page class="h-[100vh] flex flex-col sm:text-center">
    <ion-header class="ion-no-border pt-[15px] px-[32px]">
      <ion-img class="w-[150px] sm:mx-auto" src="/images/logo.png" alt="Logo"></ion-img>
    </ion-header>

    <ion-content class="flex-grow">
      <h2 class="px-[32px] font-font1 text-[1.8rem]">Bonjour!</h2>
      <p class="px-[32px] text-[0.8rem] text-secondary">
        Welcome to our all new FastFood mobile app. Kindly login to your account.
      </p>

      <div class="mx-[30px] form_div sm:flex flex-col items-center justify-center">
        <div class="w-full sm:max-w-[600px]">
          <form action="#" class="flex flex-col">
            <div class="w-full relative">
              <input
                id="email"
                class="input-field pt-7 w-full px-5 pb-2 text-[0.9rem] rounded-[20px]"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <label
                for="email"
                class="form-label absolute top-3 left-[22px] text-[0.7rem] text-[#B2B7BB]"
              >
                Email Address
              </label>
            </div>

            <div class="w-full relative mt-2">
              <input
                id="password"
                class="input-field pt-7 w-full px-5 pb-2 text-[0.9rem] rounded-[20px]"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <label
                for="password"
                class="form-label absolute top-3 left-[22px] text-[0.7rem] text-[#B2B7BB]"
              >
                Password
              </label>
            </div>
          </form>

          <div class="mt-[40px] sm:max-w-[600px]">
            <ion-buttons class="flex items-center flex-col">
              <ion-button @click="$emit('login')" class="bg-primary w-full p-2 capitalize text-white rounded-[13px] sm:max-w-[200px] hover:bg-[#ba1117] transition-all duration-300">
                Login
              </ion-button>
              <ion-button class="login_btn w-full p-4 capitalize text-primary font-semibold sm:max-w-[200px]">
                Login as Guest
              </ion-button>
            </ion-buttons>
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer class="no-border">
      <h2 class="text-center font-font1 text-[1rem] font-light">
        Don't have an account yet? <span class="text-primary font-semibold">Create</span>
      </h2>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent, IonFooter, IonButtons, IonButton } from '@ionic/vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonFooter,
    IonButtons,
    IonButton
  }
});
</script>

<style scoped>
.input-field {
  border: 2px solid #B2B7BB;
}
.no-border {
  box-shadow: none;
}
.login_btn {
  --background-hover: transparent;
}
</style>
