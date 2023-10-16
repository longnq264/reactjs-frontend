import instance from "./index";

export const getAll = () => {
    const url = '/products';
    return instance.get(url)
}
export const getID = (id) => {
    const url = `/product/${id}`
    return instance.get(url)
}
export const create = () => {
    const url = `/product`
    return instance.post(url)
}