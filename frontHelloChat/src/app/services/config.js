function getUserToken() {
    const userToken = JSON.parse(localStorage.getItem("token"))
    return userToken;
}

 const API_URL = "http://localhost:3000/api/v1"

 const config = {
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getUserToken()}`
    }
}


export { API_URL, config }