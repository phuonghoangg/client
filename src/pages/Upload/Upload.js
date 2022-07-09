import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Upload.module.scss';
import { useNavigate } from 'react-router-dom';
import CardUpload from './CardUpload';
const cx = classNames.bind(styles);

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    let user = location.state.hi;
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    });
    return (
        <div className={cx('wrapper')}>
            {!user ? (
                <>{alert('vui long dang nhap de thuc hien chuc nang nay')}</>
            ) : (
                <>
                    <div className={cx('header-upload')}>
                        <h4 className={cx('title-upload')}>Tải tài liệu lên 123doc</h4>
                    </div>
                    <div className={cx('body-upload')}>
                        <CardUpload user={user} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
