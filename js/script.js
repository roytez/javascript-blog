'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
// II część modułu

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.authors',

  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';


function generateTitleLinks(customSelector = ''){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */
  let html = '';

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* create HTML of the link */
    html = html + linkHTML;


    /* insert link into titleList */
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function calculateTagsParams(tags) {
  const tagsParams = { 'max': 0, 'min': 999999 };

  for (let tag in tags) {
    if (tagsParams.max < tags[tag]) {
      tagsParams.max = tags[tag];
    }
    if (tagsParams.min > tags[tag]) {
      tagsParams.min = tags[tag];
    }
  }
  return tagsParams;
}


function calculateTagClass(count, tagsParams) {
  const normalizedCount = count - tagsParams.min;
  const normalizedMax = tagsParams.max - tagsParams.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
  const tagClass = optCloudClassPrefix + classNumber;
  return tagClass;
}


// I część II modułu

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    /* END LOOP: for each tag */
    }
    /* [NEW] find list of tags in right column */
    /* insert HTML of all the links into the tags wrapper */
    tagsList.innerHTML = html;
  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  /*[NEW] create const tagsParams*/
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams', tagsParams);
  /* [NEW] add html from allTags to tagList */
  //tagList.innerHTML = allTags.join(' ');



  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
    allTagsHTML += '<a href="#tag-' + tag + '" class="' + tagLinkHTML + '"> ' + tag + '(' + allTags[tag] + ')</a>';

  }
  /* [NEW] END LOOP: for each tag in allTags: */
  /* [NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const articleTag = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let tag of articleTag){

    /* remove class active */
    tag.classList.remove('active');
    console.log(tag.classList);

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll(href);

  /* START LOOP: for each found tag link */
  for(let tags of tagLinks){
  /* add class active */
    tags.classList.add('active');
    console.log(tag.classList);

  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tags = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for(let tag of tags){

    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors(){
  let allAuthors ={};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* find author wrapper */
  const authorWrapper = document.querySelector(optArticleAuthorSelector);
  /* make html variable with empty string */
  let html = '';

  /* START LOOP: for every article: */
  for(let article of articles){

    /* get author from data-author attribute */
    const author = article.getAttribute('data-author');

    const postAuthor = article.querySelector('.post .post-author');

    postAuthor.innerHTML = 'by <a href="#author-' + author + '">' + author + '</a>';
    /* generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
    html = html + linkHTML;
    /* [NEW] check if this link is NOT already in allAuthors */
    if (!allAuthors.hasOwnProperty(author)) {
      /* [NEW] add tag to allAuthors object */
      allAuthors[author] = 1;
    } else {
      allAuthors[author]++;
    }
  }
  /* insert HTML of all the links into the tags wrapper */
  authorWrapper.innerHTML = html;
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optArticleAuthorSelector);

  /* [NEW] create new variable for all author links HTML code*/
  let allAuthorsHTML = '';
  /*[NEW] start LOOP for each authorTag in allAuthors*/
  for (let author in allAuthors) {
    /*[NEW] generate code of a link and add it to allAuthorsHTML*/
    allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + '(' + allAuthors[author] + ')</a></li>';
// allTagsHTML += '<a href="#tag-' + tag + '" class="' + tagLinkHTML + '"> ' + tag + '(' + allTags[tag] + ')</a>';
  }
  authorWrapper.innerHTML = allAuthorsHTML;
}
generateAuthors();

function authorClickHandler(){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href');

  /* make a new constant "author" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');

  /* find all authors links */
  const articleAuthor = document.querySelectorAll('[href^="#author-"]');
  console.log(articleAuthor);

  /* START LOOP: for each active author link */
  for(let author of articleAuthor){

    /* remove class active */
    author.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorList = document.querySelectorAll(href);
  console.log(authorList);

  /* START LOOP: for each found author link */
  for(let authors of authorList){
  /* add class active */
    authors.classList.add('active');
    console.log(authors.classList);

  /* END LOOP: for each found author link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
  console.log(generateTitleLinks);
}

function addClickListenersToAuthors(){
  /* find all links to authors */
  const authors = document.querySelectorAll('a[href^="#author-"');

  /* START LOOP: for each link */
  for(let author of authors){

    /* add tagClickHandler as event listener for that link */
    author.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();
