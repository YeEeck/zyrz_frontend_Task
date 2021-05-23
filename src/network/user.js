import { request } from "../network/request"

export function getStudents() {
    return request({
        url: "/http/getStudents",
        method: "GET",
    });
}

export function addStudent({ name, type, age, sex, idNo, Sclass }) {
    return request({
        url: "/http/addStudent",
        method: "POST",
        data: {
            name: name,
            type: type,
            age: age,
            sex: sex,
            idNo: idNo,
            Sclass: Sclass
        }
    });
}

export function delStudent({ id }) {
    return request({
        url: "/http/delStudent",
        method: "POST",
        data: {
            id: id
        }
    });
}