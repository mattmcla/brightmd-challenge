import { Layout } from 'antd';
import './Header.css';

export function SiteHeader() {
  const { Header } = Layout;
  return (
      <Header className="site-header">
        <img src="/bright-logo.jpeg" alt="Bright.MD logo" className="site-logo" />
        <div className="subheader">
          <h1>Bright.md Hospital Administration</h1>
        </div>
      </Header>
  );
}
