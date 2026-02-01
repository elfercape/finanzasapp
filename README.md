# finanzasapp

para finanzas personales 3. Tecnologías y metodologías usadas
3.1 HTML5
Uso de etiquetas semánticas: header, main, section, nav, footer, article, table, thead, tbody, etc.[file:1][file:2]

Formularios accesibles con label asociado a input mediante for/id.

Separación clara entre estructura (HTML), estilos (CSS/SCSS) y comportamiento (JS).

3.2 Sass (SCSS) y patrón 7‑1
Variables de colores, tipografía y espaciado en abstracts/\_variables.scss.

Mixins para patrones comunes (flex-center, card, responsive-container) en abstracts/\_mixins.scss.

Funciones auxiliares (por ejemplo rem()) en abstracts/\_functions.scss.

Estructura 7‑1: abstracts, base, components, layout, pages, themes y vendors, con un solo punto de entrada main.scss.[file:2]

3.3 Metodología BEM
Clases organizadas como Bloque\_\_Elemento, con posibilidad de Modificador:

login**card, login**field, login\_\_help

wallet**card, wallet**header, wallet**balance, wallet**item

accounts**header, accounts**list, account-card

history**table, history**header

app-header**brand, app-header**user-name, app-header\_\_logout

Mejora la legibilidad y evita conflictos de estilos al escalar el proyecto.[file:2]

3.4 Bootstrap 4
Importado por CDN en todos los HTML (CSS + JS + dependencias).[web:4][web:10]

Componentes utilizados:

Cards (.card) para login, billetera, cuentas e historial.

Tabs (.nav-tabs, .tab-pane) para las secciones Billetera / Mis cuentas / Historial en home.html.[web:10]

Botones (.btn, .btn-primary, .btn-secondary, .btn-block).

Grid (.container, .row, .col-md-\*) para layout responsivo.[web:4]

Tablas (.table, .table-sm, .thead-light) para el historial de movimientos.

Utilidades de flexbox (d-flex, justify-content-_, align-items-_) para centrar y alinear contenido.[web:5]

3.5 Modelo de cajas y layout
Reset con modelo de cajas:

text
html {
box-sizing: border-box;
scroll-behavior: smooth;
}

_,
_::before,
\*::after {
box-sizing: inherit;
}
lo que simplifica el cálculo de ancho/alto en todos los elementos.[web:12][web:15]

Margen y padding reseteados en elementos base (body, h1–h4, p, ul, ol, etc.), controlados luego desde los componentes.[web:12][web:15]

Layout responsivo:

Login centrado vertical y horizontalmente con flex.

Home con contenedor .container y cards que ocupan todo el ancho disponible según el viewport.

Vistas individuales (billetera.html, mis-cuentas.html, historial.html) reutilizan el mismo header y estructura.

4. Descripción detallada de las pantallas
   4.1 Login (login.html)
   Card centrada (login\_\_card) con:

Logo logo-login.svg.

Título “Ingresar a SmartBudget”.

Campo RUT, campo Contraseña y botón “Ingresar”.

Enlace “¿Olvidaste tu contraseña?” → recuperar.html.

Estilos específicos en pages/\_login.scss:

Tamaño del logo, tipografía de etiquetas, color del enlace de ayuda.

Lógica (js/login.js)

Escucha el evento submit del formulario.

Valida credenciales fijas:

RUT: 12345678-9

CONTRASEÑA: 123456

Si son correctas → window.location.href = "home.html".

Si no → alert explicando que las credenciales son inválidas y cuáles son las válidas.

4.2 Recuperar contraseña (recuperar.html)
Card centrada (recovery\_\_card) con:

Título “Recuperar contraseña”.

Texto explicativo.

Campo de correo electrónico + botón “Enviar contraseña”.

Enlace “Volver al login” → login.html.

Estilos específicos en pages/\_recovery.scss:

Texto auxiliar en gris, enlace de retorno con color primario.

Lógica (js/recuperar.js)

Valida que el correo no esté vacío.

Muestra un alert del tipo:

"Te enviaremos una contraseña de restauración a correo@ejemplo.com."

Limpia el formulario (form.reset()).

4.3 Home / Menú principal (home.html)
Header (app-header) con:

Logo logo-nav.svg y texto “SmartBudget”.

Saludo al usuario (“Hola, Fernando”).

Enlace “Cerrar sesión” → login.html.

Sistema de pestañas con Bootstrap:

ul.nav.nav-tabs con tres pestañas: Billetera, Mis cuentas, Historial.

div.tab-content con una tab-pane para cada sección.

Pestaña Billetera
Card wallet\_\_card con:

Título “Saldo disponible”.

Saldo inicial $50.000.

Texto de ayuda.

Botones “Nuevo pago” y “Transferir”.

Resumen rápido:

wallet\_\_list con elementos “Gastos del mes” e “Ingresos del mes”.

Pestaña Mis cuentas
Card con título “Mis cuentas”.

Dos cards hijas:

Tarjeta de débito: Banco Ejemplo, saldo $30.000.

Tarjeta de crédito: Banco Ejemplo, cupo disponible $120.000.

Pestaña Historial
Card con título “Historial de movimientos”.

Tabla responsive (.table.table-sm) con transacciones de ejemplo:

Compra supermercado, categoría Alimentos, monto negativo.

Pago sueldo, categoría Ingresos, monto positivo.

4.4 Vistas individuales
Se incluyen pantallas adicionales para mostrar cada sección de forma aislada:

billetera.html: mismo contenido de la tab Billetera, con navegación en el header hacia Home, Mis cuentas, Historial y Cerrar sesión.

mis-cuentas.html: igual que la tab Mis cuentas, con la misma navegación.

historial.html: igual que la tab Historial, con la misma navegación.

Estas vistas ayudan a evidenciar las “cuatro pantallas” que describe el enunciado (login, recuperar, home, secciones del dashboard).[file:2]

5. Compilación de SCSS
   5.1 Punto de entrada
   scss/main.scss usa @use para cargar los módulos:

text
// ABSTRACTS
@use "abstracts/variables";
@use "abstracts/mixins";
@use "abstracts/functions";

// BASE
@use "base/reset";
@use "base/typography";
@use "base/base";

// COMPONENTS
@use "components/buttons";
@use "components/cards";
@use "components/modals";

// LAYOUT
@use "layout/header";
@use "layout/footer";
@use "layout/grid";

// PAGES
@use "pages/login";
@use "pages/recovery";
@use "pages/home";

// THEMES
@use "themes/light";
// @use "themes/dark";

// VENDORS
@use "vendors/bootstrap";
5.2 Comando de compilación
Compilación simple (sin watch):

bash
sass scss/main.scss css/styles.css
Cada vez que se modifiquen los .scss, se debe volver a ejecutar este comando para actualizar styles.css.

6. Cómo ejecutar el proyecto
   Clonar o descargar el proyecto.

Instalar Sass (si no está instalado):

bash
npm install -g sass
Compilar SCSS a CSS:

bash
sass scss/main.scss css/styles.css
Abrir login.html en el navegador:

Se puede abrir directamente con doble clic.

O usando un servidor local (por ejemplo Live Server en VS Code).

Flujo de prueba:

Ingresar RUT 12345678-9 y contraseña 123456 → se accede a home.html.

Probar el enlace “¿Olvidaste tu contraseña?” → recuperar.html.

Navegar entre las pestañas Billetera, Mis cuentas e Historial.

Usar “Cerrar sesión” en el header para volver a login.html.

7. Capturas de pantalla sugeridas
   Para la entrega y el portafolio, se recomienda incluir capturas de:

Login con los campos de RUT y contraseña.

Pantalla de Recuperar contraseña.

Home mostrando la pestaña Billetera (con el saldo de $50.000).

Home mostrando la pestaña Mis cuentas.

Home mostrando la pestaña Historial.

Opcionalmente, las vistas individuales billetera.html, mis-cuentas.html, historial.html en diferentes dispositivos (desktop, tablet, móvil).

8. Conclusiones y retrospectiva
   El uso de BEM y SCSS 7‑1 permitió mantener el código organizado y fácil de extender, evitando conflictos de estilos y facilitando la lectura.

Bootstrap 4 ayudó a construir rápidamente un layout responsivo y consistente, aprovechando componentes como cards, tabs y tablas, sin tener que implementarlos desde cero.[web:4][web:10]

Al separar la lógica en archivos login.js y recuperar.js, la estructura del proyecto resulta más clara y escalable.

Este proyecto demuestra la capacidad de Fernando para:

Traducir un diseño y un enunciado funcional a una interfaz web real.

Aplicar buenas prácticas modernas de front‑end (semántica, responsividad, organización de estilos, uso de frameworks).

Dejar una base sólida para futuras mejoras (más lógica de negocio, integración con APIs, etc.).

## Captura: Login

## Captura: historial

## Captura: mis cuentas

## Captura: billetera

## Captura: cambio de contraseña
