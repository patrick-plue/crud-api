import express from 'express';
import todoRouter from './router/todoRouter';

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/todo', todoRouter);

app.listen(port, () =>
    console.log(`Server is listening on http://localhost:${port}`)
);

export default app;
