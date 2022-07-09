import classNames from 'classnames/bind';
import styles from './WrapperTippy.module.scss';

const cx = classNames.bind(styles);
function WrapperTippy({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default WrapperTippy;
