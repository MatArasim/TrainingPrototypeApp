<template>
  <div class="mx-auto flex flex-col gap-1">
    <div class="card w-full bg-blue-600 text-white shadow-xl">
      <div class="card-body">
        <h1 class="card-title">Overall summary</h1>
        <div class="flex w-full flex-row gap-2 text-blue-600">
          <div
            class="grid flex-grow h-full w-1/2 overflow-hidden card bg-blue-50 rounded-box place-items-center"
          >
          <div class="stats shadow bg-neutral-50">
  
  <div class="stat text-gray-400">
    <div class="stat-title">Total Page Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>
          </div>
          <div
            class="grid flex-grow h-32 w-1/2 card bg-blue-50 rounded-box place-items-center"
          >
          <RocketLaunchIcon class="w-16 h-16"/>
          </div>
        </div>
        <div class="stats shadow"></div>
      </div>
    </div>

    <div class="stats bg-blue-600 text-white shadow">
      <div class="stat">
        <div class="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Daily Goal</div>
        <div class="stat-value text-white text-lg">0 / 10 000 km</div>
        <div class="stat-desc text-white">100% left today</div>
      </div>
    </div>

    <div class="stats bg-blue-600 text-white shadow">
      <div class="stat">
        <div class="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Daily Goal</div>
        <div class="stat-value text-white text-lg">0 / 10 000 km</div>
        <div class="stat-desc text-white">100% left today</div>
      </div>
    </div>
    <div class="stats bg-blue-600 text-white shadow">
      <div class="stat">
        <div class="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Daily Goal</div>
        <div class="stat-value text-white text-lg">0 / 10 000 km</div>
        <div class="stat-desc text-white">100% left today</div>
      </div>
    </div>
    <div class="stats bg-blue-600 text-white shadow">
      <div class="stat">
        <div class="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Daily Goal</div>
        <div class="stat-value text-white text-lg">0 / 10 000 km</div>
        <div class="stat-desc text-white">100% left today</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RocketLaunchIcon } from "@heroicons/vue/20/solid";
</script>
