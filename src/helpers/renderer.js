//index.html file of server in js format


import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

export default (req ,store) => {

  const content = renderToString(

    <Provider store={store}>

      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>

    </Provider>

  );


  return `
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!--link rel="icon" href="%PUBLIC_URL%/favicon.ico" / -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="freewish|| free wish || Makeawish"
      content="Makeawish is a site where you can wish for free under 1.5 lakh amount and if your lucky we will ship you for free at zero charges freewish.in"
    />
    <!-- link rel="apple-touch-icon" href="%PUBLIC_URL%/m.svg"-->
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- link rel="manifest" href="%PUBLIC_URL%/manifest.json" /-->

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@100;300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
   <link rel="stylesheet" href="main.css">
   </head>
  <body>

    <div id="root">${content}</div>
    <script src="bundle.js"></script>

   
  
 
  </body>
</html>`;

}