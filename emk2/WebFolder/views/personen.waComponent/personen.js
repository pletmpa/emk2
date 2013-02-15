
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'personen';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var nameFilter = {};	// @textField
	var orgFilter = {};	// @textField
	var Liste = {};	// @dataGrid
	var combobox1 = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	nameFilter.keyup = function nameFilter_keyup (event)// @startlock
	{// @endlock
		source.component1_person.query('name= :1', $$('nameFilter').getValue() + '*');
	};// @lock

	orgFilter.keyup = function orgFilter_keyup (event)// @startlock
	{// @endlock
		source.component1_person.query('organisation= :1', $$('orgFilter').getValue() + '*');
	};// @lock

	Liste.onRowDblClick = function Liste_onRowDblClick (event)// @startlock
	{// @endlock
		//debugger;
	  $$('component1_tabView1').selectTab(2);
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		//debugger;
		$$('combobox1').getValues();
		WAF.sources.component1_person.sync();
		//ds.person.geschlecht.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_nameFilter", "keyup", nameFilter.keyup, "WAF");
	WAF.addListener(this.id + "_orgFilter", "keyup", orgFilter.keyup, "WAF");
	WAF.addListener(this.id + "_Liste", "onRowDblClick", Liste.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
