'use strict';

var path = require('path');
var game = require('purple-civet');
var $    = require('jquery');

$('document').ready(function() {
  $('#background').hide();
  $('#backtrack').click(function() {
    game.graph.backtrack();
    return false;
  });

  $('body').keydown(function(e) {
    //ctrl-shit-D to open dev tools
    if (e.keyCode === 68 && e.ctrlKey) {
      require('nw.gui').Window.get().showDevTools()
    }
  });
});


game.loadNodes(path.join(path.dirname(global.module.filename), 'data', 'nodes'), function() {
  game.state.set('log', 'Loaded');
  game.graph.jumpTo('start.json');
  $('#background').fadeIn(1000);
});

