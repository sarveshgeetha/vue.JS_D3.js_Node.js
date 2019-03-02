import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config.json';
import { ShipmentsDB } from './db.js';
const app = express();
const router = express.Router();
const db = ShipmentsDB();
app.use(cors());
app.use(bodyParser.json());
 

router.route('/login').get((req,res) => {
    setTimeout(() => {
        res.status(200).send("success");
      },3000);
})

router.route('/getshipments').get((req,res) => {
    db.findAll({raw: true,}).then(shipments => {
        res.json(shipments);
      }).catch(function (err) {
        res.status(400).send('Failed To Fetch Records');
      });;
})

app.use('/', router);

app.listen(config.server.port, () => console.log('Express server running on port 4000'));
