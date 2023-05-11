export const changeColor = () => {
    const lightTheme = document.getElementById("icon");
    lightTheme.addEventListener("click", () => {
      const toggleTheme = document.querySelector("body");
      toggleTheme.classList.toggle("lightTheme");
      if (!toggleTheme.classList.contains("lightTheme")) {
        icon.src = "https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683792499/dia_o0eiqk.png";
      } else {
        icon.src = "https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683793808/luna_qaf3pf.png";
      }
    });
  };