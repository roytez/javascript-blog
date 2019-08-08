'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
  const articleSelector = document.getElementById('.article');
  articleSelector = articleSelector.getAttribute('href');
  console.log('articleSelector');


/*   PRZYKŁAD
 var div1 = document.getElementById("div1");
  var a = div1.getAttribute("align");
  alert(a); // pokaże wartość atrybutu "align" dla elementu o id="div1"

            instrukcja

Umiemy już znaleźć kliknięty link – zapisaliśmy go w stałej clickedElement. Znajdziemy teraz jego atrybut href.

Zadeklarujmy nową stałą o nazwie articleSelector. Od razu możemy ustawić jej wartość, czyli wartość atrybutu href pobraną z klikniętego linka.

Spójrz na przykład znajdujący się w dokumentacji funkcji getAttribute – powinien podpowiedzieć Ci, w jaki sposób użyć tej funkcji. Pamiętaj, że musimy ją wykonać na elemencie clickedElement, a w nawiasach podać nazwę atrybutu w cudzysłowach, czyli href.

Użyj console.log dla stałej articleSelector, aby sprawdzić, czy udało się pobrać wartość tego atrybutu. Powinna być inna dla każdego linka, i wyświetlać się w konsoli po kliknięciu w link.


  */


  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
