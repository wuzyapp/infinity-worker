var FreshBooks = require('../');


/* FreshBooks() initiates your connection to the FreshBooks API.

This requires your "API URL" and "Authentication Token". To get these variables 
open FreshBooks and goto My Account > FreshBooks API. */

var api_url = "https://cornerstoneist.freshbooks.com/api/2.1/xml-in"
  , api_token = "10d8cfaddff7dc9e986d33f2b266b637";
  
var freshbooks = new FreshBooks(api_url, api_token)
  , client = new freshbooks.Client;

var zdRequestorEmail = "armen@bluip.com";
 
client.list({"email": zdRequestorEmail}, function(err, clients) {
//client.list(function(err, clients) { //lists 25 clients 
  if(err) { //returns if an error has occured, ie invoice_id doesn't exist.
    console.log(err);

  } else {

     var fbOutput = clients[0];
     //console.log(fbOutput);
     console.log('Freshbooks ID : ' + fbOutput.client_id);
     console.log('Email : ' + fbOutput.email);
     console.log('First Name : ' + fbOutput.first_name);
     console.log('Last Name : ' + fbOutput.last_name);
     console.log('Organization : ' + fbOutput.organization);
     console.log('Address : ' + fbOutput.p_street1);
     console.log('Suite : ' + fbOutput.p_street2);
     console.log('City, State and Zip : '+fbOutput.p_city+', '+fbOutput.p_state+' '+fbOutput.p_code);
     console.log('Notes : ' + fbOutput.notes);  
  };
});
  