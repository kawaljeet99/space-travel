// ================ Navbar ================== //

const navList = document.getElementById("nav-list");
const menuOpen = document.getElementById("hamburger");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
  navList.classList.add("visible");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  navList.classList.remove("visible");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});

// ================ TabList and the content ================== //

const tablist = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tab']");
const textContent = document.querySelectorAll("article");
const imgContent = document.querySelectorAll("picture");

// Function to change content
const changeContent = (role) => {
  // Text Content
  textContent.forEach((content) => {
    let contentRole = content.getAttribute("data-role");
    // Hide data of all tabs except that matches current tab
    if (contentRole === role) {
      textContent.forEach((content) => {
        content.setAttribute("hidden", "");
      });
      content.removeAttribute("hidden");
    }
  });

  // Img Content
  imgContent.forEach((content) => {
    let contentRole = content.getAttribute("data-role");
    // Hide all images except that matches current tab
    if (contentRole === role) {
      imgContent.forEach((content) => {
        content.setAttribute("hidden", "");
      });
      content.removeAttribute("hidden");
    }
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    //   romove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // add active class on clicked tab
    tab.classList.add("active");

    // change content according to active tab
    const currentRole = tab.getAttribute("data-relate");

    switch (currentRole) {
      // Destination
      case "moon":
        changeContent(currentRole);
        break;

      case "mars":
        changeContent(currentRole);
        break;

      case "europa":
        changeContent(currentRole);
        break;

      case "titan":
        changeContent(currentRole);
        break;

      // Crew
      case "commander":
        changeContent(currentRole);
        break;

      case "specialist":
        changeContent(currentRole);
        break;

      case "pilot":
        changeContent(currentRole);
        break;

      case "engineer":
        changeContent(currentRole);
        break;

      // Texhnology
      case "launch-vehicle":
        changeContent(currentRole);
        break;

      case "spaceport":
        changeContent(currentRole);
        break;

      case "space-capsule":
        changeContent(currentRole);
        break;
    }
  });
});
