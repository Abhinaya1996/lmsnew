import { Avatar, Button, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import logo from '../assets/logo-web.png'
import { UserOutlined, PieChartOutlined, FundProjectionScreenOutlined, AimOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";
import AntForm from "../components/Forms";
import Counter from "../components/Counter";
import AdminPage from "../components/AdminPage";
import TableAnt from "../components/Table";
import { ErrorBoundary } from "react-error-boundary";
import AssignmentTable from "../components/AssignmentTable";
import CourseTable from "../components/CourseTable";
import LoginPage from "./LoginPage";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const FallbackComponent = ({error}) => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
        </div>
    );
}

function MainLayout() {
    const {isLoggedIn, logout} = useContext(AuthContext)

    return (
        isLoggedIn?
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between" }}>
                <Image width="180px" height="42"
                    src={logo} preview={false}
                />
                <div>
                <Avatar size={48} icon={<UserOutlined />} style={{ margin: "8px" }} />
                <Button type="primary" danger onClick={()=>logout()}>logout</Button>

                </div>
               
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
                        <Menu.Item><AimOutlined />
                        <Link to="/admin">Admin</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content >
                    <Routes>
                        <Route path="/" element={<TableAnt/>} />
                        <Route path="/courses" element={
                            <ErrorBoundary FallbackComponent={FallbackComponent}>
                                <Counter/>
                            </ErrorBoundary>
                            } />
                        <Route path="/assignments" element={<AntForm />} />
                        <Route path="/admin" element={<AdminPage/>}>
                            <Route path="assignments" element={<AssignmentTable/>}></Route>
                            <Route path="courses" element={<CourseTable/>}></Route>
                        </Route>
                    </Routes>
                </Content>

            </Layout>
            <Footer >Footer</Footer>

        </Layout>:<LoginPage/>
    );
}
export default MainLayout;