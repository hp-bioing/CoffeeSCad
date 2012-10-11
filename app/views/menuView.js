// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, MainMenuView, mainMenu_template, marionette, _;
    $ = require('jquery');
    _ = require('underscore');
    marionette = require('marionette');
    mainMenu_template = require("text!templates/mainMenu.tmpl");
    MainMenuView = (function(_super) {

      __extends(MainMenuView, _super);

      function MainMenuView() {
        this.onRender = __bind(this.onRender, this);

        this.onBeforeRender = __bind(this.onBeforeRender, this);
        return MainMenuView.__super__.constructor.apply(this, arguments);
      }

      MainMenuView.prototype.template = mainMenu_template;

      MainMenuView.prototype.onBeforeRender = function() {
        return console.log("pouet");
      };

      MainMenuView.prototype.onRender = function() {
        return console.log("tjtj");
      };

      return MainMenuView;

    })(marionette.ItemView);
    return MainMenuView;
  });

}).call(this);
