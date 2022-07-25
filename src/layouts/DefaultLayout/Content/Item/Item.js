import styles from './Item.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Item({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx(`title-${data.type}`)}>{data.title}</h4>
            <div className={cx('total-item')}>
                {data.doc.map((item, index) => {
                    return (
                        <div key={index} className={cx('item')}>
                            <div className={cx(`item-title`)}>{item.title}</div>
                            <div className={cx('card-view')}>
                                <div className={cx('text')}>
                                    <img
                                        className={cx('text-img')}
                                        src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
                                        alt=""
                                    />
                                    <span className={cx('text-title')}>{item.pages}</span>
                                </div>
                                <div className={cx('text')}>
                                    <img
                                        className={cx('text-img')}
                                        src="https://cdn-icons-png.flaticon.com/512/633/633633.png"
                                        alt=""
                                    />
                                    <span className={cx('text-title')}>{item.viewer}</span>
                                </div>
                                <div className={cx('text')}>
                                    <img
                                        className={cx('text-img')}
                                        src="https://cdn-icons-png.flaticon.com/512/7971/7971785.png"
                                        alt=""
                                    />
                                    <span className={cx('text-title')}>{item.downloand}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Item;
