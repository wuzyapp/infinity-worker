var mongoose = require('mongoose')
   , User2Task = mongoose.model("User2Task")
   , Project2Time = mongoose.model("Project2Time");

module.exports = {
	insertData: function(data){
			var user2Task = new User2Task({
				userName: data.userName,
				user:[{
					zd:  data.zd,
					fb:  data.fb,
				}],
				fields: data.fields,
				tasks: data.tasks
			})
			user2Task.save(function(err){
				if (err) 
					console.log(err.message);
				else
  					console.log('Success!');
			})
	},
	removeData :function(){
		User2Task.remove(function (err) {
			 if (err) 
				console.log(err.message);
			else
					console.log('Success!');
		})
	},

	showData: function(){
		User2Task.find(function (err, user2Task) {
			 if (err) 
				console.log(err.message);
			else
				console.log(user2Task);
		})
	},

	updateData: function(data){
		User2Task.findOne({userName : data.userName},function (err, doc) {
			
			 if (err) 
				console.log(err.message);
			else
				if(doc.length>0 ){

					doc.userName = data.userName;
					doc.user = [{zd:  data.zd, fb:  data.fb}];
					doc.fields = data.fields;
					doc.tasks = data.tasks;
					
					doc.save(function(err){
					if (err) 
						console.log(err.message);
					else
	  					console.log('Success!');
					})
				}
				
		})
	},

	findData: function(data, cb){
		User2Task.find({userName : data},function (err, userData) {
			 if (err) 
				console.log(err.message);
			else
				cb(userData);
		})
	},

	insertTimeEntry:function(data){
		console.log('okkkk');
		
	},

	timeEntry:function(data){
		console.log(data);
		console.log('aaaaaaaaaaaaa');
		Project2Time.findOne({id : data.task_id},function (err, doc) {
			
			if (err) 
				console.log(err.message);
			else
			if(doc){
				console.log(doc);
			}
			else{
				
				var project2Time = new Project2Time({
					taskID : data.task_id,
					timeEntry:[{id:data.time_entry_id, notes : data.woekDescription, hour:data.hours }]
				})

				project2Time.save(function(err){
					if (err) 
						console.log(err.message);
					else
	  					console.log('Success insert!');
				})
				console.log('insertNewData')
			}
				
		})
	}

	
}