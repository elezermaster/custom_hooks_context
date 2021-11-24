import httpService from './http.service.js'
const USER_END_POINT = `user/`

    const userService = {
        update: async(id, content) => {
            const {data} = await httpService.put(
                USER_END_POINT + id,
                content)
            return data
        },
        get: async(id) => {
            const {data} = await httpService.get(USER_END_POINT + id)
            return data
        },
        fetchAll: async() => {
            const {data} = await httpService.get(USER_END_POINT)
            return data
        },
        create: async(content) => {
            const {data} = await httpService.post(USER_END_POINT, content)
            return data
        },
        delete: async(id) => {
            const {data} = await httpService.delete(USER_END_POINT + id)
            return data
        }
    }

export default userService;
