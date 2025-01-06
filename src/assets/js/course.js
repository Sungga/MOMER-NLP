// function
function showLessons(index) {
    lessons[index].removeAttribute('hidden');
    statusLessons[index].innerHTML = '&#8722;';
}

function hiddenLessons(index) {
    lessons[index].setAttribute('hidden', '');
    statusLessons[index].innerHTML = '+';
}

function showOrHiddenLessons(elementSection, elementLessons) {
    elementSection.forEach((element, index) => {
        element.addEventListener('click', () => {
            // Lấy trạng thái hiện tại của aria-expanded
            const isExpanded = element.getAttribute('aria-expanded') === 'true';
        
            // Đảo trạng thái aria-expanded
            element.setAttribute('aria-expanded', !isExpanded);
        
            // Hiển thị/ẩn courses
            if (isExpanded) {
                hiddenLessons(index);
            } else {
                showLessons(index);
            }
        });
    });
}

const section = document.querySelectorAll('.course__section--name');
const lessons = document.querySelectorAll('.course__lessons');
const statusLessons = document.querySelectorAll('.course__status');

showOrHiddenLessons(section, lessons)