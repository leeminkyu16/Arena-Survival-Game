<template>
  <div>
    <b-row class="text-center justify-content-center" align-v="center">
      <div class="w-100">
        <MainCard />
      </div>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCard from "@/components/home/MainCard.vue";

export default {
  name: "Home",
  components: {
    MainCard,
  },
};
</script>

<style scoped></style>
