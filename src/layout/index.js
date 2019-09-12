import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px"
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/dashboard/analysis">分析页</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/monitor">监控页</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/workplace">工作台</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Link to="/getpost">
                <Icon type="pie-chart" />
                <span>v2ex</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/list">
                <Icon type="check" />
                <span>Table</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>cache</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <Link to="/cache/localstorage">
                  <Icon type="close" />
                  <span>LocalStorage</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/cache/SessionStorage">
                  <Icon type="stock" />
                  <span>SessionStorage</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/cache/RequestStorage">
                  <Icon type="stock" />
                  <span>RequestStorage</span>
                </Link>
              </Menu.Item> 
            </SubMenu>
            <Menu.Item key="10">
              <Link to="/tree">
                <Icon type="check" />
                <span>Tree</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/life/index">
                <Icon type="check" />
                <span>life</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ backgroud: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, backgroud: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
