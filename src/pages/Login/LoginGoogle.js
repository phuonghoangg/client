import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {loginUser} from '~/redux/apiRequest'
function LoginGoogle() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSuccess = (res)=>{
        const newUser = {
            username:res.profileObj.googleId,
            password:res.profileObj.googleId,
        }
        loginUser(newUser,dispatch,navigate)
    }

    const handleFail = (res)=>{
        console.log(res);
    }
    return <div id='signInButton'>
        <GoogleLogin 
        clientId="400182014504-o1u4v63usf1shqimgh40v38lc8hdffb6.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFail}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
        />
    </div>
}

export default LoginGoogle;