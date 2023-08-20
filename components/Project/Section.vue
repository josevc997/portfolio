<script setup lang="ts">
const { t } = useI18n();

const client = useSupabaseClient();

const { data: list } = await useAsyncData("proyecto", async () => {
  const { data } = await client.from("proyecto").select(`
    *,
    proyecto_tecnologia (
      *,
      tecnologia (*)
    )
  `);

  return data;
});
</script>
<template>
  <section id="projects" class="gap-8 grid pt-16">
    <h2 class="text-3xl font-bold">{{ t("Projects") }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProjectItem
        v-for="(item, index) in list"
        :index="index"
        :item="item"
        :key="index"
      />
    </div>
  </section>
</template>
