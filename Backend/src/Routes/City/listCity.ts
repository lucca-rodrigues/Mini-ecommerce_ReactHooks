import { Router, request, response} from 'express';

const listCity = Router();

listCity.post('/', (request, response) =>{
  return response.json({message: 'hello world'});
})

export default listCity;