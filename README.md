function generateAuthors() {
      /* find all articles */
      const articles = document.querySelectorAll(optArticleSelector);
      /* find authors wrapper */
      const authorWrapper = document.querySelector(optArticleAuthorSelector);
      /* make html variable with empty string */
      let html = '';

      /* START LOOP: for every article: */
      for (let article of articles) {
          /* get author from author-tag attribute */
          const author = article.getAttribute('author-tag');

          const postAuthor = article.querySelector('.post .post-author');
          postAuthor.innerHTML = 'by <a href="#author-' + author + '">' + author + '</a>';
          /* generate HTML of the link */
          const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
          /* add generated code to html variable */
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
          allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + '</a></li>' + '(' + allAuthors[author] + ')';
      }
      authorWrapper.innerHTML = allAuthorsHTML;
  }

  generateAuthors();

  function authorClickHandler(event) {
      /* prevent default action for this event */
      event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const hrefAuthor = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tagAuthor = hrefAuthor.replace('#author-', '');
      /* find all author links with class active */
      const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
      /* START LOOP: for each active tag link */
      for (let activeAuthorLink of activeAuthorLinks) {
          /* remove class active */
          activeAuthorLink.classList.remove('active');
          /* END LOOP: for each active tag link */
      }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const hrefAuthorLinks = document.querySelectorAll('a[href="' + hrefAuthor + '"]');
      /* START LOOP: for each found author link */
      for (let hrefAuthorLink of hrefAuthorLinks) {
          /* add class active */
          hrefAuthorLink.classList.add('active');
          /* END LOOP: for each found tag link */
      }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[author-tag="' + tagAuthor + '"]');
  }

  function addClickListenersToAuthors() {
      /* find all links to authors */
      const authorLinks = document.querySelectorAll('a[href^="#author-"]');
      /* START LOOP: for each link */
      for (let authorLink of authorLinks) {
          /* add tagClickHandler as event listener for that link */
          authorLink.addEventListener('click', authorClickHandler);
          /* END LOOP: for each link */
      }
  }
  addClickListenersToAuthors();
}

# javascript-blog
