import express from 'express';
import morgan from 'morgan';
import { test } from '@/utils/temp';

const server = express();

server.use(morgan('dev'));

server.get('/', (req, res) => {
	test();
	res.json({ hi: 'We work?' });
});

const port = Number(process.env.PORT ?? 8000);

server.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
// console.log('Something');
