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
console.log('Log: Load: Webcampak.view.cloudconfiguration.pictures.Crop');
Ext.define('Webcampak.view.cloudconfiguration.pictures.Crop' ,{
	extend: 'Ext.form.FieldSet',
	alias: 'widget.cloudconfigpicturescrop',
	layout: 'fit',
	items   : [{
		flex: 1,		
		labelWidth: 140,				
		name: 'cfgcropactivate',
		xtype: 'checkboxfield',
		fieldLabel: i18n.gettext('Crop pictures'),
		uncheckedValue: 'off',	
		inputValue: 'on'
	},	{
		xtype: 'container',
		layout: {type:'hbox',	align: 'stretch',		pack: 'start'},				
		items   : [{
			// Capture Frequency
			flex: 1,
			labelWidth: 140,				
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Size of the area'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{name : 'cfgcropsizewidth',	xtype: 'numberfield',	width: 60,	minValue: 0		}, 
				{html: 'x',							xtype: 'label',			width: 10,	padding: 2		}, 				
				{name : 'cfgcropsizeheight',	xtype: 'numberfield',	width: 60, 	minValue: 0		}
			]            		
		}, {
			// Capture Frequency
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Location'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{html: 'X: ',				xtype: 'label',			width: 20,	padding: 4		}, 				
				{name : 'cfgcropxpos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}, 
				{html: 'Y: ',				xtype: 'label',			width: 20,	padding: 4		}, 				
				{name : 'cfgcropypos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}
			]   					
		}]		
	}]
});



