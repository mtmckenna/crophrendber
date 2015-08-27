import Ember from 'ember';
import BrickBreaking from '../../game/states/brick-breaking';

/*global Phaser */

export default Ember.Component.extend({

  didInsertElement: function() {
    this.game = new Phaser.Game(160,
                                284,
                                Phaser.AUTO,
                                'phaser-crophrendber',
                                {
                                  preload: this.preload.bind(this),
                                  create: this.create.bind(this)
                                },
                                null,
                                false,
                                false);

    this.addStates();
  },

  addStates: function() {
    this.game.state.add('brick-breaking', new BrickBreaking(this.game));
  },

  preload: function() {
    window.game = this.game;
    //this.game.load.crossOrigin = 'Anonymous';
  },

  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVeritcally = true;
    this.game.state.start('brick-breaking');
  }
});
