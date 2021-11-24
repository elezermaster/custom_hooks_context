import httpService from './http.service.js'
const PROFESSION_END_POINT = `profession/`

    const professionService = {
        update: async(id, content) => {
            const {data} = await httpService.put(
                PROFESSION_END_POINT + id,
                content)
            return data
        },
        get: async(id) => {
            const {data} = await httpService.get(PROFESSION_END_POINT + id)
            return data
        },
        fetchAll: async() => {
            const {data} = await httpService.get(PROFESSION_END_POINT)
            return data
        },
        create: async(content) => {
            const {data} = await httpService.post(PROFESSION_END_POINT, content)
            return data
        },
        delete: async(id) => {
            const {data} = await httpService.delete(PROFESSION_END_POINT + id)
            return data
        }
    }

export default professionService;
