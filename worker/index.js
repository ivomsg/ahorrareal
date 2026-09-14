const page = "<!doctype html>\n<html lang=\"es\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta name=\"theme-color\" content=\"#0c1117\" />\n    <meta name=\"description\" content=\"Ahorra Real: ofertas verificadas, historial de precios y alertas personalizadas para comprar mejor en Chile.\" />\n    <title>Ahorra Real — Ofertas que sí valen la pena</title>\n    <link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap\" rel=\"stylesheet\" />\n    <style>\n      :root {\n        --ink: #0c1117;\n        --ink-2: #101821;\n        --panel: #151f29;\n        --panel-2: #1b2732;\n        --line: rgba(226, 239, 244, .1);\n        --muted: #8f9daa;\n        --paper: #f1f6f5;\n        --lime: #d9ff55;\n        --lime-2: #b9e633;\n        --coral: #ff6b4a;\n        --blue: #9bc9ff;\n        --shadow: 0 24px 80px rgba(0, 0, 0, .28);\n      }\n\n      * { box-sizing: border-box; }\n      html { scroll-behavior: smooth; }\n      body {\n        margin: 0;\n        color: var(--paper);\n        background: var(--ink);\n        font-family: \"DM Sans\", system-ui, sans-serif;\n        line-height: 1.45;\n      }\n      button, input, select { font: inherit; }\n      button { cursor: pointer; }\n      a { color: inherit; text-decoration: none; }\n      .shell { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }\n      .topbar {\n        position: sticky; top: 0; z-index: 20;\n        border-bottom: 1px solid var(--line);\n        background: rgba(12, 17, 23, .86);\n        backdrop-filter: blur(18px);\n      }\n      .topbar-inner { height: 74px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }\n      .brand { display: inline-flex; align-items: center; gap: 11px; font-family: \"Space Grotesk\", sans-serif; font-weight: 700; letter-spacing: -.04em; font-size: 21px; }\n      .brand-mark { width: 31px; height: 31px; display: grid; place-items: center; color: var(--ink); background: var(--lime); border-radius: 10px; font-size: 17px; font-weight: 700; transform: rotate(-4deg); }\n      .brand em { color: var(--lime); font-style: normal; }\n      .nav { display: flex; align-items: center; gap: 28px; color: var(--muted); font-size: 14px; }\n      .nav a:hover { color: var(--paper); }\n      .nav .nav-cta { color: var(--ink); background: var(--lime); padding: 10px 15px; border-radius: 10px; font-weight: 700; }\n      .hero { padding: 68px 0 34px; position: relative; overflow: hidden; }\n      .hero::before { content: \"\"; position: absolute; width: 560px; height: 560px; right: -250px; top: -240px; background: radial-gradient(circle, rgba(217,255,85,.15), transparent 65%); pointer-events: none; }\n      .eyebrow { display: inline-flex; align-items: center; gap: 8px; color: var(--lime); font-size: 12px; letter-spacing: .13em; text-transform: uppercase; font-weight: 700; }\n      .eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 0 5px rgba(217,255,85,.1); }\n      h1, h2, h3, p { margin-top: 0; }\n      h1, h2, h3 { font-family: \"Space Grotesk\", sans-serif; letter-spacing: -.045em; }\n      h1 { max-width: 760px; margin: 19px 0 16px; font-size: clamp(42px, 7vw, 78px); line-height: .98; font-weight: 600; }\n      h1 span { color: var(--lime); }\n      .hero-copy { max-width: 630px; color: var(--muted); font-size: 18px; }\n      .hero-tools { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }\n      .search { flex: 1 1 390px; min-width: 260px; position: relative; }\n      .search input { width: 100%; height: 54px; border: 1px solid var(--line); border-radius: 14px; color: var(--paper); background: var(--panel); outline: none; padding: 0 18px 0 48px; }\n      .search input:focus { border-color: rgba(217,255,85,.65); box-shadow: 0 0 0 4px rgba(217,255,85,.08); }\n      .search svg { position: absolute; left: 17px; top: 17px; color: var(--muted); }\n      .primary, .secondary { height: 54px; border-radius: 14px; padding: 0 20px; border: 1px solid transparent; font-weight: 700; transition: transform .2s, background .2s; }\n      .primary { color: var(--ink); background: var(--lime); }\n      .secondary { color: var(--paper); background: transparent; border-color: var(--line); }\n      .primary:hover, .secondary:hover { transform: translateY(-2px); }\n      .secondary:hover { border-color: rgba(217,255,85,.4); }\n      .trust-row { display: flex; gap: 22px; flex-wrap: wrap; margin-top: 20px; color: var(--muted); font-size: 13px; }\n      .trust-row strong { color: var(--paper); font-weight: 600; }\n      .trust-row span { display: inline-flex; align-items: center; gap: 7px; }\n      .mini-check { color: var(--lime); font-weight: 700; }\n      .demo-note { margin-top: 24px; border: 1px solid rgba(155,201,255,.2); background: rgba(155,201,255,.06); color: #c7d9ea; border-radius: 12px; padding: 11px 14px; font-size: 12px; display: inline-flex; gap: 9px; align-items: center; }\n      .section-head { display: flex; justify-content: space-between; align-items: end; gap: 16px; margin: 34px 0 17px; }\n      .section-head h2 { margin: 0; font-size: 28px; font-weight: 600; }\n      .section-head p { color: var(--muted); margin: 0; font-size: 14px; }\n      .section-head a { color: var(--lime); font-size: 13px; font-weight: 700; white-space: nowrap; }\n      .market-bar { display: flex; gap: 9px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }\n      .chip { border: 1px solid var(--line); color: var(--muted); background: transparent; border-radius: 100px; padding: 9px 14px; font-size: 13px; white-space: nowrap; }\n      .chip:hover, .chip.active { color: var(--ink); border-color: var(--lime); background: var(--lime); }\n      .deal-layout { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 18px; align-items: start; margin-top: 18px; }\n      .deal-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }\n      .deal-card { position: relative; overflow: hidden; min-height: 275px; background: linear-gradient(145deg, rgba(27,39,50,.92), rgba(17,25,33,.98)); border: 1px solid var(--line); border-radius: 18px; padding: 18px; transition: transform .22s, border-color .22s; }\n      .live-card { min-height: 310px; }\n      .live-product-row { display: flex; align-items: center; gap: 14px; margin: 20px 0 8px; }\n      .live-thumb { width: 72px; height: 72px; flex: 0 0 auto; object-fit: contain; padding: 6px; border-radius: 12px; background: #fff; }\n      .live-card .product { margin: 0; flex: 1; }\n      .live-link { color: var(--lime); }\n      .demo-note.status-live { color: #e8ffae; border-color: rgba(217,255,85,.35); background: rgba(217,255,85,.08); }\n      .demo-note.status-error { color: #ffd1c7; border-color: rgba(255,107,74,.35); background: rgba(255,107,74,.08); }\\n      .deal-card:hover { transform: translateY(-3px); border-color: rgba(217,255,85,.42); }\n      .deal-card.hidden { display: none; }\n      .card-top { display: flex; justify-content: space-between; gap: 10px; align-items: center; }\n      .store { color: var(--muted); font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }\n      .badge { color: var(--ink); background: var(--lime); border-radius: 7px; padding: 5px 8px; font-size: 12px; font-weight: 800; }\n      .badge.hot { background: var(--coral); color: white; }\n      .product { margin: 22px 0 7px; min-height: 46px; font-size: 17px; line-height: 1.2; font-weight: 600; }\n      .meta { color: var(--muted); font-size: 12px; }\n      .price-row { display: flex; align-items: baseline; gap: 9px; margin-top: 14px; }\n      .price { font-family: \"Space Grotesk\", sans-serif; font-size: 25px; font-weight: 700; letter-spacing: -.05em; }\n      .old-price { color: var(--muted); text-decoration: line-through; font-size: 12px; }\n      .card-bottom { display: flex; justify-content: space-between; align-items: end; gap: 10px; margin-top: 15px; }\n      .score { display: flex; align-items: center; gap: 7px; color: var(--lime); font-size: 12px; font-weight: 700; }\n      .score-bar { width: 72px; height: 5px; border-radius: 4px; background: rgba(217,255,85,.16); overflow: hidden; }\n      .score-bar i { display: block; height: 100%; width: 91%; background: var(--lime); border-radius: inherit; }\n      .score-bar i.mid { width: 76%; }\n      .card-action { border: 0; background: transparent; color: var(--paper); font-size: 12px; font-weight: 700; padding: 4px 0; }\n      .card-action:hover { color: var(--lime); }\n      .spark { position: absolute; right: 17px; bottom: 53px; width: 88px; height: 30px; opacity: .85; }\n      .aside { display: grid; gap: 14px; }\n      .panel { background: var(--panel); border: 1px solid var(--line); border-radius: 18px; padding: 20px; }\n      .panel h3 { margin-bottom: 7px; font-size: 20px; font-weight: 600; }\n      .panel p { color: var(--muted); font-size: 13px; margin-bottom: 16px; }\n      .insight { display: flex; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line); }\n      .insight:first-of-type { border-top: 0; padding-top: 0; }\n      .icon-box { flex: 0 0 32px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 10px; color: var(--ink); background: var(--lime); font-weight: 800; font-size: 13px; }\n      .insight strong { display: block; font-size: 13px; margin-bottom: 2px; }\n      .insight span { display: block; color: var(--muted); font-size: 12px; }\n      .alert-panel { background: var(--lime); color: var(--ink); border: 0; }\n      .alert-panel p { color: rgba(12,17,23,.72); }\n      .alert-form { display: grid; gap: 9px; }\n      .alert-form input { height: 43px; width: 100%; border: 1px solid rgba(12,17,23,.18); border-radius: 10px; background: rgba(255,255,255,.55); color: var(--ink); padding: 0 12px; outline: none; }\n      .alert-form button { height: 43px; border-radius: 10px; border: 0; background: var(--ink); color: var(--lime); font-weight: 700; }\n      .how { margin: 72px 0 64px; display: grid; grid-template-columns: 1.05fr 1fr; gap: 34px; align-items: center; }\n      .how h2 { max-width: 450px; font-size: 43px; line-height: 1.03; margin-bottom: 15px; }\n      .how-copy { color: var(--muted); max-width: 460px; }\n      .steps { display: grid; gap: 11px; }\n      .step { display: grid; grid-template-columns: 37px 1fr; gap: 13px; align-items: start; padding: 14px; background: var(--panel); border: 1px solid var(--line); border-radius: 14px; }\n      .step-num { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; color: var(--ink); background: var(--lime); font-weight: 800; font-size: 12px; }\n      .step strong { font-size: 14px; display: block; margin-bottom: 3px; }\n      .step span { color: var(--muted); font-size: 13px; }\n      footer { border-top: 1px solid var(--line); padding: 25px 0 36px; display: flex; justify-content: space-between; gap: 20px; color: var(--muted); font-size: 12px; }\n      .modal-wrap { position: fixed; inset: 0; z-index: 50; display: none; place-items: center; padding: 20px; background: rgba(0,0,0,.66); }\n      .modal-wrap.open { display: grid; }\n      .modal { width: min(430px, 100%); background: var(--panel-2); border: 1px solid var(--line); border-radius: 20px; padding: 24px; box-shadow: var(--shadow); }\n      .modal h3 { font-size: 24px; margin: 0 0 8px; }\n      .modal p { color: var(--muted); font-size: 14px; }\n      .modal-row { display: flex; gap: 10px; margin-top: 18px; }\n      .modal-row input { flex: 1; min-width: 0; height: 45px; border: 1px solid var(--line); border-radius: 10px; padding: 0 12px; background: var(--ink); color: var(--paper); outline: none; }\n      .modal-close { margin-top: 16px; border: 0; background: transparent; color: var(--muted); font-size: 12px; }\n      .empty { display: none; grid-column: 1 / -1; border: 1px dashed var(--line); padding: 30px; text-align: center; border-radius: 16px; color: var(--muted); }\n      @media (max-width: 850px) {\n        .nav a:not(.nav-cta) { display: none; }\n        .deal-layout, .how { grid-template-columns: 1fr; }\n        .aside { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n        .alert-panel { grid-column: span 2; }\n      }\n      @media (max-width: 580px) {\n        .shell { width: min(100% - 28px, 1180px); }\n        .topbar-inner { height: 64px; }\n        .nav-cta { padding: 9px 11px !important; font-size: 12px; }\n        .hero { padding-top: 49px; }\n        h1 { font-size: 47px; }\n        .hero-copy { font-size: 16px; }\n        .deal-grid { grid-template-columns: 1fr; }\n        .aside { grid-template-columns: 1fr; }\n        .alert-panel { grid-column: auto; }\n        .how { margin: 48px 0; }\n        .how h2 { font-size: 35px; }\n        footer { display: block; }\n        footer span { display: block; margin-top: 7px; }\n      }\n    </style>\n  </head>\n  <body>\n    <header class=\"topbar\">\n      <div class=\"shell topbar-inner\">\n        <a class=\"brand\" href=\"#inicio\" aria-label=\"Ahorra Real inicio\"><span class=\"brand-mark\">$</span><span>ahorra<em>real</em></span></a>\n        <nav class=\"nav\" aria-label=\"Navegación principal\">\n          <a href=\"#ofertas\">Ofertas</a>\n          <a href=\"#como-funciona\">Cómo funciona</a>\n          <a class=\"nav-cta\" href=\"#alertas\">Crear alerta</a>\n        </nav>\n      </div>\n    </header>\n\n    <main id=\"inicio\">\n      <section class=\"hero shell\">\n        <div class=\"eyebrow\"><span class=\"eyebrow-dot\"></span> Compra con datos, no con ruido</div>\n        <h1>Ofertas que <span>sí valen</span> la pena.</h1>\n        <p class=\"hero-copy\">Comparamos precios, revisamos el historial y te avisamos cuando aparece una oportunidad real en Chile. Menos spam. Mejores decisiones.</p>\n        <div class=\"hero-tools\">\n          <label class=\"search\" aria-label=\"Buscar productos\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"m20 20-4-4\"></path></svg>\n            <input id=\"search\" type=\"search\" placeholder=\"Busca un producto: lavadora, iPhone, taladro...\" autocomplete=\"off\" />\n          </label>\n          <button class=\"primary\" id=\"searchButton\">Buscar ofertas</button>\n        </div>\n        <div class=\"trust-row\" aria-label=\"Indicadores de confianza\">\n          <span><b class=\"mini-check\">✓</b> Historial de precios</span>\n          <span><b class=\"mini-check\">✓</b> Condiciones visibles</span>\n          <span><b class=\"mini-check\">✓</b> Sin ofertas infladas</span>\n        </div>\n        <div class=\"demo-note\" id=\"sourceStatus\"><span>◆</span> Preparando conexión con Mercado Libre…</div>\n      </section>\n\n      <section class=\"shell\" id=\"ofertas\">\n        <div class=\"section-head\">\n          <div><h2>Oportunidades detectadas</h2><p>Ordenadas por ahorro real, no por porcentaje decorativo.</p></div>\n          <a href=\"#alertas\">Personaliza tus alertas →</a>\n        </div>\n        <div class=\"market-bar\" role=\"tablist\" aria-label=\"Filtrar por categoría\">\n          <button class=\"chip active\" data-category=\"all\">Todas</button>\n          <button class=\"chip\" data-category=\"hogar\">Hogar</button>\n          <button class=\"chip\" data-category=\"tecnologia\">Tecnología</button>\n          <button class=\"chip\" data-category=\"herramientas\">Herramientas</button>\n          <button class=\"chip\" data-category=\"electro\">Electrodomésticos</button>\n        </div>\n\n        <div class=\"deal-layout\">\n          <div class=\"deal-grid\" id=\"dealGrid\">\n            <article class=\"deal-card\" data-category=\"hogar electro\" data-search=\"lavadora carga frontal 10 kg\">\n              <div class=\"card-top\"><span class=\"store\">Demo · Retail Chile</span><span class=\"badge\">−31%</span></div>\n              <h3 class=\"product\">Lavadora carga frontal 10 kg</h3>\n              <span class=\"meta\">Hogar · despacho incluido en la muestra</span>\n              <div class=\"price-row\"><strong class=\"price\">$349.990</strong><span class=\"old-price\">$509.990</span></div>\n              <div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i></i></span> Oferta fuerte</div><button class=\"card-action alert-trigger\" data-product=\"Lavadora 10 kg\">Activar alerta →</button></div>\n              <svg class=\"spark\" viewBox=\"0 0 88 30\" fill=\"none\"><path d=\"M1 7 12 9 21 6 30 20 40 17 51 24 60 21 70 26 87 16\" stroke=\"#d9ff55\" stroke-width=\"2\"/><path d=\"M1 29h86\" stroke=\"#d9ff55\" stroke-opacity=\".16\"/></svg>\n            </article>\n\n            <article class=\"deal-card\" data-category=\"tecnologia\" data-search=\"iphone 16 128 gb\">\n              <div class=\"card-top\"><span class=\"store\">Demo · Tienda verificada</span><span class=\"badge hot\">−24%</span></div>\n              <h3 class=\"product\">iPhone 16 128 GB</h3>\n              <span class=\"meta\">Tecnología · precio final referencial</span>\n              <div class=\"price-row\"><strong class=\"price\">$599.990</strong><span class=\"old-price\">$789.990</span></div>\n              <div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i></i></span> Mínimo 90 días</div><button class=\"card-action alert-trigger\" data-product=\"iPhone 16 128 GB\">Activar alerta →</button></div>\n              <svg class=\"spark\" viewBox=\"0 0 88 30\" fill=\"none\"><path d=\"M1 11 13 13 23 10 32 18 41 16 50 21 60 18 70 22 87 8\" stroke=\"#ff6b4a\" stroke-width=\"2\"/><path d=\"M1 29h86\" stroke=\"#ff6b4a\" stroke-opacity=\".16\"/></svg>\n            </article>\n\n            <article class=\"deal-card\" data-category=\"herramientas hogar\" data-search=\"taladro atornillador bateria 18v\">\n              <div class=\"card-top\"><span class=\"store\">Demo · Ferretería Chile</span><span class=\"badge\">−38%</span></div>\n              <h3 class=\"product\">Taladro atornillador a batería 18V</h3>\n              <span class=\"meta\">Herramientas · incluye dos baterías</span>\n              <div class=\"price-row\"><strong class=\"price\">$79.990</strong><span class=\"old-price\">$129.990</span></div>\n              <div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i mid></i></span> Buen momento</div><button class=\"card-action alert-trigger\" data-product=\"Taladro 18V\">Activar alerta →</button></div>\n              <svg class=\"spark\" viewBox=\"0 0 88 30\" fill=\"none\"><path d=\"M1 20 12 16 21 20 30 10 40 15 50 12 59 18 69 9 87 12\" stroke=\"#9bc9ff\" stroke-width=\"2\"/><path d=\"M1 29h86\" stroke=\"#9bc9ff\" stroke-opacity=\".16\"/></svg>\n            </article>\n\n            <article class=\"deal-card\" data-category=\"hogar\" data-search=\"cama europea 2 plazas colchón\">\n              <div class=\"card-top\"><span class=\"store\">Demo · Casa &amp; descanso</span><span class=\"badge\">−29%</span></div>\n              <h3 class=\"product\">Cama europea 2 plazas + colchón</h3>\n              <span class=\"meta\">Hogar · comparar antes de comprar</span>\n              <div class=\"price-row\"><strong class=\"price\">$199.990</strong><span class=\"old-price\">$279.990</span></div>\n              <div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i mid></i></span> Ahorro real</div><button class=\"card-action alert-trigger\" data-product=\"Cama europea 2 plazas\">Activar alerta →</button></div>\n              <svg class=\"spark\" viewBox=\"0 0 88 30\" fill=\"none\"><path d=\"M1 5 12 9 22 6 30 15 42 12 52 23 61 17 71 21 87 11\" stroke=\"#d9ff55\" stroke-width=\"2\"/><path d=\"M1 29h86\" stroke=\"#d9ff55\" stroke-opacity=\".16\"/></svg>\n            </article>\n            <div class=\"empty\" id=\"empty\">No encontramos ofertas de muestra con ese filtro. Prueba otra búsqueda.</div>\n          </div>\n\n          <aside class=\"aside\">\n            <div class=\"panel\">\n              <h3>Qué hacemos distinto</h3>\n              <p>Una oferta no es buena porque diga “−50%”. La medimos contra su propio historial.</p>\n              <div class=\"insight\"><span class=\"icon-box\">01</span><div><strong>Precio real</strong><span>Comparamos contra los últimos 90 días.</span></div></div>\n              <div class=\"insight\"><span class=\"icon-box\">02</span><div><strong>Contexto completo</strong><span>Tarjeta, despacho y condiciones visibles.</span></div></div>\n              <div class=\"insight\"><span class=\"icon-box\">03</span><div><strong>Menos ruido</strong><span>Recibes solo lo que te interesa.</span></div></div>\n            </div>\n            <div class=\"panel alert-panel\" id=\"alertas\">\n              <h3>Compra cuando baje</h3>\n              <p>Déjanos un producto y te avisaremos cuando aparezca a un precio que tenga sentido.</p>\n              <form class=\"alert-form\" id=\"alertForm\">\n                <input id=\"alertInput\" type=\"text\" placeholder=\"Ej: refrigerador bajo $400.000\" aria-label=\"Producto para alerta\" required />\n                <button type=\"submit\">Crear alerta de prueba</button>\n              </form>\n            </div>\n          </aside>\n        </div>\n      </section>\n\n      <section class=\"shell how\" id=\"como-funciona\">\n        <div>\n          <div class=\"eyebrow\"><span class=\"eyebrow-dot\"></span> La lógica detrás de cada alerta</div>\n          <h2>Comprar mejor no debería requerir 20 pestañas.</h2>\n          <p class=\"how-copy\">Ahorra Real convierte precios dispersos en una decisión simple: qué es, cuánto costaba de verdad y si ahora es un buen momento para comprar.</p>\n        </div>\n        <div class=\"steps\">\n          <div class=\"step\"><span class=\"step-num\">1</span><div><strong>Buscas o defines un objetivo</strong><span>Por producto, categoría o presupuesto máximo.</span></div></div>\n          <div class=\"step\"><span class=\"step-num\">2</span><div><strong>Verificamos la oportunidad</strong><span>Precio histórico, tiendas, stock y condiciones.</span></div></div>\n          <div class=\"step\"><span class=\"step-num\">3</span><div><strong>Te avisamos sin spam</strong><span>Solo cuando la compra realmente mejora.</span></div></div>\n        </div>\n      </section>\n    </main>\n\n    <footer class=\"shell\"><strong>ahorra<span style=\"color:var(--lime)\">real</span></strong><span>Prototipo de validación · Chile</span></footer>\n\n    <div class=\"modal-wrap\" id=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modalTitle\">\n      <div class=\"modal\">\n        <h3 id=\"modalTitle\">Activa una alerta</h3>\n        <p id=\"modalText\">Te avisaremos cuando el precio de este producto llegue a un nivel realmente bueno.</p>\n        <div class=\"modal-row\"><input type=\"email\" id=\"modalEmail\" placeholder=\"tu@email.com\" aria-label=\"Correo electrónico\" /><button class=\"primary\" id=\"modalSubmit\">Avisarme</button></div>\n        <button class=\"modal-close\" id=\"modalClose\">Cerrar</button>\n      </div>\n    </div>\n\n    <script>\n\n      let cards = [...document.querySelectorAll('.deal-card')];\n      const chips = [...document.querySelectorAll('.chip')];\n      const search = document.getElementById('search');\n      let empty = document.getElementById('empty');\n      const dealGrid = document.getElementById('dealGrid');\n      const sourceStatus = document.getElementById('sourceStatus');\n      let category = 'all';\n\n      function escapeHtml(value) {\n        return String(value == null ? '' : value).replace(/[&<>\"']/g, function(character) {\n          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#039;' }[character];\n        });\n      }\n\n      function safeHref(value) {\n        try {\n          const parsed = new URL(value);\n          if (parsed.protocol !== 'https:') return '#';\n          if (!parsed.hostname.endsWith('mercadolibre.cl')) return '#';\n          return parsed.href;\n        } catch (error) {\n          return '#';\n        }\n      }\n\n      function setSourceStatus(message, state) {\n        sourceStatus.className = 'demo-note' + (state ? ' status-' + state : '');\n        sourceStatus.innerHTML = '<span>◆</span> ' + escapeHtml(message);\n      }\n\n      function formatPrice(value) {\n        if (!value) return 'Precio no informado';\n        return new Intl.NumberFormat('es-CL', {\n          style: 'currency',\n          currency: 'CLP',\n          maximumFractionDigits: 0\n        }).format(Number(value));\n      }\n\n      function categoryFor(title) {\n        const text = String(title || '').toLowerCase();\n        if (/taladro|herramienta|atornillador|sierra|amoladora|soldadora|compresor/.test(text)) return 'herramientas';\n        if (/lavadora|refrigerador|microonda|aspiradora|cocina|horno|secadora|electro/.test(text)) return 'electro';\n        if (/iphone|samsung|xiaomi|notebook|laptop|televisor|monitor|audífono|audifono|celular|tablet|computador|router|consola/.test(text)) return 'tecnologia';\n        return 'hogar';\n      }\n\n      function discountFor(item) {\n        const current = Number(item.price || 0);\n        const previous = Number(item.originalPrice || 0);\n        if (!current || !previous || previous <= current) return 0;\n        return Math.round((1 - current / previous) * 100);\n      }\n\n      function renderDeals(items) {\n        if (!items.length) {\n          dealGrid.innerHTML = '<div class=\"empty\" id=\"empty\" style=\"display:block\">Mercado Libre no devolvió productos para esta búsqueda.</div>';\n          cards = [];\n          empty = document.getElementById('empty');\n          return;\n        }\n\n        dealGrid.innerHTML = items.map(function(item) {\n          const title = escapeHtml(item.title || 'Producto sin título');\n          const seller = escapeHtml(item.seller || 'Vendedor Mercado Libre');\n          const categoryValue = categoryFor(item.title);\n          const categoryLabel = categoryValue === 'electro' ? 'Electrodomésticos' : categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);\n          const discount = discountFor(item);\n          const badge = discount ? '−' + discount + '% publicado' : 'Precio actual';\n          const image = item.thumbnail ? '<img class=\"live-thumb\" src=\"' + escapeHtml(item.thumbnail) + '\" alt=\"\" loading=\"lazy\">' : '';\n          const oldPrice = item.originalPrice ? '<span class=\"old-price\">' + formatPrice(item.originalPrice) + '</span>' : '';\n          const shipping = item.shipping || 'Despacho según ubicación';\n          const href = safeHref(item.permalink);\n          const searchText = escapeHtml((item.title || '') + ' ' + seller);\n          return '<article class=\"deal-card live-card\" data-category=\"' + categoryValue + '\" data-search=\"' + searchText + '\">' +\n            '<div class=\"card-top\"><span class=\"store\">Mercado Libre · ' + seller + '</span><span class=\"badge\">' + badge + '</span></div>' +\n            '<div class=\"live-product-row\">' + image + '<h3 class=\"product\">' + title + '</h3></div>' +\n            '<span class=\"meta\">' + categoryLabel + ' · ' + escapeHtml(shipping) + '</span>' +\n            '<div class=\"price-row\"><strong class=\"price\">' + formatPrice(item.price) + '</strong>' + oldPrice + '</div>' +\n            '<div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i style=\"width:45%\"></i></span> Historial en construcción</div>' +\n            '<a class=\"card-action live-link\" href=\"' + href + '\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">Ver oferta ↗</a></div>' +\n            '<div class=\"meta\" style=\"margin-top:13px\">Producto actualizado desde Mercado Libre · ' + escapeHtml(item.id || '') + '</div>' +\n          '</article>';\n        }).join('') + '<div class=\"empty\" id=\"empty\">No encontramos productos para ese filtro.</div>';\n\n        cards = [...document.querySelectorAll('.deal-card')];\n        empty = document.getElementById('empty');\n        applyFilters();\n      }\n\n      function applyFilters() {\n        const term = search.value.trim().toLowerCase();\n        let visible = 0;\n        cards.forEach(function(card) {\n          const categories = (card.dataset.category || '').split(' ');\n          const matchesCategory = category === 'all' || categories.includes(category);\n          const matchesText = !term || (card.dataset.search || '').toLowerCase().includes(term) || card.textContent.toLowerCase().includes(term);\n          const show = matchesCategory && matchesText;\n          card.classList.toggle('hidden', !show);\n          if (show) visible++;\n        });\n        if (empty) empty.style.display = visible ? 'none' : 'block';\n      }\n\n      async function searchMercadoLibre(term) {\n        const query = String(term || '').trim();\n        if (!query) {\n          setSourceStatus('Escribe un producto para buscar en Mercado Libre', 'error');\n          return;\n        }\n\n        setSourceStatus('Buscando \"' + query + '\" en Mercado Libre…');\n        try {\n          const response = await fetch('/api/mercadolibre/search?q=' + encodeURIComponent(query) + '&limit=12', {\n            headers: { accept: 'application/json' }\n          });\n          const payload = await response.json().catch(function() { return {}; });\n          if (!response.ok) {\n            const detail = payload.detail ? ' ' + payload.detail : '';\n            throw new Error((payload.error || 'Mercado Libre rechazó la consulta.') + detail);\n          }\n          renderDeals(payload.results || []);\n          setSourceStatus('Datos en vivo · Mercado Libre · ' + (payload.results || []).length + ' resultados', 'live');\n        } catch (error) {\n          setSourceStatus(error.message || 'No pudimos conectar con Mercado Libre. Mostrando la vista de demostración.', 'error');\n        }\n      }\n\n      chips.forEach(function(chip) {\n        chip.addEventListener('click', function() {\n          chips.forEach(function(item) { item.classList.remove('active'); });\n          chip.classList.add('active');\n          category = chip.dataset.category;\n          applyFilters();\n        });\n      });\n\n      search.addEventListener('input', applyFilters);\n      search.addEventListener('keydown', function(event) {\n        if (event.key === 'Enter') {\n          event.preventDefault();\n          searchMercadoLibre(search.value);\n        }\n      });\n\n      document.getElementById('searchButton').addEventListener('click', function() {\n        document.getElementById('ofertas').scrollIntoView({ behavior: 'smooth', block: 'start' });\n        searchMercadoLibre(search.value || 'lavadora');\n      });\n\n      const modal = document.getElementById('modal');\n      const modalText = document.getElementById('modalText');\n      document.querySelectorAll('.alert-trigger').forEach(function(button) {\n        button.addEventListener('click', function() {\n          modalText.textContent = 'Te avisaremos cuando ' + button.dataset.product + ' llegue a un nivel realmente bueno.';\n          modal.classList.add('open');\n          document.getElementById('modalEmail').focus();\n        });\n      });\n      document.getElementById('modalClose').addEventListener('click', function() { modal.classList.remove('open'); });\n      modal.addEventListener('click', function(event) { if (event.target === modal) modal.classList.remove('open'); });\n      document.getElementById('modalSubmit').addEventListener('click', function() {\n        const email = document.getElementById('modalEmail');\n        if (!email.value || !email.checkValidity()) { email.reportValidity(); return; }\n        modalText.textContent = 'Listo. La alerta quedó preparada para esta demo.';\n        document.getElementById('modalSubmit').textContent = 'Alerta creada';\n        setTimeout(function() {\n          modal.classList.remove('open');\n          document.getElementById('modalSubmit').textContent = 'Avisarme';\n        }, 1300);\n      });\n      document.getElementById('alertForm').addEventListener('submit', function(event) {\n        event.preventDefault();\n        const input = document.getElementById('alertInput');\n        if (!input.value.trim()) return;\n        input.value = '';\n        input.placeholder = 'Alerta preparada para esta demo ✓';\n      });\n\n      setTimeout(function() { searchMercadoLibre('lavadora'); }, 450);\n    </script>\n  </body>\n</html>\n"

const favicon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\n  <rect width=\"64\" height=\"64\" rx=\"18\" fill=\"#0c1117\"/>\n  <path d=\"M17 17h30v8H27v7h16v8H27v7h20v8H17z\" fill=\"#d9ff55\"/>\n  <path d=\"M40 17h7v38h-7z\" fill=\"#ff6b4a\" opacity=\".9\"/>\n</svg>";

const historyStyles = String.raw`<style>
      .live-card[role="button"] { cursor: pointer; }
      .card-actions { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 12px; }
      .history-trigger { color: var(--lime); }
      .watchlist-trigger { color: var(--muted); border: 1px solid var(--line); border-radius: 8px; padding: 5px 8px; }
      .watchlist-trigger:hover, .watchlist-trigger.saved { color: var(--ink); border-color: var(--lime); background: var(--lime); }
      .live-card .score { flex: 1 1 auto; min-width: 0; }
      .live-results-toolbar { display: flex; justify-content: flex-end; align-items: center; gap: 9px; margin-top: 12px; color: var(--muted); font-size: 12px; }
      .live-results-toolbar select { height: 36px; border: 1px solid var(--line); border-radius: 9px; padding: 0 30px 0 10px; color: var(--paper); background: var(--panel); outline: none; }
      .live-results-toolbar select:focus { border-color: rgba(217,255,85,.55); }
      .savings { color: var(--lime); font-size: 11px; font-weight: 700; white-space: nowrap; }
      .live-card .price-row { flex-wrap: wrap; row-gap: 4px; }
      .live-card .freshness { flex-basis: 100%; }
      .history-verdict { margin-bottom: 18px; padding: 12px 14px; border: 1px solid rgba(217,255,85,.3); border-radius: 12px; background: rgba(217,255,85,.08); }
      .history-verdict strong { display: block; color: var(--lime); font-size: 15px; margin-bottom: 3px; }
      .history-verdict span { display: block; color: var(--muted); font-size: 12px; }
      .history-verdict.neutral { border-color: rgba(155,201,255,.25); background: rgba(155,201,255,.06); }
      .history-verdict.neutral strong { color: var(--blue); }
      .history-loading { min-height: 126px; display: grid; place-items: center; border: 1px dashed var(--line); border-radius: 13px; color: var(--muted); font-size: 13px; }
      .history-modal-wrap { position: fixed; inset: 0; z-index: 60; display: none; place-items: center; padding: 20px; background: rgba(0,0,0,.72); }
      .history-modal-wrap.open { display: grid; }
      .history-modal { position: relative; width: min(620px, 100%); max-height: min(720px, calc(100vh - 40px)); overflow: auto; background: var(--panel-2); border: 1px solid var(--line); border-radius: 20px; padding: 26px; box-shadow: var(--shadow); }
      .history-modal h3 { margin: 0 46px 7px 0; font-size: 25px; line-height: 1.1; }
      .history-kicker { margin: 0 0 6px; color: var(--lime); font-size: 12px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; }
      .history-current { color: var(--muted); margin: 0 0 20px; font-size: 14px; }
      .history-close { position: absolute; top: 15px; right: 17px; width: 36px; height: 36px; border: 1px solid var(--line); border-radius: 50%; color: var(--paper); background: transparent; font-size: 24px; line-height: 1; }
      .history-close:hover { color: var(--lime); border-color: rgba(217,255,85,.45); }
      .history-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
      .history-stat { padding: 12px; border: 1px solid var(--line); border-radius: 12px; background: rgba(12,17,23,.28); }
      .history-stat span { display: block; color: var(--muted); font-size: 11px; margin-bottom: 4px; }
      .history-stat strong { display: block; font-family: "Space Grotesk", sans-serif; font-size: 17px; }
      .history-chart { display: flex; align-items: flex-end; gap: 8px; min-height: 156px; padding: 14px 4px 0; border-bottom: 1px solid var(--line); }
      .history-bar { flex: 1; min-width: 14px; height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 6px; }
      .history-bar i { display: block; width: 100%; min-height: 12px; border-radius: 7px 7px 2px 2px; background: linear-gradient(180deg, var(--lime), var(--lime-2)); }
      .history-bar span { color: var(--muted); font-size: 10px; white-space: nowrap; }
      .history-empty { min-height: 126px; display: grid; place-items: center; padding: 24px; border: 1px dashed var(--line); border-radius: 13px; color: var(--muted); text-align: center; font-size: 13px; }
      .history-note { margin: 16px 0 0; color: var(--muted); font-size: 12px; }
      .history-link { display: inline-flex; align-items: center; margin-top: 18px; height: 44px; }
      .fallback-actions { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 9px; }
      .fallback-actions .history-link { margin-top: 0; }
      @media (max-width: 580px) {
        .card-actions { gap: 7px; }
        .live-results-toolbar { justify-content: flex-start; }
        .history-modal { padding: 22px 18px; }
        .history-stats { gap: 7px; }
        .history-stat { padding: 10px 8px; }
        .history-stat strong { font-size: 14px; }
      }
    </style>`;

const historyMarkup = String.raw`
    <div class="history-modal-wrap" id="historyModal" aria-hidden="true">
      <section class="history-modal" role="dialog" aria-modal="true" aria-labelledby="historyTitle">
        <button class="history-close" id="historyClose" type="button" aria-label="Cerrar historial">×</button>
        <p class="history-kicker">Historial de precio</p>
        <h3 id="historyTitle">Producto</h3>
        <p class="history-current" id="historyCurrent"></p>
        <div id="historySummary"></div>
        <div class="history-chart" id="historyChart"></div>
        <p class="history-note" id="historyNote"></p>
        <a id="historyLink" class="primary history-link" target="_blank" rel="noopener noreferrer sponsored">Ver publicación en Mercado Libre ↗</a>
      </section>
    </div>
`;

const historyClientScript = String.raw`
      let liveItemsById = Object.create(null);
      const historyStorageKey = 'ahorrareal-price-history-v1';
      const watchlistStorageKey = 'ahorrareal-watchlist-v1';
      const historyModal = document.getElementById('historyModal');
      const historyClose = document.getElementById('historyClose');
      const historyTitle = document.getElementById('historyTitle');
      const historyCurrent = document.getElementById('historyCurrent');
      const historySummary = document.getElementById('historySummary');
      const historyChart = document.getElementById('historyChart');
      const historyNote = document.getElementById('historyNote');
      const historyLink = document.getElementById('historyLink');

      function readLocalPriceHistory() {
        try {
          const value = JSON.parse(localStorage.getItem(historyStorageKey) || '{}');
          return value && typeof value === 'object' ? value : {};
        } catch (error) {
          return {};
        }
      }

      function readWatchlist() {
        try {
          const value = JSON.parse(localStorage.getItem(watchlistStorageKey) || '{}');
          return value && typeof value === 'object' ? value : {};
        } catch (error) {
          return {};
        }
      }

      function isWatched(id) {
        const key = String(id || '').trim();
        return Boolean(key && readWatchlist()[key]);
      }

      function toggleWatchlist(item) {
        const id = String(item && item.id || '').trim();
        if (!id) return false;
        const all = readWatchlist();
        if (all[id]) {
          delete all[id];
        } else {
          all[id] = {
            id: id,
            title: String(item.title || 'Producto'),
            price: Number(item.price || 0),
            originalPrice: Number(item.originalPrice || 0),
            permalink: String(item.permalink || ''),
            thumbnail: String(item.thumbnail || ''),
            seller: String(item.seller || ''),
            savedAt: new Date().toISOString(),
          };
        }
        try { localStorage.setItem(watchlistStorageKey, JSON.stringify(all)); } catch (error) {}
        return Boolean(all[id]);
      }

      // Local storage is only a fallback for this device. The authoritative
      // history is stored by the Worker and loaded from /api/history.
      function recordPriceSnapshot(item) {
        const id = String(item && item.id || '').trim();
        const price = Number(item && item.price);
        if (!id || !Number.isFinite(price) || price <= 0) return;
        const all = readLocalPriceHistory();
        const entry = all[id] && typeof all[id] === 'object' ? all[id] : { id: id, prices: [] };
        const records = Array.isArray(entry.prices) ? entry.prices : [];
        const now = Date.now();
        const last = records[records.length - 1];
        const lastAt = last && Date.parse(last.at);
        if (!last || Number(last.price) !== price || !Number.isFinite(lastAt) || now - lastAt > 6 * 60 * 60 * 1000) {
          entry.prices = records.concat([{ at: new Date(now).toISOString(), price: price }]).slice(-90);
        } else {
          entry.prices = records;
        }
        entry.title = String(item.title || entry.title || 'Producto');
        entry.permalink = String(item.permalink || entry.permalink || '');
        all[id] = entry;
        try { localStorage.setItem(historyStorageKey, JSON.stringify(all)); } catch (error) {}
      }

      function getLocalPriceHistory(item) {
        const id = String(item && item.id || '');
        const entry = readLocalPriceHistory()[id];
        return entry && Array.isArray(entry.prices)
          ? entry.prices.filter(function(record) { return record && Number(record.price) > 0 && record.at; })
          : [];
      }

      function priceAssessment(records, currentPrice) {
        const values = records.map(function(record) { return Number(record.price); }).filter(function(value) { return Number.isFinite(value) && value > 0; });
        const latest = currentPrice > 0 ? currentPrice : values[values.length - 1];
        if (!values.length || !Number.isFinite(latest)) return { label: 'Sin historial suficiente', detail: 'Guardaremos el precio al volver a consultar este producto.', tone: 'neutral' };
        if (values.length < 2) return { label: 'Primer registro', detail: 'Necesitamos otra consulta para decir si está barato o caro.', tone: 'neutral' };
        const minimum = Math.min.apply(null, values);
        const maximum = Math.max.apply(null, values);
        const average = values.reduce(function(total, value) { return total + value; }, 0) / values.length;
        if (latest <= minimum * 1.01) return { label: 'Muy buen precio', detail: 'Está en el mínimo observado de este historial.', tone: 'good' };
        if (latest <= average * 0.95) return { label: 'Buen precio', detail: 'Está por debajo del promedio observado.', tone: 'good' };
        if (latest >= maximum * 0.99 || latest >= average * 1.1) return { label: 'Precio alto', detail: 'Está cerca del máximo o sobre el promedio observado.', tone: 'neutral' };
        return { label: 'Precio normal', detail: 'Está dentro del rango habitual observado.', tone: 'neutral' };
      }

      function renderPriceHistory(item, records, serverAvailable) {
        const currentPrice = Number(item && item.price);
        const usableRecords = Array.isArray(records) ? records.filter(function(record) { return record && Number(record.price) > 0 && record.at; }) : [];
        historyTitle.textContent = String(item && item.title || 'Producto');
        historyCurrent.textContent = currentPrice > 0
          ? 'Precio actual: ' + formatPrice(currentPrice)
          : 'Precio actual no disponible en esta respuesta de Mercado Libre.';
        const href = safeHref(item && item.permalink);
        historyLink.href = href;
        historyLink.hidden = href === '#';

        if (!usableRecords.length) {
          historySummary.innerHTML = '';
          historyChart.innerHTML = '<div class="history-empty">Aún no hay registros compartidos de este producto.<br>Al volver a buscarlo guardaremos el precio.</div>';
          historyNote.textContent = serverAvailable
            ? 'El historial se construye con consultas reales; no mostramos datos inventados.'
            : 'No se pudo cargar el historial compartido. Mostramos el respaldo de este navegador.';
        } else {
          const values = usableRecords.map(function(record) { return Number(record.price); });
          const minimum = Math.min.apply(null, values);
          const maximum = Math.max.apply(null, values);
          const latest = values[values.length - 1];
          const assessment = priceAssessment(usableRecords, currentPrice);
          historySummary.innerHTML = '<div class="history-stats">' +
            '<div class="history-stat"><span>Mínimo registrado</span><strong>' + formatPrice(minimum) + '</strong></div>' +
            '<div class="history-stat"><span>Máximo registrado</span><strong>' + formatPrice(maximum) + '</strong></div>' +
            '<div class="history-stat"><span>Último registro</span><strong>' + formatPrice(latest) + '</strong></div>' +
          '</div><div class="history-verdict ' + (assessment.tone === 'neutral' ? 'neutral' : '') + '"><strong>' + escapeHtml(assessment.label) + '</strong><span>' + escapeHtml(assessment.detail) + '</span></div>';
          const chartRecords = usableRecords.slice(-12);
          const chartMax = Math.max.apply(null, chartRecords.map(function(record) { return Number(record.price); }));
          historyChart.innerHTML = chartRecords.map(function(record) {
            const value = Number(record.price);
            const height = Math.max(18, Math.round((value / chartMax) * 100));
            const date = new Date(record.at);
            const label = Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('es-CL', { day: '2-digit', month: '2-digit' }).format(date);
            return '<div class="history-bar" title="' + formatPrice(value) + '"><i style="height:' + height + '%"></i><span>' + escapeHtml(label) + '</span></div>';
          }).join('');
          historyNote.textContent = !serverAvailable
            ? 'Historial de respaldo de este navegador; el historial compartido no respondió.'
            : usableRecords.length < 2
              ? 'Primer registro compartido guardado. Vuelve a consultar este producto para comparar cambios.'
              : 'Mostrando los últimos ' + chartRecords.length + ' registros compartidos de los últimos 90 días.';
        }
      }

      async function openPriceHistory(item) {
        historyTitle.textContent = String(item && item.title || 'Producto');
        historyCurrent.textContent = Number(item && item.price) > 0 ? 'Precio actual: ' + formatPrice(item.price) : 'Cargando precio actual…';
        historySummary.innerHTML = '';
        historyChart.innerHTML = '<div class="history-loading">Cargando historial compartido…</div>';
        historyNote.textContent = 'Consultando los registros reales del producto.';
        const href = safeHref(item && item.permalink);
        historyLink.href = href;
        historyLink.hidden = href === '#';
        historyModal.classList.add('open');
        historyModal.setAttribute('aria-hidden', 'false');
        historyClose.focus();
        try {
          const response = await fetch('/api/history?item_id=' + encodeURIComponent(String(item && item.id || '')), { credentials: 'include', headers: { accept: 'application/json' } });
          const payload = await response.json().catch(function() { return {}; });
          if (!response.ok || !Array.isArray(payload.history)) throw new Error('History unavailable');
          renderPriceHistory(item, payload.history, true);
        } catch (error) {
          renderPriceHistory(item, getLocalPriceHistory(item), false);
        }
      }

      function closePriceHistory() {
        historyModal.classList.remove('open');
        historyModal.setAttribute('aria-hidden', 'true');
      }

      historyClose.addEventListener('click', closePriceHistory);
      historyModal.addEventListener('click', function(event) {
        if (event.target === historyModal) closePriceHistory();
      });
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && historyModal.classList.contains('open')) closePriceHistory();
      });
`;

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders,
    },
  });
}

let cachedAccessToken = "";
let cachedAccessTokenExpiresAt = 0;
let cachedAccessTokenSource = "";

function getCookie(request, name) {
  const cookies = request.headers.get("cookie") || "";
  const prefix = name + "=";
  for (const part of cookies.split(";")) {
    const value = part.trim();
    if (value.startsWith(prefix)) return decodeURIComponent(value.slice(prefix.length));
  }
  return "";
}

function setCookie(name, value, maxAge) {
  return `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=None`;
}

async function requestMercadoLibreToken(body) {
  const response = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" },
    body,
  });
  const data = await response.json().catch(() => ({}));
  return { response, data };
}

function redirect(location, cookies = []) {
  const headers = new Headers({ location, "cache-control": "no-store" });
  cookies.forEach((value) => headers.append("set-cookie", value));
  return new Response(null, { status: 302, headers });
}

function oauthErrorPage(title, detail) {
  return new Response(`<!doctype html><html lang="es"><meta charset="utf-8"><title>${title}</title><body style="font-family:system-ui;max-width:680px;margin:60px auto;padding:20px"><h1>${title}</h1><p>${detail}</p><p><a href="/">Volver a Ahorra Real</a></p></body></html>`, {
    status: 400,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

async function authorizeMercadoLibre(env) {
  if (!env.MERCADOLIBRE_CLIENT_ID || !env.MERCADOLIBRE_REDIRECT_URI) {
    return json({ error: "Falta configurar Mercado Libre en el servidor." }, 500);
  }
  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    response_type: "code",
    client_id: env.MERCADOLIBRE_CLIENT_ID,
    redirect_uri: env.MERCADOLIBRE_REDIRECT_URI,
    state,
  });
  return redirect("https://auth.mercadolibre.cl/authorization?" + params.toString(), [setCookie("ML_OAUTH_STATE", state, 600)]);
}

async function handleMercadoLibreCallback(request, env) {
  const url = new URL(request.url);
  const error = url.searchParams.get("error");
  if (error) return oauthErrorPage("Mercado Libre no autorizó la conexión", error);

  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state") || "";
  const expectedState = getCookie(request, "ML_OAUTH_STATE");
  if (!code) return oauthErrorPage("Falta el código de autorización", "Mercado Libre no devolvió un código válido.");
  if (!expectedState || returnedState !== expectedState) return oauthErrorPage("Estado OAuth inválido", "La autorización no coincide con la sesión iniciada.");

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: env.MERCADOLIBRE_CLIENT_ID,
    client_secret: env.MERCADOLIBRE_CLIENT_SECRET,
    code,
    redirect_uri: env.MERCADOLIBRE_REDIRECT_URI,
  });
  const { response, data } = await requestMercadoLibreToken(body);
  if (!response.ok || !data.refresh_token) {
    return oauthErrorPage("Mercado Libre rechazó la autorización", data.message || "Revisa la Redirect URI y vuelve a intentarlo.");
  }

  cachedAccessToken = data.access_token || "";
  cachedAccessTokenSource = "user";
  cachedAccessTokenExpiresAt = Date.now() + Math.max(Number(data.expires_in || 10800) - 60, 60) * 1000;
  return redirect("/?ml_connected=1", [
    setCookie("ML_REFRESH_TOKEN", data.refresh_token, 15552000),
    setCookie("ML_OAUTH_STATE", "", 0),
  ]);
}

async function getMercadoLibreAccess(request, env) {
  const directToken = env.MERCADOLIBRE_ACCESS_TOKEN;
  if (directToken) return { token: directToken, refreshToken: "", cookieBacked: false, userBacked: true };

  const envRefreshToken = env.MERCADOLIBRE_REFRESH_TOKEN;
  const cookieRefreshToken = getCookie(request, "ML_REFRESH_TOKEN");
  const refreshToken = envRefreshToken || cookieRefreshToken;
  if (!env.MERCADOLIBRE_CLIENT_ID || !env.MERCADOLIBRE_CLIENT_SECRET) return { token: "", refreshToken: "", cookieBacked: false, userBacked: false };

  if (refreshToken) {
    const refreshBody = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: env.MERCADOLIBRE_CLIENT_ID,
      client_secret: env.MERCADOLIBRE_CLIENT_SECRET,
      refresh_token: refreshToken,
    });
    const { response, data } = await requestMercadoLibreToken(refreshBody);
    if (response.ok && data.access_token) {
      cachedAccessToken = data.access_token;
      cachedAccessTokenSource = "user";
      cachedAccessTokenExpiresAt = Date.now() + Math.max(Number(data.expires_in || 10800) - 60, 60) * 1000;
      return { token: data.access_token, refreshToken: data.refresh_token || refreshToken, cookieBacked: !envRefreshToken, userBacked: true };
    }
    // A stale browser refresh token must not block public marketplace search.
    // Fall through to client credentials; OAuth remains available for the
    // account-specific endpoints that need the user's identity.
  }

  // Reuse a token while it is valid. User tokens keep account-specific access;
  // application tokens keep the public marketplace search available.
  if (cachedAccessToken && cachedAccessTokenSource === "app" && Date.now() < cachedAccessTokenExpiresAt) {
    return { token: cachedAccessToken, refreshToken: "", cookieBacked: false, userBacked: false, appToken: true };
  }

  const appBody = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: env.MERCADOLIBRE_CLIENT_ID,
    client_secret: env.MERCADOLIBRE_CLIENT_SECRET,
  });
  const { response, data } = await requestMercadoLibreToken(appBody);
  if (!response.ok || !data.access_token) {
    return {
      token: "",
      refreshToken: "",
      cookieBacked: false,
      userBacked: false,
      error: data.message || data.error_description || "Mercado Libre no entregó un token de aplicación.",
    };
  }
  cachedAccessToken = data.access_token;
  cachedAccessTokenSource = "app";
  cachedAccessTokenExpiresAt = Date.now() + Math.max(Number(data.expires_in || 21600) - 60, 60) * 1000;
  return { token: data.access_token, refreshToken: "", cookieBacked: false, userBacked: false, appToken: true };
}

async function fetchMercadoLibreJson(apiUrl, headers) {
  const response = await fetch(apiUrl, { headers });
  const raw = await response.text();
  let data = {};
  try { data = JSON.parse(raw); } catch (error) {}
  return { response, data };
}

function getPriceDatabase(env) {
  const database = env && env.DB;
  return database && typeof database.prepare === "function" ? database : null;
}

function buildPriceSummary(records) {
  const values = records
    .map((record) => Number(record.price))
    .filter((value) => Number.isFinite(value) && value > 0);
  if (!values.length) {
    return {
      count: 0,
      minimum: null,
      maximum: null,
      average: null,
      latest: null,
      assessment: {
        label: "Sin historial suficiente",
        detail: "Guardaremos el precio al volver a consultar este producto.",
        tone: "neutral",
      },
    };
  }

  const latest = values[values.length - 1];
  const minimum = Math.min(...values);
  const maximum = Math.max(...values);
  const average = values.reduce((total, value) => total + value, 0) / values.length;
  let assessment;
  if (values.length < 2) {
    assessment = {
      label: "Primer registro",
      detail: "Necesitamos otra consulta para decir si está barato o caro.",
      tone: "neutral",
    };
  } else if (latest <= minimum * 1.01) {
    assessment = {
      label: "Muy buen precio",
      detail: "Está en el mínimo observado de este historial.",
      tone: "good",
    };
  } else if (latest <= average * 0.95) {
    assessment = {
      label: "Buen precio",
      detail: "Está por debajo del promedio observado.",
      tone: "good",
    };
  } else if (latest >= maximum * 0.99 || latest >= average * 1.1) {
    assessment = {
      label: "Precio alto",
      detail: "Está cerca del máximo o sobre el promedio observado.",
      tone: "neutral",
    };
  } else {
    assessment = {
      label: "Precio normal",
      detail: "Está dentro del rango habitual observado.",
      tone: "neutral",
    };
  }
  return { count: values.length, minimum, maximum, average, latest, assessment };
}

async function savePriceSnapshots(env, results) {
  const database = getPriceDatabase(env);
  if (!database || !Array.isArray(results)) return false;
  const snapshots = results
    .filter((item) => item && String(item.id || "").trim() && hasPrice(item))
    .slice(0, 12);
  if (!snapshots.length) return true;

  const observedAt = new Date().toISOString();
  const cutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();
  const statements = snapshots.map((item) => {
    const itemId = String(item.id).trim().slice(0, 160);
    const title = String(item.title || "Producto de Mercado Libre").slice(0, 500);
    const price = Number(item.price);
    const originalPrice = Number(item.originalPrice) > 0 ? Number(item.originalPrice) : null;
    const currency = String(item.currency || "CLP").slice(0, 12);
    const permalink = String(item.permalink || "").slice(0, 2000);
    const thumbnail = String(item.thumbnail || "").slice(0, 2000) || null;
    const seller = String(item.seller || "").slice(0, 240) || null;
    const shipping = String(item.shipping || "").slice(0, 240) || null;
    return database.prepare(
      "INSERT INTO price_history (item_id, title, price, original_price, currency, permalink, thumbnail, seller, shipping, observed_at) " +
      "SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ? " +
      "WHERE NOT EXISTS (SELECT 1 FROM price_history WHERE item_id = ? AND price = ? AND observed_at >= ?)",
    ).bind(
      itemId,
      title,
      price,
      originalPrice,
      currency,
      permalink,
      thumbnail,
      seller,
      shipping,
      observedAt,
      itemId,
      price,
      cutoff,
    );
  });

  try {
    await database.batch(statements);
    return true;
  } catch (error) {
    return false;
  }
}

async function attachPriceHistorySummaries(env, results) {
  const database = getPriceDatabase(env);
  if (!database || !Array.isArray(results)) return results;
  const itemIds = [...new Set(results
    .filter((item) => item && String(item.id || "").trim())
    .map((item) => String(item.id).trim().slice(0, 160)))].slice(0, 12);
  if (!itemIds.length) return results;

  const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();
  try {
    const placeholders = itemIds.map(() => "?").join(",");
    const result = await database.prepare(
      "SELECT item_id AS itemId, price, observed_at AS at FROM price_history " +
      "WHERE item_id IN (" + placeholders + ") AND observed_at >= ? ORDER BY observed_at ASC",
    ).bind(...itemIds, cutoff).all();
    const grouped = Object.create(null);
    for (const row of (Array.isArray(result.results) ? result.results : [])) {
      const key = String(row.itemId || "");
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(row);
    }
    return results.map((item) => ({
      ...item,
      historySummary: buildPriceSummary(grouped[String(item && item.id || "")] || []),
    }));
  } catch (error) {
    return results;
  }
}

async function priceHistoryResponse(request, env) {
  const url = new URL(request.url);
  const itemId = (url.searchParams.get("item_id") || "").trim().slice(0, 160);
  if (!itemId) return json({ error: "Falta el identificador del producto." }, 400);

  const database = getPriceDatabase(env);
  if (!database) {
    return json({
      available: false,
      history: [],
      error: "El historial compartido todavía no está disponible.",
    }, 503);
  }

  const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();
  try {
    const result = await database.prepare(
      "SELECT item_id AS itemId, title, price, original_price AS originalPrice, currency, permalink, thumbnail, seller, shipping, observed_at AS at " +
      "FROM price_history WHERE item_id = ? AND observed_at >= ? ORDER BY observed_at ASC LIMIT 200",
    ).bind(itemId, cutoff).all();
    const history = Array.isArray(result.results) ? result.results : [];
    return json({
      available: true,
      item_id: itemId,
      history,
      summary: buildPriceSummary(history),
    });
  } catch (error) {
    return json({
      available: false,
      history: [],
      error: "No se pudo cargar el historial compartido.",
    }, 503);
  }
}

async function liveSearchResponse(env, body, status = 200, extraHeaders = {}) {
  await savePriceSnapshots(env, body && body.results);
  const fetchedAt = String((body && body.fetchedAt) || new Date().toISOString());
  const results = await attachPriceHistorySummaries(env, body && body.results);
  const safeResults = Array.isArray(results) ? results : [];
  return json({
    ...body,
    fetchedAt,
    results: safeResults.map((item) => ({ ...item, fetchedAt })),
  }, status, extraHeaders);
}

async function fetchCurrentSalePrice(itemId, headers) {
  const normalizedId = String(itemId || "").trim();
  if (!normalizedId) return null;
  const salePriceUrl = new URL("https://api.mercadolibre.com/items/" + encodeURIComponent(normalizedId) + "/sale_price");
  salePriceUrl.searchParams.set("context", "channel_marketplace");
  const salePrice = await fetchMercadoLibreJson(salePriceUrl, headers);
  if (!salePrice.response.ok || !salePrice.data || typeof salePrice.data !== "object") return null;
  const amount = numericValue(salePrice.data.amount);
  if (amount === null || amount <= 0) return null;
  return {
    price: amount,
    originalPrice: numericValue(salePrice.data.regular_amount),
    currency: String(salePrice.data.currency_id || "CLP"),
    referenceDate: String(salePrice.data.reference_date || ""),
  };
}

async function enrichMarketplaceResults(results, headers) {
  return Promise.all(results.map(async function(result) {
    if (hasPrice(result) || !result.id) return result;
    try {
      const salePrice = await fetchCurrentSalePrice(result.id, headers);
      if (!salePrice) return result;
      return {
        ...result,
        price: salePrice.price,
        originalPrice: result.originalPrice || salePrice.originalPrice,
        currency: salePrice.currency || result.currency,
      };
    } catch (error) {
      return result;
    }
  }));
}

function catalogPicture(product) {
  const pictures = Array.isArray(product && product.pictures) ? product.pictures : [];
  const picture = pictures[0];
  if (typeof picture === "string") return picture;
  return picture && (picture.secure_url || picture.url) ? String(picture.secure_url || picture.url) : "";
}

function nestedObjectSources(value, seen = new Set(), depth = 0) {
  if (!value || typeof value !== "object" || depth > 6 || seen.has(value)) return [];
  seen.add(value);
  const sources = [value];
  const nestedKeys = [
    "body", "data", "item", "result", "results", "items", "item_ids",
    "offer", "offers", "prices", "price", "sale_price", "current_price",
    "buy_box_winner", "attributes",
  ];
  for (const key of nestedKeys) {
    const nested = value[key];
    if (!nested || typeof nested !== "object") continue;
    if (Array.isArray(nested)) {
      for (const entry of nested) sources.push(...nestedObjectSources(entry, seen, depth + 1));
    } else {
      sources.push(...nestedObjectSources(nested, seen, depth + 1));
    }
  }
  return sources;
}

function firstPresentValue(objects, keys) {
  for (const object of objects) {
    for (const source of nestedObjectSources(object)) {
      for (const key of keys) {
        const value = source[key];
        if (value !== undefined && value !== null && value !== "") return value;
      }
    }
  }
  return null;
}

function numericValue(raw) {
  const value = raw && typeof raw === "object"
    ? (raw.amount !== undefined ? raw.amount : raw.value !== undefined ? raw.value : raw.number)
    : raw;
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const text = String(value).trim().replace(/[^0-9,.-]/g, "");
  if (!text) return null;
  const isDotThousands = /^-?\d{1,3}(\.\d{3})+$/.test(text);
  const isCommaThousands = /^-?\d{1,3}(,\d{3})+$/.test(text);
  const normalized = isDotThousands
    ? text.replace(/\./g, "")
    : isCommaThousands
      ? text.replace(/,/g, "")
      : text.includes(",") && text.includes(".")
        ? (text.lastIndexOf(",") > text.lastIndexOf(".")
          ? text.replace(/\./g, "").replace(",", ".")
          : text.replace(/,/g, ""))
        : text.includes(",")
          ? text.replace(",", ".")
          : text;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function firstNumberValue(objects, keys) {
  for (const object of objects) {
    for (const source of nestedObjectSources(object)) {
      for (const key of keys) {
        const number = numericValue(source[key]);
        if (number !== null) return number;
      }
    }
  }
  return null;
}

const CURRENT_PRICE_KEYS = ["price", "sale_price", "current_price", "base_price", "amount"];
const ORIGINAL_PRICE_KEYS = ["original_price", "regular_price", "list_price", "reference_price", "regular_amount"];

function hasPrice(value) {
  const price = firstNumberValue([value], CURRENT_PRICE_KEYS);
  return price !== null && price > 0;
}

function catalogItemCandidates(payload) {
  if (!payload) return [];
  const candidates = [];
  const seen = new Set();
  const visit = (value, depth = 0) => {
    if (value === null || value === undefined || depth > 7) return;
    if (typeof value === "string") {
      candidates.push(value);
      return;
    }
    if (typeof value !== "object" || seen.has(value)) return;
    seen.add(value);
    if (Array.isArray(value)) {
      value.forEach((entry) => visit(entry, depth + 1));
      return;
    }
    if (
      value.item_id || value.itemId || value.id || value.price != null ||
      value.sale_price != null || value.current_price != null || value.base_price != null
    ) candidates.push(value);
    for (const key of [
      "body", "data", "item", "result", "results", "items", "item_ids",
      "offer", "offers", "prices", "buy_box_winner",
    ]) visit(value[key], depth + 1);
  };
  visit(payload);
  return candidates;
}

function catalogItemId(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  for (const key of ["body", "item", "data", "result", "results", "items", "offers", "prices"]) {
    const nested = value[key];
    if (Array.isArray(nested)) {
      for (const entry of nested) {
        const nestedId = catalogItemId(entry);
        if (nestedId) return nestedId;
      }
    } else if (nested && typeof nested === "object") {
      const nestedId = catalogItemId(nested);
      if (nestedId) return nestedId;
    }
  }
  return String(value.item_id || value.itemId || value.id || "");
}

function normalizeMarketplaceResult(item) {
  const seller = item && item.seller;
  return {
    id: String((item && item.id) || ""),
    title: String((item && item.title) || "Producto de Mercado Libre"),
    price: firstNumberValue([item], CURRENT_PRICE_KEYS),
    originalPrice: firstNumberValue([item], ORIGINAL_PRICE_KEYS),
    currency: String((item && item.currency_id) || "CLP"),
    permalink: String((item && item.permalink) || ""),
    thumbnail: String((item && (item.thumbnail || item.secure_thumbnail)) || ""),
    condition: String((item && item.condition) || "new"),
    categoryId: String((item && item.category_id) || ""),
    seller: seller && (seller.nickname || seller.id) ? String(seller.nickname || seller.id) : "Vendedor Mercado Libre",
    shipping: item && item.shipping && item.shipping.free_shipping ? "Despacho gratis" : "Despacho según ubicación",
  };
}

function providerError(response, data, auth) {
  const tokenInvalid = response.status === 401;
  const permissionDenied = response.status === 403;
  const providerMessage = String(data.message || data.error_description || data.error || "").trim().slice(0, 240);
  const detail = tokenInvalid
    ? "El acceso temporal de Mercado Libre caducó. Pulsa «Conectar Mercado Libre» para autorizar la cuenta nuevamente."
    : permissionDenied
      ? "Mercado Libre bloqueó el buscador de catálogo para esta aplicación (403). La cuenta sí está autenticada; no es un problema del redirect ni de volver a conectar."
      : "Código de respuesta: " + response.status + ".";
  return providerMessage ? detail + " Respuesta: " + providerMessage : detail;
}

function normalizeCatalogResult(product, details, item, salePrice) {
  const winner = (details && details.buy_box_winner) || (product && product.buy_box_winner) || {};
  const sources = [item, salePrice, winner, details, product];
  const productId = product && product.id ? String(product.id) : "";
  const itemId = firstPresentValue(sources, ["id", "item_id", "itemId"]) || productId;
  const permalink = firstPresentValue(sources, ["permalink", "url"])
    || (productId ? "https://www.mercadolibre.cl/p/" + encodeURIComponent(productId) : "");
  const seller = firstPresentValue(sources, ["seller"]);
  const sellerValue = seller && typeof seller === "object" && (seller.nickname || seller.id)
    ? String(seller.nickname || seller.id)
    : firstPresentValue(sources, ["seller_id"])
      ? String(firstPresentValue(sources, ["seller_id"]))
      : "Catálogo Mercado Libre";
  return {
    id: String(itemId || productId),
    title: String((product && (product.name || product.title)) || (details && (details.name || details.title)) || "Producto de catálogo"),
    price: firstNumberValue(sources, CURRENT_PRICE_KEYS),
    originalPrice: firstNumberValue(sources, ORIGINAL_PRICE_KEYS),
    currency: String(firstPresentValue(sources, ["currency_id"]) || "CLP"),
    permalink,
    thumbnail: String(firstPresentValue(sources, ["thumbnail", "secure_thumbnail"]) || catalogPicture(details) || catalogPicture(product)),
    condition: String(firstPresentValue(sources, ["condition"]) || "new"),
    categoryId: String((product && (product.domain_id || product.category_id)) || ""),
    seller: sellerValue,
    shipping: firstPresentValue(sources, ["shipping"]) && firstPresentValue(sources, ["shipping"]).free_shipping ? "Despacho gratis" : "Despacho según ubicación",
  };
}

async function searchMarketplaceMercadoLibre(query, limit, headers) {
  const apiUrl = new URL("https://api.mercadolibre.com/sites/MLC/search");
  apiUrl.searchParams.set("q", query);
  apiUrl.searchParams.set("limit", String(limit));
  const attempts = [headers];
  let lastResult = null;
  let lastStatus = 0;
  let lastItemCount = 0;
  for (const attemptHeaders of attempts) {
    const marketplace = await fetchMercadoLibreJson(apiUrl, attemptHeaders);
    lastStatus = marketplace.response.status;
    if (!marketplace.response.ok) continue;
    const items = Array.isArray(marketplace.data.results) ? marketplace.data.results : [];
    lastItemCount = items.length;
    const results = await enrichMarketplaceResults(items.map(normalizeMarketplaceResult), headers);
    lastResult = {
      paging: marketplace.data.paging || null,
      results,
      hasPrices: results.some(hasPrice),
      status: marketplace.response.status,
      itemCount: items.length,
    };
    if (lastResult.hasPrices) return lastResult;
  }
  return lastResult || {
    paging: null,
    results: [],
    hasPrices: false,
    status: lastStatus,
    itemCount: lastItemCount,
  };
}

async function fetchCatalogItemsByIds(itemIds, headers) {
  if (!itemIds.length) return [];
  const itemsUrl = new URL("https://api.mercadolibre.com/items");
  itemsUrl.searchParams.set("ids", itemIds.slice(0, 20).join(","));
  const batch = await fetchMercadoLibreJson(itemsUrl, headers);
  if (!batch.response.ok) return [];
  return catalogItemCandidates(batch.data).filter((row) => row && typeof row === "object");
}

async function searchMercadoLibre(request, env) {
  const requestUrl = new URL(request.url);
  const query = (requestUrl.searchParams.get("q") || "").trim().slice(0, 100);
  const requestedLimit = Number(requestUrl.searchParams.get("limit") || 12);
  const limit = Math.min(Math.max(Number.isFinite(requestedLimit) ? requestedLimit : 12, 1), 12);

  if (!query) return json({ error: "Falta el término de búsqueda." }, 400);

  const headers = { accept: "application/json", "user-agent": "AhorraReal/1.0" };
  const auth = await getMercadoLibreAccess(request, env);
  if (auth.error) {
    const tokenError = String(auth.error || "rechazo del token").replace(/[^a-zA-Z0-9_.-]/g, " ").slice(0, 120).trim();
    return json({
      error: "Conecta Mercado Libre para buscar precios reales.",
      detail: "Mercado Libre exige una sesión autorizada para consultar publicaciones de otros vendedores. Pulsa «Conectar Mercado Libre» y vuelve a buscar. Respuesta: " + tokenError,
      reauthorize: true,
    }, 401);
  }
  if (!auth.token) {
    return json({
      error: "Conecta Mercado Libre para buscar precios reales.",
      detail: "Pulsa «Conectar Mercado Libre» y vuelve a buscar.",
      reauthorize: true,
    }, 401);
  }
  headers.authorization = "Bearer " + auth.token;

  let marketplace = null;
  let marketplaceError = "";
  try {
    marketplace = await searchMarketplaceMercadoLibre(query, limit, headers);
    if (marketplace && marketplace.hasPrices) {
      return liveSearchResponse(env, {
        live: true,
        source: "marketplace",
        query,
        fetchedAt: new Date().toISOString(),
        paging: marketplace.paging,
        results: marketplace.results,
      }, 200, auth.cookieBacked && auth.refreshToken ? { "set-cookie": setCookie("ML_REFRESH_TOKEN", auth.refreshToken, 15552000) } : {});
    }
  } catch (error) {
    marketplaceError = String(error && error.message || "error de red").slice(0, 120);
  }

  const apiUrl = new URL("https://api.mercadolibre.com/products/search");
  apiUrl.searchParams.set("status", "active");
  apiUrl.searchParams.set("site_id", "MLC");
  apiUrl.searchParams.set("q", query);
  apiUrl.searchParams.set("limit", String(limit));

  let catalog;
  try {
    catalog = await fetchMercadoLibreJson(apiUrl, headers);
  } catch (error) {
    return json({
      error: "No se pudo contactar a Mercado Libre.",
      detail: "El conector está activo, pero el servicio externo no respondió.",
    }, 502);
  }

  if (!catalog.response.ok) {
    const responseHeaders = catalog.response.status === 401
      ? { "set-cookie": setCookie("ML_REFRESH_TOKEN", "", 0) }
      : (auth.cookieBacked && auth.refreshToken ? { "set-cookie": setCookie("ML_REFRESH_TOKEN", auth.refreshToken, 15552000) } : {});
    return json({
      error: "Mercado Libre rechazó la búsqueda de catálogo.",
      detail: providerError(catalog.response, catalog.data, auth),
      reauthorize: catalog.response.status === 401,
    }, catalog.response.status, responseHeaders);
  }

  const products = Array.isArray(catalog.data.results) ? catalog.data.results.slice(0, limit) : [];
  const results = await Promise.all(products.map(async function(rawProduct) {
    const product = typeof rawProduct === "string" ? { id: rawProduct } : (rawProduct || {});
    let details = product;
    let item = null;
    let salePrice = null;
    const itemIds = [];
    const addItemCandidate = function(candidate) {
      const candidates = catalogItemCandidates(candidate);
      for (const entry of candidates) {
        const candidateId = catalogItemId(entry);
        if (candidateId && !itemIds.includes(candidateId)) itemIds.push(candidateId);
        if (entry && typeof entry === "object" && (!item || (!hasPrice(item) && hasPrice(entry)))) item = entry;
      }
    };
    if (product.id) {
      try {
        const detailUrl = new URL("https://api.mercadolibre.com/products/" + encodeURIComponent(String(product.id)));
        detailUrl.searchParams.set("site_id", "MLC");
        const detailResponse = await fetchMercadoLibreJson(detailUrl, headers);
        if (detailResponse.response.ok && detailResponse.data) details = detailResponse.data;
      } catch (error) {}
    }

    const winner = (details && details.buy_box_winner) || (product && product.buy_box_winner) || {};
    addItemCandidate(winner);
    if (product.id) {
      const itemRouteUrls = [
        "https://api.mercadolibre.com/products/" + encodeURIComponent(String(product.id)) + "/items",
        "https://api.mercadolibre.com/products/" + encodeURIComponent(String(product.id)) + "/items?site_id=MLC",
      ];
      for (const itemsUrl of itemRouteUrls) {
        try {
          const itemsResponse = await fetchMercadoLibreJson(itemsUrl, headers);
          if (itemsResponse.response.ok && itemsResponse.data) {
            catalogItemCandidates(itemsResponse.data).forEach(addItemCandidate);
            if (hasPrice(item)) break;
          }
        } catch (error) {}
      }
    }

    if (!hasPrice(item) && itemIds.length) {
      try {
        const batchItems = await fetchCatalogItemsByIds(itemIds, headers);
        batchItems.forEach(addItemCandidate);
      } catch (error) {}
    }

    for (const itemId of itemIds) {
      if (hasPrice(item)) break;
      try {
        const itemResponse = await fetchMercadoLibreJson("https://api.mercadolibre.com/items/" + encodeURIComponent(String(itemId)), headers);
        if (itemResponse.response.ok && itemResponse.data) {
          const fetchedCandidates = catalogItemCandidates(itemResponse.data);
          const fetched = fetchedCandidates.find(hasPrice) || fetchedCandidates[0];
          if (fetched) {
            item = typeof fetched === "string" ? { item_id: fetched } : fetched;
            if (hasPrice(item)) break;
          }
        }
      } catch (error) {}
    }

    if (!hasPrice(item) && product.id) {
      try {
        const directItemResponse = await fetchMercadoLibreJson("https://api.mercadolibre.com/items/" + encodeURIComponent(String(product.id)), headers);
        if (directItemResponse.response.ok && directItemResponse.data) {
          const directCandidates = catalogItemCandidates(directItemResponse.data);
          const directItem = directCandidates.find(hasPrice) || directCandidates[0];
          if (directItem) item = typeof directItem === "string" ? { item_id: directItem } : directItem;
        }
      } catch (error) {}
    }

    if (!hasPrice(item)) {
      const priceItemId = catalogItemId(item) || itemIds[0] || "";
      if (priceItemId) {
        try {
          salePrice = await fetchCurrentSalePrice(priceItemId, headers);
        } catch (error) {}
      }
    }
    return normalizeCatalogResult(product, details, item, salePrice);
  }));

  const pricedResults = results.filter(hasPrice);
  if (!pricedResults.length) {
    if (!auth.userBacked && auth.appToken) {
      return json({
        error: "Conecta Mercado Libre para buscar precios reales.",
        detail: "Mercado Libre está entregando el catálogo, pero exige autorización de una cuenta para exponer precios de publicaciones. Pulsa «Conectar Mercado Libre»; al volver, repetiremos esta búsqueda automáticamente.",
        reauthorize: true,
      }, 401);
    }
    const marketplaceStatus = marketplace && marketplace.status ? "HTTP " + marketplace.status : marketplaceError ? "error de red" : "sin respuesta";
    const catalogStatus = "HTTP " + catalog.response.status;
    const diagnostic = {
      query: query.slice(0, 80),
      auth: auth.userBacked ? "user" : "app",
      marketplaceStatus: marketplace ? marketplace.status : 0,
      marketplaceItems: marketplace ? marketplace.itemCount || 0 : 0,
      catalogStatus: catalog.response.status,
      catalogProducts: products.length,
      pricedResults: pricedResults.length,
    };
    console.log("ML_SEARCH_NO_PRICE", JSON.stringify(diagnostic));
    return json({
      error: "Mercado Libre encontró productos, pero no entregó precios verificables.",
      detail: "Tu cuenta está autenticada, pero la API de publicaciones respondió " + marketplaceStatus + " y el catálogo respondió " + catalogStatus + " con " + products.length + " productos sin precio. No es necesario reconectar: abre los resultados oficiales de Mercado Libre o inténtalo más tarde.",
    }, 502);
  }

  return liveSearchResponse(env, {
    live: true,
    source: "catalog",
    query,
    fetchedAt: new Date().toISOString(),
    paging: catalog.data.paging || null,
    results: pricedResults,
  }, 200, auth.cookieBacked && auth.refreshToken ? { "set-cookie": setCookie("ML_REFRESH_TOKEN", auth.refreshToken, 15552000) } : {});
}

export default {
  async fetch(request, env, ctx) {
    void ctx;
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204 });
    }

    if (url.pathname === "/api/mercadolibre/search") {
      return searchMercadoLibre(request, env);
    }

    if (url.pathname === "/api/history" && request.method === "GET") {
      return priceHistoryResponse(request, env);
    }

    if (url.pathname === "/api/mercadolibre/authorize") {
      return authorizeMercadoLibre(env);
    }

    if (url.pathname === "/" && url.searchParams.has("code")) {
      return handleMercadoLibreCallback(request, env);
    }

    if (url.pathname === "/favicon.svg") {
      return new Response(favicon, {
        headers: {
          "content-type": "image/svg+xml; charset=utf-8",
          "cache-control": "public, max-age=86400",
        },
      });
    }

    if (url.pathname !== "/") {
      return new Response("Not found", { status: 404 });
    }

    const hasMercadoLibreSession = Boolean(getCookie(request, "ML_REFRESH_TOKEN") || env.MERCADOLIBRE_ACCESS_TOKEN);
    const connectionCta = hasMercadoLibreSession
      ? '<a class="nav-cta nav-connected" href="#ofertas" id="connectionCta">Mercado Libre conectado</a>'
      : '<a class="nav-cta" href="/api/mercadolibre/authorize">Conectar Mercado Libre</a>';
    const renderedPage = page
      .replace(
        "</head>",
        historyStyles + "</head>",
      )
      .replace(
        "\n    <script>\n\n      let cards = [...document.querySelectorAll('.deal-card')];",
        historyMarkup + "\n    <script>\n\n      let cards = [...document.querySelectorAll('.deal-card')];",
      )
      .replace(
        "      let cards = [...document.querySelectorAll('.deal-card')];",
        historyClientScript + "\n      let cards = [...document.querySelectorAll('.deal-card')];",
      )
      .replace(
        '<a class="nav-cta" href="#alertas">Crear alerta</a>',
        connectionCta,
      )
      .replace(
        '        <div class="deal-layout">',
        '        <div class="live-results-toolbar" aria-label="Ordenar resultados"><label for="sortResults">Ordenar por</label><select id="sortResults"><option value="real">Ahorro real</option><option value="price">Precio más bajo</option><option value="recent">Más recientes</option></select></div>\n\n        <div class="deal-layout">',
      )
      .replace(
        '        <div class="hero-tools">',
        '        <form class="hero-tools" id="searchForm">',
      )
      .replace(
        '          <button class="primary" id="searchButton">Buscar ofertas</button>\n        </div>\n        <div class="trust-row"',
        '          <button class="primary" id="searchButton" type="submit">Buscar ofertas</button>\n        </form>\n        <div class="trust-row"',
      )
      .replace(
        '<div class="demo-note" id="sourceStatus">',
        '<div class="demo-note" id="sourceStatus" role="status" aria-live="polite">',
      )
      .replace(
        "if (!parsed.hostname.endsWith('mercadolibre.cl')) return '#';",
        "const host = parsed.hostname.toLowerCase();\n          const isMercadoLibreHost = host === 'mercadolibre.cl' || host.endsWith('.mercadolibre.cl') || host === 'mercadolibre.com' || host.endsWith('.mercadolibre.com');\n          if (!isMercadoLibreHost) return '#';",
      )
      .replace(
        "const response = await fetch('/api/mercadolibre/search?q=' + encodeURIComponent(query) + '&limit=12', {\n            headers: { accept: 'application/json' }\n          });",
        "const response = await fetch('/api/mercadolibre/search?q=' + encodeURIComponent(query) + '&limit=12', {\n            credentials: 'include',\n            headers: { accept: 'application/json' }\n          });",
      )
      .replace(
        "document.getElementById('searchButton').addEventListener('click', function() {\n        document.getElementById('ofertas').scrollIntoView({ behavior: 'smooth', block: 'start' });\n        searchMercadoLibre(search.value || 'lavadora');\n      });",
        "document.getElementById('searchForm').addEventListener('submit', function(event) {\n        event.preventDefault();\n        document.getElementById('ofertas').scrollIntoView({ behavior: 'smooth', block: 'start' });\n        searchMercadoLibre(search.value);\n      });",
      )
      .replace(
        "      search.addEventListener('keydown', function(event) {\n        if (event.key === 'Enter') {\n          event.preventDefault();\n          searchMercadoLibre(search.value);\n        }\n      });\n\n",
        "",
      )
      .replace(
        "renderDeals(payload.results || []);",
        "const liveResults = Array.isArray(payload.results) ? payload.results : [];\n          const pricedResults = liveResults.filter(function(item) { return item && Number(item.price) > 0; });\n          if (!pricedResults.length) {\n            renderSearchFallback(query, 'Mercado Libre no devolvió publicaciones con precio para esta búsqueda.');\n            setSourceStatus('Mercado Libre no devolvió publicaciones con precio. Abre los resultados oficiales para revisar la oferta.', 'error');\n            return;\n          }\n          renderDeals(pricedResults);\n          setSourceStatus('Datos en vivo · Mercado Libre · ' + pricedResults.length + ' resultados con precio', 'live');",
      )
      .replace(
        "setTimeout(function() { searchMercadoLibre('lavadora'); }, 450);",
        "",
      )
      .replace(
        /<div class="deal-grid" id="dealGrid">[\s\S]*?<div class="empty" id="empty">[\s\S]*?<\/div>/,
        '<div class="deal-grid" id="dealGrid"><div class="empty" id="empty" style="display:block">Busca un producto para ver precios reales de Mercado Libre.</div></div>',
      )
      .replace(
        "          setSourceStatus('Datos en vivo · Mercado Libre · ' + (payload.results || []).length + ' resultados', 'live');",
        "",
      )
      .replace(
        "Preparando conexión con Mercado Libre…",
        hasMercadoLibreSession ? "Mercado Libre conectado. Busca un producto para ver precios reales." : "Conecta Mercado Libre para ver precios reales.",
      )
      .replace(
        "No pudimos conectar con Mercado Libre. Mostrando la vista de demostración.",
        "No pudimos obtener precios de Mercado Libre. Intenta nuevamente en unos segundos.",
      )
      .replace(
        ".how { margin: 72px 0 64px;",
        ".how { margin: 72px auto 64px;",
      )
      .replace(
        ".how { margin: 48px 0; }",
        ".how { margin: 48px auto; }",
      )
      .replace(
        "let category = 'all';",
        "let category = 'all';\n      let searchSequence = 0;\n      const connected = new URLSearchParams(location.search).get('ml_connected') === '1';\n      let pendingSearch = '';\n      try { if (connected) pendingSearch = sessionStorage.getItem('pendingSearch') || ''; } catch (error) {}\n      if (connected) {\n        try { sessionStorage.removeItem('pendingSearch'); } catch (error) {}\n        setSourceStatus('Mercado Libre conectado. Busca un producto para ver precios reales.', 'live');\n        history.replaceState({}, '', location.pathname);\n        if (pendingSearch) setTimeout(function() { searchMercadoLibre(pendingSearch); }, 0);\n      }",
      )
      .replace(
        "      const dealGrid = document.getElementById('dealGrid');",
        "      const dealGrid = document.getElementById('dealGrid');\n      dealGrid.addEventListener('click', function(event) {\n        const card = event.target.closest('.live-card');\n        if (!card) return;\n        const item = liveItemsById[card.dataset.productId || ''];\n        if (!item) return;\n        if (event.target.closest('.history-trigger')) {\n          event.preventDefault();\n          openPriceHistory(item);\n          return;\n        }\n        if (event.target.closest('.watchlist-trigger')) {\n          event.preventDefault();\n          const watchButton = event.target.closest('.watchlist-trigger');\n          const saved = toggleWatchlist(item);\n          watchButton.classList.toggle('saved', saved);\n          watchButton.textContent = saved ? 'Guardado' : 'Guardar';\n          setSourceStatus(saved ? 'Producto guardado en este navegador.' : 'Seguimiento eliminado.', 'live');\n          return;\n        }\n        if (event.target.closest('a, button, img')) return;\n        openPriceHistory(item);\n      });\n      dealGrid.addEventListener('keydown', function(event) {\n        if (event.key !== 'Enter' && event.key !== ' ') return;\n        const card = event.target.closest('.live-card');\n        if (!card || event.target !== card) return;\n        const item = liveItemsById[card.dataset.productId || ''];\n        if (!item) return;\n        event.preventDefault();\n        openPriceHistory(item);\n      });",
      )
      .replace(
        "      dealGrid.addEventListener('click', function(event) {",
        "      const sortResults = document.getElementById('sortResults');\n      let currentLiveResults = [];\n      if (sortResults) sortResults.addEventListener('change', function() { if (currentLiveResults.length) renderDeals(currentLiveResults); });\n      dealGrid.addEventListener('click', function(event) {",
      )
      .replace(
        "      function categoryFor(title) {",
        "      function savingsFor(item) {\n        const current = Number(item && item.price || 0);\n        const previous = Number(item && item.originalPrice || 0);\n        return previous > current && current > 0 ? previous - current : 0;\n      }\n\n      function formatFreshness(value) {\n        const timestamp = Date.parse(value || '');\n        if (!Number.isFinite(timestamp)) return 'Actualizado ahora';\n        const elapsed = Math.max(0, Date.now() - timestamp);\n        const minutes = Math.floor(elapsed / 60000);\n        if (minutes < 1) return 'Actualizado ahora';\n        if (minutes < 60) return 'Actualizado hace ' + minutes + ' min';\n        const hours = Math.floor(minutes / 60);\n        if (hours < 24) return 'Actualizado hace ' + hours + (hours === 1 ? ' hora' : ' horas');\n        return 'Actualizado hace ' + Math.floor(hours / 24) + ' días';\n      }\n\n      function categoryFor(title) {",
      )
      .replace(
        "      function renderDeals(items) {",
        "      function renderSearchFallback(query, message, options) {\n        const searchUrl = safeHref('https://www.mercadolibre.cl/jm/search?as_word=' + encodeURIComponent(query || ''));\n        const reconnectMarkup = options && options.reauthorize ? '<a class=\"primary history-link\" href=\"/api/mercadolibre/authorize\">Conectar Mercado Libre</a>' : '';\n        dealGrid.innerHTML = '<div class=\"empty\" id=\"empty\" style=\"display:block\"><strong style=\"display:block;color:var(--paper);margin-bottom:8px\">' + escapeHtml(message || 'No se pudieron cargar precios verificables.') + '</strong><div class=\"fallback-actions\">' + reconnectMarkup + '<a class=\"secondary history-link\" href=\"' + searchUrl + '\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">Ver resultados oficiales ↗</a></div></div>';\n        cards = [];\n        empty = document.getElementById('empty');\n      }\n\n      function renderDeals(items) {",
      )
      .replace(
        "      function renderDeals(items) {\n        if (!items.length) {",
        "      function renderDeals(items) {\n        liveItemsById = Object.create(null);\n        items.forEach(function(item) {\n          if (item && item.id) {\n            liveItemsById[String(item.id)] = item;\n            recordPriceSnapshot(item);\n          }\n        });\n        if (!items.length) {",
      )
      .replace(
        "      function renderDeals(items) {\n        liveItemsById = Object.create(null);",
        "      function renderDeals(items) {\n        currentLiveResults = Array.isArray(items) ? items.slice() : [];\n        const sortKey = sortResults ? sortResults.value : 'real';\n        items = currentLiveResults.slice().sort(function(left, right) {\n          const leftPrice = Number(left && left.price || 0);\n          const rightPrice = Number(right && right.price || 0);\n          if (sortKey === 'price') return (leftPrice || Number.MAX_SAFE_INTEGER) - (rightPrice || Number.MAX_SAFE_INTEGER);\n          if (sortKey === 'recent') return (Date.parse(right && right.fetchedAt || '') || 0) - (Date.parse(left && left.fetchedAt || '') || 0);\n          return savingsFor(right) - savingsFor(left) || leftPrice - rightPrice;\n        });\n        liveItemsById = Object.create(null);",
      )
      .replace(
        "return '<article class=\"deal-card live-card\" data-category=\"' + categoryValue + '\" data-search=\"' + searchText + '\">' +",
        "const historySummary = item.historySummary && typeof item.historySummary === 'object' ? item.historySummary : null;\n          const historyLabel = historySummary && historySummary.assessment && historySummary.assessment.label ? String(historySummary.assessment.label) : 'Ver historial';\n          const historyWidth = historyLabel === 'Muy buen precio' ? 92 : historyLabel === 'Buen precio' ? 78 : historyLabel === 'Precio alto' ? 28 : 45;\n          return '<article class=\"deal-card live-card\" role=\"button\" tabindex=\"0\" data-product-id=\"' + escapeHtml(item.id || '') + '\" data-category=\"' + categoryValue + '\" data-search=\"' + searchText + '\">' +",
      )
      .replace(
        "          const discount = discountFor(item);\n          const badge = discount ? '−' + discount + '% publicado' : 'Precio actual';",
        "          const discount = discountFor(item);\n          const savings = savingsFor(item);\n          const savingsLabel = savings > 0 ? '<span class=\"savings\">Ahorras ' + formatPrice(savings) + '</span>' : '';\n          const freshnessLabel = formatFreshness(item.fetchedAt);\n          const watched = isWatched(item.id);\n          const watchClass = watched ? ' saved' : '';\n          const watchLabel = watched ? 'Guardado' : 'Guardar';\n          const badge = discount ? '−' + discount + '% publicado' : 'Precio actual';",
      )
      .replace(
        "'<div class=\"price-row\"><strong class=\"price\">' + formatPrice(item.price) + '</strong>' + oldPrice + '</div>' +",
        "'<div class=\"price-row\"><strong class=\"price\">' + formatPrice(item.price) + '</strong>' + oldPrice + savingsLabel + '</div>' +",
      )
      .replace(
        "'<div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i style=\"width:45%\"></i></span> Historial en construcción</div>' +\n            '<a class=\"card-action live-link\" href=\"' + href + '\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">Ver oferta ↗</a></div>' +",
        "'<div class=\"card-bottom\"><div class=\"score\"><span class=\"score-bar\"><i style=\"width:' + historyWidth + '%\"></i></span> ' + escapeHtml(historyLabel) + '</div>' +\n            '<div class=\"card-actions\"><button class=\"card-action history-trigger\" type=\"button\">Ver historial ↗</button>' +\n            '<button class=\"card-action watchlist-trigger' + watchClass + '\" type=\"button\">' + watchLabel + '</button>' +\n            '<a class=\"card-action live-link\" href=\"' + href + '\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">Ver oferta ↗</a></div></div>' +",
      )
      .replace(
        "'<div class=\"meta\" style=\"margin-top:13px\">Producto actualizado desde Mercado Libre · ' + escapeHtml(item.id || '') + '</div>' +",
        "'<div class=\"meta freshness\" style=\"margin-top:13px\">' + escapeHtml(freshnessLabel) + ' · Mercado Libre · ' + escapeHtml(item.id || '') + '</div>' +",
      )
      .replace(
        "      async function searchMercadoLibre(term) {",
        "      async function searchMercadoLibre(term) {",
      )
      .replace(
        "async function searchMercadoLibre(term) {\n        const query",
        "async function searchMercadoLibre(term) {\n        const searchId = ++searchSequence;\n        const query",
      )
      .replace(
        "          const response = await fetch('/api/mercadolibre/search?q=' + encodeURIComponent(query) + '&limit=12', {\n            credentials: 'include',\n            headers: { accept: 'application/json' }\n          });\n          const payload = await response.json().catch(function() { return {}; });",
        "          const response = await fetch('/api/mercadolibre/search?q=' + encodeURIComponent(query) + '&limit=12', {\n            credentials: 'include',\n            headers: { accept: 'application/json' }\n          });\n          const payload = await response.json().catch(function() { return {}; });\n          if (searchId !== searchSequence) return;",
      )
      .replace(
        "          if (!response.ok) {\n            const detail = payload.detail ? ' ' + payload.detail : '';\n            throw new Error((payload.error || 'Mercado Libre rechazó la consulta.') + detail);\n          }",
        "          if (!response.ok) {\n            if (response.status === 401 && payload.reauthorize) {\n              try { sessionStorage.setItem('pendingSearch', query); } catch (error) {}\n              renderSearchFallback(query, 'Mercado Libre requiere conectar tu cuenta para mostrar precios reales.', { reauthorize: true });\n              setSourceStatus('Conecta Mercado Libre para completar la búsqueda. Al volver, repetiremos «' + query + '».', 'error');\n              return;\n            }\n            const detail = payload.detail ? ' ' + payload.detail : '';\n            throw new Error((payload.error || 'Mercado Libre rechazó la consulta.') + detail);\n          }",
      )
      .replace(
        "        setSourceStatus('Buscando \"' + query + '\" en Mercado Libre…');",
        "        setSourceStatus('Buscando \"' + query + '\" en Mercado Libre…');\n        dealGrid.innerHTML = '<div class=\"empty\" id=\"empty\" style=\"display:block\">Buscando precios reales en Mercado Libre…</div>';\n        cards = [];\n        empty = document.getElementById('empty');",
      )
      .replace(
        "        } catch (error) {\n          setSourceStatus(error.message || 'No pudimos obtener precios de Mercado Libre. Intenta nuevamente en unos segundos.', 'error');\n        }",
        "        } catch (error) {\n          if (searchId !== searchSequence) return;\n          renderSearchFallback(query, error.message || 'No pudimos obtener precios reales de Mercado Libre.');\n          setSourceStatus(error.message || 'No pudimos obtener precios reales de Mercado Libre.', 'error');\n        }",
      )
      .replace(
        "searchMercadoLibre(search.value || 'lavadora');",
        "searchMercadoLibre(search.value);",
      );

    return new Response(renderedPage, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
};
