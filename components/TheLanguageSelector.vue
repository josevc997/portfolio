<script setup lang="ts">
const { locale, availableLocales } = useI18n();
</script>
<template>
  <Listbox v-model="locale">
    <div class="relative text-lg">
      <ListboxButton
        class="relative w-full cursor-pointer rounded-lg bg-slate-100 dark:bg-slate-700 shadow min-w-[80px] flex justify-between items-center h-8 px-2 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm dark:text-slate-100"
      >
        <span class="block">{{ locale }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon
            name="heroicons:chevron-up-down-20-solid"
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="item in availableLocales"
            :key="item"
            :value="item"
            as="template"
          >
            <li
              :class="[
                active
                  ? 'bg-indigo-100 text-indigo-700 dark:text-indigo-200 dark:bg-indigo-950'
                  : 'text-slate-800 dark:text-slate-200',
                'cursor-pointer select-none py-1 px-2 flex justify-between',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ item }}</span
              >
              <span
                v-if="selected"
                class="text-indigo-600 dark:text-indigo-400"
              >
                <Icon
                  v-if="selected"
                  name="heroicons:check-circle-20-solid"
                  class="h-4 w-4"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
