<script setup lang="ts">
</script>

<template>
  <nav class="flex flex-row justify-center items-center navbar pt-10 gap-5 md:gap-10 text-gray-500">
    <div class="pr-5 md:pr-10 relative">
      <router-link to="/" class="underline-effect relative">Home</router-link>
    </div>
    <div class="pr-5 md:pr-10 relative">
      <router-link to="/portfolio" class="underline-effect relative">Portfolio</router-link>
    </div>
    <div class="pr-5 md:pr-10 relative">
      <router-link to="/services" class="underline-effect relative">Services</router-link>
    </div>
    <div class="relative">
      <router-link to="/blog" class="underline-effect relative">Blog</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar > div:after {
  position: absolute;
  content: '/';
  right: 0;
}
.navbar > div:last-child:after {
  content: ' ';
}
.underline-effect::after {
  content: "";
  border-bottom: solid 2px #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s;
}
.underline-effect.router-link-active::after {
  transform-origin: left;
  transform: scaleX(1);
}
.underline-effect:not(.router-link-active):hover::after {
  transform-origin: left;
  transform: scaleX(1);
}
@-webkit-keyframes underline {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes underline {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>