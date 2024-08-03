import axiosInstance from "./request";

export const getChild= (config?: any) => axiosInstance.get('nose-femur', { params: config });
export const getAdult= (config?: any) => axiosInstance.get('height', { params: config });
export const editComment = (data: any) => axiosInstance.put('comment', data);
export const getResult = (config?: any) => axiosInstance.get('result', { params: config });


export const configCustomer = {
    navigate: "/customer",
    // urlInfo: "partner",
    urlEdit: "customer",
    urlAdd: "customer",
    urlGetInfo: "customer",
}


export const configParam = {
    navigate: "/param",
    // urlInfo: "partner",
    urlEdit: "subclass",
    urlAdd: "params",
    urlGetInfo: "param",
}

export const configChild = {
    navigate: "/nose-femur",
    // urlInfo: "partner",
    urlEdit: "nose-femur",
    urlAdd: "nose-femur",
    urlGetInfo: "nose-femur",
}

export const configAdult = {
    navigate: "/adult",
    // urlInfo: "partner",
    urlEdit: "height",
    urlAdd: "height",
    urlGetInfo: "height",
}

export const configPartner = {
    navigate: "/partner",
    // urlInfo: "partner",
    urlEdit: "partner",
    urlAdd: "partner",
    urlGetInfo: "partner",
}

export const configProduct = {
    navigate: "/product",
    // urlInfo: "partner",
    urlEdit: "product",
    urlAdd: "product",
    urlGetInfo: "product",
}

export const configCourse = {
    navigate: "/course",
    // urlInfo: "partner",
    urlEdit: "course",
    urlAdd: "course",
    urlGetInfo: "course",
}

export const configNation = {
    navigate: "/nation",
    // urlInfo: "partner",
    urlEdit: "nation",
    urlAdd: "nation",
    urlGetInfo: "nation",
}

export const configCity = {
    navigate: "/city",
    // urlInfo: "partner",
    urlEdit: "city",
    urlAdd: "city",
    urlGetInfo: "city",
}

export const configAgent = {
    navigate: "/agent",
    // urlInfo: "partner",
    urlEdit: "agent",
    urlAdd: "agent",
    urlGetInfo: "agent",
}

export const configSchool = {
    navigate: "/school",
    // urlInfo: "partner",
    urlEdit: "school",
    urlAdd: "school",
    urlGetInfo: "school",
}
