let listaProductosElement = document.getElementById('listaProductos');

if (listaProductosElement) {

    let template = '<div class="row">';

    for (let producto of data) {
        console.log(producto);
        template += ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${producto.imagen}" width="100%" height="225" alt="">
            <div class="card-body">
                <p class="card-text">${producto.nombre}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Ver Producto</button>
                    </div>
                    <small class="text-muted">Codigo: ${producto.codigo}</small>
                </div>
            </div>
        </div>
    </div>`;
    }

    template += '</div>';

    listaProductosElement.innerHTML = template;
}