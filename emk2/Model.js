
guidedModel =// @startlock
{
	Organisation :
	{
		anzeigename :
		{
			onGet:function()
			{// @endlock
				return this.name + ' , ' + this.ort ;
			}// @startlock
		}
	},
	Person :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.vorname + ' ' + this.name ;
			}// @startlock
		},
		entityMethods :
		{// @endlock
		fullName:function()
			{// @lock

			}// @startlock
		}
	},
	Gottesdienst :
	{
		entityMethods :
		{// @endlock
			besucher:function()
			{// @lock
				var besucher =ds.Gottesdienst.freunde + ds.Gottesdienst.kinder + ds.Gottesdienst.personen ;
				return besucher ;
			}// @startlock
		}
	}
};// @endlock
