<template>
  <b-container>
    <b-row
      class="min-vh-90 text-center justify-content-center"
      align-v="center"
    >
      <div class="w-50">
        <MainCard />
      </div>
    </b-row>
  </b-container>
</template>

<script>
import MainCard from "@/components/create_account/MainCard.vue";

export default {
  name: "CreateAccount",
  components: { MainCard },
};
</script>

<style scoped>
.min-vh-90 {
  min-height: 90vh;
}
</style>
