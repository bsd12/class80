nameofstudentarray=[];
function submit(){
    var displaystudentarray=[];
    for (var j=1; j<=4; j++){
        var nameofthestudent=document.getElementById("name_of_the_student_"+j).value;
        nameofstudentarray.push(nameofthestudent);
    }
    var lengthofarray=nameofstudentarray.length;
    for(var k=0; k<lengthofarray;k++)
    {
        displaystudentarray.push("<h4>name-"+nameofstudentarray[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var removecomas=displaystudentarray.join(" "); 
    document.getElementById("display_name_without_commas").innerHTML=removecomas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
     nameofstudentarray.sort();
    var displaystudentarraysorting=[];
    var lengthofarray=nameofstudentarray.length;
    for(var k=0; k<lengthofarray;k++)
    {
        displaystudentarraysorting.push("<h4>name-"+nameofstudentarray[k]+"</h4>");
    }
    var removecomas=displaystudentarraysorting.join(" "); 
    document.getElementById("display_name_without_commas").innerHTML=removecomas;
}

