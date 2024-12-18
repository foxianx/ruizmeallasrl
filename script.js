let currentIndex = 0;

// Función para mostrar una imagen en el carrusel
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-imagenes img');
    const totalSlides = slides.length;

    // Ajustar índice para bucle infinito
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Mueve el carrusel al índice actual
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-imagenes').style.transform = `translateX(${offset}%)`;
}

// Función para mostrar la siguiente imagen
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Función para mostrar la imagen anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicia el carrusel automáticamente
function startCarousel() {
    setInterval(nextSlide, 5000); // Cambia cada 5 segundos
}
startCarousel();







// Objeto que contiene la información detallada
const detallesServicios = {
    "Auditoría Externa Independientes": `
        <h2>En RM Gabinete de Auditores</h2>
    <p>
        Empleamos técnicas avanzadas de auditoría a nivel internacional, respaldadas por una planificación minuciosa y el uso de recursos tecnológicos de última generación. Esto nos permite garantizar eficiencia, calidad y resultados económicos en cada auditoría, adaptando los planes de trabajo a las necesidades específicas de cada cliente.
    </p>
    <h3>Servicios Principales:</h3>
    <ul>
        <li>
            <strong>Auditoría de Estados Financieros:</strong>
            Revisiones anuales e intermedias bajo principios y normativas nacionales e internacionales, incluyendo disposiciones de entidades como el Ministerio de Hacienda, la ASFI y organismos multilaterales.
        </li>
        <li>
            <strong>Auditoría de Ciclos Operativos y de Gestión:</strong>
            Evaluación de procedimientos operativos y actividades de control para optimizar la eficiencia empresarial.
        </li>
        <li>
            <strong>Revisiones Limitadas:</strong>
            Aplicación de técnicas de auditoría para emitir informes de revisión limitada, enfocándonos en controles principales y análisis financieros.
        </li>
        <li>
            <strong>Informes y Certificaciones Especiales:</strong>
            Generación de informes tributarios, certificación de saldos y pagos, entre otros servicios especializados.
        </li>
        <li>
            <strong>Auditoría de Sistemas:</strong>
            Análisis integral del entorno de operación, procesamiento de datos y cambios en los programas de gestión.
        </li>
        <li>
            <strong>Auditoría de Cumplimiento Presupuestario:</strong>
            Verificación y análisis de ingresos, gastos y desviaciones presupuestarias.
        </li>
        <li>
            <strong>Due Diligence:</strong>
            Evaluación del valor contable y patrimonio neto, acompañando procesos de cambio en la administración de sociedades.
        </li>
        <li>
            <strong>Análisis Económico:</strong>
            Estudio de factores macro y microeconómicos que afectan la actividad empresarial.
        </li>
        <li>
            <strong>Auditoría de Control Interno:</strong>
            Verificación de estructuras, actividades y reportes de control interno.
        </li>
        <li>
            <strong>Auditoría de Procedimientos Administrativos Internos:</strong>
            Revisión del cumplimiento de estándares y políticas administrativas.
        </li>
        <li>
            <strong>Control del Circuito de Cajas a Supermercados:</strong>
            Utilización de herramientas avanzadas como Audit Command Language (ACL) para detección de fraudes y monitoreo de riesgos.
        </li>
    </ul>
    <p>
        Cada servicio se orienta a proporcionar un valor agregado significativo, contribuyendo al fortalecimiento y transparencia operativa de las organizaciones.
    </p>
    `,


    "Consultorías Organizacionales": `
        <h2>Consultorías Organizacionales</h2>
        <p>
            Nuestra área de consultoría ofrece servicios integrales enfocados en el fortalecimiento organizacional y estratégico de las empresas. Entre los servicios destacados se incluyen:
        </p>
        <ul>
            <li><strong>Rediseño de Estructuras Organizacionales:</strong> Diagnósticos detallados para alinear estructuras organizativas con la misión, visión y objetivos empresariales.</li>
            <li><strong>Diagnóstico de Clima Organizacional:</strong> Evaluaciones para identificar factores que impactan la motivación y satisfacción laboral, promoviendo el bienestar y la excelencia.</li>
            <li><strong>Selección de Personal:</strong> Procesos especializados en búsqueda, evaluación y verificación de candidatos para garantizar perfiles idóneos y adaptados a las necesidades empresariales.</li>
            <li><strong>Assessment:</strong> Evaluaciones técnicas de potencial humano, esenciales para planes de carrera y optimización del talento.</li>
            <li><strong>Capacitación Empresarial:</strong> Programas personalizados de formación intensiva, diseñados según las necesidades específicas de las organizaciones.</li>
            <li><strong>Outsourcing de Auditoría Interna:</strong> Selección, capacitación y estructuración de equipos internos para optimizar el control y operación empresarial.</li>
        </ul>
        <p>
            Cada uno de estos servicios está diseñado para brindar soluciones adaptadas a las necesidades de todo tipo de empresas, asegurando resultados efectivos y sostenibles.
        </p>
    `,
    "Asesorías Impositivas": `
        <h2>Asesorías Impositivas</h2>
         <p>
            Nuestro equipo especializado en el área tributaria y legal ofrece soluciones estratégicas para maximizar beneficios fiscales y asegurar el cumplimiento normativo, integrando tecnología avanzada para garantizar eficiencia y productividad. Los servicios incluyen:
        </p>
        <ul>
            <li><strong>Consultoría Local:</strong> Asesoramiento continuo sobre leyes y reglamentos tributarios, análisis de riesgos, apoyo en reestructuración fiscal interna y atención a inspecciones.</li>
            <li><strong>Planeamiento Impositivo (Tax Planning):</strong> Evaluación del impacto fiscal en operaciones, patrimonio y proyectos de inversión, recomendaciones para optimizar costos tributarios, y asesoramiento en procesos de fusiones, adquisiciones y reorganizaciones.</li>
            <li><strong>Representación de la Empresa:</strong> Defensa en instancias administrativas y judiciales relacionadas con asuntos fiscales.</li>
            <li><strong>Auditorías Fiscales:</strong> Identificación de posibles incumplimientos fiscales, evaluación de riesgos asociados y revisión de gestiones ante autoridades tributarias.</li>
        </ul>
        <p>
            Nuestros servicios están diseñados para adaptarse a las necesidades específicas de cada cliente, combinando experiencia técnica y un enfoque personalizado para lograr resultados óptimos.
        </p>
    `,
    "Asesorías Contables": `
        <h2>Asesorías Contables</h2>
        <img src="impuestos.jpg" alt="Asesorías Contables" style="width:100%; border-radius:10px;">
        <p>Brindamos asesoramiento especializado en temas tributarios para optimizar tus obligaciones fiscales.</p>
    `,
    "Outsourcing de Contabilidad e Impuestos": `
        <h2>Outsourcing de Contabilidad e Impuestos</h2>
         <p>
            Preparación mensual y presentación a la Gerencia de la siguiente información:
        </p>
        <ul>
            <li>Balance General mensual y acumulado, más las notas a los mismos.</li>
            <li>Estado de Resultados mensuales y acumulados, con sus respectivas notas.</li>
            <li>Diario del mes.</li>
            <li>Mayor del mes.</li>
            <li>Conciliaciones de las cuentas bancarias mensuales.</li>
        </ul>
        <h3>Control y cuidado fiscal:</h3>
        <ul>
            <li>Confección del balance impositivo, cuadro de revalúo, preparación y presentación de la Declaración Jurada anual ante el Servicio de Impuestos Nacionales (SIN).</li>
            <li>Confección, preparación y presentación de la Declaración Jurada mensual del IVA, IT y Retenciones.</li>
            <li>Depuraciones de cuentas corrientes.</li>
            <li>Confección, preparación y presentación de la Declaración Jurada anual del Impuesto a las Utilidades de las Empresas Formulario 500.</li>
            <li>Presentación ante el Servicio de Impuestos Nacionales de los Estados Financieros y del Formulario 605 v4.</li>
            <li>Actualización de matriculas y padrones de funcionamiento.</li>
            <li>Control de libro de asistencia a asamblea de socios, libro diario rubricado, registro de socios, actas de asambleas, etc.</li>
        </ul>
    `,
    "Outsourcing de Recursos Humanos": `
        <h2>Outsourcing de Recursos Humanos</h2>
         <ul>
            <li>Elaboración de Contratos de Trabajo.</li>
            <li>Presentación de planillas ante el Ministerio de Trabajo (en medios magnéticos).</li>
            <li>Comunicaciones y trámites de entradas y salidas de funcionarios ante las AFP y Seguro Social.</li>
            <li>Cálculo de Liquidaciones Finales de Sueldos y Salarios.</li>
            <li>Presentación de Libros Laborales Exigidos.</li>
            <li>Cálculo y Liquidación mensual de Sueldos y Salarios.</li>
        </ul>
    `,
    "Outsourcing de Auditoría Interna": `
        <h2>Outsourcing de Auditoría Interna</h2>
          <ul>
            <li>Selección de un personal para su inserción en la empresa y entrenamiento previo.</li>
            <li>Estudio y definición primaria de la estructura operativa de la empresa y del entorno de control vigente al inicio de los trabajos.</li>
        </ul>
    `,
    "Outsourcing de Administración": `
        <h2>Outsourcing de Administración</h2>
        <ul>
            <li>Existencias, activos fijos, cuentas por cobrar, otros.</li>
            <li>Estudio y definición primaria de la estructura operativa de la empresa y del entorno de control vigente al inicio de los trabajos.</li>
            <li>Diseño del procedimiento de realización de inventarios de acuerdo a los resultados del estudio.</li>
            <li>Determinación de una estructura de información a ser implementada para los procedimientos de realización de inventarios.</li>
            <li>Desarrollo de un calendario para la realización de inventarios.</li>
            <li>Práctica de los inventarios físicos periódicos.</li>
            <li>Seguimiento de las diferencias entre el inventario físico y el inventario según el sistema.</li>
            <li>Conciliación entre los saldos de inventarios: físico, sistema y contable.</li>
        </ul>
    `,
    "Organización y Realización de Inventarios": `
        <h2>Organización y Realización de Inventarios</h2>
        <img src="impuestos.jpg" alt="Organización y Realización de Inventarios" style="width:100%; border-radius:10px;">
        <p>Controla y gestiona tus inventarios de manera efectiva.</p>
    `,

};

function selectOption(event, detalle) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.seccion2-card');

    // Encuentra el contenedor de detalles y el botón "Ver más"
    const detalleServicio = card.querySelector('#detalle-servicio-detalle');
    const verMasBtn = card.querySelector('#ver-mas-btn');

    if (detalleServicio && verMasBtn) {
        // Actualiza el contenido de los detalles
        detalleServicio.innerHTML = detallesServicios[detalle] || `<p>Información no disponible.</p>`;
        
        // Cambia el enlace del botón "Ver más" según el servicio
        const enlacesServicios = {
            "Auditoría Externa Independientes": "auditoria-externa.html",
            "Consultorías Organizacionales": "consultorias-organizacionales.html",
            "Asesorías Impositivas": "asesorias-impositivas.html",
            "Asesorías Contables": "asesorias-contables.html",
            "Outsourcing de Contabilidad e Impuestos": "outsourcing-contabilidad.html",
            "Outsourcing de Recursos Humanos": "outsourcing.html",
            "Outsourcing de Auditoría Interna": "outsourcing.html",
            "Outsourcing de Administración": "outsourcing.html",
            "Organización y Realización de Inventarios": "outsourcing.html",
        };

        verMasBtn.href = enlacesServicios[detalle] || "#";
    }

    // Expande la tarjeta y muestra la sección secundaria
    card.classList.add('expanded');
    const infoPrincipal = card.querySelector('.info-principal');
    const infoSecundaria = card.querySelector('.info-secundaria');
    if (infoPrincipal) infoPrincipal.style.display = 'none';
    if (infoSecundaria) infoSecundaria.style.display = 'block';
}


function closeCard(button) {
    const card = button.closest('.seccion2-card');
    card.classList.remove('expanded');

    // Restaura las secciones a su estado inicial
    const infoPrincipal = card.querySelector('.info-principal');
    const infoSecundaria = card.querySelector('.info-secundaria');
    if (infoPrincipal) infoPrincipal.style.display = 'block';
    if (infoSecundaria) infoSecundaria.style.display = 'none';
}

/* PARA MENSAJEESSS
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    this.reset(); // Limpia el formulario
});
*/


// FIREBASE!!!!!!!!!!!!!!!!!!

// Configuración de Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDHaq_lE2BKv085-laKk6ZkSiGYBzH7bNU",
    authDomain: "contactoruizmeallasrl.firebaseapp.com",
    projectId: "contactoruizmeallasrl",
    storageBucket: "contactoruizmeallasrl.firebasestorage.app",
    messagingSenderId: "687158079857",
    appId: "1:687158079857:web:9d75a7df4902cf49f546d0",
    measurementId: "G-TMGFXT18V4"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();

// Manejo del formulario de contacto
// Capturamos el formulario por su ID
const form = document.getElementById("contact-form");

// Agregamos un manejador de eventos para el envío del formulario
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Previene la recarga de la página

    // Obtenemos los datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Convierte los datos en un objeto JSON

    try {
        // Enviar los datos al servidor usando fetch
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Procesar la respuesta del servidor
        const result = await response.json();

        const responseMessage = document.getElementById("response-message");

        if (result.success) {
            responseMessage.textContent = "¡Mensaje enviado con éxito!";
            responseMessage.style.color = "green";
            form.reset(); // Limpiar el formulario
        } else {
            responseMessage.textContent = "Hubo un error al enviar tu mensaje.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        const responseMessage = document.getElementById("response-message");
        responseMessage.textContent = "Ocurrió un error inesperado.";
        responseMessage.style.color = "red";
    }
});





