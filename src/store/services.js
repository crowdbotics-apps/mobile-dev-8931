import axios from "axios"
import {
  NEW_PLUGIN_HELLO_WORLD_USERNAME,
  NEW_PLUGIN_HELLO_WORLD_PASSWORD
} from "react-native-dotenv"
const newPluginhelloworld = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/8931/storyboard/9855/",
  auth: {
    username: NEW_PLUGIN_HELLO_WORLD_USERNAME,
    password: NEW_PLUGIN_HELLO_WORLD_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
