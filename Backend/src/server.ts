import express from 'express';
import routes from './Routes'

const app = express();

app.use(express.json());

app.use(routes);

app.listen(4000, () => {
  console.log('✅ Server started in port 4000');
});