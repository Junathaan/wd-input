<template>
  <WdInput v-model="value" />
</template>

<script>
import WdInput from "./WdInput.vue";

export default {
  components: { WdInput },
  data() {
    return {
      value: 0
    };
  }
};
</script>
