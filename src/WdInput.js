export default {
  props: {
    value: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    twVal: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};