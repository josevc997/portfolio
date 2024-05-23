<script setup lang="ts"></script>
<template>
    <main
        class="min-h-screen h-full dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800 relative"
    >
        <header
            class="sticky top-0 w-full shadow py-2 bg-slate-100 dark:bg-slate-800 z-50"
        >
            <div
                class="max-w-5xl mx-auto flex justify-between px-4 items-center"
            >
                <NuxtLink to="/" aria-label="Go back to index page">
                    <NuxtImg
                        src="https://storage.googleapis.com/repositorio-central-1/josevalencia.cl/logos/logo.png"
                        alt="logo"
                        loading="lazy"
                        class="size-10"
                    />
                </NuxtLink>
                <div class="flex gap-2 items-center">
                    <ClientOnly>
                        <ColorSwitch />
                        <TheLanguageSelector />
                    </ClientOnly>
                </div>
                <!-- </form> -->
            </div>
        </header>
        <slot />
    </main>
</template>
