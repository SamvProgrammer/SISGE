<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
		<html>
		<head>
			<title>Login</title>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <jsp:include page="/WEB-INF/views/template/importsDefault.jsp" />	
			<link href="<c:url value="/css/login/login.css" />"  rel="stylesheet" type="text/css"/>
		    <link href="<c:url value="/css/login/alertify.css" />"  rel="stylesheet" type="text/css"/>
			<script src="<c:url value="/js/login/alertify.js" />" type="text/javascript"></script>

		</head>
		<body>
		<div class="container">
        <div class="card card-container">
<!--             <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
              
              
              
                <form id="form_user" action="/SISEG/login" method="post" class="form-signin">
                    <center><h3 class="form-signin-heading text-muted">Ingresa tu datos</h3></center>
                        <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus=""  style="text-transform: uppercase;">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="">
                        <button class="btn btn-lg btn-primary btn-block" value="Login" type="submit">Login</button>
                                           
                        <div id="mensaje">
                            <!-- MENSAJE DE ERROR PARA USUARIO NO VÁLIDO !-->
                            <c:if test="${not empty error}"><script>
                                $(function () {
                                    alertify.error("Error de usuario o contraseña, credencial no valida.");
                                });
                                </script>
                            </c:if>                        
                            <!-- MENSAJE DE ERROR CUÁNDO SE DESCONECTA EL USUARIO !-->
                            <c:if test="${not empty message}">
                                <script>
                                    $(function () {
                                        alertify.error("Se ha desconectado el usuario.");
                                    });
                                </script>
                            </c:if>
                        </div>
                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                </form>

        </div>
      </div>
		</body>
	
	</html>		