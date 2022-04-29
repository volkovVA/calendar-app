import React, { FC } from 'react';
import { Layout, Menu, MenuProps, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
  const itemsLogin: MenuProps['items'] = ['Login'].map((key) => ({
    key,
    label: `${key}`,
  }));
  const itemsLogout: MenuProps['items'] = ['Logout'].map((key) => ({
    key,
    label: `${key}`,
  }));

  const history = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      {isAuth ? (
        <Row style={{ justifyContent: 'flex-end' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={itemsLogout}
            onClick={() => console.log('Logout')}
          />
          <div style={{ color: '#fff' }}>VolkovVA</div>
        </Row>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={itemsLogin}
          style={{ justifyContent: 'flex-end' }}
          onClick={() => history(RouteNames.LOGIN)}
        />
      )}
    </Layout.Header>
  );
};

export default Navbar;
