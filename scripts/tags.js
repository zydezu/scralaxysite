// tags system

var tagClicked = false;

window.addEventListener('hashchange', () => {
  if (tagClicked || !window.location.hash){
    location.reload(); //if tag is cleared, or a second tag has been clicked
  }
  else {
    try {
      console.log("CHECKING");   
    }
    catch {
      location.reload();
    }
    checkTags();
  }
  window.scrollTo(0, 0); //scroll page to the top
}, false);

function checkTags(){
  if (window.location.hash) {
    try {
      tagUI();
    } catch{}
    console.log("Tag detected in URL");
    var tagClicked = true; //check if tag has been clicked once, the page must reload if a second tag is clicked to bring back deleted elements
    var emptyPage = true; //for the error message
    var elements = document.getElementsByClassName('post'); //old posts
    var i = elements.length;
    while (i--) {
      emptyPage = checkTagDeletion(elements, i, emptyPage);
    }
    if (emptyPage){
      document.getElementById("tagMessage").innerHTML = `<article class="fadeIn"><blockquote class="blank">There are no pages containing the <b>${window.location.hash.substring(1)}</b> tag... | <a href="">Clear tags</a></blockquote></article>` //display tag text
    }
  }
}

function tagUI(){
  document.getElementById("postCounts").id = "clearTag"; //display clear tag button (fallback)
  document.getElementById("tagMessage").innerHTML = `<article class="fadeIn"><blockquote class="blank">Showing posts with the <b>${window.location.hash.substring(1)}</b> tag | <a href="">Clear tags</a></blockquote></article>` //display tag text
}

function checkTagDeletion(elements, i, emptyPage){
  try {
    temp = elements[i].getElementsByTagName("span")[1].getElementsByClassName('tag'); //index 0 is date, 1 is tags
    emptyPage = emptyPage;
    var j = temp.length; //tag counter
    const tags = []; //array incase of multiple tags
    while (j--){
      tags.push(temp[j].textContent); //add tag name to array
    }
    //console.log(tags);
    if (!tags.includes(window.location.hash.substring(1))){
      elements[i].remove(); //remove if tags array don't contain the hash
    }
    else {
      emptyPage = false;
    }
  }
  catch {
    elements[i].remove(); //element has no tags, remove it
  }
  return emptyPage;
}