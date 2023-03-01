import App from './app';
import PlayerRoute from './routes/player.route';

const app = new App([new PlayerRoute()]);

app.listen();
