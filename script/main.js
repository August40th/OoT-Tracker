var defaultMedallions = {
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

var medallions = defaultMedallions;
var dungeonImg = ['Unknown', 'Rauru', 'Gohma', 'Dodongo', 'Jellyfish', 'PoeSisters', 'FireDancer', 'Clam', 'IronKnuckle', 'Gibdo'];

var fortresskeys = [];
var keyimg = ['Membership0', 'Membership1', 'Membership2', 'Membership3', 'Membership4'];

var songs = [];
var songimg = ['Unknown', 'Impa', 'Malon', 'SariasSong2', 'Guru', 'CompBro', 'Prelude', 'Forest', 'Crater', 'IceSong', 'Desert', 'BurningKak', 'Ocarina2'];
var songdung = ['Unknown', 'Impa', 'Gohma', 'Dodongo', 'Jellyfish', 'Deadhand', 'PoeSisters', 'FireDancer', 'WhiteWolf', 'Clam', 'IronKnuckle', 'Gibdo', 'Membership'];

var minimaps = ['KokiriForest', 'DekuTree', 'DodongosCavern', 'JabusBelly', 'BottomOfTheWell', 
                'ForestTemple', 'FireTemple', 'IceCavern', 'WaterTemple', 'GTG', 'SpiritTemple', 'ShadowTemple', 'GanonsCastle', 
                'TheMarket', 'TempleofTime', 'HyruleCastle', 'KakarikoVillage', 'GoronCity', 'LostWoods', 'SacredForestMeadow',
               'ZorasRiver', 'ZorasDomain', 'ZorasFountain', 'DeathMountainTrail', 'DeathMountainCrater', 'LonLonRanch', 'LakeHylia',
               'GerudoValley', 'GerudoFortress', 'DesertColossus', 'Graveyard', 'HauntedWasteland', 'HyruleField', 'MarketStreet', 'LostWoodsBridge'];

var doorimg = [];
var doortype = ['Unknown', 'Guru'];

var checkimg = [];
var checkhas = ['Hookshot0', 'Slingshot0'];

var questdungeons = [];
var questimg = ['', 'MQ'];

rainbowbridge = 'Open';
castlelogic = 'Removed';
trialsize = 0;
prizesize = 0;
maxprize = 0;

gerudobridge = 'Default';
fortkeys = 'Fight';
carpenters = 1;
smallkeys = 'Dungeons';

bosskeys = 'Dungeons';
skulltula = 'Off';
Scrubsanity = false;
Shopsanity = false;
shopsize = 0;
Cowsanity = false;
quest = 'Vanilla';

Ksword = true;
OcarinaShuffle = false;
SongShuffle = 'Songs';
WeirdEgg = false;
BeanShuffle = false;

BombchuLogic = false;
Medigoron = false;
Aladdin = false;

OpenForest = true;
OpenDeku = true;
OpenGate = true;
OpenDoor = true;
OpenFountain = false;
poecount = 1;

GrottoER = false;
IndoorER = 'Off';
OWERmap = true;
DungeonER = false;
Owls = false;
Warps = false;

Age = 'Child';
RndmStart = false;
mixphoo = "Off";

var mouseOverItem = false;
var mouseLastOverR;
var mouseLastOverC;
var mouseLastOverCor;

var itemGrid = [];
var itemLayout = [];

var editmode = false;
var selected = {};

var dungeonSelect = 0;
var dungeonMarked = [];
var chestMarked = [];
var linestart = 0;
var tempx = '0.0%';
var tempy = '0.0%';
var last = 0;
var here;

function setCookie(obj) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var val = JSON.stringify(obj);
    document.cookie = "cookey=" + val + ";" + expires + ";path=/";
}

function getCookie() {
    var name = "cookey=";
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

var cookieDefault = {
   iZoom: 100,
   mZoom: 100,
   rainlogic: 'Open',
   qlogic: 'Vanilla',
   flogic: 'Vanilla',
   frtky: 'Fight',
   carp: '1',
   smallk: 'Dungeons',
   bossk: 'Dungeons',
   scrb: 0,
   sklogic: 'Off',
   ocShuff: 0,
   sngShuff: 'Songs',
   eggShuff: 0,
   beanShuff: 0,
   chulogic: 0,
   tree: 1,
   door: 1,
   fountain: 0,
   shpsize: 0,
   cowShuff: 0,
   numtrials: 0,
   pigBK: 'Removed',
   gER: 0,
   oER: 0,
   iER: 'Off',
   dER: 0,
   medi: 0,
   ladin: 0,
   age: 'Child',
   rstrt: 0,
   owl: 0,
   warp: 0,
   kswrd: 1,
   numpoe: 1,
   mixp: 'Off',

    medallions: defaultMedallions,
    items: defaultItemGrid,
    obtainedItems: items,
    dungeonChests: serializeDungeonChests(),
}

var cookielock = false;
function loadCookie() {
    if (cookielock) {
        return;
    }

    cookielock = true;

    cookieobj = getCookie();

    Object.keys(cookieDefault).forEach(function(key) {
        if (cookieobj[key] === undefined) {
            cookieobj[key] = cookieDefault[key];
        }
    });

    medallions = JSON.parse(JSON.stringify(cookieobj.medallions));
    initGridRow(JSON.parse(JSON.stringify(cookieobj.items)));
    items = JSON.parse(JSON.stringify(cookieobj.obtainedItems));
    deserializeDungeonChests(JSON.parse(JSON.stringify(cookieobj.dungeonChests)));

    updateGridItemAll();

   document.getElementsByName('itemdivsize')[0].value = cookieobj.iZoom;
   document.getElementsByName('itemdivsize')[0].onchange();
   document.getElementsByName('mapdivsize')[0].value = cookieobj.mZoom;
   document.getElementsByName('mapdivsize')[0].onchange();

   document.getElementsByName('OpenDeku')[0].checked = !!cookieobj.tree;
   document.getElementsByName('OpenDeku')[0].onchange(); 
   document.getElementsByName('OpenDoor')[0].checked = !!cookieobj.door;
   document.getElementsByName('OpenDoor')[0].onchange();
   document.getElementsByName('OpenFountain')[0].checked = !!cookieobj.fountain;
   document.getElementsByName('OpenFountain')[0].onchange();

   document.getElementsByName('OcarinaShuffle')[0].checked = !!cookieobj.ocShuff;
   document.getElementsByName('OcarinaShuffle')[0].onchange();

   document.getElementsByName('WeirdEgg')[0].checked = !!cookieobj.eggShuff;
   document.getElementsByName('WeirdEgg')[0].onchange();

   document.getElementsByName('BeanShuffle')[0].checked = !!cookieobj.beanShuff;
   document.getElementsByName('BeanShuffle')[0].onchange();

   document.getElementsByName('GrottoER')[0].checked = !!cookieobj.gER;
   document.getElementsByName('GrottoER')[0].onchange();
   document.getElementsByName('OWERmap')[0].checked = !!cookieobj.oER;
   document.getElementsByName('OWERmap')[0].onchange();
   document.getElementsByName('DungeonER')[0].checked = !!cookieobj.dER;
   document.getElementsByName('DungeonER')[0].onchange();

   document.getElementsByName('shopsize')[0].value = cookieobj.shpsize;
   document.getElementsByName('shopsize')[0].onchange();

   document.getElementsByName('trialsize')[0].value = cookieobj.numtrials;
   document.getElementsByName('trialsize')[0].onchange();

   document.getElementsByName('poecount')[0].value = cookieobj.numpoe;
   document.getElementsByName('poecount')[0].onchange();

   document.getElementsByName('Cowsanity')[0].checked = !!cookieobj.cowShuff;
   document.getElementsByName('Cowsanity')[0].onchange();
   document.getElementsByName('Scrubsanity')[0].checked = !!cookieobj.scrb;
   document.getElementsByName('Scrubsanity')[0].onchange();

   document.getElementsByName('BombchuLogic')[0].checked = !!cookieobj.chulogic;
   document.getElementsByName('BombchuLogic')[0].onchange();

   document.getElementsByName('Medigoron')[0].checked = !!cookieobj.medi;
   document.getElementsByName('Medigoron')[0].onchange();
   document.getElementsByName('Aladdin')[0].checked = !!cookieobj.ladin;
   document.getElementsByName('Aladdin')[0].onchange();

   document.getElementsByName('RndmStart')[0].checked = !!cookieobj.rstrt;
   document.getElementsByName('RndmStart')[0].onchange();

   document.getElementsByName('Owls')[0].checked = !!cookieobj.owl;
   document.getElementsByName('Owls')[0].onchange();

   document.getElementsByName('Warps')[0].checked = !!cookieobj.warp;
   document.getElementsByName('Warps')[0].onchange();

   document.getElementsByName('Ksword')[0].checked = !!cookieobj.kswrd;
   document.getElementsByName('Ksword')[0].onchange();
    
    for (rbuttonID in document.getElementsByName('mixphoo')) {
      rbutton = document.getElementsByName('mixphoo')[rbuttonID]
      if (rbutton.value == cookieobj.mixp)
         rbutton.click();
   }
    
    for (rbuttonID in document.getElementsByName('SongShuffle')) {
      rbutton = document.getElementsByName('SongShuffle')[rbuttonID]
      if (rbutton.value == cookieobj.sngShuff)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('carpenters')) {
      rbutton = document.getElementsByName('carpenters')[rbuttonID]
      if (rbutton.value == cookieobj.carp)
         rbutton.click();
   }

    for (rbuttonID in document.getElementsByName('fortkeys')) {
      rbutton = document.getElementsByName('fortkeys')[rbuttonID]
      if (rbutton.value == cookieobj.frtky)
         rbutton.click();
   }

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

   for (rbuttonID in document.getElementsByName('IndoorER')) {
      rbutton = document.getElementsByName('IndoorER')[rbuttonID]
      if (rbutton.value == cookieobj.iER)
         rbutton.click();
   }

   for (rbuttonID in document.getElementsByName('Age')) {
      rbutton = document.getElementsByName('Age')[rbuttonID]
      if (rbutton.value == cookieobj.age)
         rbutton.click();
   }
    for (rbuttonID in document.getElementsByName('rainbowbridge')) {
        rbutton = document.getElementsByName('rainbowbridge')[rbuttonID];
        if (rbutton.value == cookieobj.rainlogic) {
            rbutton.click();
        }
    }

    cookielock = false;
}

function saveCookie() {
    if (cookielock) {
        return;
    }

    cookielock = true;

    cookieobj = {};

   cookieobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
   cookieobj.mZoom = document.getElementsByName('mapdivsize')[0].value;
   cookieobj.tree = document.getElementsByName('OpenDeku')[0].checked ? 1 : 0; 
   cookieobj.door = document.getElementsByName('OpenDoor')[0].checked ? 1 : 0;
   cookieobj.fountain = document.getElementsByName('OpenFountain')[0].checked ? 1 : 0;

   cookieobj.ocShuff = document.getElementsByName('OcarinaShuffle')[0].checked ? 1 : 0;
   cookieobj.scrb = document.getElementsByName('Scrubsanity')[0].checked ? 1 : 0;
   cookieobj.eggShuff = document.getElementsByName('WeirdEgg')[0].checked ? 1 : 0;
   cookieobj.beanShuff = document.getElementsByName('BeanShuffle')[0].checked ? 1 : 0;

   cookieobj.gER = document.getElementsByName('GrottoER')[0].checked ? 1 : 0;
   cookieobj.oER = document.getElementsByName('OWERmap')[0].checked ? 1 : 0;
   cookieobj.dER = document.getElementsByName('DungeonER')[0].checked ? 1 : 0;

   cookieobj.shpsize = document.getElementsByName('shopsize')[0].value;
   cookieobj.numtrials = document.getElementsByName('trialsize')[0].value;
   cookieobj.numpoe = document.getElementsByName('poecount')[0].value;

   cookieobj.cowShuff = document.getElementsByName('Cowsanity')[0].checked ? 1 : 0;

   cookieobj.chulogic = document.getElementsByName('BombchuLogic')[0].checked ? 1 : 0;
   cookieobj.medi = document.getElementsByName('Medigoron')[0].checked ? 1 : 0;
   cookieobj.ladin = document.getElementsByName('Aladdin')[0].checked ? 1 : 0;
   cookieobj.rstrt = document.getElementsByName('RndmStart')[0].checked ? 1 : 0;

   cookieobj.owl = document.getElementsByName('Owls')[0].checked ? 1 : 0;
   cookieobj.warp = document.getElementsByName('Warps')[0].checked ? 1 : 0;
   cookieobj.kswrd = document.getElementsByName('Ksword')[0].checked ? 1 : 0;

   for (rbuttonID in document.getElementsByName('carpenters')) {
      rbutton = document.getElementsByName('carpenters')[rbuttonID]
      if (rbutton.checked)
         cookieobj.carp = rbutton.value;
   }

    for (rbuttonID in document.getElementsByName('fortkeys')) {
      rbutton = document.getElementsByName('fortkeys')[rbuttonID]
      if (rbutton.checked)
         cookieobj.frtky = rbutton.value;
   }

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
    
    for (rbuttonID in document.getElementsByName('mixphoo')) {
      rbutton = document.getElementsByName('mixphoo')[rbuttonID]
      if (rbutton.checked)
         cookieobj.mixp = rbutton.value;
   }


   for (rbuttonID in document.getElementsByName('SongShuffle')) {
      rbutton = document.getElementsByName('SongShuffle')[rbuttonID]
      if (rbutton.checked)
         cookieobj.sngShuff = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('IndoorER')) {
      rbutton = document.getElementsByName('IndoorER')[rbuttonID]
      if (rbutton.checked)
         cookieobj.iER = rbutton.value;
   }

   for (rbuttonID in document.getElementsByName('Age')) {
      rbutton = document.getElementsByName('Age')[rbuttonID]
      if (rbutton.checked)
         cookieobj.age = rbutton.value;
   }

    //cookieobj.medallions = JSON.parse(JSON.stringify(medallions));
    //cookieobj.items = JSON.parse(JSON.stringify(itemLayout));
    //cookieobj.obtainedItems = JSON.parse(JSON.stringify(items));
    //cookieobj.dungeonChests = JSON.parse(JSON.stringify(serializeDungeonChests()));

    setCookie(cookieobj);

    cookielock = false;
}

function serializeDungeonChests() {
    return dungeons.map(dungeon => Object.values(dungeon.chestlist).map(chest => chest.isOpened || false));
}

function deserializeDungeonChests(serializedDungeons) {
    for (var i = 0; i < dungeons.length; i++) {
        var dungeon = dungeons[i];
        var serializedDungeon = serializedDungeons[i];
        var chestNames = Object.keys(dungeon.chestlist);
        for (var j = 0; j < chestNames.length; j++) {
            dungeon.chestlist[chestNames[j]].isOpened = serializedDungeon[j];
        }
    }
}

function highlight(a, b) {
    document.getElementById('minimap ' + b).style.visibility = 'unset';
}

function unhighlight(a, b) {
    document.getElementById('minimap ' + b).style.visibility = 'hidden';
}

// Highlights a dungeons)
function highlightDungeon(x) {
    document.getElementById('dungeon' + x).style.backgroundImage = 'url(images/highlighted.png)';
}

function unhighlightDungeon(x) {
    document.getElementById('dungeon' + x).style.backgroundImage = "url(images/poi.png)";
}

function linehighlight(a) {
    document.getElementById(a.id).style.visibility = 'visible';
}

function lineunhighlight(a) {
    document.getElementById(a.id).style.visibility = 'hidden';
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
    dungeonSelect = d;

    document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name;
    document.getElementById('submaparea').className = 'DC' + dungeons[dungeonSelect].isBeatable();
    var DClist = document.getElementById('submaplist');
    DClist.innerHTML = '';
    do {
        if (document.getElementById('eline') !== null) document.getElementById('eline').remove(); 
    } while (document.getElementById('eline') !== null);

    var regionSelected = document.getElementById('submaparea').innerHTML;
    regionSelected.onclick = bulkDCSelect();

    var minimap = document.getElementById('minimapdiv');
    if (dungeonSelect !== last) {
        last = dungeonSelect;
        here = dungeons[dungeonSelect].floorwdoor;}
    if (here == undefined) here = dungeons[dungeonSelect].floorwdoor;
    if (dungeons[dungeonSelect].type == "overworld")
        minimap.style.backgroundImage = 'url(images/' + minimaps[dungeonSelect] + '.png)';
    if (dungeons[dungeonSelect].type == "dungeon")
        minimap.style.backgroundImage = 'url(images/' + minimaps[dungeonSelect] + here + '.png)';
    minimap.innerHTML = '';
    if (dungeons[dungeonSelect].type == "overworld")
            document.getElementById('minimapdiv').style.backgroundColor = "maroon";
        else if (dungeons[dungeonSelect].type == "dungeon") {
            document.getElementById('minimapdiv').style.backgroundColor = "red";
            var ub = document.createElement('button');
            ub.style.backgroundImage = 'url(images/Up.png)';
            ub.style.height = '32px';
            ub.style.width = '48px';
            ub.style.position = 'absolute';
            ub.style.top = '345px';
            ub.style.left = '22px';
            ub.style.backgroundPosition = 'center';
            ub.style.backgroundSize = '160%';
            ub.onclick = new Function('toggleDungeonMapUp(last)');
            var db = document.createElement('button');
            db.style.backgroundImage = 'url(images/Down.png)';
            db.style.height = '32px';
            db.style.width = '48px';
            db.style.position = 'absolute';
            db.style.top = '369px';
            db.style.left = '22px';
            db.style.backgroundPosition = 'center';
            db.style.backgroundSize = '160%';
            db.onclick = new Function('toggleDungeonMapDown(last)');
            if (dungeonSelect !== 7) { //not needed in ice
                document.getElementById('minimapdiv').appendChild(ub);
                document.getElementById('minimapdiv').appendChild(db);
            }
        }

    if (OWERmap == true && dungeons[dungeonSelect].type == "overworld" && dungeons[dungeonSelect].found == false) {
        dungeons[dungeonSelect].found = true ;
        updateMap();
    }
    if (DungeonER == true  && dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].found == false) {
        dungeons[dungeonSelect].found = true ;
        updateMap();
    }

    for (var key in dungeons[dungeonSelect].chestlist) {
        if ((OWERmap == true && dungeons[dungeonSelect].chestlist[key].type == "entrance") || 
            (DungeonER == true && dungeons[dungeonSelect].chestlist[key].type == "dungeon") || 
            (Owls == true && dungeons[dungeonSelect].chestlist[key].type == "owl") ||
            (Warps == true && dungeons[dungeonSelect].chestlist[key].type == "warp") ||
            (RndmStart == true && dungeons[dungeonSelect].chestlist[key].type == "spawn")) {
            for ( var v = 0; v < dungeons.length; v++) {
                if (v == dungeonSelect) continue;
                for (var ent in dungeons[v].chestlist) {
                    if (dungeons[dungeonSelect].chestlist[key].leadsto == ent || dungeons[dungeonSelect].chestlist[key].leadsto == dungeons[v].name + ' ' + ent || dungeons[dungeonSelect].chestlist[key].leadsto == dungeons[v].name) {
                        let mapDivWidth = 828;
                        let mapDivHeight = 420;

                        let x1 = parseFloat(dungeons[dungeonSelect].x)*mapDivWidth/100;
                        let y1 = parseFloat(dungeons[dungeonSelect].y)*mapDivHeight/100;
                        let x2 = parseFloat(dungeons[v].x)*mapDivWidth/100;
                        let y2 = parseFloat(dungeons[v].y)*mapDivHeight/100;

                        var l = document.createElement('eline');
                        l.id = 'eline';
                        l.style.height = '4px';
                        l.style.width = findDistance(x1, y1, x2, y2 ) + 'px';
                        l.style.transformOrigin = "0 0";
                        l.style.transform = 'rotate('+ findAngle(x1, y1, x2, y2 ) + 'deg)';
                        l.style.position = 'absolute';
                        l.style.whiteSpace = 'nowrap';
                        l.style.backgroundColor = 'red';
                        l.style.left = x1+"px";
                        l.style.top = y1+"px";
                         
                        //var ll = document.createElement('span');
                        //ll.id = key + ' linelable ' + ent;
                        //ll.innerHTML = key + ' leads to ' + ent;
                        //ll.style.backgroundColor = 'black';
                        //ll.style.color = 'white';
                        //ll.style.fontSize = '20';
                        //l.onmouseout = new Function('lineunhighlight(' + ll + ')');
                        //l.onmouseover = new Function('linehighlight(' + ll + ')');
                        //l.appendChild(ll);
                        
                        document.getElementById('mapdiv').appendChild(l);
                    }
                    if ( (dungeons[v].chestlist[ent].leadsto !== "unknown" || dungeons[v].chestlist[ent].leadsto !== "none") && ( (OWERmap == true && dungeons[v].chestlist[ent].type == "entrance") || 
                    (DungeonER == true && dungeons[v].chestlist[ent].type == "dungeon") || 
                    (Owls == true && dungeons[v].chestlist[ent].type == "owl") ||
                    (Warps == true && dungeons[v].chestlist[ent].type == "warp") ||
                    (RndmStart == true && dungeons[v].chestlist[ent].type == "spawn") ) ) {
                        for ( var u = 0; u < dungeons.length; u++) {
                            if (u == dungeonSelect || u == v) continue;
                            for (var nxt in dungeons[u].chestlist) {
                                if (dungeons[v].chestlist[ent].leadsto == nxt || dungeons[v].chestlist[ent].leadsto == dungeons[u].name + ' ' + nxt || dungeons[v].chestlist[ent].leadsto == dungeons[u].name) {
                                    for (var o in dungeons[v].chestlist) {
                                        if (dungeons[dungeonSelect].chestlist[key].leadsto == o) {
                                            let mapDivWidth = 828;
                                            let mapDivHeight = 420;
                                            let x1 = parseFloat(dungeons[v].x)*mapDivWidth/100;
                                            let y1 = parseFloat(dungeons[v].y)*mapDivHeight/100;
                                            let x2 = parseFloat(dungeons[u].x)*mapDivWidth/100;
                                            let y2 = parseFloat(dungeons[u].y)*mapDivHeight/100;

                                            var j = document.createElement('jline');
                                            j.id = 'jline';
                                            j.style.height = '2px';
                                            j.style.width = findDistance(x1, y1, x2, y2 ) + 'px';
                                            j.style.transformOrigin = "0 0";
                                            j.style.transform = 'rotate('+ findAngle(x1, y1, x2, y2 ) + 'deg)';
                                            j.style.position = 'absolute';
                                            j.style.whiteSpace = 'nowrap';
                                            j.style.backgroundColor = 'yellow';
                                            j.style.left = x1+"px";
                                            j.style.top = y1+"px";
                                            document.getElementById('mapdiv').appendChild(j); }}}}}
                    }
                } }
        }
        if ( dungeons[dungeonSelect].type == "dungeon" && quest == "Mixed" && dungeons[dungeonSelect].mixedtype == "master" && dungeons[dungeonSelect].chestlist[key].access == "master") { //Mixed quest checks
            continue;}
        if ( dungeons[dungeonSelect] .type == "dungeon" && quest == "Mixed" && dungeons[dungeonSelect].mixedtype == "vanilla" && dungeons[dungeonSelect].chestlist[key].access == "vanilla") { //Mixed quest checks
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[12] && dungeons[dungeonSelect].chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "entrance" && (OWERmap == false || dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown")) { //Do Nothing
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "warp" && Warps == false) {
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "spawn" && RndmStart == false) {
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "owl" && Owls == false) { //Do Nothing
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "dungeon" && dungeons[dungeonSelect].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "grotto" && dungeons[dungeonSelect].chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "grotto" && dungeons[dungeonSelect].chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
            continue;}
        if (dungeons[dungeonSelect].type == "overworld" && dungeons[dungeonSelect].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Dungeons") ) { // Overworld Skulls
            continue;}
        if (dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Overworld") ) { // Dungeon Skulls
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "scrub" && Scrubsanity == false) { //Scrubs 
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "shop" && shopsize == 0) { //Shops 
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "cow" && Cowsanity == false) { //Cows
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[0] && dungeons[dungeonSelect].chestlist[key].type == "ksword" && Ksword == false ) { //kokiri shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[20] && dungeons[dungeonSelect].chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[15] && dungeons[dungeonSelect].chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[17] && dungeons[dungeonSelect].chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[31] && dungeons[dungeonSelect].chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "ocarina" && OcarinaShuffle == false && dungeons[dungeonSelect] == dungeons[32]) { //Ocarina shuffle for field
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "ocarina" && dungeons[dungeonSelect] == dungeons[0] && (OWERmap == true || OcarinaShuffle == false) ) { //Ocarina shuffle for no OWER
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[28] && dungeons[dungeonSelect].chestlist[key].type == "guard" && fortkeys == "Fight" ) { //Fortress Guard checks
            continue;}
        if ( (OWERmap == true || IndoorER !== "Off") && dungeons[dungeonSelect].chestlist[key].OWER == false ) { 
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[28] && dungeons[dungeonSelect].chestlist[key].type == "membership" && gerudobridge !== "Shuffle" ) { //Fortress Guard checks
            continue;}
        if ( (Warps == false && RndmStart == false) && dungeonSelect == 35 ) continue;
        if (OWERmap == false && (dungeonSelect == 33 || dungeonSelect == 34 ) ) continue;
        if ( dungeons[dungeonSelect].chestlist[key].leadsto == "none" || dungeons[dungeonSelect].chestlist[key].leadsto == "Spirit Right Hand" || dungeons[dungeonSelect].chestlist[key].leadsto == "Spirit Left Hand") continue;

        var s = document.createElement('li');
        if (dungeons[dungeonSelect].chestlist[key].leadsto == "unknown") s.innerHTML = key;
        else if (dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown") s.innerHTML = dungeons[dungeonSelect].chestlist[key].leadsto;
        if (dungeons[dungeonSelect].chestlist[key].isOpened) {            
            s.className = "DCopened";
        } else if ( dungeons[dungeonSelect].chestlist[key].isAvailable()) {
            s.className = "DCavailable";
        } else {
            s.className = "DCunavailable";
        }

        s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
        s.onmouseover = new Function('highlightDungeonChest(this)');
        s.onmouseout = new Function('unhighlightDungeonChest(this)');
        s.style.cursor = "pointer";

        DClist.appendChild(s);
        
        if ( (dungeons[dungeonSelect].chestlist[key].floor == here && dungeons[dungeonSelect].type == "dungeon" && (dungeons[dungeonSelect].mixedtype == dungeons[dungeonSelect].chestlist[key].access || quest == 'Mixecd') ) || dungeons[dungeonSelect].type == "overworld") {
            var c = document.createElement('span');
            c.innerHTML = 'x';
            c.id = dungeons[dungeonSelect].chestlist[key].type;
            c.className = key + ' ' + s.className;
            c.style.cursor = 'pointer';
            c.style.position = 'absolute';
            c.style.width = '16px';
            c.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
            c.style.top = dungeons[dungeonSelect].chestlist[key].y;
            c.style.left = dungeons[dungeonSelect].chestlist[key].x;
            minimap.appendChild(c);

            var cc = document.createElement('span');
            cc.className = 'minimap ' + key;
            if (dungeons[dungeonSelect].chestlist[key].leadsto == "unknown") cc.innerHTML = key;
            else if (dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown") cc.innerHTML = dungeons[dungeonSelect].chestlist[key].leadsto;
            cc.id = 'minimap ' + key;
            cc.style.width = '160px';
            cc.style.backgroundColor = 'black';
            cc.style.color = '#fff';
            cc.style.position = 'absolute';
            cc.style.textAlign = 'center';
            cc.style.fontSize = '20px';
            c.appendChild(cc);
            c.onmouseover = new Function('highlight(this' + ',"' + key + '")');
            c.onmouseout = new Function('unhighlight(this' + ',"' + key + '")');
        }
    }
}

function set1Quest(i, d) {
    for ( x = 4; x < 13; x++ ) {
        if (i in items && i in questdungeons && dungeons[x].keytype == i) {
            clickDungeon(x);
            confirmQuest();
            clickDungeon(d);
        }
    }
    updateGridItemAll();   
}

function confirmQuest() {
    window.event.preventDefault();
    var dun = document.getElementById('submaparea');
    if (quest === "Mixed" && dungeons[dungeonSelect].type === "dungeon") {
        if ( dungeons[dungeonSelect].mixedtype == "default" ) {
                dungeons[dungeonSelect].mixedtype = "vanilla";
                for (var key in dungeons[dungeonSelect].chestlist) {
                    if ( dungeons[dungeonSelect].chestlist[key].access == "master")
                        dungeons[dungeonSelect].chestlist[key].isOpened = false;
                    if ( dungeons[dungeonSelect].chestlist[key].access == "vanilla")
                        dungeons[dungeonSelect].chestlist[key].isOpened = true;
                }
            } else if ( dungeons[dungeonSelect].mixedtype == "vanilla" ) {
                dungeons[dungeonSelect].mixedtype = "master";
                for (var key in dungeons[dungeonSelect].chestlist) {
                    if ( dungeons[dungeonSelect].chestlist[key].access == "vanilla")
                        dungeons[dungeonSelect].chestlist[key].isOpened = false;
                    if ( dungeons[dungeonSelect].chestlist[key].access == "master")
                        dungeons[dungeonSelect].chestlist[key].isOpened = true;
                }
            } else if ( dungeons[dungeonSelect].mixedtype == "master" ) {
                dungeons[dungeonSelect].mixedtype = "vanilla";
                for (var key in dungeons[dungeonSelect].chestlist) {
                    if ( dungeons[dungeonSelect].chestlist[key].access == "master")
                        dungeons[dungeonSelect].chestlist[key].isOpened = false;
                    if ( dungeons[dungeonSelect].chestlist[key].access == "vanilla")
                        dungeons[dungeonSelect].chestlist[key].isOpened = true;
                }
            }
    }
    if ( dungeons[dungeonSelect].mixedtype == "vanilla" ) {
        if (dungeonSelect == 4) {
            itemsMax.WellKey = 2;
        } else if (dungeonSelect == 5) {
            itemsMax.ForestKey = 6;
        } else if (dungeonSelect == 6) {
            itemsMax.FireKey = 5;
        } else if (dungeonSelect == 8) {
            itemsMax.WaterKey = 2;
        } else if (dungeonSelect == 9) {
            itemsMax.GTGKey = 3;
        } else if (dungeonSelect == 10) {
            itemsMax.SpiritKey = 7;
        } else if (dungeonSelect == 11) {
            itemsMax.ShadowKey = 6;
        } else if (dungeonSelect == 12) {
            itemsMax.CastleKey = 3;
        }
    } else { 
        if (dungeonSelect == 4) {
            itemsMax.WellKey = 3;
        } else if (dungeonSelect == 5) {
            itemsMax.ForestKey = 5;
        } else if (dungeonSelect == 6) {
            itemsMax.FireKey = 8;
        } else if (dungeonSelect == 8) {
            itemsMax.WaterKey = 6;
        } else if (dungeonSelect == 9) {
            itemsMax.GTGKey = 9;
        } else if (dungeonSelect == 10) {
            itemsMax.SpiritKey = 5;
        } else if (dungeonSelect == 11) {
            itemsMax.ShadowKey = 5;
        } else if (dungeonSelect == 12) {
            itemsMax.CastleKey = 2;
        }
    }
    clickDungeon(dungeonSelect);
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

   document.querySelectorAll(selector).forEach
   (function (dungeon) {
       for (let key in dungeons[dungeonSelect].chestlist) {
           dungeons[dungeonSelect].chestlist[dungeon.innerHTML].isOpened = opening;
       }   
   }   
   );
    updateMap();
}

function toggleDungeonMapUp() {
    var m = document.getElementById('minimapdiv');
    if (last !== dungeonSelect)
        here = dungeons[dungeonSelect].floorwdoor;
    here++;
    if (here > dungeons[dungeonSelect].topfloor)
        here = 0;
    m.style.backgroundImage = 'url(images/' + minimaps[dungeonSelect] + here + '.png)';
    last = dungeonSelect;
    clickDungeon(dungeonSelect);
}

function toggleDungeonMapDown() {
    var m = document.getElementById('minimapdiv');
    if (last !== dungeonSelect)
        here = dungeons[dungeonSelect].floorwdoor;
    here--;
    if (here < 0)
        here = dungeons[dungeonSelect].topfloor;
    m.style.backgroundImage = 'url(images/' + minimaps[dungeonSelect] + here + '.png)';
    last = dungeonSelect;
    clickDungeon(dungeonSelect);
}

function toggleDungeonChest(sender, d, c) {
    dungeons[d].chestlist[c].isOpened = !dungeons[d].chestlist[c].isOpened;
    if (dungeons[d].chestlist[c].isOpened)
        sender.className = 'DCopened';
    else if (dungeons[d].chestlist[c].isAvailable())
        sender.className = 'DCavailable';
    else
        sender.className = 'DCunavailable';
    
    var printdun;
    if (dungeons[d].chestlist[c].type == "entrance" && mixphoo !== "Full") {
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        for ( var k = 0; k < 35; k++) {
            printdun = false;
            for (var key in dungeons[k].chestlist) {
                if (dungeons[k].chestlist[key].type == "entrance" && dungeons[k].chestlist[key].leadsto == "unknown") {
                    printdun = true; }
            }
            if (printdun == true) {
                var e = document.createElement('li');
                e.innerHTML = dungeons[k].name;
                e.className = k;
                e.id = k;
                e.onmouseover = new Function('highlightDungeonChest(this)');
                e.onmouseout = new Function('unhighlightDungeonChest(this)');
                e.style.cursor = "pointer";
                e.onclick = function (openarea) {
                    var v = this.id;
                    l.innerHTML = '';
                    for (var ent in dungeons[v].chestlist) {
                        if (dungeons[v].chestlist[ent].type == "entrance" && dungeons[v].chestlist[ent].leadsto == "unknown") {
                            var ee = document.createElement('li');
                            ee.innerHTML = ent;
                            ee.className = ent + ' entrance';
                            ee.onmouseover = new Function('highlightDungeonChest(this)');
                            ee.onmouseout = new Function('unhighlightDungeonChest(this)');
                            ee.style.cursor = "pointer";
                            ee.onclick = function(setLeadsto){
                                ent = this.innerHTML;
                                dungeons[d].chestlist[c].leadsto = ent;
                                dungeons[v].chestlist[ent].leadsto = c;
                                clickDungeon(d);
                            }
                            l.appendChild(ee); }
                    }
                }
                l.appendChild(e);
            }
        }
    }
    //if (mixphoo !== "Full" && dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "simple" || (IndoorER == "Full" && dungeons[d].chestlist[c].type == "alldoor")) { 
      //  var t = document.getElementById('submaparea');
        //var l = document.getElementById('submaplist');
        //t.innerHTML = c + ' leads to';
        //l.innerHTML = '';
        //for ( var k = 0; k < 35; k++) {
          //  for (var g in dungeons[k].chestlist) {
            //    if (dungeons[k].chestlist[g].isOpened == false && (dungeons[k].chestlist[g].type == "simple" || (IndoorER == "Full" && dungeons[k].chestlist[g].type == "alldoor") ) ) {
              //      var e = document.createElement('li');
                //    e.innerHTML = g;
                  //  e.className = g;
                    //e.onmouseover = new Function('highlightDungeonChest(this)');
                    //e.onmouseout = new Function('unhighlightDungeonChest(this)');
                    //e.style.cursor = "pointer";
                    //e.onclick = function(setLeadsto){
                      //              g = this.innerHTML;
                        //            dungeons[d].chestlist[c].leadsto = g;
                          //          clickDungeon(d); }
                    //l.appendChild(e); }
            //}
        //}
    //}
    //if (mixphoo !== "Full" && dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "grotto" ) { 
      //  var t = document.getElementById('submaparea');
        //var l = document.getElementById('submaplist');
        //t.innerHTML = c + ' leads to';
        //l.innerHTML = '';
        //for ( var k = 0; k < 35; k++) {
          //  for (var g in dungeons[k].chestlist) {
            //    if (dungeons[k].chestlist[g].isOpened == false && dungeons[k].chestlist[g].type == "grotto" ) {
              //      var e = document.createElement('li');
                //    e.innerHTML = g;
                  //  e.className = g;
                    //e.onmouseover = new Function('highlightDungeonChest(this)');
                    //e.onmouseout = new Function('unhighlightDungeonChest(this)');
                    //e.style.cursor = "pointer";
                    //e.onclick = function(setLeadsto){
                      //              g = this.innerHTML;
                        //            dungeons[d].chestlist[c].leadsto = g;
                          //          clickDungeon(d); }
                    //l.appendChild(e); }
            //}
        //}
    //}
    if (mixphoo !== "Full" && dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "dungeon" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        for ( var k = 0; k < 35; k++) {
            if ( (k == 0 || k > 12) && c !== "Dungeon Door") continue;
            if ( (k > 0 && k < 13) && c == "Dungeon Door") continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            printdun = false;
            for (var key in dungeons[k].chestlist) {
                if (dungeons[k].chestlist[key].type == "dungeon" && dungeons[k].chestlist[key].leadsto == "unknown") {
                    printdun = true; }
            }
            if (printdun == true) {
                var e = document.createElement('li');
                e.innerHTML = dungeons[k].name;
                e.className = k;
                e.id = k;
                e.onmouseover = new Function('highlightDungeonChest(this)');
                e.onmouseout = new Function('unhighlightDungeonChest(this)');
                e.style.cursor = "pointer";
                e.onclick = function (openarea) {
                    var v = this.id;
                    l.innerHTML = '';
                    for (var ent in dungeons[v].chestlist) {
                        if (dungeons[v].chestlist[ent].type == "dungeon" && dungeons[v].chestlist[ent].leadsto == "unknown") {
                            var ee = document.createElement('li');
                            ee.innerHTML = ent;
                            ee.className = ent;
                            ee.onmouseover = new Function('highlightDungeonChest(this)');
                            ee.onmouseout = new Function('unhighlightDungeonChest(this)');
                            ee.style.cursor = "pointer";
                            ee.onclick = function(setLeadsto){
                                ent = this.innerHTML;
                                dungeons[d].chestlist[c].leadsto = dungeons[v].name + ' ' + ent;
                                dungeons[v].chestlist[ent].leadsto = dungeons[d].name + ' ' + c;
                                clickDungeon(d);
                            }
                            l.appendChild(ee); }
                    }
                }
                l.appendChild(e);
            }
        }
    }
    if (dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "owl" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        for ( var k = 0; k < 35; k++) {
            if ( k > 0 && k < 13 ) continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            printdun =true;
            if (printdun == true) {
                var e = document.createElement('li');
                e.innerHTML = dungeons[k].name;
                e.className = k;
                e.onmouseover = new Function('highlightDungeonChest(this)');
                e.onmouseout = new Function('unhighlightDungeonChest(this)');
                e.style.cursor = "pointer";
                e.onclick = function(setLeadsto){
                                ent = this.innerHTML;
                                dungeons[d].chestlist[c].leadsto = ent;
                                clickDungeon(d); }
                l.appendChild(e);
            }
        }
    }
    if (dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "warp" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        for ( var k = 0; k < 35; k++) {
            if ( k > 0 && k < 13 ) continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            printdun =true;
            if (printdun == true) {
                var e = document.createElement('li');
                e.innerHTML = dungeons[k].name;
                e.className = k;
                e.onmouseover = new Function('highlightDungeonChest(this)');
                e.onmouseout = new Function('unhighlightDungeonChest(this)');
                e.style.cursor = "pointer";
                e.onclick = function(setLeadsto){
                                ent = this.innerHTML;
                                dungeons[d].chestlist[c].leadsto = ent;
                                clickDungeon(d); }
                l.appendChild(e);
            }
        }
    }
    if (dungeons[d].chestlist[c].leadsto == "unknown" && dungeons[d].chestlist[c].type == "spawn" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        for ( var k = 0; k < 35; k++) {
            if ( k > 0 && k < 13 ) continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            printdun =true;
            if (printdun == true) {
                var e = document.createElement('li');
                e.innerHTML = dungeons[k].name;
                e.className = k;
                e.onmouseover = new Function('highlightDungeonChest(this)');
                e.onmouseout = new Function('unhighlightDungeonChest(this)');
                e.style.cursor = "pointer";
                e.onclick = function(setLeadsto){
                                ent = this.innerHTML;
                                dungeons[d].chestlist[c].leadsto = ent;
                                clickDungeon(d); }
                l.appendChild(e);
            }
        }
    }
    updateMap();
    saveCookie();
}

function findAngle(x1, y1, x2, y2) {
    if (x1 <= x2) distanceX = x2 - x1;
    else if (x1 > x2) distanceX = x1 - x2;
    if (y1 < y2) distanceY = y2 - y1;
    else if (y1 > y2) distanceY = y1 - y2;
    if (distanceX > 0 && distanceY > 0) {
        angle = Math.atan2(distanceY, distanceX);
        angle = angle * 180 / Math.PI; }
    else if (y1 == y2) { //x axis
        if (x2 >= x1) angle = 0;
        else if (x2 < x1) angle = 180; }
    else if (x2 == x1) { //y axis
        if (y2 > y1) angle = 90;
        else if (y2 < y1) angle = 270; }
    if (y2 < y1 && x2 < x1) angle = 180 + angle; //top l
    else if (y2 > y1 && x2 < x1) angle = 180 - angle; //bottom l
    else if (y2 < y1 && x2 > x1) angle = 360 - angle; //top r
    else if (y2 > y1 && x2 > x1) angle = angle; //bottom r
    do { if (angle >= 360) angle = angle - 360; } while (angle >= 360);
    do { if (angle < 0) angle = angle + 360; } while (angle < 0);
    return angle;
}
function findDistance(x1, y1, x2, y2) {
    if (x1 < x2) distanceX = x2 - x1;
    else if (x1 > x2) distanceX = x1 - x2;
    if (y1 < y2) distanceY = y2 - y1;
    else if (y1 > y2) distanceY = y1 - y2;
    if (x1 == x2) distance = distanceY;
    else if (y1 == y2) distance = distanceX;
    else distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance;
}

function highlightDungeonChest(x) {
    x.style.backgroundColor = '#282828';
}

function unhighlightDungeonChest(x) {
    x.style.backgroundColor = '';
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
   if (rainbowbridge == "Skulltulas" ) {
       maxprize = 100;
   } else if (rainbowbridge == "Stones" ) {
       maxprize = 3;
   } else if (rainbowbridge == "Medallions" ) {
       maxprize = 6; 
   } else if (rainbowbridge == "Dungeons" ) {
       maxprize = 9;
   }
   saveCookie();
}

function setprizesize(sender) {
   prizesize = sender.value;
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

   for (k = 1; k < 13; k++) {
        if (dungeons[k].type == "dungeon" && quest == "Vanilla") {
            dungeons[k].mixedtype = "vanilla" ; }
       else if (dungeons[k].type == "dungeon" && quest == "Master") {
            dungeons[k].mixedtype = "master" ; }
       else if (dungeons[k].type == "dungeon" && quest == "Mixed") {
            dungeons[k].mixedtype = "default" ; }
    } 

   updateMap();
   saveCookie();
}

function setMixedPools(sender) {
    mixphoo = sender.value;
    updateMap();
    saveCookie();
}

function setPoes(sender) {
    poecount = sender.value;
    itemsMax.BigPoe = poecount;
    updateGridItemAll();
    saveCookie();
}

function setFortKeys(sender) {
    fortkeys = sender.value;
    updateGridItemAll();
   saveCookie();
}

function setFortressLogic(sender) {
   gerudobridge = sender.value;
   if (gerudobridge == 'Start') {
      items.Membership = true;
   }
    else items.Membership = false;
   updateGridItemAll();

   updateMap();
   saveCookie();
}

function setCarpenter(sender) {
   carpenters = sender.value;

   updateGridItemAll();
   updateMap();
   saveCookie();
}

function setSmallKeys(sender) {
   smallkeys = sender.value;

   updateMap();
   saveCookie();
}

function setBossKeys(sender) {
   bosskeys = sender.value;
   updateMap();
   saveCookie();
}

function setSkulltula(sender) {
   skulltula = sender.value;

   updateMap();
   saveCookie();
}

function setScrub(sender) {
   Scrubsanity = sender.checked;

   updateMap();
   saveCookie();
}

function setTree(sender) {
   OpenDeku = sender.checked;
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

   saveCookie();
}

function setSongs(sender) {
   SongShuffle = sender.value;
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

   saveCookie();
}

function setBean(sender) {
   BeanShuffle = sender.checked;

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

   updateMap();
   saveCookie();
} 

function setGrottoER(sender) {
   GrottoER = sender.checked;
   updateMap();

   saveCookie();
}

function setIndoorER(sender) {
   IndoorER = sender.value;
   updateMap();

   saveCookie();
}

function setOWER(sender) {
   OWERmap = sender.checked;

    for (k = 0; k < dungeons.length; k++) {
        if (dungeons[k].type == "overworld" && OWERmap  == true) {
            dungeons[k].found = false ; }
        if (dungeons[k].type == "overworld" && OWERmap  == false) {
            dungeons[k].found = true ; }
    }
    
   if (OWERmap == false) {
   document.getElementById('dungeon33').style.visibility = 'hidden';
   document.getElementById('dungeon34').style.visibility = 'hidden';
   } if (OWERmap == true) {
   document.getElementById('dungeon33').style.visibility = 'visible';
   document.getElementById('dungeon34').style.visibility = 'visible';
   } if (Warps == false && RndmStart  == false) {
   document.getElementById('dungeon35').style.visibility = 'hidden';
   } if (Warps == true || RndmStart  == true) {
   document.getElementById('dungeon35').style.visibility = 'visible';
   } 


   updateMap();

   saveCookie();
}

function setDER(sender) {
   DungeonER = sender.checked;
   for (k = 1; k < 13; k++) {
        if (dungeons[k].type == "dungeon" && DungeonER == true) {
            dungeons[k].found = false ; }
       if (dungeons[k].type == "dungeon" && DungeonER == false) {
            dungeons[k].found = true ; }
    }
   updateMap();

   saveCookie();
}

function setCows(sender) {
   Cowsanity = sender.checked;
   updateMap();

   //if (IndoorER !== "Off") drawIndoorChecks();
   saveCookie();
}

function setMedigoron(sender) {
   Medigoron = sender.checked;

   updateMap();
   saveCookie();
}

function setCarpet(sender) {
   Aladdin = sender.checked;

   updateMap();
   saveCookie();
}

function setBombchu(sender) {
   BombchuLogic = sender.checked;
   updateMap();
   saveCookie();
}

function setKsword(sender) {
   Ksword = sender.checked;

   updateMap();
   saveCookie();
}

function setOwls(sender) {
   Owls = sender.checked;
   updateMap();
   saveCookie();
}

function setWarps(sender) {
   Warps = sender.checked;
   updateMap();
   saveCookie();
}

function setAge(sender) {
    Age = sender.value;
    updateMap();
   if (Age === "Child" && RndmStart == false)
       clickDungeon(0);
   else if (Age === "Adult" && RndmStart == false)
       clickDungeon(14);
   else if (RndmStart == true)
       clickDungeon(32);
   saveCookie();    
   updateMap();
}

function setERTracker(sender) {
    RndmStart = sender.checked;
    if (Age === "Child" && RndmStart == false)
       clickDungeon(0);
   else if (Age === "Adult" && RndmStart == false)
       clickDungeon(14);
   else if (RndmStart == true)
       clickDungeon(35);
    updateMap();
    saveCookie();
}

function setZoom(target, sender) {
    document.getElementById(target).style.zoom = sender.value / 100;
    document.getElementById(target).style.zoom = sender.value / 100;

    document.getElementById(target).style.MozTransform = 'scale(' + (sender.value / 100) + ')';
    document.getElementById(target).style.MozTransformOrigin = '0 0';

    document.getElementById(target + 'size').innerHTML = (sender.value) + '%';
    saveCookie();
}

function showSettings(sender) {
    if (editmode) {
        var r, c;
        var startdraw = false;

        editmode = false;
        updateGridItemAll();
        showTracker('mapdiv', document.getElementsByName('showmap')[0]);
        document.getElementById('itemconfig').style.display = 'none';
        document.getElementById('rowButtons').style.display = 'none';
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


function EditMode() {
    var r, c;

    editmode = true;
    updateGridItemAll();
    showTracker('mapdiv', {checked: false});
    document.getElementById('settings').style.display = 'none';
    document.getElementById('itemconfig').style.display = '';
    document.getElementById('rowButtons').style.display = 'flex';

    document.getElementById('settingsbutton').innerHTML = 'Exit Edit Mode';
}


function ResetLayout() {
    initGridRow(defaultItemGrid);
    updateGridItemAll();
}


function ResetTracker() {
    dungeons.forEach(dungeon => Object.values(dungeon.chestlist).forEach(chest => delete chest.isOpened));
    items = Object.assign({}, baseItems);

    updateGridItemAll();
    updateMap();
    saveCookie();
}


function addItemRow() {
    var sender = document.getElementById('itemdiv')
    var r = itemLayout.length;

    itemGrid[r] = [];
    itemLayout[r] = [];

    itemGrid[r]['row'] = document.createElement('table');
    itemGrid[r]['row'].className = 'tracker';

    itemGrid[r]['tablerow'] = document.createElement('tr')
    itemGrid[r]['tablerow'].appendChild(itemGrid[r]['row']);
    sender.appendChild(itemGrid[r]['tablerow']);

    var tr = document.createElement('tr');
    itemGrid[r]['row'].appendChild(tr);

    itemGrid[r]['addbutton'] = document.createElement('button');
    itemGrid[r]['addbutton'].innerHTML = '+';
    itemGrid[r]['addbutton'].style.backgroundColor = 'green';
    itemGrid[r]['addbutton'].style.color = 'white';
    itemGrid[r]['addbutton'].onclick = new Function("addItem(" + r + ")");
    itemGrid[r]['row'].appendChild(itemGrid[r]['addbutton']);

    itemGrid[r]['removebutton'] = document.createElement('button');
    itemGrid[r]['removebutton'].innerHTML = '-';
    itemGrid[r]['removebutton'].style.backgroundColor = 'red';
    itemGrid[r]['removebutton'].style.color = 'white';
    itemGrid[r]['removebutton'].onclick = new Function("removeItem(" + r + ")");
    itemGrid[r]['row'].appendChild(itemGrid[r]['removebutton']);

    saveCookie();
}


function removeItemRow() {
    var sender = document.getElementById('itemdiv')
    var r = itemLayout.length - 1;

    sender.removeChild(itemGrid[r]['tablerow'])
    itemGrid.splice(r, 1);
    itemLayout.splice(r, 1);

    saveCookie();
}


function addItem(r) {
    var i = itemLayout[r].length;

    itemGrid[r][i] = [];
    itemLayout[r][i] = 'blank';

    itemGrid[r][i]['item'] = document.createElement('td');
    if (i <= 9) {
        itemGrid[r][i]['item'].className = 'griditem';
    } else if (i >= 10) {
        itemGrid[r][i]['item'].className = 'P2 griditem';
    }
    itemGrid[r]['row'].appendChild(itemGrid[r][i]['item']);

    var tdt = document.createElement('table');
    if (i <= 9) {
    tdt.className = 'lonk';
    } else if (i >= 10) {
    tdt.className = 'P2 lonk';
    }
    itemGrid[r][i]['item'].appendChild(tdt);
        var tdtr1 = document.createElement('tr');
        tdt.appendChild(tdtr1);
            itemGrid[r][i][0] = document.createElement('th');
            itemGrid[r][i][0].className = 'corner';
            itemGrid[r][i][0].onmouseover = new Function("setMOver(" + r + "," + i + ",0)")
            itemGrid[r][i][0].onmouseout = new Function("setMOff()")
            itemGrid[r][i][0].onclick = new Function("gridItemClick(" + r + "," + i + ",0)");
            itemGrid[r][i][0].oncontextmenu = new Function("gridItemRClick(" + r + "," + i + ",0)");
            tdtr1.appendChild(itemGrid[r][i][0]);
            itemGrid[r][i][1] = document.createElement('th');
            itemGrid[r][i][1].className = 'corner';
            itemGrid[r][i][1].onmouseover = new Function("setMOver(" + r + "," + i + ",1)")
            itemGrid[r][i][1].onmouseout = new Function("setMOff()")
            itemGrid[r][i][1].onclick = new Function("gridItemClick(" + r + "," + i + ",1)");
            itemGrid[r][i][1].oncontextmenu = new Function("gridItemRClick(" + r + "," + i + ",1)");
            tdtr1.appendChild(itemGrid[r][i][1]);
        var tdtr2 = document.createElement('tr');
            tdt.appendChild(tdtr2);
            itemGrid[r][i][2] = document.createElement('th');
            itemGrid[r][i][2].className = 'corner';
            itemGrid[r][i][2].onmouseover = new Function("setMOver(" + r + "," + i + ",2)")
            itemGrid[r][i][2].onmouseout = new Function("setMOff()")
            itemGrid[r][i][2].onclick = new Function("gridItemClick(" + r + "," + i + ",2)");
            itemGrid[r][i][2].oncontextmenu = new Function("gridItemRClick(" + r + "," + i + ",2)");
            tdtr2.appendChild(itemGrid[r][i][2]);
            itemGrid[r][i][3] = document.createElement('th');
            itemGrid[r][i][3].className = 'corner';
            itemGrid[r][i][3].onmouseover = new Function("setMOver(" + r + "," + i + ",3)")
            itemGrid[r][i][3].onmouseout = new Function("setMOff()")
            itemGrid[r][i][3].onclick = new Function("gridItemClick(" + r + "," + i + ",3)");
            itemGrid[r][i][3].oncontextmenu = new Function("gridItemRClick(" + r + "," + i + ",3)");
            tdtr2.appendChild(itemGrid[r][i][3]);

    updateGridItem(r, i); 
    saveCookie();
}
function removeItem(r) {
    var i = itemLayout[r].length - 1

    if (i < 0) {
        return
    }

    itemGrid[r]['row'].removeChild(itemGrid[r][i]['item'])
    itemGrid[r].splice(i, 1);
    itemLayout[r].splice(i, 1);
    saveCookie();
}


function updateGridItem(row, index) {
    var item = itemLayout[row][index];
    var d; 
    if (editmode) {
        if (!item || item == 'blank') {
            itemGrid[row][index]['item'].style.backgroundImage = 'url(images/blank.png)';
        } else if ((typeof items[item]) == 'boolean') {
            itemGrid[row][index]['item'].style.backgroundImage = 'url(images/' + item + '.png)';
        } else {
            itemGrid[row][index]['item'].style.backgroundImage = 'url(images/' + item + itemsMax[item] + '.png)';
        }

        itemGrid[row][index]['item'].style.border = '1px solid white';
        itemGrid[row][index]['item'].className = 'griditem true'

        return;
    }

    itemGrid[row][index]['item'].style.border = '0px';

    if (!item || item == 'blank') {
        itemGrid[row][index]['item'].style.backgroundImage = '';
        return;
    }

    if ((typeof items[item]) == 'boolean') {
        itemGrid[row][index]['item'].style.backgroundImage = 'url(images/' + item + '.png)';
    } else {
        itemGrid[row][index]['item'].style.backgroundImage = 'url(images/' + item + items[item] + '.png)';
    }

   itemGrid[row][index]['item'].className = 'griditem ' + !!items[item];
   itemGrid[row][index]['item'].name = items[item];

   if (fortresskeys[item] !== undefined) {
      if (fortkeys !== 'Fight' && gerudobridge !== 'Start')
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + keyimg[fortresskeys[item]] + ".png)";
      else
         itemGrid[row][index][3].style.backgroundImage = "";
   }
   if (songs[item] !== undefined) {
      if (SongShuffle == 'Songsanity')
         itemGrid[row][index][3].style.backgroundImage = "";
      else if (SongShuffle == 'Songs')
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + songimg[songs[item]] + ".png)";
      else if (SongShuffle == 'Bosses')
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + songdung[songs[item]] + ".png)";
   }
   if (medallions[item] !== undefined) {
         itemGrid[row][index][3].style.backgroundImage = "url(images/" + dungeonImg[medallions[item]] + ".png)";
   }
   if (questdungeons[item] !== undefined) {
       if ( quest == "Master")
           itemGrid[row][index][3].style.backgroundImage = "url(images/MQ.png)";
       else if ( quest == "Mixed" ) {
          itemGrid[row][index][3].style.backgroundImage = "url(images/Unknown.png)";
          for ( d = 4; d < 13; d++ ) {
              if (dungeons[d].mixedtype == "default" && dungeons[d].keytype == item) 
                  itemGrid[row][index][3].style.backgroundImage = "url(images/Unknown.png)";
              else if (dungeons[d].mixedtype == "vanilla" && dungeons[d].keytype == item) 
                  itemGrid[row][index][3].style.backgroundImage = "url(images/MQ.png)";
              else if (dungeons[d].mixedtype == "master" && dungeons[d].keytype == item) 
                  itemGrid[row][index][3].style.backgroundImage = "";
          }
      } else if ( quest == "Vanilla" ) {
          itemGrid[row][index][3].style.backgroundImage = "";
      }
   }
}

function updateGridItemAll() {
    var r, c;
    for (r = 0; r < itemLayout.length; r++) {
        for (c = 0; c < itemLayout[r].length; c++) {
            updateGridItem(r, c);
        }

        if (editmode) {
            itemGrid[r]['addbutton'].style.display = ''
            itemGrid[r]['removebutton'].style.display = ''
        }
        else {
            itemGrid[r]['addbutton'].style.display = 'none'
            itemGrid[r]['removebutton'].style.display = 'none'
        }
    }
}

function setGridItem(item, row, index) {
    while (!itemLayout[row]) {
        addItemRow();
    }
    while (!itemLayout[row][index]) {
        addItem(row);
    }

    itemLayout[row][index] = item;
    updateGridItem(row, index);
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
    for (r = 0; r < itemsets.length; r++) {
        for (c = 0; c < itemsets[r].length; c++) {
            setGridItem(itemsets[r][c], r, c);
        }
    }
}

function setMOver(row, col,corner) {
    //keep track of what item you moused over.
    mouseLastOverCor = corner;
    mouseLastOverR = row;
    mouseLastOverC = col;
    mouseOverItem = true;

}

function setMOff() {
    mouseOverItem = false;
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

            itemLayout[row][col] = selected.item;
            updateGridItem(row, col);
            selected = {};
            document.getElementById(old).style.opacity = 1;
        } else if (selected.row !== undefined) {
            itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';

            var temp = itemLayout[row][col];
            itemLayout[row][col] = itemLayout[selected.row][selected.col];
            itemLayout[selected.row][selected.col] = temp;
            updateGridItem(row, col);
            updateGridItem(selected.row, selected.col);
            selected = {};
        } else {
            itemGrid[row][col]['item'].style.border = '3px solid yellow';
            selected = {row: row, col: col};
        }
    } else {
        var item = itemLayout[row][col];

        if (medallions[item] !== undefined) {
            if (corner == 3) {
                medallions[item]++;
                if (medallions[item] >=  10) {
                    medallions[item] = 0;
                }
            }
            else {
                items[item] = !items[item];
            }
        } else if (fortresskeys[item] !== undefined) {
          if (corner == 3) {
             fortresskeys[item]++;
             if (fortresskeys[item] >= 2 && carpenters == 1)
                fortresskeys[item] = 0;
             if (fortresskeys[item] >= 5 && carpenters == 4)
                fortresskeys[item] = 0;
          } else {
             items[item] = !items[item];
          }
       } else if (questdungeons[item] !== undefined) {
          if (corner == 3 && quest == "Mixed") {
             set1Quest(item, dungeonSelect);
          }
          else {
            items[item]++;
            if (items[item] > itemsMax[item]) {
                items[item] = itemsMin[item];
            }
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
   } else if ((typeof items[item]) == 'boolean') {
            items[item] = !items[item];
        } else {
            items[item]++;
            if (items[item] > itemsMax[item]) {
                items[item] = itemsMin[item];
            }
        }

    }
    updateMap();
    updateGridItem(row,col);
    saveCookie();
}

function gridItemRClick(row, col, corner) {
    window.event.preventDefault()
    if (editmode) {
 //Do Nothing
    } else {
        var item = itemLayout[row][col];

        if (medallions[item] !== undefined) {
            if (corner == 3) {
                medallions[item]--;
                if (medallions[item] == -1) {
                    medallions[item] = 9;
                }
            }
            else {
                items[item] = !items[item];
            }
        } else if (fortresskeys[item] !== undefined) {
          if (corner == 3) {
             fortresskeys[item]--;
             if (fortresskeys[item] == -1 && carpenters == 1)
                fortresskeys[item] = 1;
             if (fortresskeys[item] == -1 && carpenters == 4)
                fortresskeys[item] = 3;
          } else {
             items[item] = !items[item];
          }
       } else if (songs[item] !== undefined) {
          if (corner == 3) {
             songs[item]--;
             if (songs[item] == -1)
                songs[item] = 12;
          } else if (corner == 2) {
             songs[item]--;
             if (songs[item] == -1)
                songs[item] = 12;
          } else {
             items[item] = !items[item];
          }
   } else if ((typeof items[item]) == 'boolean') {
            items[item] = !items[item];
        } else {
            items[item]--;
            if (items[item] < itemsMin[item]) {
                items[item] = itemsMax[item];
            }
        }

    }
    updateMap();
    updateGridItem(row,col);
    saveCookie();
}

function updateMap() {
    for (k = 0; k < dungeons.length; k++) {
        if (OWERmap == false && k >= 33) continue;
        document.getElementById("dungeon" + k).className = "mapspan dungeon " + dungeons[k].canGetChest() + ((dungeonMarked.indexOf(k) > -1) ? " wayofhero" : " ");
        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if ( dungeons[k].chestlist[key].access == "entrance" && dungeons[k].chestlist[key].type == "dungeon" ) { //Dungeon door  
                continue;}
            if ( dungeons[k].chestlist[key].leadsto !== "unknown" && dungeons[k].chestlist[key].type == "entrance" ) {
                continue;}
            if ( dungeons[k].type == "dungeon" && quest == "Mixed" && dungeons[k].mixedtype == "master" && dungeons[k].chestlist[key].access == "master") { //Mixed quest checks
                continue;}
            if ( dungeons[k].type == "dungeon" && quest == "Mixed" && dungeons[k].mixedtype == "vanilla" && dungeons[k].chestlist[key].access == "vanilla") { //Mixed quest checks
                continue;}
            if ( dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
                continue;}
            if ( dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
                continue;}
            if ( dungeons[k] == dungeons[12] && dungeons[k].chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
                continue;}
            if ( dungeons[k].chestlist[key].type == "entrance" && (OWERmap == false || dungeons[k].chestlist[key].leadsto !== "unknown")) { //Do Nothing
                continue;}
            if ( dungeons[k].chestlist[key].type == "warp" && Warps == false) {
                continue;}
            if ( dungeons[k].chestlist[key].type == "spawn" && RndmStart == false) {
                continue;}
            if ( dungeons[k].chestlist[key].type == "owl" && Owls == false) { //Do Nothing
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "dungeon" && dungeons[k].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
                continue;}
            if ( dungeons[k].chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
                continue;}
            if ( dungeons[k].chestlist[key].access == "grotto" && dungeons[k].chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "grotto" && dungeons[k].chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
                continue;}
            if (dungeons[k].type == "overworld" && dungeons[k].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Dungeons") ) { // Overworld Skulls
                continue;}
            if (dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Overworld") ) { // Dungeon Skulls
                continue;}
            if (dungeons[k].chestlist[key].type == "scrub" && Scrubsanity == false) { //Scrubs 
                continue;}
            if (dungeons[k].chestlist[key].type == "shop" && shopsize == 0) { //Shops 
                continue;}
            if (dungeons[k].chestlist[key].type == "cow" && Cowsanity == false) { //Cows
                continue;}
            if ( dungeons[k] == dungeons[0] && dungeons[k].chestlist[key].type == "ksword" && Ksword == false ) { //kokiri shuffle
                continue;}
            if ( dungeons[k] == dungeons[20] && dungeons[k].chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
                continue;}
            if ( dungeons[k] == dungeons[15] && dungeons[k].chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
                continue;}
            if ( dungeons[k] == dungeons[17] && dungeons[k].chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
                continue;}
            if ( dungeons[k] == dungeons[31] && dungeons[k].chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
                continue;}
            if ( dungeons[k].chestlist[key].type == "ocarina" && OcarinaShuffle == false && dungeons[k] == dungeons[32]) { //Ocarina shuffle for field
                continue;}
            if ( dungeons[k].chestlist[key].type == "ocarina" && dungeons[k] == dungeons[0] && (OWERmap == true || OcarinaShuffle == false) ) { //Ocarina shuffle for no OWER
                continue;}
            if ( dungeons[k] == dungeons[28] && dungeons[k].chestlist[key].type == "guard" && fortkeys == "Fight" ) { //Fortress Guard checks
                continue;}
            if ( dungeons[k] == dungeons[28] && dungeons[k].chestlist[key].type == "membership" && gerudobridge !== "Shuffle" ) { //Fortress Guard checks
                continue;}
            if (dungeons[k].chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
                continue;}
            if ( (OWERmap == true || IndoorER !== "Off") && dungeons[k].chestlist[key].OWER == false ) { 
                continue;}
            if ( (Warps == false && RndmStart == false) && k == 35 ) continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            if ( dungeons[k].chestlist[key].leadsto == "none" || dungeons[k].chestlist[key].leadsto == "Spirit Right Hand" || dungeons[k].chestlist[key].leadsto == "Spirit Left Hand") continue;

            
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable()) {
                    DCcount++;
                }
                var minimap = document.getElementById('minimapdiv');
                if (key in dungeons[dungeonSelect].chestlist) {
                    if (dungeons[dungeonSelect].chestlist[key] !== undefined && (dungeons[dungeonSelect].chestlist[key].floor == here && dungeons[dungeonSelect].type == "dungeon" && (dungeons[dungeonSelect].mixedtype == dungeons[dungeonSelect].chestlist[key].access || quest == 'Mixecd') ) || dungeons[dungeonSelect].type == "overworld") {
                        c = document.createElement('span');
                        c.innerHTML = 'x';
                        c.id = dungeons[dungeonSelect].chestlist[key].type;
                        if (dungeons[dungeonSelect].chestlist[key].isOpened) {
                            c.className = key + ' DCopened';
                        } else if ( dungeons[dungeonSelect].chestlist[key].isAvailable() ) {
                            c.className = key + ' DCavailable';
                        } else {
                            c.className = key + ' DCunavailable';
                        }
                        c.style.cursor = 'pointer';
                        c.style.position = 'absolute';
                        c.style.width = '16px';
                        c.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
                        c.style.top = dungeons[dungeonSelect].chestlist[key].y;
                        c.style.left = dungeons[dungeonSelect].chestlist[key].x;
                        minimap.appendChild(c);

                        var cc = document.createElement('span');
                        cc.className = 'minimap ' + key;
                        if (dungeons[dungeonSelect].chestlist[key].leadsto == "unknown") cc.innerHTML = key;
                        else if (dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown") cc.innerHTML = dungeons[dungeonSelect].chestlist[key].leadsto;
                        cc.id = 'minimap ' + key;
                        cc.style.width = '160px';
                        cc.style.backgroundColor = 'black';
                        cc.style.color = '#fff';
                        cc.style.position = 'absolute';
                        cc.style.textAlign = 'center';
                        cc.style.fontSize = '20px';
                        c.appendChild(cc);
                        c.onmouseover = new Function('highlight(this' + ',"' + key + '")');
                        c.onmouseout = new Function('unhighlight(this' + ',"' + key + '")');
                } }
                var check = document.getElementById(key);
                for (key in dungeons[dungeonSelect].chestlist) {
                    if (check == null) {
                        continue;}
                    if (dungeons[dungeonSelect].chestlist[key].isOpened) {
                        check.className = key + 'DCopened';
                    }
                    else if ( dungeons[dungeonSelect].chestlist[key].isAvailable() ) {
                        check.className = key + 'DCavailable';
                    }
                    else {
                        check.className = key + 'DCunavailable';
                    }
                }
            }
        }

        var child = document.getElementById('dungeon' + k).firstChild;
        while (child) {
            if (child.className == 'chestCount') {
                if ( quest == "Mixed" && dungeons[k].mixedttype == "default" ) {
                    child.innerHTML = '?';
                } else if (DCcount == 0) {
                    child.innerHTML = '';
                } else {
                    child.innerHTML = DCcount;
                }
                break;
            }
            child = child.nextSibling;
        }
    }


    document.getElementById('submaparea').className = 'DC' + dungeons[dungeonSelect].isBeatable();
    var itemlist = document.getElementById('submaplist').children;
    for (var item in itemlist) {
        if (itemlist.hasOwnProperty(item)) {
            if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML] == undefined) {
                continue;
            } if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isOpened ) {
                itemlist[item].className = 'DCopened';
            } else if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isAvailable() && itemlist.hasOwnProperty(item) ) {
                itemlist[item].className = 'DCavailable';
            } else {
                itemlist[item].className = 'DCunavailable';
            }
        }
    }
}

function itemConfigClick (sender) {
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

        itemLayout[selected.row][selected.col] = item;
        updateGridItem(selected.row, selected.col);

        document.getElementById(old).style.opacity = 1;

        selected = {};
    } else {
        sender.style.border = '3px solid yellow';
        selected = {item: item}
    }
}

function populateMapdiv() {
    var mapdiv = document.getElementById('mapdiv');
    // Dungeon bosses & checks
    for (k=0; k<dungeons.length; k++) {
        s = document.createElement('span');
        s.style.backgroundImage = 'url(images/poi.png)';
        s.id = 'dungeon' + k;

        s.onclick = new Function('clickDungeon(' + k + ')');
        s.onmouseover = new Function('highlightDungeon(' + k + ')');
        s.onmouseout = new Function('unhighlightDungeon(' + k + ')');
        s.oncontextmenu = new Function('toggleMarkDungeon(' + k + ')');
        s.style.left = dungeons[k].x;
        s.style.top = dungeons[k].y;
        s.className = 'mapspan dungeon ' + dungeons[k].canGetChest();
        if (dungeonMarked.indexOf(k) > -1) {
        s.className += " wayofhero";

      }
        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if ( dungeons[k].chestlist[key].access == "entrance" && dungeons[k].chestlist[key].type == "dungeon" ) { //Dungeon door  
                continue;}
            if ( dungeons[k].chestlist[key].leadsto !== "unknown" && dungeons[k].chestlist[key].type == "entrance" ) { //  
                continue;}
            if ( dungeons[k].type == "dungeon" && quest == "Mixed" && dungeons[k].mixedtype == "master" && dungeons[k].chestlist[key].access == "master") { //Mixed quest master checks
                continue;}
            if ( dungeons[k].type == "dungeon" && quest == "Mixed" && dungeons[k].mixedtype == "vanilla" && dungeons[k].chestlist[key].access == "vanilla") { //Mixed quest vanilla checks
                continue;}
            if ( dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
                continue;}
            if ( dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
                continue;}
            if ( dungeons[k] == dungeons[12] && dungeons[k].chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
                continue;}
            if ( dungeons[k].chestlist[key].type == "entrance" && (OWERmap == false || dungeons[k].chestlist[key].leadsto !== "unknown")) { //Do Nothing
                continue;}
            if ( dungeons[k].chestlist[key].type == "warp" && Warps == false) {
                continue;}
            if ( dungeons[k].chestlist[key].type == "spawn" && RndmStart == false) {
                continue;}
            if ( dungeons[k].chestlist[key].type == "owl" && Owls == false) { //Do Nothing
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "door" && dungeons[k].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "dungeon" && dungeons[k].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
                continue;}
            if ( dungeons[k].chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
                continue;}
            if ( dungeons[k].chestlist[key].access == "grotto" && dungeons[k].chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
                continue;}
            if ( dungeons[k].chestlist[key].access == "grotto" && dungeons[k].chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
                continue;}
            if (dungeons[k].type == "overworld" && dungeons[k].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Dungeons") ) { // Overworld Skulls
                continue;}
            if (dungeons[k].type == "dungeon" && dungeons[k].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Overworld") ) { // Dungeon Skulls
                continue;}
            if (dungeons[k].chestlist[key].type == "scrub" && Scrubsanity == false) { //Scrubs 
                continue;}
            if (dungeons[k].chestlist[key].type == "shop" && shopsize == 0) { //Shops 
                continue;}
            if (dungeons[k].chestlist[key].type == "cow" && Cowsanity == false) { //Cows
                continue;}
            if ( dungeons[k] == dungeons[0] && dungeons[k].chestlist[key].type == "ksword" && Ksword == false ) { //kokiri shuffle
                continue;}
            if ( dungeons[k] == dungeons[20] && dungeons[k].chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
                continue;}
            if ( dungeons[k] == dungeons[15] && dungeons[k].chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
                continue;}
            if ( dungeons[k] == dungeons[17] && dungeons[k].chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
                continue;}
            if ( dungeons[k] == dungeons[31] && dungeons[k].chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
                continue;}
            if ( dungeons[k].chestlist[key].type == "ocarina" && OcarinaShuffle == false && dungeons[k] == dungeons[32]) { //Ocarina shuffle for field
                continue;}
            if ( dungeons[k].chestlist[key].type == "ocarina" && dungeons[k] == dungeons[0] && (OWERmap == true || OcarinaShuffle == false) ) { //Ocarina shuffle for no OWER
                continue;}
            if ( dungeons[k] == dungeons[28] && dungeons[k].chestlist[key].type == "guard" && fortkeys == "Fight" ) { //Fortress Guard checks
                continue;}
            if ( dungeons[k] == dungeons[28] && dungeons[k].chestlist[key].type == "membership" && gerudobridge !== "Shuffle" ) { //Fortress Guard checks
                continue;}
            if (dungeons[k].chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
                continue;}
            if ( (OWERmap == true || IndoorER !== "Off") && dungeons[k].chestlist[key].OWER == false ) { 
                continue;}
            if ( (Warps == false && RndmStart == false) && k == 35 ) continue;
            if (OWERmap == false && (k == 33 || k == 34 ) ) continue;
            if ( dungeons[k].chestlist[key].leadsto == "none" || dungeons[k].chestlist[key].leadsto == "Spirit Right Hand" || dungeons[k].chestlist[key].leadsto == "Spirit Left Hand") continue;

            
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable()) {
                    DCcount++;
                }
            }
        }

        var ss = document.createElement('span');
        ss.className = 'chestCount';
        if ( quest == "Mixed" && dungeons[k].mixedtype == "default" ) {
            ss.innerHTML = '?';
        } else if (DCcount == 0) {
            ss.innerHTML = '';
        } else {
            ss.innerHTML = DCcount;
        }
        ss.style.color = 'black'
        s.style.textAlign = 'center';
        ss.display = 'inline-block';
        ss.style.lineHeight = '24px';
        s.appendChild(ss);

        var ss = document.createElement('span');
        ss.className = 'tooltipgray';
        ss.innerHTML = dungeons[k].name;
        s.appendChild(ss);

        mapdiv.appendChild(s);
    }

    document.getElementById('submaparea').innerHTML = dungeons[0].name;
    document.getElementById('submaparea').className = 'DC' + dungeons[0].isBeatable();
    document.getElementById('submaparea').oncontextmenu = new Function('confirmQuest()');

    for (var key in dungeons[dungeonSelect].chestlist) {
        if ( dungeons[dungeonSelect].chestlist[key].access == "entrance" && dungeons[dungeonSelect].chestlist[key].type == "dungeon" ) { //Dungeon door  
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown" && dungeons[dungeonSelect].chestlist[key].type == "entrance" ) { //  
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && quest == "Mixed" && dungeons[dungeonSelect].mixedtype == "master" && dungeons[dungeonSelect].chestlist[key].access == "master") { //Mixed quest checks
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && quest == "Mixed" && dungeons[dungeonSelect].mixedtype == "vanilla" && dungeons[dungeonSelect].chestlist[key].access == "vanilla") { //Mixed quest checks
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
            continue;}
        if ( dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[12] && dungeons[dungeonSelect].chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "entrance" && (OWERmap == false || dungeons[dungeonSelect].chestlist[key].leadsto !== "unknown")) { //Do Nothing
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "warp" && Warps == false) {
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "spawn" && RndmStart == false) {
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "owl" && Owls == false) { //Do Nothing
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "door" && dungeons[dungeonSelect].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "dungeon" && dungeons[dungeonSelect].chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "grotto" && dungeons[dungeonSelect].chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].access == "grotto" && dungeons[dungeonSelect].chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
            continue;}
        if (dungeons[dungeonSelect].type == "overworld" && dungeons[dungeonSelect].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Dungeons") ) { // Overworld Skulls
            continue;}
        if (dungeons[dungeonSelect].type == "dungeon" && dungeons[dungeonSelect].chestlist[key].type == "skulltula" && (skulltula == "Off" || skulltula == "Overworld") ) { // Dungeon Skulls
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "scrub" && Scrubsanity == false) { //Scrubs 
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "shop" && shopsize == 0) { //Shops 
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "cow" && Cowsanity == false) { //Cows
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[0] && dungeons[dungeonSelect].chestlist[key].type == "ksword" && Ksword == false ) { //kokiri shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[20] && dungeons[dungeonSelect].chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[15] && dungeons[dungeonSelect].chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[17] && dungeons[dungeonSelect].chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[31] && dungeons[dungeonSelect].chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "ocarina" && OcarinaShuffle == false && dungeons[dungeonSelect] == dungeons[32]) { //Ocarina shuffle for field
            continue;}
        if ( dungeons[dungeonSelect].chestlist[key].type == "ocarina" && dungeons[dungeonSelect] == dungeons[0] && (OWERmap == true || OcarinaShuffle == false) ) { //Ocarina shuffle for no OWER
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[28] && dungeons[dungeonSelect].chestlist[key].type == "guard" && fortkeys == "Fight" ) { //Fortress Guard checks
            continue;}
        if ( dungeons[dungeonSelect] == dungeons[28] && dungeons[dungeonSelect].chestlist[key].type == "membership" && gerudobridge !== "Shuffle" ) { //Fortress Guard checks
            continue;}
        if (dungeons[dungeonSelect].chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
            continue;}
        if ( (OWERmap == true || IndoorER !== "Off") && dungeons[dungeonSelect].chestlist[key].OWER == false ) { 
                continue;}
        if ( (Warps == false && RndmStart == false) && dungeonSelect == 35 ) continue;
        if (OWERmap == false && (dungeonSelect == 33 || dungeonSelect == 34 ) ) continue;
        if ( dungeons[dungeonSelect].chestlist[key].leadsto == "none" || dungeons[dungeonSelect].chestlist[key].leadsto == "Spirit Right Hand" || dungeons[dungeonSelect].chestlist[key].leadsto == "Spirit Left Hand") continue;

        var s = document.createElement('li');
        s.innerHTML = key;

        if (dungeons[dungeonSelect].chestlist[key].isOpened) {
            s.className = 'DCopened';
        }
        else if ( dungeons[dungeonSelect].chestlist[key].isAvailable() ) {
            s.className = 'DCavailable';
        }
        else {
            s.className = 'DCunavailable';
        }

        s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
        s.onmouseover = new Function('highlightDungeonChest(this)');
        s.onmouseout = new Function('unhighlightDungeonChest(this)');
        s.style.cursor = 'pointer';
        document.getElementById('submaplist').appendChild(s);
    }
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
        if ((typeof items[key]) == 'boolean') {
            rowitem.style.backgroundImage = 'url(images/' + key + '.png)';
        } else {
            rowitem.style.backgroundImage = 'url(images/' + key + itemsMax[key] + '.png)';
        }

        row.appendChild(rowitem);
    }
}

function isBridgeOpen() {
   switch (rainbowbridge) {
      case "Open":
         return true;
      case "Vanilla":
         return (items['ShadowMedallion'] && items['SpiritMedallion']);
      case "Skulltulas":
           return items['Skulltula'] >= prizesize;
      case "Stones":
           return (items['KokiriEmerald'] && items['GoronRuby'] && items['ZoraSapphire']);
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
   //quest = null;
   populateMapdiv();
   populateItemconfig();

   loadCookie();
   saveCookie();
}

function preloader() {
    for (item in items) {
        if ((typeof items[item]) == 'boolean') {
            var img = new Image();
            img.src = 'images/' + item + '.png';
        } else {
            for (i = itemsMin[item]; i < itemsMax[item]; i++) {
                var img = new Image();
                img.src = 'images/' + item + i + '.png';
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
      var img = new Image();
      img.src = "images/" + keyimg[fortresskeys] + ".png";
   }

   for (song in songimg) {
      var img = new Image();
      img.src = "images/" + songimg[songs] + ".png";
   }
   for (song in songdung) {
      var img = new Image();
      img.src = "images/" + songdung[songs] + ".png";
   }

}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);
