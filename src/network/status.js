import { request } from "../network/request"

export function getStatus() {
    return request({
        url: "/http/getStatus",
        method: "GET",
    });
}

export function addStatus({ name,
    type,
    Sclass,
    pType,
    project,
    time }) {
    return request({
        url: "/http/addStatus",
        method: "POST",
        data: {
            name: name,
            type: type,
            Ptype: pType,
            Sclass: Sclass,
            project: project,
            time: time
        }
    });
}

export function delStatus({ id }) {
    return request({
        url: "/http/delStatus",
        method: "POST",
        data: {
            id: id
        }
    });
}

export function editStatus({ name,
    type,
    Sclass,
    pType,
    project,
    time,
    _id }) {
    return request({
        url: "/http/editStatus",
        method: "POST",
        data: {
            name: name,
            type: type,
            Ptype: pType,
            Sclass: Sclass,
            project: project,
            time: time,
            _id: _id
        }
    });
}

export function fliterStatus({ name,
    type,
    Sclass,
    pType,
    project,
    time }) {
    return request({
        url: "/http/fliterStatus",
        method: "POST",
        data: {
            name: name,
            type: type,
            Ptype: pType,
            Sclass: Sclass,
            project: project,
            time: time
        }
    });
}