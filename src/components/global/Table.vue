<template>
  <div>
    {{ config }}
    <v-data-table :headers="headers" :items="users">
      <template v-slot:item.full_name="{ item }">
        {{ item.first_name }} {{ item.last_name }}</template
      >
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    config: Object,
  },

  data() {
    return {
      headers: [],
      users: [],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      fetch("api/users").then((res) => {
        res.json().then(({ users }) => {
          this.users = users;
        });
      });

      this.tableHeadersCreator();
    },
    tableHeadersCreator() {
      this.config.headers.map((item, index) => {
        this.headers.push({ text: item, value: this.config.values[index] });
      });
    },
    convertArrayToObject(array, key) {
      const initialValue = {};
      let key1 = key;
      return array.reduce((obj, item) => {
        return {
          ...obj,
          key1: item,
        };
      }, initialValue);
    },
  },
};
</script>
