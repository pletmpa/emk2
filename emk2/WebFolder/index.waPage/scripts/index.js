﻿
WAF.onAfterInit = function onAfterInit() {// @lock
					

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var documentEvent = {};	// @document
	var menuItem2 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
// @endregion// @endlock
		
// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('menuBar1').hide();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$$('menuBar1').show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock

		 Version = "1.0";
		source.Version.sync();
		
		

		
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		
		$$('component1').loadComponent('/views/organisation.waComponent');
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/views/main_personen.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
// @endregion
};// @endlock
