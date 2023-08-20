<script lang="ts" setup>
const router = useRouter();
router.options.scrollBehavior = function (to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: "smooth",
    };
  }
  return { x: 0, y: 0, behavior: "smooth" };
};
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
