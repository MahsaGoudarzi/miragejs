<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-icon class="indigo lighten-1" dark small> mdi-account </v-icon>
    </v-list-item-avatar>

    <v-list-item-content v-if="user.id === selectedUserId">
      <validation-observer ref="observer" v-slot="{ invalid, validate }">
        <v-form @submit.prevent="validate().then(editUser)">
          <v-row>
            <v-col cols="12" md="6">
              <validation-provider
                v-slot="{ errors }"
                name="First Name"
                rules="required"
              >
                <v-text-field
                  v-model="user.firstName"
                  label="First Name"
                  outlined
                  dense
                  :error-messages="errors"
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
                  v-model="user.lastName"
                  :error-messages="errors"
                  label="Last Name"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </validation-provider>
            </v-col>

            <v-col cols="12">
              <v-btn
                type="submit"
                color="primary"
                depressed
                small
                :disabled="invalid"
                >Save</v-btn
              >
              <v-btn
                class="ms-2"
                type="submit"
                color="grey lighten-2"
                depressed
                outlined
                small
                @click="selectedUserId = null"
                >Cancle</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </v-list-item-content>

    <v-list-item-content v-else>
      <v-list-item-title
        v-text="`${user.firstName} ${user.lastName}`"
      ></v-list-item-title>

      <v-list-item-subtitle
        v-text="'Just to show sth...'"
      ></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <div class="d-flex">
        <v-btn icon>
          <v-icon
            small
            color="blue darken-1"
            :disabled="user.id === selectedUserId"
            @click="selectedUserId = user.id"
            >mdi-pencil</v-icon
          >
        </v-btn>
        <v-btn icon>
          <v-icon small color="grey lighten-1" @click="deleteUser(user.id)"
            >mdi-trash-can-outline</v-icon
          >
        </v-btn>
      </div>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import User from "@/store/models/User";
import Mixin from "./Mixin.vue";

export default {
  name: "User",
  mixins: [Mixin],

  props: {
    user: Object,
  },

  data() {
    return {
      selectedUserId: null,
    };
  },

  methods: {
    editUser() {
      User.update({
        where: this.user.id,
        data: this.user,
      });
      this.selectedUserId = null;
      this.resetForm();
    },
    deleteUser(id) {
      User.delete(id);
    },
  },
};
</script>
