/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zcursoapp1es/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
