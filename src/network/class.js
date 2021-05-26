import { request } from "../network/request"

export function delClass({ id }) {
    return request({
        url: "/http/exam",
        method: "POST",
        data: {
            mtype: "3",
            id: id
        }
    });
}

export function getClass() {
    return request({
        url: "/http/class",
        method: "POST",
        data: {
            mtype: "1"
        }
    });
}
