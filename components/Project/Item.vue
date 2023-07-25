<script lang="ts" setup>
defineProps<{
  index: number;
  item: {
    name: string;
    // icon: string;
    technologies: {
      name: string;
      icon: string;
    }[];
  };
}>();
</script>
<template>
  <div
    class="w-full border border-slate-300 rounded-md grid shadow-sm hover:shadow-2xl transition duration-500 ease-in-out group cursor-pointer hover:scale-105"
  >
    <div class="relative">
      <div
        class="absolute inset-0 rounded-t-md group-hover:bg-slate-950/50 h-full w-full transition duration-500 ease-in-out flex items-end group-hover:visible invisible p-2 gap-2"
      >
        <div
          v-for="(tech, index) in item.technologies"
          :key="index"
          class="text-sm font-bold text-slate-100 border rounded-full px-2 py-0.5"
        >
          <Icon :name="tech.icon" class="w-4 h-4 inline-block" />
          {{ tech.name }}
        </div>
      </div>
      <NuxtImg
        :src="`https://source.unsplash.com/random/600x300?sig=${index}`"
        class="aspect-[16/9] w-full object-cover rounded-t-md"
      />
    </div>
    <div class="px-2 p-2 group-hover:bg-slate-200">
      <h5 class="text-sm font-semibold">{{ item.name }}</h5>
    </div>
  </div>
</template>
