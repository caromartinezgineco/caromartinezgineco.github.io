const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const prevToAnimationElements = document.querySelectorAll(".prevToAnimation");
prevToAnimationElements.forEach((element) => observer.observe(element));

const options = document.getElementById("options");
const magna = document.getElementById("magna");
const laburoHead = document.getElementById("laburo-head");

const showOptions = () => {
  magna.style.paddingLeft = 0;
  magna.style.paddingRight = 0;
  magna.style.paddingBottom = 0;
  options.style.marginLeft = 0;
  options.style.marginRight = 0;
  options.style.marginBottom = 0;
  options.classList.remove("hidden");
  laburoHead.style.marginLeft = "3rem";
  laburoHead.style.marginRight = "3rem";
};

const hideOptions = () => {
  magna.style.paddingLeft = "3rem";
  magna.style.paddingRight = "3rem";
  magna.style.paddingBottom = "3rem";
  options.style.marginLeft = "3rem";
  options.style.marginRight = "3rem";
  options.style.marginBottom = "3rem";
  options.classList.add("hidden");
  laburoHead.style.marginLeft = 0;
  laburoHead.style.marginRight = 0;
};

magna.onclick = () => {
  if (options.classList.contains("hidden")) {
    showOptions();
  } else {
    hideOptions();
  }
};
