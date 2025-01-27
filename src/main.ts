import * as ex from 'excalibur';
import { Hero } from './hero';
import { Resources } from './resources';

const game = new ex.Engine({
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
game.add(hero);
const loader = new ex.Loader(Object.values(Resources));
game.currentScene.camera.pos = new ex.Vector(-600, -300);

game.start(loader).then(() => {
	Resources.Map.addToScene(game.currentScene, { pos: ex.vec(2500, 0) });
});
