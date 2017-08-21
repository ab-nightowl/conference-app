import * as $ from 'jquery'

export default class SpeakerList {
	constructor(talkService) {
		this.talkService = talkService;
	}

	render(idView) {
		const prom = this.talkService.findAllSpeakers();
		prom.then(speakers => {
			document.getElementById(idView).innerHTML = '<ul>' + speakers.map(s => { return '<li>' + s.firstname + '</li>'}).join('') + '</ul>';
			}, error => {
				console.log(error);
			}
		);
		
	}

}
