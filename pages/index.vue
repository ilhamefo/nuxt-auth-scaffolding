<template>
  <div class="flex flex-col items-center justify-center">
    <form @submit.prevent="login" class="flex flex-col">
      <label for="email">email</label>
      <input
        type="text"
        v-model="email"
        class="border focus:outline-none mb-3"
      />
      <label for="password">password</label>
      <input
        type="password"
        v-model="password"
        class="border focus:outline-none mb-3"
      />
      <button
        type="submit"
        class="
          bg-blue-600
          py-2
          rounded
          text-white
          focus:outline-none
          focus:bg-blue-700
          transition-colors
        "
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "lonie23@example.com",
      password: "password",
    };
  },
  auth: "guest",
  methods: {
    login() {
      this.$store.dispatch("authentication/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>
</style>
