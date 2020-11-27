import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  Authorization: `Basic`[
    {
      username: "smartarzcompareapi",
      password: "GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF",
    }
  ],
};

const instance = axios.create({
  baseURL: "https://compareapi.smartarz.com",
});

instance.defaults.headers.common["Authorization"] = make_base_auth();

function make_base_auth() {
  var tok = "smartarzcompareapi" + ":" + "GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF";
  var hash = btoa(tok);
  return "Basic " + hash;
}

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
