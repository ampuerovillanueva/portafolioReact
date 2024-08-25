# App Portafolio React

## Descripción

Esta aplicación React presenta un portafolio interactivo para un desarrollador frontend. La interfaz está compuesta por varias secciones: un hero al inicio que introduce al usuario y muestra opciones para alternar entre modos de tema claro y oscuro; una sección de proyectos que muestra trabajos anteriores con detalles y enlaces a repositorios; una sección de experiencia que presenta un historial de empleos y responsabilidades; una sección de habilidades que lista y muestra habilidades técnicas; y una sección de contacto que permite enviar mensajes y muestra un modal de confirmación tras el envío. La navegación es manejada por una barra fija que se adapta a dispositivos móviles con un menú desplegable. Cada componente utiliza animaciones suaves proporcionadas por AOS para mejorar la experiencia visual, y se integra un sistema de temas para personalizar la apariencia del sitio según la preferencia del usuario.

## Lenguajes y Tecnologías Usados

- **HTML**: Utilizado para la estructura y el contenido de la aplicación.
- **CSS**: Utilizado para el diseño y la presentación visual de la aplicación.
- **JavaScript**: Utilizado para la lógica interactiva y la funcionalidad de la aplicación.
- **React**: Utilizado para construir la interfaz de usuario y manejar el estado.
- **Vite**: Utilizado como herramienta de construcción para desarrollo rápido.
- **JSON**: Utilizado para almacenar y manejar datos de proyectos y habilidades.
- **AOS (Animate On Scroll)**: Utilizado para animaciones suaves al desplazarse.
- **Styled Components**: Utilizado para el estilo basado en componentes.

## Funcionamiento de la Aplicación

- **Navbar**: Ofrece una barra de navegación fija en la parte superior de la página, permitiendo a los usuarios desplazarse fácilmente entre secciones. En dispositivos móviles, el menú se despliega mediante un botón de menú, mejorando la accesibilidad y la experiencia del usuario.

- **Hero**: Muestra una introducción visual destacada con una imagen y un mensaje de bienvenida. Incluye un botón para alternar entre el modo claro y oscuro, y enlaces a perfiles en redes sociales (GitHub y LinkedIn), adaptándose al tema seleccionado.

- **Projects**: Presenta un listado de proyectos con tarjetas que muestran imágenes y descripciones. Cada tarjeta permite ver más detalles y acceder a los repositorios de los proyectos, actualizándose cada 5 segundos para mostrar información actualizada.

- **Experience**: Muestra un historial de experiencia profesional extraído de un archivo JSON, con datos como fechas, posiciones y responsabilidades. La información se actualiza cada 5 segundos para reflejar cambios recientes.

- **Skills**: Lista habilidades técnicas agrupadas por categorías. Cada habilidad se muestra con su icono correspondiente y se actualiza cada 5 segundos mediante la carga de datos desde un archivo JSON.

- **Contact**: Ofrece un formulario para enviar mensajes, con campos para correo electrónico, asunto y mensaje. Al enviar el formulario, se utiliza emailjs para procesar el envío y se muestra un modal de confirmación que informa al usuario sobre el estado del envío (éxito o error).

- **Footer**: Proporciona enlaces de navegación adicional, íconos de redes sociales, y un aviso de derechos reservados. Los íconos y enlaces se adaptan al tema actual, con opciones para alternar entre temas claros y oscuros, y se presentan de manera responsiva en dispositivos móviles.

## Instalación

Para utilizar la App Portafolio React, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ampuerovillanueva/portafolioReact
