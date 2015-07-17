$(document).ready(function(){
	$(".newPerson").on('click',function(){
		var Jim = new Person();
		$(".name").next().text(Jim.name);
		$(".age").next().text(Jim.age);
		$(".sex").next().text(Jim.sex);
		$(".weight").next().text(Jim.weight);
	});
	$(".btn").mouseup(function(){ //Fix Bootsrap button focus after click
	    $(this).blur();
	})
});
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
function Person (){
	this.age = randomNumber(1,100);
	this.sex = getSex();
	this.name = getName(this.sex)
	this.weight = randomNumber(7,250);
}
function getSex (){
	var sex = randomNumber(1,2);
	sex = (sex == 1) ? "Male" : "Female";
	return sex;
}
function getName (sex){
	var maleName = ["Irvin", "Fredrick", "Maurice", "Micah", "Chris"];
	var femaleName = ["Dannette", "Daphine", "Treva", "Bonnie", "Sarah"];
	var lastName = ["Johnson", "Smith", "Jones", "Anderson"];
	var fullName;
	lastName = lastName[randomNumber(0,(lastName.length-1))]
	if (sex == "Male"){
		var f = randomNumber(0,(maleName.length-1));
		fullName = maleName[f] + " " + lastName;
		return fullName;
	}
	else {
		var f = randomNumber(0,(femaleName.length-1));
		fullName = femaleName[f] + " " + lastName;;
		return fullName;
	}
}