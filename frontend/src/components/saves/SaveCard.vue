<template>
  <b-card :title="item.name" class="main-card">
    <b-card-text> Score: {{ item.score }} </b-card-text>
    <div class="d-flex justify-content-around">
      <b-button class="mx-auto" variant="primary" @click="onLoadClick">
        Load
      </b-button>
      <b-button class="mx-auto" variant="danger" @click="onDeleteClick">
        Delete
      </b-button>
    </div>
  </b-card>
</template>

<script>
import { loadSave, deleteSave } from "./script/SaveCard";

export default {
  name: "SaveCard",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    noConfirm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onLoadClick: function () {
      loadSave(this);
      this.$router.push("/singleplayer");
    },
    onDeleteClick: function () {
      if (this.noConfirm) {
        deleteSave(this, this.item._id);
      } else {
        this.$emit("set-selected-item", this.item);
        this.$bvModal.show("deleteModal");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./style/SaveCard.scss";
</style>
