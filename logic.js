// Translations
const translations = {
    ar: {
        logo: "ميني فري لانس",
        nav_home: "الرئيسية",
        nav_projects: "المشاريع",
        nav_freelancers: "المستقلين",
        nav_post: "نشر مشروع",
        hero_title: "منصة العمل الحر المصغرة",
        hero_subtitle: "اعثر على أفضل المستقلين لمشروعك أو اعرض مهاراتك وابدأ في الكسب",
        btn_browse: "تصفح المشاريع",
        btn_post: "نشر مشروع",
        stat_projects: "مشروع",
        stat_freelancers: "مستقل",
        stat_satisfaction: "رضا العملاء",
        section_projects: "المشاريع المتاحة",
        section_freelancers: "أفضل المستقلين",
        section_post: "نشر مشروع جديد",
        search_placeholder: "ابحث عن مشروع...",
        filter_all: "جميع الفئات",
        cat_web: "تطوير ويب",
        cat_design: "تصميم",
        cat_writing: "كتابة",
        cat_marketing: "تسويق",
        form_title: "عنوان المشروع",
        form_description: "وصف المشروع",
        form_budget: "الميزانية ($)",
        form_category: "الفئة",
        form_deadline: "الموعد النهائي",
        form_bid_amount: "مبلغ العرض ($)",
        form_bid_description: "وصف العرض",
        select_category: "اختر الفئة",
        placeholder_title: "أدخل عنوان المشروع",
        placeholder_description: "صف مشروعك بالتفصيل",
        placeholder_budget: "الميزانية المتوقعة",
        placeholder_bid_amount: "أدخل مبلغ العرض",
        placeholder_bid_description: "اشرح سبب كونك الخيار الأفضل",
        btn_submit: "نشر المشروع",
        btn_send: "إرسال العرض",
        modal_bid_title: "تقديم عرض",
        footer_title: "ميني فري لانس",
        footer_description: "منصة العمل الحر المصغرة لربط أصحاب المشاريع بالمستقلين المحترفين",
        footer_links: "روابط سريعة",
        footer_contact: "تواصل معنا",
        footer_copyright: "© 2026 ميني فري لانس. جميع الحقوق محفوظة",
        alert_bid_sent: "تم إرسال عرضك بنجاح!",
        alert_project_posted: "تم نشر مشروعك بنجاح!",
        modal_client: "العميل",
        modal_category: "الفئة",
        modal_budget: "الميزانية",
        modal_deadline: "الموعد النهائي",
        modal_description: "الوصف",
        modal_bids: "العروض المقدمة",
        modal_no_bids: "لا توجد عروض بعد",
        modal_submit_bid: "تقديم عرض"
    },
    en: {
        logo: "Mini Freelance",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_freelancers: "Freelancers",
        nav_post: "Post Project",
        hero_title: "Mini Freelance Platform",
        hero_subtitle: "Find the best freelancers for your project or showcase your skills and start earning",
        btn_browse: "Browse Projects",
        btn_post: "Post Project",
        stat_projects: "Projects",
        stat_freelancers: "Freelancers",
        stat_satisfaction: "Client Satisfaction",
        section_projects: "Available Projects",
        section_freelancers: "Top Freelancers",
        section_post: "Post New Project",
        search_placeholder: "Search for a project...",
        filter_all: "All Categories",
        cat_web: "Web Development",
        cat_design: "Design",
        cat_writing: "Writing",
        cat_marketing: "Marketing",
        form_title: "Project Title",
        form_description: "Project Description",
        form_budget: "Budget ($)",
        form_category: "Category",
        form_deadline: "Deadline",
        form_bid_amount: "Bid Amount ($)",
        form_bid_description: "Bid Description",
        select_category: "Select Category",
        placeholder_title: "Enter project title",
        placeholder_description: "Describe your project in detail",
        placeholder_budget: "Expected budget",
        placeholder_bid_amount: "Enter bid amount",
        placeholder_bid_description: "Explain why you're the best choice",
        btn_submit: "Post Project",
        btn_send: "Send Bid",
        modal_bid_title: "Submit Bid",
        footer_title: "Mini Freelance",
        footer_description: "Mini freelance platform to connect project owners with professional freelancers",
        footer_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_copyright: "© 2026 Mini Freelance. All rights reserved",
        alert_bid_sent: "Your bid has been sent successfully!",
        alert_project_posted: "Your project has been posted successfully!",
        modal_client: "Client",
        modal_category: "Category",
        modal_budget: "Budget",
        modal_deadline: "Deadline",
        modal_description: "Description",
        modal_bids: "Submitted Bids",
        modal_no_bids: "No bids yet",
        modal_submit_bid: "Submit Bid"
    }
};

// Sample Data
const projects = [
    {
        id: 1,
        title: {
            ar: "تصميم موقع إلكتروني للشركة",
            en: "Company Website Design"
        },
        description: {
            ar: "نحتاج إلى تصميم موقع إلكتروني احترافي لشركتنا مع واجهة مستخدم حديثة ومتجاوبة مع جميع الأجهزة.",
            en: "We need a professional website design for our company with a modern and responsive UI for all devices."
        },
        category: "web",
        budget: 500,
        deadline: "2026-07-15",
        bids: [],
        client: {
            ar: "شركة التقنية المتقدمة",
            en: "Advanced Tech Company"
        }
    },
    {
        id: 2,
        title: {
            ar: "تصميم شعار وهوية بصرية",
            en: "Logo and Visual Identity Design"
        },
        description: {
            ar: "البحث عن مصمم مبدع لإنشاء شعار وهوية بصرية كاملة لمشروع ناشئ في مجال التكنولوجيا.",
            en: "Looking for a creative designer to create a logo and complete visual identity for a tech startup."
        },
        category: "design",
        budget: 300,
        deadline: "2026-06-30",
        bids: [],
        client: {
            ar: "ستارت أب تك",
            en: "Tech Startup"
        }
    },
    {
        id: 3,
        title: {
            ar: "كتابة محتوى تسويقي",
            en: "Marketing Content Writing"
        },
        description: {
            ar: "نحتاج إلى كاتب محتوى محترف لكتابة مقالات ووصف منتجات لمتجر إلكتروني.",
            en: "We need a professional content writer to write articles and product descriptions for an online store."
        },
        category: "writing",
        budget: 200,
        deadline: "2026-07-01",
        bids: [],
        client: {
            ar: "متجر الأناقة",
            en: "Elegance Store"
        }
    },
    {
        id: 4,
        title: {
            ar: "تطوير تطبيق موبايل",
            en: "Mobile App Development"
        },
        description: {
            ar: "تطوير تطبيق موبايل لنظامي iOS و Android لمشروع توصيل طلبات.",
            en: "Develop a mobile app for iOS and Android for a delivery service project."
        },
        category: "web",
        budget: 1500,
        deadline: "2026-08-15",
        bids: [],
        client: {
            ar: "خدمات التوصيل السريع",
            en: "Fast Delivery Services"
        }
    },
    {
        id: 5,
        title: {
            ar: "حملة تسويقية على السوشيال ميديا",
            en: "Social Media Marketing Campaign"
        },
        description: {
            ar: "إدارة حملة تسويقية شاملة على منصات التواصل الاجتماعي لمدة شهر.",
            en: "Manage a comprehensive marketing campaign on social media platforms for one month."
        },
        category: "marketing",
        budget: 800,
        deadline: "2026-07-20",
        bids: [],
        client: {
            ar: "مطعم الذواقة",
            en: "Gourmet Restaurant"
        }
    },
    {
        id: 6,
        title: {
            ar: "تصميم واجهة مستخدم لتطبيق",
            en: "App UI Design"
        },
        description: {
            ar: "تصميم واجهة مستخدم عصرية وسهلة الاستخدام لتطبيق إدارة المهام.",
            en: "Design a modern and user-friendly interface for a task management app."
        },
        category: "design",
        budget: 400,
        deadline: "2026-07-10",
        bids: [],
        client: {
            ar: "تطبيقات ذكية",
            en: "Smart Apps"
        }
    }
];

const freelancers = [
    {
        id: 1,
        name: {
            ar: "أحمد محمد",
            en: "Ahmed Mohamed"
        },
        skills: {
            ar: ["تطوير ويب", "JavaScript", "React"],
            en: ["Web Development", "JavaScript", "React"]
        },
        rating: 4.8,
        rate: 50,
        completedProjects: 25
    },
    {
        id: 2,
        name: {
            ar: "سارة علي",
            en: "Sara Ali"
        },
        skills: {
            ar: ["تصميم جرافيك", "UI/UX", "Figma"],
            en: ["Graphic Design", "UI/UX", "Figma"]
        },
        rating: 4.9,
        rate: 45,
        completedProjects: 30
    },
    {
        id: 3,
        name: {
            ar: "خالد عبدالله",
            en: "Khaled Abdullah"
        },
        skills: {
            ar: ["كتابة محتوى", "SEO", "تسويق"],
            en: ["Content Writing", "SEO", "Marketing"]
        },
        rating: 4.7,
        rate: 35,
        completedProjects: 20
    },
    {
        id: 4,
        name: {
            ar: "نورة السالم",
            en: "Noura Al-Salem"
        },
        skills: {
            ar: ["تطوير موبايل", "Flutter", "Dart"],
            en: ["Mobile Development", "Flutter", "Dart"]
        },
        rating: 4.6,
        rate: 60,
        completedProjects: 15
    },
    {
        id: 5,
        name: {
            ar: "عمر حسن",
            en: "Omar Hassan"
        },
        skills: {
            ar: ["تسويق رقمي", "Social Media", "Google Ads"],
            en: ["Digital Marketing", "Social Media", "Google Ads"]
        },
        rating: 4.8,
        rate: 55,
        completedProjects: 22
    },
    {
        id: 6,
        name: {
            ar: "فاطمة أحمد",
            en: "Fatima Ahmed"
        },
        skills: {
            ar: ["تصميم شعارات", "Branding", "Illustrator"],
            en: ["Logo Design", "Branding", "Illustrator"]
        },
        rating: 4.9,
        rate: 40,
        completedProjects: 28
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const projectsGrid = document.getElementById('projectsGrid');
const freelancersGrid = document.getElementById('freelancersGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const projectForm = document.getElementById('projectForm');
const projectModal = document.getElementById('projectModal');
const bidModal = document.getElementById('bidModal');
const modalBody = document.getElementById('modalBody');
const bidForm = document.getElementById('bidForm');

let currentProjectId = null;
let currentLang = localStorage.getItem('lang') || 'ar';

// Initialize Language
function initLanguage() {
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';
    localStorage.setItem('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Re-render dynamic content
    renderProjects();
    renderFreelancers();
}

// Language Toggle
langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// Initialize with saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

// Render Projects
function renderProjects(filteredProjects = projects) {
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title[currentLang]}</h3>
            <span class="category">${getCategoryName(project.category)}</span>
            <p class="description">${project.description[currentLang]}</p>
            <div class="project-meta">
                <span class="budget">$${project.budget}</span>
                <span class="deadline">${currentLang === 'ar' ? 'الموعد: ' : 'Deadline: '}${formatDate(project.deadline)}</span>
            </div>
        `;
        card.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(card);
    });
}

// Render Freelancers
function renderFreelancers() {
    freelancersGrid.innerHTML = '';
    
    freelancers.forEach(freelancer => {
        const card = document.createElement('div');
        card.className = 'freelancer-card';
        card.innerHTML = `
            <div class="avatar">
                <i class="fa-solid fa-user"></i>
            </div>
            <h3>${freelancer.name[currentLang]}</h3>
            <div class="rating">
                ${generateStars(freelancer.rating)} (${freelancer.rating})
            </div>
            <div class="skills">
                ${freelancer.skills[currentLang].map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <p class="rate">$${freelancer.rate}/${currentLang === 'ar' ? 'ساعة' : 'hour'}</p>
            <p style="color: var(--text-secondary); font-size: 0.875rem;">${freelancer.completedProjects} ${currentLang === 'ar' ? 'مشروع مكتمل' : 'completed projects'}</p>
        `;
        freelancersGrid.appendChild(card);
    });
}

// Helper Functions
function getCategoryName(category) {
    const categories = {
        web: currentLang === 'ar' ? 'تطوير ويب' : 'Web Development',
        design: currentLang === 'ar' ? 'تصميم' : 'Design',
        writing: currentLang === 'ar' ? 'كتابة' : 'Writing',
        marketing: currentLang === 'ar' ? 'تسويق' : 'Marketing'
    };
    return categories[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    
    return stars;
}

// Search and Filter
searchInput.addEventListener('input', filterProjects);
categoryFilter.addEventListener('change', filterProjects);

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const filtered = projects.filter(project => {
        const title = project.title[currentLang].toLowerCase();
        const description = project.description[currentLang].toLowerCase();
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = !category || project.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderProjects(filtered);
}

// Project Modal
function openProjectModal(project) {
    currentProjectId = project.id;
    modalBody.innerHTML = `
        <h2>${project.title[currentLang]}</h2>
        <div class="modal-project-details">
            <p><strong>${translations[currentLang].modal_client}:</strong> ${project.client[currentLang]}</p>
            <p><strong>${translations[currentLang].modal_category}:</strong> ${getCategoryName(project.category)}</p>
            <p><strong>${translations[currentLang].modal_budget}:</strong> $${project.budget}</p>
            <p><strong>${translations[currentLang].modal_deadline}:</strong> ${formatDate(project.deadline)}</p>
            <p><strong>${translations[currentLang].modal_description}:</strong></p>
            <p>${project.description[currentLang]}</p>
        </div>
        <button class="btn btn-primary" onclick="openBidModal()">${translations[currentLang].modal_submit_bid}</button>
        <div class="bids-list">
            <h3>${translations[currentLang].modal_bids} (${project.bids.length})</h3>
            ${project.bids.length > 0 ? project.bids.map(bid => `
                <div class="bid-item">
                    <p class="bid-freelancer">${bid.freelancer}</p>
                    <p class="bid-amount">$${bid.amount}</p>
                    <p>${bid.description}</p>
                </div>
            `).join('') : `<p>${translations[currentLang].modal_no_bids}</p>`}
        </div>
    `;
    projectModal.style.display = 'block';
}

function openBidModal() {
    projectModal.style.display = 'none';
    bidModal.style.display = 'block';
}

// Close Modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        projectModal.style.display = 'none';
        bidModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
    if (e.target === bidModal) {
        bidModal.style.display = 'none';
    }
});

// Bid Form
bidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const amount = document.getElementById('bidAmount').value;
    const description = document.getElementById('bidDescription').value;
    
    const project = projects.find(p => p.id === currentProjectId);
    if (project) {
        project.bids.push({
            freelancer: currentLang === 'ar' ? "مستقل جديد" : "New Freelancer",
            amount: parseInt(amount),
            description: description
        });
        
        alert(translations[currentLang].alert_bid_sent);
        bidForm.reset();
        bidModal.style.display = 'none';
        openProjectModal(project);
    }
});

// Project Form
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProject = {
        id: projects.length + 1,
        title: {
            ar: document.getElementById('projectTitle').value,
            en: document.getElementById('projectTitle').value
        },
        description: {
            ar: document.getElementById('projectDescription').value,
            en: document.getElementById('projectDescription').value
        },
        category: document.getElementById('projectCategory').value,
        budget: parseInt(document.getElementById('projectBudget').value),
        deadline: document.getElementById('projectDeadline').value,
        bids: [],
        client: {
            ar: "أنت",
            en: "You"
        }
    };
    
    projects.unshift(newProject);
    renderProjects();
    projectForm.reset();
    
    alert(translations[currentLang].alert_project_posted);
    
    // Scroll to projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Save theme preference
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
});

// Initialize
initLanguage();
