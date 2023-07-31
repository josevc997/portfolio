<script setup lang="ts">
const techList = ref([
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Javascript",
    icon: "logos:javascript",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "Vue",
    icon: "logos:vue",
  },
  {
    name: "Nuxt 3",
    icon: "logos:nuxt-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Mysql",
    icon: "logos:mysql",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "G Cloud",
    icon: "logos:google-cloud",
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
]);
</script>
<template>
  <div>
    <h2 class="text-3xl font-bold">Tech Stack</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-20 mt-10"
    >
      <div
        v-for="item in techList"
        class="flex flex-col gap-4 z-10 group items-center justify-center"
      >
        <Icon
          :name="item.icon"
          class="h-10 w-10 group-hover:scale-150 transition duration-500 ease-in-out stroke-white"
        />
        <p
          class="text-lg sm:text-transparent group-hover:text-inherit transition duration-500 ease-in-out font-semibold"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>
