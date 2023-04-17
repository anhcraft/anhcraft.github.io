<template>
  <div class="bg-slate-300">
       <div class="w-4/5 xl:w-1/2 py-64 m-auto flex flex-col gap-48">
           <MainComponent></MainComponent>
           <ProjectComponent></ProjectComponent>
       </div>
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";

export default {
    components: {
        ProjectComponent,
        MainComponent
    }
}
</script>
