import { useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const menu = ['Tài liệu', 'Bộ sưu tập', 'Thành viên'];

function Search() {
    const [item, setItem] = useState('Tài liệu');
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={cx('search')}>
            <div className={cx('select-option')}>
                <ul>
                    <li className={cx('title-option')}>
                        <div className={cx('title')}>
                            {item} <span className={cx('icon-drop')}>&#9662;</span>
                        </div>
                        <ul className={cx('dropdown')}>
                            {menu.map((item, index) => {
                                return (
                                    <li key={index} className={cx('li-item')}>
                                        <div href="/" onClick={() => setItem(item)}>
                                            {item}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                </ul>
            </div>

            <input placeholder="Tìm kiếm..." spellCheck={false} onChange={(e) => setSearchValue(e.target.value)} />
            <Link to={`/s/${searchValue}`} className={cx('search-btn')}>
                <SearchIcon />
            </Link>
        </div>
    );
}

export default Search;
