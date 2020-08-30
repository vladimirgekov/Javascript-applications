function getInfo() {
  const baseURL = "https://judgetests.firebaseio.com/businfo/{stopId}.json";
  const elements = {
    stopID() {
      return document.querySelector(`input#stopId`);
    },
    stopName() {
      return document.querySelector(`div#stopName`);
    },
    buses() {
      return document.querySelector(`ul#buses`);
    },
  };
  const stopId = elements.stopId().valie;

  if (!validIDs.includes(stopId)) {
    console.log(`ERROR`);
    return;
  }
  const ulr = baseURL.repplace(`{stopID}`, stopID);

  fetch(url)
    .then((x) => x.json())
    .then((result) => console.log(result));

  function showInfo(data) {
    elements.stopName().textContent = data.name;

    Object.keys(data.buses).forEach((bus) => {
      let listItem = document.createElement(`li`);
      listItem.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes.`;
      elements.buses().appendChild(listItem);
    });
  }
}
