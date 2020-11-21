//index.html file of server in js format


import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {renderRoutes} from 'react-router-config'
import Routes from '../client/Routes';

export default (req) =>{
  console.log(req.path);
    const content = renderToString(
      
          <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        
      );


return `<html>
<head>
  
</head>
<body>
  <div id="root">${content}</div>
  <script src="bundle.js"></script>
</body>
</html>`;

}