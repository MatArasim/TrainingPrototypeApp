<template>
  <div class="flex flex-col min-h-screen bg-neutral-800">
    <div class="container mx-auto my-auto max-w-xl max-h-full overflow-hidden">
      <div class="container mx-auto p-16 grid min-h-screen grid-cols-1 gap-4">
        <div
          class="relative col-span-1  bg-white p-4 rounded-xl shadow-neutral-500 shadow-lg items-center"
        >
          <NavComponent class="absolute bottom-0 right-0" />
          <InfoComponent class="absolute bottom-2 left-2" />
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavComponent from "./components/NavComponent.vue";
import InfoComponent from "./components/InfoComponent.vue";
</script>
