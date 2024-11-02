import axios from "axios";
import { API_URL } from "../config";

const userSignIn = async (values) => {
    try {
        console.log(API_URL);
        const response = await axios.post(API_URL + "/auth/sign-in", values);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default userSignIn;