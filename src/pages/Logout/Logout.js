import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logoutUser } from '~/redux/apiRequest'

function Logout() {
    const user = useSelector((state)=>state.auth.login.currentUser)
    const accessToken = user?.accessToken
    const id = user?._id

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
         logoutUser(accessToken,dispatch,navigate,id)
    })
    

    return ( <>this logout page</> );
}

export default Logout;