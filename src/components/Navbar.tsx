import React, { FC } from 'react';
import { Layout, Menu, MenuProps, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

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
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      {isAuth ? (
        <Row justify="end">
          <div style={{ color: '#fff' }}>{user.username}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={itemsLogout}
            // @ts-ignore
            onClick={logout}
          />
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
