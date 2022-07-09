import Header from '../DefaultLayout/Header';
import classNames from 'classnames/bind';
import styles from './OnlyHeader.module.scss';
import Footer from '../DefaultLayout/Footer';

const cx = classNames.bind(styles);

function OnlyHeader({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default OnlyHeader;
