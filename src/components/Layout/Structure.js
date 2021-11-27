import {React,useState} from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import { Layout } from 'antd';
import Navbar from '../Sidebar/Navbar';
import Headerbar from '../HeaderFooter/Header';
import Footerbar from '../HeaderFooter/footer';

const { Header, Content, Footer, Sider } = Layout;
export default function Structure({children}) {
  const [collapsed, setcollapsed] = useState(false);

  return (
   <Layout style={{ minHeight: '100vh' }}>
      <Sider 
       collapsible  collapsed={collapsed} onCollapse={setcollapsed} >
      <Navbar compact={collapsed}></Navbar>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0,height:'62px',backgroundColor:'#dcdcdc' }} >
          <Headerbar/>
        </Header>
        <Content style={{ backgroundColor:'white' ,overflow:'auto',maxHeight:'-webkit-fill-available'}}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center',height:'48px',position:'sticky',backgroundColor:'#dcdcdc',bottom:0,}}>
          </Footer>
      </Layout>
    </Layout>
  );
}