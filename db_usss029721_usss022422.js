function getAutores() {
    return JSON.parse(localStorage.getItem('autores')) || [];
}

function setAutores(autores) {
    localStorage.setItem('autores', JSON.stringify(autores));
}

function agregarAutor() {
    // Obtener datos del formulario
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const telefono = document.getElementById('telefono').value;

    const autores = getAutores();

    autores.push({ codigo, nombre, pais, telefono });

    setAutores(autores);

    document.getElementById('formAutor').reset();
}

function modificarAutor() {
   
}

function eliminarAutor() {
    
}

function buscarAutor() {
    
}