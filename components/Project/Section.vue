<script setup lang="ts">
const { t } = useI18n();

const list = [
    {
        id: 2,
        created_at: "2023-08-21T01:43:28.840836+00:00",
        nombre: "Curacavi Information",
        url: "https://www.curacavi.info/",
        cover_image:
            "https://curacavi.s3.amazonaws.com/portfolio/curacavi.info.webp",
        proyecto_tecnologia: [],
    },
    {
        id: 1,
        created_at: "2023-08-20T02:24:39.986991+00:00",
        nombre: "Marvel Heroes",
        url: "https://mvheroes.josevalencia.cl/",
        cover_image:
            "https://curacavi.s3.amazonaws.com/portfolio/mvheroes.webp",
        proyecto_tecnologia: [
            {
                id: 1,
                created_at: "2023-08-20T02:39:34.299743+00:00",
                tecnologia: {
                    id: 1,
                    logo: "logos:nuxt-icon",
                    imagen: null,
                    nombre: "Nuxt 3",
                    created_at: "2023-08-20T02:37:55.699715+00:00",
                    simple_logo: "mdi:nuxt",
                },
                proyecto_id: 1,
                tecnologia_id: 1,
            },
        ],
    },
];
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
