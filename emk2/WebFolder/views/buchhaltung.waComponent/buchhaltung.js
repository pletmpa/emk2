
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'buchhaltung';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var spenderFilter = {};	// @textField
	var nameFilter = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	spenderFilter.keyup = function spenderFilter_keyup (event)// @startlock
	{// @endlock
		source.component1_person.query('name= :1', $$('component1_spenderFilter').getValue() + '*');
	};// @lock

	nameFilter.keyup = function nameFilter_keyup (event)// @startlock
	{// @endlock
		source.component1_person.query('name= :1', $$('component1_nameFilter').getValue() + '*');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_spenderFilter", "keyup", spenderFilter.keyup, "WAF");
	WAF.addListener(this.id + "_nameFilter", "keyup", nameFilter.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
