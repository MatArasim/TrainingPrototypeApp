<template>
  <div class="">
    <nav class="container flex flex-col items-end pb-5 pr-5">
      <div class="dropdown dropdown-top dropdown-end">
        <label tabindex="0">
          <ArrowUpCircleIcon class="h-14 w-14 text-blue-500" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu rounded-box w-fit bg-blue-500 text-white shadow-md shadow-neutral-500"
        >
          <li>
            <router-link to="/"><HomeIcon class="h-5 w-5" /></router-link>
          </li>
          <li>
            <router-link to="/burn"><FireIcon class="h-5 w-5" /></router-link>
          </li>
          <li>
            <router-link to="/distance"><FlagIcon class="h-5 w-5" /></router-link>
          </li>
          <li>
            <router-link to="/pulse"><HeartIcon class="h-5 w-5" /></router-link>
          </li>
          <li>
            <router-link to="/overheight"
              ><ArrowTrendingUpIcon class="h-5 w-5"
            /></router-link>
          </li>
          <!-- <li>
            <router-link><Cog8ToothIcon class="h-5 w-5" /></router-link>
          </li> -->
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
  HomeIcon,
} from "@heroicons/vue/20/solid";
</script>
