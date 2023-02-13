import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: `https://gorest.co.in/public/v2`,
    headers: {
        Authorization:
            "Bearer d0e808a2783eb499a5726ae9f87a03ef704b0ea8688c8bf297625f7e5db1f7b4",
        "Content-Type": "application/json",
    },
});