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

function Header() {
    const headContainer = document.querySelector('.header-container');
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headTitle = document.createElement('h1');
    const temp = document.createElement('p');

    date.classList.add('date');
    temp.classList.add('temp')

    date.innerHTML = 'SMARCH 28, 2019';
    headTitle.innerHTML = 'Lambda Times';
    temp.innerHTML = '98°';

    headContainer.appendChild(header);
    header.appendChild(date)
    header.appendChild(headTitle);
    header.appendChild(temp);
}

Header();