import { Router, request, response} from 'express';

const checkout = Router();

checkout.post('/', (request, response) =>{
  return response.json({message: 'hello world'});
})

export default checkout;