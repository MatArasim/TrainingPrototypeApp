<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-hidden shadow-lg">
        <FireIcon class="text-red-600 w-60 h-60"></FireIcon>
      </div>
    </div>
    <div class="flex justify-center my-4">
      <div class="border-blue-500 rounded-md border overflow-hidden shadow-lg w-full">
        <div class="p-4 space-y-8">
          <div class="space-y-2">
            <div class="text-lg font-semibold">Dzienne</div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-green-600 h-4 rounded-full"
                :style="{ width: dailyProgress + '%' }"
              ></div>
            </div>
            <p class="text-gray-700">{{ dailyCalories }} / {{ dailyGoal }} kcal</p>
          </div>

          <div class="space-y-2">
            <div class="text-lg font-semibold">Tygodniowe</div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-blue-600 h-4 rounded-full"
                :style="{ width: weeklyProgress + '%' }"
              ></div>
            </div>
            <p class="text-gray-700">{{ weeklyCalories }} / {{ weeklyGoal }} kcal</p>
          </div>
          <div class="space-y-2">
            <div class="text-lg font-semibold">Miesięczne</div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-red-600 h-4 rounded-full"
                :style="{ width: monthlyProgress + '%' }"
              ></div>
            </div>
            <p class="text-gray-700">{{ monthlyCalories }} / {{ monthlyGoal }} kcal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FireIcon } from "@heroicons/vue/20/solid";
import { ref, computed } from "vue";

const dailyCalories = ref(500);
const weeklyCalories = ref(3500);
const monthlyCalories = ref(14000);

const dailyGoal = ref(600);
const weeklyGoal = ref(4200);
const monthlyGoal = ref(16800);

const dailyProgress = computed(() => (dailyCalories.value / dailyGoal.value) * 100);
const weeklyProgress = computed(() => (weeklyCalories.value / weeklyGoal.value) * 100);
const monthlyProgress = computed(() => (monthlyCalories.value / monthlyGoal.value) * 100);
</script>
