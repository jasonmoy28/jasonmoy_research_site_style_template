// #global content
document.title = global.web_title;
document.querySelector("#brandName").innerText = global.brand_name;
document.querySelector("#footer").textContent = global.footer;

// #index.htmlb content
try {
  document.getElementById("abstract").innerHTML = indexHTML.abstract;
  document.getElementById("mainTitle").innerHTML = indexHTML.main_title;
  // Added author name if the name is not null. Add href to associated author link, if null, add # to the link
  const author1 = indexHTML.author1;
  const author2 = indexHTML.author2;
  const author3 = indexHTML.author3;
  const author4 = indexHTML.author4;
  const author5 = indexHTML.author5;
  const author6 = indexHTML.author6;
  const author7 = indexHTML.author7;
  const author8 = indexHTML.author8;
  const author9 = indexHTML.author9;
  const author10 = indexHTML.author10;

  const authors_name = [
    author1,
    author2,
    author3,
    author4,
    author5,
    author6,
    author7,
    author8,
    author9,
    author10,
  ];
  // Use a for loop to create a-tags and stored them as an array
  let elements = [];
  for (let index = 0; index < authors_name.length; index++) {
    let authorElement = document.createElement("a");
    authorElement.innerText = authors_name[index].name;
    authorElement.href = authors_name[index].link;
    authorElement.target = "_blank";
    elements.push(authorElement);
  }
  // Get the element
  const authors = document.querySelector("#authors");
  authors.appendChild(elements[0]);

  // #Use if_else statement to add a-tag dynamically depends on the name null or not
  // * Two authors has a special case
  // Set up the condition for only author 1 & author 2 special case
  let conditionCheck = [];
  for (let i = 2; i < 10; i++) {
    authors.classList.add("two-author");
    let conditionCheckInLoop = authors_name[i].name;
    conditionCheck.push(conditionCheckInLoop);
  }

  if (
    author2.name != null &&
    conditionCheck.every((isNull) => isNull === null)
  ) {
    authors.append(" & ");
    authors.appendChild(elements[1]);
  } else if (author2.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[1]);
  }
  // Other if_else statment
  if (author3.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[2]);
  }
  if (author4.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[3]);
  }
  if (author5.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[4]);
  }
  if (author6.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[5]);
  }
  if (author7.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[6]);
  }
  if (author8.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[7]);
  }
  if (author9.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[8]);
  }
  if (author10.name != null) {
    authors.append(" , ");
    authors.appendChild(elements[9]);
  }

  document.getElementById("affiliationName").innerText =
    indexHTML.affiliation_name;
  document.getElementById("labLink").innerHTML = indexHTML.lab_name;
  document.getElementById("labLink").href = indexHTML.lab_link;
  document.getElementById("github-logo").href = indexHTML.github_link;
  document.getElementById("github-text").href = indexHTML.github_link;
} catch (error) {
  console.log(error);
}

// #manuscript.html content
try {
  document.getElementById("manuscript-download-source").href =
    manuscript.manuscript_source;
  document.getElementById("manuscript-iframe-source").src =
    manuscript.manuscript_source;
} catch (error) {
  console.log("Not in manuscript.html");
}

// #visualization.html content
try {
  document.querySelectorAll(".img-container img")[0].src =
    visualization.img1_src;
  document.querySelectorAll(".img-container img")[1].src =
    visualization.img2_src;
  document.querySelectorAll(".img-container img")[2].src =
    visualization.img3_src;
  document.querySelectorAll(".img-container img")[3].src =
    visualization.img4_src;
  document.querySelectorAll(".img-container img")[4].src =
    visualization.img5_src;
  document.querySelectorAll(".img-container img")[5].src =
    visualization.img6_src;
} catch (error) {
  console.log("Not in visualization.html");
}

// #poster.html content
try {
  document.getElementById("poster-download-source").href = poster.poster_source;
  document.getElementById("poster-iframe-source").src = poster.poster_source;
} catch (error) {
  console.log("Not in poster.html");
}
