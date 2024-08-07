import { Button, Card, Col, Row } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { FormCustom } from './form.customer';
import { configCustome } from '../../api/custom.api';
import { BaseTable } from '../../components/core/table/tableCore';
import { ColumnInfo020, ColumnInfoChild, ColumnInfoMature } from './column.customer';
import { BorderColor } from '../../components/core/variable/variable';
import { useEffect, useState } from 'react';
import { getResult } from '../../api/comment.api';
import { ButtonCore } from '../../components/core/button/buttonCore';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export const DivStyleInfo = styled.div`
    border:2px solid ${BorderColor};
    padding:10px;
    margin-bottom:10px
`


export default function DetailCustomer() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [dataC,setDataC] = useState([])
    const [dataT,setDataT] = useState([])
    const [dataL,setDataL] = useState([])
    const dataInfoNav: any = state?.data
    
    useEffect(()=>{
        getResult({type_result:"C",phone:dataInfoNav?.phone}).then((res)=>{
            setDataC(res?.data?.data)
        })
        getResult({type_result:"T",phone:dataInfoNav?.phone}).then((res)=>{
            setDataT(res?.data?.data)
        })
        getResult({type_result:"L",phone:dataInfoNav?.phone}).then((res)=>{
            setDataL(res?.data?.data)
        })
    },[])
    
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
                        <DivStyleInfo>
                        <b>Danh sách đối tượng tư vấn thuộc nhóm thai nhi</b>
                        <ButtonCore type="button" style={{float:'right'}}
                                onClick={() =>
                                    navigate('/form/child', {
                                        state: {
                                            type: 'customer',
                                        },
                                    })
                                }
                            >{`+ Thêm mới`}</ButtonCore>
                        <BaseTable
                            columType={ColumnInfoChild}
                            dataSource={dataC}
                            notAction
                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                        />
                        </DivStyleInfo>
                    </Col>
                    <Col span={24}>
                        <DivStyleInfo>
                        <b>Danh sách đối tượng tư vấn thuộc nhóm 0-20 tuổi</b>
                        <ButtonCore type="button" style={{float:'right'}}
                                onClick={() =>
                                    navigate('/form/adult', {
                                        state: {
                                            type: 'customer',
                                            data:dataT
                                        },
                                    })
                                }
                            >{`+ Thêm mới`}</ButtonCore>
                        <BaseTable
                            columType={ColumnInfo020}
                            dataSource={dataT}
                            notAction
                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                        />
                        </DivStyleInfo>
                    </Col>
                    <Col span={24}>
                        <DivStyleInfo>
                        <b>Danh sách đối tượng tư vấn thuộc nhóm trưởng hành</b>
                        <ButtonCore type="button" style={{float:'right'}}
                                onClick={() =>
                                    navigate('/form/mature', {
                                        state: {
                                            type: 'customer',
                                        },
                                    })
                                }
                            >{`+ Thêm mới`}</ButtonCore>
                        <BaseTable
                            columType={ColumnInfoMature}
                            dataSource={dataL}
                            notAction
                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                        />
                        </DivStyleInfo>
                    </Col>
                </Row>
            </Card>
        </AddFormStyle>
    )
}