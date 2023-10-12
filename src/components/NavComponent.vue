<template>
  <div class="">
    <nav class="container flex flex-col items-end pb-5 pr-5">
      <div class="dropdown dropdown-top dropdown-end">
        <label tabindex="0">
          <ArrowUpCircleIcon class="h-14 w-14 text-blue-600" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu rounded-box w-fit bg-blue-600 text-white shadow-md shadow-neutral-500"
        >
        <li>
            <a><HomeIcon class="h-5 w-5" /></a>
          </li>
          <li>
            <a><FireIcon class="h-5 w-5" /></a>
          </li>
          <li>
            <a><FlagIcon class="h-5 w-5" /></a>
          </li>
          <li>
            <a><HeartIcon class="h-5 w-5" /></a>
          </li>
          <li>
            <a><ArrowTrendingUpIcon class="h-5 w-5" /></a>
          </li>
          <li>
            <a><Cog8ToothIcon class="h-5 w-5" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import {
  ArrowUpCircleIcon,
  FireIcon,
  HeartIcon,
  Cog8ToothIcon,
  ArrowTrendingUpIcon,
  FlagIcon,
  HomeIcon
} from "@heroicons/vue/20/solid";
</script>
