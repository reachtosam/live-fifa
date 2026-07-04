const channels = [
     {
    name: "TSN",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=tsn1-xyz-waUvqaAACr"
  },
  //    {
  //   name: "FS1",
  //   url: "https://xyzstreams.st/wc-2-embed.html"
  // },
     {
    name: "FOX",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=fox-xyz-waUvqaAAC"
  },
// {
//     name: "STV",
//     url: "https://xyzstreams.st/wc-3-embed.html"
//   },
     {
    name: "ITV 4",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=itv-xyz-waUvqaAACr"
  },
  // {
  //   name: "BBC",
  //   url: "https://xyzstreams.st/wc-4-embed.html"
  // },
{
    name: "beIN Sports 1",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=bein12fr-xyz"
  },
{
    name: "Telemundo",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=telemundo-xyz-waUvqaAACr"
  },
  //    {
  //   name: "UNIVERSO",
  //   url: "https://xyzstreams.st/wc-19-embed.html"
  // },
    {
    name: "TSN 4K",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=tsn4k-xyz-waUvqaAACr"
  },
  //    {
  //   name: "FS1 4K",
  //   url: "https://xyzstreams.st/wc-fs14k-embed.html"
  // },
  {
    name: "FOX 4K",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=fox4k-usa"
  },
  //   {
  //   name: "BEIN MAX 4K",
  //   url: "https://xyzstreams.st/wc-10-embed.html"
  // },
{
    name: "FUSBALL.TV1 4K",
    url: "https://xyzstreams-6h9.pages.dev/embed.html?id=fussballtv1uhd-de"
  },
  //   {
  //   name: "Telemundo 4K",
  //   url: "https://xyzstreams.st/wc-12-embed.html"
  // },
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
