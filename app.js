// Initialize StackMob
StackMob.init({
  publicKey: "648d7f86-44a0-408a-b0e3-b3b56925115f",
  apiVersion: 0
});

//i define my class
//associated the model with the schema
var Names = StackMob.Model.extend({
	schemaName: 'names'  //they say the schemaName must be lowercase
});

//create new instance of Names
//automatic variations to schema are allowed only with dev key
var names = new Names({
	name: 'My',
	surname: 'black',
	address: 'myoplace 8822 mycity',
	reputable: false,
	customer: true
});

//send to stackmob
/*names.create({
	success: function(model,result,options) {console.debug(model.toJSON());},
	error: function(model,error,options) {}
});*/

//get the last one
console.log(names.get('name'));
console.log(names.toJSON());
