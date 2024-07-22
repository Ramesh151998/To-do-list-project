import * as antdIcons from '@ant-design/icons';
import Icon, {
  LogoutOutlined
} from '@ant-design/icons';
import {
  DefaultFooter,
  ProConfigProvider
} from '@ant-design/pro-components';
import ProLayout from '@ant-design/pro-layout';
import { Dropdown, Tooltip, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import moment from 'moment';
import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ReactComponent as DarkModeIcon } from '../assets/icons/dark-mode.svg';
import { ReactComponent as LightModeIcon } from '../assets/icons/light-mode.svg';
import trackXLog from '../assets/images/TrackX White Logo.png';
import userIcon from '../assets/images/user.jpg';
import { logout, useIAMClientState } from '../common/iam-client-react';
import { IconType } from '../common/iam-client-react/constants/icon-type';
import { MenuItem, treeRouter } from '../common/utils';
import { HeaderFullscreen, NotificationComponent, OnlineStatus } from '../components/common';
import { components } from './all-components';
import { svgIcons } from './all-svg-icons';

const { useToken } = theme;
/* eslint-disable-next-line */
export interface CustomProLayoutProps { }

const renderIcon = (iconType, iconName) => {
  if (iconType === IconType.SYS_LIB) {
    const SpecificIcon = antdIcons[iconName]
      ? antdIcons[iconName]
      : antdIcons['SolutionOutlined'];
    return <SpecificIcon />;
  } else {
    const SpecificIcon = svgIcons[iconName];
    return <Icon component={SpecificIcon} style={{ fontSize: '20px' }} />;
  }
};

const getSubMenu = (route) => {
  if (route && route?.subMenuData && route?.subMenuData?.length != 1) {
    return {
      key: `${route.key}`,
      icon: renderIcon(route.iconType, route.iconName),
      label: route.title,
      children: route.subMenuData.map((item) => getSubMenu(item)),
      path: route.path ? route.path : `${route.key}`,
    };
  } else if (route?.subMenuData?.length === 1) {
    return {
      key: `${route.subMenuData[0].key}`,
      icon: renderIcon(
        route.subMenuData[0].iconType,
        route.subMenuData[0].iconName
      ),
      label: route.subMenuData[0].title,
      path: route.subMenuData[0].path
        ? route.subMenuData[0].path
        : `${route.subMenuData[0].key}`,
    };
  } else {
    return {
      key: `${route.key}`,
      icon: renderIcon(route.iconType, route.iconName),
      label: route.title,
      path: route.path,
    };
  }
};

const getRoute = (route) => {
  if (route && route.subMenuData && route.subMenuData.length) {
    return route.subMenuData.map((item) => getRoute(item));
  } else {
    return (
      <Route
        key={`${route?.key}`}
        path={`/${route?.path}`}
        element={components[route?.componentName]}
      />
    );
  }
};

export const CustomProLayout = (props: CustomProLayoutProps) => {
  const [pathname, setPathname] = useState(location.pathname);
  const [dark, setDark] = useState(true);
  const [sideBar, setSideBar] = useState(true);//false

  const navigate = useNavigate();
  const {
    token: { colorPrimary, colorBgBase },
  } = useToken();
  const { IAMClientAuthContext, dispatch } = useIAMClientState();

  const getAllRoutes = () => {
    const subMenus: any[] = [];
    const menus = IAMClientAuthContext.menuAccessObject
      ? IAMClientAuthContext.menuAccessObject
      : [];
    menus.forEach((eachRoutes) => {
      const abc = getRoute(eachRoutes);
      subMenus.push(abc);
    });
    return subMenus;
  };

  const getAllSubMenus = () => {
    const subMenus: MenuItem[] = [];
    const menus = IAMClientAuthContext.menuAccessObject
      ? IAMClientAuthContext.menuAccessObject
      : [];
    menus.forEach((eachRoutes) => {
      const subMenu = getSubMenu(eachRoutes);
      subMenus.push(subMenu);
    });
    return subMenus;
  };

  const logoutHandler = () => {
    logout(dispatch);
  };

  const getSideBarData = (): any => {
    if (sideBar) {
      return {
        headerContentRender: (props) =>
          props.layout !== 'side' && document.body.clientWidth > 1000 ? (
            // <ProBreadcrumb />
            <></>
          ) : undefined,
        layout: 'mix',
      };
    } else {
      return {
        layout: 'top',
      };
    }
  };
  return (
    <ProConfigProvider dark={dark}>
      <div
        id="main-layout"
        style={{
          height: '100vh',
        }}
      >
        <ProLayout
          title=""
          logo={<img style={{ width: "180px" }} src={!dark ? trackXLog : trackXLog} />}
          locale="en-US"
          siderWidth={200}
          colorPrimary={colorPrimary}
          {...getSideBarData()}
          fixSiderbar
          // token={{ header: { colorBgHeader: dark ? '#ffffff' : '#001529', colorTextMenu: !dark ? '#ffffff' : '#001529', colorHeaderTitle: !dark ? '#ffffff' : '#001529', colorTextMenuSelected: colorPrimary }, sider: { colorBgMenuItemSelected: colorBgBase } }}
          className={dark ? 'light-theme' : 'dark-theme'}
          token={{
            header: {
              colorBgHeader: dark ? '#000' : '#016582',
              colorTextMenu: dark ? '#ffffff' : '#d5d5d5',
              colorHeaderTitle: !dark ? '#ffffff' : '#ffffff',
              colorTextMenuSelected: '#fff',
              colorBgMenuItemHover: '#017c99',
              colorTextMenuActive: '#fff',
            },
            sider: {
              colorBgMenuItemSelected: colorBgBase,
              colorMenuBackground: dark ? '#000' : '#047595',
              colorTextMenu: '#fff',
              colorBgMenuItemHover: '#005f7a',
              colorTextMenuItemHover: '#fff',
              colorBgCollapsedButton: '#047595',
              colorTextCollapsedButton: '#fff',
            },
          }}
          menu={{
            request: async () => treeRouter(getAllSubMenus()),
            collapsedShowGroupTitle: true,
          }}
          location={{
            pathname,
          }}
          avatarProps={{
            src: userIcon,
            size: 'small',
            title: (
              <OnlineStatus>
                <span style={{ color: !dark ? '#ffffff' : '#001529' }}>
                  {IAMClientAuthContext?.user?.userName}
                </span>
              </OnlineStatus>
            ),
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'roles',
                        label: `Roles: ${IAMClientAuthContext?.user?.roles?.toString()}`,
                      },
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: 'logout',
                        onClick: () => {
                          logoutHandler();
                        },
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          actionsRender={(props) => {
            return [

              <><Tooltip placement="bottom" title={'Notifications'}>
                <NotificationComponent />
              </Tooltip>
                <Tooltip placement="bottom" title={'Switch mode'}>
                  {dark ? (
                    <LightModeIcon
                      onClick={() => {
                        setDark(!dark);
                      }}
                      style={{ color: '#fff', fontSize: '30px' }} />
                  ) : (
                    <DarkModeIcon
                      onClick={() => {
                        setDark(!dark);
                      }}
                      style={{ color: '#fff', fontSize: '30px' }} />
                  )}
                  {/* <Button
    size="large"
    onClick={() => { setDark(!dark); }}
    icon={!dark ? <DarkModeIcon style={{ color: "#22C55E" }} /> : <LightModeIcon style={{ color: "#22C55E" }} />}
  ></Button> */}
                </Tooltip></>,
              // <Tooltip placement="bottom" title={'Switch LayOut'}>
              //   {sideBar ? (
              //     <CreditCardOutlined
              //       style={{ color: '#fff', fontSize: '20px' }}
              //       onClick={async () => {
              //         setSideBar((prev) => !prev);
              //       }}
              //     />
              //   ) : (
              //     <LayoutOutlined
              //       style={{ color: '#fff', fontSize: '20px' }}
              //       onClick={async () => {
              //         setSideBar((prev) => !prev);
              //       }}
              //     />
              //   )}
              //   {/* <Button size="large" type='primary' onClick={async () => { setSideBar(prev => !prev); }} icon={ sideBar ? <PicLeftOutlined /> : <LayoutOutlined style={{ color: '#22C55E' }} /> }></Button> */}
              // </Tooltip>,
              <Tooltip placement="bottom" title={'Resize Layout'}>
                <HeaderFullscreen />
              </Tooltip>,
            ];
          }}
          menuItemRender={(item, dom) => {
            return (
              <Link
                to={item?.path || '/'}
                onClick={() => {
                  setPathname(item.path || '/');
                }}
              >
                {dom}
              </Link>
            );
          }}
          onMenuHeaderClick={() => navigate('/')}
          footerRender={() => (
            <DefaultFooter
              
              links={[
                {
                  key: 'click',
                  title: 'schemax',
                  href: 'https://www.schemaxtech.com/',
                },
              ]}
              copyright={`${moment().year()} Schemax Expert Techno Craft.`}
            />
          )}
        >
          <Content>
            <Routes>{getAllRoutes().map((rec) => rec)}</Routes>
          </Content>
        </ProLayout>
      </div>
    </ProConfigProvider>
  );
};

export default CustomProLayout;
