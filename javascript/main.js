// #Util functions
function changeInnerHTMLByID(elementID, text) {
  document.getElementById(elementID).innerHTML = text;
}

// #global content
document.title = global.web_title;
document.querySelector("#brandName").innerText = global.brand_name;
document.querySelector("#footer").textContent = global.footer;

// #index.html content
try {
  document.getElementById("abstract").innerHTML = indexHTML.abstract;
  document.getElementById("mainTitle").innerHTML = indexHTML.main_title;

  // # Authors
  // *Added author name and links to the object by creating all html elements in a for loop first
  let elements = [];
  for (let index = 0; index < indexHTML.authors.length; index++) {
    // *If author link is not null set link a-tag style, else set to non-a-tag style

    if (Object.values(indexHTML.authors[index])[0][1] != null) {
      let authorElement = document.createElement("a");
      authorElement.innerText = Object.values(indexHTML.authors[index])[0][0];
      authorElement.href = Object.values(indexHTML.authors[index])[0][1];
      authorElement.target = "_blank";
      elements.push(authorElement);
    } else {
      let authorElement = document.createElement("p");
      authorElement.innerText = Object.values(indexHTML.authors[index])[0][0];
      authorElement.style.textDecoration = "none";
      authorElement.style.cursor = "text";
      elements.push(authorElement);
    }
  }

  const authors = document.querySelector("#authors");
  authors.appendChild(elements[0]);
  //  *if elements is  2, use special case. Otherwise, add the elements using standard case
  if (elements.length === 2) {
    authors.classList.add("two-author");
    authors.append(" & ");
    authors.appendChild(elements[1]);
  } else if (elements.length > 2) {
    for (let i = 1; i < elements.length; i++) {
      authors.append(" , ");
      authors.appendChild(elements[i]);
    }
  }

  //# Affiliation
  if (indexHTML.show_affiliation) {
    changeInnerHTMLByID("affiliationName", indexHTML.affiliation_name);
  } else {
    document.getElementById("affliation").style.display = "none";
  }

  // # Lab
  if (indexHTML.show_lab) {
    changeInnerHTMLByID("labLink", indexHTML.lab_name);
    // * Check lab link is null or not, if not show lab link
    if (indexHTML.lab_link != null) {
      document.getElementById("labLink").href = indexHTML.lab_link;
    } else {
      document.getElementById("labLink").href = "#";
      document.getElementById("labLink").target = "_self";
      document.getElementById("labLink").style.borderBottom = "none";
    }
  } else {
    document.getElementById("lab").style.display = "none";
  }

  // # Source Code
  // * Check showing source code section or not, if yes, add link
  if (indexHTML.show_source_code) {
    document.getElementById("github-logo").href = indexHTML.github_link;
    document.getElementById("github-text").href = indexHTML.github_link;
  } else {
    const sourceCode = document.getElementById("source-code");
    sourceCode.style.display = "none";
  }

  // # Publication
  if (indexHTML.show_publication) {
    changeInnerHTMLByID("publication-text", indexHTML.publication_name);
    document.getElementById("publication-text").href =
      indexHTML.publication_link;
  } else {
    document.getElementById("publication").style.display = "none";
  }
} catch (error) {
  console.log(error);
}

// #manuscript.html content
try {
  // * Part of the reaon iframeContainer is get here is to escape try if not on manuscript page
  const ifrmaeContainer = document.getElementById("manuscript-iframe-source");
  const downloadContainer = document.getElementById(
    "manuscript-download-source"
  );

  const pageTitle = document.querySelector("h1");
  if (
    !manuscript.show_manuscript &&
    pageTitle.innerText.toLowerCase() == "manuscript"
  ) {
    const manuscriptText = document.getElementsByClassName("desktop-text");
    manuscriptText[0].innerText = "Not Yet Avaliable";
    ifrmaeContainer.style.display = "none";
  } else if (pageTitle.innerText.toLowerCase() == "manuscript") {
    downloadContainer.href = manuscript.manuscript_source;
    ifrmaeContainer.src = manuscript.manuscript_source;
  }
} catch (error) {}

// #visualization.html content
try {
  const imgContainer = document.querySelector(".img-container");
  let i = 0;
  for (const img_src in Object.values(visualization)) {
    const imgElement = document.createElement("img");
    imgElement.src = Object.values(visualization)[i];
    i++;
    imgContainer.appendChild(imgElement);
  }
} catch (error) {}

// #poster.html content
try {
  const ifrmaeContainer = document.getElementById("poster-iframe-source");
  const downloadContainer = document.getElementById("poster-download-source");

  const pageTitle = document.querySelector("h1");
  if (!poster.show_poster && pageTitle.innerText.toLowerCase() == "poster") {
    const posterText = document.getElementsByClassName("desktop-text");
    posterText[0].innerText = "Not Yet Avaliable";
    ifrmaeContainer.style.display = "none";
  } else if (pageTitle.innerText.toLowerCase() == "poster") {
    downloadContainer.href = poster.poster_source;
    ifrmaeContainer.src = poster.poster_source;
  }
} catch (error) {}
