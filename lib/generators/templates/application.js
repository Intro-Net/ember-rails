//= require jquery
//= require jquery_ujs
<%= "//= require handlebars\n" if ::Rails.configuration.handlebars.ember_template == 'Handlebars' -%>
//= require ember
//= require ember-data
//= require_self
//= require ./<%= application_name.underscore %>

// for more details see: http://emberjs.com/guides/application/
<%= application_name.camelize %> = Ember.Application.create();

