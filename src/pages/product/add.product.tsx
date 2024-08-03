import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configProduct } from '../../api/comment.api';
import { FormProduct } from './form.product';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddProduct() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới sản phẩm"
                extra={
                    < p onClick={() => navigate(configProduct.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormProduct type={state.type} />
            </Card>
        </AddFormStyle>
    )
}