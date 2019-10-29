# javascript-blog
'<li><a href="#tag-' + tag + '">' + tag + '</a></li>'



const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

<script id="tamplate-article-link" type="text/x-handlebars-template">
  <li>
    <a href="#-{{ articleId }}">{{ articleTitle }}</a>
  </li>
</script>

<script id="tamplate-tag-link" type="text/x-handlebars-template">
  <li>
    <a href="#tag-{{ tag }}">{{ tag }}</a>
  </li>
</script>


js

const tplTagLinkSource = document.querySelector('#tamplate-tag-link').innerHTML;
console.log(tplTagLinkSource);
const tplTagLink = Handlebars.compile(tplTagLinkSource);

for(let tag of articleTagsArray){

  /* generate HTML of the link */
  //  const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
  const linkHTML = tplTagLink({tag:tag});
