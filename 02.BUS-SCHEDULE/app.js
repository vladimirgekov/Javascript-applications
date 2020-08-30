function solve() {
  const baseURL = "https://judgetests.firebaseio.com/schedule/";
  let busStop = "depot";

  const elements = {
    stopInfo() {
      return document.querySelector(`span.info`);
    },
    arive() {
      return document.querySelector(`input#arrive`);
    },
    depart() {
      return document.querySelector(`input#depart`);
    },
  };
  function depart() {
    fetch(baseURL + `${busStop}.json`)
      .then((response) => response.json())
      .then((response) => showBusInfo(response));

    function showBusInfo(data) {
      console.log(data);
      elements.stopInfo().textContent = `Next stop ${data.name}`;
      busStop = data.name;
      busStopName = data.name;
      switchBusState();
    }
  }

  function arrive() {
    elements.stopInfo().textContent = `Arriving at ${busStopName}`;
    busStop = data.name;
    switchBusState();
  }

  function switchBusState() {
    const { disabled: isDisabled } = elements.arrive();

    if (isDisabled) {
      elements.arrive().disabled = false;
      elements.depart().disabled = true;
    } else {
      elements.arrive().disabled = true;
      elements.depart().disabled = false;
    }
  }
  return {
    depart,
    arrive,
  };
}

let result = solve();
