const checkboxes = document.querySelectorAll(
    '.inbox .item input[type="checkbox"]'
);
console.log(checkboxes);

function handleCheckbox(e) {
    if (checkboxes[0].checked == true) {
        for (let i = 1; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (let i = 1; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

checkboxes[0].addEventListener("click", handleCheckbox);