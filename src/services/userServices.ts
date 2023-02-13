import { AxiosInstance } from "../helpers/AxiosInstance"

const getUsers = () => {
    return AxiosInstance.get("/users")
}

const getUserById = (id: any) => {
    return AxiosInstance.get(`/users${id}`)
}

const updateUser = (data: any) => {
    return AxiosInstance.get(`/users`, data)
}

const DeleteUser = (id: any) => {
    return AxiosInstance.get(`/users${id}`)
}

export const UserServices = {
    getUsers,
    getUserById,
    updateUser,
    DeleteUser
}