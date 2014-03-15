/**
 * Handlebars Helpers for Pattern Lab
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');
var file = require('fs-utils');
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {
  options = options || {};
  var config = _.extend(options, options.data || {});

  var patterns = ['atom', 'molecule', 'organism', 'template'];

  patterns.forEach(function(pattern) {
    var inflection = pattern + 's';

    file.expand(options.patterns[inflection]).map(function(filepath) {
      var name = pattern + '-' + file.base(filepath);
      var template = file.readFileSync(filepath);
      Handlebars.registerPartial(name, template);
    });

    Handlebars.registerHelper(pattern, function(name, context) {
      context = _.extend(config, this, context || {});
      var template = Handlebars.partials[pattern + '-' + name];
      var fn = Handlebars.compile(template);
      return new Handlebars.SafeString(fn(context));
    });
  });
};