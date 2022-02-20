<template>
  <b-modal
    id="gameOverModal"
    title="Game Over"
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
        Enter your name below and click "Submit" if you would like to publish
        your score to the leaderboard.
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
      <strong> Score: {{ score }} </strong>
    </label>
  </b-modal>
</template>

<script>
import { LeaderboardDataService } from "../../services/leaderboard_data_service";

export default {
  name: "GameOverModal",
  components: {},
  data() {
    return {
      name: "",
      nameState: null,
    };
  },
  computed: {
    score: {
      get() {
        return this.$store.state.gameInfo.score;
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
    handleCancel(modalEvent) {
      modalEvent.preventDefault();
      this.$router.push("/");
    },
    handleClose(modalEvent) {
      modalEvent.preventDefault();
      this.$router.push("/");
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      LeaderboardDataService.post(
        this.name,
        this.$store.state.gameInfo.score
      ).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
