import * as $ from 'jquery'

export default class SessionList {
	constructor(talkService) {
		this.talkService = talkService;
	}

	render(idView) {
		const prom = this.talkService.findAllSessions();
		prom.then(sessions => {
			document.getElementById(idView).innerHTML = '<hr><ul class="list-group">' + sessions.map(s => 
				{ 
					return '<li class="list-group-item">'
					+`<a onclick="this.talkService.findSession(${s.id})" href="#sessions-list?id=${s.id}" style="text-decoration: underline;">`
					+ s.title 
					+ '</a></li>'
				})
				.join('') + '</ul>';
			}, error => {
				console.log(error);
			}
		);
		
	}

}
