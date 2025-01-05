// --------------<< function >>-------------
function show(element) {
    element.classList.add('show');
    element.classList.remove('hidden'); 
}

function hidden(element) {
    element.classList.add('hidden');
    element.classList.remove('show'); 
}

function toggle(elementClick, elementToggle) {
    elementClick.addEventListener('click', () => {
        // Lấy trạng thái hiện tại của aria-expanded
        const isExpanded = elementClick.getAttribute('aria-expanded') === 'true';
    
        // Đảo trạng thái aria-expanded
        elementClick.setAttribute('aria-expanded', !isExpanded);
    
        // Hiển thị/ẩn courses
        if (isExpanded) {
            hidden(elementToggle);
        } else {
            show(elementToggle);
        }
    });
    
    document.addEventListener('click', (event) => {
        if (!elementClick.contains(event.target) && !elementToggle.contains(event.target)) {
            hidden(elementToggle);
            elementClick.setAttribute('aria-expanded', 'false');
        }
    });
}

// -----------------<< search results >>----------------------
const inputSearch = document.getElementById('search');
const results = document.querySelector('.header__searchResults');

inputSearch.addEventListener('focus', () => {
    show(results);
});

// Bắt sự kiện blur
inputSearch.addEventListener('blur', () => {
    hidden(results);
});

// -----------------<< courses >>----------------------
const btnCourse = document.querySelector('.header__course--button');
const courses = document.querySelector('.header__course--list');
toggle(btnCourse, courses);

// -----------------<< notification >>----------------------
const btnNoti = document.querySelector('.header__noti i');
const noti = document.querySelector('.header__noti--list');
toggle(btnNoti, noti);

// -----------------<< user >>----------------------
const btnUser = document.querySelector('.header__user>img');
const user = document.querySelector('.header__user--menu');
toggle(btnUser, user);
