import { TiledResource } from '@excaliburjs/plugin-tiled';
import * as ex from 'excalibur';
export const Resources = {
	// Relative to /public in vite
	HeroImage: new ex.ImageSource('./images/fisher.png'),
	Map: new TiledResource('./level/map2.tmx'),
} as const;
