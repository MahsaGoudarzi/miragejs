<template>
  <div>
    <validation-observer ref="observer" v-slot="{ valid, validate }">
      <v-form @submit.prevent="validate().then(addUser)">
        <h3>Create Your Own User:</h3>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="First Name"
              rules="required"
            >
              <v-text-field
                v-model="data.firstName"
                :error-messages="errors"
                label="First Name"
                outlined
                dense
                hide-details="auto"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="12" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="Last Name"
              rules="required"
            >
              <v-text-field
                v-model="data.lastName"
                label="Last Name"
                :error-messages="errors"
                outlined
                dense
                hide-details="auto"
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col>
            <v-btn color="success" type="submit" :disabled="!valid"
              >Submit</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>

    <v-divider></v-divider>

    <v-list v-if="users.length > 0" flat>
      <v-list-item-group>
        <user v-for="user in users" :key="user.id" :user="user" />
      </v-list-item-group>
    </v-list>

    <p v-else class="text-center mt-3 grey--text">
      There is nothing to show...
    </p>
  </div>
</template>

<script>
import User from "@/store/models/User";
import Mixin from "./Mixin.vue";
export default {
  name: "Users",
  mixins: [Mixin],

  components: {
    User: () => import("./User.vue"),
  },

  data() {
    return {
      data: {},
      products: [],
    };
  },

  created() {
    // fetch("api/users")
    //   .then((res) => res.json())
    //   .then(({ users }) => {
    //     this.products = users;
    //   });
    // console.log(this.$route.path);
    // fetch("api/products").then((res) => {
    //   console.log("uyta,", res);
    //   res.json().then(({ products }) => {
    //     this.products = products;
    //   });
    // });
    // fetch("api/products").then((res) => {
    //   console.log("uyta,", res);
    //   res.json().then(({ products }) => {
    //     this.products = products;
    //   });
    // });
  },

  computed: {
    users: () => User.all(),
  },

  methods: {
    addUser() {
      User.insert({ data: this.data });
      this.data = {};
      this.resetForm();
    },
  },
};
</script>
