import { useState } from 'react';
import React from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import { useLocation, useNavigate } from 'react-router-dom';
import UploadFile from '../../api/uploadfile';
import { postInfo } from '../../api/request';
import Notifi from '../../components/core/noti';
import { addSave } from '../../utils/textUnits';
import { useSelector } from 'react-redux';
import store from '../../stores';
import { setModalFalse } from '../../stores/global.store';

const ChildStyle = styled.div`
  background-color: #fff;
  border:1px solid #d9d9d9;
  padding:2rem 5rem;
  margin-bottom:1rem
`

function MatureForm() {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [url, setUrl] = useState()
    const role = localStorage.getItem('role')
    const { state } = useLocation()
    const idByEmailPartner = useSelector((state: any) => state.usersSlice.param.getIdEmail[0]?.phone)
    const getIdByEmailAgent = useSelector((state: any) => state?.usersSlice?.param?.getIdByEmailAgent[0]?.phone)
    const urlBack = state?.type == 'customer' ? "/customer" : "/"
    const statusModal = useSelector((state: any) => state.global.statusModal);

    const onFinish = (value: any) => {
        const dataResult = {
            type_result: "L",
            name: value?.name,
            phone: role == '0' ? value?.phone : role == '1' ? idByEmailPartner : getIdByEmailAgent,
            phatho: value?.phatho,
            address: value?.address,
            email: value?.email,
            male: value?.male,
            file: url,
            sponsor: value?.sponsor,
            note: value?.note,

        }

        postInfo('result', dataResult).then((res) => {
            Notifi("succ", addSave)
            statusModal ? store.dispatch(setModalFalse()) : navigate('/')
            form.resetFields();
        })
    };
    const handeleFile = (url: any) => {
        setUrl(url)
    }

    return (
        <Row>
            <Col span={24}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                >
                    <ChildStyle>
                        <h4>Thông tin người bảo trợ</h4>
                        <Form.Item
                            label="Họ tên người bảo trợ"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập thông tin người bảo trợ' }]}
                        >
                            <Input />
                        </Form.Item>
                        {
                            state?.type == 'customer' ?
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: false, message: 'Vui lòng nhập số điện thoại' }]}
                                >
                                    <Input defaultValue={state.data && state.data[0]?.phone} disabled={state.data ? true : false} />
                                </Form.Item> :
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: role == '0' ? true : false, message: 'Vui lòng nhập số điện thoại' }]}
                                >
                                    <Input defaultValue={role == '1' ? idByEmailPartner : getIdByEmailAgent} disabled={role == '0' ? false : true} />
                                </Form.Item>
                        }

                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                        >
                            <Input />
                        </Form.Item>
                    </ChildStyle>

                    <ChildStyle>
                        <h4>Thông tin đối tượng</h4>
                        <Form.Item
                            label="Họ tên"
                            name="sponsor"
                            rules={[{ required: true, message: 'Vui lòng nhập số tuần thai nhi' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item name="date" label="Ngày tháng năm sinh">
                            <DatePicker />
                        </Form.Item>

                        <Form.Item label="Giới tính" name="male">
                            <Select>
                                <Select.Option value="0">Nam</Select.Option>
                                <Select.Option value="1">Nữ</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Bệnh lý hiện tại" name="phatho">
                            <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                        </Form.Item>

                        <UploadFile handleFile={handeleFile} />
                    </ChildStyle>

                    <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="primary" style={{ marginRight: "2rem" }} htmlType="submit" onClick={() => statusModal ?
                                    store.dispatch(setModalFalse()) : navigate('/')}>
                            Đóng
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Lưu kết quả
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default MatureForm;
