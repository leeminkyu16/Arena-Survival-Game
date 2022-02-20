<template>
  <div class="row">
    <div class="col">
      <b-button :class="buttonClass" @click="onPreviousClick">
        Previous
      </b-button>
    </div>

    <div v-for="offset in barLength" :key="offset" class="col">
      <b-button
        v-if="isSelected(offset)"
        :value="offset"
        variant="primary"
        :class="buttonClass"
        @click="onBarNumberClick"
      >
        {{ offset + currentBarPage }}
      </b-button>
      <b-button
        v-else
        :value="offset"
        variant="secondary"
        :class="buttonClass"
        @click="onBarNumberClick"
      >
        {{ offset + currentBarPage }}
      </b-button>
    </div>

    <div class="col">
      <b-button :class="buttonClass" @click="onAfterClick"> Next </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationBar",
  components: {},
  props: {
    barLength: {
      type: Number,
      default: 0,
    },
    numOfPages: {
      type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      currentPage: 1,
      currentBarPage: 0,
    };
  },
  computed: {
    buttonClass: function () {
      return `button-${this.barLength}`;
    },
  },
  methods: {
    isSelected: function (offset) {
      return this.currentPage === offset + this.currentBarPage;
    },
    onPreviousClick: function () {
      if (this.currentBarPage > 0) {
        if (this.currentPage - 1 <= this.currentBarPage + this.barLength / 2) {
          this.currentBarPage--;
        }
        this.$emit("set-current-page", --this.currentPage);
      } else if (this.currentPage > 1) {
        this.$emit("set-current-page", --this.currentPage);
      }
    },
    onBarNumberClick: function (event) {
      this.currentPage = Math.min(
        parseInt(event.target.value) + this.currentBarPage,
        this.numOfPages
      );
      this.$emit("set-current-page", this.currentPage);
      this.currentBarPage = Math.min(
        Math.max(this.currentPage - Math.round(this.barLength / 2), 0),
        Math.max(this.numOfPages - this.barLength, 0)
      );
    },
    onAfterClick: function () {
      if (this.currentBarPage + this.barLength < this.numOfPages) {
        if (this.currentPage >= this.currentBarPage + this.barLength / 2) {
          this.currentBarPage++;
        }
        this.$emit("set-current-page", ++this.currentPage);
      } else if (this.currentPage < this.numOfPages) {
        this.$emit("set-current-page", ++this.currentPage);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./style/PaginationBar.scss";
</style>
