import { request } from "../network/request"

export function getExam() {
    return request({
        url: "/http/getExam",
        method: "GET"
    });
}

export function addExam({ newTitle,
    newTip,
    newArea,
    newTime,
    newTeacher }) {
    return request({
        url: "/http/addExam",
        method: "POST",
        data: {
            title: newTitle,
            tip: newTip,
            area: newArea,
            time: newTime,
            teacher: newTeacher
        }
    });
}

export function delExam({ id }) {
    return request({
        url: "/http/delExam",
        method: "POST",
        data: {
            id: id
        }
    });
}

export function editExam({ title,
    tip,
    area,
    time,
    teacher,
    _id }) {
    return request({
        url: "/http/editExam",
        method: "POST",
        data: {
            title: title,
            tip: tip,
            area: area,
            time: time,
            teacher: teacher,
            _id: _id
        }
    });
}