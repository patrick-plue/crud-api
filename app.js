import express from 'express';

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () =>
    console.log(`Server is listening on http://localhost:${port}`)
);

export default app;
