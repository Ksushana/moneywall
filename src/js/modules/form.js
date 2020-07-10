(() => {
  const form = document.querySelector(`.passport-form`);
  const btn = document.querySelector(`.passport-form button`);

  if (!form) {
    return;
  }

  btn.addEventListener("click", function() {
    form.classList.add("submitted");
  });



})();

$(function() {
  $("#number").mask("9999 999999",{placeholder:" "});
  $("#code").mask("999-999",{placeholder:" "});
  $("#postcode").mask("999999",{placeholder:" "});
  $("#issuedate").mask("99/99/9999",{placeholder:"01/01/2001"});
  $("#birthday").mask("99/99/9999",{placeholder:"01/01/1990"});
});