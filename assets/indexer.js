import { gamesData } from '../json/games.js';
import jsonObject2 from '../json/retrogames.json';
assert { type: 'json' };

$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

export function linkGenerater(node) {
  console.log(gamesData);
  var allkeys = Object.keys(gamesData).sort();

  // Loop through the properties of the object and add them to the dictionary
  for (var key of allkeys) {
    var code = gamesData[key];

    if (code["game-title"] !== "Example Deluxe") {
      var li = document.createElement("li");
      var link = document.createElement("a");
      li.appendChild(link);
      console.log(code.link);
      link.href = window.location.origin+"/indepth.html#"+key;
      link.innerText = code["game-title"];
      link.class = "list";
      node.appendChild(li);
    }
  }
}

export function retroLinkGenerater(node) {
  console.log(jsonObject2);
  var allkeys = Object.keys(jsonObject2).sort();

  // Loop through the properties of the object and add them to the dictionary
  for (var key of allkeys) {
    console.log(key+"all");
    var code = jsonObject2[key];

    var li = document.createElement("li");
    var link = document.createElement("a");
    li.appendChild(link);
    console.log(
      "https://landongames.yahix10042.repl.co/emulatedGameplate.html#"
    );
    link.href = "https://landongames.yahix10042.repl.co/emulatedGameplate.html#"+jsonObject2[key]["system"]+"/"+key;
    link.innerText = code["game-title"] +" on "+code["system-name"];
    link.class = "list";
    node.appendChild(li);
  }
}

export function generateHeader() {

  var header = document.getElementById("header");

    header.innerHTML=`<nav
      class="navbar navbar-expand-md navbar-light bg-light"
      style="
        --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      "
    >
      <div class="container" style="max-width: 1600px">
        <!-- Adjust max-width as needed -->
        <a class="navbar-brand" href="index.html">
          <img
            style="color: #ffffff; width: 35px"
            src="assets/images/logo-small.svg"
            alt="Radon Games"
            class="h-6"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" id="tab-bar">
            <li class="nav-item">
              <a style="color: #ffffff" class="nav-link" href=""></a>
            </li>
            <li class="nav-item active">
              <a style="color: #ffffff" class="nav-link" href="index.html">
                <p style="margin: 0px" class="border-expand">
                  <i class="fa-solid fa-home" style="color: #ffffff !important"></i>
                  Home
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a style="color: #ffffff" class="nav-link" href="games.html">
                <p style="margin: 0px" class="border-expand">
                  <i class="fa-solid fa-gamepad" style="color: #ffffff !important"></i>
                  Games
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a style="color: #ffffff" class="nav-link" href="retrogameslistplate.html">
                <p style="margin: 0px" class="border-expand">
                  <img src="./assets/images/retro.png" style="color: #ffffff !important; width: 25px;" class="h-6" alt="Retro Image">
                  Retro Games
                </p>
              </a>
            </li>
          </ul>
        </div>
        <form class="form-inline">
          <input
            style="border-color: rgb(55 65 81) !important; color: #9ca3af"
            class="form-control bg-transparent border border-gray-700 rounded py-1 px-2 focus:ring-none"
            type="text"
            placeholder="Search Games"
            name="q"
            autocomplete="off"
          />
        </form>
        <a
          style="color: #ffffff; padding: 0px 15px"
          class="nav-link hover"
          href=""
          target="_blank"
          title="Discord"
        >
          <i class="fab fa-discord"></i>
        </a>
        <a style="color: #ffffff; padding: 0px 8px" class="nav-link hover" href="" target="_self" title="Options">
          <i class="fas fa-cog"></i>
        </a>
      </div>
    </nav>`;
}

export function generateFooter() {
  var footer = document.getElementById("footer");
  footer.innerHTML =`<div class="d-flex">
        <div class="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
          <img
            src="assets/images/logo-big.svg"
            alt="Radon Games"
            class="logo"
          />
          <p class="description">
            An open-source unblocked games website built with simplicity in
            mind.
          </p>
          <div>
            <a href="" target="_blank" class="social-link mr-3">
              <i class="fab fa-discord social-icon"></i>
            </a>
            <a href="" target="_blank" class="social-link">
              <i class="fab fa-github social-icon"></i>
            </a>
          </div>
          <span class="font-weight-bold">
            <div style="margin-top: 10px">
              <a href="" target="_blank" class="border-expand version-link">
                <i class="fa-solid fa-code-branch"></i> v1.0.0
              </a>
            </div>
          </span>
        </div>
        <!-- New div for additional links (aligned to the right) -->
        <div class="col-lg-4 text-center text-lg-left mb-4 mb-lg-0 ml-auto">
          <!-- Use Bootstrap's grid system to create two columns for links -->
          <div class="justify-content-end row">
            <!-- First column for the first row of links -->
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="space">
                  <a style="color: #ffffff" class="border-expand" href="#"
                    >Mit License</a
                  >
                </li>
                <li class="space">
                  <a style="color: #ffffff" class="border-expand" href="#"
                    >Report</a
                  >
                </li>
                <li class="space">
                  <a style="color: #ffffff" class="border-expand" href="#"
                    >Request</a
                  >
                </li>
              </ul>
            </div>

            <!-- Second column for the second row of links -->
            <div class="col-md-4">
              <ul class="list-unstyled">
                <li class="space">
                  <a
                    style="color: #ffffff"
                    class="border-expand"
                    href="index.html"
                    >Home</a
                  >
                </li>
                <li class="space">
                  <a
                    style="color: #ffffff"
                    class="border-expand"
                    href="games.html"
                    >Games</a
                  >
                </li>
                <li class="space">
                  <a style="color: #ffffff" class="border-expand" href="#"
                    >Settings</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
}




