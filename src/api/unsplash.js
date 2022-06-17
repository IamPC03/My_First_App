import axios from "axios";

// axios - 3rd party package to make a requiest to API's for fetching data
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID F6wsbxUVy4PzxP05ZJM_yKaYUk3S9ezJLdK-4fzFz0g",
  },
});
