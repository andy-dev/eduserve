$(document).ready(function(){

    window.onresize = function(){
        var w = window.outerWidth;
        console.log(w)
        if(w<530){
            console.log("hi");
            $('.mission').css('margin-Top', '-50px');
        }
    }


})