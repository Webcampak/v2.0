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
console.log('Log: Load: Webcampak.view.dashboard.sourcediskusage.SourceDiskUsage');
Ext.define('Webcampak.view.dashboard.sourcediskusage.SourceDiskUsage' ,{
	extend: 'Ext.chart.Chart', 
	alias: 'widget.sourcediskusage',

	store: 'dashboard.SourceDiskUsage',

	legend: {
		position: 'right'
	},
	animate: true,
	shadow: true,

	axes: [{
		title: i18n.gettext('Disk Usage (MB)'),
		type: 'Numeric',
		position: 'left',
		fields: ['picturesize', 'videosize'],
		minimum: 0,
		grid: {
			odd: {
				opacity: 1,
				fill: '#ddd',
				stroke: '#bbb',
				'stroke-width': 0.5
			}
		},
		label: {font: '10px Arial'}			
	}, {
		type: 'Time',
		title: i18n.gettext('SourceName'),		
		position: 'bottom',
		fields: ['date'],
		dateFormat: 'd M',
		label: {font: '10px Arial'},
		grid: true
	}],
	series: [{
		type: 'area',
		highlight: false,
		axis: 'left',
		xField: 'date',
		yField: ['picturesize', 'videosize'],
		style: {
			opacity: 0.93
		}
	}]	
});

  