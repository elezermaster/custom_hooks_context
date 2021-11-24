import React,{useContext,useEffect,useState} from "react";
import qualityService from '../services/quality.service'
import { toast } from 'react-toastify';
const QualitiesContext = React.createContext()

export const useQualities = () => {
    return useContext(QualitiesContext)
}
export const QualitiesProvider = ({children}) => {
    const [qualities, setQualities] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getQualities = async () => {
            try {
                const {content} = await qualityService.fetchAll()
                setQualities(content)
                setLoading(false)
            } catch (e) {
                catchError(e)
            }
        }
        getQualities()
    },[]);
    const getQuality = (id) => {
        return qualities.find(q => q._id === id)
    }
    const getQualitiesList = (ids) => {
        //  const listQualities = qualities.map(q => {
        //      if (ids.includes(q._id)) {
        //         return q
        //      }
        //  })
        const listQualities = qualities.filter(q => {
           return ids.includes(q._id)
        })
         return listQualities
    }
    const updateQuality = async (id,data) => {
        try {
            const {content} = await qualityService.update(id,data)
            setQualities(prevState => prevState.map(item => {
                if (item._id === content._id) {
                    return content
                }
                return item
            }))
            return content
         } catch (e) {
            catchError(e)
         }
    }
    const addQuality = async (data) => {
        try {
            const {content} = await qualityService.create(data)
            setQualities(prevState => [...prevState, content])
            return content
         } catch (e) {
            catchError(e)
         }
    }
    const deleteQuality = async (id) => {
        try {
            const {content} = await qualityService.delete(id)
            setQualities(prevState => {
              return prevState.filter(item =>
                    item._id !== content._id
                )
            })
            return content
         } catch (e) {
            catchError(e)
         }
    }
    const catchError = (e) => {
        //console.log("Expected Error!")
        console.log(e)
        const {message} = e.response.data
        setErrors({message})
    }
    useEffect(() => {
        if (errors !== null) {
            toast.error(errors)
            setErrors(null)
        }
    },[errors])
    return (
        <QualitiesContext.Provider value={{
            isLoading,
            qualities,
            getQuality,
            getQualitiesList,
            updateQuality,
            addQuality,
            deleteQuality,
            }}>
            {!isLoading ? children : <h1>Qualities Loading...</h1>}
        </QualitiesContext.Provider>
    )
}
