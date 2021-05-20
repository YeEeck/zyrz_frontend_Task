import axios from "axios";

export function request(config) {
    const instant = axios.create({
        baseURL: "https://506a257f-af16-4566-a795-4ef6c9c9aca4.bspapp.com/",
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 8000,
    });

    return instant(config);
}