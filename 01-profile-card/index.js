document.addEventListener("DOMContentLoaded", () => {
  const followButton = document.getElementById("follow-button");

  followButton.addEventListener("click", () => {
    if (followButton.innerText === "Follow") {
      followButton.innerText = "Following";
      followButton.classList.remove("bg-pink-400");
      followButton.classList.add("bg-gray-400");
      followButton.classList.remove("text-white");
      followButton.classList.add("text-black");
    } else {
      followButton.innerText = "Follow";
      followButton.classList.add("bg-pink-400");
      followButton.classList.remove("bg-gray-400");
      followButton.classList.add("text-white");
      followButton.classList.remove("text-black");
    }
  });
});
