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
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@100;300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
  <div id="root">${content}</div>
  <script src="bundle.js"></script>
</body>
</html>`;

}