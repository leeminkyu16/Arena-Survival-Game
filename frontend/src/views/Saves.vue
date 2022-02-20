<template>
  <div>
    <DeleteModal
      :selected-item="selectedItem"
      @set-no-confirm="noConfirm = $event"
    />
    <MainView
      :no-confirm="noConfirm"
      @set-selected-item="selectedItem = $event"
    />
  </div>
</template>

<script>
import MainView from "@/components/saves/MainView.vue";
import DeleteModal from "../components/saves/DeleteModal.vue";

export default {
  name: "Saves",
  components: { MainView, DeleteModal },
  data() {
    return {
      selectedItem: {},
      noConfirm: false,
    };
  },
};
</script>
