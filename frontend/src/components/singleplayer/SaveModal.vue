<template>
  <b-modal
    id="saveModal"
    title="Save"
    size="xl"
    centered
    lazy
    ok-title="Submit"
    cancel-title="Close"
    no-close-on-backdrop
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
    @cancel="handleCancel"
    @close="handleClose"
  >
    <label class="lead form-label">
      <strong>
        Enter a save name below and click "Submit" if you would like to save.
      </strong>
    </label>
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Name"
        label-for="name-input"
        invalid-feedback="Name is required"
        :state="nameState"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState"
          required
        >
        </b-form-input>
      </b-form-group>
    </form>

    <label class="lead form-label">
      <strong> Current Score: {{ score }} </strong>
    </label>
  </b-modal>
</template>

<script>
import { SaveDataService } from "../../services/save_data_service";

export default {
  name: "SaveModal",
  components: {},
  props: {
    startGame: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      name: "",
      nameState: null,
    };
  },
  computed: {
    score: {
      get() {
        return this.$store.getters.score;
      },
    },
  },
  mounted() {},
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(modalEvent) {
      modalEvent.preventDefault();
      this.handleSubmit();
    },
    handleCancel() {
      this.startGame();
    },
    handleClose() {
      this.startGame();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      SaveDataService.create(
        this,
        this.name,
        this.$store.state.saveData.currentSave,
        this.$store.state.gameInfo.score
      ).then(() => {
        this.startGame();
        this.$bvModal.hide("saveModal");
      });
    },
  },
};
</script>
