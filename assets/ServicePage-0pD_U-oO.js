import{d as u,o as n,c as r,a as t,F as m,r as p,t as a,u as h,b as c}from"./index-1EBpjna7.js";const f=[{desc:"Simple coin system + PlaceholderAPI",cost:30,timeline:2},{desc:"x5 RPG items with simple abilities and effects",cost:140,timeline:4},{desc:"A PvP event plugin for a SMP server",cost:180,timeline:4},{desc:"Custom vehicles with Model Engine support",cost:280,timeline:7}],b={class:"grow m-auto w-full lg:w-3/4 xl:w-1/2 px-10 lg:px-0 py-24 flex flex-col gap-y-10"},g=c('<header><h1 class="text-4xl">Minecraft services</h1><p class="italic mt-3 text-justify">I am Anh Duy - I possess 6 years of experience within the Minecraft modding community, commencing in 2017. I have undertaken diverse responsibilities throughout my journey, such as plugin development, server ownership, and configuration management. I am pleased to apply my expertise in offering freelance development services, aiming to facilitate the creation of exceptional extensions that cater to the diverse needs of players.</p><p class="mt-3 font-semibold">Contact me through Discord: #duyanh or join my <a href="https://discord.gg/HRAEKapRwx" target="_blank" class="underline">Discord server</a></p></header><section><h3 class="text-3xl">Services</h3><ul class="list-disc list-inside"><li>Plugin development: Spigot, Paper, Bungeecord, Velocity</li><li>Plugin modification: extend functionalities of existing plugins</li><li>Plugin upgrade: update plugins from legacy versions</li><li>Other: Discord bots, Telegram bots, Programs, Web apps</li></ul></section><section><h3 class="text-3xl">Skills</h3><p>I have applied several technologies so far:</p><ul class="list-disc list-inside"><li>Minecraft modding: Spigot, Paper, Purpur, Bungeecord, Velocity, Fabric</li><li>Minecraft plugins: PlaceholderAPI, Vault, WorldEdit, WorldGuard, SlimeWorldManager, Geyser, Floodgate, MythicMobs, ItemsAdder/Oxaren, MMOItems, MMOCore, NBT API, ProtocolLib</li><li>Languages: Java, Kotlin, Go, PHP, HTML/CSS/JS/TS</li><li>Framework: Go/Fiber, TS/Vue.js/TailwindCSS</li><li>Database: MySQL, Microsoft SQL Server, PostgreSQL</li><li>Other: Redis, Nginx, Apache, Docker</li></ul></section><section><h3 class="text-3xl">Pricing</h3><ul class="list-disc list-inside"><li>The cost depends on 3 factors: complexity, familiarity and deadline</li><li>The cost includes full <b>source-code</b> and relevant <b>documents</b></li><li>You must pay <b>50%</b> upfront before I start the work</li><li>You must pay <b>50%</b> remaining before receiving the final product</li><li>Payment: PayPal (preferred) or cryptocurrency</li></ul></section><section><h3 class="text-3xl">Timeline</h3><ul class="list-disc list-inside"><li>The timeline depends on various factors: scope, complexity and familiarity</li><li>I usually finish the first draft in 50% of the timeline</li><li>The rest includes testing, bug fixing and minor adjustments</li><li>Under normal circumstances, you may expect to receive the product early</li></ul></section>',5),y=t("h3",{class:"text-3xl"},"Examples",-1),x=t("aside",{class:"italic"}," Here are some examples from earlier client requests. Note, the pricing and timeline can greatly fluctuate depending on the details of the project. Contact me for exact quote. ",-1),v={class:"w-full border-collapse border border-slate-400 text-sm"},_=t("thead",null,[t("tr",null,[t("th",{class:"border border-slate-400 p-2"},"Description"),t("th",{class:"border border-slate-400 p-2"},"Estimated cost"),t("th",{class:"border border-slate-400 p-2"},"Estimated time")])],-1),w={class:"border border-slate-400 p-1"},P={class:"border border-slate-400 p-1 text-center"},S={class:"border border-slate-400 p-1 text-center"},M=c('<section><h3 class="text-3xl">After-sales</h3><ul class="list-disc list-inside"><li>Free bug fixing</li><li>7-days free of <b>minor</b> adjustments</li></ul></section><section><h3 class="text-3xl">Terms of service</h3><p>When you purchase a product, you automatically agree to the following terms:</p><ol class="list-decimal list-inside"><li><b>Payment</b><ul class="list-disc list-inside"><li>You must complete 50% payment before I start the work</li><li>You must complete the reset of payment before I delivery the final product</li></ul></li><li><b>Refund</b><ul class="list-disc list-inside"><li>Within 50% of work completion, if you reconsider your decision, I am willing to refund the remaining amount based on the hours I&#39;ve worked, including any unfinished work</li><li>I do not accept refunds after you have made the final payment</li></ul></li><li><b>Distribution</b><ul class="list-disc list-inside"><li>✅ You are allowed to distribute the product and relevant files within your team</li><li>✅ You are allowed to share the product and relevant files publicly <b>for free</b></li><li>❌ You are <b>disallowed</b> to <b>resell</b> the product without my permission</li></ul></li></ol></section>',2),T=u({__name:"ServicePage",setup(I){function d(s){if(s<7)return`${s} day${s!==1?"s":""}`;if(s<=28){const i=Math.floor(s/7),e=s%7,l=i>0?`${i} week${i!==1?"s":""}`:"",o=e>0?`${e} day${e!==1?"s":""}`:"";return`${l}${i>0&&e>0?" and ":""}${o}`}else{const i=Math.floor(s/30),e=s%30,l=i>0?`${i} month${i!==1?"s":""}`:"",o=e>0?`${e} day${e!==1?"s":""}`:"";return`${l}${i>0&&e>0?" and ":""}${o}`}}return(s,i)=>(n(),r("div",b,[g,t("section",null,[y,x,t("table",v,[_,t("tbody",null,[(n(!0),r(m,null,p(h(f),e=>(n(),r("tr",null,[t("td",w,a(e.desc),1),t("td",P,"$"+a(e.cost),1),t("td",S,a(d(e.timeline)),1)]))),256))])])]),M]))}});export{T as default};