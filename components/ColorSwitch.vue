<script lang="ts" setup>
// const enabled = ref(false);
const colorMode = useColorMode();

const enabled = ref(colorMode.preference === "dark");

watch(enabled, () => {
  colorMode.preference = enabled.value ? "dark" : "light";
});
</script>

<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-slate-700' : 'bg-slate-200'"
    class="relative inline-flex h-[30px] w-[58px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="enabled ? 'translate-x-7' : 'translate-x-0'"
      class="pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
    />
    <component
      :is="enabled ? 'Icon' : 'Icon'"
      :class="
        enabled
          ? 'text-slate-900 translate-x-8'
          : 'text-slate-400 translate-x-1'
      "
      :name="enabled ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'"
      class="h-4 w-4 my-auto absolute inset-y-0 transition duration-200 ease-in-out"
    />
  </Switch>
</template>
