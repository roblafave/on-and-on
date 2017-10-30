import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
//import App from './App';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

// Static Pages
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Scheduling from './pages/Scheduling';
import Page404 from './pages/Page404';

// Sign Up
//import Signup1 from './signup/1';
//import Signup2 from './signup/2';
//import Signup3 from './signup/3';

// Page Title Logic
let pageMeta = { /* browser title, page header */
  '/treatments': { title: 'Treatments', header: 'Treatments' },
  '/scheduling': { title: 'Scheduling', header: 'Scheduling' },
  default: { title: 'Welcome!', header: 'Welcome!' },
};

function updateTitle() {
  let path = window.location.pathname;
  // console.log(path);

  if (!pageMeta[path]) {
    // try to find a similar path that has a title and use it
    for (path in pageMeta) {
      if (window.location.pathname.indexOf(path) === 0) {
        break;
      }
    }

    if (!pageMeta[path]) { path = 'default'; }
  }

  document.getElementsByTagName('title')[0].innerText =  'On &amp; On :: ' + pageMeta[path].header;
}

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />

			<Route path='/treatments' component={Treatments}  onEnter={updateTitle} />
			<Route path='/scheduling' component={Scheduling} onEnter={updateTitle} />
			<Route path='*' component={Page404} onEnter={updateTitle} />

		</Route>
	</Router>
  , document.getElementById('root'));
registerServiceWorker();
