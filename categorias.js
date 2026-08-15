const productosExtra = {
    limpieza: [
        ["Trapeador de algodón", "Accesorios", "Trapeador absorbente para pisos de hogar, oficina y negocio."], ["Cubeta con exprimidor", "Accesorios", "Cubeta resistente con exprimidor para trapeador."], ["Recogedor de plástico", "Accesorios", "Recogedor ligero para la limpieza diaria."], ["Cepillo para baño", "Accesorios", "Cepillo de cerdas firmes para sanitarios y azulejos."], ["Franela de microfibra", "Accesorios", "Paño suave y absorbente para limpiar superficies."], ["Toallas absorbentes", "Accesorios", "Toallas prácticas para secado y limpieza rápida."],
        ["Desinfectante aromático", "Desinfección", "Desinfectante para pisos y superficies con aroma fresco."], ["Limpiador de pisos Pinol", "Limpieza", "Limpiador aromático Pinol para pisos y superficies."], ["Limpiavidrios", "Limpieza", "Limpiador para cristales, espejos y ventanas."], ["Desengrasante líquido", "Limpieza", "Desengrasante para cocina, estufas y superficies con grasa."], ["Limpiador para baños", "Limpieza", "Producto de limpieza para lavabo, taza y azulejos."], ["Jabón para manos", "Higiene", "Jabón líquido para manos, ideal para baño, negocio u oficina."],
        ["Gel antibacterial", "Higiene", "Gel de higiene para manos."], ["Papel higiénico", "Higiene", "Papel higiénico para uso doméstico y comercial."], ["Toallas de papel", "Higiene", "Toallas absorbentes para manos y superficies."], ["Bolsa para basura chica", "Bolsas", "Bolsa resistente para residuos pequeños."], ["Bolsa para basura grande", "Bolsas", "Bolsa reforzada para residuos de mayor capacidad."], ["Guantes de látex", "Protección", "Guantes desechables para tareas de limpieza."],
        ["Guantes para limpieza", "Protección", "Guantes reutilizables para proteger las manos."], ["Atomizador", "Accesorios", "Atomizador para agua, desinfectante o limpiador."], ["Fibra verde", "Accesorios", "Fibra resistente para tallar superficies."], ["Esponja multiusos", "Accesorios", "Esponja para cocina, trastes y limpieza general."], ["Aromatizante ambiental", "Limpieza", "Aromatizante para interiores."], ["Destapacaños", "Limpieza", "Producto para destapar tuberías y lavabos."],
        ["Cloro en gel", "Desinfección", "Cloro en gel para limpieza y desinfección."], ["Jabón para trastes Dawn", "Lavado", "Jabón líquido Dawn para trastes, utensilios y grasa de cocina.", "dawn jabon trastes lavatrastes platos cocina"], ["Detergente líquido Foca", "Lavado", "Detergente líquido Foca para ropa y lavado diario.", "foca detergente ropa lavado"], ["Suavizante para ropa", "Lavado", "Suavizante para prendas y textiles."], ["Cepillo para ropa", "Lavado", "Cepillo práctico para lavado de prendas."], ["Plumero", "Accesorios", "Plumero para retirar polvo de muebles y superficies."]
    ],
    ferreteria: [
        ["Varilla corrugada", "Construcción", "Varilla de acero para refuerzo de concreto y obra."], ["Arena para construcción", "Construcción", "Arena para mezcla, aplanados y trabajos de obra."], ["Grava", "Construcción", "Grava para concreto, relleno y construcción."], ["Cal hidratada", "Construcción", "Cal para mezcla, recubrimientos y obra."], ["Yeso para obra", "Construcción", "Yeso para acabados y reparaciones."], ["Pegazulejo", "Construcción", "Adhesivo para colocar azulejo y cerámica."],
        ["Ladrillo rojo", "Construcción", "Ladrillo para muros y proyectos de construcción."], ["Block de concreto", "Construcción", "Block resistente para muros y divisiones."], ["Alambre recocido", "Fijación", "Alambre para amarres en construcción."], ["Malla ciclónica", "Construcción", "Malla para cercado y protección de áreas."], ["Taquetes de plástico", "Fijación", "Taquetes para fijar accesorios a muro."], ["Pijas para madera", "Fijación", "Pijas resistentes para madera y montaje."],
        ["Tornillo para tablaroca", "Fijación", "Tornillo para instalación de panel de yeso."], ["Tuercas hexagonales", "Fijación", "Tuercas para tornillería y ensambles."], ["Rondanas", "Fijación", "Rondanas para refuerzo de tornillos y tuercas."], ["Bisagras", "Herrajes", "Bisagras para puertas, muebles y proyectos."], ["Candado de seguridad", "Herrajes", "Candado para resguardar accesos y herramientas."], ["Cerradura Phillips", "Herrajes", "Cerradura Phillips para puerta y acceso."],
        ["Cerrojo metálico", "Herrajes", "Cerrojo para puertas y seguridad."], ["Llave ajustable", "Herramientas", "Llave graduable para tuercas y conexiones."], ["Desarmador plano", "Herramientas", "Desarmador de punta plana."], ["Desarmador de cruz", "Herramientas", "Desarmador de punta Phillips o cruz."], ["Pinzas de corte", "Herramientas", "Pinzas para corte y trabajos de instalación."], ["Nivel de aluminio", "Herramientas", "Nivel para medir horizontalidad en obra."],
        ["Serrucho", "Herramientas", "Serrucho para cortes en madera."], ["Segueta", "Herramientas", "Segueta para cortes precisos."], ["Brocha", "Pintura", "Brocha para pintura y recubrimientos."], ["Rodillo para pintura", "Pintura", "Rodillo para aplicar pintura en muros."], ["Lija para madera", "Abrasivos", "Lija para pulir y preparar madera."], ["Disco de corte", "Abrasivos", "Disco para corte de metal y materiales."]
    ]
};

const catalogoActual = document.body.dataset.catalogo;
const contenedor = document.getElementById("productosCategoria");
const buscadorCategoria = document.getElementById("buscadorCategoria");
const sinResultadosCategoria = document.getElementById("sinResultadosCategoria");

if (contenedor && productosExtra[catalogoActual]) {
    const colores = catalogoActual === "limpieza" ? ["e8f2ff", "113579"] : ["fff3d7", "8a4b08"];
    productosExtra[catalogoActual].forEach(([nombre, tipo, descripcion, claves], indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "card";
        tarjeta.style.setProperty("--card-index", indice + 6);
        tarjeta.dataset.descripcion = descripcion;
        tarjeta.dataset.search = `${nombre} ${tipo} ${descripcion} ${claves || ""}`;
        tarjeta.innerHTML = `<img src="https://placehold.co/600x450/${colores[0]}/${colores[1]}?text=${encodeURIComponent(nombre)}" alt="${nombre}" loading="lazy" decoding="async"><div class="card-body"><span class="chip">${tipo}</span><h4>${nombre}</h4><p class="resumen">${descripcion}</p></div>`;
        contenedor.appendChild(tarjeta);
    });

    prepararTarjetas();
    crearDetalle();
    buscadorCategoria.addEventListener("input", filtrarProductos);
    document.body.classList.add("page-ready");
}

function prepararTarjetas() {
    contenedor.querySelectorAll(".card").forEach((tarjeta, indice) => {
        tarjeta.style.setProperty("--card-index", indice);
        tarjeta.querySelectorAll("img").forEach((imagen) => {
            imagen.loading = "lazy";
            imagen.decoding = "async";
        });
        tarjeta.dataset.search ||= tarjeta.textContent;
        tarjeta.dataset.descripcion ||= tarjeta.querySelector(".resumen")?.textContent || "Consulta disponibilidad y especificaciones con nosotros.";
        tarjeta.tabIndex = 0;
        tarjeta.setAttribute("role", "button");
        tarjeta.setAttribute("aria-label", `Ver especificaciones de ${tarjeta.querySelector("h4")?.textContent || "producto"}`);
        tarjeta.addEventListener("click", () => abrirDetalleCategoria(tarjeta));
        tarjeta.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                abrirDetalleCategoria(tarjeta);
            }
        });
    });
}

function filtrarProductos() {
    const consulta = normalizar(buscadorCategoria.value);
    const terminos = consulta.split(" ").filter(Boolean).map(raiz);
    let visibles = 0;

    contenedor.querySelectorAll(".card").forEach((tarjeta) => {
        const texto = normalizar(`${tarjeta.textContent} ${tarjeta.dataset.search || ""}`);
        const coincide = !consulta || texto.includes(consulta) || terminos.every((termino) => texto.split(" ").some((palabra) => raiz(palabra).includes(termino) || termino.includes(raiz(palabra))));
        tarjeta.hidden = !coincide;
        if (coincide) visibles += 1;
    });
    sinResultadosCategoria.hidden = visibles !== 0;
}

function crearDetalle() {
    const detalle = document.createElement("div");
    detalle.className = "detalle";
    detalle.id = "detalleCategoria";
    detalle.setAttribute("aria-hidden", "true");
    detalle.innerHTML = `<div class="detalle-box" role="dialog" aria-modal="true" aria-labelledby="tituloDetalleCategoria"><button class="cerrar-detalle" type="button" aria-label="Cerrar detalle">✖</button><div class="img-box"><img id="imgDetalleCategoria" alt="Imagen del producto seleccionado"></div><div class="info-box"><p class="detalle-etiqueta" id="categoriaDetalleCategoria"></p><h2 id="tituloDetalleCategoria"></h2><p id="descDetalleCategoria"></p></div></div>`;
    document.body.appendChild(detalle);
    detalle.addEventListener("click", (evento) => {
        if (evento.target === detalle || evento.target.closest(".cerrar-detalle")) cerrarDetalleCategoria();
    });
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") cerrarDetalleCategoria();
    });
}

function abrirDetalleCategoria(tarjeta) {
    const detalle = document.getElementById("detalleCategoria");
    const imagen = tarjeta.querySelector("img");
    document.getElementById("imgDetalleCategoria").src = imagen.currentSrc || imagen.src;
    document.getElementById("imgDetalleCategoria").alt = imagen.alt;
    document.getElementById("tituloDetalleCategoria").textContent = tarjeta.querySelector("h4").textContent;
    document.getElementById("categoriaDetalleCategoria").textContent = tarjeta.querySelector(".chip").textContent;
    document.getElementById("descDetalleCategoria").textContent = tarjeta.dataset.descripcion;
    detalle.style.display = "flex";
    detalle.setAttribute("aria-hidden", "false");
}

function cerrarDetalleCategoria() {
    const detalle = document.getElementById("detalleCategoria");
    if (detalle) {
        detalle.style.display = "none";
        detalle.setAttribute("aria-hidden", "true");
    }
}

function normalizar(texto) {
    return (texto || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]+/g, " ").replace(/\s+/g, " ").trim();
}

function raiz(palabra) {
    return palabra.replace(/(es|s)$/g, "");
}
