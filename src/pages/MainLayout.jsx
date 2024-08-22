import { Avatar, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import logo from '../assets/logo-web.png'
import { UserOutlined, PieChartOutlined, FundProjectionScreenOutlined, AimOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";
import AntForm from "../components/Forms";

function MainLayout() {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between" }}>
                <Image width="180px" height="42"
                    src={logo} preview={false}
                />
                <Avatar size={48} icon={<UserOutlined />} style={{ margin: "8px" }} />
            </Header>
            <Layout>
                <Sider collapsible={true}>
                    <Menu theme="dark">
                        <Menu.Item>
                            <PieChartOutlined />
                            <Link to="/">Dashboard</Link>
                            </Menu.Item>
                        <Menu.Item><FundProjectionScreenOutlined />
                        <Link to="/courses">Courses</Link>
                        </Menu.Item>
                        <Menu.Item><AimOutlined />
                        <Link to="/assignments">Assignments</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content >
                    <Routes>
                        <Route path="/" element={<p>Dashboard</p>} />
                        <Route path="/courses" element={<p>Courses</p>} />
                        <Route path="/assignments" element={<AntForm />} />
                    </Routes>
                </Content>

            </Layout>
            <Footer >Footer</Footer>

        </Layout>
    );
}
export default MainLayout;