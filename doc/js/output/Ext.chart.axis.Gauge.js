Ext.data.JsonP.Ext_chart_axis_Gauge({"subclasses":[],"files":[{"filename":"Gauge.js","href":"Gauge2.html#Ext-chart-axis-Gauge"}],"mixins":[],"code_type":"ext_define","inheritable":false,"uses":[],"meta":{},"members":{"method":[{"meta":{},"tagname":"method","owner":"Ext.chart.axis.Abstract","name":"constructor","id":"method-constructor"},{"meta":{"private":true},"tagname":"method","owner":"Ext.Base","name":"addInheritableStatics","id":"method-addInheritableStatics"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"callOverridden","id":"method-callOverridden"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"callParent","id":"method-callParent"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"initConfig","id":"method-initConfig"},{"meta":{"private":true},"tagname":"method","owner":"Ext.Base","name":"mixin","id":"method-mixin"},{"meta":{"private":true},"tagname":"method","owner":"Ext.Base","name":"own","id":"method-own"},{"meta":{"private":true},"tagname":"method","owner":"Ext.Base","name":"ownMethod","id":"method-ownMethod"},{"meta":{"private":true},"tagname":"method","owner":"Ext.Base","name":"setConfig","id":"method-setConfig"},{"meta":{},"tagname":"method","owner":"Ext.chart.axis.Gauge","name":"setTitle","id":"method-setTitle"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"statics","id":"method-statics"}],"event":[],"property":[{"meta":{"private":true},"tagname":"property","owner":"Ext.Base","name":"applyConfig","id":"property-applyConfig"},{"meta":{"protected":true},"tagname":"property","owner":"Ext.Base","name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"cfg":[{"meta":{},"tagname":"cfg","owner":"Ext.chart.axis.Gauge","name":"margin","id":"cfg-margin"},{"meta":{"required":true},"tagname":"cfg","owner":"Ext.chart.axis.Gauge","name":"maximum","id":"cfg-maximum"},{"meta":{"required":true},"tagname":"cfg","owner":"Ext.chart.axis.Gauge","name":"minimum","id":"cfg-minimum"},{"meta":{"required":true},"tagname":"cfg","owner":"Ext.chart.axis.Gauge","name":"steps","id":"cfg-steps"},{"meta":{},"tagname":"cfg","owner":"Ext.chart.axis.Gauge","name":"title","id":"cfg-title"}]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='docClass'>Ext.chart.axis.Abstract</a><div class='subclass '><strong>Ext.chart.axis.Gauge</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Gauge2.html#Ext-chart-axis-Gauge' target='_blank'>Gauge.js</a></div></pre><div class='doc-contents'><p>Gauge Axis is the axis to be used with a Gauge series. The Gauge axis\ndisplays numeric data from an interval defined by the <code>minimum</code>, <code>maximum</code> and\n<code>step</code> configuration properties. The placement of the numeric data can be changed\nby altering the <code>margin</code> option that is set to <code>10</code> by default.</p>\n\n<p>A possible configuration for this axis would look like:</p>\n\n<pre><code>axes: [{\n    type: 'gauge',\n    position: 'gauge',\n    minimum: 0,\n    maximum: 100,\n    steps: 10,\n    margin: 7\n}],\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-maximum' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-cfg-maximum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-cfg-maximum' class='name not-expandable'>maximum</a><span> : Number</span><strong class='required signature'>required</strong></div><div class='description'><div class='short'><p>The maximum value of the interval to be displayed in the axis.</p>\n</div><div class='long'><p>The maximum value of the interval to be displayed in the axis.</p>\n</div></div></div><div id='cfg-minimum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-cfg-minimum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-cfg-minimum' class='name not-expandable'>minimum</a><span> : Number</span><strong class='required signature'>required</strong></div><div class='description'><div class='short'><p>The minimum value of the interval to be displayed in the axis.</p>\n</div><div class='long'><p>The minimum value of the interval to be displayed in the axis.</p>\n</div></div></div><div id='cfg-steps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-cfg-steps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-cfg-steps' class='name not-expandable'>steps</a><span> : Number</span><strong class='required signature'>required</strong></div><div class='description'><div class='short'><p>The number of steps and tick marks to add to the interval.</p>\n</div><div class='long'><p>The number of steps and tick marks to add to the interval.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-margin' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-cfg-margin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-cfg-margin' class='name expandable'>margin</a><span> : Number</span></div><div class='description'><div class='short'>The offset positioning of the tick marks and labels in pixels. ...</div><div class='long'><p>The offset positioning of the tick marks and labels in pixels.</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-cfg-title' class='name not-expandable'>title</a><span> : String</span></div><div class='description'><div class='short'><p>The title for the Axis.</p>\n</div><div class='long'><p>The title for the Axis.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-applyConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-applyConfig' class='name not-expandable'>applyConfig</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract.html#Ext-chart-axis-Abstract-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.axis.Abstract-method-constructor' class='name expandable'>Ext.chart.axis.Gauge</a>( <span class='pre'>[Object config]</span> ) : Object</div><div class='description'><div class='short'>Creates new Axis. ...</div><div class='long'><p>Creates new Axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Config options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addInheritableStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-addInheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addInheritableStatics' class='name expandable'>addInheritableStatics</a>( <span class='pre'>Object members</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result after calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the parent's overridden method. ...</div><div class='long'><p>Call the parent's overridden method. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result from the superclass' method</p>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object config</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-mixin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-mixin' class='name expandable'>mixin</a>( <span class='pre'>Object name, Object cls</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Used internally by the mixins pre-processor ...</div><div class='long'><p>Used internally by the mixins pre-processor</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cls</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-own' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-own' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-own' class='name expandable'>own</a>( <span class='pre'>Object name, Object value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ownMethod' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-ownMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-ownMethod' class='name expandable'>ownMethod</a>( <span class='pre'>Object name, Object fn</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Gauge'>Ext.chart.axis.Gauge</span><br/><a href='source/Gauge2.html#Ext-chart-axis-Gauge-method-setTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Gauge-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>String title</span> )</div><div class='description'><div class='short'>Updates the title of this axis. ...</div><div class='long'><p>Updates the <a href=\"#!/api/Ext.chart.axis.Gauge-cfg-title\" rel=\"Ext.chart.axis.Gauge-cfg-title\" class=\"docClass\">title</a> of this axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addStatics' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-borrow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-borrow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-borrow' class='name expandable'>borrow</a>( <span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a> fromClass, String/String[] members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Borrow another class' members to the prototype of this class. ...</div><div class='long'><p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fromClass</span> : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><div class='sub-desc'><p>The class to borrow members from</p>\n</div></li><li><span class='pre'>members</span> : String/String[]<div class='sub-desc'><p>The names of the members to borrow</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : Object<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-createAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'>String/Object alias, String/Object origin</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String/Object<div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : String/Object<div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-implement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-implement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-implement' class='name expandable'>implement</a>( <span class='pre'>Object members</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Override prototype members of this class. ...</div><div class='long'><p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">callOverridden</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","html_meta":{},"aliases":{},"superclasses":["Ext.Base","Ext.chart.axis.Abstract"],"component":false,"tagname":"class","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"name":"Ext.chart.axis.Gauge","extends":"Ext.chart.axis.Abstract","requires":[],"id":"class-Ext.chart.axis.Gauge","parentMixins":[],"singleton":false,"statics":{"method":[{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"addStatics","id":"static-method-addStatics"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"borrow","id":"static-method-borrow"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"create","id":"static-method-create"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"createAlias","id":"static-method-createAlias"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"getName","id":"static-method-getName"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"implement","id":"static-method-implement"},{"meta":{"static":true},"tagname":"method","owner":"Ext.Base","name":"override","id":"static-method-override"}],"property":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[]}});