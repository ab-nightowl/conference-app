import * as $ from 'jquery'
import htmlData from "./layout.html"

export default class Layout {
	constructor() {}

	render() {
		$("body").html(htmlData);
	}

}
