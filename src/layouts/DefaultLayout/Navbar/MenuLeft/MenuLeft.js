import classNames from 'classnames/bind';
import styles from './MenuLeft.module.scss';

const cx = classNames.bind(styles);

function MenuLeft({ children, data, setBackground }) {
    return (
        <div className={cx('wrapper')}>
            <button
                style={{ background: `${data.color}` }}
                className={cx('left-icon')}
                onClick={() => setBackground(data.color)}
            ></button>
            <div className={cx('right-title')}>
                <div className={cx('title')}>{data.title}</div>
                <div className={cx('description')}>{data.description}</div>
            </div>
        </div>
    );
}

export default MenuLeft;
