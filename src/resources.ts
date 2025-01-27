import { TiledResource } from '@excaliburjs/plugin-tiled';
import * as ex from 'excalibur';
export const Resources = {
	// Relative to /public in vite
	HeroImage: new ex.ImageSource('./images/hero.webp'),
	Map: new TiledResource('./level/map2.tmx'),
} as const;
