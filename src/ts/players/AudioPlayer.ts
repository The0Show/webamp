import PlayerBase from "./PlayerBase";

export default class StandardAudioPlayer extends PlayerBase {
	private audioCtx: AudioContext;
	private audioTrack: AudioBufferSourceNode;

	constructor() {
		super();
	}

	async play(audioData: ArrayBuffer): Promise<void | Error> {
		this.audioCtx = new (window.AudioContext ||
			(window as any).webkitAudioContext)();

		this.audioTrack = this.audioCtx.createBufferSource();

		const audioBuffer = await this.audioCtx.decodeAudioData(audioData);
		this.audioTrack.buffer = audioBuffer;

		this.audioTrack.connect(this.audioCtx.destination);

		this.audioTrack.start(this.audioCtx.currentTime);
	}

	static import(fileData: Buffer): void {}
}
