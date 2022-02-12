<template>
  <div>
    <component
      v-if="uiconfig.type"
      :is="`Type${uiconfig.type}`"
      :config="uiconfig"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Members",

  data() {
    return {
      uiconfig: {},
    };
  },
  mounted() {
    this.getUiconfig();
  },

  methods: {
    getUiconfig() {
      axios
        .get(`api${this.$route.path}/uiconfig`, {
          root: this.$route.path,
        })
        .then((res) => (this.uiconfig = res.data.uiconfigs[0]));
      // fetch(`api${this.$route.path}/uiconfig`).then((res) => {
      //   console.log("Mahsa,", res);
      //   res.json().then(({ users }) => {
      //     this.users = users;
      //   });
      // });
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(
      //       {
      //         type: "table",
      //         fetchApi: "/userData",
      //         headers: ["first name", "last name", "full name", "phone number"],
      //         values: ["first_name", "last_name", "full_name", "number"],
      //       }

      //       // {
      //       //   type: "form",
      //       //   submitApi: "/user/create",
      //       //   onSuccess: "user is created successfully",
      //       //   onError: "something went wrong",
      //       //   fields: [
      //       //     {
      //       //       type: "text",
      //       //       label: "first name",
      //       //       name: "first_name",
      //       //     },
      //       //     {
      //       //       type: "text",
      //       //       label: "last name",
      //       //       name: "last_name",
      //       //     },
      //       //     {
      //       //       type: "checkbox",
      //       //       label: "married ?",
      //       //       name: "is_married",
      //       //     },
      //       //   ],
      //       // }
      //     );
      //   }, 300);
      // });
    },
  },
};
</script>
