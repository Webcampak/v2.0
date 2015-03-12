/*
Copyright 2010-2012 Infracom & Eurotechnia (support@webcampak.com)
This file is part of the Webcampak project.
Webcampak is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License as published by 
the Free Software Foundation, either version 3 of the License, 
or (at your option) any later version.

Webcampak is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Webcampak. 
If not, see http://www.gnu.org/licenses/.
*/
console.log('Log: Load: Webcampak.store.permissions.groups.GroupPages');
Ext.define('Webcampak.store.permissions.groups.GroupPages', {
	extend: 'Ext.data.Store',
	model: 'Webcampak.model.permissions.Page',
	autoLoad: true,
	autoSync: true,    
	proxy: {  	
		type: 'rest',
		url: '/interface/app.php/grouppages',
		extraParams: {gid: '0'},
		reader: {
			type: 'json',
			root: 'data'
		},
		writer: {
			type: 'json'
		}	
	 
	},
	listeners: {
		beforeload: function(store, opt){
			Ext.getBody().mask(i18n.gettext('Please wait, loading content...'));	
		},	
		dataChanged: function(store) {
			Ext.getBody().unmask();	
		},
		write: function(store, operation){
    		console.log('Log: Store->Permissions->GroupPages: listeners write: function(store, operation)');			
			var record = operation.getRecords()[0],
				name = Ext.String.capitalize(operation.action),
				verb;
			if (name == 'Destroy') {
				record = operation.records[0];
			} 
			Ext.customPopup.msg(Ext.String.format(i18n.gettext('Information Message')), Ext.String.format(i18n.gettext('Operation successful')));
			/*Ext.Msg.show({
				title:'Information message',
				msg: Ext.String.format("Operation Successful"),
				buttons: Ext.Msg.OK,
				icon: Ext.Msg.QUESTION
			});*/
		}
	}    
});

