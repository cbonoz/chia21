import React, { useState, useEffect } from "react";
import { Select, Menu, Layout, Typography, Tooltip } from "antd";
import logo from "./assets/chiaspace_white.png";
import Home from "./components/Home";
import Wallet from "./components/Wallet";
import Purchase from "./components/Purchase";
import Create from "./components/Create";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { APP_NAME, DEMO_ADDRESS } from "./util";
import "./App.less";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [selectedKey, setSelectedKey] = useState();
  const [address, setAddress] = useState(DEMO_ADDRESS); // TODO

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

              {address && (
                <span className="logged-in">
                  <Tooltip placement="bottom" title={address}>
                    Logged in: {address.substring(0, 4)}...
                  </Tooltip>
                </span>
              )}
            </Menu>
          </Header>
          <Content>
            <Switch>
              <div className="container">
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route
                  exact
                  path="/nft/:index/:nftId"
                  render={(props) => <Purchase address={address} {...props} />}
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
          <Footer>{APP_NAME} &copy; 2021 - Build and Create on Chia</Footer>
        </Router>
      </Layout>
    </>
  );
};

export default App;
