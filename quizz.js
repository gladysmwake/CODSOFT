let questions= [
	{
		id:1,
		question:"hello"
		answer:"hello"
		options[
			"iuyt"
			"5tfv"
			"hello"
			"cvb"]
	},
		
	{	id:2,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:3,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:4,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:5,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:6,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:7,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},

	{	id:8,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
		
	{	id:9,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},

	{	id:10,
		question:""
		answer:""
		options[
			""
			""
			""
			""]
	},
];

let question_count=0;
let points = 0;


window.onload =function(){
	show(question_count);
};

function show(count){
	let question= document.getElementById("questions");
	let[first, second, third, fourth] = questions[count].options;
	questions.innerhtml = '<h2>Q${count +1} .${questions[count].question} </h2>'
	for (let i =0; i<option.length; i++) {
		options[i].onclick=function(){
			for (let i =0; i<option.length; i++){
				if options[i].Classlist.Contains("active"){
					options[i].Classlist.remove("active");
				}
			}
			options[i].Classlist.add("active");	
		}

	}

}
function next(){
	if(question_count ==question.length -1){
		location.href="final.html"
	}
	console.log(question_count)

}

let user_answer = document.queryselector("li.option.active").innerHTML; 
if(user_answer ==questions[question_count].answer){
	points +=10;
	sessionstorage.setItem("points,points");
}
	console.log(points);



	question_count ++;
	show(question_count);

