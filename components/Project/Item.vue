<script lang="ts" setup>
defineProps<{
  index: number;
  item: {
    nombre: string;
    url: string;
    cover_image: string;
    id: number;
    proyecto_tecnologia: {
      id: number;
      tecnologia: {
        nombre: string;
        simple_logo: string;
      };
    }[];
  };
}>();
</script>
<template>
  <div
    class="w-full border border-slate-300 rounded-md grid shadow-sm hover:shadow-2xl transition duration-500 ease-in-out group cursor-pointer hover:scale-105 !z-10 bg-slate-100 dark:bg-slate-700 dark:border-slate-600"
  >
    <div class="relative">
      <div
        class="absolute inset-0 rounded-t-md group-hover:bg-slate-950/50 h-full w-full transition duration-500 ease-in-out flex items-end group-hover:visible invisible p-2 gap-2"
      >
        <div class="flex flex-wrap gap-1">
          <div
            v-for="(tech, index) in item.proyecto_tecnologia"
            :key="index"
            class="text-sm font-bold text-slate-100 border rounded-full px-2 py-0.5 flex items-center gap-1"
          >
            <Icon
              :name="tech.tecnologia.simple_logo"
              class="w-4 h-4 inline-block"
            />
            <p>
              {{ tech.tecnologia.nombre }}
            </p>
          </div>
        </div>
      </div>
      <NuxtImg
        :src="item.cover_image"
        alt="Project Image"
        class="aspect-[16/9] w-full object-cover rounded-t-md"
        loading="lazy"
      />
    </div>
    <div
      class="px-2 p-2 group-hover:bg-slate-200 dark:group-hover:bg-slate-800"
    >
      <p class="text-sm font-semibold">{{ item.nombre }}</p>
    </div>
  </div>
</template>
