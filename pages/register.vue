<template>
  <div class="flex flex-col items-center justify-center">
    <form @submit.prevent="register" class="flex flex-col w-1/3">
      <label for="email">name</label>
      <input
        type="text"
        v-model="name"
        autocomplete="false"
        class="border focus:outline-none mb-3"
      />
      <div>
        <span
          class="mb-1 text-red-500"
          v-for="(error, i) in authentication.err.name"
          :key="i"
        >
          {{ error }}
        </span>
      </div>
      <label for="email">email</label>
      <input
        type="text"
        v-model="email"
        class="border focus:outline-none mb-3"
        autocomplete="false"
      />
      <div>
        <span
          class="mb-1 text-red-500"
          v-for="(error, i) in authentication.err.email"
          :key="i"
        >
          {{ error }}
        </span>
      </div>
      <label for="password">password</label>
      <input
        type="password"
        v-model="password"
        class="border focus:outline-none mb-3"
      />
      <div>
        <span
          v-for="(error, i) in authentication.err.password"
          :key="i"
          class="mb-1 text-red-500"
        >
          {{ error }}
        </span>
      </div>
      <label for="password_confirmation">password confirmation</label>
      <input
        type="password"
        v-model="password_confirmation"
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
import { mapState } from "vuex";
export default {
  auth: "guest",
  computed: {
    ...mapState(["authentication"]),
  },
  data() {
    return {
      name: "",
      email: "",
      password: "Password@##1",
      password_confirmation: "Password@##1",
      err: [],
    };
  },
  methods: {
    register() {
      this.$store.dispatch("authentication/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
    },
  },
};
</script>

<style>
</style>
