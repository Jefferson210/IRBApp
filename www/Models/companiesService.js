app.factory('companyService',function($resource,$properties){ 
    
    //var apiPath = 'http://'+$properties.ip+':'+$properties.port+'/api/v1/companies_api/:id';
    var apiPath = $properties.ip+':'+$properties.port+'/api/v1/irb_selections_api/:id';
    
    return $resource(apiPath,{id:'@id'},{
        update : {
            method:'PUT',
            params: {
                id: '@id'
            }
        }  
    });
})