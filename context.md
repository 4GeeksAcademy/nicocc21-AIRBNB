# Plataforma de Alquiler Vacacional

## 1. Objetivo del proyecto
Construir una plataforma de alquiler vacacional inspirada en la experiencia de Airbnb, implementando tres vistas principales en Next.js con componentes de React:

1. Home
2. Resultados de busqueda
3. Detalle de alojamiento

El producto debe priorizar una experiencia mobile-first para 375px y adaptarse a escritorio desde 786px en adelante. La navegacion entre vistas debe ser fluida, sin recarga completa del navegador, usando rutas internas con navegacion de cliente segun el patron recomendado por Next.js.

## 2. Usuario objetivo
La persona usuaria principal busca alojamiento temporal de forma rapida, visual y confiable. Sus objetivos son:

1. Descubrir opciones de alojamiento segun destino y fechas.
2. Comparar resultados por precio, ubicacion y valoracion.
3. Revisar el detalle de una propiedad antes de decidir una reserva.

### 2.1 Job to be done principal
"Quiero encontrar un alojamiento adecuado para mis fechas y presupuesto en pocos pasos, con informacion clara para decidir con confianza."

## 3. Alcance funcional

### 3.1 Vistas a implementar
1. Home: punto de entrada con busqueda principal y acceso a categorias o destacados.
2. Resultados de busqueda: listado de alojamientos filtrados o relacionados con la busqueda.
3. Detalle de alojamiento: vista ampliada con informacion completa del alojamiento seleccionado.

### 3.2 Reglas de interaccion
1. La navegacion entre vistas no debe recargar toda la pagina.
2. Las rutas internas deben resolverse con navegacion cliente de Next.js.
3. Los elementos clicables deben permitir ir del listado al detalle y volver al home o a resultados.
4. El estado de busqueda y filtros debe poder representarse en la URL para compartir y recuperar contexto.

## 4. Fuera de alcance (fase actual)
1. Backend real y persistencia en base de datos.
2. Flujo de pagos real.
3. Sistema completo de autenticacion/autorizacion.
4. Reservas transaccionales reales.
5. Panel administrativo.

## 5. Arquitectura frontend en Next.js

### 5.1 Decision de enrutado
Se utilizara App Router de Next.js como base de arquitectura.

### 5.2 Estructura de rutas
1. / -> Home
2. /results -> Resultados de busqueda
3. /listing/[id] -> Detalle de alojamiento

### 5.3 Navegacion cliente sin recarga
1. Todos los enlaces internos entre vistas deben resolverse con navegacion cliente.
2. Desde Home se navega a Results enviando parametros de busqueda en query string.
3. Desde Results se navega a Detalle con ruta dinamica por id.
4. Al volver de Detalle a Results se debe preservar el contexto de filtros/busqueda.

### 5.4 Estrategia de estado (nivel base)
1. Estado de busqueda global de pagina: destino, fechas, huespedes.
2. Estado de filtros en Results: precio, tipo, habitaciones, amenities, rating.
3. Estado de UI transversal: loading, empty, error.

## 6. Componentes principales

### 6.1 Componentes globales
1. Layout
2. Header
3. Navbar o Tab bar (segun viewport)
4. Footer
5. CardPreview base reutilizable

### 6.2 Componentes de Home
1. HeroSection
2. SearchBar
3. CategoryChips
4. FeaturedListings
5. CardPreview

### 6.3 Componentes de Resultados
1. SearchSummary
2. FiltersBar
3. SortControl
4. ListingGrid o ListingList
5. ListingCard

### 6.4 Componentes de Detalle
1. Gallery
2. PropertyHeader
3. HostInfo
4. AmenitiesList
5. DescriptionSection
6. BookingPanel
7. MapPreview

## 7. Especificacion por vista

## 7.1 Home

### Objetivo
Permitir al usuario iniciar su busqueda y descubrir opciones relevantes rapidamente.

### Estructura visual esperada
1. Header superior con logo y acceso rapido.
2. HeroSection con mensaje de valor.
3. SearchBar prominente.
4. CategoryChips para explorar por tipo.
5. Bloque de FeaturedListings.

### Interacciones clave
1. Completar destino, fechas y huespedes.
2. Enviar busqueda hacia /results con query params.
3. Seleccionar categoria para refinar descubrimiento.

### Datos minimos
1. searchInput: destination, checkIn, checkOut, guests.
2. categories: id, label, icon, isActive.
3. featuredListings: id, title, location, image, pricePerNight, rating.

### Estados
1. Loading de destacados.
2. Empty state si no hay destacados.
3. Error state con accion de reintento.

## 7.2 Resultados de busqueda

### Objetivo
Permitir exploracion y comparacion eficiente de alojamientos segun criterios de busqueda.

### Estructura visual esperada
1. SearchSummary con criterios activos.
2. FiltersBar para refinar resultados.
3. SortControl para ordenar.
4. ListingGrid o ListingList de tarjetas.

### Interacciones clave
1. Aplicar o quitar filtros y actualizar resultados.
2. Cambiar orden de visualizacion.
3. Abrir detalle de alojamiento desde ListingCard.
4. Mantener filtros y orden en URL para persistencia y compartir.

### Datos minimos
1. searchSummary: destination, checkIn, checkOut, guests.
2. filters: priceRange, propertyType, beds, amenities, rating.
3. sortOption: relevance, priceAsc, priceDesc, ratingDesc.
4. results: id, title, location, thumbnail, price, rating, reviewCount, badge.

### Estados
1. Loading de resultados con skeletons.
2. Empty state cuando no hay coincidencias.
3. Error state con boton retry.

## 7.3 Detalle de alojamiento

### Objetivo
Ofrecer informacion completa de una propiedad para facilitar la decision de reserva.

### Estructura visual esperada
1. Gallery principal.
2. PropertyHeader con titulo, ubicacion y rating.
3. Bloques de host, amenities y descripcion.
4. BookingPanel con precio y accion principal.
5. MapPreview de ubicacion aproximada.

### Interacciones clave
1. Navegar entre imagenes de la galeria.
2. Revisar servicios y descripcion extendida.
3. Seleccionar fechas en BookingPanel para estimar total.
4. Volver a resultados conservando contexto.

### Datos minimos
1. listingDetail: id, title, address, rating, reviewsCount, description.
2. gallery: images[] con alt text.
3. host: name, avatar, experience, languages.
4. amenities: lista de servicios.
5. booking: pricePerNight, nights, fees, total, ctaLabel.
6. map: lat, lng o referencia de zona.

### Estados
1. Loading del detalle.
2. Error state si id no existe o falla carga.
3. Fallback visual para imagenes faltantes.

## 8. Contrato de datos por componente

| Componente | Datos necesarios |
|---|---|
| Header | logo, links, sessionState opcional |
| SearchBar | destination, checkIn, checkOut, guests, onSubmit |
| HeroSection | title, subtitle, backgroundImage |
| CategoryChips | categories[] (id, label, icon, isActive), onSelect |
| ListingCard | id, image, title, location, price, rating, reviewCount, badge |
| SearchSummary | destination, checkIn, checkOut, guests |
| FiltersBar | priceRange, propertyType, beds, amenities, rating, onChange |
| SortControl | selectedSort, options[], onChange |
| Gallery | images[] (src, alt) |
| PropertyHeader | title, address, rating, reviewsCount |
| HostInfo | hostName, hostAvatar, hostExperience, hostLanguages |
| AmenitiesList | amenities[] |
| DescriptionSection | description |
| BookingPanel | pricePerNight, nights, fees, total, dates, onPrimaryAction |
| MapPreview | lat, lng, areaLabel |

## 9. Responsive y comportamiento visual

### 9.1 Mobile-first (375px)
1. Flujo vertical prioritario.
2. Componentes tactiles con area de click adecuada.
3. Cards compactas y CTA visibles.
4. Filtros en drawer o bloque colapsable.

### 9.2 Escritorio desde 786px
1. Rejilla con mas columnas para resultados.
2. Mayor densidad informativa por fila.
3. Filtros en barra superior o lateral persistente segun diseno final.
4. En detalle, composicion de columnas (contenido principal + panel de reserva).

## 10. Accesibilidad minima requerida
1. Navegacion por teclado en elementos interactivos.
2. Focus visible en botones, enlaces y controles.
3. Etiquetas claras en campos de busqueda y filtros.
4. Textos alternativos para imagenes de galerias y tarjetas.
5. Contraste visual suficiente para texto y acciones primarias.

## 11. Performance y calidad tecnica base
1. Optimizar imagenes de cards y galeria.
2. Cargar contenido pesado de forma progresiva cuando aplique.
3. Evitar re-render innecesario de listas de resultados.
4. Mantener tiempo de respuesta percibido bajo mediante estados de carga adecuados.

## 12. Prompt de vision (guia de implementacion)
Adjuntar una captura de pantalla de la interfaz original de Airbnb al agente de IA durante la implementacion para:

1. Extraer jerarquia visual de bloques.
2. Confirmar composicion de componentes por vista.
3. Comparar patrones de espaciado, cards, cabecera y estructura de contenido.

La captura se usa como referencia de experiencia visual, no como copia exacta de marca.

## 13. Criterios de aceptacion

### 13.1 Criterios globales
1. Existen tres vistas funcionales: Home, Results y Detalle.
2. La navegacion interna entre rutas funciona sin recarga completa.
3. El layout responde correctamente en 375px y desde 786px.
4. Hay estados loading, empty y error en vistas con datos.

### 13.2 Criterios de Home
1. SearchBar permite enviar busqueda y navegar a /results.
2. CategoryChips permite activar categorias de exploracion.
3. Seccion de destacados muestra cards reutilizables.

### 13.3 Criterios de Resultados
1. SearchSummary refleja criterios de entrada.
2. FiltersBar y SortControl alteran la lista visible.
3. Al abrir un ListingCard se navega a /listing/[id].

### 13.4 Criterios de Detalle
1. La ruta dinamica /listing/[id] muestra datos completos.
2. BookingPanel presenta precio, fechas y total estimado.
3. El retorno a resultados conserva el contexto de busqueda cuando aplique.

## 14. Entregable de esta fase
Este documento define la base tecnica y funcional para comenzar implementacion en Next.js con enfoque front-end senior. Antes de escribir codigo, se debe usar esta especificacion como contrato de trabajo entre vistas, componentes, datos e interacciones.
