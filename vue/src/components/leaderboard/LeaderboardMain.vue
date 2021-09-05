<template>
  <div>
    <b-container class="w-75">
      <b-row class="py-3">
        <b-form-input
          v-model="searchName"
          placeholder="Name to Search"
          class="px-3"
        ></b-form-input>
      </b-row>
      <b-row class="pb-3">
        <b-button
          block
          @click="getLeaderboardEntries(searchName, 'decreasing')"
        >
          Refresh
        </b-button>
      </b-row>

      <b-row class="py-3">
        <b-table
          striped
          hover
          :items="leaderboardData"
          :fields="leaderboardTableFields"
        >
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { LeaderboardDataService } from "../../services/leaderboard_data_service";

export default {
  name: "LeaderboardMain",
  components: {},
  data: function () {
    return {
      searchName: "",
      leaderboardData: null,
      leaderboardTableFields: [
        {
          key: "playerName",
          sortable: true,
        },
        {
          key: "score",
          sortable: true,
        },
        {
          label: "Date and Time",
          key: "createdAt",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.getLeaderboardEntries("", "decreasing");
  },
  methods: {
    getLeaderboardEntries(playerRegex, scoreOrder) {
      LeaderboardDataService.getAll(playerRegex, scoreOrder)
        .then((response) => {
          this.leaderboardData = response.data.map(function (element) {
            element.createdAt = new Date(element.createdAt).toLocaleString();
            return element;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
