import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";
import { router } from "./router";

import _ from "lodash";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";

import "./style.css";
import App from "./App.vue";

import "flyonui/flyonui.js";
import "flyonui/dist/helper-apexcharts.js";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(
  createAuth0({
    domain: "your-domain.auth0.com",
    clientId: "your-client-id",
    cacheLocation: "localstorage",
    useRefreshTokens: true,
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);
app.mount("#app");
