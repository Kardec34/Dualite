import { createIcons, Smartphone, BookOpen, Pizza, Award, Rocket, Heart, Calendar, Gem, Star, Smile, Bike, MapPin, Phone, Clock, MessageCircle, CheckCircle2, Instagram, Facebook, Landmark, CreditCard, DollarSign } from 'lucide';

// --- Icon Replacement ---
createIcons({
  icons: {
    Smartphone, BookOpen, Pizza, Award, Rocket, Heart, Calendar, Gem, Star, Smile, Bike, MapPin, Phone, Clock, MessageCircle, CheckCircle2, Instagram, Facebook, Landmark, CreditCard, DollarSign
  }
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Sticky Header ---
    const header = document.getElementById('main-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }

    // --- Scroll Animations ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Testimonials Scrolling Columns ---
    const testimonials = [
      {
        text: "Simplesmente a melhor pizza que já comi! A massa é incrivelmente leve e o recheio é generoso. Virou tradição de sexta-feira!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/1.jpg",
        name: "Mariana Almeida",
        role: "Cliente de Itupeva",
      },
      {
        text: "20 anos de qualidade não é pra qualquer um. A Monte Carlo nunca decepciona. A de calabresa especial é divina!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/2.jpg",
        name: "Roberto Campos",
        role: "Cliente de Jundiaí",
      },
      {
        text: "O delivery é sempre rápido e a pizza chega quentinha, como se tivesse saído do forno agora. Atendimento impecável!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/3.jpg",
        name: "Juliana Costa",
        role: "Cliente de Indaiatuba",
      },
      {
        text: "A combinação da massa artesanal com ingredientes de primeira faz toda a diferença. É uma experiência gastronômica!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/4.jpg",
        name: "Fernando Oliveira",
        role: "Cliente de Itupeva",
      },
      {
        text: "Sou fiel há anos e nunca me arrependi. A pizza é saborosa, com preço justo. Já indiquei pra todos os meus amigos.",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/8.jpg",
        name: "Camila Mendes",
        role: "Cliente de Jundiaí",
      },
      {
        text: "A pizza de quatro queijos é a melhor da região, sem dúvidas. O sabor é equilibrado e a massa, perfeita. Recomendo!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/9.jpg",
        name: "Lucas Pereira",
        role: "Cliente de Itupeva",
      },
       {
        text: "Atendimento nota 1000! Desde o pedido até a entrega, tudo funciona perfeitamente. Vocês são demais!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/6.jpg",
        name: "Beatriz Lima",
        role: "Cliente de Indaiatuba",
      },
      {
        text: "A pizza doce de chocolate com morango é um espetáculo à parte. Sobremesa perfeita para fechar a noite.",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/7.jpg",
        name: "Thiago Souza",
        role: "Cliente de Jundiaí",
      },
      {
        text: "Qualidade que se mantém com o passar dos anos. A Monte Carlo é sinônimo de pizza boa na nossa cidade. Parabéns!",
        image: "https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/5.jpg",
        name: "Gabriela Santos",
        role: "Cliente de Itupeva",
      },
    ];

    const firstColumnData = testimonials.slice(0, 3);
    const secondColumnData = testimonials.slice(3, 6);
    const thirdColumnData = testimonials.slice(6, 9);

    const col1 = document.getElementById('testimonials-col-1');
    const col2 = document.getElementById('testimonials-col-2');
    const col3 = document.getElementById('testimonials-col-3');

    const createTestimonialCard = ({ text, image, name, role }) => {
        return `
            <div class="bg-premium-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-xs w-full text-left">
                <p class="text-gray-700 font-body text-base">"${text}"</p>
                <div class="flex items-center gap-3 mt-5">
                    <img width="40" height="40" src="${image}" alt="${name}" class="h-10 w-10 rounded-full object-cover">
                    <div class="flex flex-col">
                        <div class="font-sans font-bold tracking-tight text-deep-black">${name}</div>
                        <div class="text-sm text-gray-500 tracking-tight">${role}</div>
                    </div>
                </div>
            </div>
        `;
    };
    
    const populateColumn = (columnElement, data, animationDuration) => {
        if (!columnElement) return;

        const content = document.createElement('div');
        content.className = 'flex flex-col gap-6 animate-marquee-y';
        content.style.animationDuration = animationDuration;

        // Duplicate content for seamless loop
        const allData = [...data, ...data];
        content.innerHTML = allData.map(createTestimonialCard).join('');
        
        columnElement.appendChild(content);
    };

    populateColumn(col1, firstColumnData, '40s');
    populateColumn(col2, secondColumnData, '50s');
    populateColumn(col3, thirdColumnData, '45s');
});
