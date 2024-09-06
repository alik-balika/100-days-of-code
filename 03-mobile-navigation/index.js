document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".nav-icon");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((item2) => {
        item2
          .querySelector("i")
          .classList.replace("text-blue-500", "text-gray-400");
      });

      item
        .querySelector("i")
        .classList.replace("text-gray-400", "text-blue-500");
    });
  });
});
