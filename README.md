# javascript-blog

/* [NEW] create a new variable allTags with an empty object */
let allTags = {};

/* find all articles */
const articles = document.querySelectorAll(optArticleSelector);

/* START LOOP: for every article: */
for (let article of articles) {

    let html = '';
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');


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
