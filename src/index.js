
import Layout from "./layout/index";
import TalkService from "./common/talk.service";
import SpeakerList from './speakers/list';
import SessionList from './sessions/list';
import SessionShow from './sessions/show';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

let layout = new Layout();
let ts = new TalkService();
let speakerList = new SpeakerList(ts);
let sessionList = new SessionList(ts);
let sessionShow = new SessionShow(ts);

layout.render();

var router = () => {
	let parent = location.hash.split("=");

	if (location.hash == '#speakers-list') {
		// TODO afficher vue liste des présentateurs
		speakerList.render("main-view");
	} else if (location.hash == '#sessions-list') {
		// TODO afficher vue liste des sessions
		sessionList.render("main-view");
	} else if (parent[0] == '#sessions-list?id') {
		// TODO afficher vue d'une session
		sessionShow.render("main-view", parent[1]);
	} else {
		// TODO afficher vue par défaut
		
	}
}

window.addEventListener('load', () => {
	window.onhashchange = () => {
		router();
	};
	
	router();
});
