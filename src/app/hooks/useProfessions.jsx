import React,{useContext,useEffect,useState} from "react";
import professionService from '../services/profession.service'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const ProfessionsContext = React.createContext()

export const useProfessions = () => {
    return useContext(ProfessionsContext)
}
export const ProfessionsProvider = ({children}) => {
    const [professions, setProfessions] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getProfessions = async () => {
            try {
                const {content} = await professionService.fetchAll()
                setProfessions(content)
                setLoading(false)
            } catch (e) {
                catchError(e)
            }
        }
        getProfessions()
    },[]);
    const getProfession = (id) => {
        return professions.find(q => q._id === id)
    }
    const updateProfession = async (id,data) => {
        try {
            const {content} = await professionService.update(id,data)
            setProfessions(prevState => prevState.map(item => {
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
    const addProfession = async (data) => {
        try {
            const {content} = await professionService.create(data)
            setProfessions(prevState => [...prevState, content])
            return content
         } catch (e) {
            catchError(e)
         }
    }
    const deleteProfession = async (id) => {
        try {
            const {content} = await professionService.delete(id)
            setProfessions(prevState => {
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
        <ProfessionsContext.Provider value={{
            professions,
            isLoading,
            getProfession,
            //getQuality,
            //updateQuality,
            //addQuality,
            //deleteQuality,
            }}>
            {/* {!isLoading ? children : <h1>Professions Loading...</h1>} */}
            {children}
        </ProfessionsContext.Provider>
    )
}

ProfessionsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
