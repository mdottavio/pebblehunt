
var config = require('./config');

module.exports = {
  size: { width: 144, height: 168 },
  margins: { top: 5, left: 5 },
  actionsIcons: {
    up: config.images.moveup,
    down: config.images.movedown
  },
  title: {
    position:{ top: 5, left: 42 },
    font: 'gothic-18-bold',
    color: 'black',
  },
  votes: {
    position:{ top: 24, left: 5 },
    size: { width: 27, height: 22 },
    font: 'gothic-8',
    color: 'black',
    imageup: config.images.voteup
  },
  subtitle: {
    position: { top: 84, left: 5 },
    size: { width: 134, height: 84 },
    background: 'black',
    text: {
      font: 'gothic-14',
      color: 'white',
      backgroundColor: 'black',
    },
    columns: {
      left: {
        position: { top: 84, left: 0 },
        size: { width: 5, height: 84 },
      },
      right: {
        position: { top: 84, left: 139 },
        size: { width: 5, height: 84 },
      }
    }
  }
};