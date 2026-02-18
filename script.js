
/* Typing Effect */

const roles = [
    "Electronics & Communication Engineer",
    "Engineering-Minded Data Analyst",
    "Excel Dashboard Developer",
    "Future Embedded Systems Engineer"
];

let index = 0;
let charIndex = 0;
let current = "";
let isDeleting = false;

function type() {

    let element = document.querySelector(".typing");

    if (!element) return;

    if (!isDeleting && charIndex <= roles[index].length) {

        current = roles[index].substring(0, charIndex++);
        element.textContent = current;

    } else if (isDeleting && charIndex >= 0) {

        current = roles[index].substring(0, charIndex--);
        element.textContent = current;

    }

    if (charIndex == roles[index].length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (charIndex == 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

type();



/* Modal */

function openModal(project){

    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");

    img.src = "assets/" + project + ".png";

    modal.style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
