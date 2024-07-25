import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configPartner } from '../../api/comment.api';
import { FormPartner } from './form.partner';

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
                title=" + Thêm mới đối tác"
                extra={
                    < p onClick={() => navigate(configPartner.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormPartner type={state.type} />
            </Card>
        </AddFormStyle>
    )
}