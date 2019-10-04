function addClickListenersToTags(){
  /* find all links to tags */
  const tags = document.querySelectorAll('a[href^="#tag-"]');
  console.log(tags);
  /* START LOOP: for each link */
  for(let tag of tags){

    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

1. Napisz też funkcje addClickListenersToAuthors i authorClickHandler, wzorując się na addClickListenersToTags i tagClickHandler.
2. Nie musisz w żaden sposób zmieniać funkcji generateTitleLinks – wystarczy, że w funkcji authorClickHandler wywołasz ją z odpowiednim argumentem. Pamiętaj, że w tym wypadku w selektorze atrybutu użyjesz łącznika = zamiast ~=.

# javascript-blog

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
