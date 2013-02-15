
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

		
function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'main_personen';
	// @endregion// @endlock

		
		
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var personEvent = {};	// @dataSource
	var geschlechtEvent = {};	// @dataSource
	var combobox1 = {};	// @combobox
	var imageButton6 = {};	// @buttonImage
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		component1_geschlecht.load({
			onSuccess : function(e){
				sources.component1_geschlecht.selectByKey(e.entity.getKey());
				
				/**
				 * A flag used to tell to the "category" datasource that the event 'onCurrentElementChange'
				 * came from the 'product' datasource event
				 */
				sources.component1_geschlecht._selectedFromPersonSrc = true;
			}
		});
	};// @lock

	geschlechtEvent.onCurrentElementChange = function geschlechtEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(source.component1_geschlecht._selectedFromPersonSrc){
			source.component1_geschlecht._selectedFromPersonSrc = false;
		}
		else{
			source.component1_person.geschlecht.set(this);
			source.component1_person.save();
		}
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		source.component1_person.save();
	};// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		source.component1_person.save({
			 onSuccess: function (event){
                //handle successful save
            sources.component1_person.addEntity(sources.component1_person.getCurrentElement()); 
        },
        onError: function(event){ 
                // an error occurred
                // display the top-level error message in the Display Error widget
            $$('salesVolume').setErrorMessage({message: event.error[0].message, tooltip: true});
            }
		}
		);
	};// @lock

//		kommArray.push({art: 'Telefon' , id: 'T'});
//		kommArray.push({art: 'Mobile', id: 'M'});
//		kommArray.push({art: 'Fax', id: 'F'});
//		kommArray.push({art: 'Telefon geschäftlich', id: 'TG'});
//		kommArray.push({art: 'Telefon sonstiges', id: 'S'});
//		
//		source.kommArray.sync();
//		
//		geschlechtArray.push({geschlecht: 'männlich' , id: 'm'});
//		geschlechtArray.push({geschlecht: 'weiblich' , id: 'w'});
//		source.geschlechtArray.sync();
		
	textField2.keyup = function textField2_keyup (event)// @startlock
	{// @endlock
		
		source.component1_person.query('name = :1 order by name', {params : [$$('queryName') + '*']});
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		
		source.component1_person.query('organisation = :1 order by name', {params : [$$('queryOerg')+ '*']});
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$$('component1_tabView1').selectTab(3);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_geschlecht", "onCurrentElementChange", geschlechtEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener(this.id + "_textField2", "keyup", textField2.keyup, "WAF");
	WAF.addListener(this.id + "_textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
