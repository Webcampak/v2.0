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
console.log('Log: Load: Webcampak.view.configuration.postprodvideos.Thumbnail');
Ext.define('Webcampak.view.configuration.postprodvideos.Thumbnail' ,{
	extend: 'Ext.form.FieldSet',
	alias: 'widget.configpostprodvideosthumbnail',
	layout: 'fit',
	items   : [{
		flex: 1,		
		labelWidth: 220,				
		name: 'cfgthumbnailactivate',
		xtype: 'checkboxfield',
		fieldLabel: i18n.gettext('Insert a thumbnail'),
		uncheckedValue: 'off',	
		inputValue: 'on'
	},	{
		flex: 1,		
		labelWidth: 220,				
		name: 'cfgthumbnailborder',
		xtype: 'checkboxfield',
		fieldLabel: i18n.gettext('Insert a border around thumbnail'),
		uncheckedValue: 'off',	
		inputValue: 'on'
	},	{
		flex: 1,		
		xtype: 'label',
		html: i18n.gettext('Thumbnail captured from Source Picture')
	},	{
		xtype: 'container',
		layout: {type:'hbox',	align: 'stretch',		pack: 'start'},				
		items   : [{
			// Capture Frequency
			flex: 1,
			labelWidth: 140,				
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Size'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{name : 'cfgthumbnailsrccropsizewidth',	xtype: 'numberfield',	width: 60,	minValue: 0		}, 
				{html: 'x',							xtype: 'label',			width: 10,	padding: 2						}, 				
				{name : 'cfgthumbnailsrccropsizeheight',	xtype: 'numberfield',	width: 60, 	minValue: 0		}
			]            		
		}, {
			// Capture Frequency
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Location'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{html: 'X: ',				xtype: 'label',			width: 20,	padding: 4						}, 				
				{name : 'cfgthumbnailsrccropxpos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}, 
				{html: 'Y: ',				xtype: 'label',			width: 20,	padding: 4						}, 				
				{name : 'cfgthumbnailsrccropypos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}
			]   					
		}]		
	},	{
		flex: 1,		
		xtype: 'label',
		html: i18n.gettext('Thumbnail inside Destination Picture')
	},	{
		xtype: 'container',
		layout: {type:'hbox',	align: 'stretch',		pack: 'start'},				
		items   : [{
			// Capture Frequency
			flex: 1,
			labelWidth: 140,				
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Size'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{name : 'cfgthumbnaildstsizewidth',	xtype: 'numberfield',	width: 60,	minValue: 0			}, 
				{html: 'x',							xtype: 'label',			width: 10,	padding: 2					}, 				
				{name : 'cfgthumbnaildstsizeheight',	xtype: 'numberfield',	width: 60, 	minValue: 0		}
			]            		
		}, {
			// Capture Frequency
			xtype: 'fieldcontainer',			
			fieldLabel: i18n.gettext('Location'),
			combineErrors: false,
			layout: {type:'hbox',	pack: 'start'},				
			items: [
				{html: 'X: ',				xtype: 'label',			width: 20,	padding: 4					}, 				
				{name : 'cfgthumbnaildstxpos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}, 
				{html: 'Y: ',				xtype: 'label',			width: 20,	padding: 4					}, 				
				{name : 'cfgthumbnaildstypos',	xtype: 'numberfield', 	width: 60,	minValue: 0		}
			]   					
		}]		
	}]
});


