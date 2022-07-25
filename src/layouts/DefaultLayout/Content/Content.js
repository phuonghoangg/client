import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Item from './Item';

const cx = classNames.bind(styles);

const itemDoc = {
    title: 'Ngoại Ngữ',
    type: 'english',
    doc: [
        {
            id: '1',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '2',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
            type: 'PDF',
        },

        {
            id: '3',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '4',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },

        {
            id: '6',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
    ],
};

const itemGDDT = {
    title: 'Giáo Dục - Đào tạo',
    type: 'gddt',
    doc: [
        {
            id: '1',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '2',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
            type: 'PDF',
        },

        {
            id: '3',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '4',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },

        {
            id: '6',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
    ],
};

const itemKTCN = {
    title: 'Kỹ Thuật - Công Nghệ',
    type: 'ktcn',
    doc: [
        {
            id: '1',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '2',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
            type: 'PDF',
        },

        {
            id: '3',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '4',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },

        {
            id: '6',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
    ],
};

const itemCNTT = {
    title: 'Kỹ Thuật - Công Nghệ',
    type: 'cntt',
    doc: [
        {
            id: '1',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '2',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
            type: 'PDF',
        },

        {
            id: '3',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            downloand: '10,737',
            type: 'PDF',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
        {
            id: '4',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },

        {
            id: '6',
            image: 'https://media.store123doc.com/images/document/13/ne/dy/medium_EOjNzQ3gqqqkR8IFnSnEupg1e.jpg',
            title: 'Bảng công thức tích phân - đạo hàm - Mũ -logarit',
            author: 'Trần quang',
            pages: '2',
            viewer: '343,600',
            type: 'PDF',
            downloand: '10,737',
            dataPDF: 'ádaiouzxociuowqeikasdjhasdzxc',
        },
    ],
};
function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('title')}>Tài liệu chung</div>
                <div className={cx('content')}>
                    <Item data={itemDoc} />
                    <Item data={itemGDDT} />
                    <Item data={itemKTCN} />
                    <Item data={itemCNTT} />
                </div>
            </div>
        </div>
    );
}

export default Content;
