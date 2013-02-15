
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
