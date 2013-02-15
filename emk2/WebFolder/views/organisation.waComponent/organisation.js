
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'organisation';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var orgFilter = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	orgFilter.keyup = function orgFilter_keyup (event)// @startlock
	{// @endlock
		source.component1_organisation.query('name= :1', $$('component1_orgFilter').getValue() + '*');
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$$('component1_tabView1').selectTab(3);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_orgFilter", "keyup", orgFilter.keyup, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
