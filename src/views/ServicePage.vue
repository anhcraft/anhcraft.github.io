<script setup lang="ts">
import exampleOrders from "../data/exampleOrders";

function formatDays(days: number): string {
  if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''}`;
  } else if (days <= 28) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    const weeksText = weeks > 0 ? `${weeks} week${weeks !== 1 ? 's' : ''}` : '';
    const daysText = remainingDays > 0 ? `${remainingDays} day${remainingDays !== 1 ? 's' : ''}` : '';
    return `${weeksText}${weeks > 0 && remainingDays > 0 ? ' and ' : ''}${daysText}`;
  } else {
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    const monthsText = months > 0 ? `${months} month${months !== 1 ? 's' : ''}` : '';
    const daysText = remainingDays > 0 ? `${remainingDays} day${remainingDays !== 1 ? 's' : ''}` : '';
    return `${monthsText}${months > 0 && remainingDays > 0 ? ' and ' : ''}${daysText}`;
  }
}
</script>

<template>
  <div class="grow m-auto w-full lg:w-3/4 xl:w-1/2 px-10 lg:px-0 py-24 flex flex-col gap-y-10">
    <header>
      <h1 class="text-4xl">Minecraft services</h1>
      <p class="italic mt-3 text-justify">I am Anh Duy - I possess 6 years of experience within the Minecraft modding community, commencing in 2017. I have undertaken diverse responsibilities throughout my journey, such as plugin development, server ownership, and configuration management. I am pleased to apply my expertise in offering freelance development services, aiming to facilitate the creation of exceptional extensions that cater to the diverse needs of players.</p>
      <p class="mt-3 font-semibold">Contact me through Discord: #duyanh or join my <a href="https://discord.gg/HRAEKapRwx" target="_blank" class="underline">Discord server</a></p>
    </header>
    <section>
      <h3 class="text-3xl">Services</h3>
      <ul class="list-disc list-inside">
        <li>Plugin development: Spigot, Paper, Bungeecord, Velocity</li>
        <li>Plugin modification: extend functionalities of existing plugins</li>
        <li>Plugin upgrade: update plugins from legacy versions</li>
        <li>Other: Discord bots, Telegram bots, Programs, Web apps</li>
      </ul>
    </section>
    <section>
      <h3 class="text-3xl">Skills</h3>
      <p>I have applied several technologies so far:</p>
      <ul class="list-disc list-inside">
        <li>Minecraft modding: Spigot, Paper, Purpur, Bungeecord, Velocity, Fabric</li>
        <li>Minecraft plugins: PlaceholderAPI, Vault, WorldEdit, WorldGuard, SlimeWorldManager, Geyser, Floodgate, MythicMobs, ItemsAdder/Oxaren, MMOItems, MMOCore, NBT API, ProtocolLib</li>
        <li>Languages: Java, Kotlin, Go, PHP, HTML/CSS/JS/TS</li>
        <li>Framework: Go/Fiber, TS/Vue.js/TailwindCSS</li>
        <li>Database: MySQL, Microsoft SQL Server, PostgreSQL</li>
        <li>Other: Redis, Nginx, Apache, Docker</li>
      </ul>
    </section>
    <section>
      <h3 class="text-3xl">Pricing</h3>
      <ul class="list-disc list-inside">
        <li>The cost depends on 3 factors: complexity, familiarity and deadline</li>
        <li>The cost includes full <b>source-code</b> and relevant <b>documents</b></li>
        <li>You must pay <b>50%</b> upfront before I start the work</li>
        <li>You must pay <b>50%</b> remaining before receiving the final product</li>
        <li>Payment: PayPal (preferred) or cryptocurrency</li>
      </ul>
    </section>
    <section>
      <h3 class="text-3xl">Timeline</h3>
      <ul class="list-disc list-inside">
        <li>The timeline depends on various factors: scope, complexity and familiarity</li>
        <li>I usually finish the first draft in 50% of the timeline</li>
        <li>The rest includes testing, bug fixing and minor adjustments</li>
        <li>Under normal circumstances, you may expect to receive the product early</li>
      </ul>
    </section>
    <section>
      <h3 class="text-3xl">Examples</h3>
      <aside class="italic">
        Here are some examples from earlier client requests. Note, the pricing and timeline can greatly fluctuate depending
        on the details of the project. Contact me for exact quote.
      </aside>
      <table class="w-full border-collapse border border-slate-400 text-sm">
        <thead>
        <tr>
          <th class="border border-slate-400 p-2">Description</th>
          <th class="border border-slate-400 p-2">Estimated cost</th>
          <th class="border border-slate-400 p-2">Estimated time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in exampleOrders">
          <td class="border border-slate-400 p-1">{{order.desc}}</td>
          <td class="border border-slate-400 p-1 text-center">${{order.cost}}</td>
          <td class="border border-slate-400 p-1 text-center">{{formatDays(order.timeline)}}</td>
        </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3 class="text-3xl">After-sales</h3>
      <ul class="list-disc list-inside">
        <li>Free bug fixing</li>
        <li>7-days free of <b>minor</b> adjustments</li>
      </ul>
    </section>
    <section>
      <h3 class="text-3xl">Terms of service</h3>
      <p>When you purchase a product, you automatically agree to the following terms:</p>
      <ol class="list-decimal list-inside">
        <li><b>Payment</b>
          <ul class="list-disc list-inside">
            <li>You must complete 50% payment before I start the work</li>
            <li>You must complete the reset of payment before I delivery the final product</li>
          </ul>
        </li>
        <li><b>Refund</b>
          <ul class="list-disc list-inside">
            <li>Within 50% of work completion, if you reconsider your decision, I am willing to refund the remaining amount based on the hours I've worked, including any unfinished work</li>
            <li>I do not accept refunds after you have made the final payment</li>
          </ul>
        </li>
        <li><b>Distribution</b>
          <ul class="list-disc list-inside">
            <li>✅ You are allowed to distribute the product and relevant files within your team</li>
            <li>✅ You are allowed to share the product and relevant files publicly <b>for free</b></li>
            <li>❌ You are <b>disallowed</b> to <b>resell</b> the product without my permission</li>
          </ul>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>

</style>