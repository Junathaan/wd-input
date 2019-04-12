<template>
    <div class="container">
      <div class="row">
        <div class="col-8 col-xs-12">
          <input type="text" name="tw-input" class="form-control" v-model="value" disabled>
        </div>
        <div class="col-4 col-xs-12 btn-group">
          <button type="button" class="btn btn-success" @click="twVal++">+</button>
          <button type="button" class="btn btn-danger" @click="twVal--">-</button>
        </div>
      </div>
    </div>
</template>

<script src="./WdInput.js"></script>
