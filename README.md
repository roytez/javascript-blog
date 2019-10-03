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

# javascript-blog
