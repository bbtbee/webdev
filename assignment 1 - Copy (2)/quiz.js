function result(){

    var score=0;
    alert("form submitted!")
    if(document.getElementById("q1a").checked==true){
        score=score+1;
    }
    else{
        alert("your answer for qn1 is wrong. correct answer: complimentary");
    }
    if(document.getElementById("q2a").value=="saturation"||
    document.getElementById("q2a").value=="Saturation"){
        score=score+1;
    }
    else{
        alert("your answer for qn2 is wrong. correct answer: saturation");
    }

    if(document.getElementById("q3a").checked==true){
        score=score+1;
    }
    else{
        alert("your answer for qn3 is wrong. correct answer: all of the above")
    }

    if(document.getElementById("q4a").checked==true){
        score=score+1;
    }
    else{
        alert("your answer for qn4 is wrong. correct answer: colour wheel");
    }

    alert("you scored "+score+" out of 4 questions correct.");
}


//scrapped idea
function result1(){
    document.getElementsByTagName("input").setAttribute("readonly","true");
    var score=0;
    if(document.getElementById("q1a").checked==true){
        score=score+1;
        document.getElementById("a1").style.display="block";
    }
    else{
        document.getElementById("a1c").style.display="block";
    }
    alert("q1")
    alert(document.getElementById("q2a").value)
    if(document.getElementById("q2a").value=="saturation"||
    document.getElementById("q2a").value=="Saturation"){
        score=score+1;
    }
    alert('q2')
    if(document.getElementById("q3a").checked==true){
        score=score+1;
    }
    alert('q3')
    if(document.getElementById("q4a").checked==true){
        score=score+1;
    }
    alert(score);
}