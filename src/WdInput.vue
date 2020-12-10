<template>
  <div class="tw-input">
    <input
      type="text"
      name="tw-input"
      class="tw_input__input"
      v-model="value"
      disabled
    />
    <button type="button" class="tw_input__button tw-primary" @click="twVal++">
      +
    </button>
    <button type="button" class="tw_input__button tw-danger" @click="twVal--">
      -
    </button>
  </div>
</template>

<script>
import WdInputFactory from "./WdInputFactory";
const WdInput = WdInputFactory();
export default WdInput;
</script>

<style scoped>
.tw_input {
  width: 100%;
}
.tw_input__input {
  width: 75%;
  height: 40px;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #ececec;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  box-sizing: border-box;
}
.tw_input__input:focus {
  background-color: #fcfcfc;
}
.tw_input__button {
  width: 40px;
  height: 40px;
  padding: 4px;
  border: inherit;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}
.tw-primary {
  background-color: #1ebd60;
  background-color: blue;
}
.tw-danger {
  background-color: #b92b2b;
}
</style>
