(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"calendar\">\n  <div class = \"month\">\n    <ul>\n      <li>\n        Month <br/>2019\n      </li>\n    </ul>\n  </div>\n\n  <ul class = \"weekdays\">\n    <li>Monday</li>\n    <li>Tuesday</li>\n    <li>Wednesday</li>\n    <li>Thursday</li>\n    <li>Friday</li>\n    <li>Saturday</li>\n    <li>Sunday</li>\n  </ul>\n\n  <ul class = \"days\">\n        <li>1</li>\n        <li>2</li>\n        <li>3</li>\n        <li>4</li>\n        <li>5</li>\n        <li>6</li>\n        <li>7</li>\n  </ul>\n</main>\n";
},"useData":true});
})();