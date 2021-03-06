import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './serverStatus.html';

import Statistics from '../../../api/statistics/statistics.js';

Template.serverStatus.onCreated(() => {
  const instance = Template.instance();
  instance.subscribe('allStatistics');
});

Template.serverStatus.helpers({
  loadAverage() {
    const system = Statistics.findOne({ _id: 'system' });
    if (system) {
      return system.loadAverage;
    }
    return false;
  },
  ftpPort() {
    return Meteor.settings.public.ftpPort;
  },
});
