import * as $ from 'jquery'

export default class SessionList {
	constructor(talkService) {
		this.talkService = talkService;
	}

	render(idView) {
		const prom = this.talkService.findAllSessions();
		prom.then(sessions => {
			document.getElementById(idView).innerHTML = '<ul>' + sessions.map(s => { return '<li>' + s.title + '</li>'}).join('') + '</ul>';
			}, error => {
				console.log(error);
			}
		);
		
	}

}
