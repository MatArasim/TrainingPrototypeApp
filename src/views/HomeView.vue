<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-hidden shadow-lg">
        <RocketLaunchIcon class="text-blue-600 w-60 h-60"></RocketLaunchIcon>
      </div>
    </div>
    <div class="container mx-auto p-4">
      <div class="bg-white border border-blue-200 shadow-lg rounded-lg p-4">
        <div class="profile-info">
          <h2 class="text-3xl text-blue-600 flex justify-between font-semibold">
            Profil Użytkownika
            <router-link to="/edit"><PencilIcon class="h-5 w-5" /></router-link>
          </h2>
          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Waga: </span>
            <span class="text-xl justify-end">{{ userProfile.weight }} kg</span>
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Wzrost: </span>
            <span class="text-xl justify-end">{{ userProfile.height }} cm</span>
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Wiek: </span>
            <span class="text-xl justify-end">{{ userProfile.age }} lat/a</span>
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Cel wagowy: </span>
            <span class="text-xl justify-end">{{ userProfile.weightGoal }} kg</span>
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Cel odległość: </span>
            <span class="text-xl justify-end">{{ userProfile.distanceRun }} km</span>
          </div>
          <div class="my-4">
            <span class="text-2xl font-medium text-blue-600">Biega w: </span>
            <div class="text-xl my-4 mx-2">
              <WeekComponent></WeekComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RocketLaunchIcon, PencilIcon } from "@heroicons/vue/20/solid";
import WeekComponent from "../components/WeekComponent.vue";
import { ref } from "vue";

const userProfile = ref({
  weight: 70, // przykładowa waga
  height: 175, // przykładowy wzrost
  age: 28, // przykładowy wiek
  weightGoal: 65, // przykładowy cel wagowy
  distanceRun: 120, // przykładowa przebiegnięta odległość
});
</script>
