<script lang="ts">
import { defineComponent } from 'vue'
import productData from "../data/products";
import {Squares2X2Icon} from '@heroicons/vue/16/solid'
import {ListBulletIcon} from '@heroicons/vue/16/solid'
import {GlobeAltIcon} from '@heroicons/vue/16/solid'

export default defineComponent({
  name: "PortfolioPage",
  components: {
    Squares2X2Icon,
    ListBulletIcon,
    GlobeAltIcon
  },
  data() {
    return {
      activeCategory: 0,
      viewType: 0 // tile, list
    }
  },
  computed: {
    categories(): Array<String> {
      return productData.map((item) => item.name)
    }
  },
  methods: {
    productItems(i: number) {
      return productData[i].items.filter((item: any) => !item.hasOwnProperty("hidden") || !item.hidden)
    },
    products(): Array<any> {
      return this.productItems(this.activeCategory)
          .sort((a: any, b: any) => b.date - a.date || a.name.localeCompare(b.name))
    }
  }
})
</script>

<template>
  <div class="grow w-11/12 lg:w-3/4 xl:w-11/12 3xl:w-4/5 4xl:w-2/3 min-h-screen m-auto md:grid md:grid-cols-8 gap-x-8 xl:gap-x-16 py-16 md:py-24">
    <div class="col-span-2 flex flex-col items-end gap-5 mb-10">
      <div class="flex justify-end">
        <Squares2X2Icon class="size-6 text-gray-500 cursor-pointer" @click="viewType = 0" :class="{'text-indigo-600' : viewType === 0}" />
        <ListBulletIcon class="size-6 text-gray-500 cursor-pointer" @click="viewType = 1" :class="{'text-indigo-600' : viewType === 1}" />
      </div>
      <div class="xl:w-5/6 3xl:w-3/4">
        <ul class="flex flex-wrap gap-x-3 gap-y-1 md:block">
          <li v-for="(category, i) in categories" @click="activeCategory = i" class="text-sm border
          border-indigo-600 rounded-md px-3 py-1 cursor-pointer hover:bg-indigo-600 hover:text-white duration-500 mt-2"
            :class="{'bg-indigo-600 text-white' : activeCategory === i}">{{ category }} ({{ productItems(i).length }})</li>
        </ul>
        <p class="text-sm italic mt-5">The list does not include lost and NDA-protected works</p>
      </div>
    </div>
    <div class="col-span-6 grid grid-cols-1 justify-items-center justify-center content-start gap-7 xl:gap-10"
        :class="{'xl:grid-cols-3 lg:grid-cols-2': viewType === 0}">
      <div v-for="(product, i) in products()" class="flex flex-row w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl product-card" :class="{'lg:flex-col lg:w-72': viewType === 0}" :style="{'animation-delay': `${i*100+200}ms`}">
        <img v-if="product.image != undefined" :src="product.image" :alt="product.name" class="h-60 w-72 object-cover rounded-t-xl" />
        <img v-else src="../assets/dummy-img.jpg" :alt="product.name" class="h-60 w-56 xl:w-72 object-cover rounded-t-xl" />
        <div class="grow flex flex-col px-4 pt-6 pb-3 w-72 gap-3">
            <div class="text-lg font-bold text-black truncate block">{{product.name}}</div>
            <div class="grow">{{product.description}}</div>
            <div class="flex items-center">
              <p class="my-3">{{ product.date }}</p>
              <div class="ml-auto flex gap-3" v-if="product.links != undefined">
                <a class="sonar-effect-icon" v-if="product.links.website != undefined" :href="product.links.website" target="_blank">
                  <GlobeAltIcon class="size-6 text-gray-500 invert-[.5]"/>
                </a>
                <a class="sonar-effect-icon" v-if="product.links.github != undefined" :href="'https://github.com/'+product.links.github" target="_blank">
                  <img src="../assets/github-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="Github icon"/>
                </a>
                <a class="sonar-effect-icon" v-if="product.links.spigotmc != undefined" :href="'https://spigotmc.org/resources/'+product.links.spigotmc" target="_blank">
                  <img src="../assets/spigotmc-icon.png" class="size-6 text-gray-500 invert-[.5]" alt="SpigotMC icon"/>
                </a>
                <a class="sonar-effect-icon" v-if="product.links.minecraftvn != undefined" :href="'https://minecraftvn.net/resources/'+product.links.minecraftvn" target="_blank">
                  <img src="../assets/minecraftvn-icon.svg" class="size-6 text-gray-500 invert-[.5]" alt="MinecraftVN icon"/>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  opacity: 0;
  animation: fadeIn ease-out 1s;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    scale: 0;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>