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
var names = new Names({
	name: 'John',
	surname: 'Smith',
	address: 'inexistent place 44322 mycity',
	reputable: false
});

//send to stackmob
names.create({
	success: function(model,result,options) {console.debug(model.toJSON());},
	error: function(model,error,options) {}
});