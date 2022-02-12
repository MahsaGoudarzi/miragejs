<template>
  <div>
    <div v-for="field in config.fields" :key="field.label">
      <v-text-field
        v-if="field.type === 'text'"
        v-model="model[field.name]"
        :label="field.label"
        :placeholder="field.label"
        dense
        outlined
      ></v-text-field>

      <v-checkbox
        v-if="field.type === 'checkbox'"
        v-model="model[field.name]"
        :label="field.label"
      ></v-checkbox>
    </div>

    <v-btn
      type="submit"
      color="success"
      depressed
      outlined
      rounded
      class="mb-3"
      :disabled="Object.keys(model).length < 2"
      @click="submitForm"
      >Submit</v-btn
    >
    <v-divider></v-divider>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:item.is_married="{ item }">
        <v-icon :color="item.is_married ? 'green' : 'red'">
          {{ item.is_married ? "mdi-check" : "mdi-close" }}
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    config: Object,
  },
  data() {
    return {
      model: {},
      headers: [],
      items: [],
    };
  },

  mounted() {
    this.tableHeadersCreator();
  },

  methods: {
    tableHeadersCreator() {
      this.config.fields.map((item) => {
        this.headers.push({
          text: item.label,
          value: item.name,
        });
      });
    },

    async getData() {
      await axios
        .get("api/user")
        .then((res) => {
          this.items = res.data.myusers;
          this.items.shift();
          alert(this.config.onSuccess);
        })
        .catch((err) => alert(this.config.onError));
    },

    resetForm() {
      this.$refs.observer.reset();
    },

    async submitForm() {
      await axios.post(`api${this.config.submitApi}`, this.model);
      this.model = {};
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped></style>
