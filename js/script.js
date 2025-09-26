document.addEventListener("DOMContentLoaded", function () {
  let icon = document.getElementById('icon-mobile');
  let ul = document.getElementById('ul-mobile');

  if (icon && ul) {
    // عند الضغط على أيقونة القائمة
    icon.onclick = function () {
      ul.classList.toggle("mobile-nav1");
    }

    // إغلاق القائمة عند الضغط على أحد الروابط (على الجوال)
    let links = ul.querySelectorAll('a');

    links.forEach(link => {
      link.onclick = function () {
        ul.classList.remove("mobile-nav1");
      }
    });
  }
});

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
