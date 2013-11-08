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
/*var names = new Names({
	name: 'My',
	surname: 'black',
	address: 'myoplace 8822 mycity',
	reputable: false,
	customer: true
});*/
var names = new Names({names_id:'ea8b9687ba15443fbeeb1c2ea4cc63ce'});

//send to stackmob
/*names.create({
	success: function(model,result,options) {console.debug(model.toJSON());},
	error: function(model,error,options) {}
});*/

//get the last one
//console.log(names.get('name'));
//show the full json of the last one
//console.log(names.toJSON());

names.fetch({
	success: function(model,result,options){
		console.log(names.toJSON());
	} //no errors because i'm lazy
});

//If you save a field that previously didn't exist, StackMob will add that to your schema automatically (only in the development environment).
names.save({customer:false}, {
	success: function(model,result,options){
		console.log(names.toJSON());
	} //no errors because i'm lazy
});