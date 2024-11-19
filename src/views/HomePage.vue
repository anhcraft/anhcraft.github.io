<script setup lang="ts">
import {ArrowRightIcon} from '@heroicons/vue/16/solid'
</script>

<template>
  <div class="grow flex flex-col-reverse lg:flex-row lg:place-items-center place-content-center m-auto">
    <div class="contents">
      <div class="leading-8">
        <h1 class="font-serif	text-6xl py-5">Hi,<br/>I'm <span class="text-indigo-600">Anh Duy</span></h1>
        <h2 class="text-4xl text-neutral-700">Software Engineer</h2>
        <p class="text-neutral-400 py-5">A sophomore student with a passion for building awesome products</p>
        <!--<button class="bg-indigo-600 px-4 py-2 rounded-md	text-white hire-btn flex items-center" v-on:click="$router.push('/services')">
          Hire me
          <span class="ml-4">
          <ArrowRightIcon class="size-4"/>
        </span>
        </button>-->
        <div class="mt-10 flex gap-5">
          <div class="has-tooltip">
            <div class="tooltip rounded shadow-lg px-2 bg-gray-100 mt-8">Private xD</div>
            <div class="sonar-effect-icon">
              <img src="../assets/facebook-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="Facebook icon"/>
            </div>
          </div>
          <div class="has-tooltip">
            <div class="tooltip rounded shadow-lg px-2 bg-gray-100 mt-8">Discord: duyanh</div>
            <div class="sonar-effect-icon">
              <img src="../assets/discord-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="Discord icon"/>
            </div>
          </div>
          <div class="has-tooltip">
            <div class="tooltip rounded shadow-lg px-2 bg-gray-100 mt-8">Github</div>
            <a class="sonar-effect-icon block" href="https://github.com/anhcraft" target="_blank">
              <img src="../assets/github-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="Discord icon"/>
            </a>
          </div>
          <div class="has-tooltip">
            <div class="tooltip rounded shadow-lg px-2 bg-gray-100 mt-8">Linkedin</div>
            <a class="sonar-effect-icon block" href="https://linkedin.com/in/anh-duy-huynh-007b94184" target="_blank">
              <img src="../assets/linkedin-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="Discord icon"/>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:ml-10">
        <img src="../assets/about-image.svg" class="lg:m-auto w-[300px] lg:w-[400px]" alt="About image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hire-btn:hover > span > svg,
.hire-btn:focus > span > svg {
  animation: expand 1s;
  animation-fill-mode: forwards;
  transition: all 3s ease-out;
}

@keyframes expand {
  100% {
    transform: translateX(.1rem);
  }
}
</style>
