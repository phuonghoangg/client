import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img
                    src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/291338451_550931563369197_7769716534925511946_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LHaiVFDSzS0AX_hiko6&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVLV2BPr31eLmgXPpOb-iPtXJjXpviwtWC0fBdS_Prby5w&oe=62E66131"
                    alt="doc123"
                    width="95px"
                    height="50px"
                />
            </div>
            <div className={cx('container')}>
                <div>
                    <a href="/">Tai lieu</a> <a href="/">Mục lục</a> <a href="/">Bài viết</a>{' '}
                    <a href="/">Tìm kiếm mới</a> <a href="/">Luận văn</a> <a href="/">Tài liệu mới</a>{' '}
                    <a href="/">Chủ đề tài liệu mới đăng</a> <a href="/">tóm tắt văn bản trong lòng mẹ</a>{' '}
                    <a href="/">đánh nhau với cối xay gió ngữ văn 8</a>{' '}
                    <a href="/"> đã có lần em cùng bố mẹ đi thăm mộ người thân trong ngày lễ tết</a>
                </div>
                <div>
                    <a href="/">đặc điểm chung và vai trò của ngành ruột khoang</a>{' '}
                    <a href="/">thuyết minh về con trâu</a> <a href="/">lập dàn ý bài văn tự sự lớp 10</a>{' '}
                    <a href="/">giải bài tập vật lý 8</a> <a href="/">chuyện cũ trong phủ chúa trịnh</a>{' '}
                    <a href="/">giải bài tập vật lý 9</a> <a href="/">soạn văn tế nghĩa sĩ cần giuộc</a>{' '}
                    <a href="/">soạn bài cô bé bán diêm</a>
                </div>
                <div>
                    <a href="/">giai bai tap vat ly 8</a> <a href="/">viet bai tap lam van so 2 lop 9</a>{' '}
                    <a href="/">thuyet minh ve con trau</a> <a href="/">bài ca ngắn đi trên bãi cát</a>{' '}
                    <a href="/">sự phát triển của từ vựng tiếp theo</a>{' '}
                    <a href="/">ôn tập văn học trung đại việt nam lớp 11</a>{' '}
                    <a href="/">bài tập xác suất thống kê có lời giải</a>
                </div>
                <div>
                    <a href="/">bai viet so 2 lop 9 de 1</a> <a href="/">soan bai co be ban diem ngu van lop 8</a>
                </div>
            </div>
            <div className={cx('wrapper-list-footer')}>
                <div className={cx('list-footer')}>
                    <div className={cx('col-1')}>
                        <h4 className={cx('header-title')}>HỖ TRỢ KHÁCH HÀNG</h4>
                        <div className={cx('item')}>
                            <img
                                style={{ marginRight: '10px' }}
                                src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
                                alt=""
                                width="20px"
                                height="20px"
                            />
                            <span className={cx('title')}> info@123doc.org</span>
                        </div>
                        <div className={cx('item')}>
                            <img
                                style={{ marginRight: '10px' }}
                                src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670176.png?token=exp=1657270850~hmac=8c5e7bbf6baf2cb95f476a9c1bb15427"
                                alt=""
                                width="20px"
                                height="20px"
                            />
                            <span className={cx('title')}> Skype</span>
                        </div>
                        <div className={cx('item')}>
                            <img
                                style={{ marginRight: '10px' }}
                                src="https://cdn-icons-png.flaticon.com/512/187/187197.png"
                                alt=""
                                width="20px"
                                height="20px"
                            />
                            <span className={cx('title')}> Yahoo</span>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <h4 className={cx('header-title')}>GIÚP ĐỠ</h4>
                        <div className={cx('item')}>
                            <span className={cx('title')}>Câu hỏi thường gặp</span>
                        </div>
                        <div className={cx('item')}>
                            <span className={cx('title')}>Điều khoản sử dụng</span>
                        </div>
                        <div className={cx('item')}>
                            <span className={cx('title')}>Quy định chính sách bán hàng</span>
                        </div>
                        <div className={cx('item')}>
                            <span className={cx('title')}>Hướng dẫn thanh toán</span>
                        </div>
                    </div>
                    <div className={cx('col-3')}>
                        <h4 className={cx('header-title')}>GIỚI THIỆU</h4>
                        <div className={cx('item')}>
                            <span className={cx('title')}>Doc123 là gì ?</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('end-footer')}>
                <p className={cx('end-title')}>Copyright &copy; 2020 123Doc. Design by 123DOC</p>
            </div>
        </div>
    );
}

export default Footer;
