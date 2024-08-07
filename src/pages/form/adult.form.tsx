import { useState } from 'react';
import React from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import { useLocation, useNavigate } from 'react-router-dom';
import { DateToDay, getInfoHeight, getSum } from '../../utils/convertData';
import { getInfoFeNo, postInfo } from '../../api/request';
import Notifi from '../../components/core/noti';
import { addSave } from '../../utils/textUnits';
import { useSelector } from 'react-redux';

const ChildStyle = styled.div`
  background-color: #fff;
  border:1px solid #d9d9d9;
  padding:2rem 5rem;
  margin-bottom:1rem
`

function AdultForm() {
    const navigate = useNavigate();
    const [form] = Form.useForm()
    const role = localStorage.getItem('role')
    const { state } = useLocation()
    const idByEmailPartner = useSelector((state: any) => state.usersSlice?.param.getIdEmail[0]?.phone)
    const getIdByEmailAgent = useSelector((state: any) => state?.usersSlice?.param?.getIdByEmailAgent[0]?.phone)
    const urlBack = state?.type == 'customer' ? "/customer" : "/"

    const onFinish = (value: any) => {
        let url = `height/finByQuery?number_day=${DateToDay(value?.date)}&height=${value.height}&weight=${value.weight}`
        getInfoFeNo(url).then((res: any) => {
            let dataRespon = res?.data?.data

            let resultHeight = `Chiều cao hiện tại đang ở mức ${getInfoHeight(dataRespon[0], value.height)} `
            let resultWeight = `Cân nặng hiện tại đang ở mức ${getInfoHeight(dataRespon[1], value.weight)} `
            let result20Height = `Dự đoán lúc 20 tuổi: Chiều cao ${getSum(dataRespon[0], value.height, dataRespon[2])} `
            let result20Weight = `Dự đoán lúc 20 tuổi: Cân nặng  ${getSum(dataRespon[1], value.weight, dataRespon[3])} `
            const data = {
                type_result: "T",
                name: value?.name,
                sponsor: value?.sponsor,
                dob: value?.date,
                phone: state?.type == 'customer' ? state?.data[0].phone : (role == '0' ? value?.phone : role == '1' ? idByEmailPartner : getIdByEmailAgent),
                male: value?.male,
                weight: value?.weight,
                height: value?.height,
                result: resultHeight + resultWeight + result20Height + result20Weight,
                address: value?.address,
                email: value?.email,
                note: value?.note,

            }
            postInfo('result', data).then((res) => {
                Notifi("succ", addSave)
                navigate(urlBack)
            })
        })
    };
    return (
        <Row
        // type="flex

        >
            <Col span={24}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col span={12}>
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
                                            <Input defaultValue={state?.data[0]?.phone} disabled={true} />
                                        </Form.Item>
                                        :
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
                            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type="primary" style={{ marginRight: "2rem" }} htmlType="submit" onClick={() => navigate(urlBack)}>
                                    Quay lại
                                </Button>
                                <Button type="primary" htmlType="submit">
                                    Lưu kết quả
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
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

                                <Form.Item
                                    label="Chiều cao hiện tại"
                                    name="height"
                                    rules={[{ message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Cân nặng hiện tại"
                                    name="weight"
                                    rules={[{ message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Bệnh lý nếu có" name="phatho">
                                    <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                                </Form.Item>
                            </ChildStyle>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}

export default AdultForm;
