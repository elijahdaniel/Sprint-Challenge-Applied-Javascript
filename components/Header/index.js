// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function header() {
    const headContainer = document.querySelector('.header-container');
    const header = document.createElement('div');
    const headTitle = document.createElement('h1');
    const date = document.createElement('span');
    const temp = document.createElement('span');

    headContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerHTML = 'MARCH 28, 2019';
    headTitle.innerHTML = 'Lambda Times';
    temp.innerHTML = '98°';

    header.appendChild(date);
    header.appendChild(headTitle);
    header.appendChild(temp);
    headContainer.appendChild(header);
}

header();
