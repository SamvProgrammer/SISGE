/****** Creado por Franz Gualambo ***************/
/***** Email : gualambo@gmail.com  *****************/
(function(a){
    var nuevaB="",Objeto="";
    a.fn.validCampoFranz=function(b){
     Objeto=a(this).selector;
        if(Objeto==="#id_persona")
            nuevaB=b;
        a(this).on({keypress:function(a){

                var c  =a.which,d=a.keyCode,e=String.fromCharCode(c).toLowerCase(),f;
                if(Objeto==="#id_persona"){
                    f=nuevaB;}
                else{
                    f=b;}
                (-1!=f.indexOf(e)||9==d||37!=c&&37==d||39==d&&39!=c||8==d||46==d&&46!=c)&&161!=c||a.preventDefault()
        

            }
        
        
        });

    }
})(jQuery);