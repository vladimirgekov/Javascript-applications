function attachEvents() {
  document.getElementById("submit").addEventListener("click", loadWeatherData);
}

attachEvents();

const fields = {
  submit: () => document.getElementById("location"),
  hiddenDiv: () => document.getElementById("forecast"),
  current: () => document.getElementById("current"),
  upcoming: () => document.getElementById("upcoming"),
};

const request = function (url, data, reqHandler) {
  return fetch(url, data || { method: "GET" })
    .then((r) => r.json())
    .then((data) => reqHandler(data))
    .catch((e) => {
      console.log(e);

      fields.hiddenDiv().textContent = "Error";
      fields.hiddenDiv().style.display = "";
    });
};

function chosenCity(e) {
  return function (arr) {
    return arr.filter((x) => x.name === e).shift().code;
  };
}

const baseUrl = "https://judgetests.firebaseio.com/";

async function loadWeatherData() {
  let city = fields.submit().value;

  const cityCode = await request(
    baseUrl + "locations.json",
    undefined,
    chosenCity(city)
  );
  await request(
    baseUrl + `forecast/today/${cityCode}.json`,
    undefined,
    currWeatherVisualise
  );
  await request(
    baseUrl + `forecast/upcoming/${cityCode}.json`,
    undefined,
    threeDayForecast
  );
}

function el([...clasname], text) {
  let el = document.createElement("span");
  el.classList.add(...clasname);
  if (text !== undefined) el.innerHTML = text;
  return el;
}

const weatherOpt = {
  Sunny: "&#x2600",
  "Partly sunny": "&#x26C5",
  Overcast: "&#x2601",
  Rain: "&#x2614",
  Degrees: "&#176",
};

function currWeatherVisualise(obj) {
  append(
    fields.current(),
    el(["condition", "symbol"], weatherOpt[obj.forecast.condition])
  );

  let container = el(["condition"]);
  currentWeather(obj).forEach((x) => container.appendChild(x));
  append(fields.current(), container);

  fields.hiddenDiv().style.display = "";
}

function currentWeather(obj) {
  let name = el(["forecast-data"], obj.name);
  let degrees = el(
    ["forecast-data"],
    `${obj.forecast.low}/${obj.forecast.high}`
  );
  let state = el(["forecast-data"], obj.forecast.condition);

  return [name, degrees, state];
}

function append(el, ...rest) {
  [...rest].forEach((x) => el.appendChild(x));
  return el;
}

function threeDayForecast(obj) {
  let allThree = [];
  obj.forecast.forEach((day) => {
    let span = el(["upcoming"]);
    let name = el(["symbol"], weatherOpt[day.condition]);
    let degrees = el(["forecast-data"], `${day.low}/${day.high}`);
    let state = el(["forecast-data"], day.condition);

    allThree.push(append(span, name, degrees, state));
  });

  append(fields.upcoming(), ...allThree);
}
