import './Sidebar.css';
import { Layout } from 'antd';

export function SiteSidebar() {
  const { Sider } = Layout;

  return (
    <Sider className='site-sidebar'>
      <h1>Settings</h1>
      <a>Hours</a>
      <a>Branding</a>
    </Sider>
  );
}
