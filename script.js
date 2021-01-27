const elemForWidth = document.querySelectorAll('.columns .column');
const elemWithWidth = document.querySelectorAll('.headers .column');
for (let i = 0; i < elemForWidth.length; i++) {
    elemWithWidth[i].style.width = `${elemForWidth[i].offsetWidth}px`;
}