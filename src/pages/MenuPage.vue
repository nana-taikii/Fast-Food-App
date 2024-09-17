<template>
    <ion-modal :is-open="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ item.name }}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="$emit('close')">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          <ion-label>
            <p>{{ item.description }}</p>
            <p>\${{ item.price.toFixed(2) }}</p>
            <ion-button expand="full">Add to Cart</ion-button>
          </ion-label>
        </ion-item>
      </ion-content>
    </ion-modal>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>
  