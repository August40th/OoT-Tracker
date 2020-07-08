var medallions = [];
var dungeonImg = ['Unknown', 'Rauru', 'Gohma', 'Dodongo', 'Jellyfish', 'PoeSisters', 'FireDancer', 'Clam', 'IronKnuckle', 'Gibdo'];

var fortresskeys = [];
var keyimg = ['Membership0', 'Membership1', 'Membership2', 'Membership3', 'Membership4'];

var songs = [];
var songimg = ['Unknown', 'Impa', 'Malon', 'SariasSong2', 'Guru', 'CompBro', 'TempleofTime', 'Forest', 'Crater', 'IceSong', 'Desert', 'BurningKak', 'Ocarina2'];

var questdungeons = [];
var questimg = ['', 'MQ'];

rainbowbridge = 'Open';
castlelogic = 'Removed';
trialsize = 0;
gerudobridge = 'Default';
Rescue1 = true;
smallkeys = 'Dungeons';
bosskeys = 'Dungeons';
skulltula = 'Off';
scrubs = 'Off';
Shopsanity = false;
shopsize = 0;
Cowsanity = false;
quest = 'Vanilla';

OcarinaShuffle = false;
SongShuffle = false;
WeirdEgg = false;
BeanShuffle = false;

BombchuLogic = false;

OpenForest = true;
OpenGate = true;
OpenDoor = true;
OpenFountain = false;

GrottoER = false;

var itemGrid = [];
var itemLayout = [];

var editmode = false;
var selected = {};

var dungeonSelect = 0;
var dungeonMarked = [];
var chestMarked = [];

function setCookie(obj) {
   var d = new Date();
   d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
   var expires = "expires=" + d.toUTCString();
   var val = JSON.stringify(obj);
   document.cookie = "key=" + val + ";" + expires + ";path=/";
}

function getCookie() {
   var name = "key=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return JSON.parse(c.substring(name.length, c.length));
      }
   }
   return {};
}

var cookiekeys = ['iZoom', 'mZoom', 'rainlogic', 'items', 'qlogic', 'flogic', 'carp', 'smallk', 'bossk', 'sclogic', 'sklogic', 'ocShuff', 'sngShuff', 'eggShuff', 'beanShuff', 'chulogic', 'forest', 'gate', 'door', 'fountain', 'shpsize', 'cowShuff', 'numtrials', 'pigBK', 'gER'];
var cookieDefault = {
   iZoom: 100,
   mZoom: 100,
   rainlogic: 'Open',
   qlogic: 'Vanilla',
   flogic: 'Default',
   carp: 1,
   smallk: 'Dungeons',
   bossk: 'Dungeons',
   sclogic: 'Major Item',
   sklogic: 'Off',
   ocShuff: 0,
   sngShuff: 0,
   eggShuff: 0,
   beanShuff: 0,
   chulogic: 0,
   forest: 1,
   gate: 1,
   door: 1,
   fountain: 0,
   shpsize: 0,
   cowShuff: 0,
   numtrials: 0,
   pigBK: 'Removed',
   gER: 0,
   
   items: defaultItemGrid
}

var cookielock = false;

function loadCookie() {
   if (cookielock)
      return;
   cookielock = true;

   cookieobj = getCookie();

   cookiekeys.forEach(function (key) {
      if (cookieobj[key] === undefined) {
         cookieobj[key] = cookieDefault[key];
      }
   });

   initGridRow(JSON.parse(JSON.stringify(cookieobj.items)));

   document.getElementsByName('itemdivsize')[0].value = cookieobj.iZoom;
   document.getElementsByName('itemdivsize')[0].onchange();
   document.getElementsByName('mapdivsize')[0].value = cookieobj.mZoom;
   document.getElementsByName('mapdivsize')[0].onchange();

   document.getElementsByName('OpenForest')[0].checked = !!cookieobj.forest;
   document.getElementsByName('OpenForest')[0].onchange();

   document.getElementsByName('OpenGate')[0].checked = !!cookieobj.gate;
   document.getElementsByName('OpenGate')[0].onchange();

   document.getElementsByName('OpenDoor')[0].checked = !!cookieobj.door;
   document.getElementsByName('OpenDoor')[0].onchange();

   document.getElementsByName('OpenFountain')[0].checked = !!cookieobj.fountain;
   document.getElementsByName('OpenFountain')[0].onchange();

   document.getElementsByName('OcarinaShuffle')[0].checked = !!cookieobj.ocShuff;
   document.getElementsByName('OcarinaShuffle')[0].onchange();

   document.getElementsByName('SongShuffle')[0].checked = !!cookieobj.sngShuff;
   document.getElementsByName('SongShuffle')[0].onchange();

   document.getElementsByName('WeirdEgg')[0].checked = !!cookieobj.eggShuff;
   document.getElementsByName('WeirdEgg')[0].onchange();
   
   document.getElementsByName('BeanShuffle')[0].checked = !!cookieobj.beanShuff;
   document.getElementsByName('BeanShuffle')[0].onchange();
   
   document.getElementsByName('GrottoER')[0].checked = !!cookieobj.gER;
   document.getElementsByName('GrottoER')[0].onchange();

   document.getElementsByName('shopsize')[0].value = cookieobj.shpsize;
   document.getElementsByName('shopsize')[0].onchange();
   
   document.getElementsByName('trialsize')[0].value = cookieobj.numtrials;
   document.getElementsByName('trialsize')[0].onchange();
   
   document.getElementsByName('Cowsanity')[0].checked = !!cookieobj.cowShuff;
   document.getElementsByName('Cowsanity')[0].onchange();

   document.getElementsByName('BombchuLogic')[0].checked = !!cookieobj.chulogic;
   document.getElementsByName('BombchuLogic')[0].onchange();

   document.getElementsByName('Rescue1')[0].checked = !!cookieobj.carp;
   document.getElementsByName('Rescue1')[0].onchange();
   
   for (rbuttonID in document.getElementsByName('rainbowbridge')) {
      rbutton = document.getElementsByName('rainbowbridge')[rbuttonID]
      if (rbutton.value == cookieobj.rainlogic)
         rbutton.click();
   }
   
   for (rbuttonID in document.getElementsByName('castlelogic')) {
      rbutton = document.getElementsByName('castlelogic')[rbuttonID]
      if (rbutton.value == cookieobj.pigBK)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('quest')) {
      rbutton = document.getElementsByName('quest')[rbuttonID]
      if (rbutton.value == cookieobj.qlogic)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('gerudobridge')) {
      rbutton = document.getElementsByName('gerudobridge')[rbuttonID]
      if (rbutton.value == cookieobj.flogic)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('smallkeys')) {
      rbutton = document.getElementsByName('smallkeys')[rbuttonID]
      if (rbutton.value == cookieobj.smallk)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('bosskeys')) {
      rbutton = document.getElementsByName('bosskeys')[rbuttonID]
      if (rbutton.value == cookieobj.bossk)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('skulltula')) {
      rbutton = document.getElementsByName('skulltula')[rbuttonID]
      if (rbutton.value == cookieobj.sklogic)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('scrubs')) {
      rbutton = document.getElementsByName('scrubs')[rbuttonID]
      if (rbutton.value == cookieobj.sclogic)
         rbutton.click();
   }

   cookielock = false;
}

function saveCookie() {
   if (cookielock)
      return;
   cookielock = true;

   cookieobj = {};

   cookieobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
   cookieobj.mZoom = document.getElementsByName('mapdivsize')[0].value;

   cookieobj.forest = document.getElementsByName('OpenForest')[0].checked ? 1 : 0;
   cookieobj.gate = document.getElementsByName('OpenGate')[0].checked ? 1 : 0;
   cookieobj.door = document.getElementsByName('OpenDoor')[0].checked ? 1 : 0;
   cookieobj.fountain = document.getElementsByName('OpenFountain')[0].checked ? 1 : 0;

   cookieobj.ocShuff = document.getElementsByName('OcarinaShuffle')[0].checked ? 1 : 0;
   cookieobj.sngShuff = document.getElementsByName('SongShuffle')[0].checked ? 1 : 0;
   cookieobj.eggShuff = document.getElementsByName('WeirdEgg')[0].checked ? 1 : 0;
   cookieobj.beanShuff = document.getElementsByName('BeanShuffle')[0].checked ? 1 : 0;
   
   cookieobj.gER = document.getElementsByName('GrottoER')[0].checked ? 1 : 0;
   
   cookieobj.shpsize = document.getElementsByName('shopsize')[0].value;
   cookieobj.numtrials = document.getElementsByName('trialsize')[0].value;

   cookieobj.cowShuff = document.getElementsByName('Cowsanity')[0].checked ? 1 : 0;

   cookieobj.chulogic = document.getElementsByName('BombchuLogic')[0].checked ? 1 : 0;
   cookieobj.carp = document.getElementsByName('Rescue1')[0].checked ? 1 : 0;

   for (rbuttonID in document.getElementsByName('rainbowbridge')) {
      rbutton = document.getElementsByName('rainbowbridge')[rbuttonID]
      if (rbutton.checked)
         cookieobj.rainlogic = rbutton.value;
   }
   
   for (rbuttonID in document.getElementsByName('castlelogic')) {
      rbutton = document.getElementsByName('castlelogic')[rbuttonID]
      if (rbutton.checked)
         cookieobj.pigBK = rbutton.value;
   } 

   for (rbuttonID in document.getElementsByName('quest')) {
      rbutton = document.getElementsByName('quest')[rbuttonID]
      if (rbutton.checked)
         cookieobj.qlogic = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('gerudobridge')) {
      rbutton = document.getElementsByName('gerudobridge')[rbuttonID]
      if (rbutton.checked)
         cookieobj.flogic = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('smallkeys')) {
      rbutton = document.getElementsByName('smallkeys')[rbuttonID]
      if (rbutton.checked)
         cookieobj.smallk = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('bosskeys')) {
      rbutton = document.getElementsByName('bosskeys')[rbuttonID]
      if (rbutton.checked)
         cookieobj.bossk = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('skulltula')) {
      rbutton = document.getElementsByName('skulltula')[rbuttonID]
      if (rbutton.checked)
         cookieobj.sklogic = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('scrubs')) {
      rbutton = document.getElementsByName('scrubs')[rbuttonID]
      if (rbutton.checked)
         cookieobj.sclogic = rbutton.value;
   }

   cookieobj.items = JSON.parse(JSON.stringify(itemLayout));

   setCookie(cookieobj);

   cookielock = false;
}

// Event of clicking a chest on the map
function toggleChest(x) {
   console.log(chests[x].isOpened)
   chests[x].isOpened = !chests[x].isOpened;
   if (chests[x].isOpened){
      if (document.getElementById(x).classList.contains('wayofhero'))
         document.getElementById(x).className = "mapspan chest opened wayofhero";
      else
         document.getElementById(x).className = "mapspan chest opened";
   }
   else
      document.getElementById(x).className = "mapspan chest " + chests[x].isAvailable();
   updateMap();
}

function toggleMarkedChest(x) {
   window.event.preventDefault()
   var elem = document.getElementById(x);
   if (chestMarked.indexOf(x) > -1) {
      chestMarked.splice(chestMarked.indexOf(x), 1);
   }
   if (elem) {
      if (elem.classList.contains('wayofhero')) {
         elem.classList.remove('wayofhero');
      } else {
         elem.className += " " + 'wayofhero';
         chestMarked.push(x);
      }
   }
}

// Highlights a chest location
function highlight(x) {
   document.getElementById(x).style.backgroundImage = "url(images/highlighted.png)";
}

function unhighlight(x) {
   document.getElementById(x).style.backgroundImage = "url(images/poi.png)";
}

// Highlights a chest location (but for dungeons)
function highlightDungeon(x) {
   document.getElementById("dungeon" + x).style.backgroundImage = "url(images/highlighted.png)";
}

function unhighlightDungeon(x) {
   if (dungeonSelect != x)
      document.getElementById("dungeon" + x).style.backgroundImage = "url(images/poi.png)";
}

// mark dungeon as
function toggleMarkDungeon(x) {
   window.event.preventDefault()
   var elem = document.getElementById("dungeon" + x);
   if (dungeonMarked.indexOf(x) > -1) {
      dungeonMarked.splice(dungeonMarked.indexOf(x), 1);
   }
   if (elem) {
      if (elem.classList.contains('wayofhero')) {
         elem.classList.remove('wayofhero');
      } else {
         elem.className += " " + 'wayofhero';
         dungeonMarked.push(x);
      }
   }
}

function clickDungeon(d) {
   document.getElementById("dungeon" + dungeonSelect).style.backgroundImage = "url(images/poi.png)";
   dungeonSelect = d;
   document.getElementById("dungeon" + dungeonSelect).style.backgroundImage = "url(images/highlighted.png)";

   listFilter = document.getElementById('submaparea').getAttribute('data-filter');
   if (quest === "Mixed" && listFilter === "master" && dungeons[dungeonSelect].type === "dungeon")
      document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name + " MQ";
   else
      document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name
   document.getElementById('submaparea').className = "DC" + getDungeonAvailability(dungeons[dungeonSelect]);
   
   drawDungeonList();
   updateMap();
}

function drawDungeonList() {
   DCcount = 0;
   var DClist = document.getElementById('submaplist');
   DClist.innerHTML = "";
   listFilter = document.getElementById('submaparea').getAttribute('data-filter');
   if (quest === "Vanilla" || quest === "Mixed") {
      let dNone = false;
      if (quest === "Mixed" && listFilter === "master" && dungeons[dungeonSelect].type === "dungeon") {
         dNone = true;
      }
         for (var key in dungeons[dungeonSelect].chestlist) {
            var s = document.createElement('li');
            s.innerHTML = key
            
            if (listFilter === "master")
                s.className = "DCopened";
            else {
               if (dungeons[dungeonSelect].chestlist[key].isAvailable())
                  s.className = "DCavailable";
               else
                  s.className = "DCunavailable";
            }
            if (dungeons[dungeonSelect].chestlist[key].isOpened)
               s.className = "DCopened";
            else if (dungeons[dungeonSelect].chestlist[key].isAvailable())
               s.className = "DCavailable";
            else
               s.className = "DCunavailable";
            
            if (OcarinaShuffle == false && key == "Fairy Ocarina") {
               s.classList.add("d-none");}
            if (WeirdEgg == false && key == "Malons Weird Egg") {
               s.classList.add("d-none"); }
            if (BeanShuffle == false && key == "Bean Salesman") {
               s.classList.add("d-none"); }
            if (Cowsanity == false && s.innerHTML.includes("Cow Milk") && key != "Cow Milk Grotto") {
               s.classList.add("d-none"); }
            if (Cowsanity == false && GrottoER == false && key == "Cow Milk Grotto" ) {
               s.classList.add("d-none"); }
            if (GrottoER == false && (s.innerHTML.includes("Octorok Grotto") || s.innerHTML.includes("Fountain Grotto") )) {
               s.classList.add("d-none"); }

            s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            s.onmouseover = new Function('highlightDungeonChest(this)');
            s.onmouseout = new Function('unhighlightDungeonChest(this)');
            s.style.cursor = "pointer";
            s.setAttribute("data-type", "chest");
            if (dNone) s.classList.add("d-none");
            DClist.appendChild(s)
         }
      if ((skulltula === "Dungeons" || skulltula === "All") &&  dungeons[dungeonSelect].type === "dungeon"){
         for (let key in dungeons[dungeonSelect].skulllist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].skulllist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].skulllist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "skull");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      if ((skulltula === "Overworld" || skulltula === "All") &&  dungeons[dungeonSelect].type === "overworld"){
         for (let key in dungeons[dungeonSelect].skulllist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].skulllist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].skulllist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "skull");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      if (scrubs === 'Scrubsanity' && dungeons[dungeonSelect].scrublist) {
         for (let key in dungeons[dungeonSelect].scrublist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].scrublist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].scrublist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "scrub");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      var shopitem = shopsize;
      var shopnum;
      var started = true;
      if (shopsize == 0)
         dNone = true;
      else if (shopsize > 0 && (quest === "Mixed" || quest === "Vanilla")) {
            for (let key in dungeons[dungeonSelect].shoplist) {
               if (started == true) {
                  if (dungeons[dungeonSelect] == dungeons[13])
                     shopnum = 3;
                  else if (dungeons[dungeonSelect] == dungeons[16])
                     shopnum = 2;
                  else
                     shopnum = 1;
               }
               else {
                  if (shopitem === undefined)
                     shopitem = shopsize;
                  else if (shopitem <= 0) {
                     if (shopsize != 4) dNone = true;
                        shopitem--; 
                  }
               }
               started = false;
               
               if (shopitem > 0 || shopsize == 4) {
                  shopitem--;
                  let li = document.createElement('li');
                  li.style.cursor = 'pointer';
                  li.innerText = key;
                     if (dungeons[dungeonSelect].shoplist[key].isOpened) {
                        li.className = "DCopened";
                     } 
                     else if (dungeons[dungeonSelect].shoplist[key].isAvailable()) {
                        li.className = "DCavailable";
                     } 
                     else li.className = "DCunavailable";

                  li.onclick = new Function('toggleShopChest(this,' + dungeonSelect + ',"' + key + '")');
                  li.onmouseover = new Function('highlightDungeonChest(this)');
                  li.onmouseout = new Function('unhighlightDungeonChest(this)');
                  li.setAttribute("data-type", "shop");

                  DClist.appendChild(li);
               }
               
               
               if (shopitem < 0 && shopnum > 1) {
                     if (shopsize == 1 && shopitem <= -3) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
                     else if (shopsize == 2 && shopitem <= -2) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
                     else if (shopsize == 3 && shopitem <= -1) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
               }
            }           
      }
      if (trialsize > 0 && dungeons[dungeonSelect].triallist) {
         for (let key in dungeons[dungeonSelect].triallist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].triallist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].triallist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleTrial(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "trial");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }         
   }
   
   if (quest === "Master" || quest === "Mixed") {
      dNone = false;
      if (quest === "Mixed" && listFilter === "master" && dungeons[dungeonSelect].type === "overworld") {
         dNone = true;
         }
      if (quest === "Mixed" && listFilter === "master" && dungeons[dungeonSelect].type === "dungeon") {
         dNone = false;
         }
      
      if (quest === "Master" && dungeons[dungeonSelect].type === "overworld"){
         for (var key in dungeons[dungeonSelect].chestlist) {
            var s = document.createElement('li');
            s.innerHTML = key

            if (dungeons[dungeonSelect].chestlist[key].isOpened)
               s.className = "DCopened";
            else if (dungeons[dungeonSelect].chestlist[key].isAvailable())
               s.className = "DCavailable";
            else
               s.className = "DCunavailable";
            
            if (OcarinaShuffle == false && key == "Fairy Ocarina") {
               s.classList.add("d-none");}
            if (WeirdEgg == false && key == "Malons Weird Egg") {
               s.classList.add("d-none"); }
            if (BeanShuffle == false && key == "Bean Salesman") {
               s.classList.add("d-none"); }
            if (Cowsanity == false && s.innerHTML.includes("Cow Milk") && key != "Cow Milk Grotto") {
               s.classList.add("d-none"); }
            if (Cowsanity == false && GrottoER == false && key == "Cow Milk Grotto" ) {
               s.classList.add("d-none"); }
            if (GrottoER == false && (s.innerHTML.includes("Octorok Grotto") || s.innerHTML.includes("Fountain Grotto") )) {
               s.classList.add("d-none"); }
 
            s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            s.onmouseover = new Function('highlightDungeonChest(this)');
            s.onmouseout = new Function('unhighlightDungeonChest(this)');
            s.style.cursor = "pointer";
            s.setAttribute("data-type", "chest");
            if (dNone) s.classList.add("d-none");
            DClist.appendChild(s)
         }
      }
      if (dungeons[dungeonSelect].type === "dungeon"){
         if (quest === "Mixed" && listFilter === "vanilla") {
            dNone = true;
         }
         for (var key in dungeons[dungeonSelect].MQlist) {
            var s = document.createElement('li');
            s.innerHTML = key
            if (dungeons[dungeonSelect].MQlist[key].isOpened)
               s.className = "DCopened";
            else if (dungeons[dungeonSelect].MQlist[key].isAvailable())
               s.className = "DCavailable";
            else
               s.className = "DCunavailable";
            
            if (Cowsanity == false && s.innerHTML.includes("Cow Milk")) {
               s.classList.add("d-none"); }

            s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            s.onmouseover = new Function('highlightDungeonChest(this)');
            s.onmouseout = new Function('unhighlightDungeonChest(this)');
            s.style.cursor = "pointer";
            if (dNone) s.classList.add("d-none");
            s.setAttribute("data-type", "MQ");
            DClist.appendChild(s)
         }
      }
      if ((skulltula === "Dungeons" || skulltula === "All") &&  dungeons[dungeonSelect].type === "dungeon"){
         for (let key in dungeons[dungeonSelect].MQskulllist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].MQskulllist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].MQskulllist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "MQskull");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      if ((skulltula === "Overworld" || skulltula === "All") && dungeons[dungeonSelect].type === "overworld"  && quest === "Master") {
         for (let key in dungeons[dungeonSelect].skulllist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].skulllist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].skulllist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "skull");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      if (scrubs === 'Scrubsanity' && dungeons[dungeonSelect].MQscrublist && dungeons[dungeonSelect].type === "dungeon") {
         for (let key in dungeons[dungeonSelect].MQscrublist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].MQscrublist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].MQscrublist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "MQscrub");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      if (scrubs === 'Scrubsanity' && dungeons[dungeonSelect].scrublist && dungeons[dungeonSelect].type === "overworld"  && quest === "Master") {
         for (let key in dungeons[dungeonSelect].scrublist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].scrublist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].scrublist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "scrub");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
      var shopitem = shopsize;
      var shopnum;
      var started = true;
      if (shopsize == 0)
         dNone = true;
      else if (shopsize > 0 && (quest === "Master")) {
            for (let key in dungeons[dungeonSelect].shoplist) {
               if (started == true) {
                  if (dungeons[dungeonSelect] == dungeons[13])
                     shopnum = 3;
                  else if (dungeons[dungeonSelect] == dungeons[16])
                     shopnum = 2;
                  else
                     shopnum = 1;
               }
               else {
                  if (shopitem === undefined)
                     shopitem = shopsize;
                  else if (shopitem <= 0) {
                     if (shopsize != 4) dNone = true;
                     shopitem--; 
                  }
               }
               started = false;
               
               if (shopitem > 0 || shopsize == 4) {
                  shopitem--;
                  let li = document.createElement('li');
                  li.style.cursor = 'pointer';
                  li.innerText = key;
                     if (dungeons[dungeonSelect].shoplist[key].isOpened) {
                        li.className = "DCopened";
                     } 
                     else if (dungeons[dungeonSelect].shoplist[key].isAvailable()) {
                        li.className = "DCavailable";
                     } 
                     else li.className = "DCunavailable";

                  li.onclick = new Function('toggleShopChest(this,' + dungeonSelect + ',"' + key + '")');
                  li.onmouseover = new Function('highlightDungeonChest(this)');
                  li.onmouseout = new Function('unhighlightDungeonChest(this)');
                  li.setAttribute("data-type", "shop");
                  if (dNone) li.classList.add("d-none");

                  DClist.appendChild(li);
               }
               if (shopitem < 0 && shopnum > 1) {
                     if (shopsize == 1 && shopitem <= -3) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
                     else if (shopsize == 2 && shopitem <= -2) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
                     else if (shopsize == 3 && shopitem <= -1) {
                        shopitem = shopsize;
                        dNone = false;
                        shopnum--;
                     }
               }
            }           
      }
      if (trialsize > 0 && dungeons[dungeonSelect].triallist) {
         for (let key in dungeons[dungeonSelect].triallist) {
            let li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerText = key;
            if (dungeons[dungeonSelect].triallist[key].isOpened) {
               li.className = "DCopened";
            } else if (dungeons[dungeonSelect].triallist[key].isAvailable()) {
               li.className = "DCavailable";
            } else {
               li.className = "DCunavailable";
            }
            li.onclick = new Function('toggleTrial(this,' + dungeonSelect + ',"' + key + '")');
            li.onmouseover = new Function('highlightDungeonChest(this)');
            li.onmouseout = new Function('unhighlightDungeonChest(this)');
            li.setAttribute("data-type", "trial");
            if (dNone) li.classList.add("d-none");
            DClist.appendChild(li);
         }
      }
   }
     
   if (quest === "Mixed" && dungeons[dungeonSelect].type === "dungeon") {
      const submaparea = document.getElementById("submaparea");
      const submaplist = document.getElementById("submaplist");
      if (!submaparea.getAttribute("data-filter")) {
         submaparea.setAttribute("data-filter", "vanilla");
      }
      submaparea.oncontextmenu = function(e) {
         e.preventDefault();
         
         if (document.querySelectorAll("#submaplist .d-none").length) {
            if (submaparea.getAttribute("data-filter") === "vanilla") {
               
               var clean = getDungeonAvailability(dungeons[dungeonSelect]);
               if (clean === "possible") {
                  bulkDCSelect()
                  bulkDCSelect()
               }
               else if (clean === "unavailable" || clean === "available" || clean === "opened")
                  bulkDCSelect();
               
               
               submaparea.setAttribute("data-filter", "master");
               submaparea.innerHTML = submaparea.innerText + " MQ";
               clean = getDungeonAvailability(dungeons[dungeonSelect]);
               if (clean === "opened")
                  bulkDCSelect();
               
               submaplist.childNodes.forEach(function(item, index) {
                  let itemType = item.getAttribute("data-type");
                  if (itemType && itemType.startsWith("MQ")) {
                     item.classList.remove("d-none");
                  } else { 
                     item.classList.add("d-none");
                  }
               })
            } else if (submaparea.getAttribute("data-filter") === "master") {
               
               var clean = getDungeonAvailability(dungeons[dungeonSelect]);
               if (clean === "possible") {
                  bulkDCSelect()
                  bulkDCSelect()
               }
               else if (clean === "unavailable" || clean === "available")
                  bulkDCSelect();
               
               
               submaparea.setAttribute("data-filter", "vanilla");
               submaparea.innerHTML = dungeons[dungeonSelect].name;
               clean = getDungeonAvailability(dungeons[dungeonSelect]);
               if (clean === "opened")
                  bulkDCSelect();
               
               submaplist.childNodes.forEach(function(item, index) {
                  let itemType = item.getAttribute("data-type");
                  if (itemType && itemType.startsWith("MQ")) {
                     item.classList.add("d-none");
                  } else {
                     item.classList.remove("d-none");
                  }
               })
            }
         }
         updateGridItemAll();
         updateMap();
      }
   }
}


function bulkDCSelect() {

   const total = document.querySelectorAll('#submaplist li:not(.d-none)').length;
   const available = document.querySelectorAll('#submaplist li.DCavailable:not(.d-none)').length;
   const unavailable = document.querySelectorAll('#submaplist li.DCunavailable:not(.d-none)').length;
   const opened = document.querySelectorAll('#submaplist li.DCopened:not(.d-none)').length;
   
   let mode = 'none';
   if (available > 0) {
      mode = 'available';
   } else if (total === unavailable) {
      mode = 'all';
   } else if (total === opened) {
      mode = 'none';
   } else if (opened === total - available) {
      mode = 'none';
   } else if (unavailable === total - opened) {
      mode = 'all';
   }

   let selector = "#thisisinvalidselectornoonemayneverusethisasid";
   let opening = false;
   if (mode === 'none') {
      selector = '#submaplist li';
      opening = false;
   } else if (mode === 'available') {
      selector = '#submaplist li.DCavailable';
      opening = true;

   } else if (mode === 'all') {
      selector = '#submaplist li';
      opening = true;
   }
   if (quest === "Mixed") {
      const filter = document.getElementById("submaparea").getAttribute("data-filter");
      if (filter === 'vanilla') {
         selector = selector + ':not([data-type^=MQ])';
      }  else if (filter === 'master') {
         selector = selector + '[data-type^=MQ]';
      }
   }
   document.querySelectorAll(selector).forEach(function (dungeon) {
      let itemType = dungeon.getAttribute("data-type") + "list";
      for (let key in dungeons[dungeonSelect][itemType]) {
         if (!(BeanShuffle == false && dungeons[dungeonSelect].chestlist[key] == "Bean Salesman")) {
            dungeons[dungeonSelect][itemType][dungeon.innerHTML].isOpened = opening; 
         }
      }
   });
   drawDungeonList();
   updateMap();
}

function toggleDungeonChest(sender, d, c) {
   const chestType = sender.getAttribute('data-type');
   if (chestType === 'chest') {
      dungeons[d].chestlist[c].isOpened = !dungeons[d].chestlist[c].isOpened;
      if (dungeons[d].chestlist[c].isOpened)
         sender.className = "DCopened";
      else if (dungeons[d].chestlist[c].isAvailable())
         sender.className = "DCavailable";
      else
         sender.className = "DCunavailable";
   } else if (chestType === 'skull') {
      toggleSkullChest(sender, d, c);
   } else if (chestType === 'scrub') {
      toggleScrubChest(sender, d, c);
   } else if (chestType === 'MQ') {
      toggleMQChest(sender, d, c);
   } else if (chestType === 'MQskull') {
      toggleMQSkullChest(sender, d, c);
   } else if (chestType === 'MQscrub') {
      toggleMQScrubChest(sender, d, c);
   }  else if (chestType === 'trial') {
      toggleTrial(sender, d, c);
   }
   
   updateMap();
}

function toggleSkullChest(sender, d, c) {
   dungeons[d].skulllist[c].isOpened = !dungeons[d].skulllist[c].isOpened;
   if (dungeons[d].skulllist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].skulllist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
   updateSkullIcon()

}

function getSelectedSkullsOnMap() {
   let count = 0;
   if (quest !== "Mixed") {
      dungeons.forEach(function(dungeon) {
         if (dungeon.skulllist) {
            for (var key in dungeon.skulllist) {
               if (dungeon.skulllist[key].isOpened) count++;
            }
         }
         if (dungeon.MQskulllist) {
            for (var key in dungeon.MQskulllist) {
               if (dungeon.MQskulllist[key].isOpened) count++;
            }
         }
      })
   }
   return count;
}

function updateSkullIcon() {
   skullcount = (items["Skulltula"] + getSelectedSkullsOnMap()) % itemsMax.Skulltula;
   itemGrid[7][8].item.style.backgroundImage = `url("images/Skulltula${skullcount}.png")`;
   if (skullcount === 0) {
      itemGrid[7][8].item.classList.remove("true")
      itemGrid[7][8].item.classList.add("false")
   } else {
      itemGrid[7][8].item.classList.remove("false")
      itemGrid[7][8].item.classList.add("true")
   }
}

function toggleScrubChest(sender, d, c) {
   dungeons[d].scrublist[c].isOpened = !dungeons[d].scrublist[c].isOpened;
   if (dungeons[d].scrublist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].scrublist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
}

function toggleTrial(sender, d, c) {
   dungeons[d].triallist[c].isOpened = !dungeons[d].triallist[c].isOpened;
   if (dungeons[d].triallist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].triallist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
}

function toggleShopChest(sender, d, c) {
   dungeons[d].shoplist[c].isOpened = !dungeons[d].shoplist[c].isOpened;
   if (dungeons[d].shoplist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].shoplist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
   updateMap();
}

function toggleMQChest(sender, d, c) {
   dungeons[d].MQlist[c].isOpened = !dungeons[d].MQlist[c].isOpened;
   if (dungeons[d].MQlist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].MQlist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
}

function toggleMQSkullChest(sender, d, c) {
   dungeons[d].MQskulllist[c].isOpened = !dungeons[d].MQskulllist[c].isOpened;
   if (dungeons[d].MQskulllist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].MQskulllist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
}

function toggleMQScrubChest(sender, d, c) {
   dungeons[d].MQscrublist[c].isOpened = !dungeons[d].MQscrublist[c].isOpened;
   if (dungeons[d].MQscrublist[c].isOpened) {
      sender.className = "DCopened";
   } else if (dungeons[d].MQscrublist[c].isAvailable()) {
      sender.className = "DCavailable";
   } else {
      sender.className = "DCunavailable";
   }
}

function highlightDungeonChest(x) {
   x.style.backgroundColor = "#282828"
}

function unhighlightDungeonChest(x) {
   x.style.backgroundColor = ""
}

function setOrder(H) {
   if (H) {
      document.getElementById('layoutdiv').classList.remove('flexcontainer');
   } else {
      document.getElementById('layoutdiv').classList.add('flexcontainer');
   }
   saveCookie();
}

function setRainbow(sender) {
   rainbowbridge = sender.value;
   updateMap();
   saveCookie();
}

function setCastle(sender) {
   castlelogic = sender.value;
   if (castlelogic == 'Removed')
      itemsMin.BossCastle = 1;
   else itemsMin.BossCastle = 0;
   items.BossCastle = itemsMin.BossCastle;
   updateGridItemAll();   
   updateMap();
   saveCookie();
}

function setTrialSize(sender) {
   trialsize = sender.value;
   updateMap();
   saveCookie();
}

function setQuest(sender) {
   quest = sender.value;
   if (quest == 'Master') {
      questimg = 1;
      itemsMax.ForestKey = 6;
      itemsMax.FireKey = 5;
      itemsMax.WaterKey = 2;
      itemsMax.SpiritKey = 7;
      itemsMax.ShadowKey = 6;
      itemsMax.GTGKey = 3;
      itemsMax.CastleKey = 3;
      itemsMax.WellKey = 2;
   } else if (quest == 'Mixed') {
      itemsMax.ForestKey = 6;
      itemsMax.FireKey = 8;
      itemsMax.WaterKey = 6;
      itemsMax.SpiritKey = 7;
      itemsMax.ShadowKey = 6;
      itemsMax.GTGKey = 9;
      itemsMax.CastleKey = 3;
      itemsMax.WellKey = 3;
   } else {
      questimg = 0;
      itemsMax.ForestKey = 5;
      itemsMax.FireKey = 8;
      itemsMax.WaterKey = 6;
      itemsMax.SpiritKey = 5;
      itemsMax.ShadowKey = 5;
      itemsMax.GTGKey = 9;
      itemsMax.CastleKey = 2;
      itemsMax.WellKey = 3;
   }
   updateGridItemAll();
   drawDungeonList();
   updateMap();
   saveCookie();
}

function setFortressLogic(sender) {
   gerudobridge = sender.value;
   if (gerudobridge == 'Start') {
      items.Membership = true;
   }
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setCarpenter(sender) {
   Rescue1 = sender.checked;
   if (Rescue1 == 1 && keyimg >= 2) {
      keyimg = 0;
   }
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setSmallKeys(sender) {
   smallkeys = sender.value;
   if (smallkeys == 'Remove') {
      items.ForestKey = 5;
      items.FireKey = 8;
      items.WaterKey = 6;
      items.ShadowKey = 5;
      items.SpiritKey = 5;
      items.CastleKey = 2;
      items.GTGKey = 9;
      items.WellKey = 3;
   }
   if (smallkeys == 'Dungeons') {
      items.ForestKey = 5;
      items.FireKey = 8;
      items.WaterKey = 6;
      items.ShadowKey = 5;
      items.SpiritKey = 5;
      items.CastleKey = 2;
      items.GTGKey = 9;
      items.WellKey = 3;
   }
   if (smallkeys == 'Keysanity') {
      items.ForestKey = 0;
      items.FireKey = 0;
      items.WaterKey = 0;
      items.ShadowKey = 0;
      items.SpiritKey = 0;
      items.CastleKey = 0;
      items.GTGKey = 0;
      items.WellKey = 0;
   }
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setBossKeys(sender) {
   bosskeys = sender.value;
   if (bosskeys == 'Remove') {
      items.BossForest = 1;
      items.BossFire = 1;
      items.BossWater = 1;
      items.BossShadow = 1;
      items.BossSpirit = 1;
   }
   if (bosskeys == 'Dungeons') {
      items.BossForest = 1;
      items.BossFire = 1;
      items.BossWater = 1;
      items.BossShadow = 1;
      items.BossSpirit = 1;
   }
   if (bosskeys == 'Keysanity') {
      items.BossForest = 0;
      items.BossFire = 0;
      items.BossWater = 0;
      items.BossShadow = 0;
      items.BossSpirit = 0;
   }
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setSkulltula(sender) {
   skulltula = sender.value;
   drawDungeonList();
   updateMap();
   saveCookie();
}

function setScrub(sender) {
   scrubs = sender.value;
   drawDungeonList();
   updateMap();
   saveCookie();
}

function setForest(sender) {
   OpenForest = sender.checked;
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setGate(sender) {
   OpenGate = sender.checked;
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setDoor(sender) {
   OpenDoor = sender.checked;
   if (OpenDoor)
      itemsMin.MasterSword = 1;
   else itemsMin.MasterSword = 0;
   items.MasterSword = itemsMin.MasterSword;
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setFountain(sender) {
   OpenFountain = sender.checked;
   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setOcarina(sender) {
   OcarinaShuffle = sender.checked;
   if (OcarinaShuffle == false)
      itemsMin.Ocarina = 1;
   else itemsMin.Ocarina = 0;
   items.Ocarina = itemsMin.Ocarina;
   updateGridItemAll();
   updateMap();
   drawDungeonList();
   saveCookie();
}

function setSongs(sender) {
   SongShuffle = sender.checked;
   updateGridItemAll();
   saveCookie();
}

function setEgg(sender) {
   WeirdEgg = sender.checked;
   if (WeirdEgg == false)
      itemsMin.Mask = 1;
   else {
      itemsMin.Mask = 0;
   }
   items.Mask = itemsMin.Mask;
   updateGridItemAll();
   updateMap();
   drawDungeonList();
   saveCookie();
}

function setBean(sender) {
   BeanShuffle = sender.checked;
   drawDungeonList();
   updateMap();
   saveCookie();
}

function setShopsize(sender) {
   shopsize = sender.value;
   if (shopsize > 0) {
      Shopsanity = true;
   }
   else if (shopsize == 0) {
      Shopsanity = false;
   }
   drawDungeonList();
   updateMap();
   saveCookie();
} 

function setGrottoER(sender) {
   GrottoER = sender.checked;
   updateMap();
   drawDungeonList();
   saveCookie();
}

function setCows(sender) {
   Cowsanity = sender.checked;
   updateMap();
   drawDungeonList();
   saveCookie();
}

function setBombchu(sender) {
   BombchuLogic = sender.checked;
   updateMap();
   saveCookie();
}

function setZoom(target, sender) {
   document.getElementById(target).style.zoom = sender.value / 100;
   document.getElementById(target).style.zoom = sender.value / 100;

   document.getElementById(target).style.MozTransform = "scale(" + (sender.value / 100) + ")";
   document.getElementById(target).style.MozTransformOrigin = "0 0";

   document.getElementById(target + 'size').innerHTML = (sender.value) + '%';
   saveCookie();
}

function showSettings(sender) {
   if (editmode) {
      var r, c;
      var startdraw = false;
      for (r = 7; r >= 0 && !startdraw; r--) {
         if (!itemLayout[r] || !itemLayout[r].length) {
            itemGrid[r]['row'].style.display = 'none';
         } else {
            for (c = 0; c < 8; c++) {
               if (!!itemLayout[r][c] && itemLayout[r][c] != 'blank') {
                  startdraw = true;
                  r++;
                  break;
               }
            }

            if (!startdraw) {
               itemGrid[r]['row'].style.display = 'none';
               itemGrid[r]['half'].style.display = 'none';
            }
         }
      }

      for (; r >= 0; r--) {
         itemGrid[r]['row'].style.display = '';
         itemGrid[r]['button'].style.display = 'none';
      }

      editmode = false;
      updateGridItemAll();
      showTracker('mapdiv', document.getElementsByName('showmap')[0]);
      document.getElementById('itemconfig').style.display = 'none';

      sender.innerHTML = '🔧';
      saveCookie();
   } else {
      var x = document.getElementById('settings');
      if (!x.style.display || x.style.display == 'none') {
         x.style.display = 'initial';
         sender.innerHTML = 'X';
      } else {
         x.style.display = 'none';
         sender.innerHTML = '🔧';
      }
   }
}

function showTracker(target, sender) {
      document.getElementById(target).style.display = '';
}

function clickRowButton(row) {
   if (itemLayout[row].length % 2 == 0) {
      itemGrid[row]['button'].innerHTML = '-';
      itemGrid[row]['button'].style.backgroundColor = 'red';
      itemGrid[row][6]['item'].style.display = '';
      itemGrid[row]['half'].style.display = 'none';
      itemLayout[row][6] = 'blank';
   } else {
      itemGrid[row]['button'].innerHTML = '+';
      itemGrid[row]['button'].style.backgroundColor = 'green';
      itemGrid[row][6]['item'].style.display = 'none';
      itemGrid[row]['half'].style.display = '';
      document.getElementById(itemLayout[row][6]).style.opacity = 1;
      itemLayout[row].splice(-1, 1);
   }
   updateGridItem(row, 6);
}


function EditMode() {
   var r, c;

   for (r = 0; r < 8; r++) {
      itemGrid[r]['row'].style.display = '';
      itemGrid[r]['button'].style.display = '';
   }

   editmode = true;
   updateGridItemAll();
   showTracker('mapdiv', {checked: false});
   document.getElementById('settings').style.display = 'none';
   document.getElementById('itemconfig').style.display = '';

   document.getElementById('settingsbutton').innerHTML = 'Exit Edit Mode';
}

function createItemTracker(sender) {
   var r;
   for (r = 0; r < 8; r++) {
      itemGrid[r] = [];
      itemLayout[r] = [];

      itemGrid[r]['row'] = document.createElement('table');
      itemGrid[r]['row'].className = 'tracker';
      sender.appendChild(itemGrid[r]['row']);

      var tr = document.createElement('tr');
      itemGrid[r]['row'].appendChild(tr);

      itemGrid[r]['half'] = document.createElement('td');
      itemGrid[r]['half'].className = 'halfcell';
      tr.appendChild(itemGrid[r]['half']);

      var i;
      for (i = 0; i < 10; i++) {
         itemGrid[r][i] = [];
         itemLayout[r][i] = 'blank';

         itemGrid[r][i]['item'] = document.createElement('td');
         itemGrid[r][i]['item'].className = 'griditem';
         tr.appendChild(itemGrid[r][i]['item']);

         var tdt = document.createElement('table');
         tdt.className = 'lonk';
         itemGrid[r][i]['item'].appendChild(tdt);

         var tdtr1 = document.createElement('tr');
         tdt.appendChild(tdtr1);
         itemGrid[r][i][0] = document.createElement('th');
         itemGrid[r][i][0].className = 'corner';
         itemGrid[r][i][0].onclick = new Function("gridItemClick(" + r + "," + i + ",0)");
         tdtr1.appendChild(itemGrid[r][i][0]);
         itemGrid[r][i][1] = document.createElement('th');
         itemGrid[r][i][1].className = 'corner';
         itemGrid[r][i][1].onclick = new Function("gridItemClick(" + r + "," + i + ",1)");
         tdtr1.appendChild(itemGrid[r][i][1]);
         var tdtr2 = document.createElement('tr');
         tdt.appendChild(tdtr2);
         itemGrid[r][i][2] = document.createElement('th');
         itemGrid[r][i][2].className = 'corner';
         itemGrid[r][i][2].onclick = new Function("gridItemClick(" + r + "," + i + ",2)");
         tdtr2.appendChild(itemGrid[r][i][2]);
         itemGrid[r][i][3] = document.createElement('th');
         itemGrid[r][i][3].className = 'corner';
         itemGrid[r][i][3].onclick = new Function("gridItemClick(" + r + "," + i + ",3)");
         tdtr2.appendChild(itemGrid[r][i][3]);
      }

      var half = document.createElement('td');
      half.className = 'halfcell';
      tr.appendChild(half);
      itemGrid[r]['button'] = document.createElement('button');
      itemGrid[r]['button'].innerHTML = '-';
      itemGrid[r]['button'].style.backgroundColor = 'red';
      itemGrid[r]['button'].style.color = 'white';
      itemGrid[r]['button'].onclick = new Function("clickRowButton(" + r + ")");
      ;
      half.appendChild(itemGrid[r]['button']);
   }
}

function updateGridItem(row, index) {
   var item = itemLayout[row][index];

   if (editmode) {
      if (!item || item == 'blank') {
         itemGrid[row][index]['item'].style.backgroundImage = ("url(images/blank.png)");
      } else if ((typeof items[item]) == "boolean") {
         itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + ".png)";
      } else {
         itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + itemsMax[item] + ".png)";
      }

      itemGrid[row][index]['item'].style.border = '1px solid white';
      itemGrid[row][index]['item'].style.opacity = 1;

      return;
   }

   itemGrid[row][index]['item'].style.border = '0px';
   itemGrid[row][index]['item'].style.opacity = '';

   if (!item || item == 'blank') {
      itemGrid[row][index]['item'].style.backgroundImage = '';
      return;
   }

   if ((typeof items[item]) == "boolean") {
      itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + ".png)";
   } else {
      itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + items[item] + ".png)";
   }

   itemGrid[row][index]['item'].className = "griditem " + (!!items[item]);

   if (questdungeons[item] !== undefined) {
      if (quest == "Mixed") {
         const filter = document.getElementById('submaparea').getAttribute('data-filter');
         if (filter === "master" && dungeons[dungeonSelect].requiredKey === item) {
            itemGrid[row][index][0].style.backgroundImage = "url(images/MQ.png)";
         } else {
            itemGrid[row][index][0].style.backgroundImage = "";
         }
      } else if (quest == "Master") {
         itemGrid[row][index][0].style.backgroundImage = "url(images/MQ.png)";
      } else {
         questimg = 0;
         itemGrid[row][index][0].style.backgroundImage = "";
      }
   }
   if (fortresskeys[item] !== undefined) {
      if (smallkeys == 'Keysanity' && gerudobridge != 'Start')
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + keyimg[fortresskeys[item]] + ".png)";
      else
         itemGrid[row][index][3].style.backgroundImage = "";
   }
   if (songs[item] !== undefined) {
      if (SongShuffle)
         itemGrid[row][index][3].style.backgroundImage = "";
      else
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + songimg[songs[item]] + ".png)";
   }
   if (item === "Skulltula") {
      updateSkullIcon()
   }
}



function updateGridItemAll() {
   for (r = 0; r < 8; r++) {
      for (c = 0; c < 10; c++) {
         updateGridItem(r, c);
      }
   }

}

function setGridItem(item, row, index) {
   var previtem = itemLayout[row][index];
   itemLayout[row][index] = item;
   if (item != 'blank')
      document.getElementById(item).style.opacity = 0.25;
   updateGridItem(row, index)
}

function initGridRow(itemsets) {
   medallions = {
      ForestMedallion: 0,
      FireMedallion: 0,
      WaterMedallion: 0,
      ShadowMedallion: 0,
      SpiritMedallion: 0,
      LightMedallion: 0,
      KokiriEmerald: 0,
      GoronRuby: 0,
      ZoraSapphire: 0,
   };
   fortresskeys = {Membership: 0,};
   songs = {
      ZeldasLullaby: 0,
      EponasSong: 0,
      SunsSong: 0,
      SariasSong: 0,
      SongofTime: 0,
      SongofStorms: 0,
      MinuetofForest: 0,
      PreludeofLight: 0,
      BoleroofFire: 0,
      SerenadeofWater: 0,
      NocturneofShadow: 0,
      RequiemofSpirit: 0,
   };
   questdungeons = {
      ForestKey: [],
      FireKey: [],
      WaterKey: [],
      SpiritKey: [],
      ShadowKey: [],
      CastleKey: [],
      WellKey: [],
      GTGKey: [],
   };

   var r, c;
   var startdraw = false;
   for (r = 7; r >= 0 && !startdraw; r--) {
      if (!itemsets[r] || !itemsets[r].length) {
         itemGrid[r]['row'].style.display = 'none';
         itemGrid[r]['half'].style.display = 'none';
      } else {
         for (c = 0; c < 10; c++) {
            if (!!itemsets[r][c] && itemsets[r][c] != 'blank') {
               startdraw = true;
               r++;
               break;
            }
         }

         if (!startdraw) {
            itemGrid[r]['row'].style.display = 'none';
            itemGrid[r]['half'].style.display = 'none';
         }
      }
   }

   for (; r >= 0; r--) {
      itemGrid[r]['row'].style.display = '';

      if (itemsets[r].length % 2 != 0) {
         itemGrid[r]['half'].style.display = 'none';
         itemGrid[r][6]['item'].style.display = '';
      } else {
         clickRowButton(r);
      }
      itemGrid[r]['button'].style.display = 'none';

      for (c = 0; c < 10; c++) {
         if (itemsets[r][c]) {
            setGridItem(itemsets[r][c], r, c);
         }
      }
   }
}

function gridItemClick(row, col, corner) {
   if (editmode) {
      if (selected.item) {
         document.getElementById(selected.item).style.border = '1px solid white';
         var old = itemLayout[row][col];

         if (old == selected.item) {
            selected = {};
            return;
         }

         if (selected.item != 'blank') {
            document.getElementById(selected.item).style.opacity = 0.25;

            var r, c;
            var found = false;
            for (r = 0; r < 8; r++) {
               for (c = 0; c < 10; c++) {
                  if (itemLayout[r][c] == selected.item) {
                     itemLayout[r][c] = 'blank';
                     found = true;
                     break;
                  }
               }

               if (found)
                  break;
            }
         }

         itemLayout[row][col] = selected.item;
         updateGridItem(row, col);

         document.getElementById(old).style.opacity = 1;

         selected = {};
      } else if (selected.row !== undefined) {
         itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';

         var temp = itemLayout[row][col]
         itemLayout[row][col] = itemLayout[selected.row][selected.col];
         itemLayout[selected.row][selected.col] = temp;
         updateGridItem(row, col);
         updateGridItem(selected.row, selected.col);

         selected = {};
      } else {
         itemGrid[row][col]['item'].style.border = '3px solid yellow';
         selected = {row: row, col: col};
      }

      return;
   }

   var item = itemLayout[row][col];

   if (medallions[item] !== undefined) {
      if (corner == 3) {
         medallions[item]++;
         if (medallions[item] >= 10)
            medallions[item] = 0;
      } else if (corner == 2) {
         medallions[item]++;
         if (medallions[item] >= 10)
            medallions[item] = 0;
      } else {
         items[item] = !items[item];
      }
   } else if (questimg[item] !== undefined) {
      if (quest == "Mixed") {
         if (corner) {
            items.questdungeons[questimg]++;
            if (questdungeons[item] >= 2)
               questdungeons[item] = 0;
         } else if (corner == 0) {
            items.questdungeons[questimg]++;
            if (questdungeons[item] >= 2)
               questdungeons[item] = 0;
         } else {
            items[item] = !items[item];
         }
      } else if (quest == 'Master') {
         questimg = 1;
         questdungeons[item]++;
         if (questdungeons >= itemsMax)
            questdungeon[item] = 0;
         questdungeons[item] = 1;
      } else if (quest == 'Vanilla') {
         questimg = 0;
         if (questdungeons[item] >= itemsMax)
            questdungeons[item] = 0;
         questdungeons[item] = 0;
      }
   } else if (fortresskeys[item] !== undefined) {
      if (smallkeys == "Keysanity") {
         if (corner == 3) {
            fortresskeys[item]++;
            if (Rescue1) {
               if (fortresskeys[item] >= 2) {
                  fortresskeys[item] = 0;
               }
            }
            if (!Rescue1) {
               if (fortresskeys[item] >= 5) {
                  fortresskeys[item] = 0;
               }
            }
         } else if (corner == 2) {
            fortresskeys[item]++;
            if (Rescue1) {
               if (fortresskeys[item] >= 2) {
                  fortresskeys[item] = 0;
               }
            } else if (!Rescue1) {
               if (fortresskeys[item] >= 5) {
                  fortresskeys[item] = 0;
               }
            }
         } else {
            items[item] = !items[item];
         }
      } else {
         items[item] = !items[item];
      }
   } else if (songs[item] !== undefined) {
      if (corner == 3) {
         songs[item]++;
         if (songs[item] >= 13)
            songs[item] = 0;
      } else if (corner == 2) {
         songs[item]++;
         if (songs[item] >= 13)
            songs[item] = 0;
      } else {
         items[item] = !items[item];
      }
   } else if ((typeof items[item]) == "boolean") {
      items[item] = !items[item];
   } else {
      items[item]++;
      if (items[item] > itemsMax[item]) {
         items[item] = itemsMin[item];
      }
   }

   updateMap()
   updateGridItem(row, col);
}

function updateMap() {
   for (k = 0; k < chests.length; k++) {
      if (!chests[k].isOpened)
         document.getElementById(k).className = "mapspan chest " + checkChestAvailablity(chests[k]) + ((chestMarked.indexOf(k) > -1) ? " wayofhero" : " ");
      if (chests[k].name.startsWith("Skulltula")) {
         if (skulltula === "Overworld" || skulltula === "All") {
            document.getElementById(k).classList.remove("d-none");
         } else {
            document.getElementById(k).classList.add("d-none");
         }
      }
      if (Cowsanity == true && chests[k].name.includes("Cow Milk"))
         document.getElementById(k).classList.remove("d-none");
      else if (Cowsanity == false && chests[k].name.includes("Cow Milk") && ((skulltula === "Overworld" || skulltula === "All") ) )
         document.getElementById(k).classList.remove("d-none");
      else if (Cowsanity == false && chests[k].name.includes("Cow Milk") )
         document.getElementById(k).classList.add("d-none");   
   }

   for (k = 0; k < dungeons.length; k++) {
      document.getElementById("dungeon" + k).className = "mapspan dungeon " + getDungeonAvailability(dungeons[k]) + ((dungeonMarked.indexOf(k) > -1) ? " wayofhero" : " ");

      var DCcount = 0;

      if (quest === "Vanilla" || quest === "Mixed") {
         for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
               if (OcarinaShuffle == false && key == "Fairy Ocarina")
               {}
               else if (WeirdEgg == false && key == "Malons Weird Egg")
               {}
               else if (BeanShuffle == false && key == "Bean Salesman")
               {}
               else if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable() && !(BeanShuffle == false && key == "BeanSalseman") )
                  DCcount++;
            }
         }
         if ((skulltula === "Dungeons" || skulltula === "All") && dungeons[k].type === "dungeon") {
            for (var key in dungeons[k].skulllist) {
               if (dungeons[k].skulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if ((skulltula === "Overworld" || skulltula === "All") && dungeons[k].type === "overworld") {
            for (var key in dungeons[k].skulllist) {
               if (dungeons[k].skulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (scrubs === "Scrubsanity") {
            for (var key in dungeons[k].scrublist) {
               if (dungeons[k].scrublist.hasOwnProperty(key)) {
                  if (!dungeons[k].scrublist[key].isOpened && dungeons[k].scrublist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (shopsize > 0){
            for (var key in dungeons[k].shoplist) {
               if (dungeons[k].shoplist.hasOwnProperty(key)) {
                  if (!dungeons[k].shoplist[key].isOpened && dungeons[k].shoplist[key].isAvailable() && !key.includes("d-none") )
                     DCcount++;
                  for (var step = 2; step <= 4; step++) {
                     if(key.includes("Shop " + step) && step > shopsize)
                        DCcount--;
                  }
               }
            }
         }
      }
      if (quest === "Master" || quest === "Mixed") {
         for (var key in dungeons[k].MQlist) {
            if (dungeons[k].MQlist.hasOwnProperty(key)) {
               if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (!dungeons[k].MQlist[key].isOpened && dungeons[k].MQlist[key].isAvailable())
                  DCcount++;
            }
         }
         if (quest === "Master"){
            for (var key in dungeons[k].chestlist) {
               if (dungeons[k].chestlist.hasOwnProperty(key) && dungeons[k].type === "overworld") {
                  if (OcarinaShuffle == false && key == "Fairy Ocarina")
                  {}
                  else if (WeirdEgg == false && key == "Malons Weird Egg")
                  {}
                  else if (BeanShuffle == false && key == "Bean Salesman")
                  {}
                  else if (Cowsanity == false && key.includes("Cow Milk"))
                  {}
                  else if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable() && !(BeanShuffle == false && key == "BeanSalseman") )
                     DCcount++;
               }
            }
            if (shopsize > 0){
            for (var key in dungeons[k].shoplist) {
               if (dungeons[k].shoplist.hasOwnProperty(key)) {
                  if (!dungeons[k].shoplist[key].isOpened && dungeons[k].shoplist[key].isAvailable()  )
                     DCcount++;
                  for (var step = 2; step <= 4; step++) {
                     if(key.includes("Shop " + step) && step > shopsize)
                        DCcount--;
                  }
               }
            }
         }
         }
         if ((skulltula === "Overworld" || skulltula === "All") && quest === "Master") {
            for (var key in dungeons[k].skulllist) {
               if (dungeons[k].skulllist.hasOwnProperty(key) && dungeons[k].type === "overworld") {
                  if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (skulltula === "Dungeons" || skulltula === "All") {
            for (var key in dungeons[k].MQskulllist) {
               if (dungeons[k].MQskulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].MQskulllist[key].isOpened && dungeons[k].MQskulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (scrubs === "Scrubsanity") {
            for (var key in dungeons[k].MQscrublist) {
               if (dungeons[k].MQscrublist.hasOwnProperty(key)) {
                  if (!dungeons[k].MQscrublist[key].isOpened && dungeons[k].MQscrublist[key].isAvailable())
                     DCcount++;
               }
            }
            for (var key in dungeons[k].scrublist) {
               if (dungeons[k].scrublist.hasOwnProperty(key) && dungeons[k].type === "overworld" && quest === "Master") {
                  if (!dungeons[k].scrublist[key].isOpened && dungeons[k].scrublist[key].isAvailable())
                     DCcount++;
               }
            }
         }      
      }
      
      var child = document.getElementById("dungeon" + k).firstChild;
      while (child) {
         if (child.className == "chestCount") {
            if (DCcount == 0)
               child.innerHTML = "";
            else
               child.innerHTML = DCcount;
            break;
         }
         child = child.nextSibling;
      }
      updateSkullIcon()
   }

   document.getElementById('submaparea').className = "DC" + getDungeonAvailability(dungeons[dungeonSelect]);
   var itemlist = document.getElementById('submaplist').children
   for (var item in itemlist) {
      if (itemlist.hasOwnProperty(item)) {
         let dNone = false;
         if(itemlist[item].classList.contains("d-none")) {
            dNone = true;
         }
         let itemType = itemlist[item].getAttribute("data-type") + "list";
         if (dungeons[dungeonSelect][itemType][itemlist[item].innerHTML].isOpened)
            itemlist[item].className = "DCopened";
         else if (dungeons[dungeonSelect][itemType][itemlist[item].innerHTML].isAvailable())
            itemlist[item].className = "DCavailable";
         else
            itemlist[item].className = "DCunavailable";
         if (dNone) {
            itemlist[item].classList.add("d-none");
         }
      }
   }

}

function itemConfigClick(sender) {
   var item = sender.id;

   if (selected.item) {
      document.getElementById(selected.item).style.border = '0px';
      sender.style.border = '3px solid yellow';
      selected = {item: item};
   } else if (selected.row !== undefined) {
      itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';
      var old = itemLayout[selected.row][selected.col];

      if (old == item) {
         selected = {};
         return;
      }

      if (item != 'blank') {
         sender.style.opacity = 0.25;

         var r, c;
         var found = false;
         for (r = 0; r < 8; r++) {
            for (c = 0; c < 10; c++) {
               if (itemLayout[r][c] == item) {
                  itemLayout[r][c] = 'blank';
                  updateGridItem(r, c);
                  found = true;
                  break;
               }
            }

            if (found)
               break;
         }
      }

      itemLayout[selected.row][selected.col] = item;
      updateGridItem(selected.row, selected.col);

      document.getElementById(old).style.opacity = 1;

      selected = {};
   } else {
      sender.style.border = '3px solid yellow';
      selected = {item: item}
   }
}

function checkChestAvailablity(chest) {
   if (chest.isOpened) {
      return "opened";
   }
   return chest.isAvailable();
}

function populateMapdiv() {
   var mapdiv = document.getElementById('mapdiv');

   // Initialize all chests on the map
   for (k = 0; k < chests.length; k++) {
      var s = document.createElement('span');
      s.style.backgroundImage = 'url(images/poi.png)';
      s.style.color = 'black';
      s.id = k;
      s.onclick = new Function('toggleChest(' + k + ')');
      s.onmouseover = new Function('highlight(' + k + ')');
      s.onmouseout = new Function('unhighlight(' + k + ')');
      s.oncontextmenu = new Function('toggleMarkedChest(' + k + ')')      
      s.style.left = chests[k].x;
      s.style.top = chests[k].y;
      if (chests[k].isOpened) {
         s.className = "mapspan chest opened";
      }
      else
         s.className = "mapspan chest " + chests[k].isAvailable();
      if (chestMarked.indexOf(k) > -1) {
         s.className += " wayofhero";
      }
      if (chests[k].name.startsWith("Skulltula")) {
         if (skulltula === "Overworld" || skulltula === "All") {
            s.classList.remove("d-none");
         } else {
            s.classList.add("d-none");
         }
      }
      var ss = document.createElement('span');
      ss.className = "tooltip";
      ss.innerHTML = chests[k].name;
      s.appendChild(ss);

      mapdiv.appendChild(s);
   }

   // Dungeon bosses & chests
   for (k = 0; k < dungeons.length; k++) {
      s = document.createElement('span');
      s.style.backgroundImage = 'url(images/poi.png)';
      s.id = 'dungeon' + k;

      s.onclick = new Function('clickDungeon(' + k + ')');
      s.onmouseover = new Function('highlightDungeon(' + k + ')');
      s.onmouseout = new Function('unhighlightDungeon(' + k + ')');
      s.oncontextmenu = new Function('toggleMarkDungeon(' + k + ')')
      s.style.left = dungeons[k].x;
      s.style.top = dungeons[k].y;
      let className = 'unavailable';

      s.className = "mapspan dungeon " + getDungeonAvailability(dungeons[k]);
      if (dungeonMarked.indexOf(k) > -1) {
         s.className += " wayofhero";
      }

      var DCcount = 0;

      if (quest === "Vanilla" || quest === "Mixed") {
         for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
               if (OcarinaShuffle == false && key == "Fairy Ocarina")
               {}
               else if (WeirdEgg == false && key == "Malons Weird Egg")
               {}
               else if (BeanShuffle == false && key == "Bean Salesman")
               {}
               else if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable() && !(BeanShuffle == false && key == "BeanSalseman") )
                  DCcount++;
            }
         }
         if (skulltula === "Dungeons" || skulltula === "All") {
            for (var key in dungeons[k].skulllist) {
               if (dungeons[k].type === "dungeon" &&dungeons[k].skulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (skulltula === "Overworld" || skulltula === "All") {
            for (var key in dungeons[k].skulllist) {
               if (dungeons[k].type === "overworld" &&dungeons[k].skulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (scrubs === "Scrubsanity") {
            for (var key in dungeons[k].scrublist) {
               if (dungeons[k].chestlist.hasOwnProperty(key)) {
                  if (!dungeons[k].scrublist[key].isOpened && dungeons[k].scrublist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (shopsize > 0){
            for (var key in dungeons[k].shoplist) {
               if (dungeons[k].shoplist.hasOwnProperty(key)) {
                  if (!dungeons[k].shoplist[key].isOpened && dungeons[k].shoplist[key].isAvailable()  )
                     DCcount++;
                  for (var step = 2; step <= 4; step++) {
                     if(key.includes("Shop " + step) && step > shopsize)
                        DCcount--;
                  }
               }
            }
         }
      }
      if (quest === "Master" || quest === "Mixed") {
         for (var key in dungeons[k].MQlist) {
            if (dungeons[k].MQlist.hasOwnProperty(key)) {
               if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (!dungeons[k].MQlist[key].isOpened && dungeons[k].MQlist[key].isAvailable())
                  DCcount++;
            }
         }
         if (quest === "Master") {
            for (var key in dungeons[k].chestlist) {
               if (dungeons[k].chestlist.hasOwnProperty(key) && dungeons[k].type === "overworld" && quest === "Master") {
                  if (OcarinaShuffle == false && key == "Fairy Ocarina")
                  {}
                  else if (WeirdEgg == false && key == "Malons Weird Egg")
                  {}
                  else if (BeanShuffle == false && key == "Bean Salesman")
                  {}
                  else if (Cowsanity == false && key.includes("Cow Milk"))
                  {}
                  else if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable() && !(BeanShuffle == false && key == "BeanSalseman") )
                     DCcount++;
               }
            }
            if (skulltula === "Overworld" || skulltula === "All") {
               for (var key in dungeons[k].skulllist) {
                  if (dungeons[k].type === "overworld" && dungeons[k].skulllist.hasOwnProperty(key)) {
                     if (!dungeons[k].skulllist[key].isOpened && dungeons[k].skulllist[key].isAvailable())
                        DCcount++;
                  }
               }
            }
            if (shopsize > 0){
            for (var key in dungeons[k].shoplist) {
               if (dungeons[k].shoplist.hasOwnProperty(key)) {
                  if (!dungeons[k].shoplist[key].isOpened && dungeons[k].shoplist[key].isAvailable()  )
                     DCcount++;
                  for (var step = 2; step <= 4; step++) {
                     if(key.includes("Shop " + step) && step > shopsize)
                        DCcount--;
                  }
               }
            }
         }
         }  
         if (skulltula === "Dungeons" || skulltula === "All") {
            for (var key in dungeons[k].MQskulllist) {
               if (dungeons[k].type === "dungeon" &&dungeons[k].MQskulllist.hasOwnProperty(key)) {
                  if (!dungeons[k].MQskulllist[key].isOpened && dungeons[k].MQskulllist[key].isAvailable())
                     DCcount++;
               }
            }
         }
         if (scrubs === "Scrubsanity") {
            for (var key in dungeons[k].MQscrublist) {
               if (dungeons[k].MQscrublist.hasOwnProperty(key)) {
                  if (!dungeons[k].MQscrublist[key].isOpened && dungeons[k].MQscrublist[key].isAvailable())
                     DCcount++;
               }
            }
            for (var key in dungeons[k].scrublist) {
               if (dungeons[k].scrublist.hasOwnProperty(key) && dungeons[k].type === "overworld" && quest === "Master") {
                  if (!dungeons[k].scrublist[key].isOpened && dungeons[k].scrublist[key].isAvailable())
                     DCcount++;
               }
            }
         }
      }
      
      var ss = document.createElement('span');
      ss.className = "chestCount";
      if (DCcount == 0)
         ss.innerHTML = "";
      else
         ss.innerHTML = DCcount;
      ss.style.color = "black"
      s.style.textAlign = "center";
      ss.display = "inline-block";
      ss.style.lineHeight = "24px";
      s.appendChild(ss);

      var ss = document.createElement('span');
      ss.className = "tooltipgray";
      ss.innerHTML = dungeons[k].name;
      s.appendChild(ss);

      mapdiv.appendChild(s);
   }

   document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name;
   document.getElementById('submaparea').className = "DC" + getDungeonAvailability(dungeons[dungeonSelect]);
   document.getElementById("dungeon" + dungeonSelect).style.backgroundImage = "url(images/highlighted.png)";

   drawDungeonList();
}

function getDungeonAvailability(dungeon) {
   var canGet = 0;
   var unopened = 0
   checklist = {
      chestlist: {},
      skulllist: {},
      scrublist: {},
      MQlist: {},
      MQskulllist: {},
      MQscrublist: {},
      shoplist: {},
   };
   if (quest === "Vanilla" || quest === "Mixed") {
       for (let key in dungeon.chestlist) {
           checklist.chestlist[key] = dungeon.chestlist[key];
       }
       if ((skulltula === "Dungeons" || skulltula === "All") && dungeon.type === "dungeon") {
           for (let key in dungeon.skulllist) {
               checklist.skulllist[key] = dungeon.skulllist[key];
           }
       }
      if ((skulltula === "Overworld" || skulltula === "All") && dungeon.type === "overworld") {
         for (let key in dungeon.skulllist) {
            checklist.skulllist[key] = dungeon.skulllist[key];
         }
      }
       if (scrubs === "Scrubsanity") {
           for (let key in dungeon.scrublist) {
               checklist.scrublist[key] = dungeon.scrublist[key];
           }
       }
      if (shopsize > 0){
            for (let key in dungeon.shoplist) {
               if (key.includes("d-none"))
               {}
               else checklist.shoplist[key] = dungeon.shoplist[key];
            }
      }
       ['chestlist', 'skulllist', 'scrublist', 'shoplist'].forEach(function (key) {
           let list = checklist[key];
           for (let key in list) {
               if (!list[key].isOpened) {
                   unopened++;
               }
               if (OcarinaShuffle == false && key == "Fairy Ocarina")
               {}
               else if (WeirdEgg == false && key == "Malons Weird Egg")
               {}
               else if (BeanShuffle == false && key == "Bean Salesman")
               {}
               else if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (shopsize > 0 && key.includes("Shop ") ) {
                  if (shopsize == 1 && key.includes("Shop 2") )
                  {}
                  if (shopsize <= 2 && key.includes("Shop 3") )
                  {}
                  if (shopsize <= 3 && key.includes("Shop 4") )
                  {}
               }
               else if (!list[key].isOpened && list[key].isAvailable()) {
                   canGet++;
               }
           }
       });
   }
   if (quest === "Master" || quest === "Mixed") {
       for (let key in dungeon.MQlist) {
           checklist.MQlist[key] = dungeon.MQlist[key];
       }
       if ((skulltula === "Dungeons" || skulltula === "All") && dungeon.type === "dungeon") {
           for (let key in dungeon.MQskulllist) {
               checklist.MQskulllist[key] = dungeon.MQskulllist[key];
           }
       }
      if ((skulltula === "Overworld" || skulltula === "All") && dungeon.type === "overworld") {
         for (let key in dungeon.skulllist) {
            checklist.skulllist[key] = dungeon.skulllist[key];
         }
      }
       if (scrubs === "Scrubsanity" && dungeon.type === "dungeon") {
           for (let key in dungeon.MQscrublist) {
               checklist.MQscrublist[key] = dungeon.MQscrublist[key];
           }
       }
       ['MQlist', 'MQskulllist', 'MQscrublist'].forEach(function (key) {
           let list = checklist[key];
           for (let key in list) {
               if (!list[key].isOpened) {
                   unopened++;
               }
               if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (!list[key].isOpened && list[key].isAvailable()) {
                   canGet++;
               }
           }
       });
   }
      if (quest === "Master") {
         if (dungeon.type === "overworld"){
            for (let key in dungeon.chestlist) {
               checklist.chestlist[key] = dungeon.chestlist[key];
            }
            if (scrubs === "Scrubsanity") {
               for (let key in dungeon.scrublist) {
                  checklist.scrublist[key] = dungeon.scrublist[key];
               }
            }
            if (shopsize > 0){
               for (let key in dungeon.shoplist) {
                  if (key.includes("d-none"))
                  {}
                  else checklist.shoplist[key] = dungeon.shoplist[key];
               }
            }
         }
         ['chestlist', 'skulllist', 'scrublist', 'shoplist'].forEach
         (function (key) {
           let list = checklist[key];
           for (let key in list) {
               if (!list[key].isOpened) {
                   unopened++;
               }
               if (OcarinaShuffle == false && key == "Fairy Ocarina")
               {}
               else if (WeirdEgg == false && key == "Malons Weird Egg")
               {}
               else if (BeanShuffle == false && key == "Bean Salesman")
               {}
               else if (Cowsanity == false && key.includes("Cow Milk"))
               {}
               else if (shopsize > 0 && key.includes("Shop ") ) {
                  if (shopsize == 1 && key.includes("Shop 2") )
                  {}
                  if (shopsize <= 2 && key.includes("Shop 3") )
                  {}
                  if (shopsize <= 3 && key.includes("Shop 4") )
                  {}
               }
               else if (!list[key].isOpened && list[key].isAvailable()) {
                   canGet++;
               }
           }
         }
         );
      }

   let availability = "possible";
   if (unopened == 0) {
      availability = "opened"
   } else if(canGet == unopened) {
      availability = "available";
   } else if(canGet == 0) {
      availability = "unavailable"
   }
   return availability;
}

function populateItemconfig() {
   var grid = document.getElementById('itemconfig');

   var i = 0;

   var row;

   for (var key in items) {
      if (i % 10 == 0) {
         row = document.createElement('tr');
         grid.appendChild(row);
      }
      i++;

      var rowitem = document.createElement('td');
      rowitem.className = 'corner';
      rowitem.id = key;
      rowitem.style.backgroundSize = '100% 100%';
      rowitem.onclick = new Function('itemConfigClick(this)');
      if ((typeof items[key]) == "boolean") {
         rowitem.style.backgroundImage = "url(images/" + key + ".png)";
      } else {
         rowitem.style.backgroundImage = "url(images/" + key + itemsMax[key] + ".png)";

      }
      rowitem.setAttribute("data-item-name", key)
      row.appendChild(rowitem);
   }
}

function isBridgeOpen() {
   switch (rainbowbridge) {
      case "Open":
         return true;
      case "Vanilla":
         return (items['ShadowMedallion'] && items['SpiritMedallion']);
      case "Medallions":
         return (items['ForestMedallion'] && items['FireMedallion'] &&
            items['WaterMedallion'] && items['LightMedallion'] &&
            items['ShadowMedallion'] && items['SpiritMedallion']);
      case "Dungeons":
         return (items['KokiriEmerald'] && items['GoronRuby'] && items['ZoraSapphire'] &&
            items['ForestMedallion'] && items['FireMedallion'] &&
            items['WaterMedallion'] && items['LightMedallion'] &&
            items['ShadowMedallion'] && items['SpiritMedallion']);
   }
   return false;
}

function isFortressOpen() {
   switch (gerudobridge) {
      case "Default":
         return items.Membership;
      case "Shuffle":
         return items.Membership;
      case "Start":
         return true;
   }
   return items.Membership;
}

function isKeysanity() {
   switch (smallkeys) {
      case "Remove":
         return false;
      case "Dungeons":
         return false;
      case "Keysanity":
         return true;
   }
   return false;
}

function init() {
   createItemTracker(document.getElementById('itemdiv'));
   quest = null;
   populateMapdiv();
   populateItemconfig();
   
   loadCookie();
   saveCookie();
}

function preloader() {
   for (item in items) {
      if ((typeof items[item]) == "boolean") {
         var img = new Image();
         img.src = "images/" + item + ".png";
      } else {
         for (i = itemsMin[item]; i < itemsMax[item]; i++) {
            var img = new Image();
            img.src = "images/" + item + i + ".png";
         }
      }
   }

   for (medallion in dungeonImg) {
      var img = new Image();
      img.src = "images/" + dungeonImg[medallion] + ".png";
   }

   for (questdungeon in questimg) {
      var img = new Image();
      img.src = "images/" + questimg[questdungeon] + ".png";
   }

   for (fortresskey in keyimg) {
      var fort = new Image();
      img.src = "images/" + keyimg[fortresskeys] + ".png";
   }

   for (song in songimg) {
      var teacher = new Image();
      img.src = "images/" + songimg[songs] + ",png";
   }

}

function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
      window.onload = func;
   } else {
      window.onload = function () {
         if (oldonload) {
            oldonload();
         }
         func();
      }
   }
}

addLoadEvent(preloader);
