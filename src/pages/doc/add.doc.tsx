import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configDoc } from '../../api/comment.api';
import { FormDoc } from './form.doc';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddPartner() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới tài nguyên"
                extra={
                    < p onClick={() => navigate(configDoc.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormDoc type={state.type} />
            </Card>
        </AddFormStyle>
    )
}