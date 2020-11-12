import './App.css';
import { Layout } from 'antd';

function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header className="site-header">
        
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
