import type { MenuChild, MenuList } from '../../interface/layout/menu.interface';
import type { FC } from 'react';
import './index.less';
import { Drawer, Layout, theme as antTheme } from 'antd';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';
import MenuComponent from './menu';
import HeaderComponent from './header';
import { LocalStorage } from '../../utils/convertData';
import { useNavigate } from 'react-router-dom';
import store, { AppDispatch } from '../../stores';
import { fetchUserById } from '../../stores/param';
import { mockMenuListAdmin, mockMenuListAgent, mockMenuListPartner } from '../../mock/user/menu.mock';
const { Sider, Content } = Layout;

const LayoutPage: FC = () => {
  const location = useLocation();
  const [openKey, setOpenkey] = useState<string>();
  const [role, setRole] = useState(Number(localStorage.getItem('role')));
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const token = antTheme.useToken();
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    const storedRole = Number(localStorage.getItem('role'));
    if (role !== storedRole) {
      setRole(storedRole);
    }
    setSelectedKey(location.pathname);
  }, [location.pathname, role]);

  const onChanged = (e: any) => {
    // store.dispatch()
    // dispatch(fetchUserById())
    setSelectedKey(e)
  }



  useEffect(() => {
    let token = LocalStorage('token')
    if (token == null) {
      navigate('/login')
    }
  }, [role]);

  const menuList =
    role === 0 ? mockMenuListAdmin : role === 1 ? mockMenuListPartner : mockMenuListAgent;



  const toggle = () => {

  }

  return (
    <Layout className="layout-page">
      <HeaderComponent collapsed={true} toggle={toggle} />
      <Layout>
        <Sider
          className="layout-page-sider"
          trigger={null}
          width={250}
          collapsible
          style={{ backgroundColor: token.token.colorBgContainer }}
          // collapsedWidth={isMobile ? 0 : 80}
          collapsed={false}
          breakpoint="md"
        >
          <MenuComponent
            menuList={menuList}
            openKey={openKey}
            onChangeOpenKey={k => setOpenkey(k)}
            selectedKey={selectedKey}
            onChangeSelectedKey={k => onChanged(k)}
          />
        </Sider>
        <Content className="layout-page-content" style={{ height: "93h", padding: "10px" }}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
