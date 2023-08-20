<script setup lang="ts">
const client = useSupabaseClient();

interface Tecnologia {
  id: number;
  nombre: string;
  simple_logo: string;
  logo: string;
  imagen: string;
}

const { data: list } = await useAsyncData("tecnologia", async () => {
  const { data } = await client.from("tecnologia").select(`
    *
  `);

  return data as Tecnologia[];
});
</script>
<template>
  <div>
    <h2 class="text-3xl font-bold">Tech Stack</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-20 mt-10"
    >
      <div
        v-for="item in list"
        class="flex flex-col gap-4 z-10 group items-center justify-center"
      >
        <Icon
          :name="item.logo"
          class="h-10 w-10 group-hover:scale-150 transition duration-500 ease-in-out stroke-white"
        />
        <p
          class="text-lg sm:text-transparent group-hover:text-inherit transition duration-500 ease-in-out font-semibold"
        >
          {{ item.nombre }}
        </p>
      </div>
    </div>
  </div>
</template>
