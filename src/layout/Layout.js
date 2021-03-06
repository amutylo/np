import React from "react";
import Sidebar from "../components/organisms/sidebar/Sidebar";
import Wrapper from "../components/organisms/wrapper/Wrapper";
import Logo from "../components/organisms/logo/Logo";
import logo from "../components/assets/logo.png";
import Image from "../components/atoms/image/Image";
import Aside from "../components/organisms/aside/Aside";
import Footer from "../components/organisms/footer/Footer";
import Menu from "../components/organisms/menu/Menu";
import Leftmenu from "../components/organisms/leftmenu/Leftmenu";
import Button from "../components/atoms/button/Button";
import CategoryMenu from "../components/organisms/categorymenu/CategoryMenu";
import Content from "../components/organisms/content/Content";
import Header from "../components/organisms/header/Header";
import SearchForm from "../components/organisms/searchform/SearchForm";
import MobilHeader from "../components/organisms/mobileheader/MobileHeader";
import List from "../components/organisms/list/List";
import Overlay from "../components/organisms/overlay/Overlay";
import GlobalContextProvider from "../contexts/GlobalContext";

const logoData = {
  src: logo,
};

const Layout = () => (
  <div>
    <GlobalContextProvider>
      <Sidebar>
        <Logo>
          <Image imageData={logoData} />
        </Logo>

        <CategoryMenu />

        <Aside>
          <Footer>
            <Menu>
              <Leftmenu />
            </Menu>
            © 2020{" "}
            <Button as="a" href={"/app"}>
              News Portal
            </Button>
            . All rights reserved.
          </Footer>
        </Aside>
      </Sidebar>
      <Wrapper>
        <Header>
          <MobilHeader />
          <SearchForm />
        </Header>
        <Content>
          <List />
        </Content>
      </Wrapper>
      <Overlay />
    </GlobalContextProvider>
  </div>
);

export default Layout;
