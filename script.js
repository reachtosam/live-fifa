const channels = [
     {
    name: "TSN",
    url: "https://xyzstreams.shop/wc-7-embed.html"
  },
     {
    name: "FS1",
    url: "https://xyzstreams.shop/wc-2-embed.html"
  },
     {
    name: "FOX",
    url: "https://xyzstreams.shop/wc-1-embed.html"
  },
{
    name: "STV",
    url: "https://xyzstreams.shop/wc-3-embed.html"
  },
     {
    name: "ITV 4",
    url: "https://xyzstreams.shop/wc-15-embed.html"
  },
  {
    name: "BBC",
    url: "https://xyzstreams.shop/wc-4-embed.html"
  },
{
    name: "beIN MAX",
    url: "https://xyzstreams.shop/wc-11-embed.html"
  },
{
    name: "Telemundo",
    url: "https://xyzstreams.shop/wc-6-embed.html"
  },
     {
    name: "UNIVERSO",
    url: "https://xyzstreams.shop/wc-19-embed.html"
  },
    {
    name: "TSN 4K",
    url: "https://xyzstreams.shop/wc-8-embed.html"
  },
     {
    name: "FS1 4K",
    url: "https://xyzstreams.shop/wc-fs14k-embed.html"
  },
  {
    name: "FOX 4K",
    url: "https://xyzstreams.shop/wc-5-embed.html"
  },
    {
    name: "BEIN MAX 4K",
    url: "https://xyzstreams.shop/wc-10-embed.html"
  },
{
    name: "Fussball 4K",
    url: "https://xyzstreams.shop/wc-14-embed.html"
  },
    {
    name: "Telemundo 4K",
    url: "https://xyzstreams.shop/wc-12-embed.html"
  },
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
