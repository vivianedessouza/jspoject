function openForm(formId) {
  console.log(formId);
  document.getElementById(formId).style.display = "block";
}

function closeForm(formId) {
  document.getElementById(formId).style.display = "none";
}
