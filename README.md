<<<<<<< HEAD
# javascript-blog
=======
# grecce-rent
>>>>>>> 45e3f90ddeeebc81574829c3030b79220d6d03a7

/* [NEW] create a new variable allTags with an empty object */
let allTags = {};

/* find all articles */
const articles = document.querySelectorAll(optArticleSelector);

<<<<<<< HEAD
/* START LOOP: for every article: */
for (let article of articles) {

    let html = '';
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
=======
splash

<header class="splash">
  <div class="splash-inner">
    <div class="container">
      <h1 class="page-title">Wymarzone wakacje w Grecji</h1>
      <h2 class="page-subtitle">mieszkanie przy morzu</h2>
      <a href="#" class="btn btn-one">galery</a>
    </div>
  </div>
</header>

map
>>>>>>> 45e3f90ddeeebc81574829c3030b79220d6d03a7

<div class="card mb-3">
<img src="https://i.postimg.cc/ZqZGf8yR/100-steps.jpg" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>

<<<<<<< HEAD
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');


    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
        /* generate HTML of the link */
        //const linkHTML = '<li><a href="#tag-' + tag + '">' + ' ' + tag + ' ' + '</a></li>';
        const linkHTMLData = { id: tag, title: tag };
        const linkHTML = templates.tagLink(linkHTMLData);


        /* add generated code to html variable */
        html = html + linkHTML;

        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags.hasOwnProperty(tag)) {
            /*[NEW] add tag to allTags object*/
            allTags[tag] = 1;
        } else {
            allTags[tag]++;
        }

        /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;


    /* END LOOP: for every article: */

}
/* [NEW] find list of tags in right column */
const tagList = document.querySelector('.tags');

/*[NEW] create const tagsParams*/

const tagsParams = calculateTagsParams(allTags);


/*[NEW] create variable for all links HTML code*/
//let allTagsHTML = '';
const allTagsData = { tags: [] };

/*[NEW] START LOOP: for each tag in allTags:*/
for (let tag in allTags) {


    /*[NEW] generate code of a link and add it to allTaggsHTML*/

    const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);

    //allTagsHTML += '<a href="#tag-' + tag + '" class="' + tagLinkHTML + '"> ' + tag + '</a>' /*+'(' + allTags[tag] + ')'*/ ;
    allTagsData.tags.push({
        tag: tag,
        count: allTags[tag],
        className: calculateTagClass(allTags[tag], tagsParams)
    });
    console.log('clasa tagu', calculateTagClass(allTags[tag], tagsParams));

    /*[NEW] END LOOP: for each tag in allTags*/
}
console.log('tagi przed chmurą', allTagsData);
/*[NEW] add html from allTaggsHTML to tagList*/
//tagList.innerHTML = allTagsHTML;
tagList.innerHTML = templates.tagCloudLink(allTagsData);
console.log(templates.tagCloudLink(allTagsData));


//addClickListenersToTags();

}

generateTags();
=======

navi bootstrap

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Greece</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
>>>>>>> 45e3f90ddeeebc81574829c3030b79220d6d03a7
