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
import ModalCore from '../../components/core/modal/modalCore';
import store from '../../stores';
import { setModalTrue } from '../../stores/global.store';
import ChildForm from '../form/child.form';
import AdultForm from '../form/adult.form';
import MatureForm from '../form/mature.form';
import { useSelector } from 'react-redux';
import ResultAdult from './resultAdult.customer';
import ResultCustomer from './resultChild.customer';

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
    const [dataC, setDataC] = useState([])
    const [dataT, setDataT] = useState([])
    const [dataL, setDataL] = useState([])
    const [dataInfo, setDataInfo] = useState([])
    const [click, setClick] = useState<any>(0)

    const dataInfoNav: any = state?.data
    const statusModal = useSelector((state: any) => state.global.statusModal);

    const checkInfo = (value: any, type: any) => {
        setClick(type)
        setDataInfo(value)
        store.dispatch(setModalTrue('infoCus'))
    }


    useEffect(() => {
        getResult({ type_result: "C", phone: dataInfoNav?.phone }).then((res) => {
            setDataC(res?.data?.data)
        })
        getResult({ type_result: "T", phone: dataInfoNav?.phone }).then((res) => {
            setDataT(res?.data?.data)
        })
        getResult({ type_result: "L", phone: dataInfoNav?.phone }).then((res) => {
            setDataL(res?.data?.data)
        })
    }, [statusModal])

    return (
        <AddFormStyle>
            {
                click == 1 ?
                    <ModalCore modalId="addCus" title='Thêm mới phác đồ nhóm thai nhi' width={1000}>
                        <ChildForm />
                    </ModalCore>
                    : click == 2 ?
                        <ModalCore modalId="addCus" title='Thêm mới phác đồ nhóm 0-20 tuổi' width={1000}>
                            <AdultForm />
                        </ModalCore>
                        : click == 3 ?
                            <ModalCore modalId="addCus" title='Thêm mới phác đồ nhóm trưởng thành' width={1000}>
                                <MatureForm />
                            </ModalCore>
                            : click == 'C' ?
                                <ModalCore modalId="infoCus" title='Thông tin phác đồ nhóm thai nhi' width={1000}>
                                    <ResultCustomer dataInfoNavigate={dataInfo} />
                                </ModalCore>
                                : click == 'T' ?
                                    <ModalCore modalId="infoCus" title='Thông tin phác đồ nhóm 0-20 tuổi' width={1000}>
                                        <ResultAdult dataInfoNavigate={dataInfo} />
                                    </ModalCore>
                                    :
                                    <ModalCore modalId="infoCus" title='Thông tin phác đồ nhóm trưởng thành' width={1000}>
                                        <MatureForm />
                                    </ModalCore>
            }



            <Card
                title="Thông Tin Chi Tiết Khách Hàng"
                extra={
                    < p onClick={() => navigate(configCustome?.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <Row gutter={8}>
                    <Col span={24}><h2>1.Thông tin khách hàng</h2></Col>
                    <Col span={8}><p>Họ tên: {dataInfoNav?.name}</p></Col>
                    <Col span={8}><p>Số điện thoại: {dataInfoNav?.phone}</p></Col>
                    <Col span={8}><p>Tên công ty: {dataInfoNav?.company_name}</p></Col>
                    <Col span={8}><p>Địa chỉ: {dataInfoNav?.address}</p></Col>
                    <Col span={8}><p>Ghi chú: {dataInfoNav?.note}</p></Col>
                    <Col span={8}><p>Đại lý: {dataInfoNav?.agent}</p></Col>
                </Row>
                <Row gutter={8}>
                    <Col span={24}><h2>2.Lịch sử</h2></Col>
                    <Col span={24}>
                        <DivStyleInfo>
                            <b>Danh sách đối tượng tư vấn thuộc nhóm thai nhi</b>
                            <ButtonCore type="button" style={{ float: 'right' }}
                                onClick={() => {
                                    store.dispatch(setModalTrue('addCus'))
                                    setClick(1)
                                }}
                            >{`+ Thêm mới`}</ButtonCore>
                            <BaseTable
                                columType={ColumnInfoChild}
                                dataSource={dataC}
                                cus
                                modalC
                                edit
                                // urlInfo="/customer/info/detailChild"
                                onClickForm={checkInfo}
                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                            />
                        </DivStyleInfo>
                    </Col>
                    <Col span={24}>
                        <DivStyleInfo>
                            <b>Danh sách đối tượng tư vấn thuộc nhóm 0-20 tuổi</b>
                            <ButtonCore type="button" style={{ float: 'right' }}
                                onClick={() => {
                                    store.dispatch(setModalTrue('addCus'))
                                    setClick(2)
                                }}
                            >{`+ Thêm mới`}</ButtonCore>
                            <BaseTable
                                columType={ColumnInfo020}
                                dataSource={dataT}
                                cus
                                edit
                                modalC
                                // urlInfo="/customer/info/detailAdult"
                                onClickForm={checkInfo}
                            // onClickForm={checkInfo}

                            // pagination={pagination}
                            // onChangePaniga={onChangePaniga}
                            />
                        </DivStyleInfo>
                    </Col>
                    <Col span={24}>
                        <DivStyleInfo>
                            <b>Danh sách đối tượng tư vấn thuộc nhóm trưởng hành</b>

                            <ButtonCore type="button" style={{ float: 'right' }}
                                onClick={() => {
                                    store.dispatch(setModalTrue('addCus'))
                                    setClick(3)
                                }}
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