import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);

function SearchItem({data}) {
    console.log(data);
    return <Link to={`/detail/${data._id}`} className={cx('item')}>
    <div className={cx('item-img')}>
        <img src={data.image} alt=''/>
    </div>
    <div className={cx('item-show')}>
        <h2 className={cx('title')}>{data.title}</h2>
        <div className={cx('desciption')}>{data.description}</div>
        <div className={cx('card-view')}>
    <div className={cx('text')}>
        <img
            className={cx('text-img')}
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            alt=""
        />
        <span className={cx('text-title')}>{data.downloand}</span>
    </div>
    <div className={cx('text')}>
        <img
            className={cx('text-img')}
            src="https://cdn-icons-png.flaticon.com/512/633/633633.png"
            alt=""
        />
        <span className={cx('text-title')}>{data.viewer}</span>
    </div>
    <div className={cx('text')}>
        <img
            className={cx('text-img')}
            src="https://cdn-icons-png.flaticon.com/512/7971/7971785.png"
            alt=""
        />
        <span className={cx('text-title')}>{data.downloand}</span>
    </div>
        </div>
    </div>
</Link>
}

export default SearchItem;