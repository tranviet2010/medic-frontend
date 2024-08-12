import React, { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle, ModalHeight } from './modalCoreStyled';
import { modalFalse, modalTrue, setModalFalse, setModalTrue } from '../../../stores/global.store';
import store from '../../../stores';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import styled from 'styled-components';


const ModalStyle = styled.div`
    z-index: 1000;
`

export interface ModalCore {
    nameButton?: string | number;
    title?: string;
    children?: ReactNode
    status?: boolean
    width?: number
    modalHeight?: boolean
    modalId?:any
}

const ModalCore: React.FC<ModalCore> = ({ nameButton, title, children, status, width, modalHeight,modalId }) => {

    const [isModalOpen, setIsModalOpen] = useState(true);
    const statusModal = useSelector((state: any) => state.global.statusModal);
    const activeModalId = useSelector((state: any) => state.global.activeModalId);


    const showModal = () => {
        store.dispatch(setModalTrue(modalId));
        // setIsModalOpen(true);
    }
    const handleOk = () => {
        store.dispatch(setModalFalse());
        // setIsModalOpen(false);
    }
    const handleCancel = () => {
        store.dispatch(setModalFalse());
        // setIsModalOpen(false);
    }
    return (
        <>
            {
                modalHeight ?
                    <ModalHeight title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                        {children}
                    </ModalHeight>
                    :
                    <ModalCoreStyle title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                        {children}
                    </ModalCoreStyle>
            }
        </>
    );
}

export default ModalCore;
