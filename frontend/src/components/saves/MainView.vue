<template>
  <div class="container">
    <div class="row min-vh-80">
      <div
        v-for="item in list"
        :key="item._id"
        class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
      >
        <SaveCard
          :item="item"
          :no-confirm="noConfirm"
          @set-selected-item="setSelectedItem"
        />
      </div>
    </div>
    <PaginationBar
      :bar-length="barLength"
      :num-of-pages="numOfPages"
      @set-current-page="setCurrentPage"
    />
  </div>
</template>

<script>
import PaginationBar from "./PaginationBar.vue";
import SaveCard from "./SaveCard.vue";
import { setNumOfSaves, getPaginated } from "./script/MainView";

const NUM_OF_SAVES_PER_PAGE = 12;
const MAX_BAR_LENGTH = 7;

export default {
  name: "MainView",
  components: {
    PaginationBar,
    SaveCard,
  },
  props: {
    noConfirm: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      list: [],
      currentPage: 1,
      numOfSaves: 0,
    };
  },
  computed: {
    numOfPages: function () {
      return Math.ceil(this.numOfSaves / NUM_OF_SAVES_PER_PAGE);
    },
    barLength: function () {
      return Math.min(this.numOfPages, MAX_BAR_LENGTH);
    },
  },
  mounted() {
    const mountTimeout = setTimeout(() => {
      setNumOfSaves(this);
      this.updatePage();
    }, 100);
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === "setAccessToken") {
        clearTimeout(mountTimeout);
        setNumOfSaves(this);
        getPaginated(this, this.currentPage, NUM_OF_SAVES_PER_PAGE);
        this.unsubscribe();
      }
    });

    this.$root.$on("saves-update-cards", this.updatePage);
  },
  methods: {
    updatePage: function () {
      return getPaginated(this, this.currentPage, NUM_OF_SAVES_PER_PAGE);
    },
    setCurrentPage: function (event) {
      this.currentPage = event;
      this.updatePage();
    },
    setSelectedItem: function (event) {
      this.$emit("set-selected-item", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./style/MainView.scss";
</style>
