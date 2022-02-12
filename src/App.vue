<template>
  <v-app>
    <v-app-bar app color="grey darken-4" dark>
      <v-btn text href="" v-for="nav in navs" :key="nav.route" :to="nav.route">
        {{ nav.name }}
      </v-btn>
      <v-spacer></v-spacer>
      <span class="font-weight-bold grey--text text--lighten-1">
        Test Project For Pyango
      </span>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      navs: [
        { name: "Home", route: "/" },
        { name: "Members", route: "members" },
      ],
    };
  },
};
</script>
