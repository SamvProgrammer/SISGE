(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function($) {
    
    customAlert = function(confOptions){
        var options = {
            showClose: false,
            showCloseText: 'Cerrar',
            showAcept: false,
            showAceptText: 'Aceptar',
            showCancel: false,
            showCancelText: 'Cancelar',
            closeByTimer: false,
            timer: 4000,
            closeByEscape: true,
            closeByEnter: true,
            message: '',
            detail: '',
            callbackOpen: function() {},
            callbackBtnClose: function() {},
            callbackBtnAcept: function() {},
            callbackBtnCancel: function() {},
            callbackClose: function() {}
        },
        keys      = { ESC: 27, ENTER: 13};
        //Se optienen las configuraciones de contrucción
        $.extend(options, confOptions);
        //Se agrega el contenido base al body
        $("body").append(
                '<div id="mask">' +
                '<div id="maskdialog" class="window">' +
                '<p id="maskinfo" class="maskinf"></p>' +
                '<p id="maskinfoDetail" class="maskinf">Hola mundo</p>' +
                '<div id="buttonsContent"></div>'+
                '</div>' +
                '</div>');
        var _customAlert = {
            init : function(){
                $("#maskinfo").html( options.message );
                $("#maskinfoDetail").html( options.detail );
                if(options.showAcept){
                    $("#buttonsContent").append('<button id="maskbtnacept" class="maskbtn">'+options.showAceptText+'</button>');
                    $("#maskbtnacept").click(function(){
                        options.callbackBtnAcept.call(this);
                        _customAlert.close();
                    });
                }
                if(options.showCancel){
                    $("#buttonsContent").append('<button id="maskbtncancel" class="maskbtn">'+options.showCancelText+'</button>');
                    $("#maskbtncancel").click(function(){
                        options.callbackBtnCancel.call(this);
                        _customAlert.close();
                    });
                }
                if(options.showClose){
                    $("#buttonsContent").append('<button id="maskbtnclose" class="maskbtn">'+options.showCloseText+'</button>');
                    $("#maskbtnclose").click(function(){
                        options.callbackBtnClose.call(this);
                        _customAlert.close();
                    });
                }
                if(options.closeByTimer){
                    setTimeout(function() {
                        _customAlert.close();
                    }, options.timer);
                }
                if(options.closeByEscape){
                    _customAlert.scape();
                }
                if(options.closeByEnter){
                    _customAlert.enter();
                }
                $("#mask").css({'width': '100%', 'height': '100%'});
            },
            scape : function(){
                $(document.body).on( "keydown", function( e ) {
                    if(e.which === keys.ESC){
                        _customAlert.close();
                    }
                });
            },
            enter : function(){
                $(document.body).on( "keydown", function( e ) {
                    if(e.which === keys.ENTER){
                        $("#maskdialog").find("#buttonsContent").remove();
                        _customAlert.close();
                    }
                });
            },
            open : function(){
                _customAlert.init();
                $("#mask").fadeIn(1000);
                options.callbackOpen.call(this);
            },
            close : function(){
                $("#mask").fadeOut(1000, function(){
                    $(this).remove();
                });
                options.callbackClose.call(this);
            }
        };
        return _customAlert.open();
    };
}));
