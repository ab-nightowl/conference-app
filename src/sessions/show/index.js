import * as $ from 'jquery'

export default class SessionShow {
	constructor(talkService) {
		this.talkService = talkService;
	}

	render(idView, idParam) {
		const prom = this.talkService.findSession(idParam);
		prom.then(session => {
			document.getElementById(idView).innerHTML = `<h1>${session.title}</h1><p>${session.desc}</p><br>`;
		}, error => {
				console.log(error);
			}
		);
		
	}

}
