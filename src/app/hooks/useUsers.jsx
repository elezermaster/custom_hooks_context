import React,{useContext,useEffect,useState} from "react";
import userService from '../services/user.service'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const UsersContext = React.createContext()

export const useUsers = () => {
    return useContext(UsersContext)
}
export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getUsers = async () => {
            try {
                const {content} = await userService.fetchAll()
                setUsers(content)
                setLoading(false)
            } catch (e) {
                catchError(e)
            }
        }
        getUsers()
    },[]);
    const getUser = (id) => {
        return users.find(q => q._id === id)
    }
    const updateUser = async (id,data) => {
        try {
            const {content} = await userService.update(id,data)
            setUsers(prevState => prevState.map(item => {
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
    const addUser = async (data) => {
        try {
            const {content} = await userService.create(data)
            setUsers(prevState => [...prevState, content])
            return content
         } catch (e) {
            catchError(e)
         }
    }
    const deleteUser = async (id) => {
        try {
            const {content} = await userService.delete(id)
            setUsers(prevState => {
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
        console.log('error!',e)
        if (e.response?.data) {
            const {message} = e.response?.data
            console.log('message from catchError', message)
            setErrors({message})
        }
    }
    useEffect(() => {
        if (errors !== null) {
            toast.error(errors)
            setErrors(null)
        }
    },[errors])
    return (
        <UsersContext.Provider value={{
            users,
            //getUser,
            //updateUser,
            //addUser,
            //deleteUser,
            }}>
            {!isLoading ? children : <h1>Users Loading...</h1>}
        </UsersContext.Provider>
    )
}

UsersProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
//export default UsersProvider;
