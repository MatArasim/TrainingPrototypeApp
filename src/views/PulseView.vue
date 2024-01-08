<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-hidden shadow-lg">
        <HeartIcon class="text-pink-600 w-60 h-60"></HeartIcon>
      </div>
    </div>
    <div class="flex justify-center my-4">
      <div class="border-blue-500 rounded-md border overflow-hidden shadow-lg w-full">
        <div class="p-4 space-y-8">
          <div class="space-y-2">
            <div class="text-lg font-semibold">Dzienny</div>
            <span class="text-center flex justify-center text-pink-600 text-2xl text">~ 111</span>
          </div>

          <div class="space-y-2">
            <div class="text-lg font-semibold">Tygodniowy</div>
            <span class="text-center flex justify-center text-pink-600 text-2xl text">~ 101</span>
          </div>
          <div class="space-y-2">
            <div class="text-lg font-semibold">Miesięczny</div>
            <span class="text-center flex justify-center text-pink-600 text-2xl text">~ 104</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HeartIcon } from "@heroicons/vue/20/solid";



</script>
