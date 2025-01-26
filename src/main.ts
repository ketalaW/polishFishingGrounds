import * as ex from 'excalibur';
import { Bird } from './bird';
import { Ground } from './ground';
import { Hero } from './hero';
import { Resources } from './resources';

const game = new ex.Engine({
	width: 400,
	height: 500,
	backgroundColor: ex.Color.fromHex('#54C0CA'),
	pixelArt: true,
	pixelRatio: 2,
	displayMode: ex.DisplayMode.FitScreen,
});
// const bird = new Bird();
// game.add(bird);

const hero = new Hero();
game.add(hero);

const ground = new Ground(ex.vec(0, game.screen.drawHeight - 64));
game.add(ground);
const loader = new ex.Loader(Object.values(Resources));

game.start(loader);
