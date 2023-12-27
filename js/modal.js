document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.guerySelector("head").classList.toggle("open");
  });
});
