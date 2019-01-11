import React from 'react';
import ReactWebComponent from 'react-web-component';
import Nexus from './Nexus';
import registerServiceWorker from './registerServiceWorker';

ReactWebComponent.create(<Nexus />, 'zeiss-nexus');
registerServiceWorker();
