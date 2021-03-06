import Tasks from './components/Tasks';
import DAOs from './components/DAOs';
import Stake from './components/Stake';
import Dashboard from './components/Dashboard';

import React from 'react';
import { Routes, Link as ReactLink, Route } from 'react-router-dom';
import { Grid, Card, Input, Button, Text, Spacer, Link } from "@nextui-org/react";
import './App.css';

import { ListBulletIcon, DashboardIcon, LayersIcon, AngleIcon } from '@radix-ui/react-icons'

function App() {
  return (
    <Grid.Container className="container">

      {/* Topbar */}
      <Grid xs={12}>
        <Grid.Container className="topnav" justify="space-between" alignItems="center">
          <Grid >
            <a href="#Dashboard">Bounti</a>
          </Grid>
          <Grid >
            <Grid.Container gap={2}>
              <Grid>
                <Input labelPlaceholder="Search" />
              </Grid>
              <Grid>
                <Button>Account</Button>
              </Grid>

            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Grid>

      {/* Sidebar */}
      <Grid xs={1} className="sidenav">
        <ul>
          <Link>
            <Text wrap color css={{ color: "white", }}>
              <li><ReactLink to='/'>
                <DashboardIcon />
                Dashboard
              </ReactLink></li>
            </Text>
            <Spacer y={2} />
          </Link>


          <Text color css={{ color: "white", }}>
            <li><ReactLink to='/DAOs'>
              <LayersIcon />
              DAOs
            </ReactLink></li>
          </Text>
          <Spacer y={2} />


          <Text color css={{ color: "white", }}>
            <li><ReactLink to='Tasks'>
              <ListBulletIcon />
              Tasks
            </ReactLink></li>
          </Text>
          <Spacer y={2} />


          <Text color css={{ color: "white", }}>
            <li><ReactLink to='Stake'>
              <AngleIcon />
              Stake
              <Spacer y={2} />
            </ReactLink></li>
          </Text>
        </ul>
      </Grid>

      {/* Content */}
      <Grid xs={11}>
        <Card>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/stake' element={<Stake />} />
            <Route path='/daos' element={<DAOs />} />
          </Routes>


        </Card>
      </Grid>

    </Grid.Container >
  );
}

export default App;
