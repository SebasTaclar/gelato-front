import { createI18n } from 'vue-i18n'

export type SupportedLocale = 'es' | 'en'

const STORAGE_KEY = 'angelie_locale'

const messages = {
	es: {
		brand: {
			tagline: 'Elegancia y distinción'
		},
		nav: {
			about: 'Quiénes somos',
			portfolio: 'Portafolio',
			valueProposition: 'Propuestas de valor',
			contact: 'Contacto',
			store: 'Tienda',
			rings: 'Anillos',
			necklaces: 'Collares',
			earings: 'Aretes',
			bracelets: 'Pulseras',
			emeralds: 'Esmeraldas',
			offers: 'Ofertas',
		},
		auth: {
			access: 'Acceder',
			adminPanel: '⚙️ Panel Admin',
			logout: 'Cerrar sesión',
			hello: 'Hola, {name}'
		},
		banner: {
			tagline: 'Donde cada pieza cuenta una historia de elegancia y distinción',
			explore: 'EXPLORAR COLECCIÓN',
			learnMore: 'CONOCER MÁS',
			scrollDown: 'Desliza',
			logoAlt: 'Angelie Joyería'
		},
		visit: {
			title: 'Visítanos',
			subtitle: 'Brilla con Angelie: ven por tu próxima joya.',
			addressLabel: 'Dirección',
			phoneLabel: 'Teléfono',
			emailLabel: 'Correo',
			hoursLabel: 'Horarios'
		},
		footer: {
			description: 'Elegancia y distinción en cada pieza. Más de 10 años creando momentos inolvidables.',
			followUs: 'Síguenos',
			quickLinks: 'Enlaces Rápidos',
			customerSupport: 'Atención al Cliente',
			madeWith: 'Elegancia y distinción en cada pieza ✨',
			copyright: '© {year} Joyería Angelie. Todos los derechos reservados.',
			links: {
				products: 'Productos',
				categories: 'Categorías',
				testimonials: 'Testimonios',
				contact: 'Contacto',
				shippingPolicy: 'Política de Envíos',
				returns: 'Cambios y Devoluciones',
				faq: 'Preguntas Frecuentes',
				terms: 'Términos y Condiciones'
			},
			company: 'Empresa',
			documents: 'Documentos',
			contacts: 'Contactos',
			about: 'Quiénes Somos',
			portfolio: 'Portafolio',
			value: 'Propuesta de Valor',
			storeLink: 'Tienda',
			contactLink: 'Contacto',
			politicaCalidad: 'Política de Calidad',
			politicaInocuidad: 'Política de Inocuidad',
			terminosLegales: 'Términos Legales',
			politicaPrivacidad: 'Política de Privacidad',
			servicioCliente: 'Servicio al Cliente',
			serCliente: 'Ser cliente / Aliado',
			serProveedor: '¿Quieres ser proveedor?',
			trabajeNosotros: 'Trabaje con nosotros',
			contabilidad: 'Contabilidad',
			descriptionFooter: 'Fabricante colombiano de helados premium para marcas propias. 19 años de experiencia, tecnología italiana y vocación de exportación.',
			rights: '© 2026 ODA GELATO S.A.S. · Desarrollado por',
			privacy: 'Privacidad',
			termsLink: 'Términos'
		},
		whatsapp: {
			defaultMessage:
				'Hola, me gustaría información sobre sus productos y servicios.',
			floatLabel: 'Hablar por WhatsApp',
			ariaLabel: 'Contactar por WhatsApp',
		},
		store: {
			pickup: {
				title: 'Edificio Víctor Melo · Local 07',
				addressLine: 'Cl. 12 #6-10 · La Candelaria, Bogotá',
				hoursTitle: 'Horarios de atención',
				hours: {
					weekday: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
					saturday: 'Sábados: 9:00 AM - 2:00 PM',
					sunday: 'Domingos y festivos: Cerrado'
				}
			}
		},
		social: {
			instagramFollow: 'Síguenos en Instagram para ver más novedades',
			instagramLabel: 'Instagram'
		},
		checkout: {
			back: 'Volver a la tienda',
			title: 'Finalizar pedido',
			summaryTitle: 'Resumen del pedido',
			emptyCart: 'No hay productos en el carrito',
			goStore: 'Ir a la tienda',
			subtotal: 'Subtotal',
			shipping: 'Envío',
			shippingDeliveryValue: '$15,000',
			shippingPickupValue: 'Gratis',
			total: 'Total',
			continueShopping: 'Seguir comprando',
			contactTitle: 'Contacto',
			fullName: 'Nombre completo',
			fullNamePlaceholder: 'Escribe tu nombre',
			email: 'Correo electrónico',
			emailPlaceholder: 'ejemplo@correo.com',
			idNumber: 'Número de cédula',
			idNumberPlaceholder: 'Ejm: 1234567890',
			phone: 'Teléfono',
			phonePlaceholder: 'Ejm: 300 XXX XXXX',
			termsAcceptPrefix: 'He leído y acepto los',
			termsAcceptLink: 'términos y condiciones',
			deliveryTitle: 'Entrega',
			deliveryHome: 'Envío a domicilio',
			deliveryPickup: 'Recoger en tienda',
			address: 'Dirección',
			addressPlaceholder: 'Ejm: Calle 123 # XX-XX',
			city: 'Ciudad',
			cityPlaceholder: 'Escribe la ciudad de destino',
			deliveryPhone: 'Teléfono de entrega',
			pickupLocationTitle: 'Nuestra ubicación',
			confirm: 'Confirmar pedido',
			processing: 'Procesando…',
			errors: {
				nameRequired: 'El nombre es requerido',
				emailRequired: 'El correo electrónico es requerido',
				emailInvalid: 'Correo electrónico inválido',
				idRequired: 'El número de cédula es requerido',
				phoneRequired: 'El teléfono es requerido',
				addressRequired: 'La dirección es requerida',
				cityRequired: 'La ciudad es requerida',
				deliveryPhoneRequired: 'El teléfono de entrega es requerido',
				termsRequired: 'Debes aceptar los términos y condiciones'
			}
		},
		terms: {
			back: 'Volver',
			title: 'Términos y Condiciones',
			updated: 'Última actualización',
			accept: 'He leído y acepto'
		},
		termsPage: {
			sections: [
				{
					title: '1. Información general',
					paragraphs: [
						'Estos Términos y Condiciones regulan el uso del sitio web y la compra de productos ofrecidos por Joyería Angelie.',
						'Al navegar, registrarte o realizar una compra, aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.',
						'Podemos actualizar estos términos cuando sea necesario. La versión vigente será la publicada en esta página.'
					]
				},
				{
					title: '2. Productos',
					paragraphs: [
						'Las piezas publicadas pueden variar en color, brillo o tonalidad por iluminación, pantalla o procesos artesanales.',
						'La disponibilidad puede cambiar sin previo aviso. En caso de falta de stock, te contactaremos para ofrecer alternativas o gestionar la devolución.'
					],
					bullets: [
						'Las fotos son de referencia y buscan representar el producto lo mejor posible.',
						'Las medidas y descripciones pueden tener variaciones mínimas.'
					]
				},
				{
					title: '3. Precios y pagos',
					paragraphs: [
						'Los precios se muestran en pesos colombianos (COP) e incluyen los impuestos aplicables cuando corresponda.',
						'El pago puede procesarse mediante pasarelas de pago (por ejemplo, Wompi) y/o medios habilitados en el checkout. La confirmación del pedido depende de la validación del pago.'
					],
					bullets: [
						'Los pedidos confirmados respetan el precio mostrado al momento del pago.',
						'Podemos rechazar o anular pedidos por sospecha de fraude o inconsistencias en la información.'
					]
				},
				{
					title: '4. Envíos y recogida en tienda',
					paragraphs: [
						'El tiempo de entrega es estimado y puede variar por ciudad, transportadora, clima o eventos de fuerza mayor.',
						'Para recogida en tienda, recibirás confirmación cuando tu pedido esté listo. Es posible que solicitemos un documento para entregar el pedido.'
					],
					bullets: [
						'Revisa cuidadosamente tus datos de contacto y dirección para evitar retrasos.',
						'En caso de devolución por dirección incorrecta o ausencia, los costos asociados pueden aplicar.'
					]
				},
				{
					title: '5. Cambios, devoluciones y retracto',
					paragraphs: [
						'Si necesitas gestionar un cambio o devolución, contáctanos por nuestros canales oficiales para validar el caso y los pasos a seguir.',
						'Por higiene, algunas categorías (por ejemplo, aretes/piercings) y productos personalizados pueden no aplicar para cambios o devoluciones, salvo por defecto de fabricación.',
						'En compras a distancia, pueden aplicar derechos como el retracto según la normativa vigente y las condiciones del producto.'
					],
					bullets: [
						'Para cambios/devoluciones, el producto debe estar sin uso y en condiciones aptas para revisión.',
						'Los costos de envío asociados pueden variar según el motivo y el resultado de la validación.'
					]
				},
				{
					title: '6. Garantía',
					paragraphs: [
						'La garantía cubre defectos de fabricación bajo condiciones normales de uso.',
						'No cubre daños por mal uso, golpes, caídas, manipulación inadecuada, contacto con químicos o desgaste normal.'
					]
				},
				{
					title: '7. Datos personales',
					paragraphs: [
						'Usamos tus datos (por ejemplo, nombre, correo, dirección y teléfono) para procesar pedidos, coordinar entregas, soporte y comunicaciones relacionadas con tu compra.',
						'No compartimos información personal con terceros salvo cuando sea necesario para el pago o la entrega (pasarela de pago, transportadora) o por obligación legal.'
					]
				},
				{
					title: '8. Responsabilidad y uso del sitio',
					paragraphs: [
						'No garantizamos disponibilidad ininterrumpida del sitio. Podemos realizar mantenimientos o ajustes técnicos.',
						'La responsabilidad máxima relacionada con una compra no excederá el valor efectivamente pagado por el producto, salvo donde la ley indique lo contrario.'
					]
				}
			],
			contactTitle: 'Contacto',
			contactSubtitle: 'Si tienes preguntas sobre tu compra, cambios o garantía, escríbenos por nuestros canales oficiales.',
			pickupTitle: 'Recoger en tienda'
		},
		videos: {
			title: 'Videos',
			subtitle: 'Mira algunos de nuestros favoritos',
			viewOnTikTok: 'Ver en TikTok',
			clickToLoad: 'Click para cargar videos'
		},
		contact: {
			eyebrow: 'Contacto Comercial',
			title: 'Hablemos de',
			titleSpan: 'tu proyecto',
			desc: 'Cuéntanos tu idea y nuestro equipo comercial te acompañará en todo el proceso, desde el desarrollo del sabor hasta la entrega final.',
			emailLabel: 'Correo Comercial',
			whatsappLabel: 'WhatsApp',
			location1Label: 'Fabrica Cota',
			location1Address: 'Zona Franca Intexzona, Km. 1 via Siberia — Funza, Bodega 10, Cota, Cundinamarca',
			location2Label: 'Punto de distribución Bogotá',
			location2Address: '26a Sur22 Cra. 12I',
			mapLabel1: 'Fabrica Cota',
			mapLabel2: 'Punto de distribución Bogotá',
			formTitle: 'Solicitar Cotización',
			nombre: 'Nombre',
			empresa: 'Empresa',
			correo: 'Correo',
			telefono: 'Teléfono',
			nombrePlaceholder: 'Tu nombre completo',
			empresaPlaceholder: 'Nombre de tu empresa',
			correoPlaceholder: 'correo@empresa.com',
			telefonoPlaceholder: '+57 300 000 0000',
			queNecesitas: '¿Qué necesitas?',
			selectOption: 'Selecciona una opción',
			op1: 'Desarrollar mi marca de helado',
			op2: 'Maquila de producción',
			op3: 'Exportación / Distribución',
			op4: 'Desarrollo de nuevos sabores',
			op5: 'Información general',
			mensaje: 'Mensaje',
			mensajePlaceholder: 'Cuéntanos sobre tu proyecto, volumen estimado, mercado objetivo...',
			btnSubmit: 'Enviar Solicitud →',
			errorNombre: 'Completa este campo',
			errorCorreo: 'Completa este campo',
			errorCorreoInvalido: 'Correo no válido'
		},
		footerModal: {
			closeModal: 'Cerrar',
			enviando: 'Enviando…',
			sendMessage: 'Enviar Mensaje →',
			sendApplication: 'Enviar Postulación →',
			sendInfo: 'Enviar Información →',
			successTitle: '¡Mensaje enviado!',
			successDesc: 'Hemos recibido tu mensaje. Te contactaremos pronto.',
			successVacantesTitle: '¡Postulación enviada!',
			successVacantesDesc: 'Hemos recibido tu hoja de vida. Te contactaremos pronto.',
			successProveedorTitle: '¡Información enviada!',
			successProveedorDesc: 'Hemos recibido los datos de tu empresa. Te contactaremos pronto.'
		},
		vacantes: {
			subtitle: '¡Únete a nuestro equipo! Envíanos tu hoja de vida',
			nombre: 'Nombre completo',
			correo: 'Correo electrónico',
			telefono: 'Teléfono',
			hojaVida: 'Hoja de vida',
			presentacion: 'Breve presentación personal',
			nombrePlaceholder: 'Tu nombre completo',
			correoPlaceholder: 'correo@empresa.com',
			telefonoPlaceholder: '+57 300 000 0000',
			selectFile: 'Seleccionar archivo',
			presentacionPlaceholder: 'Cuéntanos sobre tu experiencia, habilidades y por qué quieres unirte a nuestro equipo...'
		},
		proveedor: {
			subtitle: 'Cuéntanos sobre tu producto o servicio',
			empresa: 'Nombre de la empresa',
			contacto: 'Persona de contacto',
			correo: 'Correo electrónico',
			telefono: 'Teléfono',
			web: 'Página web',
			descripcion: 'Descripción del producto / servicio',
			empresaPlaceholder: 'Nombre de tu empresa',
			contactoPlaceholder: 'Tu nombre completo',
			correoPlaceholder: 'correo@empresa.com',
			telefonoPlaceholder: '+57 300 000 0000',
			webPlaceholder: 'www.tuempresa.com',
			descripcionPlaceholder: 'Describe brevemente tu producto o servicio, presentaciones, capacidades, etc...'
		},
		stats: {
			years: 'años',
			yearsLabel: 'De experiencia en manufactura',
			capacityUnit: 'Millones de Litros',
			capacityLabel: 'Capacidad de producción anual',
			fda: 'FDA',
			fdaLabel: 'Habilitados para exportar a EE.UU.',
			tech: 'Tech',
			techLabel: 'Tecnología italiana de última generación',
			rnd: 'I+D',
			rndLabel: 'Laboratorio propio de desarrollo'
		},
		hero: {
			eyebrow: 'Fabricante Industrial · Helados de alta calidad',
			line0: 'Expertos en desarrollar<br>tu marca de helado',
			line1: 'Expertos en helados<br>de marca propia',
			line2: 'Expertos maquiladores<br>de helado',
			line3: 'Creamos la marca de helado<br>de tus sueños',
			line4: '<span class="cert-line">Certificados FDA ✓</span>',
			subtitle: '19 años fabricando helados premium para supermercados, restaurantes y distribuidores que quieren su propia marca sin asumir la complejidad de una planta industrial.',
			cta: 'Solicitar Cotización',
			statProductionLabel: 'Capacidad de Producción',
			statProductionVal: '<em>30 Millones de</em> Litros',
			statProductionDesc: 'de helado producidos al año',
			statYearsLabel: 'Trayectoria',
			statYearsVal: '<em>19</em> Años',
			statYearsDesc: 'de experiencia industrial',
			statCertLabel: 'Certificación',
			statCertVal: 'FDA <em>✓</em>',
			statCertDesc: 'Habilitados para exportar a USA',
			statTechLabel: 'Tecnología',
			statTechVal: '🇮🇹 <em>Italiana</em>',
			statTechDesc: 'Maquinaria de última generación'
		},
		value: {
			eyebrow: 'Propuesta de Valor',
			title1: 'Más que<br>manufactura.',
			title2: 'Un aliado<br>estratégico.',
			desc: 'Todo lo que necesitas para lanzar, crecer y consolidar tu marca de helado en el mercado.',
			statsYears: '19 años',
			statsDesc: 'De experiencia produciendo y comercializando helado en LATAM y Norte América',
			certEyebrow: 'Certificaciones',
			certTitle: 'Estándares que<br>respaldan tu marca',
			card1Title: 'Laboratorios Propios',
			card1Li1: 'Laboratorio de Investigación y Desarrollo',
			card1Li2: 'Laboratorio de Análisis Microbiológicos',
			card2Title: 'Desarrollo de Producto en Equipo',
			card2Desc: 'Co-creamos soluciones a la medida junto con nuestros clientes.',
			card3Title: 'Sustentabilidad y Empaque Responsable',
			card3Li1: 'Implementación de políticas de sustentabilidad',
			card3Li2: 'Soluciones de empaque con materiales reciclables 100%',
			card4Title: 'Buenas Prácticas y Certificaciones',
			card4Desc: 'Compromiso con la calidad, la inocuidad y la mejora continua.',
			cert1Title: 'FDA – Food & Drug Administration',
			cert1Desc: 'Habilitados para exportar a Estados Unidos',
			cert2Title: 'HACCP Certificado',
			cert2Desc: 'Control de puntos críticos en toda la cadena',
			cert3Title: 'FSSC 22000 — En proceso',
			cert3Desc: 'Certificación de inocuidad alimentaria global (Meta 2025)',
			cert4Title: 'Proveedores Locales Certificados',
			cert4Desc: 'Cadena de suministro sostenible y trazable',
			alliesLabel: 'Marcas que confían en ODA GELATO'
		},
		cta: {
			eyebrow: '¿LISTO PARA COMENZAR?',
			title: 'Desarrolla tu marca de helado<br>con <span>ODA GELATO</span>',
			subtitle: 'Sin inversión en planta. Sin complejidad operativa.<br>Solo tu marca, nuestro expertise y el helado de tus sueños.',
			cta1: 'Solicitar Cotización Ahora',
			cta2: 'WhatsApp Directo'
		},
		video: {
			eyebrow: 'Video Institucional',
			title: 'La fábrica detrás<br>de <span>tu marca</span>'
		},
		productStore: {
			eyebrow: 'Portafolio de Productos',
			title: 'Cada formato.<br><span class="store-title--blue">Tu marca.</span>',
			subtitle: 'Producimos todos los formatos de helado industrial que tu marca necesita, con las presentaciones que el mercado demanda.',
			searchPlaceholder: 'Buscar por nombre de la pieza...',
			searchAria: 'Buscar productos por nombre',
			clearAria: 'Limpiar búsqueda',
			prevAria: 'Anterior',
			nextAria: 'Siguiente',
			available: 'Disponible',
			comingSoon: 'Próximamente'
		},
		about: {
			eyebrow: '— ¿QUIÉNES SOMOS?',
			title1: 'Empoderamos marcas,',
			title2: 'dominamos el helado.',
			paragraph1: 'ODA Gelato es una compañía colombiana especializada en el desarrollo y producción de helados para marcas propias. Ayudamos a supermercados, distribuidores, restaurantes y emprendedores a lanzar y escalar sus marcas sin asumir la complejidad operativa de una planta de producción.',
			paragraph2: 'Con este compromiso, ODA GELATO S.A.S.  busca satisfacer la necesidad de sus clientes, contribuyendo   al bienestar del consumidor y fortaleciendo su posicionamiento en el sector de alimentos.',
			cta: 'Conoce más de nosotros'
		},
		categories: {
			privateLabel: 'Marca Propia',
			maquilaIndustrial: 'Maquila Industrial',
			aniosExperiencia: '19 Años de Experiencia',
			tecnologiaItaliana: 'Tecnología Italiana',
			exportUSA: 'Habilitados para exportar a USA',
			certificacionFDA: 'Certificación FDA',
			millonesLitros: '30 Millones de Litros al Año',
			laboratorioPropio: 'Laboratorio Propio',
			exploraCategoria: 'Explora esta categoría',
			verColeccion: 'VER COLECCIÓN',
			disenos: 'DISEÑOS'
		}
	},
	en: {
		brand: {
			tagline: 'Elegance and distinction'
		},
		nav: {
			about: 'About us',
			portfolio: 'Portfolio',
			valueProposition: 'Value proposition',
			contact: 'Contact',
			store: 'Shop',
			rings: 'Rings',
			necklaces: 'Necklaces',
			earings: 'Earrings',
			bracelets: 'Bracelets',
			emeralds: 'Emeralds',
			offers: 'Deals',
		},
		auth: {
			access: 'Sign in',
			adminPanel: '⚙️ Admin Panel',
			logout: 'Sign out',
			hello: 'Hi, {name}'
		},
		banner: {
			tagline: 'Where every piece tells a story of elegance and distinction',
			explore: 'EXPLORE COLLECTION',
			learnMore: 'LEARN MORE',
			scrollDown: 'Scroll',
			logoAlt: 'Angelie Jewelry'
		},
		visit: {
			title: 'Visit us',
			subtitle: 'Shine with Angelie: come find your next jewel.',
			addressLabel: 'Address',
			phoneLabel: 'Phone',
			emailLabel: 'Email',
			hoursLabel: 'Hours'
		},
		footer: {
			description: 'Elegance and distinction in every piece. More than 10 years creating unforgettable moments.',
			followUs: 'Follow us',
			quickLinks: 'Quick Links',
			customerSupport: 'Customer Support',
			madeWith: 'Elegance and distinction in every piece ✨',
			copyright: '© {year} Angelie Jewelry. All rights reserved.',
			links: {
				products: 'Products',
				categories: 'Categories',
				testimonials: 'Testimonials',
				contact: 'Contact',
				shippingPolicy: 'Shipping Policy',
				returns: 'Exchanges & Returns',
				faq: 'FAQ',
				terms: 'Terms & Conditions'
			},
			company: 'Company',
			documents: 'Documents',
			contacts: 'Contacts',
			about: 'About Us',
			portfolio: 'Portfolio',
			value: 'Value Proposition',
			storeLink: 'Shop',
			contactLink: 'Contact',
			politicaCalidad: 'Quality Policy',
			politicaInocuidad: 'Food Safety Policy',
			terminosLegales: 'Legal Terms',
			politicaPrivacidad: 'Privacy Policy',
			servicioCliente: 'Customer Service',
			serCliente: 'Be a Client / Partner',
			serProveedor: 'Want to be a supplier?',
			trabajeNosotros: 'Work with us',
			contabilidad: 'Accounting',
			descriptionFooter: 'Colombian manufacturer of premium private-label ice cream. 19 years of experience, Italian technology and export vocation.',
			rights: '© 2026 ODA GELATO S.A.S. · Developed by',
			privacy: 'Privacy',
			termsLink: 'Terms'
		},
		whatsapp: {
			defaultMessage:
				'Hello, I would like information about your products and services.',
			floatLabel: 'Chat on WhatsApp',
			ariaLabel: 'Contact us on WhatsApp',
		},
		store: {
			pickup: {
				title: 'Víctor Melo Building · Store 07',
				addressLine: 'Calle 12 #6-10 · La Candelaria, Bogotá',
				hoursTitle: 'Store hours',
				hours: {
					weekday: 'Mon - Fri: 9:00 AM - 6:00 PM',
					saturday: 'Saturdays: 9:00 AM - 2:00 PM',
					sunday: 'Sundays & holidays: Closed'
				}
			}
		},
		social: {
			instagramFollow: 'Follow us on Instagram for more news',
			instagramLabel: 'Instagram'
		},
		checkout: {
			back: 'Back to store',
			title: 'Checkout',
			summaryTitle: 'Order summary',
			emptyCart: 'Your cart is empty',
			goStore: 'Go to store',
			subtotal: 'Subtotal',
			shipping: 'Shipping',
			shippingDeliveryValue: '$15,000',
			shippingPickupValue: 'Free',
			total: 'Total',
			continueShopping: 'Continue shopping',
			contactTitle: 'Contact',
			fullName: 'Full name',
			fullNamePlaceholder: 'Type your name',
			email: 'Email',
			emailPlaceholder: 'name@email.com',
			idNumber: 'ID number',
			idNumberPlaceholder: 'e.g. 1234567890',
			phone: 'Phone',
			phonePlaceholder: 'e.g. +57 300 XXX XXXX',
			termsAcceptPrefix: 'I have read and accept the',
			termsAcceptLink: 'terms and conditions',
			deliveryTitle: 'Delivery',
			deliveryHome: 'Home delivery',
			deliveryPickup: 'Store pickup',
			address: 'Address',
			addressPlaceholder: 'e.g. Street 123 # XX-XX',
			city: 'City',
			cityPlaceholder: 'Type the destination city',
			deliveryPhone: 'Delivery phone',
			pickupLocationTitle: 'Pickup location',
			confirm: 'Place order',
			processing: 'Processing…',
			errors: {
				nameRequired: 'Name is required',
				emailRequired: 'Email is required',
				emailInvalid: 'Invalid email',
				idRequired: 'ID number is required',
				phoneRequired: 'Phone is required',
				addressRequired: 'Address is required',
				cityRequired: 'City is required',
				deliveryPhoneRequired: 'Delivery phone is required',
				termsRequired: 'You must accept the terms and conditions'
			}
		},
		terms: {
			back: 'Back',
			title: 'Terms & Conditions',
			updated: 'Last updated',
			accept: 'I have read and accept'
		},
		termsPage: {
			sections: [
				{
					title: '1. General information',
					paragraphs: [
						'These Terms & Conditions govern the use of the website and the purchase of products offered by Angelie Jewelry.',
						'By browsing, signing up, or placing an order, you agree to these terms. If you do not agree, please do not use the site.',
						'We may update these terms when needed. The current version is the one published on this page.'
					]
				},
				{
					title: '2. Products',
					paragraphs: [
						'Pieces may vary slightly in color, shine, or tone due to lighting, screens, or handmade processes.',
						'Availability may change without notice. If an item is out of stock, we will contact you to offer alternatives or issue a refund.'
					],
					bullets: [
						'Photos are for reference and aim to represent the item as accurately as possible.',
						'Measurements and descriptions may have minor variations.'
					]
				},
				{
					title: '3. Pricing and payments',
					paragraphs: [
						'Prices are shown in Colombian pesos (COP) and include applicable taxes when relevant.',
						'Payments may be processed through payment gateways (for example, Wompi) and/or the methods available at checkout. Order confirmation depends on payment validation.'
					],
					bullets: [
						'Confirmed orders keep the price displayed at the time of payment.',
						'We may reject or cancel orders due to suspected fraud or inconsistent information.'
					]
				},
				{
					title: '4. Shipping and store pickup',
					paragraphs: [
						'Delivery times are estimates and may vary by city, carrier, weather, or force majeure events.',
						'For store pickup, you will receive confirmation when your order is ready. We may request an ID to hand over the order.'
					],
					bullets: [
						'Please double-check your contact and address details to avoid delays.',
						'If a shipment is returned due to incorrect address or absence, related costs may apply.'
					]
				},
				{
					title: '5. Exchanges, returns and withdrawal rights',
					paragraphs: [
						'If you need an exchange or return, contact us through our official channels so we can validate the case and next steps.',
						'For hygiene reasons, some categories (for example earrings/piercings) and personalized products may not be eligible for exchanges/returns, except in case of manufacturing defects.',
						'Distance purchases may be subject to withdrawal/return rights as provided by applicable law and product conditions.'
					],
					bullets: [
						'Items must be unused and in a condition suitable for inspection.',
						'Shipping costs may vary depending on the reason and validation outcome.'
					]
				},
				{
					title: '6. Warranty',
					paragraphs: [
						'Warranty covers manufacturing defects under normal use conditions.',
						'It does not cover misuse, impacts, drops, improper handling, chemical exposure, or normal wear and tear.'
					]
				},
				{
					title: '7. Personal data',
					paragraphs: [
						'We use your data (for example name, email, address and phone) to process orders, coordinate deliveries, provide support and purchase-related communications.',
						'We do not share personal information with third parties except when necessary for payment or delivery (payment gateway, carrier) or where required by law.'
					]
				},
				{
					title: '8. Liability and site usage',
					paragraphs: [
						'We do not guarantee uninterrupted availability of the site. Maintenance or technical updates may occur.',
						'Maximum liability related to a purchase will not exceed the amount actually paid for the product, unless the law provides otherwise.'
					]
				}
			],
			contactTitle: 'Contact',
			contactSubtitle: 'If you have questions about your purchase, exchanges or warranty, contact us through our official channels.',
			pickupTitle: 'Store pickup'
		},
		videos: {
			title: 'Videos',
			subtitle: 'Watch some of our favorites',
			viewOnTikTok: 'View on TikTok',
			clickToLoad: 'Click to load videos'
		},
		contact: {
			eyebrow: 'Commercial Contact',
			title: "Let's talk about",
			titleSpan: 'your project',
			desc: 'Tell us your idea and our commercial team will guide you through the entire process, from flavor development to final delivery.',
			emailLabel: 'Commercial Email',
			whatsappLabel: 'WhatsApp',
			location1Label: 'Cota Factory',
			location1Address: 'Zona Franca Intexzona, Km. 1 via Siberia — Funza, Bodega 10, Cota, Cundinamarca',
			location2Label: 'Bogotá Distribution Point',
			location2Address: '26a Sur22 Cra. 12I',
			mapLabel1: 'Cota Factory',
			mapLabel2: 'Bogotá Distribution Point',
			formTitle: 'Request Quote',
			nombre: 'Name',
			empresa: 'Company',
			correo: 'Email',
			telefono: 'Phone',
			nombrePlaceholder: 'Your full name',
			empresaPlaceholder: 'Your company name',
			correoPlaceholder: 'email@company.com',
			telefonoPlaceholder: '+57 300 000 0000',
			queNecesitas: 'What do you need?',
			selectOption: 'Select an option',
			op1: 'Develop my ice cream brand',
			op2: 'Production outsourcing',
			op3: 'Export / Distribution',
			op4: 'New flavor development',
			op5: 'General information',
			mensaje: 'Message',
			mensajePlaceholder: 'Tell us about your project, estimated volume, target market...',
			btnSubmit: 'Send Request →',
			errorNombre: 'This field is required',
			errorCorreo: 'This field is required',
			errorCorreoInvalido: 'Invalid email'
		},
		footerModal: {
			closeModal: 'Close',
			enviando: 'Sending…',
			sendMessage: 'Send Message →',
			sendApplication: 'Send Application →',
			sendInfo: 'Send Information →',
			successTitle: 'Message sent!',
			successDesc: 'We received your message. We will contact you soon.',
			successVacantesTitle: 'Application sent!',
			successVacantesDesc: 'We received your resume. We will contact you soon.',
			successProveedorTitle: 'Information sent!',
			successProveedorDesc: 'We received your company information. We will contact you soon.'
		},
		vacantes: {
			subtitle: 'Join our team! Send us your resume',
			nombre: 'Full name',
			correo: 'Email',
			telefono: 'Phone',
			hojaVida: 'Resume',
			presentacion: 'Brief personal introduction',
			nombrePlaceholder: 'Your full name',
			correoPlaceholder: 'email@company.com',
			telefonoPlaceholder: '+57 300 000 0000',
			selectFile: 'Select file',
			presentacionPlaceholder: 'Tell us about your experience, skills and why you want to join our team...'
		},
		proveedor: {
			subtitle: 'Tell us about your product or service',
			empresa: 'Company name',
			contacto: 'Contact person',
			correo: 'Email',
			telefono: 'Phone',
			web: 'Website',
			descripcion: 'Product / service description',
			empresaPlaceholder: 'Your company name',
			contactoPlaceholder: 'Your full name',
			correoPlaceholder: 'email@company.com',
			telefonoPlaceholder: '+57 300 000 0000',
			webPlaceholder: 'www.yourcompany.com',
			descripcionPlaceholder: 'Briefly describe your product or service, presentations, capabilities, etc...'
		},
		stats: {
			years: 'years',
			yearsLabel: 'Years of manufacturing experience',
			capacityUnit: 'Millions of liters',
			capacityLabel: 'Annual production capacity',
			fda: 'FDA',
			fdaLabel: 'Certified to export to the USA',
			tech: 'Tech',
			techLabel: 'Latest generation Italian technology',
			rnd: 'R&D',
			rndLabel: 'In-house development laboratory'
		},
		hero: {
			eyebrow: 'Industrial Manufacturer · High quality ice cream',
			line0: 'Experts in developing<br>your ice cream brand',
			line1: 'Experts in private label<br>ice cream',
			line2: 'Experts in ice cream<br>co-packing',
			line3: 'We create the ice cream brand<br>of your dreams',
			line4: '<span class="cert-line">FDA Certified ✓</span>',
			subtitle: '19 years manufacturing premium ice cream for supermarkets, restaurants and distributors who want their own brand without the complexity of an industrial plant.',
			cta: 'Request Quote',
			statProductionLabel: 'Production Capacity',
			statProductionVal: '<em>30 Million</em> Liters',
			statProductionDesc: 'of ice cream produced per year',
			statYearsLabel: 'Track Record',
			statYearsVal: '<em>19</em> Years',
			statYearsDesc: 'of industrial experience',
			statCertLabel: 'Certification',
			statCertVal: 'FDA <em>✓</em>',
			statCertDesc: 'Certified to export to the USA',
			statTechLabel: 'Technology',
			statTechVal: '🇮🇹 <em>Italian</em>',
			statTechDesc: 'Latest generation machinery'
		},
		value: {
			eyebrow: 'Value Proposition',
			title1: 'More than<br>manufacturing.',
			title2: 'A strategic<br>partner.',
			desc: 'Everything you need to launch, grow and consolidate your ice cream brand in the market.',
			statsYears: '19 years',
			statsDesc: 'Of experience producing and commercializing ice cream in LATAM and North America',
			certEyebrow: 'Certifications',
			certTitle: 'Standards that<br>back your brand',
			card1Title: 'Own Laboratories',
			card1Li1: 'Research & Development Laboratory',
			card1Li2: 'Microbiological Analysis Laboratory',
			card2Title: 'Team Product Development',
			card2Desc: 'We co-create customized solutions together with our clients.',
			card3Title: 'Sustainability & Responsible Packaging',
			card3Li1: 'Implementation of sustainability policies',
			card3Li2: 'Packaging solutions with 100% recyclable materials',
			card4Title: 'Good Practices & Certifications',
			card4Desc: 'Commitment to quality, food safety and continuous improvement.',
			cert1Title: 'FDA – Food & Drug Administration',
			cert1Desc: 'Certified to export to the United States',
			cert2Title: 'HACCP Certified',
			cert2Desc: 'Critical control points throughout the chain',
			cert3Title: 'FSSC 22000 — In progress',
			cert3Desc: 'Global food safety certification (Target 2025)',
			cert4Title: 'Certified Local Suppliers',
			cert4Desc: 'Sustainable and traceable supply chain',
			alliesLabel: 'Brands that trust ODA GELATO'
		},
		cta: {
			eyebrow: 'READY TO GET STARTED?',
			title: 'Develop your ice cream brand<br>with <span>ODA GELATO</span>',
			subtitle: 'No plant investment. No operational complexity.<br>Just your brand, our expertise and the ice cream of your dreams.',
			cta1: 'Request Quote Now',
			cta2: 'Direct WhatsApp'
		},
		video: {
			eyebrow: 'Corporate Video',
			title: 'The factory behind<br>your <span>brand</span>'
		},
		productStore: {
			eyebrow: 'Product Portfolio',
			title: 'Every format.<br><span class="store-title--blue">Your brand.</span>',
			subtitle: 'We produce all the industrial ice cream formats your brand needs, with the presentations the market demands.',
			searchPlaceholder: 'Search by product name...',
			searchAria: 'Search products by name',
			clearAria: 'Clear search',
			prevAria: 'Previous',
			nextAria: 'Next',
			available: 'Available',
			comingSoon: 'Coming Soon'
		},
		about: {
			eyebrow: '— ABOUT US?',
			title1: 'We empower brands,',
			title2: 'we master ice cream.',
			paragraph1: 'ODA Gelato is a Colombian company specialized in the development and production of ice cream for private labels. We help supermarkets, distributors, restaurants and entrepreneurs launch and scale their brands without taking on the operational complexity of a production plant.',
			paragraph2: 'With this commitment, ODA GELATO S.A.S. seeks to satisfy the needs of its clients, contributing to consumer welfare and strengthening its positioning in the food sector.',
			cta: 'Learn more about us'
		},
		categories: {
			privateLabel: 'Private Label',
			maquilaIndustrial: 'Industrial Co-packing',
			aniosExperiencia: '19 Years of Experience',
			tecnologiaItaliana: 'Italian Technology',
			exportUSA: 'Certified to export to the USA',
			certificacionFDA: 'FDA Certification',
			millonesLitros: '30 Million Liters per Year',
			laboratorioPropio: 'In-house Laboratory',
			exploraCategoria: 'Explore this category',
			verColeccion: 'VIEW COLLECTION',
			disenos: 'DESIGNS'
		}
	}
} as const

function normalizeLocale(input: string | null | undefined): SupportedLocale {
	if (!input) return 'es'
	const value = input.toLowerCase()
	if (value.startsWith('en')) return 'en'
	return 'es'
}

export function getInitialLocale(): SupportedLocale {
	const storedRaw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
	if (storedRaw) return normalizeLocale(storedRaw)
	const browserRaw = typeof navigator !== 'undefined' ? navigator.language : null
	return normalizeLocale(browserRaw)
}

export function persistLocale(locale: SupportedLocale) {
	localStorage.setItem(STORAGE_KEY, locale)
}

export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: getInitialLocale(),
	fallbackLocale: 'es',
	messages
})
