import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import { Layout } from "antd";
import "./App.css";
import Home from "./pages/home";

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
            <Route exact path="/" component={Home} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          厦门大学数据挖掘于计算智能实验室
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
