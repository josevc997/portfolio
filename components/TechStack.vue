<script setup lang="ts">
interface Tecnologia {
    id: number;
    nombre: string;
    simple_logo: string | null;
    logo: string | null;
    imagen: string | null;
    created_at: string | null;
}

const list: Tecnologia[] = [
    {
        id: 1,
        created_at: "2023-08-20T02:37:55.699715+00:00",
        nombre: "Nuxt 3",
        imagen: null,
        logo: "logos:nuxt-icon",
        simple_logo: "mdi:nuxt",
    },
    {
        id: 2,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Python",
        imagen: null,
        logo: "logos:python",
        simple_logo: null,
    },
    {
        id: 3,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Javascript",
        imagen: null,
        logo: "logos:javascript",
        simple_logo: null,
    },
    {
        id: 4,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Django",
        imagen: null,
        logo: "logos:django-icon",
        simple_logo: null,
    },
    {
        id: 5,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Vue",
        imagen: null,
        logo: "logos:vue",
        simple_logo: null,
    },
    {
        id: 6,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "React",
        imagen: null,
        logo: "logos:react",
        simple_logo: null,
    },
    {
        id: 7,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Mysql",
        imagen: null,
        logo: "logos:mysql",
        simple_logo: null,
    },
    {
        id: 8,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "AWS",
        imagen: null,
        logo: "logos:aws",
        simple_logo: null,
    },
    {
        id: 9,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "G Cloud",
        imagen: null,
        logo: "logos:google-cloud",
        simple_logo: null,
    },
    {
        id: 10,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "TailwindCSS",
        imagen: null,
        logo: "logos:tailwindcss-icon",
        simple_logo: null,
    },
    {
        id: 11,
        created_at: "2023-08-20T13:22:55.183011+00:00",
        nombre: "Bootstrap",
        imagen: null,
        logo: "logos:bootstrap",
        simple_logo: null,
    },
];
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
