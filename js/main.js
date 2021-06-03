$(document).ready(function(){
 
    var mixer = mixitup('.img-mixer');

});
var a;
function show_hide()
{
    if (a==1)
    {
        document.getElementById("show").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("show").style.display="none";
        return a=1;
    }
}
var a;
function show_hide_2()
{
    if (a==1)
    {
        document.getElementById("show_2").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("show_2").style.display="none";
        return a=1;
    }
}