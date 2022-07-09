import classNames from 'classnames/bind';
import { useState } from 'react';
import MenuLeft from './MenuLeft';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const NAV_MENU = [
    {
        title: 'Báo Cáo Thực Tập',
        description: 'Tổng hợp báo cáo thực tập điện cơ khí, đồ án, doanh nghiệp và... ',
        color: '#ccc',
    },
    {
        title: 'Giáo Dục - Đào Tạo',
        description: 'Tổng hợp 386,472 giáo án, bài giảng, tài liệu tham khảo của ...',
        color: '#12ab7f',
    },
    {
        title: 'Ngoại Ngữ',
        description: 'Tổng hợp 145,625 tài liệu tiếng anh chất lượng cao.',
        color: '#057ab0',
    },
    {
        title: 'Tài  Chính - Ngân Hàng',
        description: 'Tổng hợp 73,297 tài liệu chuyên sâu đa dạng về lĩnh vực Tài Chính...',
        color: '#cf846d',
    },
    {
        title: 'Giáo  án-Bài giảng',
        description: 'Tổng hợp 1,006,072 tài liệu chuyên sâu đa dạng về lĩnh vực Giáo án ',
        color: '#f9c138',
    },
];

function Navbar() {
    const [background, setBackground] = useState('#057ab0');

    return (
        <nav style={{ background: `${background}` }} className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('inline-left')}>
                    {NAV_MENU.map((menu, index) => {
                        return <MenuLeft key={index} data={menu} setBackground={setBackground} />;
                    })}
                </div>
                <div className={cx('inline-main')}>
                    <div>
                        <button className={cx('swap-img1')}></button>
                        <button className={cx('swap-img2')}></button>
                    </div>
                </div>
                <div className={cx('inline-right')}></div>
            </div>
        </nav>
    );
}

export default Navbar;
