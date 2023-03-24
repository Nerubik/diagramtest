let areas = [document.querySelector(".pink"), document.querySelector(".grey"), document.querySelector(".green")]
let legends = document.querySelectorAll(".legend")

areas.forEach(area => {
  area.addEventListener("mouseover", () => {
    document.querySelector(".dark" + area.className).style.opacity = "1";
    legends.forEach(legend => {
      if (legend.className.includes(area.className))
        legend.style.textDecoration = "underline";
      else 
        legend.style.opacity = "0.6"
    })
  })
  area.addEventListener("mouseout", () => {
    document.querySelector(".dark" + area.className).style.opacity = "0";
    legends.forEach(legend => {
      legend.style.textDecoration = "none";
      legend.style.opacity = "1"
    })
  })
})
