import Button from 'react-bootstrap/Button';
import classNames from 'classnames/bind';
import styles from './CardUpload.module.scss';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { addDocs } from '~/redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function CardUpload({ user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [genres, setGenres] = useState('PDF');
    const [title, setTitle] = useState('');
    const [description, setDecripstion] = useState('');
    const [image, setImage] = useState('');
    const [data, setData] = useState('');
    const authorId = user._id;
    const accessToken = user.accessToken;

    const allowFile = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && allowFile.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setData(e.target.result);
                };
            } else {
                console.log('not valid');
            }
        } else {
            console.log('nhap file pdf');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newDoc = {
            title,
            genres,
            description,
            author: authorId,
            image,
            dataPDF: data,
        };
        addDocs(newDoc, accessToken, dispatch, navigate);
    };
    return (
        <div className={cx('wrapper')}>
            <Form className={cx('wrapper-form')} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label className={cx('title-upload')}>Tên tài liệu</Form.Label>
                    <Form.Control
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '400px' }}
                        size="lg"
                        type="text"
                        placeholder="Nhập tên tài liệu"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        onChange={(e) => setDecripstion(e.target.value)}
                        style={{ width: '400px' }}
                        size="lg"
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tên tác giả</Form.Label>
                    <Form.Control
                        style={{ width: '400px' }}
                        size="lg"
                        type="text"
                        placeholder={user.author}
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Loại file</Form.Label>
                    <Form.Select
                        style={{ width: '400px' }}
                        size="lg"
                        aria-label="--chọn loại file --"
                        onChange={(e) => setGenres(e.target.value)}
                    >
                        <option value="PDF">PDF</option>
                        <option value="WORD">WORD</option>
                        <option value="PNG">PNG</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Link hình ảnh</Form.Label>
                    <Form.Control
                        onChange={(e) => setImage(e.target.value)}
                        style={{ width: '400px' }}
                        size="lg"
                        type="text"
                        placeholder="nhập link hình ảnh"
                    />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>File đính kèm</Form.Label>
                    <Form.Control onChange={handleFile} style={{ width: '400px' }} size="lg" type="file" />
                </Form.Group>

                <div className="d-grid gap-2 pb-4">
                    <Button variant="success" size="lg" type="submit">
                        submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CardUpload;
