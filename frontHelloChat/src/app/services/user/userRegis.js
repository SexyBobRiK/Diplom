import axios from "axios";
import { API_URL} from "../config";

const userRegister = async (name, surname, email, password, phone) => {
    try {
        const response = axios.post( API_URL + "/auth/registrations",{name, surname, email, password, phone})
        return response
    } catch (error) {
        console.log(error);
    }

}

export default userRegister;