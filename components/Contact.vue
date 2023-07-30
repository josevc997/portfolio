<script setup lang="ts">
const { t } = useI18n();

const contactForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  message: "",
});

const clearContactForm = () => {
  contactForm.firstName = "";
  contactForm.lastName = "";
  contactForm.email = "";
  contactForm.country = "";
  contactForm.message = "";
};

const ModalIsOpen = ref(false);

const handleOnSubmit = async () => {
  const { data: resDataSuccess } = await useFetch("/api/send", {
    method: "post",
    body: { text: "Nuxt is Awesome!", contactForm: contactForm },
  });
  console.log(resDataSuccess);

  if (resDataSuccess) {
    ModalIsOpen.value = true;
    clearContactForm();
  }
};
</script>
<template>
  <section id="contact" class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
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
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl"
      >
        {{ t("Contact") }}
      </h2>
    </div>
    <form
      name="contact"
      method="POST"
      @submit.prevent="handleOnSubmit"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
            >{{ t("FirstName") }}</label
          >
          <div class="mt-2.5">
            <input
              required
              type="text"
              name="first-name"
              id="first-name"
              v-model="contactForm.firstName"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-slate-200 shadow-sm dark:bg-slate-700 dark:ring-slate-600 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-indigo-500 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 focus:outline-0 !text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
            >{{ t("LastName") }}</label
          >
          <div class="mt-2.5">
            <input
              required
              type="text"
              name="last-name"
              id="last-name"
              v-model="contactForm.lastName"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-slate-200 shadow-sm dark:bg-slate-700 dark:ring-slate-600 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-indigo-500 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 focus:outline-0 !text-sm"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
            >{{ t("Email") }}</label
          >
          <div class="mt-2.5">
            <input
              required
              type="email"
              name="email"
              v-model="contactForm.email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-slate-200 shadow-sm dark:bg-slate-700 dark:ring-slate-600 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-indigo-500 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 focus:outline-0 !text-sm"
            />
          </div>
        </div>
        <div class="sm:col-span-1">
          <label
            for="country"
            class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
            >{{ t("Country") }}</label
          >
          <div class="mt-2.5">
            <input
              required
              type="text"
              name="country"
              id="country"
              v-model="contactForm.country"
              autocomplete="country"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-slate-200 shadow-sm dark:bg-slate-700 dark:ring-slate-600 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-indigo-500 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 focus:outline-0 !text-sm"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
            >{{ t("Message") }}</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              v-model="contactForm.message"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-slate-200 shadow-sm dark:bg-slate-700 dark:ring-slate-600 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-indigo-500 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 focus:outline-0 !text-sm"
              required
            />
          </div>
        </div>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md dark:bg-indigo-600 bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 !text-sm"
        >
          {{ t("Send") }}
        </button>
      </div>
    </form>
    <EmailSended
      :is-open="ModalIsOpen"
      @toggleModal="ModalIsOpen = !ModalIsOpen"
    />
  </section>
</template>
