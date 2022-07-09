import Footer from './Footer';
import Header from './Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Navbar from './Navbar';
import Content from './Content';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            <div className={cx('container')}>
                <div className={cx('inline-container')}>
                    <div className={cx('inline-content')}>
                        <div className={cx('space-page')}></div>
                        {children}
                    </div>
                    <div className={cx('qc')}></div>
                </div>
            </div>
            <Content />

            <Footer />
        </div>
    );
}

export default DefaultLayout;
