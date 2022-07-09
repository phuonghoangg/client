import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoc } from '~/redux/apiRequest';
import Card from './Card';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const docs = useSelector((state) => state.docs.docs?.allDoc);
    const dispatch = useDispatch();
    useEffect(() => {
        getAllDoc(dispatch);
    }, [dispatch]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-container')}>
                {docs?.map((item, index) => {
                    return <Card data={item} key={index} />;
                })}
            </div>
        </div>
    );
}

export default Home;
