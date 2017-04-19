const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = [
	{id:0,name:'Max',age:24,likesJS:true},
	{id:1,name:'Spencer',age:69,likesJS:false},
	{id:2,name:'Lil Tokey',age:13,likesJS:false},
	{id:3,name:'Jake',age:25,likesJS:true}
];

// Get all of people
app.get('/people',function(req,res){
	res.json(data);
})

// Get a single person
app.get('/people/:id',function(req,res){
	let id = req.params.id;

	const single = data.filter(person=>{
		if(person.id==id) return true;
	})

	res.json(single);
})

// Post a new person
app.post('/people',function(req,res){
	let person = {id:req.body.id,name:req.body.name,age:req.body.age,likesJS:req.body.likesJS};
	data.push(person);
	res.json(data);
})

// Delete a person
app.delete('/people/:id',function(req,res){
	let id = req.params.id
	data.forEach((person,idx)=>{
	if(person.id == id) {
		data.splice(idx,1)
	}
	})
	res.json(data);
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
