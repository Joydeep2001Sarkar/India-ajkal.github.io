joyhead = document.getElementById("joyhead"); // DOM manipulation 


fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json").then(function (response) {
    return response.json();
}).then(function (data) {
    let articles = data.articles; // taking the articles 
    console.log(articles, typeof (articles));

    newsHtml = "";
    // Normal Programming  and Manipulating DOM   
    let i;
    for (i = 0; i < 28; i++) {
     news1 = articles[i];
     news2 = articles[++i];
     news3 = articles[++i];
     news4 = articles[++i];
     
     let samachar = `
     <div class="w-100"></div>
     <div class="col myStyle">
     <div class="card myCard" style="width: 90%;">
         <img src="${news1.urlToImage}" class="card-img-top  img-thumbnail" alt="Image">
         <div class="card-body">
             <h5 class="card-title">${news1.title}</h5>
             <p class="card-text" style="padding-bottom:6px">${news1.description}</p>
             <a href="${news1.url}" class="btn btn-primary" target="_blank"  style="position: absolute; left: 17px; bottom: 1px; border-radius: 7px; margin-top:2px;  font-size:0.85rem;" margin-bottom: 1px;>Main Page</a>
         </div>
     </div>
 </div>
 <div class="w-100 disp"></div>
 <div class="col myStyle">
     <div class="card myCard" style="width: 90%;">
         <img src="${news2.urlToImage}" class="card-img-top  img-thumbnail" alt="Image">
         <div class="card-body">
             <h5 class="card-title">${news2.title}</h5>
             <p class="card-text"  style="padding-bottom:6px">${news2.description}</p>
             <a href="${news2.url}" class="btn btn-primary" target="_blank" style="position: absolute; left: 17px; bottom: 1px; border-radius: 7px; margin-top:2px; font-size:0.85rem; margin-bottom: 1px;">Main Page</a>
         </div>
     </div>
 </div>
 <div class="w-100"></div>
 <div class="col myStyle">
     <div class="card myCard" style="width: 90%;">
         <img src="${news3.urlToImage}" class="card-img-top img-thumbnail" alt="Image">
         <div class="card-body">
             <h5 class="card-title">${news3.title}</h5>
             <p class="card-text" style="padding-bottom:6px">${news3.description}</p>
             <a href="${news3.url}" class="btn btn-primary" target="_blank" style="position: absolute; left: 17px; bottom: 1px; border-radius: 7px; margin-top:2px; font-size:0.85rem; margin-bottom: 1px;">Main Page</a>
         </div>
     </div>
 </div>
 <div class="w-100 disp"></div>
 <div class="col myStyle">
     <div class="card myCard" style="width: 90%;">
         <img src="${news4.urlToImage}" class="card-img-top img-thumbnail" alt="Image">
         <div class="card-body">
             <h5 class="card-title">${news4.title}</h5>
             <p class="card-text" style="padding-bottom:6px">${news4.description}</p>
             <a href="${news4.url}" class="btn btn-primary" target="_blank" style="position: absolute; left: 17px; bottom: 1px; border-radius: 7px; margin-top:2px; font-size:0.85rem; margin-bottom: 1px;">Main Page</a>
         </div>
     </div>
 </div>
`
 
    newsHtml = newsHtml + samachar;
    }

    joyhead.innerHTML = newsHtml ;
})