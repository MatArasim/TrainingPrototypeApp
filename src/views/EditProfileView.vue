<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-hidden shadow-lg">
        <CameraIcon class="text-blue-200 w-60 h-60"></CameraIcon>
      </div>
    </div>
    <div class="container mx-auto p-4">
      <div class="bg-white border border-blue-200 shadow-lg rounded-lg p-4">
        <div class="profile-info">
          <h2 class="text-3xl text-blue-600 flex justify-between font-semibold">
            Profil Użytkownika
          </h2>
          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Waga: </span>
            <input class="bg-white border justify-end" placeholder="KG" />
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Wzrost: </span>
            <input class="bg-white border" placeholder="cm" type="" name="" id="" />
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Wiek: </span>
            <input class="bg-white border" placeholder="" type="" name="" id="" />
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Cel wagowy: </span>
            <input class="bg-white border" placeholder="KG" type="" name="" id="" />
          </div>

          <div class="my-4 flex justify-between">
            <span class="text-2xl font-medium text-blue-600">Cel odległość: </span>
            <input class="bg-white border" placeholder="KM" type="" name="" id="" />
          </div>
          <div class="my-4">
            <span class="text-2xl font-medium text-blue-600">Biega w: </span>
            <div class="text-xl my-4 mx-2">
              <WeekComponent></WeekComponent>
            </div>
            <div class="flex justify-center">
              <router-link to="/"
                ><CheckCircleIcon class="text-green-600 w-7 h-7" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CameraIcon, CheckCircleIcon } from "@heroicons/vue/20/solid";
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
