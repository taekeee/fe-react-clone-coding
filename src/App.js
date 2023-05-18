// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Navigation from "./component/Navigator/Navigation";
import Top from "./component/top/Top";
import Card from "./component/Content/Card";
import Footer from "./component/Footer/Footer";

import { GlobalStyle } from "./component/Styled/Styled";

function App() {
  return <>  
  <GlobalStyle/>
  <Navigation></Navigation>
  <Top/>
  <Card/>
  <Footer/>
  </>;
}

export default App;