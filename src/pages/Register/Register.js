import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '~/redux/apiRequest';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        //dua vao backend de dat ten!
        const newUser = {
            email,
            password,
            username,
            author,
        };
        registerUser(newUser, dispatch, navigate);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('register-title')}> Sign up </div>
            <Form onSubmit={handleRegister}>
                <Form.Group>
                    <Form.Label className={cx('label')}>EMAIL</Form.Label>
                    <Form.Control
                        size="lg"
                        style={{ height: '40px' }}
                        className={cx('input-register')}
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className={cx('label')}>USERNAME</Form.Label>
                    <Form.Control
                        className={cx('input-register')}
                        type="text"
                        size="lg"
                        style={{ height: '40px' }}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className={cx('label')}>PASSWORD</Form.Label>
                    <Form.Control
                        className={cx('input-register')}
                        type="password"
                        size="lg"
                        style={{ height: '40px' }}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className={cx('label')}>AUTHOR</Form.Label>
                    <Form.Control
                        className={cx('input-register')}
                        type="text"
                        size="lg"
                        style={{ height: '40px' }}
                        placeholder="Enter your name"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <div className="d-grid gap-2 pt-4" size="lg">
                    <Button variant="success" size="lg" type="submit">
                        Register !
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Register;
