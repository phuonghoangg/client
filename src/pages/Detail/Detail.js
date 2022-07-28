import { useNavigate, useParams } from 'react-router-dom';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { useEffect } from 'react';
import { DeleteDoc, getAnDoc } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Detail() {
    //62c5929a5d5a76b554073b73 id

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const doc = useSelector((state) => state.docs.doc?.anDoc);
    const user = useSelector((state) => state.auth.login?.currentUser);

    //id lay tu document DB
    let { id } = useParams();
    const accessToken = user?.accessToken;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        getAnDoc(id, dispatch);
      
    }, [dispatch, id]);


    const handleClick = () => {
        DeleteDoc(id, dispatch, navigate, accessToken);
    };
    return (
        <div className={cx('wrapper')}>
            {/* view pdf */}

            <div className={cx('header-detail')}>
                <div className={cx('title')}>{doc?.title}</div>
                <div className={cx('card-view')}>
                    <div className={cx('text')}>
                        <img
                            className={cx('text-img')}
                            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
                            alt=""
                        />
                        <span className={cx('text-title')}>{doc?.pages}</span>
                    </div>
                    <div className={cx('text')}>
                        <img
                            className={cx('text-img')}
                            src="https://cdn-icons-png.flaticon.com/512/633/633633.png"
                            alt=""
                        />
                        <span className={cx('text-title')}>{doc?.viewer}</span>
                    </div>
                    <div className={cx('text')}>
                        <img
                            className={cx('text-img')}
                            src="https://cdn-icons-png.flaticon.com/512/7971/7971785.png"
                            alt=""
                        />
                        <span className={cx('text-title')}>{doc?.downloand}</span>
                    </div>
                </div>
                <div className={cx('header-author')}>
                    <div className={cx('left')}>
                        <img
                            src="https://media.store123doc.com/images/user/small_dkv1351476187.jpg"
                            width="40px"
                            height="40px"
                            alt=""
                        />
                        <div className={cx('header-user')}>
                            <div className={cx('user')}>{doc?.author.author}</div>
                            <div className={cx('more-user')}>
                                <span> Gửi tin nhắn </span> <span>|</span> <span> Báo cáo tài liệu </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <Button outline className={cx('btn-them')}>
                            Thêm vào bộ sưu tập
                        </Button>
                        {user?.isAdmin   ? (
                            <>
                                {' '}
                                <Button onClick={handleClick} naptien className={cx('btn-xoa')}>
                                    Xóa
                                </Button>
                            </>
                        ) : (
                            <>
                                {' '}
                                <Button naptien className={cx('btn-xoa')}>
                                    Tải xuống
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('viewer')}>
                {doc?.dataPDF && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        <Viewer fileUrl={doc?.dataPDF}  plugins={[defaultLayoutPluginInstance]}></Viewer>
                    </Worker>
                )}
            </div>
            <div className={cx('info-doc')}>
                <h1>Thông tin tài liệu</h1>
                <div className={cx('description-doc')}>
                    <div>Ngày đăng: {doc?.updatedAt}</div>
                    <div className={cx('mota')}> mô tả: {doc?.description}</div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
