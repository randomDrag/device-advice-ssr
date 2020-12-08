import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavbarMain from './components/NavbarMain';


const App = ({ route }) => {
    return (
      <div>
        <NavbarMain/>
        {renderRoutes(route.routes)}
      </div>
    );
  };
  
  export default {
    component: App,
  };
  