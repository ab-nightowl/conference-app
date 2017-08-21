
import Layout from "./layout/index";
import TalkService from "./common/talk.service";
import SpeakerList from './speakers/list';
import SessionList from './sessions/list';

let layout = new Layout();
let ts = new TalkService();
let speakerList = new SpeakerList(ts);
let sessionList = new SessionList(ts);

layout.render();

var router = () => {
	if (location.hash == '#speakers-list') {
		// TODO afficher vue liste des présentateurs
		speakerList.render("main-view");
	} else if (location.hash == '#sessions-list') {
		// TODO afficher vue liste des sessions
		sessionList.render("main-view");
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
