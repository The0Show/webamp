import { TickPacket } from "../Types";

export default class Player {
	constructor() {}

	/**
	 * Plays the track. **Should not be called via `super()`**.
	 */
	async play(audioData: ArrayBuffer): Promise<void | Error> {
		throw new Error("Not implemented");
	}

	/**
	 * Run every tick. **Should not be called via `super()`**.
	 */
	tick(): TickPacket | Error {
		throw new Error("Not implemented");
	}

	/**
	 * Reads the data. **Should not be called via `super()`**.
	 */
	static read(fileData: Buffer): void | Error {
		throw new Error("Not implemented");
	}
}
