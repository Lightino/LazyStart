import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: [],
    selectedData: 0,
    access_token: null,
  }),
  actions: {
    setData(data) {
      this.data = data;
    },
    async fetchData(auth0) {
      try {
        
        if(!this.access_token) {
          this.access_token = await auth0.getAccessTokenSilently({
            authorizationParams: {
              audience: "https://dev-9mvz0nf6.us.auth0.com/api/v2/",
            }
          });
        }

        await fetch(import.meta.env.VITE_APIURL + "/api/users/me", {
          headers: { Authorization: `Bearer ${this.access_token}` },
        });

        const res = await fetch(import.meta.env.VITE_APIURL +"/api/endpoints", {
          headers: { Authorization: `Bearer ${this.access_token}` },
        });
        const json = await res.json();
        this.setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    },
  },
});
