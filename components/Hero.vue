<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <div class="min-h-screen">
    <div class="relative isolate px-6 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 min-h-screen flex justify-center items-center"
      >
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-6xl"
          >
            José Valencia
          </h1>
          <p
            class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 text-wr"
          >
            {{ t("FullStackDeveloper") }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/#projects"
              class="rounded-md bg-indigo-600 dark:bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {{ t("Projects") }}
            </NuxtLink>
            <NuxtLink
              :to="{ path: '/', hash: '#contact' }"
              class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-400 px-4 py-2.5"
              >{{ t("ContactMe") }} <span aria-hidden="true">→</span></NuxtLink
            >
          </div>
          <div
            class="flex items-center justify-center gap-8 text-slate-600 dark:text-slate-400 mt-8"
          >
            <a
              href="https://github.com/josevc997"
              target="_blank"
              class="transition duration-300 hover:text-slate-900"
              aria-label="watch more about my projects"
            >
              <Icon name="mdi:github" class="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/josevc997/"
              target="_blank"
              class="transition duration-300 hover:text-slate-900"
              aria-label="Read more about profesional profile"
            >
              <Icon name="mdi:linkedin" class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>
