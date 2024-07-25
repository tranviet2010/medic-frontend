import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configAgent } from '../../api/comment.api';
import { FormAgent } from './form.agent';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddAgent() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới đại lý"
                extra={
                    < p onClick={() => navigate(configAgent.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormAgent type={state.type} />
            </Card>
        </AddFormStyle>
    )
}