function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-light.png")
    img.setAttribute(
      "alt",
      "Foto do Jabes Bueno com óculos e camiseta regata azul!"
    )
  } else {
    img.setAttribute("src", "./assets/profile1.png")
    img.setAttribute("alt", "Foto do Jabes Bueno com óculos e social bege!")
  }
}
