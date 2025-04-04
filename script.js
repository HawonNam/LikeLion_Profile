document.addEventListener("DOMContentLoaded", () => {
    const linkItems = document.querySelectorAll(".links a");
  
    linkItems.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#ffd700";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.color = "#00bfff";
      });
    });
  });
  