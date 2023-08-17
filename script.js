
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const display = document.querySelector('.calculator-display');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        const productos = [
            { id: 1, nombre: 'Tarjeta de Visita', precio: 200 },
            { id: 2, nombre: 'Banner Impreso', precio: 500 },
            { id: 3, nombre: 'Calendario Personalizado', precio: 300 },
            { id: 4, nombre: 'Folleto Promocional', precio: 150 }
        ];

        const seleccion = parseInt(formData.get('producto'));
        const productoSeleccionado = productos.find(producto => producto.id === seleccion);

        if (!productoSeleccionado) {
            alert('Producto no válido. Por favor, seleccione un producto válido.');
            return;
        }

        const cantidad = parseInt(formData.get('cantidad'));
        if (isNaN(cantidad) || cantidad < 10) {
            alert('Por favor, ingrese una cantidad válida (mínimo 10).');
            return;
        }

        const costoTotal = productoSeleccionado.precio * cantidad;

        let envio = '';
        if (formData.get('envio') === 'SI') {
            envio = 'envío';
        } else {
            envio = 'retiro local';
        }

        const resumenCompra = `
            Resumen de la compra:
            Producto: ${productoSeleccionado.nombre}
            Cantidad: ${cantidad} unidades
            Costo total: $${costoTotal}
            Método de envío: ${envio}
        `;

        display.innerHTML = resumenCompra;
        });
    });