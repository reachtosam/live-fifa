const channels = [
  {
    name: "TSN",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa"
  },
  {
    name: "FOX",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/fox"
  },
  {
    name: "ITV",
    url: "https://embed.st/embed/admin/ppv-switzerland-vs-bosnia-herzegovina/5"
  },
  {
    name: "ZDF",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/zdf"
  },
  {
    name: "DAZN",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/dazn-spain"
  },
  {
    name: "FOX 4K",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/fox-4k"
  },
  {
    name: "BBC ONE",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/uk"
  },
  {
    name: "Telemundo",
    url: "https://embedindia.st/embed/wc/2026-06-18/cze-rsa/telemundo"
  },
  {
    name: "Telemundo 4K",
    url: "https://embedindia.st/embed/wc/2026-06-18/sui-bih/telemundo-4k"
  }
];

const channelList = document.getElementById("channelList");
const player = document.getElementById("player");
const channelTitle = document.getElementById("channelTitle");
const search = document.getElementById("search");

let activeIndex = 0;

function renderChannels(filter = "") {
  channelList.innerHTML = "";

  channels.forEach((channel, index) => {
    if (!channel.name.toLowerCase().includes(filter.toLowerCase())) return;

    const div = document.createElement("div");
    div.className = "channel" + (index === activeIndex ? " active" : "");
    div.textContent = channel.name;

    div.onclick = () => loadChannel(index);

    channelList.appendChild(div);
  });
}

function loadChannel(index) {
  activeIndex = index;
  player.src = channels[index].url;
  channelTitle.textContent = channels[index].name;
  renderChannels(search.value);
}

search.addEventListener("input", () => {
  renderChannels(search.value);
});

renderChannels();
loadChannel(0);