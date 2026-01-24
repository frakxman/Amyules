
            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // Navbar scroll effect
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

            // Parallax effect for hero background
            const heroBg = document.querySelector('.hero-bg');
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            });

            // Scroll reveal animation
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOnScroll = () => {
                reveals.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Initial check

            // Form submission
            // const form = document.querySelector('form');
            // form.addEventListener('submit', (e) => {
            //     e.preventDefault();
            //     alert('Gracias por su interés. Nos pondremos en contacto con usted en breve para agendar su consulta privada.');
            //     form.reset();
            // });
            // Formulario de contacto - Envío a WhatsApp (versión mejorada)
            // const contactForm = document.getElementById('contactForm');

            // if (contactForm) {
            //     contactForm.addEventListener('submit', function(e) {
            //         e.preventDefault();
                    
            //         // Deshabilitar el botón para evitar múltiples envíos
            //         const submitButton = this.querySelector('button[type="submit"]');
            //         const originalText = submitButton.textContent;
            //         submitButton.textContent = 'Preparando mensaje...';
            //         submitButton.disabled = true;
                    
            //         // Obtener valores del formulario
            //         const nombre = document.getElementById('nombre').value.trim();
            //         const email = document.getElementById('email').value.trim();
            //         const telefono = document.getElementById('telefono').value.trim();
            //         const tipoEvento = document.getElementById('tipoEvento').value;
            //         const mensaje = document.getElementById('mensaje').value.trim();
                    
            //         // Validaciones
            //         let errors = [];
                    
            //         if (!nombre) errors.push('• Nombre completo');
            //         if (!email) errors.push('• Correo electrónico');
            //         if (!telefono) errors.push('• Teléfono');
            //         if (!tipoEvento) errors.push('• Tipo de evento');
                    
            //         // Validar formato de email
            //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            //         if (email && !emailRegex.test(email)) {
            //             errors.push('• Correo electrónico inválido');
            //         }
                    
            //         // Mostrar errores si hay
            //         if (errors.length > 0) {
            //             alert(`Por favor complete correctamente los siguientes campos:\n\n${errors.join('\n')}`);
            //             submitButton.textContent = originalText;
            //             submitButton.disabled = false;
            //             return;
            //         }
                    
            //         // Formatear fecha actual
            //         const now = new Date();
            //         const fechaSolicitud = now.toLocaleDateString('es-ES', {
            //             day: '2-digit',
            //             month: '2-digit',
            //             year: 'numeric',
            //             hour: '2-digit',
            //             minute: '2-digit'
            //         });
                    
            //         // Formatear el mensaje para WhatsApp
            //         const whatsappMessage = `🌟 *SOLICITUD DE VISITA - MAISON AMYULES* 🌟
                    
            //         📅 *Fecha de Solicitud:* ${fechaSolicitud}

            //         👤 *Información del Cliente:*
            //         ├ *Nombre:* ${nombre}
            //         ├ *Email:* ${email}
            //         ├ *Teléfono:* ${telefono}
            //         └ *Tipo de Evento:* ${tipoEvento}

            //         💫 *Descripción del Evento:*
            //         ${mensaje ? `"${mensaje}"` : 'El cliente no proporcionó detalles adicionales.'}

            //         🎯 *Objetivo:* Agendar visita de planificación y cotización.

            //         📞 *Contacto Preferido:* WhatsApp / ${telefono}

            //         ---
            //         *Este mensaje fue enviado desde el sitio web de Maison Amyules.*`;

            //         // Codificar el mensaje para URL
            //         const encodedMessage = encodeURIComponent(whatsappMessage);
                    
            //         // Números de WhatsApp disponibles (usar el primero disponible)
            //         const whatsappNumbers = [
            //             '573142243377', // Número principal
            //             '573209934904'  // Número secundario (del footer)
            //         ];
                    
            //         // Usar el primer número
            //         const whatsappNumber = whatsappNumbers[0];
                    
            //         // Crear la URL de WhatsApp
            //         const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                    
            //         // Restaurar el botón
            //         submitButton.textContent = originalText;
            //         submitButton.disabled = false;
                    
            //         // Abrir WhatsApp
            //         setTimeout(() => {
            //             window.open(whatsappURL, '_blank');
                        
            //             // Mostrar mensaje de confirmación
            //             alert(`✅ Solicitud preparada correctamente.\n\nSe abrirá WhatsApp para que envíe su mensaje. Si no se abre automáticamente, por favor envíe el mensaje manualmente al número: +57 ${whatsappNumber}`);
                        
            //             // Limpiar el formulario
            //             contactForm.reset();
            //         }, 500);
            //     });
            // }

            // ================= FORMULARIO WHATSAPP =================
const contactForm = document.getElementById('contactForm');
const numeroWhatsApp = '573142243377';

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Obtener datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            tipoEvento: document.getElementById('tipoEvento').value,
            mensaje: document.getElementById('mensaje').value.trim()
        };
        
        // 2. Validaciones básicas
        let errores = [];
        if (!formData.nombre) errores.push('• Nombre completo');
        if (!formData.email) errores.push('• Correo electrónico');
        if (!formData.telefono) errores.push('• Teléfono');
        if (!formData.tipoEvento) errores.push('• Tipo de evento');
        
        if (errores.length > 0) {
            alert(`Por favor complete los siguientes campos:\n\n${errores.join('\n')}`);
            return;
        }
        
        // 3. Crear mensaje para WhatsApp
        const mensajeWhatsApp = `*NUEVA SOLICITUD - MAISON AMYULES*%0A%0A` +
                               `*Nombre:* ${formData.nombre}%0A` +
                               `*Email:* ${formData.email}%0A` +
                               `*Teléfono:* ${formData.telefono}%0A` +
                               `*Tipo de Evento:* ${formData.tipoEvento}%0A` +
                               `*Mensaje:* ${formData.mensaje || 'No especificado'}%0A%0A` +
                               `*Fecha:* ${new Date().toLocaleDateString('es-ES')}`;
        
        // 4. Crear URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
        
        // 5. Mostrar overlay con opciones (REEMPLAZA el alert anterior)
        mostrarOverlayWhatsApp(urlWhatsApp, formData);
    });
}

// Función para mostrar el overlay - REEMPLAZA LA FUNCIÓN ANTERIOR
function mostrarOverlayWhatsApp(urlWhatsApp, formData) {
    // Crear el overlay
    const overlay = document.createElement('div');
    overlay.innerHTML = `
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div class="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-lg p-6 max-w-md mx-4">
                <div class="text-center mb-6">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                        <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                            <path d="M20.52 3.449C12.05-2.867 2.089-.968 2.089-.968c-.9.205-1.92.825-2.02 1.785C.045 2.148 0 2.6 0 3.064 0 3.527.045 3.98.07 4.434c.4 6.643 3.217 11.586 7.875 14.512L6.38 23.544c.27.49.63.919 1.065 1.265.45.346.96.6 1.5.75.54.15 1.11.195 1.665.135.555-.06 1.095-.225 1.59-.495l3.93-2.265c3.106.75 6.33.225 9.12-1.5 5.25-3.3 7.8-9.75 6.075-15.6-.705-2.43-2.205-4.5-4.245-5.985z"/>
                        </svg>
                    </div>
                    <h3 class="font-display text-xl text-white mb-2">¡Listo para enviar!</h3>
                    <p class="text-gray-300 mb-4">Su mensaje ha sido preparado para WhatsApp</p>
                </div>
                
                <div class="space-y-4">
                    <button id="btnWhatsAppWeb" 
                            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                        </svg>
                        Abrir WhatsApp Web
                    </button>
                    
                    <button id="btnWhatsAppMobile" 
                            class="w-full bg-[#D4AF37] hover:bg-[#c19b2c] text-dark py-3 rounded-lg font-semibold transition">
                        Abrir WhatsApp en Móvil
                    </button>
                    
                    <div class="text-center mt-4">
                        <button id="btnCopiarMensaje" 
                                class="text-gray-400 hover:text-[#D4AF37] text-sm">
                            📋 Copiar mensaje para enviar manualmente
                        </button>
                    </div>
                </div>
                
                <button id="btnCerrarOverlay" 
                        class="absolute top-4 right-4 text-gray-400 hover:text-white">
                    ✕
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Configurar event listeners
    setTimeout(() => {
        document.getElementById('btnWhatsAppWeb').addEventListener('click', () => {
            window.open(urlWhatsApp, '_blank');
            cerrarOverlay();
        });
        
        document.getElementById('btnWhatsAppMobile').addEventListener('click', () => {
            // URL especial para móvil
            const urlMobile = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeWhatsApp}`;
            window.location.href = urlMobile;
            cerrarOverlay();
        });
        
        document.getElementById('btnCopiarMensaje').addEventListener('click', () => {
            const mensajeTexto = decodeURIComponent(mensajeWhatsApp.replace(/%0A/g, '\n'));
            navigator.clipboard.writeText(mensajeTexto).then(() => {
                alert('✅ Mensaje copiado al portapapeles. Pégalo en WhatsApp.');
            });
        });
        
        document.getElementById('btnCerrarOverlay').addEventListener('click', cerrarOverlay);
        
        // Cerrar al hacer clic fuera del modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay.firstChild) {
                cerrarOverlay();
            }
        });
    }, 10);
}

function cerrarOverlay() {
    const overlay = document.querySelector('.fixed.inset-0.z-\\[100\\]');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
        
        // Limpiar el formulario solo si se envió correctamente
        if (contactForm) {
            contactForm.reset();
        }
    }
}

// También debes actualizar el HTML del formulario para tener los IDs correctos:
// <form id="contactForm"> y cada input con su id correspondiente

            // Add stagger animation to service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });

            // Add stagger animation to gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
            });

            const galleryData = {
                "boda-imperial": {
                    title: "Boda Imperial",
                    sections: [
                        {
                            title: "Salón & Decoración",
                            images: [
                                "https://picsum.photos/800/500?1",
                                "https://picsum.photos/800/500?2"
                            ]
                        },
                        {
                            title: "Mesa Principal",
                            images: [
                                "https://picsum.photos/800/500?3"
                            ]
                        }
                    ]
                },
                "quince-sofia": {
                    title: "Quinceañera Sofía",
                    sections: [
                        {
                            title: "Decoración General",
                            images: [
                                "https://picsum.photos/800/500?4",
                                "https://picsum.photos/800/500?5"
                            ]
                        }
                    ]
                }
            };

            // ================= GALLERY MODAL + CAROUSEL =================

            const modal = document.getElementById('galleryModal');
            const modalImage = document.getElementById('galleryImage');
            const closeGallery = document.getElementById('closeGallery');
            const nextBtn = document.getElementById('nextImage');
            const prevBtn = document.getElementById('prevImage');

            let currentGallery = [];
            let currentIndex = 0;

            function updateImage() {
                modalImage.classList.remove('opacity-100');
                modalImage.classList.add('opacity-0');

                const img = new Image();
                img.src = currentGallery[currentIndex];

                img.onload = () => {
                    setTimeout(() => {
                        modalImage.src = img.src;
                        modalImage.classList.remove('opacity-0');
                        modalImage.classList.add('opacity-100');
                        updateDots && updateDots();
                    }, 100);
                };
            }

            function preloadGallery(images) {
                images.forEach(src => {
                    const img = new Image();
                    img.src = src;
                });
            }


            // Gallery image sets (replace with real images later)
            const galleries = {
                boda: [
                    'https://picsum.photos/1200/800?1',
                    'https://picsum.photos/1200/800?2',
                    'https://picsum.photos/1200/800?3',
                    'https://picsum.photos/1200/800?4',
                    'https://picsum.photos/1200/800?5'
                ],
                15: [
                    'https://picsum.photos/1200/800?6',
                    'https://picsum.photos/1200/800?7',
                    'https://picsum.photos/1200/800?8',
                    'https://picsum.photos/1200/800?9',
                    'https://picsum.photos/1200/800?10'
                ],
                gala: [
                    'https://picsum.photos/1200/800?11',
                    'https://picsum.photos/1200/800?12',
                    'https://picsum.photos/1200/800?13',
                    'https://picsum.photos/1200/800?14',
                    'https://picsum.photos/1200/800?15'
                ],
                aniversario: [
                    'https://picsum.photos/1200/800?16',
                    'https://picsum.photos/1200/800?17',
                    'https://picsum.photos/1200/800?18',
                    'https://picsum.photos/1200/800?19',
                    'https://picsum.photos/1200/800?20'
                ],
                detalles: [
                    'https://picsum.photos/1200/800?21',
                    'https://picsum.photos/1200/800?22',
                    'https://picsum.photos/1200/800?23',
                    'https://picsum.photos/1200/800?24',
                    'https://picsum.photos/1200/800?25'
                ],
                graduacion: [
                    'https://picsum.photos/1200/800?26',
                    'https://picsum.photos/1200/800?27',
                    'https://picsum.photos/1200/800?28',
                    'https://picsum.photos/1200/800?29',
                    'https://picsum.photos/1200/800?30'
                ]
            };

            // Open modal
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const key = item.dataset.gallery;
                    currentGallery = galleries[key];
                    currentIndex = 0;

                    preloadGallery(currentGallery); // 👈 PRE-CARGA COMPLETA
                    updateImage();

                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                });
            });


            // Controls
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % currentGallery.length;
                updateImage();
            });

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
                updateImage();
            });

            // Close modal
            closeGallery.addEventListener('click', closeModal);
            modal.addEventListener('click', e => {
                if (e.target === modal) closeModal();
            });

            function closeModal() {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }