import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux/';
import { loginUser } from '~/redux/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Button, Form } from 'react-bootstrap';
import {gapi} from 'gapi-script'
import LoginGoogle from './LoginGoogle';

const cx = classNames.bind(styles);
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
        };
        loginUser(newUser, dispatch, navigate);
    };

    useEffect(()=>{
        function start(){
          gapi.client.init({
            clientId:"400182014504-o1u4v63usf1shqimgh40v38lc8hdffb6.apps.googleusercontent.com",
            scope:""
          })
        };
        gapi.load("client:auth2",start)
      })
    return (
        <div className={cx('wrapper')}>
            

            <div className={cx('title')}>Login</div>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label className={cx('label')}>USERNAME</Form.Label>
                    <Form.Control
                        size="lg"
                        style={{ height: '40px' }}
                        type="text"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className={cx('label')}>PASSWORD</Form.Label>
                    <Form.Control
                        size="lg"
                        style={{ height: '40px' }}
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="d-grid gap-2 pb-4 pt-4">
                    <Button variant="success" size="lg" type="submit">
                        submit
                    </Button>
                   
                </div>
                <div style={{textAlign:"center"}}>
                    <LoginGoogle />
                </div>
            </Form>

            <Link className={cx('login-register-link')} to="/register">
                Register one for free ?{' '}
            </Link>
        </div>
    );
}

export default Login;
