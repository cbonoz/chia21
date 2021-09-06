import React, { useState, useEffect } from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Slider,
  Menu,
  Breadcrumb,
  Layout,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from "antd";
import { useHistory } from "react-router-dom";

import logo from "./assets/chiaspace_white.png";
import "./App.less";
import Home from "./components/Home";
import Wallet from "./components/Wallet";
import Create from "./components/Create";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Purchase from "./components/Purchase";

const { Header, Footer, Sider, Content } = Layout;

const { Option } = Select;
const { Title } = Typography;

const App = () => {
  const [selectedKey, setSelectedKey] = useState();

  const getSelectedKey = (r) => {
    switch (r) {
      case "/create":
        return 2;
      case "/wallet":
        return 3;
      default:
        return 1;
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    console.log("path", path);
    setSelectedKey(getSelectedKey(path));
  }, [window.location.pathname]);

  return (
    <>
      <Layout>
        <Router>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectedKey]}
            >
              <img className="app-logo" src={logo} />
              <Menu.Item key="1">
                <Link to={"/"}>Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={"/create"}>Create</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to={"/wallet"}>Wallet</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <div className="container">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route
                  exact
                  path="/nft/:nftId"
                  render={(props) => <Purchase {...props} />}
                />
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/wallet">
                  <Wallet />
                </Route>
              </div>
            </Switch>
          </Content>
          <Footer>Chiaspace &copy; 2021 - Build and Create on Chia</Footer>
        </Router>
      </Layout>
    </>
  );
};

export default App;
