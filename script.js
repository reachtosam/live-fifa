const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");

const searchInput = document.getElementById("searchInput");
const channelList = document.getElementById("channelList");
const categorySelect = document.getElementById("categorySelect");

const player = document.getElementById("player");
const title = document.getElementById("channelTitle");


let allChannels = [];
let selectedCategory = "";



// Mobile menu

if(menuBtn){

    menuBtn.onclick = ()=>{

        sidebar.classList.add("open");
        overlay.classList.add("show");

    };

}


if(overlay){

    overlay.onclick = ()=>{

        sidebar.classList.remove("open");
        overlay.classList.remove("show");

    };

}




// SEARCH

if(searchInput){

    searchInput.oninput = ()=>{

        applyFilters();

    };

}




// LOAD API

async function loadChannels(){

try{


const response = await fetch("api.json");


if(!response.ok){

    throw new Error("API not found");

}


const json = await response.json();


// API categories are inside streams

const categoriesData = json.streams || [];



let categories = new Set();



allChannels = [];



categoriesData.forEach(category=>{


    categories.add(category.category);



    category.streams.forEach(match=>{



        // Main stream

        if(match.iframe){


            allChannels.push({

                category: category.category,

                name: match.name,

                source: match.source_tag || match.tag || "Main",

                url: match.iframe

            });


        }




        // Sub streams

        if(match.substreams && match.substreams.length){


            match.substreams.forEach(sub=>{


                allChannels.push({

                    category: category.category,

                    name: match.name,

                    source: sub.source_tag || sub.tag || "Sub",

                    url: sub.iframe

                });


            });


        }



    });



});





// Dropdown

if(categorySelect){


categorySelect.innerHTML =
`
<option value="">All Categories</option>
`;



categories.forEach(cat=>{


let option=document.createElement("option");


option.value = cat;

option.textContent = cat;


categorySelect.appendChild(option);


});


}





showChannels(allChannels);



console.log("Categories:", [...categories]);

console.log("Channels loaded:", allChannels);



}
catch(error){


console.error("API Error:",error);


if(channelList){

channelList.innerHTML =
`
<p style="padding:15px;color:red">
Failed loading channels
</p>
`;

}


}



}





// APPLY SEARCH + CATEGORY FILTER

function applyFilters(){


let filtered = allChannels;



// category

if(selectedCategory !== ""){


filtered = filtered.filter(channel =>

channel.category === selectedCategory

);


}




// search

if(searchInput && searchInput.value.trim() !== ""){


let text = searchInput.value.toLowerCase();



filtered = filtered.filter(channel =>


channel.name.toLowerCase().includes(text)

||

channel.source.toLowerCase().includes(text)

||

channel.category.toLowerCase().includes(text)


);


}




showChannels(filtered);



}





// SHOW CHANNELS

function showChannels(channels){


if(!channelList) return;



channelList.innerHTML = "";



channels.forEach(channel=>{


let div=document.createElement("div");


div.className="channel";



div.innerHTML = `

<strong>${channel.source}</strong>

<br>

<small>${channel.name}</small>

<br>

<small style="color:#94a3b8">
${channel.category}
</small>

`;



div.onclick = ()=>{


document.querySelectorAll(".channel")
.forEach(x=>x.classList.remove("active"));



div.classList.add("active");



if(player){

player.src = channel.url;

}



if(title){

title.textContent =
channel.source + " - " + channel.name;

}



if(sidebar){

sidebar.classList.remove("open");

}


if(overlay){

overlay.classList.remove("show");

}



};



channelList.appendChild(div);



});



}





// CATEGORY CHANGE

if(categorySelect){


categorySelect.onchange = function(){


selectedCategory = this.value;


applyFilters();



};


}




loadChannels();
