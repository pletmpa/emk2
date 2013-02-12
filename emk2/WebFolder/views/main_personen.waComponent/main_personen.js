
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

		
function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'main_personen';
	// @endregion// @endlock

		kommArray = [];
		geschlechtArray = [];
		
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

		kommArray.push({art: 'Telefon' , id: 'T'});
		kommArray.push({art: 'Mobile', id: 'M'});
		kommArray.push({art: 'Fax', id: 'F'});
		kommArray.push({art: 'Telefon geschäftlich', id: 'TG'});
		kommArray.push({art: 'Telefon sonstiges', id: 'S'});
		
		source.kommArray.sync();
		
		geschlechtArray.push({geschlecht: 'männlich' , id: 'm'});
		geschlechtArray.push({geschlecht: 'weiblich' , id: 'w'});
		source.geschlechtArray.sync();
		
	textField2.keyup = function textField2_keyup (event)// @startlock
	{// @endlock
		var theName = $$("queryName").getValue();
		source.personen.query('name = :1 order by name', {params : [theName + '*']});
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		var theName = $$("queryOrg").getValue();
		source.personen.query('organisation = :1 order by name', {params : [theName + '*']});
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$$('component1_tabView1').selectTab(3);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField2", "keyup", textField2.keyup, "WAF");
	WAF.addListener(this.id + "_textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
