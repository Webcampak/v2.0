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
console.log('Log: Load: Webcampak.model.dashboard.SourceDiskUsage');
Ext.define('Webcampak.model.dashboard.SourceDiskUsage', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'date', 			type: 'int'}, 
		{name: 'picturesize', 	type: 'int'},
		{name: 'videosize', 		type: 'int'},
		{name: 'globalsize', 	type: 'int'}				
	]    
});

