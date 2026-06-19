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

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

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

function closeMobileMenu() {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }
}

function loadChannel(index) {
  activeIndex = index;
  player.src = channels[index].url;
  channelTitle.textContent = channels[index].name;
  renderChannels(search.value);

  closeMobileMenu();
}

search.addEventListener("input", () => {
  renderChannels(search.value);
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  closeMobileMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }
});

renderChannels();
loadChannel(0);
