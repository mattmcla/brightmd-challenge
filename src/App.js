import './App.css';
import './site/Content.css';
import { Layout } from 'antd';
import { SiteHeader } from './site/Header';
import { SiteSidebar } from './site/Sidebar';
import { SettingsSection } from './settings-management/Section';
import { HoursOfOperation } from './settings-management/HoursOfOperation';

function App() {
  const { Content } = Layout;
  return (
    <Layout>
      <SiteHeader />
      <Layout>
        <SiteSidebar />
        <Content className='site-content'>
          <SettingsSection
              title='Hours of Operation'
              description='Manage standard hours of operation when providers are available to provide care. Patients will be informed if they submit an exam outside of these hours.'
          >
            <HoursOfOperation />
          </SettingsSection>

          <SettingsSection
            title='Branding'
            description='Set name, welcome page text, and other branding for your patients to see during an exam.'
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
