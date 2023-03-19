const showRangeValue = () => {
  const ranges = document.querySelectorAll('input[type="range"]')
  const button = document.querySelector(".form__button")
  ranges.forEach((range) => {
    range.addEventListener("change", (e) => {
      let actualValue = e.target.value
      e.target.nextElementSibling.textContent = actualValue
      if (e.target.id === "addFunctions") {
        button.style = "display: block"
        if (actualValue >= 7) {
          range.parentNode.parentNode.nextElementSibling.style = "display: none"
        } else {
          range.parentNode.parentNode.nextElementSibling.style =
            "display: block"
        }
      }
    })
  })
}

const callChecboxList = () => {
  const checkboxContainers = document.querySelectorAll(".checkbox__item")
  checkboxContainers.forEach((checkbox) =>
    checkbox.addEventListener("click", (e) => {
      if (e.target.classList.contains("checkbox__item")) {
        if (!e.target.children[0].checked) {
          e.target.children[0].checked = true
          e.target.children[2].classList.add("active")
        } else {
          e.target.children[0].checked = false
          e.target.children[2].classList.remove("active")
        }
      }
      if (e.target.parentNode.classList.contains("checkbox__item")) {
        if (!e.target.parentNode.children[0].checked) {
          e.target.parentNode.children[0].checked = true
          e.target.parentNode.children[2].classList.add("active")
        } else {
          e.target.parentNode.children[0].checked = false
          e.target.parentNode.children[2].classList.remove("active")
        }
      }
    }),
  )
}

const subCheckboxShow = () => {
  const subCheckboxes = document.querySelectorAll(".checbox-group__item")
  subCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("active-sub-checkbox")
      e.target.nextElementSibling.checked = !e.target.nextElementSibling.checked
    })
  })
}
callChecboxList()
subCheckboxShow()
showRangeValue()
