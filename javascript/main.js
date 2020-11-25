// #global content
document.title = global.web_title;
document.querySelector("#brandName").innerText = global.brand_name;
document.querySelector("#footer").textContent = global.footer;

// #index.html content
try {
  document.getElementById("abstract").innerHTML = indexHTML.abstract;
  document.getElementById("mainTitle").innerHTML = indexHTML.main_title;
  // *Added author name and links to the object by creating all objects in a for loop first
  let elements = [];
  for (let index = 0; index < indexHTML.authors.length; index++) {
    let authorElement = document.createElement("a");
    authorElement.innerText = Object.values(indexHTML.authors[index])[0][0];
    if (Object.values(indexHTML.authors[index])[0][1] != null) {
      authorElement.href = Object.values(indexHTML.authors[index])[0][1];
      authorElement.target = "_blank";
    } else {
      authorElement.style.textDecoration = "none";
      authorElement.href = "#";
    }
    elements.push(authorElement);
  }

  const authors = document.querySelector("#authors");
  authors.appendChild(elements[0]);
  //  if elements is  2, use special case. Otherwise, use standard case
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

  //# Other
  document.getElementById("affiliationName").innerText =
    indexHTML.affiliation_name;
  document.getElementById("labLink").innerHTML = indexHTML.lab_name;
  document.getElementById("labLink").href = indexHTML.lab_link;
  document.getElementById("github-logo").href = indexHTML.github_link;
  document.getElementById("github-text").href = indexHTML.github_link;
} catch (error) {}

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
