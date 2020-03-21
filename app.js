var searchBar = document.forms["search-footballers"].querySelector("input");
var footballerNames = document.getElementsByClassName("name");

/* Search footballers */

searchBar.addEventListener("keyup", e => {
  var term = e.target.value.toLowerCase();
  Array.from(footballerNames).forEach(footballerName => {
    if (footballerName.textContent.toLowerCase().indexOf(term) != -1)
      footballerName.parentNode.style.display = "block";
    else footballerName.parentNode.style.display = "none";
  });
});

/* Delete footballers */
var footballerListWrapper = document.querySelector("#footballer-list ul");
footballerListWrapper.addEventListener("click", e => {
  if (e.target.className == "delete") {
    var footballerElement = e.target.parentNode;
    var clonedfootballerElement = footballerElement.cloneNode(true);
    footballerElement.innerHTML = `<li>
           <span class="warning">Are you sure you want to delete the footballer ? </span>
           <span class="confirm">Confirm</span>
           <span class="cancel">Cancel</span>

  </li>`;
    const confirmBtn = document.querySelector("#footballer-list .confirm");
    const cancelBtn = document.querySelector("#footballer-list .cancel");
    confirmBtn.addEventListener("click", e => {
      footballerListWrapper.removeChild(footballerElement);
    });
    cancelBtn.addEventListener("click", e => {
      footballerElement.innerHTML = clonedfootballerElement.innerHTML;
    });
  }
});

/* Hide footballers */

var checkbox = document.getElementById("hide");
checkbox.addEventListener("change", e => {
  if (e.target.checked == true) {
    Array.from(footballerListWrapper.children).forEach(footballer => {
      footballer.style.display = "none";
    });
  } else
    Array.from(footballerListWrapper.children).forEach(footballer => {
      footballer.style.display = "block";
    });
});

/* Add Footballer*/

var addForm = document.forms["add-footballer"];
var footballerElement = document.querySelector("#footballer-list li");

addForm.addEventListener("submit", e => {
  e.preventDefault();
  var input = e.target.querySelector("input[type = 'text']");
  var footballerToAdd = footballerElement.cloneNode(true);
  footballerToAdd.firstElementChild.textContent = input.value;
  footballerListWrapper.insertBefore(
    footballerToAdd,
    footballerListWrapper.firstElementChild
  );
  input.value = "";
});
