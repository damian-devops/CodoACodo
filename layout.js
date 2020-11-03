let headerTemplate = ` <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

<a class="navbar-brand" href="#">
    <h4>MercadoShop</h4>
</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>


<div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">Incio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Acerca de</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sucursales</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="nuestros_productos.html">Nuestros Productos</a>
        </li>
    </ul>
</div>

</nav>`;

document.querySelector('.headerTemplate').innerHTML = headerTemplate;

let footerTemplate = `<footer class="font-small bg-dark">
<!-- Copyright -->
<div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MercadoShop.com</a>
</div>
<!-- Copyright -->
</footer>`;

document.querySelector('.footerTemplate').innerHTML = footerTemplate;