document.addEventListener("DOMContentLoaded", () => {
   for (let video of Array.from(document.getElementsByClassName("video"))) {
       video.classList.add("video-scroll")

   }

   const videoList = document.getElementById("videos");
   const videos = document.getElementsByClassName("video");

   videoList.addEventListener("mouseover", () => {
       for (let video of Array.from(videos)) {
           video.classList.remove("video-scroll")
       }
   });
   videoList.addEventListener("mouseout", () => {
       for (let video of Array.from(videos)) {
           video.classList.add("video-scroll")
       }
   });
});
