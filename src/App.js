import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import { Layout } from "antd";
import "./App.css";
import Home from "./pages/home";
import Member from "./pages/member";
import ServerPage from "./pages/server";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <HeaderNav />
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route path="/member" component={Member} />
            <Route exact path="/" component={Home} />
            <Route path="/server" component={ServerPage} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          厦门大学数据挖掘与计算智能实验室
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
