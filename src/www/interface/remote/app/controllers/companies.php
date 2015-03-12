<?php
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
/**
 * @class Companies
 * A simple application controller extension
 */
class Companies extends ApplicationController {
    /**
     * view
     * Retrieves rows from database.
     */
	public function view() {
		Log::debug("Log: /remote/app/controllers/companies.php - view() function");
		$userAuth = new Authorizations();
		if ($userAuth->isAllowedToAccessPage("auth.config.admin.permissions") == true) {  
			$res = new Response();
			$res->success = true;
			$res->message = "Loaded data";
			$res->data = Company::all();
			return $res->to_json();
		} else {
			Log::debug("Log: /remote/lib/controllers/sources.php - view() - User not allowed to access 'permissions-companies' page");			
		}
	}
    /**
     * create
     */
    public function create() {
		Log::debug("Log: /remote/app/controllers/companies.php - create() function");
		$userAuth = new Authorizations();
		if ($userAuth->isAllowedToAccessPage("auth.config.admin.permissions") == true) {      	
        $res = new Response();
        $rec = Company::create($this->params);
        if ($rec) {
            $res->success = true;
            $res->message = "Created new Company" . $rec->id;
            $res->data = $rec->to_hash();
        } else {
            $res->message = "Failed to create Company";
        }
        return $res->to_json();
		} else {
			Log::debug("Log: /remote/lib/controllers/sources.php - create() - User not allowed to access 'permissions-companies' page");			
		}
	}
    /**
     * update
     */
    public function update() {
		Log::debug("Log: /remote/app/controllers/companies.php - update() function");
		$userAuth = new Authorizations();
		if ($userAuth->isAllowedToAccessPage("auth.config.admin.permissions") == true) {        	
			$res = new Response();
			$rec = Company::update($this->id, $this->params);
			if ($rec) {
				$res->data = $rec->to_hash();
				$res->success = true;
				$res->message = 'Updated Company ' . $this->id;
			} else {
				$res->message = "Failed to find that Company";
			}
			return $res->to_json();
		} else {
			Log::debug("Log: /remote/lib/controllers/sources.php - update() - User not allowed to access 'permissions-companies' page");			
		}
	}
    /**
     * destroy
     */
    public function destroy() {
		Log::debug("Log: /remote/app/controllers/companies.php - destroy() function");
		$userAuth = new Authorizations();
		if ($userAuth->isAllowedToAccessPage("auth.config.admin.permissions") == true) {       	
			$res = new Response();
			if (Company::destroy($this->id)) {
				$res->success = true;
				$res->message = 'Destroyed Company ' . $this->id;
			} else {
				$res->message = "Failed to destroy Company";
			}
			return $res->to_json();
		} else {
			Log::debug("Log: /remote/lib/controllers/sources.php - update() - User not allowed to access 'permissions-companies' page");			
		}
	}
}

