onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  
    document.addEventListener("keydown", function(event) {
        if (event.key === "F5") {
          window.location.href = "../index.html"; // Redireciona para o index.html
        }
    });