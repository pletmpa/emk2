
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton2 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(5);
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(6);
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(2);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
