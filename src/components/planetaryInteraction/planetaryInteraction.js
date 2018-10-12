import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Colonies from './colonies';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Colonies</Tab>
      <Tab>Config</Tab>
    </TabList>
    <TabPanel><Colonies /></TabPanel>
    <TabPanel><h1>Config</h1></TabPanel>
  </Tabs>
);
