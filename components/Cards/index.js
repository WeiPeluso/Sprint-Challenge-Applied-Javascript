// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardCreator(artical){
    const{headerline:headerline,author:authorName,imgUrl:url}=artical

const card=document.createElement('div')
const headerLine=document.createElement('div')
const author=document.createElement('div')
const imgContainer=document.createElement('div')
const image=document.createElement('img')
const spanBy=document.createElement('span')

//add class
card.classList.add('card')
headerLine.classList.add('headline')
author.classList.add('author')
imgContainer.classList.add('img-container')

card.appendChild(headerLine);
headerLine.textContent=headerline
card.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(image)
image.src=url
author.appendChild(spanBy)
spanBy.textContent=`By ${authorName}`

return card

}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((lambda)=>{
  // console.log(lambda)
   for (const topic in lambda.data.articles) {
      //console.log(topic)
      //console.log(lambda.data.articles[topic])

      lambda.data.articles[topic].forEach((article) => {
       document.querySelector('.cards-container').appendChild(
           cardCreator({headerline:`${article.headline}`,
            author:`${article.authorName}`,
            imgUrl: `${article.authorPhoto}`})//end of create card
       )//end of appendchild

   })// end of for each
  }// end of for
})//end of then
.catch((error)=>{
    console.log('failed');
})
.finally(()=>{
    console.log('done');
})