import React from "react";
import './App.css';
import Layout from "./layout/Layout";
import ScrollToTop from 'react-scroll-up';
import Scroll from './components/organisms/scroll/Scroll';


// const sideBarIsOpen = null;
const scrollToTopStyles = {
  transitionDuration: '0.2s',
  transitionTimingFunction: 'linear',
  transitionDelay: '0s',
};

function App() {
  return (
    <div>
      <Layout />
      <Scroll>
        <ScrollToTop showUnder={ 100 } style={ scrollToTopStyles }>
          <span>To Top</span>
        </ScrollToTop>
      </Scroll>
    </div>
  );
}

export default App;
