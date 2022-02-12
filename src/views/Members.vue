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
    },
  },
};
</script>
