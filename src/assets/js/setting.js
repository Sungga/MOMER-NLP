// ------------------<< JS MODAL >>------------------------
function hiddenModal() {
    btnModalExit.forEach(function(element, index) {
        element.addEventListener('click', function() {
            settingModal[index].style.display = 'none';
        });
    });
}

function showModal() {
    settingItem.forEach(function(element, index) {
        element.addEventListener('click', function() {
            settingModal[index].style.display = 'flex';
        });
    });
}

const settingItem = document.querySelectorAll('.setting__item');
const settingModal = document.querySelectorAll('.setting__modal');
const btnModalExit = document.querySelectorAll('.setting__modal--exit');

hiddenModal();
showModal();

// ------------------<< JS AVATAR >>------------------------
const dropArea = document.querySelector('.setting__modal--container');
const dragText = document.querySelector('.setting__modal--dragText');
const button = document.querySelector('.setting__modal--avt button');
const input = document.querySelector('.setting__modal--avt input');
const image = document.querySelector('.setting__modal--img');

button.addEventListener('click', () => {
    input.click();
})

input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    showFile(file);
})

function showFile(file) {
    let fileType = file.type;
    let validExtension = ['image/jpeg', 'image/jpg', 'image/png'];
    if(validExtension.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result;
            let imgTag = `<img src="${fileUrl}">`;
            image.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    }
    else {
        alert('Đây không phải là một file ảnh');
        // dragText.textContent = "Kéo và thả để tải ảnh lên";
    }
}