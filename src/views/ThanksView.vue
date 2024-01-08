<template>
  <router-link to="/"
    ><ArrowLeftIcon class="text-blue-600 w-10 h-10 absolute top-3 left-3" />
  </router-link>

  <h2 class="my-20 flex justify-center text-center text-3xl text-blue-600">
    Dziękujemy za pobranie i używanie aplikacji. Mamy nadzieje, że aplikacja się
    spodobała. Prosimy o ocene w sklepie :)
  </h2>
  <div class="flex justify-center">
    <StarIcon class="w-20 h-20 text-yellow-500" />
    <StarIcon class="w-20 h-20 text-yellow-500" />
    <StarIcon class="w-20 h-20 text-yellow-500" />
    <StarIcon class="w-20 h-20 text-yellow-500" />
    <StarIcon class="w-20 h-20 text-yellow-500" />
  </div>
</template>

<script setup>
import { ArrowLeftIcon, StarIcon } from "@heroicons/vue/20/solid";
</script>
