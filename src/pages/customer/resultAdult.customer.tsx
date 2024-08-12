import { useState } from 'react';
import React, { useRef } from 'react';
import { Button, Row, Col, Select } from 'antd';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import moment from 'moment/moment';
import { setModalFalse } from '../../stores/global.store';
import store from '../../stores';

const ChildStyle = styled.div`
  background-color: #fff;
  border:1px solid #d9d9d9;
  padding:1rem 5rem;
  margin-bottom:1rem
`

function ResultAdult({dataInfoNavigate}:any) {
    const { state } = useLocation()
    const navigate = useNavigate();
    const textRef = useRef<HTMLInputElement>(null);

    const getFormattedDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const handleConvert = async () => {
        if (textRef.current) {
            const canvas = await html2canvas(textRef.current);
            const imgData = canvas.toDataURL('image/png');

            // Tạo một link để tải ảnh xuống
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }


    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={16} md={12} lg={8} xl={12} ref={textRef}>
                <ChildStyle>
                    <h5>Thông tin người bảo trợ</h5>
                    <p>Họ và tên người bảo trợ: {dataInfoNavigate?.name}</p>
                    <p>Số điện thoại: {dataInfoNavigate?.phone}</p>
                    <p>Địa chỉ: {dataInfoNavigate?.address}</p>
                </ChildStyle>


            </Col>
            <Col xs={24} sm={16} md={12} lg={8} xl={12} ref={textRef}>


                <ChildStyle>
                    <h5>Thông tin phân tích</h5>
                    <p>Kết quả phân tích vào ngày: {getFormattedDate()}</p>
                    <p>Họ và tên: {dataInfoNavigate?.sponsor}</p>
                    <p>Giới tính: {dataInfoNavigate?.male == 0 ? "Nam" : "Nữ"}</p>
                    <p>Tuổi: {moment(dataInfoNavigate?.dob).format('DD/MM/YYYY')}</p>
                    <p>Chiều cao hiện tại: {dataInfoNavigate?.height} (cm)</p>
                    <p>Cân nặng hiện tại: {dataInfoNavigate?.weight} (kg)</p>
                    <p>Bệnh lý nếu có: {dataInfoNavigate?.phatho}</p>
                    <p>Kết quả: {dataInfoNavigate?.result}</p>


                </ChildStyle>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ marginRight: "2rem" }} type="primary" onClick={handleConvert}>Tải ảnh xuống</Button>

                <Button type="primary" onClick={() => store.dispatch(setModalFalse())}>Đóng</Button>
            </Col>
        </Row>
    );
}

export default ResultAdult;
