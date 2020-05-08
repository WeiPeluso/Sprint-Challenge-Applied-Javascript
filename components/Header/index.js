// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerCreater() {

    const header=document.createElement('div')
    const spanDate=document.createElement('span')
    const h1=document.createElement('h1')
    const spanTem=document.createElement('span')

    //class
    header.classList.add('header')
    spanDate.classList.add('date')
    spanTem.classList.add('temp')

    header.appendChild(spanDate)
    header.appendChild(h1)
    header.appendChild(spanTem)
   
    //set content

    spanDate.textContent="MARCH 28, 2019"
    h1.textContent="Lambda Times"
    spanTem.textContent="98°"

    return header;

}

//console.log(headerCreater())

document.querySelector('.header-container')
.appendChild(headerCreater())

