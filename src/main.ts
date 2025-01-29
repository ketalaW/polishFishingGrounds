import * as ex from 'excalibur';
import { Hero } from './hero';
import { Resources } from './resources';

const { Engine, Loader, Color, Vector, Keys } = ex;

const game = new Engine({
	backgroundColor: ex.Color.fromHex('#54C0CA'),
	pixelArt: true,
	pixelRatio: 2,
	displayMode: ex.DisplayMode.FillScreen,
	pointerScope: ex.PointerScope.Document,
	width: 800,
	height: 600,
});

game.screen.applyResolutionAndViewport();

const hero = new Hero();

const loader = new Loader(Object.values(Resources));
game.currentScene.camera.strategy.lockToActor(hero);

game.start(loader).then(() => {
	Resources.Map.addToScene(game.currentScene, { pos: ex.vec(4260, 0) });
});

game.add(hero);
// const speed = 300;

// game.input.keyboard.on('hold', (evt) => {
// 	switch (evt.key) {
// 		case Keys.W: // Góra
// 			hero.vel.y = -speed;
// 			break;
// 		case Keys.S: // Dół
// 			hero.vel.y = speed;
// 			break;
// 		case Keys.A: // Lewo
// 			hero.vel.x = -speed;
// 			break;
// 		case Keys.D: // Prawo
// 			hero.vel.x = speed;
// 			break;
// 	}
// });

// game.input.keyboard.on('release', (evt) => {
// 	switch (evt.key) {
// 		case Keys.W:
// 		case Keys.S:
// 			hero.vel.y = 0;
// 			break;
// 		case Keys.A:
// 		case Keys.D:
// 			hero.vel.x = 0;
// 			break;
// 	}
// });
