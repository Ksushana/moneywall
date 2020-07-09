(() => {
  const welcome = document.querySelector(`.welcome`);

  if (!welcome) {
    return;
  }

  const contracts = welcome.querySelectorAll(`.contract__item`);
  if (contracts.length > 1) {
    welcome.classList.add("old");
  };

})();