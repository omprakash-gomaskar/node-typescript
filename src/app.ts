import express from 'express';

const app = express();
const port = 3000;

process.once('SIGUSR2', function () { process.kill(process.pid, 'SIGUSR2'); });

app.get('*', (req, res) => {
	res.json({ msg: 'server running on port 3000' });
});

app.listen(port, () => {
	console.log(`server is listening on ${port}`);
});
