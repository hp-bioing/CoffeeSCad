// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, ProjectFile, backbone, _;
    $ = require('jquery');
    _ = require('underscore');
    backbone = require('backbone');
    ProjectFile = (function(_super) {

      __extends(ProjectFile, _super);

      ProjectFile.prototype.defaults = {
        name: "main",
        ext: "coscad",
        content: ""
      };

      function ProjectFile(options) {
        ProjectFile.__super__.constructor.call(this, options);
      }

      return ProjectFile;

    })(backbone.Model);
    return ProjectFile;
  });

  /*
    initialize:(options)->
      @bind "change:name", ()=>
        name = @get "name"
        console.log "Changed my name to " + name
  
  class Project extends Backbone.Collection
    model: ProjectFile
    
    initialize: (options) =>
      @all_files_saved=false
    
    export:(format)->
  */


}).call(this);
