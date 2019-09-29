// import Vue from "vue";
import axiosInstance from "@/services/axios";

export default {
  namespaced: true,
  state: {
    meetups: {
      data: [],
      count: null
    },
    threads: {
      data: [],
      count: null
    },
    posts: {
      data: [],
      count: null
    }
  },

  actions: {
    fetchUserStats({ commit }) {
      // extra commit to reset state before fetching data
      //    commit("setItem", { resource: "stats", items: [] }, { root: true });
      return axiosInstance.get("/api/v1/users/me/activity").then(res => {
        const stats = res.data;
        commit("setStats", stats);
        return stats;
      });
    }
  },
  mutations: {
    setStats(state, stats) {
      return Object.assign(state, {}, stats);
    }
  }
};
