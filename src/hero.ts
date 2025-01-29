import * as ex from 'excalibur';
import { Resources } from './resources';
export class Hero extends ex.Actor {
	heroSprite = Resources.HeroImage.toSprite();
	constructor() {
		super({
			pos: ex.vec(2160, 0),
			width: 32,
			height: 32,
			z: 1,
		});
	}
	override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {}

	override onInitialize(): void {
		this.heroSprite.height = 128;
		this.heroSprite.width = 128;

		this.graphics.use(this.heroSprite);
	}

	override update(engine: ex.Engine, elapsed: number): void {
		const speed = 300;
		const { Keys } = ex;

		engine.input.keyboard.on('hold', (evt) => {
			switch (evt.key) {
				case Keys.W:
					this.vel.y = -speed;
					break;
				case Keys.S:
					this.vel.y = speed;
					break;
				case Keys.A:
					this.vel.x = -speed;
					break;
				case Keys.D:
					this.vel.x = speed;
					break;
			}
		});

		engine.input.keyboard.on('release', (evt) => {
			switch (evt.key) {
				case Keys.W:
				case Keys.S:
					this.vel.y = 0;
					break;
				case Keys.A:
				case Keys.D:
					this.vel.x = 0;
					break;
			}
		});
	}
	start() {}
	stop() {
		this.vel = ex.vec(0, 0);
		this.acc = ex.vec(0, 0);
	}
}
