import { request } from "../network/request"

export function PostTest({ username, password }) {
    return request({
        url: "/http/reg",
        method: "POST",
        data: {
            username: username,
            password: password
        }
    });
}