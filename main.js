var student_names = [];
function submit(){
var display_names = [];


for (var j = 1; j <=4;j++){
var name = document.getElementById("name_of_the_student_"+j).value;
console.log(name);
student_names.push (name) 
}
var length = student_names.length;
for (var i = 0; i<length;i++){
   display_names.push ("<h4>name-"+student_names[i]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_names;
student_names.sort();
document.getElementById("display_name_without_commas").innerHTML=student_names;

}


