import { Col, Form, Modal, Row, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { deleteServiceInfo } from '@/api/layout.api';
import { useSelector } from 'react-redux';
import store from '../../../stores';
import { modalFalse, modalTrue, setDataModal, setModalFalse, setModalTrue } from '../../../stores/global.store';
import { ButtonCore, PaddingDiv } from '../button/buttonCore';
import { addFormData, deleteFormRequest } from '../../../api/request';
import Notifi from '../noti';
import { blockCustom, changeCustom } from '../../../api/custom.api';
import ModalCore from '../modal/modalCore';
import BaseFormInput from '../input/formInput';
// import './style.css'

export interface Pagination {
    current?: number | string
    limit?: number | string
    total?: number | string
    page?: number | string
    order_field?: string
    pageSize?: string | any
}
interface BaseTable {
    columType: any;
    dataSource: any;
    isDelete?: boolean;
    typeservice?: boolean;
    name?: string | any;
    scrollX?: string | any;
    urlDelete?: string | any;
    urlEdit?: string | any;
    urlInfo?: string;
    pagination?: Pagination | any
    onChangePaniga?: any
    configUrl?: any
    deltail?: any
    notAction?: boolean
    user?: boolean
    classT?: boolean
    cus?: any
}
// todo handler edit and navigate
export const BaseTable = ({
    columType,
    dataSource,
    typeservice,
    scrollX,
    urlInfo,
    pagination,
    onChangePaniga,
    configUrl,
    deltail,
    notAction,
    user,
    classT,
    cus
}: BaseTable) => {
    const { loading } = useSelector((state: {
        global: {
            loading: boolean,
            loadingData: boolean
        }
    }) => state.global);
    const navigate = useNavigate();
    const { confirm } = Modal;
    const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
    const dataCustomer = useSelector((state: any) => state.usersSlice.param.CUSTOMER)?.map((val: any) => ({ ...val, autoid: val.name }))
    const [typeC, setTypeC] = useState<any>('');
    const statusModal = useSelector((state: any) => state.global.statusModal);
    const custId = localStorage.getItem('custId');


    const [form] = Form.useForm()

    const columnsFix: ColumnsType<any> = [
        {
            title: 'Hành động',
            key: 'operation',
            align: 'center',
            fixed: 'right',
            width: user ? 120 : 100,
            render: (item) => (
                <>

                    <span
                        onClick={() =>
                            navigate('edit', {
                                state: {
                                    data: item,
                                    type: 'edit',
                                },
                            })
                        }
                        style={{ marginLeft: urlInfo ? '1.5rem' : 0, cursor: 'pointer' }}
                        title="Sửa"
                    >
                        <EditOutlined />
                    </span>

                    {cus ? (
                        <span
                            onClick={() =>
                                navigate(urlInfo || 'info', {
                                    state: {
                                        data: item,
                                        type: 'info'
                                    },
                                })
                            }
                            style={{ cursor: 'pointer',marginLeft:'1.5rem' }}
                            title="Thông tin"
                        >
                            <InfoCircleOutlined />
                        </span>
                    ) : null}

                </>
            ),
        },
    ]

    const deleteManyId = (id: any) => {
        store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn xóa bản ghi này`,
            async onOk() {
                try {
                    let url = configUrl.urlDelete + id;
                    deleteFormRequest(url, {}).then((res: any) => {
                        if (res?.status == 200) {
                            Notifi('succ', `Xóa thành công bản ghi`);
                            store.dispatch(setModalFalse());
                            setSelectedRowKeys([]);
                        }
                        else {

                        }
                    });
                } catch (e) {
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });
    }

    const handleTableChange = (pagination: any) => {
        onChangePaniga({
            page: pagination?.current,
            limit: pagination?.pageSize,
            total: pagination?.total
        })
    }
    useEffect(() => {
        form.setFieldsValue({ custType: typeC?.custType })
    }, [typeC])
    const columnTable = notAction ? [...columType] : [...columType, ...columnsFix]
    return (
        <>
            {selectedRowKeys.length != 0 ? (
                <div style={{ height: '35px', alignItems: 'center' }}>
                    <ButtonCore onClick={deleteManyId}>Xóa</ButtonCore>
                    <span style={{ marginLeft: 8 }}>{`Xóa ${selectedRowKeys.length} bản ghi`}</span>
                    <PaddingDiv />
                </div>
            ) : (
                <div style={{ height: '35px' }}></div>
            )}
            <Table
                columns={columnTable}
                bordered
                // pagination={pagination}
                dataSource={dataSource}
                scroll={{ y: 1000 }}
                loading={loading}
                // onChange={handleTableChange}
                locale={{ emptyText: 'Không có dữ liệu hiển thị' }}
                size='middle'
                // style={{ height: "500px" }}
            />
            {/* {dataSource.length != 0 ? `Hiện thị ${pagination?.pageSize} bản ghi trên tổng số ${pagination?.total} ` : ""} */}
        </>
    );
};
