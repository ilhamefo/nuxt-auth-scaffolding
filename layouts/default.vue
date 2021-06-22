<template>
  <div class="mt-5">
    <keep-alive>
      <Nuxt keep-alive />
    </keep-alive>
    <div class="flex items-center justify-center mt-5">
      <NuxtLink to="/" class="underline mx-3"> Login </NuxtLink>
      <NuxtLink to="/register" class="underline mx-3"> Register </NuxtLink>
      <NuxtLink to="/dashboard" class="underline mx-3"> Dashboard </NuxtLink>
      <button class="underline mx-3" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style>
</style>
