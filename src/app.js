// server starting point 
import express from 'express';

import renderer from './helpers/renderer';


const app = express();

let PORT = 3000 ;
app.use(express.static('public'));

app.get("*", (req , res)=>{

res.send(renderer(req));



});


app.listen(PORT , ()=>{

    console.log(`APP IS RUNNING ON PORT ${PORT}`);

})

