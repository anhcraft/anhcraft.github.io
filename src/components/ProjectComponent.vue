<template>
    <div class="shadow-xl shadow-slate-400 border border-slate-300 p-10 bg-white">
        <h3 class="text-4xl font-bold">Projects</h3>
        <div class="mt-10" v-for="k in Object.keys(projects)">
            <h4 class="text-3xl">{{ k }}</h4>
            <hr/>
            <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                <ProjectCard v-for="p in projects[k]" :desc="p.desc" :link="p.link" :title="p.title"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "ProjectComponent",
    components: {ProjectCard},
    data() {
        return {
            projects: {
                "Minecraft": [
                    {
                        title: "Grimoire",
                        desc: "A Fabric server-side mod to enhance item upgrade mechanism",
                        link: "https://github.com/phomc/grimoire"
                    },
                    {
                        title: "TimedMMOItems",
                        desc: "Expirable items support for MMOItems.",
                        link: "https://www.spigotmc.org/resources/timedmmoitems.109230/"
                    },
                    {
                        title: "Portal",
                        desc: "Brings multi-dimensional tunnels to Paper server.",
                        link: "https://github.com/anhcraft/Portal"
                    },
                    {
                        title: "CraftKit",
                        desc: "Utility kit for Spigot and Bungeecord plugins | GUI, NPC, NBT, Skin and more.",
                        link: "https://www.spigotmc.org/resources/craftkit-spigot.39007/"
                    },
                    {
                        title: "BattleGames",
                        desc: "A minigame plugin with cross-server & multiple gamemodes support.",
                        link: "https://www.spigotmc.org/resources/battlegames-%E2%97%88-deathmatch-ctf-bedwars-1-12-1-17-1.69463/"
                    },
                    {
                        title: "Radiumenu",
                        desc: "An in-game menu plugin.",
                        link: "https://github.com/anhcraft/Radiumenu"
                    },
                ],
                "Games": [
                    {
                        title: "Dungeon",
                        desc: "My 2D dungeon game.",
                        link: "https://github.com/anhcraft/Dungeon"
                    },
                    {
                        title: "Go Racing!",
                        desc: "A simple 2D Godot game",
                        link: "https://github.com/anhcraft/racing"
                    }
                ],
            }
        }
    }
}
</script>
