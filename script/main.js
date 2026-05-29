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

rainbowbridge = 'Medallions';
castlelogic = 'Removed';
trialsize = 0;
prizesize = 0;
maxprize = 0;

quest = 'Vanilla';
fortkeys = 'Fight';
carpenters = 1;
smallkeys = 'Dungeons';
lensgamekeys = 'Vanilla';
keyrings = 'Off';
BossRings = false;
bosskeys = 'Dungeons';
silvers = 'Vanilla'
BossDoors = 'Off';
shortcuts = 'Off';

skulltula = 'Off';
Scrubsanity = false;
Shopsanity = false;
shopsize = 0;
Cowsanity = false;
Frogsanity = false;
Beehives = false

Ksword = true;
OcarinaShuffle = false;
SongShuffle = 'Songs';
WeirdEgg = false;
BeanShuffle = false;
BigMoney = false;
GerudoCard = false;

BombchuLogic = false;

OpenForest = true;
OpenDeku = true;
OpenGate = true;
OpenDoor = true;
OpenFountain = false;
poecount = 1;

GrottoER = false;
IndoorER = 'Off';
HideoutDoors = false;
ValleyRiver = false;
OWERmap = true;
DungeonER = false;
CastleER = false;
Owls = false;
Warps = false;

Age = 'Child';
cspawn = false;
aspawn = false;
mixphoo = "Off";

Generic=0; Scrub1=0; Scrub2=0; ScrubLeft=0; Scrub3=0; Wolfos=0; Cow=0; Web=0; Redead=0; Tektite=0; Dampe=0; Tomb=0; Redeadgrave=0; 
Fairygrave=0; Skulltula=0; MudWall=0; Octorock=0; Fairy=0; GuardHouse=0;
ToT=0; Windmill=0; Links=0; PotShopF=0; PotShopB=0; GreatFairy=0; Shop=0; SkullHouse=0; ImpaBack=0; Archery=0; Lab=0; Fishing=0; 
Bowling=0; MaskShop=0; ChestGame=0; Sling=0; AlleyHouse=0; Silo=0; Talon=0; Stable=0; Midos=0; Sarias=0; Twins=0; KnowitAll=0; 
Impafront=0; TowerHouse=0; Grannys=0; DampeHut=0; CarpTent=0; Theater=0;

var mouseOverItem = false;
var mouseLastOverR;
var mouseLastOverC;
var mouseLastOverCor;

var itemGrid = [];
var itemLayout = [];

var editmode = false;
var selected = {};

var regionSelect = 0;
var regionMarked = [];
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
   gcard: 'Vanilla',
   frtky: 'Fight',
   carp: '1',
   smallk: 'Dungeons',
   bossk: 'Dungeons',
    lensk: 0,
    rings: 'Off',
    brings: 0,
    silrup: 'Off',
    cuts: 'Off',
    bossd: 'Off',
   scrb: 0,
   sklogic: 'Off',
    hives: 0,
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
   frogShuff: 0,
   numtrials: 0,
   pigBK: 'Removed',
   gER: 0,
   oER: 0,
    cER: 0,
   iER: 'Off',
    fortdoors: 0,
    valriv: 0,
   dER: 0,
   merch: 0,
   age: 'Child',
   cspwn: 0,
    aspwn:0,
   owl: 0,
   warp: 0,
   kswrd: 1,
   numpoe: 1,
   mixp: 'Off',

    medallions: defaultMedallions,
    items: defaultItemGrid,
    obtainedItems: items,
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
   document.getElementsByName('Frogsanity')[0].checked = !!cookieobj.frogShuff;
   document.getElementsByName('Frogsanity')[0].onchange();
   document.getElementsByName('Scrubsanity')[0].checked = !!cookieobj.scrb;
   document.getElementsByName('Scrubsanity')[0].onchange();

   document.getElementsByName('BombchuLogic')[0].checked = !!cookieobj.chulogic;
   document.getElementsByName('BombchuLogic')[0].onchange();

   document.getElementsByName('Owls')[0].checked = !!cookieobj.owl;
   document.getElementsByName('Owls')[0].onchange();

   document.getElementsByName('Warps')[0].checked = !!cookieobj.warp;
   document.getElementsByName('Warps')[0].onchange();

   document.getElementsByName('Ksword')[0].checked = !!cookieobj.kswrd;
   document.getElementsByName('Ksword')[0].onchange();

    document.getElementsByName('aspawn')[0].checked = !!cookieobj.aspwn;
    document.getElementsByName('aspawn')[0].onchange();
    document.getElementsByName('cspawn')[0].checked = !!cookieobj.cspwn;
    document.getElementsByName('cspawn')[0].onchange();

    document.getElementsByName('HideoutDoors')[0].checked = !!cookieobj.fortdoors;
    document.getElementsByName('HideoutDoors')[0].onchange();
    document.getElementsByName('CastleER')[0].checked = !!cookieobj.cER;
    document.getElementsByName('CastleER')[0].onchange();
    document.getElementsByName('ValleyRiver')[0].checked = !!cookieobj.valriv;
    document.getElementsByName('ValleyRiver')[0].onchange();

    document.getElementsByName('BossRings')[0].checked = !!cookieobj.brings;
    document.getElementsByName('BossRings')[0].onchange();

    document.getElementsByName('Beehives')[0].checked = !!cookieobj.hives;
    document.getElementsByName('Beehives')[0].onchange();
    document.getElementsByName('GerudoCard')[0].checked = !!cookieobj.gcard;
    document.getElementsByName('GerudoCard')[0].onchange();
    document.getElementsByName('BigMoney')[0].checked = !!cookieobj.merch;
    document.getElementsByName('BigMoney')[0].onchange();

    for (var i = 0; i < document.getElementsByName('mixphoo')[0].options.length; i++) {
        if (document.getElementsByName('mixphoo')[0].options[i].value === cookieobj.mixp) {
            document.getElementsByName('mixphoo')[0].options[i].selected = true;
            setMixedPools(cookieobj.mixp);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('SongShuffle')[0].options.length; i++) {
        if (document.getElementsByName('SongShuffle')[0].options[i].value === cookieobj.sngShuff) {
            document.getElementsByName('SongShuffle')[0].options[i].selected = true;
            setSongs(cookieobj.sngShuff);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('carpenters')[0].options.length; i++) {
        if (document.getElementsByName('carpenters')[0].options[i].value === cookieobj.carp) {
            document.getElementsByName('carpenters')[0].options[i].selected = true;
            setCarpenter(cookieobj.carp);
            break;
        }
    }
    
    for (var i = 0; i < document.getElementsByName('fortkeys')[0].options.length; i++) {
        if (document.getElementsByName('fortkeys')[0].options[i].value === cookieobj.frtky) {
            document.getElementsByName('fortkeys')[0].options[i].selected = true;
            setFortKeys(cookieobj.frtky);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('rainbowbridge')[0].options.length; i++) {
        if (document.getElementsByName('rainbowbridge')[0].options[i].value === cookieobj.rainlogic) {
            document.getElementsByName('rainbowbridge')[0].options[i].selected = true;
            setRainbow(cookieobj.rainlogic);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('castlelogic')[0].options.length; i++) {
        if (document.getElementsByName('castlelogic')[0].options[i].value === cookieobj.pigBK) {
            document.getElementsByName('castlelogic')[0].options[i].selected = true;
            setCastle(cookieobj.pigBK);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('quest')[0].options.length; i++) {
        if (document.getElementsByName('quest')[0].options[i].value === cookieobj.qlogic) {
            document.getElementsByName('quest')[0].options[i].selected = true;
            setQuest(cookieobj.qlogic);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('smallkeys')[0].options.length; i++) {
        if (document.getElementsByName('smallkeys')[0].options[i].value === cookieobj.smallk) {
            document.getElementsByName('smallkeys')[0].options[i].selected = true;
            setSmallKeys(cookieobj.smallk);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('bosskeys')[0].options.length; i++) {
        if (document.getElementsByName('bosskeys')[0].options[i].value === cookieobj.bossk) {
            document.getElementsByName('bosskeys')[0].options[i].selected = true;
            setBossKeys(cookieobj.bossk);
            break;
        }
    }
    for (var i = 0; i < document.getElementsByName('skulltula')[0].options.length; i++) {
        if (document.getElementsByName('skulltula')[0].options[i].value === cookieobj.sklogic) {
            document.getElementsByName('skulltula')[0].options[i].selected = true;
            setSkulltula(cookieobj.sklogic);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('IndoorER')[0].options.length; i++) {
        if (document.getElementsByName('IndoorER')[0].options[i].value === cookieobj.iER) {
            document.getElementsByName('IndoorER')[0].options[i].selected = true;
            setIndoorER(cookieobj.iER);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('shortcuts')[0].options.length; i++) {
        if (document.getElementsByName('shortcuts')[0].options[i].value === cookieobj.cuts) {
            document.getElementsByName('shortcuts')[0].options[i].selected = true;
            setShortcuts(cookieobj.cuts);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('BossDoors')[0].options.length; i++) {
        if (document.getElementsByName('BossDoors')[0].options[i].value === cookieobj.bossd) {
            document.getElementsByName('BossDoors')[0].options[i].selected = true;
            setBossDoors(cookieobj.bossd);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('lensgamekeys')[0].options.length; i++) {
        if (document.getElementsByName('lensgamekeys')[0].options[i].value === cookieobj.lensk) {
            document.getElementsByName('lensgamekeys')[0].options[i].selected = true;
            setTreasureKeys(cookieobj.lensk);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('keyrings')[0].options.length; i++) {
        if (document.getElementsByName('keyrings')[0].options[i].value === cookieobj.rings) {
            document.getElementsByName('keyrings')[0].options[i].selected = true;
            setKeyRings(cookieobj.rings);
            break;
        }
    }

    for (var i = 0; i < document.getElementsByName('silvers')[0].options.length; i++) {
        if (document.getElementsByName('silvers')[0].options[i].value === cookieobj.silrup) {
            document.getElementsByName('silvers')[0].options[i].selected = true;
            setSilvers(cookieobj.silrup);
            break;
        }
    }

   for (rbuttonID in document.getElementsByName('Age')) {
      rbutton = document.getElementsByName('Age')[rbuttonID]
      if (rbutton.value == cookieobj.age)
         rbutton.click();
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
   cookieobj.frogShuff = document.getElementsByName('Frogsanity')[0].checked ? 1 : 0;
    
   cookieobj.chulogic = document.getElementsByName('BombchuLogic')[0].checked ? 1 : 0;

   cookieobj.owl = document.getElementsByName('Owls')[0].checked ? 1 : 0;
   cookieobj.warp = document.getElementsByName('Warps')[0].checked ? 1 : 0;
   cookieobj.kswrd = document.getElementsByName('Ksword')[0].checked ? 1 : 0;

    cookieobj.aspwn = document.getElementsByName('aspawn')[0].checked ? 1 : 0;
   cookieobj.cspwn = document.getElementsByName('cspawn')[0].checked ? 1 : 0;
   cookieobj.fortdoors = document.getElementsByName('HideoutDoors')[0].checked ? 1 : 0;
   cookieobj.cER = document.getElementsByName('CastleER')[0].checked ? 1 : 0;
   cookieobj.valriv = document.getElementsByName('ValleyRiver')[0].checked ? 1 : 0;
   cookieobj.brings = document.getElementsByName('BossRings')[0].checked ? 1 : 0;
   cookieobj.hives = document.getElementsByName('Beehives')[0].checked ? 1 : 0;
   cookieobj.gcard = document.getElementsByName('GerudoCard')[0].checked ? 1 : 0;
   cookieobj.merch = document.getElementsByName('BigMoney')[0].checked ? 1 : 0;

    if (document.getElementsByName('carpenters')[0].selectedIndex !== -1) {
        cookieobj.carp = document.getElementsByName('carpenters')[0].options[document.getElementsByName('carpenters')[0].selectedIndex].value;
    }

    if (document.getElementsByName('fortkeys')[0].selectedIndex !== -1) {
        cookieobj.frtky = document.getElementsByName('fortkeys')[0].options[document.getElementsByName('fortkeys')[0].selectedIndex].value;
    }

    if (document.getElementsByName('rainbowbridge')[0].selectedIndex !== -1) {
        cookieobj.rainlogic = document.getElementsByName('rainbowbridge')[0].options[document.getElementsByName('rainbowbridge')[0].selectedIndex].value;
    }

    if (document.getElementsByName('castlelogic')[0].selectedIndex !== -1) {
        cookieobj.pigBK = document.getElementsByName('castlelogic')[0].options[document.getElementsByName('castlelogic')[0].selectedIndex].value;
    }

    if (document.getElementsByName('quest')[0].selectedIndex !== -1) {
        cookieobj.qlogic = document.getElementsByName('quest')[0].options[document.getElementsByName('quest')[0].selectedIndex].value;
    }

    if (document.getElementsByName('smallkeys')[0].selectedIndex !== -1) {
        cookieobj.smallk = document.getElementsByName('smallkeys')[0].options[document.getElementsByName('smallkeys')[0].selectedIndex].value;
    }

    if (document.getElementsByName('bosskeys')[0].selectedIndex !== -1) {
        cookieobj.bossk = document.getElementsByName('bosskeys')[0].options[document.getElementsByName('bosskeys')[0].selectedIndex].value;
    }

    if (document.getElementsByName('skulltula')[0].selectedIndex !== -1) {
        cookieobj.sklogic = document.getElementsByName('skulltula')[0].options[document.getElementsByName('skulltula')[0].selectedIndex].value;
    }

    if (document.getElementsByName('mixphoo')[0].selectedIndex !== -1) {
        cookieobj.mixp = document.getElementsByName('mixphoo')[0].options[document.getElementsByName('mixphoo')[0].selectedIndex].value;
    }

    if (document.getElementsByName('SongShuffle')[0].selectedIndex !== -1) {
        cookieobj.sngShuff = document.getElementsByName('SongShuffle')[0].options[document.getElementsByName('SongShuffle')[0].selectedIndex].value;
    }

    if (document.getElementsByName('IndoorER')[0].selectedIndex !== -1) {
        cookieobj.iER = document.getElementsByName('IndoorER')[0].options[document.getElementsByName('IndoorER')[0].selectedIndex].value;
    }

    if (document.getElementsByName('shortcuts')[0].selectedIndex !== -1) {
        cookieobj.cuts = document.getElementsByName('shortcuts')[0].options[document.getElementsByName('shortcuts')[0].selectedIndex].value;
    }
    if (document.getElementsByName('BossDoors')[0].selectedIndex !== -1) {
        cookieobj.bossd = document.getElementsByName('BossDoors')[0].options[document.getElementsByName('BossDoors')[0].selectedIndex].value;
    }
    if (document.getElementsByName('lensgamekeys')[0].selectedIndex !== -1) {
        cookieobj.lensk = document.getElementsByName('lensgamekeys')[0].options[document.getElementsByName('lensgamekeys')[0].selectedIndex].value;
    }
    if (document.getElementsByName('keyrings')[0].selectedIndex !== -1) {
        cookieobj.rings = document.getElementsByName('keyrings')[0].options[document.getElementsByName('keyrings')[0].selectedIndex].value;
    }
    if (document.getElementsByName('silvers')[0].selectedIndex !== -1) {
        cookieobj.silrup = document.getElementsByName('silvers')[0].options[document.getElementsByName('silvers')[0].selectedIndex].value;
    }

   for (rbuttonID in document.getElementsByName('Age')) {
      rbutton = document.getElementsByName('Age')[rbuttonID]
      if (rbutton.checked)
         cookieobj.age = rbutton.value;
   }

    setCookie(cookieobj);

    cookielock = false;
}

function highlight(a, b) {
    document.getElementById('minimap ' + b).style.visibility = 'unset';
}

function unhighlight(a, b) {
    document.getElementById('minimap ' + b).style.visibility = 'hidden';
}

// Highlights a dungeons)
function highlightDungeon(x) {
    document.getElementById('dungeon' + x).style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/highlighted.png)';
}

function unhighlightDungeon(x) {
    document.getElementById('dungeon' + x).style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/poi.png)";
}

function linehighlight(a, b) {
    document.getElementById('minimapdiv').style.zIndex = -1;
    document.getElementById('minimap ' + b).style.visibility = 'unset';
}

function lineunhighlight(a, b) {
    document.getElementById('minimapdiv').style.zIndex = 0;
    document.getElementById('minimap ' + b).style.visibility = 'hidden';
}

// mark dungeon as
function toggleMarkRegion(x) {
   window.event.preventDefault()
   var elem = document.getElementById("region" + x);
   if (regionMarked.indexOf(x) > -1) {
      regionMarked.splice(regionMarked.indexOf(x), 1);
   }
   if (elem) {
      if (elem.classList.contains('wayofhero')) {
         elem.classList.remove('wayofhero');
      } else {
         elem.className += " " + 'wayofhero';
         regionMarked.push(x);
      }
   }
}

function clickRegion(d) {
    regionSelect = d;

    document.getElementById('submaparea').innerHTML = regions[d].name;
    document.getElementById('submaparea').className = 'DC' + regions[d].isBeatable();
    var DClist = document.getElementById('submaplist');
    DClist.innerHTML = '';
    do {
        if (document.getElementById('eline') !== null) document.getElementById('eline').remove(); 
    } while (document.getElementById('eline') !== null);

    var minimap = document.getElementById('minimapdiv');
    if (d !== last) {
        last = d;
        here = regions[d].floorwdoor;}
    if (here == undefined) here = regions[d].floorwdoor;
    if (regions[d].type == "overworld")
        minimap.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + minimaps[d] + '.png)';
    if (regions[d].type == "dungeon")
        minimap.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + minimaps[d] + here + '.png)';
    minimap.innerHTML = '';
    if (regions[d].type == "overworld")
            document.getElementById('minimapdiv').style.backgroundColor = "maroon";
        else if (regions[d].type == "dungeon") {
            document.getElementById('minimapdiv').style.backgroundColor = "red";
            var ub = document.createElement('button');
            ub.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/Up.png)';
            ub.style.height = '32px';
            ub.style.width = '48px';
            ub.style.position = 'absolute';
            ub.style.top = '345px';
            ub.style.left = '22px';
            ub.style.backgroundPosition = 'center';
            ub.style.backgroundSize = '160%';
            ub.onclick = new Function('toggleDungeonMapUp(last)');
            var db = document.createElement('button');
            db.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/Down.png)';
            db.style.height = '32px';
            db.style.width = '48px';
            db.style.position = 'absolute';
            db.style.top = '369px';
            db.style.left = '22px';
            db.style.backgroundPosition = 'center';
            db.style.backgroundSize = '160%';
            db.onclick = new Function('toggleDungeonMapDown(last)');
            if (d !== 7) { //not needed in ice
                document.getElementById('minimapdiv').appendChild(ub);
                document.getElementById('minimapdiv').appendChild(db);
            }
        }
        
        if (OWERmap == true && regions[regionSelect].type == "overworld" && regions[regionSelect].found == false) {
          regions[regionSelect].found = true ;
        }
        if (DungeonER == true  && regions[regionSelect].type == "dungeon" && regions[regionSelect].found == false) {
            regions[regionSelect].found = true ;
        }

        for (key in regions[d].checklist) {
          if (shouldSkipChest(d, key)) {
            continue;
          }
          
          var s = document.createElement('li');
          if (regions[d].checklist[key].leadsto == "unknown") s.innerHTML = key;
          else if (regions[d].checklist[key].leadsto !== "unknown") s.innerHTML = regions[d].checklist[key].leadsto;
          if (regions[d].checklist[key].isOpened) {            
              s.className = "DCopened";
          } else if ( regions[d].checklist[key].isAvailable()) {
              s.className = "DCavailable";
          } else {
              s.className = "DCunavailable";
          }
  
          // Right image — use 'contents' if defined else default image
          var contentimg = document.createElement('contentimg');
          contentimg.style.objectFit = 'contain';

          s.appendChild(contentimg);
  
          s.onclick = new Function('toggleregionCheck(this,' + d + ',"' + key + '")');
          s.onmouseover = new Function('highlightregionCheck(this)');
          s.onmouseout = new Function('unhighlightregionCheck(this)');
          s.style.cursor = "pointer";
  
          DClist.appendChild(s);
          
          if (regions[d].type === "dungeon" && String(regions[d].checklist[key].floor) !== String(here)) {
            continue;
          }
        
            var c = document.createElement('span');
            c.innerHTML = ' ';
            c.id = regions[d].checklist[key].type;
            c.className = key + ' ' + s.className;
            c.style.cursor = 'pointer';
            c.style.position = 'absolute';
            c.style.width = '16px';
            c.style.height = '16px';
            c.onclick = new Function('toggleregionCheck(this,' + d + ',"' + key + '")');
            c.style.top = regions[d].checklist[key].y;
            c.style.left = regions[d].checklist[key].x;
            minimap.appendChild(c);
  
            var cc = document.createElement('span');
            cc.className = 'minimap ' + key;
            if (regions[d].checklist[key].leadsto == "unknown") cc.innerHTML = key;
            else if (regions[d].checklist[key].leadsto !== "unknown") cc.innerHTML = regions[d].checklist[key].leadsto;
            cc.id = 'minimap ' + key;
            cc.style.width = '160px';
            cc.style.backgroundColor = 'black';
            cc.style.color = '#fff';
            cc.style.position = 'absolute';
            cc.style.textAlign = 'center';
            cc.style.fontSize = '20px';
            cc.style.visibility = "hidden";
            cc.style.zIndex = '1';
            c.appendChild(cc);
            c.onmouseover = new Function('highlight(this' + ',"' + key + '")');
            c.onmouseout = new Function('unhighlight(this' + ',"' + key + '")');
        }
}
  

function set1Quest(i, d) {
    for ( x = 4; x < 13; x++ ) {
        if (i in items && i in questdungeons && regions[x].keytype == i) {
            clickRegion(x);
            confirmQuest();
            clickRegion(d);
        }
    }
    updateGridItemAll();   
}

function confirmQuest() {
    window.event.preventDefault();
    var dun = document.getElementById('submaparea');
    if (quest === "Mixed" && regions[regionSelect].type === "dungeon") {
        if ( regions[regionSelect].mixedtype == "default" ) {
                regions[regionSelect].mixedtype = "vanilla";
                for (var key in regions[regionSelect].checklist) {
                    if ( regions[regionSelect].checklist[key].access == "master")
                        regions[regionSelect].checklist[key].isOpened = false;
                    if ( regions[regionSelect].checklist[key].access == "vanilla")
                        regions[regionSelect].checklist[key].isOpened = true;
                }
            } else if ( regions[regionSelect].mixedtype == "vanilla" ) {
                regions[regionSelect].mixedtype = "master";
                for (var key in regions[regionSelect].checklist) {
                    if ( regions[regionSelect].checklist[key].access == "vanilla")
                        regions[regionSelect].checklist[key].isOpened = false;
                    if ( regions[regionSelect].checklist[key].access == "master")
                        regions[regionSelect].checklist[key].isOpened = true;
                }
            } else if ( regions[regionSelect].mixedtype == "master" ) {
                regions[regionSelect].mixedtype = "vanilla";
                for (var key in regions[regionSelect].checklist) {
                    if ( regions[regionSelect].checklist[key].access == "master")
                        regions[regionSelect].checklist[key].isOpened = false;
                    if ( regions[regionSelect].checklist[key].access == "vanilla")
                        regions[regionSelect].checklist[key].isOpened = true;
                }
            }
    }
    if ( regions[regionSelect].mixedtype == "vanilla" ) {
        if (regionSelect == 4) {
            itemsMax.WellKey = 2;
        } else if (regionSelect == 5) {
            itemsMax.ForestKey = 6;
        } else if (regionSelect == 6) {
            itemsMax.FireKey = 5;
        } else if (regionSelect == 8) {
            itemsMax.WaterKey = 2;
        } else if (regionSelect == 9) {
            itemsMax.GTGKey = 3;
        } else if (regionSelect == 10) {
            itemsMax.SpiritKey = 7;
        } else if (regionSelect == 11) {
            itemsMax.ShadowKey = 6;
        } else if (regionSelect == 12) {
            itemsMax.CastleKey = 3;
        }
    } else { 
        if (regionSelect == 4) {
            itemsMax.WellKey = 3;
        } else if (regionSelect == 5) {
            itemsMax.ForestKey = 5;
        } else if (regionSelect == 6) {
            itemsMax.FireKey = 8;
        } else if (regionSelect == 8) {
            itemsMax.WaterKey = 6;
        } else if (regionSelect == 9) {
            itemsMax.GTGKey = 9;
        } else if (regionSelect == 10) {
            itemsMax.SpiritKey = 5;
        } else if (regionSelect == 11) {
            itemsMax.ShadowKey = 5;
        } else if (regionSelect == 12) {
            itemsMax.CastleKey = 2;
        }
    }
    refreshMapANDUI();
    clickRegion(regionSelect);
}

function bulkDCSelect() {
  const liItems = document.querySelectorAll('#submaplist li:not(.d-none)');
  const availableLi = document.querySelectorAll('#submaplist li.DCavailable:not(.d-none)');
  const unavailableLi = document.querySelectorAll('#submaplist li.DCunavailable:not(.d-none)');
  const openedLi = document.querySelectorAll('#submaplist li.DCopened:not(.d-none)');

  if (availableLi.length > 0) {
    // Set all DCavailable items to isOpened = true, leave others unchanged
    availableLi.forEach(li => {
      const key = li.textContent.trim();
      if (regions[regionSelect].checklist[key]) {
        regions[regionSelect].checklist[key].isOpened = true;
      }
    });
  } else if (availableLi.length === 0 && unavailableLi.length > 0) {
    // Set all DCunavailable items to isOpened = true
    unavailableLi.forEach(li => {
      const key = li.textContent.trim();
      if (regions[regionSelect].checklist[key]) {
        regions[regionSelect].checklist[key].isOpened = true;
      }
    });
  } else if (openedLi.length === liItems.length && liItems.length > 0) {
    // If all are opened, set all to false
    liItems.forEach(li => {
      const key = li.textContent.trim();
      if (regions[regionSelect].checklist[key]) {
        regions[regionSelect].checklist[key].isOpened = false;
      }
    });
  }

  refreshMapANDUI();
  clickRegion(regionSelect);
}

function toggleDungeonMapUp() {
    var m = document.getElementById('minimapdiv');
    if (last !== regionSelect)
        here = regions[regionSelect].floorwdoor;
    here++;
    if (here > regions[regionSelect].topfloor)
        here = 0;
    m.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + minimaps[regionSelect] + here + '.png)';
    last = regionSelect;
    clickRegion(regionSelect);
}

function toggleDungeonMapDown() {
    var m = document.getElementById('minimapdiv');
    if (last !== regionSelect)
        here = regions[regionSelect].floorwdoor;
    here--;
    if (here < 0)
        here = regions[regionSelect].topfloor;
    m.style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + minimaps[regionSelect] + here + '.png)';
    last = regionSelect;
    clickRegion(regionSelect);
}

// Helper function to create and configure list elements
function createListElement(text, className, clickHandler) {
    const element = document.createElement('li');
    element.innerHTML = text;
    
    if (className) {
        element.className = className;
        element.id = className;
    }
    
    element.onmouseover = new Function('highlightregionCheck(this)');
    element.onmouseout = new Function('unhighlightregionCheck(this)');
    element.style.cursor = "pointer";
    
    if (clickHandler) {
        element.onclick = clickHandler;
    }
    
    return element;
}
// Helper function to add indoor destination options
function addIndoorDestinations(list, dungeonId, chestId) {
    // Create "dead" option first
    var deadOption = createListElement('dead', null, function() {
        regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
        clickRegion(dungeonId);
    });
    list.appendChild(deadOption);
    
    // Add all available indoor destinations
    function addDestinationWithCounter(name, counterVar) {
        if (window[counterVar] === 0 || (typeof window[counterVar] === 'number' && window[counterVar] < window[counterVar + 'Max'])) {
            var element = createListElement(name, null, function() {
                regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
                clickRegion(dungeonId);
                window[counterVar]++;
            });
            list.appendChild(element);
        }
    }
    
    // Define max values for counter variables that have limits if not already defined
    if (typeof ShopMax === 'undefined') {
        window.ShopMax = 7;
        window.GreatFairyMax = 6;
        window.Scrub2Max = 4;
        window.Scrub3Max = 4;
        window.FairyMax = 5;
        window.GenericMax = 9;
    }
    
    // Add specific indoor locations based on availability
    if (IndoorER == "Full" && ToT == 0) {
        addDestinationWithCounter('Temple O\' Time', 'ToT');
    }
    if (IndoorER == "Full" && Windmill == 0) {
        addDestinationWithCounter('Guru\'s Windmill', 'Windmill');
    }
    if (IndoorER == "Full" && Links == 0) {
        addDestinationWithCounter('Treehouse Cow', 'Links');
    }
    if (IndoorER == "Full" && PotShopF == 0) {
        addDestinationWithCounter('Pot Shop front', 'PotShopF');
    }
    if (IndoorER == "Full" && PotShopB == 0) {
        addDestinationWithCounter('Pot Shop back', 'PotShopB');
    }
    if (Shop < ShopMax) {
        addDestinationWithCounter('Shop', 'Shop');
    }
    if (GreatFairy < GreatFairyMax) {
        addDestinationWithCounter('Great Fairy', 'GreatFairy');
    }
    
    // Houses and special indoor locations
    const indoorLocations = [
        { name: 'Skulltula Family', counter: 'SkullHouse' },
        { name: 'Impas Cow', counter: 'ImpaBack' },
        { name: 'Archery Game', counter: 'Archery' },
        { name: 'Scientist Dive', counter: 'Lab' },
        { name: 'Fishing', counter: 'Fishing' },
        { name: 'Bowling Alley', counter: 'Bowling' },
        { name: 'Happy Masks', counter: 'MaskShop' },
        { name: 'Lens Mini Game', counter: 'ChestGame' },
        { name: 'Slingshot Game', counter: 'Sling' },
        { name: 'Guard House', counter: 'GuardHouse' },
        { name: 'Alley House', counter: 'AlleyHouse' },
        { name: 'Cow Silo', counter: 'Silo' },
        { name: 'Cow Stables', counter: 'Stable' },
        { name: 'Talon\'s House', counter: 'Talon' },
        { name: 'Mido\'s Chests', counter: 'Midos' },
        { name: 'Hearts House', counter: 'Sarias' },
        { name: 'Kokiri Twins', counter: 'Twins' },
        { name: 'Kokiri Bros', counter: 'KnowitAll' },
        { name: 'Impa\'s Front Door', counter: 'Impafront' },
        { name: 'Kak House', counter: 'TowerHouse' },
        { name: 'Granny\'s', counter: 'Grannys' },
        { name: 'Small Hut', counter: 'DampeHut' },
        { name: 'Carpenter\'s Tent', counter: 'CarpTent' }
    ];
    
    indoorLocations.forEach(location => {
        if (window[location.counter] === 0) {
            addDestinationWithCounter(location.name, location.counter);
        }
    });
}
// Helper function to handle grotto selection
function handleGrottoSelection(list, dungeonId, chestId) {
    // Create "dead" option first
    var deadOption = createListElement('dead', null, function() {
        regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
        clickRegion(dungeonId);
    });
    list.appendChild(deadOption);
    
    // Add grotto destinations based on availability
    function addGrottoOption(name, counterVar, maxCount) {
        const max = maxCount || 1;
        if (window[counterVar] === 0 || (typeof window[counterVar] === 'number' && window[counterVar] < max)) {
            var element = createListElement(name, null, function() {
                regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
                clickRegion(dungeonId);
                window[counterVar]++;
            });
            list.appendChild(element);
        }
    }
    
    // Define constants for max values if not already defined
    if (typeof GenericMax === 'undefined') {
        window.GenericMax = 9;
        window.Scrub2Max = 4;
        window.Scrub3Max = 4;
        window.FairyMax = 5;
    }
    
    // Add all available grotto types
    if (Generic < GenericMax) {
        addGrottoOption('Generic', 'Generic', GenericMax);
    }
    
    addGrottoOption('Lone Scrub', 'Scrub1');
    
    if (Scrub2 < Scrub2Max) {
        addGrottoOption('2 Scrubs', 'Scrub2', Scrub2Max);
    }
    
    addGrottoOption('2 Scrubs Left front', 'ScrubLeft');
    
    if (Scrub3 < Scrub3Max) {
        addGrottoOption('3 Scrubs', 'Scrub3', Scrub3Max);
    }
    
    // Add special grotto types
    const grottoTypes = [
        { name: 'Mask Theater', counter: 'Theater' },
        { name: 'Dampe\'s Race', counter: 'Dampe' },
        { name: 'Royal Tomb', counter: 'Tomb' },
        { name: 'Redead\'s Grave', counter: 'Redeadgrave' },
        { name: 'Fairy/Shield Grave', counter: 'Fairygrave' },
        { name: 'Tektite', counter: 'Tektite' },
        { name: 'Cash Cow', counter: 'Cow' },
        { name: '4 Web Grotto', counter: 'Web' },
        { name: 'Corner Skulltula', counter: 'Skulltula' },
        { name: 'Mud Walls', counter: 'MudWall' },
        { name: 'Wolfos', counter: 'Wolfos' },
        { name: 'Redeads', counter: 'Redead' },
        { name: 'Octorock', counter: 'Octorock' }
    ];
    
    grottoTypes.forEach(grotto => {
        addGrottoOption(grotto.name, grotto.counter);
    });
    
    // Add fairy fountains
    if (Fairy < FairyMax) {
        addGrottoOption('Fairy Fountain', 'Fairy', FairyMax);
    }
}
// Helper function to handle dungeon entrance selection
function handleregionSelection(list, dungeonId, chestId) {
    for (var k = 0; k < 35; k++) {
        if ((k == 0 || k > 12) && chestId !== "Dungeon Door") continue;
        if ((k > 0 && k < 13) && chestId == "Dungeon Door") continue;
        if (OWERmap == false && (k == 33 || k == 34)) continue;
        
        let printdun = false;
        for (var key in regions[k].checklist) {
            if (regions[k].checklist[key].type == "dungeon" && regions[k].checklist[key].leadsto == "unknown") {
                printdun = true;
                break;
            }
        }
        
        if (printdun) {
            var e = createListElement(regions[k].name, k, function() {
                var v = this.id;
                list.innerHTML = '';
                
                for (var ent in regions[v].checklist) {
                    if (regions[v].checklist[ent].type == "dungeon" && regions[v].checklist[ent].leadsto == "unknown") {
                        var ee = createListElement(ent, ent, function() {
                            ent = this.innerHTML;
                            regions[dungeonId].checklist[chestId].leadsto = ent;
                            regions[v].checklist[ent].leadsto = chestId;
                            clickRegion(dungeonId);
                        });
                        list.appendChild(ee);
                    }
                }
            });
            list.appendChild(e);
        }
    }
}
// Helper function to handle special entrance types (owl, warp, spawn)
function handleSpecialEntranceSelection(list, dungeonId, chestId, entranceType) {
    // Create "dead" option first for all special entrance types
    var deadOption = createListElement('dead', null, function() {
        regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
        clickRegion(dungeonId);
    });
    list.appendChild(deadOption);
    
    for (var k = 0; k < 35; k++) {
        // Skip dungeon areas (indices 1-12) for special entrances
        if (k > 0 && k < 13) continue;
        
        // Skip special map areas if OWERmap is disabled
        if (OWERmap == false && (k == 33 || k == 34)) continue;
        
        let printArea = false;
        
        // For owl entrances, look for valid destinations
        if (entranceType === "owl") {
            for (var key in regions[k].checklist) {
                if (regions[k].checklist[key].type === "owl" && 
                    regions[k].checklist[key].leadsto === "unknown") {
                    printArea = true;
                    break;
                }
            }
        } 
        // For warp entrances, always show options
        else if (entranceType === "warp") {
            if (k == 0 || (k >= 13 && k <= 32)) {
                printArea = true;
            }
        } 
        // For spawn points, always show options
        else if (entranceType === "spawn") {
            if (k == 0 || (k >= 13 && k <= 32)) {
                printArea = true;
            }
        }
        
        if (printArea) {
            var areaElement = createListElement(regions[k].name, k, function() {
                var areaId = this.id;
                
                if (entranceType === "owl") {
                    // For owls, show a second level of selection for specific owl points
                    list.innerHTML = '';
                    
                    for (var ent in regions[areaId].checklist) {
                        if (regions[areaId].checklist[ent].type === "owl" && 
                            regions[areaId].checklist[ent].leadsto === "unknown") {
                            var owlElement = createListElement(ent, ent + ' owl', function() {
                                var owlName = this.innerHTML;
                                regions[dungeonId].checklist[chestId].leadsto = owlName;
                                regions[areaId].checklist[owlName].leadsto = chestId;
                                clickRegion(dungeonId);
                            });
                            list.appendChild(owlElement);
                        }
                    }
                } else {
                    // For warps and spawns, just set the destination directly
                    regions[dungeonId].checklist[chestId].leadsto = regions[areaId].name;
                    clickRegion(dungeonId);
                }
            });
            list.appendChild(areaElement);
        }
    }
}
// Helper function to handle non-mixphoo entrance selection
function handleNonMixphooEntranceSelection(list, dungeonId, chestId) {
    // Create "dead" option first
    var deadOption = createListElement('dead', null, function() {
        regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
        clickRegion(dungeonId);
    });
    list.appendChild(deadOption);
    
    // Check entrance randomizer settings to determine options
    if (GrottoER == true) {
        // Add grotto option
        var grottoOption = createListElement('Grotto', null, function() {
            list.innerHTML = '';
            handleGrottoSelection(list, dungeonId, chestId);
        });
        list.appendChild(grottoOption);
    }
    
    if (IndoorER !== "Off") {
        // Add indoor option
        var indoorOption = createListElement('Indoor', null, function() {
            list.innerHTML = '';
            addIndoorDestinations(list, dungeonId, chestId);
        });
        list.appendChild(indoorOption);
    }
    
    if (OWERmap == true) {
        // Add overworld entrance option
        var owOption = createListElement('OW Entrance', null, function() {
            list.innerHTML = '';
            handleOwEntranceSelection(list, dungeonId, chestId);
        });
        list.appendChild(owOption);
    }
    
    if (DungeonER == true) {
        // Add dungeon option
        var dungeonOption = createListElement('Dungeon', null, function() {
            list.innerHTML = '';
            handleregionSelection(list, dungeonId, chestId);
        });
        list.appendChild(dungeonOption);
    }
}
// Helper function to handle Overworld Entrance selection
function handleOwEntranceSelection(list, dungeonId, chestId) {
    // Create "dead" option first
    var deadOption = createListElement('dead', null, function() {
        regions[dungeonId].checklist[chestId].leadsto = this.innerHTML;
        clickRegion(dungeonId);
    });
    list.appendChild(deadOption);
    
    for (var k = 0; k < 35; k++) {
        // Skip non-overworld areas
        if (k > 0 && k < 13) continue;
        
        // Skip special map areas if OWERmap is disabled
        if (OWERmap == false && (k == 33 || k == 34)) continue;
        
        let printArea = false;
        
        // Check if area has any entrances
        for (var key in regions[k].checklist) {
            if (regions[k].checklist[key].type === "entrance" && 
                regions[k].checklist[key].leadsto === "unknown") {
                printArea = true;
                break;
            }
        }
        
        if (printArea) {
            var areaElement = createListElement(regions[k].name, k, function() {
                var areaId = this.id;
                list.innerHTML = '';
                
                // Show all entrances in the selected area
                for (var ent in regions[areaId].checklist) {
                    if (regions[areaId].checklist[ent].type === "entrance" && 
                        regions[areaId].checklist[ent].leadsto === "unknown") {
                        var entranceElement = createListElement(ent, ent, function() {
                            var entranceName = this.innerHTML;
                            regions[dungeonId].checklist[chestId].leadsto = entranceName;
                            regions[areaId].checklist[entranceName].leadsto = chestId;
                            clickRegion(dungeonId);
                        });
                        list.appendChild(entranceElement);
                    }
                }
            });
            list.appendChild(areaElement);
        }
    }
}
function toggleregionCheck(sender, d, c) {
    regions[d].checklist[c].isOpened = !regions[d].checklist[c].isOpened;
    if (regions[d].checklist[c].isOpened)
        sender.className = 'DCopened';
    else if (regions[d].checklist[c].isAvailable())
        sender.className = 'DCavailable';
    else
        sender.className = 'DCunavailable';
    
    var printdun;
    if (regions[d].checklist[c].type == "entrance" && mixphoo !== "Full" && regions[d].checklist[c].leadsto == "unknown" ) {
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Use the helper function for non-mixphoo entrance selection
        handleNonMixphooEntranceSelection(l, d, c);
    }
    else if (mixphoo == "Off" && regions[d].checklist[c].leadsto == "unknown" && (regions[d].checklist[c].type == "simple" || (IndoorER == "Full" && regions[d].checklist[c].type == "alldoor")) ) {     
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Use the helper function for indoor destinations
        addIndoorDestinations(l, d, c);
    }
    else if (mixphoo == "Off" && regions[d].checklist[c].leadsto == "unknown" && regions[d].checklist[c].type == "grotto" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Use the helper function for grotto selection
        handleGrottoSelection(l, d, c);
    }
    else if (mixphoo == "Off" && regions[d].checklist[c].leadsto == "unknown" && regions[d].checklist[c].type == "dungeon" ) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Use the helper function for dungeon selection
        handleregionSelection(l, d, c);
    } else if (mixphoo == "Simple" && regions[d].checklist[c].leadsto == "unknown" && (regions[d].checklist[c].type == "dungeon" || regions[d].checklist[c].type == "grotto" || regions[d].checklist[c].type == "simple" || regions[d].checklist[c].type == "alldoor" ) ) {
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Create dead option
        var f0 = createListElement('dead', null, function(setLeadsto) {
            regions[d].checklist[c].leadsto = this.innerHTML;
            clickRegion(d);
        });
        l.appendChild(f0);
        
        // Add dungeon selection option if enabled
        if (DungeonER == true) {
            var f1 = createListElement('Dungeons', null, function(openarea) {
                l.innerHTML = '';
                handleregionSelection(l, d, c);
            });
            l.appendChild(f1);
        }
        
        // Add indoor selection option if enabled
        if (IndoorER !== "Off") {
            var f2 = createListElement('Indoor', null, function(setLeadsto) {
                l.innerHTML = '';
                addIndoorDestinations(l, d, c);
            });
            l.appendChild(f2);
        }
        
        // Add grotto selection option if enabled
        if (GrottoER == true) {
            var f3 = createListElement('Grotto', null, function(setLeadsto) {
                l.innerHTML = '';
                
                // Create "dead" option
                var e0 = createListElement('dead', null, function() {
                    regions[d].checklist[c].leadsto = this.innerHTML;
                    clickRegion(d);
                });
                l.appendChild(e0);
                
                // Add grotto destination options using the helper function
                handleGrottoSelection(l, d, c);
            });
            l.appendChild(f3);
        }
    } else if (mixphoo == "Full" && regions[d].checklist[c].leadsto == "unknown" && (regions[d].checklist[c].type == "dungeon" || regions[d].checklist[c].type == "grotto" || regions[d].checklist[c].type == "simple" || regions[d].checklist[c].type == "alldoor" || regions[d].checklist[c].type == "entrance" ) ) {
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Create "dead" option
        var e0 = createListElement('dead', null, function() {
            regions[d].checklist[c].leadsto = this.innerHTML;
            clickRegion(d);
        });
        l.appendChild(e0);
        
        // Add dungeon selection option if enabled
        if (DungeonER == true) {
            var f1 = createListElement('Dungeons', null, function() {
                l.innerHTML = '';
                handleregionSelection(l, d, c);
            });
            l.appendChild(f1);
        }
        
        // Add indoor selection option if enabled
        if (IndoorER !== "Off") {
            var f2 = createListElement('Indoor', null, function() {
                l.innerHTML = '';
                addIndoorDestinations(l, d, c);
            });
            l.appendChild(f2);
        }
        
        // Add grotto selection option if enabled
        if (GrottoER == true) {
            var f3 = createListElement('Grotto', null, function() {
                l.innerHTML = '';
                handleGrottoSelection(l, d, c);
            });
            l.appendChild(f3);
        }
        
        // Add OW Entrance option if enabled
        if (OWERmap == true) {
            var f4 = createListElement('OW Entrance', null, function() {
                l.innerHTML = '';
                handleOwEntranceSelection(l, d, c);
            });
            l.appendChild(f4);
        }
    } 
    else if (regions[d].checklist[c].leadsto == "unknown" && 
            (regions[d].checklist[c].type == "owl" || 
             regions[d].checklist[c].type == "warp" || 
             regions[d].checklist[c].type == "spawn")) { 
        var t = document.getElementById('submaparea');
        var l = document.getElementById('submaplist');
        t.innerHTML = c + ' leads to';
        l.innerHTML = '';
        
        // Use the helper function for special entrance types with the specific entrance type
        handleSpecialEntranceSelection(l, d, c, regions[d].checklist[c].type);
    }
    refreshMapANDUI();
    clickRegion(d);
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

function highlightregionCheck(x) {
    x.style.backgroundColor = '#282828';
}

function unhighlightregionCheck(x) {
    x.style.backgroundColor = '';
}

function setRainbow(sender) {
   rainbowbridge = sender;
   clickRegion(regionSelect);
   saveCookie();
}

function setCastle(sender) {
   castlelogic = sender;
   if (castlelogic == 'Removed')
      itemsMin.BossCastle = 1;
   else itemsMin.BossCastle = 0;
   items.BossCastle = itemsMin.BossCastle;
   updateGridItemAll();   
   clickRegion(regionSelect);
   saveCookie();
}

function setTrialSize(sender) {
    document.getElementById('trialsize').textContent = sender.value;
   trialsize = sender.value;
   clickRegion(regionSelect);
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
   clickRegion(regionSelect);
   saveCookie();
}

function setQuest(sender) {
    quest = sender;
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
        if (regions[k].type == "dungeon" && quest == "Vanilla") {
            regions[k].mixedtype = "vanilla" ; }
       else if (regions[k].type == "dungeon" && quest == "Master") {
            regions[k].mixedtype = "master" ; }
       else if (regions[k].type == "dungeon" && quest == "Mixed") {
            regions[k].mixedtype = "default" ; }
    } 

   clickRegion(regionSelect);
   saveCookie();
}

function setMixedPools(sender) {
    mixphoo = sender;
    clickRegion(regionSelect);
    saveCookie();
}

function setPoes(sender) {
    document.getElementById('poecount').textContent = sender.value;
    poecount = sender.value;
    itemsMax.BigPoe = poecount;
    updateGridItemAll();
    saveCookie();
}

function setFortKeys(sender) {
    fortkeys = sender;
    updateGridItemAll();
   saveCookie();
}

function setGerudoCard(sender) {
   GerudoCard = sender.checked;
   clickRegion(regionSelect);
   saveCookie();
}

function setCarpenter(sender) {
   carpenters = sender;

   updateGridItemAll();
   clickRegion(regionSelect);
   saveCookie();
}

function setSmallKeys(sender) {
   smallkeys = sender;
   clickRegion(regionSelect);
   saveCookie();
}

function setBossKeys(sender) {
   bosskeys = sender;
   clickRegion(regionSelect);
   saveCookie();
}

function setSkulltula(sender) {
   skulltula = sender;
   clickRegion(regionSelect);
   saveCookie();
}

function setScrub(sender) {
   Scrubsanity = sender.checked;
   clickRegion(regionSelect);
   saveCookie();
}

function setTree(sender) {
   OpenDeku = sender.checked;
   updateGridItemAll();
   clickRegion(regionSelect);
   saveCookie();
}

function setDoor(sender) {
   OpenDoor = sender.checked;
   if (OpenDoor)
      itemsMin.MasterSword = 1;
   else itemsMin.MasterSword = 0;
   items.MasterSword = itemsMin.MasterSword;
   updateGridItemAll();
   clickRegion(regionSelect);
   saveCookie();
}

function setFountain(sender) {
   OpenFountain = sender.checked;
   updateGridItemAll();
   clickRegion(regionSelect);
   saveCookie();
}

function setOcarina(sender) {
   OcarinaShuffle = sender.checked;
   if (OcarinaShuffle == false)
      itemsMin.Ocarina = 1;
   else itemsMin.Ocarina = 0;
   items.Ocarina = itemsMin.Ocarina;
   updateGridItemAll();
   clickRegion(regionSelect);
   saveCookie();
}

function setSongs(sender) {
   SongShuffle = sender;
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
   clickRegion(regionSelect);
   saveCookie();
}

function setBean(sender) {
   BeanShuffle = sender.checked;
   clickRegion(regionSelect);
   saveCookie();
}

function setShopsize(sender) {
    document.getElementById('shopsize').textContent = sender.value;
   shopsize = sender.value;
   if (shopsize > 0) {
      Shopsanity = true;
   }
   else if (shopsize == 0) {
      Shopsanity = false;
   }

   clickRegion(regionSelect);
   saveCookie();
} 

function setGrottoER(sender) {
   GrottoER = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setIndoorER(sender) {
   IndoorER = sender;
   refreshMapANDUI();
   saveCookie();
}

function setOWER(sender) {
   OWERmap = sender.checked;

    for (k = 0; k < regions.length; k++) {
        if (regions[k].type == "overworld" && OWERmap  == true) {
            regions[k].found = false ; }
        if (regions[k].type == "overworld" && OWERmap  == false) {
            regions[k].found = true ; }
    }
    
   if (OWERmap == false) {
   document.getElementById('dungeon33').style.visibility = 'hidden';
   document.getElementById('dungeon34').style.visibility = 'hidden';
   } if (OWERmap == true) {
   document.getElementById('dungeon33').style.visibility = 'visible';
   document.getElementById('dungeon34').style.visibility = 'visible';
   } 
   if (Warps == true || cspawn == true || aspawn == true) {
   document.getElementById('dungeon35').style.visibility = 'visible';
   }
   else if (Warps == false && cspawn == false && aspawn == false) {
      document.getElementById('dungeon35').style.visibility = 'hidden';
   }
   

   refreshMapANDUI();
   saveCookie();
}

function setDER(sender) {
   DungeonER = sender.checked;
   for (k = 1; k < 13; k++) {
        if (regions[k].type == "dungeon" && DungeonER == true) {
            regions[k].found = false ; }
       if (regions[k].type == "dungeon" && DungeonER == false) {
            regions[k].found = true ; }
    }
   refreshMapANDUI();
   saveCookie();
}

function setCows(sender) {
   Cowsanity = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setFrogs(sender) {
   Frogsanity = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setMerch(sender) {
   BigMoney = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setBombchu(sender) {
   BombchuLogic = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setKsword(sender) {
   Ksword = sender.checked;

   refreshMapANDUI();
   saveCookie();
}

function setOwls(sender) {
   Owls = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setWarps(sender) {
   Warps = sender.checked;
   refreshMapANDUI();
   saveCookie();
}

function setAge(sender) {
    Age = sender.value;
    refreshMapANDUI();
   if (Age === "Child")
       clickRegion(0);
   else
       clickRegion(14);
   saveCookie();    
   refreshMapANDUI();
}

function setAdultSpawn(sender) {
    aspawn = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}
function setChildSpawn(sender) {
    cspawn = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}

function AddHideout(sender) {
    HideoutDoors = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}

function setCasteER(sender) {
    CastleER = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}

function setShortcuts(sender) {
    shortcuts = sender;
   saveCookie();    
   refreshMapANDUI();
}

function setBossDoors(sender) {
    BossDoors = sender;
   saveCookie();    
   refreshMapANDUI();
}

function setTreasureKeys(sender) {
    lensgamekeys = sender;
   saveCookie();    
   refreshMapANDUI();
}

function setKeyRings(sender) {
    keyrings = sender;
   saveCookie();    
   refreshMapANDUI();
}

function setSilvers(sender) {
    silvers = sender;
   saveCookie();    
   refreshMapANDUI();
}

function setBees(sender) {
    Beehives = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}

function setValleyRiver(sender) {
    ValleyRiver = sender.checked;
    if (ValleyRiver == true) {
        regions[27].checklist['Valley to Lake'].leadsto = "unknown"; }
    else {
        regions[27].checklist['Valley to Lake'].leadsto = "Lake from Valley";}
   saveCookie();    
   refreshMapANDUI();
}

function setBossRings(sender) {
    BossRings = sender.checked;
   saveCookie();    
   refreshMapANDUI();
}

function setZoom(target, sender) {
    const scale = sender.value / 100;
    const el = document.getElementById(target);

    // Modern zoom / scaling
    el.style.zoom = scale;  // For IE/Chrome/Safari
    el.style.transform = 'scale(' + scale + ')';  // Standard
    el.style.transformOrigin = '0 0';

    // Optional legacy Firefox support (old versions)
    el.style.MozTransform = 'scale(' + scale + ')';
    el.style.MozTransformOrigin = '0 0';

    // Update percentage display
    const display = document.getElementById(target + 'size');
    if (display) display.innerHTML = sender.value + '%';

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
        sender.innerHTML = 'Settings';
        saveCookie();
    } else {
        var x = document.getElementById('settings');
        if (!x.style.display || x.style.display == 'none') {
            x.style.display = 'initial';
            sender.innerHTML = 'X';
        } else {
            x.style.display = 'none';
            sender.innerHTML = 'Settings';
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
    regions.forEach(region => Object.values(region.checklist).forEach(chest => delete chest.isOpened));
    items = Object.assign({}, baseItems);

    updateGridItemAll();
    refreshMapANDUI();
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
    itemGrid[r][i]['item'].className = 'griditem';
    itemGrid[r]['row'].appendChild(itemGrid[r][i]['item']);

    var tdt = document.createElement('table');
    tdt.className = 'lonk';
    
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
            itemGrid[row][index]['item'].style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/blank.png)';
        } else if ((typeof items[item]) == 'boolean') {
            itemGrid[row][index]['item'].style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + '.png)';
        } else {
            itemGrid[row][index]['item'].style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + itemsMax[item] + '.png)';
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
        itemGrid[row][index]['item'].style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + '.png)';
    } else {
        itemGrid[row][index]['item'].style.backgroundImage = 'url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + items[item] + '.png)';
    }

   itemGrid[row][index]['item'].className = 'griditem ' + !!items[item];
   itemGrid[row][index]['item'].name = items[item];

   if (fortresskeys[item] !== undefined) {
      if (fortkeys !== 'Fight' && GerudoCard == true)
         itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + keyimg[fortresskeys[item]] + ".png)";
      else
         itemGrid[row][index][3].style.backgroundImage = "";
   }
   if (songs[item] !== undefined) {
      if (SongShuffle == 'Songsanity')
         itemGrid[row][index][3].style.backgroundImage = "";
      else if (SongShuffle == 'Songs')
         itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + songimg[songs[item]] + ".png)";
      else if (SongShuffle == 'Bosses')
         itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + songdung[songs[item]] + ".png)";
   }
   if (medallions[item] !== undefined) {
         itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + dungeonImg[medallions[item]] + ".png)";
   }
   if (questdungeons[item] !== undefined) {
       if ( quest == "Master")
           itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/MQ.png)";
       else if ( quest == "Mixed" ) {
          itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/Unknown.png)";
          for ( d = 4; d < 13; d++ ) {
              if (regions[d].mixedtype == "default" && regions[d].keytype == item) 
                  itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/Unknown.png)";
              else if (regions[d].mixedtype == "vanilla" && regions[d].keytype == item) 
                  itemGrid[row][index][3].style.backgroundImage = "url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/MQ.png)";
              else if (regions[d].mixedtype == "master" && regions[d].keytype == item) 
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
             set1Quest(item, regionSelect);
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
    refreshMapANDUI();
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
    refreshMapANDUI();
    updateGridItem(row,col);
    saveCookie();
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

function populateItemconfig() {
    var grid = document.getElementById('itemconfig');
    if (!grid) return;

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
        rowitem.addEventListener('click', function() {
            itemConfigClick(this);
        });
        if (typeof items[key] === 'boolean') {
          rowitem.style.backgroundImage =
              `url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/${key}.png)`;
        } else if (itemsMax[key] !== undefined) {
          rowitem.style.backgroundImage =
              `url(https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/${key}${itemsMax[key]}.png)`;
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
   return items.Membership;
}

function isKeysanity() {
   switch (smallkeys) {
      case "Removed":
         return false;
      case "Dungeons":
         return false;
      case "Keysanity":
         return true;
   }
   return false;
}

function shouldSkipChest(dungeonIdx, chestKey) {
    const chest = regions[dungeonIdx].checklist[chestKey];

    if (chest.access === "entrance" && chest.type === "dungeon") return true;
    if (regions[dungeonIdx].type === "dungeon" && quest === "Mixed" && regions[dungeonIdx].mixedtype === "master" && chest.access === "master") return true;
    if (regions[dungeonIdx].type === "dungeon" && quest === "Mixed" && regions[dungeonIdx].mixedtype === "vanilla" && chest.access === "vanilla") return true;
    if (regions[dungeonIdx].type === "dungeon" && chest.access === "master" && quest === "Vanilla") return true;
    if (regions[dungeonIdx].type === "dungeon" && chest.access === "vanilla" && quest === "Master") return true;
    if (regions[dungeonIdx] === regions[12] && chest.type === "trial" && trialsize == 0) return true;
    if (chest.type === "entrance" && (OWERmap === false || chest.leadsto !== "unknown")) return true;
    if (chest.type === "warp" && Warps === false) return true;
    if (chestKey === "Warp Pad") return true;
    if (chest.type === "spawn" && (cspawn === false && aspawn === false)) return true;
    if (chest.type === "owl" && Owls === false) return true;
    if (chest.access === "door" && chest.type === "simple" && IndoorER === "Off") return true;
    if (chest.access === "door" && chest.type === "alldoor" && IndoorER !== "Full") return true;
    if (chest.access === "door" && chest.type === "dungeon" && DungeonER === false) return true;
    if (chest.access === "dungeon" && chest.type === "dungeon" && DungeonER === false) return true;
    if (chest.access === "simple" && IndoorER !== "Off") return true;
    if (chest.access === "alldoor" && IndoorER === "Full") return true;
    if (chest.access === "grotto" && chest.type === "grotto" && GrottoER === false) return true;
    if (chest.access === "grotto" && chest.type !== "grotto" && GrottoER === true) return true;
    if (regions[dungeonIdx].type === "overworld" && chest.type === "skulltula" && (skulltula === "Off" || skulltula === "Dungeons")) return true;
    if (regions[dungeonIdx].type === "dungeon" && chest.type === "skulltula" && (skulltula === "Off" || skulltula === "Overworld")) return true;
    if (chest.type === "scrub" && Scrubsanity === false) return true;
    if (chest.type === "shop" && shopsize == 0) return true;
    if (chest.type === "cow" && Cowsanity === false) return true;
    if (chest.type === "frog" && Frogsanity === false) return true;
    if (regions[dungeonIdx] === regions[0] && chest.type === "ksword" && Ksword === false) return true;
    if (regions[dungeonIdx] === regions[20] && chest.type === "bean" && BeanShuffle === false) return true;
    if (regions[dungeonIdx] === regions[15] && chest.type === "egg" && WeirdEgg === false) return true;
    if (chest.type === "merch" && BigMoney === false) return true;
    if (chest.type === "ocarina" && OcarinaShuffle === false && regions[dungeonIdx] === regions[32]) return true;
    if (chest.type === "ocarina" && regions[dungeonIdx] === regions[0] && (OWERmap === true || OcarinaShuffle === false)) return true;
    if (regions[dungeonIdx] === regions[28] && chest.type === "guard" && fortkeys === "Fight") return true;
    if (regions[dungeonIdx] === regions[28] && chest.type === "membership" && GerudoCard === false) return true;
    if (chest.type === "gossip" && items.StoneofAgony === false) return true;
    if ((OWERmap === true || IndoorER !== "Off") && chest.OWER === false) return true;
    if (Warps === false && (cspawn === false && aspawn === false) && dungeonIdx === 35) return true;
    if (OWERmap === false && (dungeonIdx === 33 || dungeonIdx === 34)) return true;
    if (chest.leadsto === "none" || chest.leadsto === "Spirit Right Hand" || chest.leadsto === "Spirit Left Hand") return true;

    return false;
}

function refreshMapANDUI() {
    var mapdiv = document.getElementById('mapdiv');
    var submaplist = document.getElementById('submaplist');
    submaplist.innerHTML = '';

    for (let k = 0; k < regions.length; k++) {
        if (OWERmap == false && k >= 33) continue;

        let dungeonElem = document.getElementById('dungeon' + k);
        if (!dungeonElem) {
            // Create dungeon element if it doesn't exist (optional, depending on your app)
            dungeonElem = document.createElement('span');
            dungeonElem.id = 'dungeon' + k;
            dungeonElem.className = 'mapspan dungeon';
            dungeonElem.style.left = regions[k].x;
            dungeonElem.style.top = regions[k].y;
            dungeonElem.onclick = () => clickRegion(k);
            dungeonElem.onmouseover = () => highlightDungeon(k);
            dungeonElem.onmouseout = () => unhighlightDungeon(k);
            dungeonElem.oncontextmenu = () => toggleMarkRegion(k);
            mapdiv.appendChild(dungeonElem);
            unhighlightDungeon(k);
        }

        dungeonElem.className = "mapspan dungeon " + regions[k].canGetChest() + ((regionMarked.indexOf(k) > -1) ? " wayofhero" : " ");

        let DCcount = 0;

        // Remove old minimap children for this dungeon chest keys
        for (const child of [...document.getElementById('minimapdiv').children]) {
            if (child.id && regions[k].checklist && regions[k].checklist[child.id]) {
                child.remove();
            }
        }

        for (const key in regions[k].checklist) {
            if (shouldSkipChest(k, key)) continue;

            if (!regions[k].checklist[key].isOpened && regions[k].checklist[key].isAvailable()) {
                DCcount++;
            }

            // if key belongs to current dungeon selected and conditions to display minimap indicators
            if (k === regionSelect) {

                    let c = document.createElement('span');
                    c.innerHTML = ' ';
                    c.id = regions[k].checklist[key].type;
                    if (regions[k].checklist[key].isOpened) {
                        c.className = key + ' DCopened';
                    } else if (regions[k].checklist[key].isAvailable()) {
                        c.className = key + ' DCavailable';
                    } else {
                        c.className = key + ' DCunavailable';
                    }
                    c.style.cursor = 'pointer';
                    c.style.position = 'absolute';
                    c.style.width = '16px';
                    c.style.height = '16px';
                    c.onclick = () => toggleregionCheck(c, k, key);
                    c.style.top = regions[k].checklist[key].y;
                    c.style.left = regions[k].checklist[key].x;

                    let cc = document.createElement('span');
                    cc.className = 'minimap ' + key;
                    cc.id = 'minimap ' + key;
                    cc.style.width = '160px';
                    cc.style.backgroundColor = 'black';
                    cc.style.color = '#fff';
                    cc.style.position = 'absolute';
                    cc.style.textAlign = 'center';
                    cc.style.fontSize = '20px';
                    cc.style.visibility = "hidden";
                    cc.style.zIndex = '1';
                    c.appendChild(cc);
                    c.onmouseover = () => highlight(c, key);
                    c.onmouseout = () => unhighlight(c, key);

                    document.getElementById('minimapdiv').appendChild(c);
            }
        }

        // Update chest count display in dungeon element
        let chestCountElem = Array.from(dungeonElem.children).find(e => e.className === 'chestCount');
        if (!chestCountElem) {
            chestCountElem = document.createElement('span');
            chestCountElem.className = 'chestCount';
            chestCountElem.style.color = 'black';
            chestCountElem.style.textAlign = 'center';
            dungeonElem.appendChild(chestCountElem);
        }
        chestCountElem.innerHTML = (quest == "Mixed" && regions[k].mixedtype == "default") ? '?' : (DCcount === 0 ? '' : DCcount);

        // Update submaparea for selected region
        if (k === regionSelect) {
            let submaparea = document.getElementById('submaparea');
            submaparea.innerHTML = regions[k].name;
            submaparea.className = 'DC' + regions[k].isBeatable();
            submaparea.onclick = bulkDCSelect;
        }
    }
}

function init() {
   populateItemconfig();

   loadCookie();
   saveCookie();
   clickRegion(regionSelect);
}

function preloader() {
    for (item in items) {
        if ((typeof items[item]) == 'boolean') {
            var img = new Image();
            img.src = 'https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + '.png';
        } else {
            for (i = itemsMin[item]; i < itemsMax[item]; i++) {
                var img = new Image();
                img.src = 'https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/' + item + i + '.png';
            }
        }
    }

   for (medallion in dungeonImg) {
      var img = new Image();
      img.src = "https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + dungeonImg[medallion] + ".png";
   }

   for (questdungeon in questimg) {
      var img = new Image();
      img.src = "https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + questimg[questdungeon] + ".png";
   }

   for (var i = 0; i < keyimg.length; i++) {
     var img = new Image();
     img.src = "https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + keyimg[i] + ".png";
  }
  
  for (var i in songs) {
     var img = new Image();
     img.src = "https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + songimg[songs[i]] + ".png";
  }
  for (var i in songs) {
     var img = new Image();
     img.src = "https://raw.githubusercontent.com/August40th/OoT-Tracker/master/images/" + songdung[songs[i]] + ".png";
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
