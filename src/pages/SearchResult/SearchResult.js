import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findDoc } from '~/redux/apiRequest';

import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import SearchItem from './SearchItem/SearchItem';
const cx = classNames.bind(styles);

function SearchResult() {
    let { id } = useParams();
    const doc = useSelector((state)=>state.docs.resultFindDocs)
    console.log(doc?.allDoc);

    const dispatch = useDispatch()

    useEffect(()=>{
        findDoc(id,dispatch)
    },[id,dispatch])
    
    return <div className={cx('wrapper')}>
        <div className={cx('search-top')}>Kết quả tìm kiếm với từ khóa: {id}</div>
        {doc.allDoc?.map((item,index)=>{
            return <SearchItem key={index} data={item}/>
        })}
    </div>
}
export default SearchResult;
