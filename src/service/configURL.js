import axios from "axios";
import { USER } from "./localStoreService";
import { storeToolkit } from "../redux/reducers/store";
import { setLoadingEnd, setLoadingStart } from "../redux/reducers/SpinnerSlice";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjEzLzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDg4OTYwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcxMDM3MjAwfQ.bmkH3ZTAY_imW1WGWQrt5UXILbKPSLre4odX6sUKnbU";

let timeRequestMax = 10;

let getAccesstoken = () => {
  let jsonData = localStorage.getItem(USER);
  if (jsonData) {
    return JSON.parse(jsonData).accessToken;
  } else {
    return null;
  }
};
export const httpService = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * timeRequestMax,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer" + " " + getAccesstoken(),
  },
});

//* setLoading statr and end after api res
httpService.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    storeToolkit.dispatch(setLoadingStart());

    return config;
  },
  function (error) {
    // Do something with request error
    storeToolkit.dispatch(setLoadingEnd());
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    storeToolkit.dispatch(setLoadingEnd());
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    storeToolkit.dispatch(setLoadingEnd());

    // switch (error.response.status) {
    //   case 401:
    //     window.location.href = "./login";

    //   default:
    //     break;
    // }

    return Promise.reject(error);
  }
);
