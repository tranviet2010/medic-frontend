import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatusBoole } from '../../utils/convertData';
import { FormPartner } from './form.partner';
import { configNation, configPartner } from '../../api/comment.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditCustom() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const dataInfoNavigate: any = state?.data
    const initialValues = {
        ...dataInfoNavigate,
        status: convertStatusBoole(dataInfoNavigate?.status),
    }
    return (
        <AddFormStyle>
            <Card
                title="Sửa Thông Tin Đối Tác"
                extra={
                    < p onClick={() => navigate(configPartner.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormPartner  initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}