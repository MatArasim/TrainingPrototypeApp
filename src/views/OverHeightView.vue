<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-clip shadow-lg">
        <ArrowTrendingUpIcon class="text-blue-600 w-60 h-60"></ArrowTrendingUpIcon>
      </div>
    </div>
    <div class="flex justify-center my-4">
      <div class="border-blue-500 rounded-md border overflow-hidden shadow-lg w-full">
        <div class="p-4 space-y-8">
          <div class="space-y-2">
            <div class="text-lg font-semibold">Dzienne</div>
            <div class="flex items-end justify-center h-20 bg-gray-100 p-4">
  <svg class="h-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polyline 
      fill="none" 
      stroke="green" 
      stroke-width="2" 
      points="
        0,100 
        20,60 
        40,80 
        60,20 
        80,80 
        100,50 
      " />
  </svg>
</div>
          </div>

          <div class="space-y-2">
            <div class="text-lg font-semibold">Tygodniowe</div>
            <div class="flex items-end justify-center h-20 bg-gray-100 p-4">
  <svg class="h-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polyline 
      fill="none" 
      stroke="green" 
      stroke-width="2" 
      points="
        0,70 
        0,70 
        0,70 
        0,70 
        0,70 
        100,50 
      " />
  </svg>
</div>
          </div>
          <div class="space-y-2">
            <div class="text-lg font-semibold">Miesięczne</div>
            <div class="flex items-end justify-center h-20 bg-gray-100 p-4">
  <svg class="h-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polyline 
      fill="none" 
      stroke="green" 
      stroke-width="2" 
      points="
        0,100 
        20,60 
        40,80 
        40,20 
        80,90 
        100,50 
      " />
  </svg>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowTrendingUpIcon } from "@heroicons/vue/20/solid";
import { ref, computed } from "vue";

const dailyDistance = ref(10);
const weeklyDistance = ref(10);
const monthlyDistance = ref(10);

const dailyGoal = ref(10);
const weeklyGoal = ref(50);
const monthlyGoal = ref(50);

const dailyProgress = computed(() => (dailyDistance.value / dailyGoal.value) * 100);
const weeklyProgress = computed(() => (weeklyDistance.value / weeklyGoal.value) * 100);
const monthlyProgress = computed(() => (monthlyDistance.value / monthlyGoal.value) * 100);
</script>
