const channels = [
  {
    name: "TSN",
    url: "https://logic.icelanders.st/embed/tsn1-ca"
  },
  // {
  //   name: "FS1",
  //   url: "https://xyzstreams.st/wc-2-embed.html"
  // },
  {
    name: "FOX",
    url: "https://logic.icelanders.st/embed/fox-usa"
  },
  {
     name: "ITV",
     url: "https://logic.icelanders.st/embed/itv-uk"
   },
  {
    name: "DAZN",
    url: "https://logic.icelanders.st/embed/daznmundial-es"
  },
   {
    name: "DSports",
     url: "https://logic.icelanders.st/embed/dsport-ar"
   },
   {
     name: "CazeTV",
    url: "https://logic.icelanders.st/embed/cazetv-br"
  },
  {
    name: "BBC",
    url: "https://logic.icelanders.st/embed/bbcone-uk"
  },
  // {
  //   name: "BBC",
  //   url: "https://xyzstreams.st/wc-4-embed.html"
  // },
  // {
  //   name: "beIN Sports 1",
  //   url: "https://xyzstreams-6h9.pages.dev/embed.html?id=bein12fr-xyz"
  // },
  {
    name: "beIN Sports MAX",
    url: "https://logic.icelanders.st/embed/beinsportsmax-sa"
  },
  {
    name: "Telemundo",
    url: "https://logic.icelanders.st/embed/telemundo-usa"
  },
  {
   name: "UNIVERSO",
    url: "https://logic.icelanders.st/embed/universo-usa"
   },
 // {
   // name: "TSN 4K",
   // url: "https://logic.icelanders.st/embed/tsn-4k"
 // },
  {
    name: "BBC 4K",
    url: "https://logic.icelanders.st/embed/bbc-uhd"
  },
  {
    name: "FOX 4K",
    url: "https://logic.icelanders.st/embed/fox4k-usa"
  },
  {
    name: "BEIN SPORTS 4K",
    url: "https://logic.icelanders.st/embed/beinsportsuhd-sa"
  },
  {
    name: "RAITALIA 4K",
    url: "https://logic.icelanders.st/embed/rai4k-it"
  },
  {
    name: "FUSBALL.TV1 4K",
    url: "https://logic.icelanders.st/embed/fussballtv1uhd-de"
  },
  {
    name: "FUSBALL.TV1 4K NC",
    url: "https://logic.icelanders.st/embed/fussballtvuhd-de"
  },
   {
     name: "NOW HK 4K",
    url: "https://logic.icelanders.st/embed/now-4k-hk"
  },
];

const channelList = document.getElementById("channelList");
const player = document.getElementById("player");
const channelTitle = document.getElementById("channelTitle");

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

let activeIndex = 0;

function renderChannels() {
  channelList.innerHTML = "";

  channels.forEach((channel, index) => {
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

  renderChannels();
  closeMobileMenu();
}

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
