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
    },[])

    const handlePage = (e) =>{
       let page = e.target.value
       findDoc(id,dispatch,page)
  
    }
    return <div className={cx('wrapper')}>
        <div className={cx('search-top')}>Kết quả tìm kiếm với từ khóa: {id}</div>
        {doc.allDoc?.map((item,index)=>{
            return <SearchItem key={index} data={item}/>
        })}
                         {/*api trả về biến count để tạo số lượng btn. mà lười qé nên set cứng :v*/}
        <button value="1" onClick={handlePage} style={{}}>1</button>
        <button value="2" onClick={handlePage}>2</button>
    </div>
}
export default SearchResult;
