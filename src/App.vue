<template>
  <div class="grid grid-cols-1 lg:grid-cols-7 grid-rows-4 h-screen bg-slate-300">
    <div class="lg:col-start-2 lg:col-end-7 2xl:col-start-3 2xl:col-end-6 row-start-2">
      <div class="grid md:grid-cols-7 grid-rows-2 items-center content-center">
        <div class="hidden md:block row-span-1 md:row-span-full md:col-span-2 shadow-xl shadow-slate-400">
          <img src="./assets/flowers.jpg" alt="" />
        </div>
        <div class="row-span-2 md:col-span-5 shadow-md shadow-slate-300 border border-slate-300 p-7 bg-white">
          <div class="relative">
            <div class="divide-y divide-gray-300">
              <header class="text-3xl">Hi there!</header>
              <ul class="pt-5">
                <li>I'm Duy Anh. I love programming.</li>
                <li>I build web apps and backend infrastructure.</li>
                <li>My Discord: duyanh#1646</li>
                <li>Email: contact@anhcraft.dev</li>
              </ul>
            </div>
            <div class="flex flex-row gap-2 mt-5">
              <a href="https://fb.com/anhcraft">
                <svg class="w-6 h-6 text-blue-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://github.com/anhcraft">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <img src="./assets/lotus.png" class="absolute bottom-0 right-0 w-20" alt=""/>
            <img src="./assets/avatar.png" class="absolute top-0 right-0 w-20 border border-2 border-gray-300 rounded-full" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
