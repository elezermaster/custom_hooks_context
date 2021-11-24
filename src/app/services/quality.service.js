import httpService from './http.service.js'
const QUALITY_END_POINT = `quality/`

    const qualityService = {
        update: async(id, content) => {
            const {data} = await httpService.put(
                QUALITY_END_POINT + id,
                content)
            return data
        },
        get: async(id) => {
            const {data} = await httpService.get(QUALITY_END_POINT + id)
            return data
        },
        fetchAll: async() => {
            const {data} = await httpService.get(QUALITY_END_POINT)
            return data
        },
        create: async(content) => {
            const {data} = await httpService.post(QUALITY_END_POINT, content)
            return data
        },
        delete: async(id) => {
            const {data} = await httpService.delete(QUALITY_END_POINT + id)
            return data
        }
    }

export default qualityService;
