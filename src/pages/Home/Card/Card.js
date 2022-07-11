import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UpdateDoc } from '~/redux/apiRequest';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ data }) {
    const dispatch = useDispatch()
    const handleClick = () =>{
        let viewUpdate = data.viewer +1;
        const updateValue = {
            viewer : viewUpdate,
        }
        UpdateDoc(data._id,dispatch,updateValue)
    }
    return (
        <Link className={cx('wrapper')} to={`/detail/${data._id}`} onClick={handleClick} >
            <div className={cx('card-img')}>
                <img className={cx('data-img')} src={data.image} alt="" />
            </div>
            <div className={cx('card-title')}>{data.title}</div>
            <div className={cx('card-author')}>{data.author.author}</div>
            <div className={cx('card-view')}>
                <div className={cx('text')}>
                    <img
                        className={cx('text-img')}
                        src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
                        alt=""
                    />
                    <span className={cx('text-title')}>{data.pages}</span>
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
        </Link>
    );
}

export default Card;
