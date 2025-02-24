import axios from "axios";
import { transformUserData } from "../utils/transform";

export const fetchAndTransformUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    return transformUserData(response.data.users);
};
