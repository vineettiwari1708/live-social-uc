
document.addEventListener("DOMContentLoaded", function () {
  const socialContainer = document.createElement('div');
  socialContainer.className = "position-fixed start-0 bottom-0 m-3 d-flex flex-column gap-3";
  socialContainer.style.zIndex = "99999";

  const icons = [
    {
      href: "https://www.youtube.com/@urbanfeatconstruction",
      icon: "fab fa-youtube",
      bg: "bg-danger",
      title: "YouTube"
    },
    {
      href: "https://www.instagram.com/urbanfeat_construction/",
      icon: "fab fa-instagram",
      bg: "bg-danger",
      title: "Instagram"
    },
    {
      href: "https://www.facebook.com/urbanfeatcons/",
      icon: "fab fa-facebook-f",
      bg: "bg-primary",
      title: "Facebook"
    },
    {
      href: "https://x.com/urbanfeatcons/",
      icon: "fab fa-twitter",
      bg: "bg-info",
      title: "Twitter"
    }
  ];

  icons.forEach(social => {
    const a = document.createElement('a');
    a.href = social.href;
    a.target = "_blank";
    a.className = `btn text-white rounded-circle d-flex align-items-center justify-content-center ${social.bg}`;
    a.style.width = "60px"; // Increased size
    a.style.height = "60px";
    a.style.fontSize = "28px"; // Larger icon
    a.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    a.style.transition = "all 0.3s ease";
    a.title = social.title;

    // Add hover effect with 3D pop
    a.onmouseenter = () => {
      a.style.transform = "scale(1.15) rotateX(5deg) rotateY(5deg)";
      a.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
    };
    a.onmouseleave = () => {
      a.style.transform = "scale(1)";
      a.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    };

    const i = document.createElement('i');
    i.className = social.icon;
    a.appendChild(i);

    socialContainer.appendChild(a);
  });

  document.body.appendChild(socialContainer);
});

