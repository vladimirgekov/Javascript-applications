function loadRepos() {
  const url = `https://api.github.com/users/testnakov/repos`;
  const xtmlHttpRequest = new XTMLHttpRequest();
  xtmlHttpRequest.addEventListener(`readystatechange`, () => {
    if (xtmlHttpRequest.readyState === 4) {
      if (xtmlHttpRequest.status === 200) {
        console.log(xtmlHttpRequest.responseText);
      } else if (xtmlHttpRequest.status === 401) {
        console.log(`Unauthorized`);
      } else if (xtmlHttpRequest.status === 500) {
        console.log(`Zerver Error`);
      }
    }
  });
  xtmlHttpRequest.open(`GET`, url);
  xtmlHttpRequest.send();

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status == 401) {
        console.warn(`Unauthorized`);
      } else if (res.status === 500) {
        console.log(`Server error`);
      }
    })
    .then((data) => {
      if (!data) {
        return;
      }
      console.log(data);
      resEl.innerHTML = xtmlHttpRequest.responseText();
    });
}
