import * as $ from 'jquery'

export default class SessionShow {
	constructor(talkService) {
		this.talkService = talkService;
	}

	render(idView, idParam) {
		const prom = this.talkService.findSession(idParam);
		prom.then(session => {
			document.getElementById(idView).innerHTML = ''
		}, error => {
				console.log(error);
			}
		);
		
	}

}
