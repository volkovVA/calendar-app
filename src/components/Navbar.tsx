import React, { FC } from 'react';
import { Layout, Menu, MenuProps, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';

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
  const auth = true;

  return (
    <Layout.Header>
      <Row style={{ justifyContent: 'flex-end' }}>
        {auth ? (
          <>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={itemsLogout}
              onClick={() => console.log('Logout')}
            />
            <div style={{ color: '#fff' }}>VolkovVA</div>
          </>
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
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
