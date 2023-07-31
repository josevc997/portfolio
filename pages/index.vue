<script setup lang="ts">
const { t, locale } = useI18n();
useHead({
  title: t("title"),
  meta: [
    {
      name: "description",
      content: t("description"),
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>
<template>
  <div class="max-w-5xl mx-auto space-y-8 pb-10 px-4">
    <Hero />
    <TechStack />
    <ProjectSection />
    <Contact />
  </div>
</template>
