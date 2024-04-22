
const sections = document.querySelectorAll('.section');
const secbtns = document.querySelectorAll('.controls .control');
function pageTransition() {
    for (let i = 0; i < secbtns.length; i++) {
        secbtns[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');

            // Get the id of the clicked button
            const id = this.id;

            // Show the corresponding section based on the id
            showSection(id);
        });
    }
}
function showSection(id) {
    // Hide other sections
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    // Show the section with the specified id
    const element = document.getElementById(id);
    element.classList.add('active');
    // showproject(id);
}
pageTransition();
// function showproject(id) {
//     const projectdisp = document.querySelectorAll('.innerdiv');
//     projectdisp.forEach((divdisplay) => {
//         setTimeout(() => {
//             divdisplay.classList.remove('hide');
//             divdisplay.classList.add('apperAnimaton');
//         }, 2000);

//     })

// }

