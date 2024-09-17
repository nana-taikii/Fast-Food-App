<template>
  <ion-content>
    <ion-grid class="h-full">
      <ion-row class="h-full  ion-justify-content-center sm:items-center" >
        <ion-col size="auto" class="flex items-start mt-[100px] sm:mt-0">
          <ion-img class="w-[250px]" src="/images/logo.png" alt="Logo"></ion-img>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';

export default {
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg
  }
};
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>
