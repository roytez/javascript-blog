'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
<<<<<<< HEAD
    activeLink.classList.remove('active');
  }
=======
  activeLink.classList.remove('active');
}
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469

  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
<<<<<<< HEAD
    activeArticle.classList.remove('active');
  }
=======
  activeArticle.classList.remove('active');
}
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

<<<<<<< HEAD
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
=======
    const targetArticle = document.querySelector(articleSelector)
    console.log(targetArticle)
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469


  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
<<<<<<< HEAD
}
=======

}

/*  const links = document.querySelectorAll('.titles a');

  for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
  console.log(links); */

>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469
// II część modułu

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
<<<<<<< HEAD
  titleList.innerHTML = '';
=======
	titleList.innerHTML = '';


>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469

  /* for each article */
  let html = '';



  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    console.log(article);
    const articleId = article.getAttribute('id');

    /* get the article id */
<<<<<<< HEAD
    console.log('articleId');
    console.log(articleId);
=======
  console.log('articleId');
  console.log(articleId);
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469


    /* find the title element */

<<<<<<< HEAD
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
=======
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469


    /* get the title from the title element */


<<<<<<< HEAD
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(articleId);
    console.log(articleTitle);
=======
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log(articleId);
  console.log(articleTitle);
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469


    /* create HTML of the link */
    html = html + linkHTML;


    /* insert link into titleList */
<<<<<<< HEAD
  }
=======
}
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469
  titleList.innerHTML = html;
  console.log(titleList, html);

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
<<<<<<< HEAD
    link.addEventListener('click', titleClickHandler);
  }
=======
  link.addEventListener('click', titleClickHandler);
}
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469
  console.log(links);

}

<<<<<<< HEAD
generateTitleLinks();    
=======
generateTitleLinks();
>>>>>>> d052da230701e52db4fe3a7247de41c2295e8469
