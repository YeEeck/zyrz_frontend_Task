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

export function editStudent({ name, type, age, sex, idNo, Sclass, _id }) {
    return request({
        url: "/http/editStudent",
        method: "POST",
        data: {
            name: name,
            type: type,
            age: age,
            sex: sex,
            idNo: idNo,
            Sclass: Sclass,
            _id: _id
        }
    });
}

export function fliterStudent({ name, type, age, sex, idNo, Sclass }) {
    return request({
        url: "/http/fliterStudent",
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