<script setup lang="ts">
const { t } = useI18n();

const projectList = [
  {
    name: "Project 1",
    technologies: [
      {
        name: "React",
        icon: "mdi:react",
      },
      {
        name: "Tailwind",
        icon: "mdi:tailwind",
      },
    ],
  },
  {
    name: "Project 2",
    technologies: [
      {
        name: "Vue",
        icon: "mdi:vuejs",
      },
      {
        name: "Tailwind",
        icon: "mdi:tailwind",
      },
    ],
  },
  {
    name: "Project 3",
    technologies: [
      {
        name: "Nuxt",
        icon: "mdi:nuxt",
      },
      {
        name: "Tailwind",
        icon: "mdi:tailwind",
      },
    ],
  },
  {
    name: "Project 4",
    technologies: [
      {
        name: "Python",
        icon: "mdi:language-python",
      },
      {
        name: "Nuxt3",
        icon: "mdi:nuxt",
      },
      {
        name: "Tailwind",
        icon: "mdi:tailwind",
      },
    ],
  },
];
</script>
<template>
  <section id="projects" class="gap-8 grid">
    <h3>{{ t("Projects") }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProjectItem
        v-for="(item, index) in projectList"
        :index="index"
        :item="item"
        :key="index"
      />
    </div>
  </section>
</template>
