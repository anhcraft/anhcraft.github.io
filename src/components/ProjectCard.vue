<template>
    <div class="rounded-lg bg-white p-6 shadow-md shadow-slate-300">
        <h5 class="text-2xl">
            {{ title }}
        </h5>
        <p class="mb-5 text-lg">
            {{ desc }}
        </p>
        <a :href="link" class="inline-block rounded bg-blue-500 text-white px-6 py-2 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           target="_blank">
            Website
        </a>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        desc: String,
        link: String
    }
}
</script>
