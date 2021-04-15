// server starting point 
import express from 'express';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';


const app = express();

let PORT = 3000 ;
app.use(express.static('public'));

app.get("*", (req , res)=>{

const store = createStore(req);

res.send(renderer(req,store));



});


app.listen(PORT , ()=>{

    console.log(`APP IS RUNNING ON PORT ${PORT}`);

})

