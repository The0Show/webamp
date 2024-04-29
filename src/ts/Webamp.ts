import StandardAudioPlayer from "./players/AudioPlayer";

import Uh from "../E+D-US_ML.wav";
import Player from "./players/PlayerBase";

export default class Webamp {
	private installedPlayers: Player[] = [];

	static currentPlayer: Player;

	constructor() {
		// Load players
		this.installedPlayers.push(new StandardAudioPlayer());
	}

	async play(track: ArrayBuffer) {
		for (let index = 0; index < this.installedPlayers.length; index++) {
			const player = this.installedPlayers[index];

			player.play(track).then(() => {
				Webamp.currentPlayer = player;
				return;
			});
		}
	}
}
