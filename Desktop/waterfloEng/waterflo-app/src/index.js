import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './w3.css';
import registerServiceWorker from './registerServiceWorker';

import {Banner} from './0.banner/banner';
import {TopNav} from './1.navigation/topNav';
import {About} from './2.about/about';
import {Services} from './3.services/services';
import {Products} from './4.products/products';
import {Announcement} from './5.news/announcement';
import {News} from './5.news/news';
import {Contact} from './6.contact/contact';
import {Google} from './7.google/google'
import {BottomNav} from './1.navigation/bottomNav';

ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<TopNav />, document.getElementById('topNav'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Services />, document.getElementById('services'));
ReactDOM.render(<Products />, document.getElementById('products'));
ReactDOM.render(<Announcement />, document.getElementById('weeklyAnnouncement'));
ReactDOM.render(<News />,document.getElementById('news'));
ReactDOM.render(<Contact/>, document.getElementById('contact'));
ReactDOM.render(<Google/>, document.getElementById('google'));
ReactDOM.render(<BottomNav />, document.getElementById('bottomNav'));

registerServiceWorker(); //not quite sure why this is required 

