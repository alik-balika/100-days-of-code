document.addEventListener("DOMContentLoaded", () => {
  const imageSelects = document.querySelectorAll(".img-select");
  const productDisplay = document.getElementById("product-display");
  imageSelects.forEach((img) => {
    img.addEventListener("click", () => {
      productDisplay.src = img.src;

      imageSelects.forEach((img) => {
        img.classList.remove("border-blue-600");
        img.classList.add("opacity-50");
      });

      img.classList.add("border-blue-600");
      img.classList.remove("opacity-50");
    });
  });

  const listItems = document.querySelectorAll("ul.flex li");
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      listItems.forEach((item) => {
        item.classList.remove("bg-black", "text-white");
      });

      li.classList.add("bg-black", "text-white");
    });
  });

  window.showToast = function () {
    const toast = document.getElementById("toast");
    toast.classList.remove("invisible");
    setTimeout(() => {
      toast.classList.add("invisible");
    }, 2000);
  };
});
