import '../imports/client/js/_main.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from './../imports/ui/App';

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
