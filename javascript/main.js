// #global content
document.title = global.web_title;
document.querySelector("#brandName").innerText = global.brand_name;
document.querySelector("#footer").textContent = global.footer;

// #index.htmlb content
try {
  document.getElementById("abstract").innerHTML = indexHTML.abstract;
  document.getElementById("mainTitle").innerHTML = indexHTML.main_title;
  document.getElementById("author1").innerText = indexHTML.author1;
  document.getElementById("author1").href = indexHTML.author1_link;
  document.getElementById("author2").innerHTML = indexHTML.author2;
  document.getElementById("author2").href = indexHTML.author2_link;
  document.getElementById("affiliationName").innerText =
    indexHTML.affiliation_name;
  document.getElementById("labLink").innerHTML = indexHTML.lab_name;
  document.getElementById("labLink").href = indexHTML.lab_link;
  document.getElementById("github-logo").href = indexHTML.github_link;
  document.getElementById("github-text").href = indexHTML.github_link;
} catch (error) {
  console.log("Not on index.html");
}

// #manuscript.html content
try {
  document.getElementById("manuscript-download-source").href =
    manuscript.manuscript_source;
  document.getElementById("manuscript-iframe-source").src =
    manuscript.manuscript_source;
} catch (error) {
  console.log("Not on manuscript.html");
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
  console.log("Not on visualization.html");
}

// #poster.html content
try {
  document.getElementById("poster-download-source").href = poster.poster_source;
  document.getElementById("poster-iframe-source").src = poster.poster_source;
} catch (error) {
  console.log("Not on poster.html");
}
