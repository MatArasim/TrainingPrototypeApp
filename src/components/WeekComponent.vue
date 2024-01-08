<template>
    <div class="flex justify-center space-x-3">
      <div 
        v-for="(day, index) in daysOfWeek" 
        :key="index" 
        class="cursor-pointer px-3 py-2 border rounded"
        :class="{'bg-blue-500 text-white': selectedDays.includes(day), 'bg-white text-gray-800': !selectedDays.includes(day)}"
        @click="toggleDay(day)"
      >
        {{ day }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const daysOfWeek = ['P', 'W', 'Ś', 'Cz', 'Pt', 'S', 'N'];
  const selectedDays = ref([]);
  
  const toggleDay = (day) => {
    const index = selectedDays.value.indexOf(day);
    if (index !== -1) {
      selectedDays.value.splice(index, 1);
    } else {
      selectedDays.value.push(day);
    }
  };
  </script>