import { join } from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

let app = express();
const PORT = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); // set js as the view engine
app.use(express.static(join(__dirname, '../'))); // expose public folder as static assets
app.use(favicon(join(__dirname, '/favicon.ico'))); // Use the favicon

app.listen(PORT, (): void => {
	console.log('Example app listening at http://localhost:%s', PORT);
});
