import * as ex from 'excalibur';
import { Ground } from './ground';
import { Resources } from './resources';
export class Hero extends ex.Actor {
	jumping = false;
	heroSprite = Resources.HeroImage.toSprite();
	constructor() {
		super({
			pos: ex.vec(200, 300),
			width: 32,
			height: 32,
			//	color: ex.Color.Yellow,
		});
	}
	override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
		if (other.owner instanceof Ground) {
			this.stop();
		}
	}
	override onInitialize(): void {
		this.acc = ex.vec(0, 1200);
		this.heroSprite.height = 64;
		this.heroSprite.width = 64;

		this.graphics.use(this.heroSprite);
	}
	start() {}
	stop() {
		this.vel = ex.vec(0, 0);
		this.acc = ex.vec(0, 0);
	}
}
