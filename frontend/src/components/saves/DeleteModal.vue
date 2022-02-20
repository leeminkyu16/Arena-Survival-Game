<template>
  <b-modal
    id="deleteModal"
    title="Confirm Save"
    centered
    lazy
    ok-title="Yes"
    ok-variant="danger"
    cancel-title="No"
    @ok="handleOk"
  >
    <label class="lead form-label">
      <strong> Are you sure you want to delete this save? </strong>
    </label>
    <b-form-checkbox id="delete-checkbox-no-confirm" v-model="noConfirm">
      Don't ask me again
    </b-form-checkbox>
  </b-modal>
</template>

<script>
import { deleteSave } from "./script/DeleteModal";

export default {
  name: "DeleteModal",
  components: {},
  props: {
    selectedItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      noConfirm: false,
    };
  },
  computed: {},
  methods: {
    handleOk() {
      if (this.noConfirm) {
        this.$emit("set-no-confirm", this.noConfirm);
      }
      // TO DO: Somehow get MainView to update after this
      deleteSave(this, this.selectedItem._id);
    },
  },
};
</script>

<style lang="sass" scoped></style>
