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
                <li>I'm Duy Anh, currently a student, gonna be 18 next year.</li>
                <li>I love programming, especially game-modding.</li>
                <li>I've been a Bukkit developer for 4 years.</li>
                <li>My Discord: duyanh#1646</li>
                <li>Email: admin@anhcraft.dev</li>
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
  <div class="grid grid-cols-10 md:grid-rows-6 md:h-screen">
    <div class="hidden lg:block col-start-2 col-span-1 row-start-2 relative">
      <img src="./assets/feather.png" class="absolute top-0 left-0 w-60 -z-10" alt=""/>
    </div>
    <div class="col-start-1 sm:col-start-2 lg:col-start-3 col-end-11 sm:col-end-10 row-span-1 lg:row-start-2">
      <div class="divide-y divide-gray-300 p-10">
        <header class="text-4xl">Projects</header>
        <div class="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
          <div>
            <header class="text-2xl">Pluginmcvn.cf (2016)</header>
            <p>PluginMCVN was a website for sharing Minecraft resources, with payment support, management and stats system.</p>
            <div class="flex flex-row gap-2 mt-3">
              <a href="https://github.com/anhcraft/PluginMcVn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              PHP, MySQL
            </div>
          </div>
          <div>
            <header class="text-2xl">Minecraft Server List VN (2019)</header>
            <p>A place for advertising and tracking Vietnamese Minecraft servers.</p>
            <div class="flex flex-row gap-2 mt-3">
              <a href="https://github.com/anhcraft/mcserverlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              Vue, NodeJS
            </div>
          </div>
          <div>
            <header class="text-2xl">BattleGames (2019)</header>
            <p>An advanced minigame plugin for Minecraft servers. Over 1000 commits have been made during its development.</p>
            <div class="flex flex-row gap-2 mt-3">
              <a href="https://github.com/battlegames/Battle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              Java
            </div>
          </div>
          <div>
            <header class="text-2xl">Vht11 (2021)</header>
            <p>It was my attempt for making a math-learning game in a competition. The game features: multi-stages, game-in-game, multi-player mode.</p>
            <div class="flex flex-row gap-2 mt-3">
              Electron, Typescript, Kotlin
            </div>
          </div>
          <div>
            <header class="text-2xl">FunEnglish (2021)</header>
            <p>I created this English-learning app for personal uses and later on bring it to a contest. 24 repositories have been made. The system runs with Microservice design.</p>
            <div class="flex flex-row gap-2 mt-3">
              <a href="https://github.com/funenglish">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              Go, Dart, Python, Typescript, MongoDB, Redis, RabbitMQ
            </div>
          </div>
          <div>
            <header class="text-2xl">Go Racing! (2021)</header>
            <p>A simple car-racing game made in free time.</p>
            <div class="flex flex-row gap-2 mt-3">
              Godot
            </div>
            <a href="https://play.google.com/store/apps/details?id=cloud.floren.goracing">
              <svg xmlns="http://www.w3.org/2000/svg" width="155" height="60"><defs><linearGradient id="a" x1="31.8" y1="183.29" x2="15.02" y2="166.51" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"/><stop offset=".01" stop-color="#00a1ff"/><stop offset=".26" stop-color="#00beff"/><stop offset=".51" stop-color="#00d2ff"/><stop offset=".76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><linearGradient id="b" x1="43.83" y1="172" x2="19.64" y2="172" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"/><stop offset=".41" stop-color="#ffbd00"/><stop offset=".78" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><linearGradient id="c" x1="34.83" y1="169.7" x2="12.07" y2="146.95" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><linearGradient id="d" x1="17.3" y1="191.82" x2="27.46" y2="181.66" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"/><stop offset=".07" stop-color="#2da771"/><stop offset=".48" stop-color="#15cf74"/><stop offset=".8" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient></defs><title>fil_get</title><path fill="none" d="M0 0h155v60H0z"/><rect x="10" y="10" width="135" height="40" rx="5" ry="5"/><path d="M140 10.8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H15a4.2 4.2 0 0 1-4.2-4.2V15a4.2 4.2 0 0 1 4.2-4.2h125m0-.8H15a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5z" fill="#a6a6a6"/><path d="M57.42 20.24a2.71 2.71 0 0 1-.75 2 2.91 2.91 0 0 1-2.2.89 3.15 3.15 0 0 1-2.21-5.37 3 3 0 0 1 2.21-.9 3.1 3.1 0 0 1 1.23.25 2.47 2.47 0 0 1 .94.67l-.53.53a2 2 0 0 0-1.64-.71 2.32 2.32 0 0 0-2.33 2.4 2.36 2.36 0 0 0 4 1.73 1.89 1.89 0 0 0 .5-1.22h-2.17v-.72h2.91a2.54 2.54 0 0 1 .04.45zM62 17.74h-2.7v1.9h2.46v.72H59.3v1.9H62V23h-3.5v-6H62zM65.28 23h-.77v-5.26h-1.68V17H67v.74h-1.72zM69.94 23v-6h.77v6zM74.13 23h-.77v-5.26h-1.68V17h4.12v.74h-1.67zM83.61 22.22a3.12 3.12 0 0 1-4.4 0 3.24 3.24 0 0 1 0-4.45 3.1 3.1 0 0 1 4.4 0 3.23 3.23 0 0 1 0 4.45zm-3.83-.5a2.31 2.31 0 0 0 3.26 0 2.56 2.56 0 0 0 0-3.44 2.31 2.31 0 0 0-3.26 0 2.56 2.56 0 0 0 0 3.44zM85.58 23v-6h.94l2.92 4.67V17h.77v6h-.8l-3.05-4.89V23z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width=".2"/><path d="M78.14 31.75A4.25 4.25 0 1 0 82.41 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.46 2.46 0 0 1-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1 0 73.09 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83A2.58 2.58 0 1 1 71.22 36a2.46 2.46 0 0 1-2.4 2.58zm-11.09-5.52v1.8h4.32a3.77 3.77 0 0 1-1 2.27 4.42 4.42 0 0 1-3.33 1.32 4.8 4.8 0 0 1 0-9.6A4.6 4.6 0 0 1 61 30.14l1.27-1.27A6.29 6.29 0 0 0 57.74 27a6.61 6.61 0 1 0 0 13.21 6 6 0 0 0 4.61-1.85 6 6 0 0 0 1.56-4.22 5.87 5.87 0 0 0-.1-1.13zm45.31 1.4a4 4 0 0 0-3.64-2.71 4 4 0 0 0-4 4.25 4.16 4.16 0 0 0 4.22 4.25 4.23 4.23 0 0 0 3.54-1.88l-1.45-1a2.43 2.43 0 0 1-2.09 1.18 2.16 2.16 0 0 1-2.06-1.29l5.69-2.35zm-5.8 1.42a2.33 2.33 0 0 1 2.22-2.48 1.65 1.65 0 0 1 1.58.9zM92.63 40h1.87V27.5h-1.87zm-3.06-7.3h-.07a3 3 0 0 0-2.24-1 4.26 4.26 0 0 0 0 8.51 2.9 2.9 0 0 0 2.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 0 1-2.14-1.51l-1.63.68A4.05 4.05 0 0 0 87.29 44c2.19 0 4-1.29 4-4.43V32h-1.72zm-2.14 5.88a2.59 2.59 0 0 1 0-5.16A2.4 2.4 0 0 1 89.7 36a2.38 2.38 0 0 1-2.28 2.58zm24.38-11.08h-4.47V40h1.87v-4.74h2.61a3.89 3.89 0 1 0 0-7.76zm0 6h-2.61v-4.26h2.65a2.14 2.14 0 1 1 0 4.29zm11.53-1.8a3.5 3.5 0 0 0-3.33 1.91l1.66.69a1.77 1.77 0 0 1 1.7-.92 1.8 1.8 0 0 1 2 1.61v.13a4.13 4.13 0 0 0-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 0 0 3.1 2.75 2.63 2.63 0 0 0 2.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 0 1 1.7.42 2.26 2.26 0 0 1-2.19 2zM133.74 32l-2.14 5.42h-.06L129.32 32h-2l3.33 7.58-1.9 4.21h1.95L135.82 32zm-16.81 8h1.87V27.5h-1.87z" fill="#fff"/><path d="M20.44 17.54a2 2 0 0 0-.46 1.4v22.12a2 2 0 0 0 .46 1.4l.07.07L32.9 30.15v-.29L20.51 17.47z" fill="url(#a)"/><path d="M37 34.28l-4.1-4.13v-.29l4.1-4.14.09.05L42 28.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78z" fill="url(#b)"/><path d="M37.12 34.22L32.9 30 20.44 42.46a1.63 1.63 0 0 0 2.08.06l14.61-8.3" fill="url(#c)"/><path d="M37.12 25.78l-14.61-8.3a1.63 1.63 0 0 0-2.08.06L32.9 30z" fill="url(#d)"/><path d="M37 34.13l-14.49 8.25a1.67 1.67 0 0 1-2 0l-.07.07.07.07a1.66 1.66 0 0 0 2 0l14.61-8.3z" style="isolation:isolate" opacity=".2"/><path d="M20.44 42.32a2 2 0 0 1-.46-1.4v.15a2 2 0 0 0 .46 1.4l.07-.07zM42 31.3l-5 2.83.09.09L42 31.44A1.75 1.75 0 0 0 43 30a1.86 1.86 0 0 1-1 1.3z" style="isolation:isolate" opacity=".12"/><path d="M22.51 17.62L42 28.7a1.86 1.86 0 0 1 1 1.3 1.75 1.75 0 0 0-1-1.44L22.51 17.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z" style="isolation:isolate" fill="#fff" opacity=".25"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-7 md:grid-rows-6 md:h-screen">
    <div class="col-start-1 lg:col-start-2 col-end-6 row-start-2 row-span-4">
      <div class="divide-y divide-gray-300 p-10">
        <header class="text-4xl lg:text-right">Works</header>
        <div class="flex flex-col p-5 md:p-10">
          <div>
            <img src="./assets/minehot.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Java Developer at Minehot (2021-)</p>
          </div>
          <div>
            <img src="./assets/floren.jpg" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Game Developer at <a href="https://floren.cloud">Floren Cloud Studios</a> (2021-)</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Community moderator at minecraftvn.net (2019-)</p>
          </div>
          <div>
            <img src="./assets/nullhole.jpg" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at Nullhole</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at MineHT</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at Mine95</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">...</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at HCraft (2018)</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at TheWallsVN (2017)</p>
          </div>
          <div>
            <img src="./assets/minecraft.png" class="w-8 float-left" alt=""/>
            <p class="text-xl ml-10">Developer at EpicCraft (2017)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block col-start-6 col-span-1 row-start-2 row-span-3 relative">
      <img src="./assets/lantern.png" class="absolute top-0 left-0 w-32 -z-10" alt=""/>
    </div>
  </div>
  <div class="grid grid-cols-7 grid-rows-6 h-screen bg-pink-200">
    <div class="col-start-2 col-end-5 md:col-end-7 row-start-2 row-end-6">
      <div class="grid grid-cols-6 grid-rows-4 items-center content-center gap-2">
        <div class="row-span-full	col-span-full md:col-span-2">
          <img src="./assets/meow.jpg" alt="" class="shadow-xl shadow-slate-300 hover:shadow-slate-400" />
        </div>
        <div class="row-span-full	col-span-full md:col-span-2">
          <img src="./assets/yue.jpg" alt="" class="shadow-xl shadow-slate-300 hover:shadow-slate-400 ml-10 md:ml-0 mt-10 md:mt-0" />
        </div>
        <div class="row-span-full	col-span-full md:col-span-2">
          <img src="./assets/fan.jpg" alt="" class="shadow-xl shadow-slate-300 hover:shadow-slate-400 ml-20 md:ml-0 mt-20 md:mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>
