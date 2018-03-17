<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<header id="header_principal">
    <div>
        <img id="logo_estado_banner" src="<c:url value="/images/template/banner3A.png"/>"/>
        <img id="logo_estado_banner_cuerpo" src="<c:url value="/images/template/banner3B.png"/>"/>
    </div>
    <div id="titulo_banner">
        <div class="no-select">Geo Gov<sup style="font-size: 0.5em;">&#174;</sup> Sistema de Seguimiento</div>
    </div>
    <div id="user_banner"> 
        <div id="divImgSalir">
<%--             <img id="pru" src="<c:url value="resources/images/template/Mlateral-08.svg"/>" width="35" height="35" onclick="javascript:if((document.getElementById('divCerrarSesion').className) === 'active'){document.getElementById('divCerrarSesion').className = '';document.getElementById('divCerrarSesion').style.right = '-50px';setTimeout(function(){document.getElementById('divCerrarSesion').style.right = '0px';}, 150);}else{document.getElementById('divCerrarSesion').style.right = '-50px';setTimeout(function(){document.getElementById('divCerrarSesion').className = 'active';document.getElementById('divCerrarSesion').style.right = '0px';}, 150);}"/> --%>
     		<!-- LOGOUT -->
 				 <a href="<c:url value="/logout" />">Cerrar Sesión</a>
 				 </div>
        </div>
<!--         <div id="usuario" class="no-select">Usuario: <label id="user-principal"><sec:authentication property="principal.username" /></label> </div> -->
    </div>
    <div id="divCerrarSesion">

        <a id="logout" href="<c:url value="/logout"/>">Cerrar sesión</a>
    </div>
</header>