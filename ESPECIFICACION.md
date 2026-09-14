# Ahorra Real — especificación de producto
Dueño: GROK. ChatGPT ejecuta. No reescribir este archivo entero; si hay que corregir, Grok lo hace.

## Meta
Ser el sitio en el que un chileno decide SI COMPRAR AHORA. No el que más productos lista. No el brochure más lindo.
Plata: comisión de afiliado cuando el usuario compra en el retailer. Sin afiliado trackeado, no hay negocio.

## Competencia (qué ganan hoy)

### Knasta
- Historial de precio y “¿el descuento es real?”
- Comparador multi-tienda (Falabella, Paris, Líder, ML)
- Volumen y SEO
AGUJERO que atacamos: ruido, % de vitrina, lentitud percibida, poco “chollo de ahora”.

### Ofertitas
- Velocidad + Telegram + historial “antes/ahora”
- Confianza de cazador de ofertas
AGUJERO: web secundaria; no es un producto pulido de decisión.

### Ofertas Shark
- Volumen (millones de SKU, cientos de tiendas)
AGUJERO: confianza (“¿esto es real?”), UX densa, menos criterio.

## Cómo los superamos (orden, no todo junto)
1. Cero fricción: ofertas en pantalla SIN login, SIN OAuth, SIN “conecta Mercado Libre”.
2. Descuento real: precio vs historial 30–90 días, no vs precio tachado del retailer.
3. Ficha honesta: tienda, despacho si se sabe, “bajó hace X”, link de salida con UTMs/afiliado.
4. Mobile-first: una mano, 20 segundos, CTA “Ver en Falabella/ML”.
5. Canal: Telegram el día que haya 10 chollos de verdad. SEO después.
6. Afiliados oficiales: Mercado Libre + Falabella Creators F ANTES de inflar catálogo.
7. Disclaimer visible: “enlaces de afiliado” (SERNAC).

## Lo que NO hacemos para “ganar”
- Pedir login para ver precios (el demo publicado AÚN lo hace — eso es perder).
- Clonar 3 millones de SKU.
- OAuth de ML como puerta de entrada.
- Inventar descuentos.
- Poner secretos en el repo.

## Barra de calidad (Grok rechaza el PENDIENTE si falla)
- Home público: ≥8 tarjetas con foto o placeholder, precio, antes, %, tienda, link real.
- Cero CTA “Conectar Mercado Libre” en el hero.
- Contraste AA, tap targets 44px, no texto lime ilegible sobre negro.
- Logo nítido (SVG), favicon, título y meta description Chile.
- Precios con punto de miles chileno ($ 349.990).
- Links `rel="nofollow sponsored"` cuando sean afiliado.

## Identidad visual (cambiar si no cumple)
- Oscuro sí. Lima/amarillo solo en CTA y % real, no en párrafos.
- Logo: símbolo $ + “ahorrareal” en una línea, peso fuerte, no genérico de template.
- Tarjeta: imagen, badge “Bajó $X / últimos 30 días”, precio grande, tienda chica, botón único.
- Si el look parece landing de SaaS y no cazador de ofertas, rediseñar las tarjetas. No otra hero poemática.

## Roadmap (Grok abre UN PENDIENTE a la vez)
P0 Demo publicado = HTML con 8 ofertas, sin OAuth.
P1 Ficha + historial dibujado (aunque sea data stub).
P2 Links de afiliado reales (Ivo entrega tags).
P3 Telegram / alerta mínima.
P4 Datos vivos (feeds/API), no scrape temerario.
