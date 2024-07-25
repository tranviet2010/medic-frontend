import { Card, Col, Row } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { FormCustom } from './form.customer';
import { configCustome } from '../../api/custom.api';
import { BaseTable } from '../../components/core/table/tableCore';
import { ColumnInfoCus } from './column.customer';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function DetailCustomer() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const dataInfoNav: any = state?.data
    
    
    return (
        <AddFormStyle>
            <Card
                title="Thông Tin Chi Tiết Khách Hàng"
                extra={
                    < p onClick={() => navigate(configCustome.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <Row gutter={8}>
                    <Col span={24}><h2>1.Thông tin khách hàng</h2></Col>
                    <Col span={8}><p>Họ tên: {dataInfoNav.name}</p></Col>
                    <Col span={8}><p>Số điện thoại: {dataInfoNav.phone}</p></Col>
                    <Col span={8}><p>Tên công ty: {dataInfoNav.company_name}</p></Col>
                    <Col span={8}><p>Địa chỉ: {dataInfoNav.address}</p></Col>
                    <Col span={8}><p>Ghi chú: {dataInfoNav.note}</p></Col>
                    <Col span={8}><p>Đại lý: {dataInfoNav.agent}</p></Col>
                </Row>
                <Row gutter={8}>
                    <Col span={24}><h2>2.Lịch sử</h2></Col>
                    <Col span={24}>
                        <BaseTable
                            columType={ColumnInfoCus}
                            dataSource={[]}
                            notAction
                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                        />
                    </Col>
                </Row>
            </Card>
        </AddFormStyle>
    )
}