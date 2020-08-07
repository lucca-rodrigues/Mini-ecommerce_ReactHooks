import { Router, response } from 'express'
import listCity from './City/listCity';
import checkout from './City/listCity';

const routes = Router();

routes.use('/listcity', listCity);

routes.use('/checkout', checkout);

export default routes;