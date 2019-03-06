import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from '../SideBar/SideBar';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import EPG from '../EPG/EPG';
import Program from '../Program/Program';
import './App.less';

const { Content } = Layout;

export default function App(props) {
  return (
    <Router>
      <Layout className='Layout'>
        <SideBar />
        <Layout className='page-container'>
          <AppHeader />
          <Content className='LayoutContent'>
            <Route path='/' exact component={EPGRoute} />
            <Route path='/program/:id' component={ProgramsRoute} />
          </Content>
          <AppFooter>Norigin Media ©2019 Created by RLToscano</AppFooter>
        </Layout>
      </Layout>
    </Router>
  );
}

function ProgramsRoute({match}) {
  return <Program id={match.params.id}/>
}

function EPGRoute() {
  return <EPG />;
}