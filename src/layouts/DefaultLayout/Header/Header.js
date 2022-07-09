import { useState } from 'react';
import { useSelector } from 'react-redux/';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faStar } from '@fortawesome/free-regular-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

import Menu from '~/components/WrapperTippy/Menu';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const menu = ['Tài liệu', 'Bộ sưu tập', 'Thành viên'];
const PROFILE_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUpload} />,
        title: 'Đăng ký gói tải tài liệu 0đ',
        focus: true,
        to: '/bla',
    },
    {
        title: 'Thông tin cá nhân',
        to: '/bla',
    },
    {
        title: 'Hòm thư',
        to: '/bla',
    },
    {
        title: 'Quản lý tài liệu',
        to: '/bla',
    },
    {
        title: '  Số dư',
        to: '/bla',
    },
    {
        title: 'Doanh thu',
        to: '/bla',
    },

    {
        title: 'Nạp tiền',
        to: '/cash',
    },

    {
        title: 'Chuyển tiền',
        to: '/bla',
    },
    {
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header({ className }) {
    const [item, setItem] = useState('Tài liệu');
    const user = useSelector((state) => state.auth.login.currentUser);

    const navigate = useNavigate();

    const handleUp = (e) => {
        navigate('/upload', {
            state: {
                hi: user,
            },
        });
    };

    const handleLogin = (e) => {
        navigate('/login');
    };
    const handleRegister = (e) => {
        navigate('/register');
    };

    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <header className={classes}>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <img
                        src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/291338451_550931563369197_7769716534925511946_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LHaiVFDSzS0AX_hiko6&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVLV2BPr31eLmgXPpOb-iPtXJjXpviwtWC0fBdS_Prby5w&oe=62E66131"
                        alt="doc123"
                        width="95px"
                        height="50px"
                    />
                </a>
                <div className={cx('search')}>
                    <div className={cx('select-option')}>
                        <ul>
                            <li className={cx('title-option')}>
                                <div className={cx('title')}>
                                    {item} <span className={cx('icon-drop')}>&#9662;</span>
                                </div>
                                <ul className={cx('dropdown')}>
                                    {menu.map((item, index) => {
                                        return (
                                            <li key={index} className={cx('li-item')}>
                                                <div href="/" onClick={() => setItem(item)}>
                                                    {item}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <input placeholder="Tìm kiếm..." spellCheck={false} />
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Button naptien>NẠP TIỀN</Button>
                    <Button onClick={handleUp} tailen>
                        TẢI LÊN
                    </Button>
                    <Button icon>
                        <FontAwesomeIcon icon={faStar} />
                    </Button>
                    {user ? (
                        <>
                            <Menu items={PROFILE_MENU}>
                                <button className={cx('profile')}>
                                    <img
                                        className={cx('images')}
                                        alt=""
                                        src="https://media.store123doc.com/images/default/user_small.png"
                                    />
                                    <span>Hi: {user.username}</span>
                                </button>
                            </Menu>
                            <Button className={cx('bell')}>
                                <FontAwesomeIcon icon={faBell} />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleRegister} outline>
                                Đăng ký
                            </Button>
                            <Button onClick={handleLogin} outline>
                                Đăng nhập
                            </Button>
                            <Button className={cx('custom-buy')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faShopify} />
                                <span className={cx('count')}>0</span>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
