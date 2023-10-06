import instance from "./index";

export const getAll = () => {
    const url = '/categories';
    return instance.get(url)
}

export const getID = (id) => {
    const url = `/categories/${id}`
    return instance.get(url)
}

