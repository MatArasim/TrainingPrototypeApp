<template>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div class="border-blue-500 rounded-full border overflow-hidden shadow-lg">
        <FlagIcon class="text-blue-600 w-60 h-60"></FlagIcon>
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
            <p class="text-gray-700">{{ dailyDistance }} / {{ dailyGoal }} kcal</p>
          </div>

          <div class="space-y-2">
            <div class="text-lg font-semibold">Tygodniowe</div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-blue-600 h-4 rounded-full"
                :style="{ width: weeklyProgress + '%' }"
              ></div>
            </div>
            <p class="text-gray-700">{{ weeklyDistance }} / {{ weeklyGoal }} kcal</p>
          </div>
          <div class="space-y-2">
            <div class="text-lg font-semibold">Miesięczne</div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-red-600 h-4 rounded-full"
                :style="{ width: monthlyProgress + '%' }"
              ></div>
            </div>
            <p class="text-gray-700">{{ monthlyDistance }} / {{ monthlyGoal }} kcal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FlagIcon } from "@heroicons/vue/20/solid";
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
