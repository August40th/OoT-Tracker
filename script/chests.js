function generalCanGetChest(chestlist) {
   var canGet = 0;
   var unopened = 0
   for (var key in chestlist) {
      if ( chestlist[key].access == "entrance" && chestlist[key].type == "dungeon" ) { //Dungeon door  
         continue;}
      if ( chestlist[key].access == "dungeon" && chestlist[key].type == "dungeon" ) { //Dungeon door  
         continue;}
      if ( chestlist[key].leadsto !== "unknown" && chestlist[key].type == "entrance" ) { //  
         continue;}
      if ( chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
         continue;}
      if ( chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
         continue;}
      if ( chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
         continue;}
      if ( chestlist[key].type == "entrance" && OWERmap == false ) { //Do Nothing
         continue;}
      if ( chestlist[key].type == "warp" && Warps == false) {
         continue;}
      if ( chestlist[key].type == "owl" && Owls == false) { //Do Nothing
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon OW door
            continue;}
        if ( chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
            continue;}
        if ( chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
            continue;}
        if ( chestlist[key].access == "grotto" && chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
            continue;}
        if ( chestlist[key].access == "grotto" && chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
            continue;}
        if ( chestlist[key].type == "skulltula" && skulltula == "Off") { // Skulls
            continue;}
        if ( (chestlist[key].access == "master" || chestlist[key].access == "vanilla") && chestlist[key].type == "skulltula" && skulltula == "Overworld" ) { // Dungeon Skulls
            continue;}
        if ( (chestlist[key].access == "outdoor" || chestlist[key].access == "simple" || chestlist[key].access == "grotto") && chestlist[key].type == "skulltula" && skulltula == "Dungeons" ) { // OW Skulls
            continue;}
        if (chestlist[key].type == "scrub" && Scrubsanity == false) { //Scrubs 
            continue;}
        if (chestlist[key].type == "shop" && shopsize == 0) { //Shops 
            continue;}
        if (chestlist[key].type == "cow" && Cowsanity == false) { //Cows
            continue;}
        if ( chestlist[key].type == "ksword" && Ksword == false ) { //kokiri shuffle
            continue;}
        if ( chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
            continue;}
        if ( chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
            continue;}
        if ( chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
            continue;}
        if ( chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
            continue;}
        if ( chestlist[key].type == "ocarina" && OcarinaShuffle == false ) { //Ocarina shuffle in field
            continue;}
        if ( chestlist[key].access == "no OWER" && chestlist[key].type == "ocarina" && ((OWERmap == true && OcarinaShuffle == true) || OcarinaShuffle == false) ) { //OWER Ocarina shuffle
            continue;}
        if ( chestlist[key].type == "guard" && fortkeys == "Fight" ) { //Fortress Guard checks
            continue;}
        if ( chestlist[key].type == "membership" && gerudobridge !== "Shuffle" ) { //Fortress Guard checks
            continue;}
        if (chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
            continue;}
        if ( chestlist[key].OWER == false && OWERmap == true) { // OWER Market street
            continue;}
      if (chestlist.hasOwnProperty(key)) {
         if (!chestlist[key].isOpened)
            unopened++;

         if (!chestlist[key].isOpened && chestlist[key].isAvailable())
            canGet++;
      }
   }

   if (unopened == 0)
      return "opened"
   if (canGet == unopened)
      return "available"
   if (canGet == 0)
      return "unavailable"
   return "possible"
}
// define dungeon chests
var dungeons = [
   { name: 'Kokiri Forest', x: "78.9%", y: "63.9%", type: "overworld", found: true,
      chestlist: {
         'Forest to Field': { x: "3.5%", y: "45%", leadsto: "unknown", type: "entrance", access: "entrance",
          isAvailable: function () {
               return dungeons[0].found == true ; }
       }, 'Fairy Ocarina': { x: "0%", y: "45%", leadsto: "unknown", type: "ocarina", access: "no OWER",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Mido\'s House': { x: "16.75%", y: "38%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Mido\'s House 1': { x: "15%", y: "40%", leadsto: "unknown", type: "chest", access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Mido\'s House 2': { x: "15%", y: "35%", leadsto: "unknown", type: "chest", access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Mido\'s House 3': { x: "18%", y: "40%", leadsto: "unknown", type: "chest", access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Mido\'s House 4': { x: "18%", y: "35%", leadsto: "unknown", type: "chest", access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Know It All Bro\'s': { x: "8%", y: "57%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Child Know it All Bros Skulltula': { x: "5.4%", y: "58%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () { //Child only outdoor
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ); }
         }, 'Kokiri Sword Chest': { x: "19%", y: "94%", leadsto: "unknown", type: "ksword", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); }
         }, 'Link\'s House': { x: "22.2%", y: "71%", leadsto: "unknown", type: "alldoor", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Link\'s House Cow': { x: "22.4%", y: "72%", leadsto: "unknown", type: "cow", access: "alldoor",
            isAvailable: function () { //Child only indoor
               return dungeons[0].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Ocarina && items.EponasSong; }
         }, 'Saria\'s House': { x: "2950%", y: "65%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Twin\'s House': { x: "37.5%", y: "61%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Adult Twin\'s House Roof Skulltula': { x: "38.5%", y: "64.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () { //Adult only outdoor
               return dungeons[0].found == true
                 && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Hookshot; }
         }, 'Soil Patch Skulltula': { x: "39%", y: "42%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && items.Bottle; }
         }, 'Kokiri Shop': { x: "35.3%", y: "42.5%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Kokiri Sale': { x: "34%", y: "38%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Infront Storms Grotto': { x: "14%", y: "25%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         }, 'Song of Storms Grotto': { x: "16.7%", y: "26.4%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return dungeons[0].found == true
               && items.Ocarina && items.SongofStorms; }
         }, 'Storms Grotto Chest': { x: "16.7%", y: "27.4%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[0].found == true &&
                  items.Ocarina && items.SongofStorms; }
         }, 'Storms Grotto Gossip': { x: "17%", y: "25%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true &&
                  items.Ocarina && items.SongofStorms; }
         }, 'Forest to Woods': { x: "17%", y: "19.5%", leadsto: "unknown", type: "entrance", access: "entrance",
          isAvailable: function () {
               return dungeons[0].found == true ; }
       }, 'Left of Deku Tree Gossip': { x: "73%", y: "8%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         }, 'Behind Deku Tree Gossip': { x: "84%", y: "38%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         }, 'Inside the Deku Tree': { x: "74%", y: "28%", leadsto: "unknown", type: "dungeon", access: "door",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Deku Tree", x: "88%", y: "48.5%", type: "dungeon", mixedtype: "default", keytype: "none", found: true, topfloor: 4, floorwdoor: 2,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "2", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Lobby Chest': { x: "76%", y: "55%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, '2nd Floor Chest': { x: "48%", y: "80%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.DekuShield && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.HylianShield && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2nd Floor Side Chest': { x: "50%", y: "83%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.DekuShield && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.HylianShield && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Top Floor Chest': { x: "39%", y: "45%", leadsto: "unknown", floor: "4", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Top Floor Side Chest': { x: "49%", y: "50%", leadsto: "unknown", floor: "4", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Top Floor Skulltula': { x: "49%", y: "52%", leadsto: "unknown", floor: "4", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Basement Chest': { x: "77%", y: "37%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Basement 1st Skulltula': { x: "78%", y: "44%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Basement 2nd Skulltula': { x: "71%", y: "33%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Queen Gohma': { x: "55%", y: "15%", leadsto: "unknown", floor: "0", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Basement Bomb Wall Skulltula': { x: "20%", y: "34%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic)) ;}
         }, 'Lobby Skull in Crate': { x: "79%", y: "55%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'MQ Lobby Chest': { x: "76%", y: "55%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Top Floor Torch Chest': { x: "39%", y: "45%", leadsto: "unknown", floor: "4", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Top Floor Larva Kill': { x: "49%", y: "52%", leadsto: "unknown", floor: "4", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'MQ 2nd Floor Chest': { x: "48%", y: "80%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( (items.Slingshot && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||(items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2nd Floor Skulltule': { x: "50%", y: "83%", leadsto: "unknown", floor: "3", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.Boomerang && (items.Bombchu || items.Bombs) && items.Slingshot && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.Hookshot && (items.Bombchu || items.Bombs) && items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Basement Chest 1': { x: "77%", y: "37%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'Spiked Log Open Chest': { x: "67%", y: "77%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && items.Slingshot && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); }
         }, 'Song of Time Chest': { x: "45%", y: "76%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && items.Slingshot && items.Ocarina && items.SongofTime && ( OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); 
            }
         }, 'Basement Ceiling Skulltule': { x: "28%", y: "46%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable:function () {
               return dungeons[1].found == true && items.Boomerang && items.Ocarina && items.SongofTime && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield));
            }
         }, 'Back Room Skulltula': { x: "20%", y: "34%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && items.Bombs && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); }
         }, 'Basement Scrub': { x: "63%", y: "51%", leadsto: "unknown", floor: "1", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         }, 'MQ Queen Gohma': { x: "55%", y: "15%", leadsto: "unknown", floor: "0", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Dodongo's Cavern", x: "60.6%", y: "08.4%", type: "dungeon", mixedtype: "default", keytype: "none", found: true, topfloor: 1, floorwdoor: 0,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "0", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Lobby Gossip': { x: "47%", y: "54%", leadsto: "unknown", floor: "0", type: "gossip", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Baby Dodongos Skulltula': {
           x: "65%", y: "87%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                ); 
            }
         }, 'Scarecrow Skulltula': {
           x: "55%", y: "72%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true && items.Hookshot && items.Scarecrow >= 2 &&
                (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ; 
            }
         }, '1F Right Scrub Room': {
           x: "63%", y: "31%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Lobby Chest': {
           x: "22%", y: "63%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Lobby Scrub': {
           x: "22%", y: "74%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Armos Chest': {
           x: "12%", y: "77%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Top of the Stairs Skulltula': {
           x: "10%", y: "60%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Behind Stairs Skulltula': {
           x: "11%", y: "48%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hookshot >= 2
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F Bomb Flower Platform': {
           x: "56%", y: "76%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F before Elevator Switch': {
           x: "53%", y: "60%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && items.Slingshot &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F Scrubs 1': {
           x: "53%", y: "48%", leadsto: "unknown", floor: "1", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F Scrubs 2': {
           x: "58%", y: "48%", leadsto: "unknown", floor: "1", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'End of Bridge Chest': {
           x: "22%", y: "54%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || (items.Hammer && items.Glove) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Behind Pushblocks Skulltula': {
           x: "52%", y: "10%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Chest Above King Dodongo': {
           x: "27%", y: "35.5%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'King Dodongo': {
           x: "30%", y: "35.5%", leadsto: "unknown", floor: "0", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic && items.Glove) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Lobby Mud Wall Chest': {
           x: "47%", y: "54%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'MQ Lobby Chest': {
           x: "47%", y: "63%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'MQ Lobby Gossip': { x: "22%", y: "63%", leadsto: "unknown", floor: "0", type: "gossip", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Lobby Scrub 1': {
           x: "22%", y: "73%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Lobby Scrub 2': {
           x: "22%", y: "77%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove)
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Song of Time Skulltula': {
           x: "14.5%", y: "78%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && items.Ocarina && items.SongofTime &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Stair Master Scrub': {
           x: "11%", y: "48%", leadsto: "unknown", floor: "1", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Teen Dodongo Chest': {
           x: "12%", y: "75%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Baby Gohma Chest': {
           x: "55.5%", y: "48%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, 'Crate Skulltula': {
           x: "58%", y: "49%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F Lizalfos Skulltula': {
           x: "74%", y: "44%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '2F Platform Chest': {
           x: "55%", y: "73%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '1F Side Route Scrub': {
           x: "63%", y: "32%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         }, '1F Scrub Keese Room Skulltula': {
           x: "68%", y: "88%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 );
            }
         }, 'Poe fight Chest': {
           x: "52%", y: "11%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         }, 'Back Room Skulltula': {
           x: "52%", y: "23%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); }
         }, 'Chest Above Boss Room': {
           x: "37.5%", y: "28%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         }, 'MQ King Dodongo': {
           x: "35.5%", y: "30%", leadsto: "unknown", floor: "0", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         }
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },{ name: "Jabu Jabu's Belly", x: "88.4%", y: "18%", type: "dungeon", mixedtype: "default", keytype: "none", found: true, topfloor: 1, floorwdoor: 1,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "1", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Water Switch Skulltula': {
           x: "61%", y: "54%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ); 
            }
         }, 'Basement Dive to Scrub': {
           x: "37%", y: "64%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && (items.Scale || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ); 
            }
         }, 'StingRay Chest': {
           x: "68%", y: "21%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ); 
            }
         }, 'Tentacle Chest': {
           x: "27%", y: "22%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Bubble Pop Chest': {
           x: "38%", y: "6%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Before Big Octo Skull 1': {
           x: "52%", y: "38%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( (items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || (items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         }, 'Before Big Octo Skull 2': {
           x: "51%", y: "46%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( (items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || (items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         }, 'Before Brainade Skulltula': {
           x: "65%", y: "66%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Barinade': {
           x: "65.5%", y: "54%", leadsto: "unknown", floor: "1", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Lobby Switch Chest': {
           x: "48%", y: "84%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer) 
                                          &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         }, 'Lobby Cow Chest': {
           x: "51%", y: "84%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Underwater Cow Chest': {
           x: "37%", y: "64%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Elevator Room Lower Chest': {
           x: "52%", y: "64%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Basement Cow Chest 1': {
           x: "52%", y: "38%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Basement Cow Chest 2': {
           x: "46%", y: "47%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Basement Open Chest': {
           x: "65%", y: "51%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Basement Battle Chest': {
           x: "59%", y: "54%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Song of Time Skulltula': {
           x: "62%", y: "53%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && (items.Boomerang || (items.Ocarina && items.SongofTime) )
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Boulder Skulltula': {
           x: "40%", y: "7%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) 
               && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) 
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Invisible Enemies Skulltula': {
           x: "35%", y: "55%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) 
               && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) 
               && items.Magic && items.Dins 
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Falling Like Like Chest': {
           x: "58%", y: "6%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Elevator Room Upper Chest': {
           x: "52%", y: "62%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Top Floor Standing Cow': {
           x: "32%", y: "68%", leadsto: "unknown", floor: "1", type: "cow", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Ocarina && items.EponasSong
                  && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Chest Near Boss Door': {
           x: "65%", y: "63%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Skulltula Near Boos Door': {
           x: "64.5%", y: "66%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'MQ Barinade': {
           x: "65%", y: "55%", leadsto: "unknown", floor: "1", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Bottom of the Well", x: "69.3%", y: "23.4%", type: "dungeon", mixedtype: "default", keytype: "WellKey", found: true, topfloor: 2, floorwdoor: 2,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "2", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Front Left Hidden Wall': { x: "45%", y: "41%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Front Center Bombable': { x: "52%", y: "38%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'Center Large Chest': { x: "46%", y: "33%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Underwater Left Chest': { x: "27%", y: "26.5%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Coffin Key': { x: "7%", y: "27%", leadsto: "unknown", floor: "2", type: "freestanding", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Center Small Chest': { x: "65%", y: "33%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Back Left Bombable': { x: "32%", y: "8%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'West Key Door Skulltula': { x: "47%", y: "16%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         }, 'East Key Door Skulltula': { x: "62%", y: "16%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         }, 'Right Bottom Hidden Wall': { x: "67%", y: "40%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Locked Pits': { x: "81.5%", y: "19%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey );
            }
         }, 'Like Like Chest': { x: "80%", y: "27%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey );
            }
         }, 'Like Like Skulltula': { x: "84%", y: "27%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         }, 'Basement Chest': { x: "72%", y: "45%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove );
            }
         }, 'Underwater Front Chest': { x: "56%", y: "50%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Dead Hand': { x: "84%", y: "50%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Invisible Chest': { x: "90%", y: "50%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Center Chest': { x: "57%", y: "35%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( (items.Ocarina && items.ZeldasLullaby) 
                   || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
         }, 'MQ Deadhand Chest': { x: "84%", y: "50%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Slingshot || items.Boomerang || items.KokiriSword || items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'Deadhand Freestanding': { x: "90.5%", y: "45%", leadsto: "unknown", floor: "2", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'Inner Room Freestanding': { x: "62%", y: "16%", leadsto: "unknown", floor: "2", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( ( (items.Ocarina && items.ZeldasLullaby) || (items.Bombchu && BombchuLogic) 
                     && (items.Slingshot || items.Boomerang) ) 
                   || items.Bombs );
            }
         }, 'MQ Basement Chest': { x: "72%", y: "45%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.WellKey && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'Tombstone Skulltula': { x: "48.5%", y: "18%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () { //?
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( (items.Ocarina && items.ZeldasLullaby) 
                   || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
         }, 'Coffin Room Skulltula': { x: "5.5%", y: "22%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () { //?
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.WellKey;
            }
         }, 'Basement Skulltula': { x: "38%", y: "9%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Forest Temple", x: "78.5%", y: "39%", type: "dungeon", mixedtype: "default", keytype: "ForestKey", found: true, topfloor: 3, floorwdoor: 2,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "2", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Lobby Skulltula': { x: "54%", y: "87%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( (items.Bow || items.Hookshot) 
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || ( (items.Slingshot || items.Boomerang) 
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
          }, 'Lobby Chest': { x: "45%", y: "84%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         }, 'Torch Room Skulltula': { x: "54%", y: "30%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( (items.Hookshot
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Boomerang
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         }, '1st Floor Stalfos': { x: "49%", y: "9%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         }, 'Bubble Chest': { x: "49%", y: "21%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) )
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) );
            }
         }, 'Courtyard Island Chest': { x: "76%", y: "23%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         }, 'Courtyard Island Skulltula': { x: "70%", y: "19%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) ) // ???? hovers
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Boomerang && items.Slingshot && items.Magic && items.Dins && items.ForestKey >= 5
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         }, 'Well Chest': { x: "29%", y: "40%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) )
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) );
            }
         }, 'Push Block Room Chest': { x: "16%", y: "57%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey && items.Hookshot && items.Bow && items.Glove;
            }
         }, 'Hallway Twist Chest': { x: "17%", y: "8%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 2 && items.Hookshot && items.Bow && items.Glove;
            }
         }, 'Floormaster Chest': { x: "11%", y: "35%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && ((items.Bow && items.ForestKey >= 2 && items.Glove) || (items.HoverBoots && items.ForestKey));
            },
         }, 'West Courtyard Skulltula': { x: "27%", y: "17%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (items.ForestKey >= 2 || (items.ForestKey && items.HoverBoots)) && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         }, 'Red Poe Chest': { x: "39%", y: "5%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         }, '2nd Floor Stalfos': { x: "49%", y: "9%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Glove;
            },
         }, 'Blue Poe Chest': { x: "59%", y: "5%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         }, 'Checkerboard Chest': { x: "84%", y: "54%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && 
                  (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) &&
                  items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Glove && (items.Bow || (items.Dins && items.Magic));
            }
         }, 'Near Boss Chest': { x: "51%", y: "59%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Bow && items.Glove;
            }
         }, 'Basement Skulltula': { x: "49%", y: "59%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && items.Bow && items.Glove;
            },
         }, 'Phantom Ganon': { x: "50%", y: "17%", leadsto: "unknown", floor: "0", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.BossForest && items.Hookshot && items.Bow && items.Glove;
            }
         }, 'MQ Lobby Chest': { x: "54%", y: "84%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         }, '1st Hallway Skulltula': { x: "50%", y: "64%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         }, 'Wolfos Chest': { x: "49%", y: "9%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Ocarina && items.SongofTime; }
         }, 'MQ Courtyard Island Chest': { x: "70%", y: "18%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         }, 'Counrtyard Climb Chest': { x: "66.5%", y: "16.5%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Bow; }
         }, 'Well Skulltula': { x: "29%", y: "39%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2 && items.IronBoots) || items.Bow); 
            }
         }, 'MQ Well Chest': { x: "40%", y: "68%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && (items.Bow || items.IronBoots); }
         }, 'MQ West Courtyard Skulltula': { x: "27%", y: "39.5%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2) || items.Bow); }
         }, 'East Courtyard Skulltula': { x: "64%", y: "30%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2 && (items.IronBoots || items.Scale >= 2)) || items.Bow); 
            }
         }, 'Gilded Chest': { x: "17%", y: "8%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 1; }
         }, 'Redead Chest': { x: "11%", y: "35%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 1; }
         }, 'Push Block Room Skulltula': { x: "21%", y: "58%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         }, 'MQ Red Poe Chest': { x: "39%", y: "5%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         }, 'MQ 2nd Floor Stalfos': { x: "49%", y: "9%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2; }
         }, 'MQ Blue Poe Chest': { x: "59%", y: "5%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         }, 'MQ Checkerboard Room Chest': { x: "83%", y: "26%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         }, 'MQ Chest Near Boss Door': { x: "42%", y: "36.5%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow; }
         }, 'MQ Phantom HorsePig': { x: "50%", y: "17%", leadsto: "unknown", floor: "0", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow && items.BossForest; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Fire Temple", x: "65.4%", y: "04%", type: "dungeon", mixedtype: "default", keytype: "FireKey", found: true, topfloor: 4, floorwdoor: 0,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "0", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Chest Near Boss': { x: "63.5%", y: "36%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         }, 'Before 1st Fire Dancer Skulltula': { x: "57%", y: "23%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.Hammer && (items.Hookshot || items.HoverBoots || items.BoleroofFire)
            }
         }, 'Flare Dancer Chest': { x: "46.5%", y: "26%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         }, 'Under Lobby Chest': { x: "47%", y: "35%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         }, 'Song of Time Lava Room Skulltula': { x: "64%", y: "22%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.Ocarina && items.SongofTime && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         }, 'Lava Room Open Chest': { x: "75%", y: "23%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot));
            }
         }, 'Lava Room Bombable Wall': { x: "69%", y: "75%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Maze Lower Chest': { x: "76%", y: "62%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         }, 'Maze Bombable Wall Skulltula': { x: "77%", y: "29%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (items.Bombs || items.Bombchu) && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         }, 'Maze Side Room': { x: "64%", y: "21%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         }, 'Eye Switch Chest': { x: "61%", y: "44%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         }, 'Maze Upper Chest': { x: "73%", y: "66%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         }, 'Maze Bombable Pit': { x: "77%", y: "46%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, '1st Scarecrow Skulltula': { x: "63%", y: "32%", leadsto: "unknown", floor: "3", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         }, '2nd Scarecrow Skulltula': { x: "68%", y: "44%", leadsto: "unknown", floor: "4", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         }, 'Scarecrow Chest': { x: "75%", y: "41%", leadsto: "unknown", floor: "4", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina && items.Scarecrow >= 2;
            }
         }, 'Flame Maze Side Room': { x: "41%", y: "29%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         }, 'Song of Time Chest': { x: "31%", y: "46%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.FireKey >= 7 || (items.FireKey >= 6 && items.HoverBoots)) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer;
            }
         }, 'Topmost Chest': { x: "23%", y: "53%", leadsto: "unknown", floor: "4", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer);
            }
         }, 'Volvagia': { x: "29%", y: "46%", leadsto: "unknown", floor: "0", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.BossFire && ((items.GoronTunic || items.Bottle) && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs)));
            }
         }, 'Like Like Chest': { x: "47%", y: "40%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () { 
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )
                      );
            }
         }, 'MQ Chest Near Boss Door': { x: "36.5%", y: "61%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && (items.Magic && (items.Dins || (items.Bow && items.Fire)) &&
                       ((items.BoleroofFire && items.Ocarina) //Warp
                        || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || items.Dins) //:ink the Goron
                            )
                        )
                      ); //Boss Door access
            }
         }, 'MQ Flare Dancer Chest': { x: "46.5%", y: "26%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >= 1 ; //Iron Knuckle Access
            }
         }, 'Rusted Switch Chest': { x: "47%", y: "35%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >=1 && items.Hammer; //Switch
            }
         }, 'Lava Green Room Chest': { x: "64%", y: "22%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) ; //Lava Room and Torch
            }
         }, 'MQ Lava Bombable Room': { x: "69%", y: "75%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && (items.Bombs || (items.Bombchu && BombchuLogic) ) //Bombwall
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Torch
                      ;
            }
         }, 'Lava Side Room Skulltula': { x: "75%", y: "23%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.Hammer; //Lava Room
            }
         }, 'Song of Time Climb Skulltula': { x: "75%", y: "41%", leadsto: "unknown", floor: "4", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                      && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      && items.SongofTime && items.Ocarina && items.Glove //Block of Time climb, strength for push block
                      ;
            }
         }, 'Bombable Shortcut Chest': { x: "77%", y: "46%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 1 && (items.Bombs || (BombchuLogic && items.Bombchu)) //Keydoor, bombwall to rusted switch
                      ;
            }
         }, 'Maze Upper Gate': { x: "73%", y: "66%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                        && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         }, 'Maze Lower Gate': { x: "76%", y: "62%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //No Hookshot needed
                       ;
            }
         }, 'MQ Maze Side Room': { x: "64%", y: "21%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                       && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         }, 'MQ Flame Maze Side Room': { x: "41%", y: "29%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         }, 'Bombwall Skulltula': { x: "31%", y: "46%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      && items.Bombs || (BombchuLogic && items.Bombchu) //Bombwall
                      ;
            }
         }, 'Flare Dancer Freestanding': { x: "15.5%", y: "47.5%", leadsto: "unknown", floor: "2", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey>= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         }, 'MQ Highest Chest': { x: "23%", y: "53%", leadsto: "unknown", floor: "4", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 3 //Amother KeyDoor
                      ;
            }
         }, 'Deepest Skulltula': { x: "36%", y: "44%", leadsto: "unknown", floor: "3", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 5;
            }
         }, 'MQ Volvagia': { x: "29%", y: "46%", leadsto: "unknown", floor: "0", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ))
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Boss Door access
                        && items.BossFire && items.Hammer && (items.HoverBoots //Boss Key, Hammer, and Hovers...
                                                             || (items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                                                             && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                                                             && items.FireKey >= 4)) ; //or Deep Fire
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Ice Cavern", x: "93.5%", y: "18%", type: "dungeon", mixedtype: "default", keytype: "none", found: true, topfloor: 0, floorwdoor: 0,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "0", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Above Silver Rupee Skulltula': { x: "49%", y: "40%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         '1st Chest': { x: "71%", y: "7%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Chest': { x: "79%", y: "62%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Freestanding': { x: "76.5%", y: "52%", leadsto: "unknown", floor: "0", type: "freestanding", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Alcove Skulltula': { x: "79%", y: "52%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         }, 'Ice Block Puzzle Skulltula': { x: "31%", y: "32%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         'White Wolfos': { x: "29%", y: "62%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Song from Sheik': { x: "31%", y: "64%", leadsto: "unknown", floor: "0", type: "song", access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Alcove Switch Chest': { x: "79%", y: "62%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Red Ice Skulltula': { x: "66%", y: "16%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots) && items.SongofTime;
            }
         }, 'Pilar Chest': { x: "69%", y: "7%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Frozen Freestanding': { x: "79%", y: "15%", leadsto: "unknown", floor: "0", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Scarecrow Skulltula': { x: "26%", y: "10%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Crystal Switch Skulltula': { x: "21.5%", y: "35%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'Stalfos Chest': { x: "28%", y: "60%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         }, 'MQ Sheik Song': { x: "30%", y: "62%", leadsto: "unknown", floor: "0", type: "song", access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Water Temple", x: "36.1%", y: "91%", type: "dungeon", mixedtype: "default", keytype: "WaterKey", found: true, topfloor: 3, floorwdoor: 3,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "3", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Water Jet Chest': { x: "86%", y: "59%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby);
            }
         }, 'Spike Ball Chest': { x: "91%", y: "77.5%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2);
            }
         }, 'Torches to Shellblades': { x: "89.5%", y: "77.5%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (items.Bow || (items.Dins && items.Magic)) && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Cracked Wall': { x: "88%", y: "77.5%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic))) || ((items.Scale >= 2 && items.Hookshot >= 2) && items.Ocarina && items.ZeldasLullaby);
            }
         }, 'Central Bow Target': { x: "77%", y: "90%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Bow && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2);
            }
         }, 'Cracked Floor Skulltula': { x: "34%", y: "86.5%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby) && items.WaterKey && items.Bombs;
            }
         }, 'Boulder Hall Skulltula': { x: "49%", y: "36%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.WaterKey && items.IronBoots && items.Hookshot && ((items.Bombs && items.Glove) || items.HoverBoots || items.Hookshot >= 2);
            }
         }, 'Boulder Hall Chest': { x: "47%", y: "25%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (((items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove) || items.HoverBoots) && (items.Hookshot >= 2 || items.HoverBoots);
            }
         }, 'Top of Central Pillar Skulltula': { x: "65%", y: "70.5%", leadsto: "unknown", floor: "3", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.IronBoots && (items.WaterKey && items.Ocarina && items.ZeldasLullaby) || (items.Bow && items.Ocarina && items.ZeldasLullaby) && items.Hookshot >= 2;
            }
         }, 'Central Pillar Basement': { x: "75%", y: "83.5%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.WaterKey || items.Bow) && items.IronBoots && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Dragon Mouth Switch Chest': { x: "35%", y: "42%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && (((items.SongofTime && items.Bow && items.WaterKey >= 2)) || (items.ZeldasLullaby && items.Glove));
            }
         }, 'Platform Room Skulltula': { x: "44%", y: "67.5%", leadsto: "unknown", floor: "3", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.WaterKey && items.Hookshot >= 2;
            }
         }, 'Dark Link': { x: "23%", y: "9%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2));
            }
         }, 'River Skulltula': { x: "30%", y: "21%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.SongofTime && items.IronBoots && items.Hookshot;
            }
         }, 'River Eye Switch Chest': { x: "39%", y: "30.5%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && items.SongofTime && items.Bow;
            }
         }, 'Morpha': { x: "63.5%", y: "37%", leadsto: "unknown", floor: "3", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot >= 2) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.BossWater;
            }
         }, 'Stalfos Chest': { x: "91.5%", y: "77.5%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         }, 'Open Wall Chest': { x: "89%", y: "77.5%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || 
                       (items.Scale >= 2 && items. Hookshot >= 2 
                        && items.Ocarina && items.ZeldasLullaby) //Underwater or Gold Scale & ZL
                       );
            }
         }, 'Scarecrow Skulltula': { x: "34%", y: "86%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && items.IronBoots && items.Hookshot >= 1 && items.Ocarina && items.Scarecrow >=2 && items.Magic && items.Bow && items.Fire;
            }
         }, 'Blue Switch Skulltula': { x: "51.5%", y: "75%", leadsto: "unknown", floor: "3", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots || items.Scale >= 2) && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Lizalfos Hallway Skulltula': { x: "79%", y: "83%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && items.Dins //Torches to enter room
                       ;
            }
         }, 'Lizalfos Chest': { x: "88%", y: "77.5%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2))
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches
                       ;
            }
         }, 'MQ Central Pillar Basement': { x: "75%", y: "83.5%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots && items.Hookshot >= 1 //Temple Access
                       && items.Magic && ( (items.Bow && items.Fire) || (items.Dins && items.Ocarina && items.SongofTime) ) //Torches at the top of Pillar
                       );
            }
         }, 'Dins Ontop Water Jet': { x: "49%", y: "56%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && items.Dins && items.WaterKey >= 1 //Jet room access
                       ;
            }
         }, 'Basement Crate Freestanding': { x: "46%", y: "25%", leadsto: "unknown", floor: "1", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && (items.Hookshot >= 2 || items.HoverBoots) //Get over the spikes
                       ;
            }
         }, 'MQ Morpha': { x: "63.5%", y: "37%", leadsto: "unknown", floor: "3", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.BossWater && items.Hookshot >= 2 //Boos door access
                       ;
            }
         }, 'MQ River Skulltula': { x: "24%", y: "30%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.WaterKey >= 1 //Fight Stalfos and Dark Link
                       ;
            }
         }, 'Dodongo Skulltula': { x: "63.5%", y: "25%", leadsto: "unknown", floor: "1", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Gerudo Training Ground", x: "20.7%", y: "16.4%", type: "dungeon", mixedtype: "default", keytype: "GTGKey", found: true, topfloor: 1, floorwdoor: 0,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "0", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Lobby Right Chest': { x: "49%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         }, 'Lobby Left Chest': { x: "39%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         }, 'Stalfos Room': { x: "10%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'Wolfos Room': { x: "17%", y: "28%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         }, 'Like Like Open Chest': { x: "11%", y: "3%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         }, 'Like Like Room 1st Chest': { x: "14%", y: "12%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         }, 'Like Like Room 2nd Chest': { x: "11%", y: "9%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         }, 'Like Like Invisible Chest': { x: "14%", y: "5%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         }, 'Cyclops Statue Eyes': { x: "42%", y: "23%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow && (items.SongofTime || items.HoverBoots || items.Hookshot >= 2 || (items.Hookshot));
            }
         }, 'Cyclops Room Top Room': { x: "43.5%", y: "50%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow;
            }
         }, 'Fire Enemies Clear': { x: "73%", y: "24%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         }, 'Fire Trap Chest': { x: "74.5%", y: "29%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         }, 'Maze Right Freestanding': { x: "68%", y: "56%", leadsto: "unknown", floor: "0", type: "freestanding", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         }, 'Maze Right Central Chest': { x: "48%", y: "56%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         }, 'Maze Right Side Chest': { x: "51.5%", y: "52%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         }, 'Underwater Silver Rupees': { x: "89%", y: "54%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Ocarina && items.SongofTime && items.IronBoots;
            }
         }, 'Beamos Room': { x: "75%", y: "87%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Left 1 Key Hidden Ceiling': { x: "44%", y: "62%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'Left 2 Key Chest': { x: "31%", y: "57%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 2 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'Left 4 Key Chest': { x: "35.5%", y: "46%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 4 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'Left 5 Key Chest': { x: "39%", y: "46%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 5 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'Maze Center Chest': { x: "43%", y: "54%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 7 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         }, 'MQ Lobby Left': { x: "39%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Lobby Right': { x: "49%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'White Iron Knuckle': { x: "10%", y: "81%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Skulltula and Stalfos': { x: "17%", y: "28%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Silver Block Chest': { x: "11%", y: "3%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Cyclops Chest': { x: "42%", y: "17%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Black Iron Knuckle': { x: "73%", y: "24%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Fire Trap Chest': { x: "74%", y: "29%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Underwater Silver Rupees': { x: "89%", y: "54%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Maze Right 1': { x: "48%", y: "56%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'MQ Maze Right 2': { x: "51.5%", y: "52%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Dinosaur Room': { x: "75%", y: "87%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Maze Left to 2F': { x: "44%", y: "62%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Maze Left Unlocked 1': { x: "31%", y: "57%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Maze Left Unlocked 2': { x: "35.5%", y: "46%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         }, 'Maze Left Locked Chest': { x: "39%", y: "46%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership && items.GTGKey >= 1; }
         }, '2F Rudted Switch Chest': { x: "43.5%", y: "49.5%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership && items.Hammer && items.GTGKey >= 3; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Spirit Temple", x: "02.5%", y: "17%", type: "dungeon", mixedtype: "default", keytype: "SpiritKey", found: true, topfloor: 3, floorwdoor: 0,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "0", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Child Switch Room': { x: "11%", y: "22%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Child 1st Floor Torches': { x: "38%", y: "23%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         }, 'Child Torch Skulltula': { x: "38%", y: "27%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && (items.Slingshot || items.Boomerang);
            },
         }, 'Child Climb Skulltula': { x: "24%", y: "26%", leadsto: "unknown", floor: "1", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2 && (items.Hookshot || items.Bow)));
            },
         },
         'Child Lizalfos East Chest': { x: "27%", y: "26%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         'Child Lizalfos North Chest': { x: "29%", y: "29%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         'Large Torch Chest': { x: "47%", y: "26%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey &&
                  (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))
                     )
                     || (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit) &&
                        items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Magic && (items.Dins || (items.Fire && items.Bow)))));
            }
         },
         'Sun Block Room Chest': { x: "19%", y: "59%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         }, 'Before Child IronKnuckle Skulltula': { x: "12%", y: "63%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (items.Ocarina && items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2);
            },
         },
         'Hand to Desert 1' : { x: "99%", y: "50%", leadsto: "Desert Colossus", type: "dungeon", access: "dungeon",
         isAvailable: function () {
            return true ; }
         }, 'Colossus Right Hand Chest': { x: "26%", y: "83%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (items.RequiemofSpirit && items.SpiritKey >= 2 && items.Ocarina && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.SpiritKey >= 2);
            }
         },
         'Wolfos Lullaby Chest': { x: "54.5%", y: "22%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Song of Time Skulltula': { x: "74%", y: "23%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2;
            },
         },
         'Silver Rupee Halfpipe': { x: "79%", y: "10%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Floormaster Left Chest': { x: "69%", y: "35%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Floormaster Right Chest': { x: "66.5%", y: "35%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Top Right after Lullaby': { x: "59%", y: "20%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot);
            }
         },
         'Statue\'s Hand after Lullaby': { x: "40%", y: "26%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Top Left Scarecrow Skulltula': { x: "36%", y: "19%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && ((items.Ocarina && items.Hookshot) || items.Hookshot >= 2);
            },
         },
         'Four Armos Side Room': { x: "84.5%", y: "36%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.MirrorShield && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Left Invisible Chest': { x: "87%", y: "71%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         'Right Invisible Chest': { x: "84%", y: "71%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         'Hand to Desert 2': { x: "99%", y: "50%", leadsto: "Desert Colossus", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return true ; }
         }, 'Colossus Left Hand Chest': { x: "71%", y: "83%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         'Fire Trap Chest': { x: "60%", y: "16%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.ZeldasLullaby && items.Ocarina && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         'Adult Lizalfos Chest': { x: "32%", y: "30%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && items.MirrorShield && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         'Twinrova': { x: "47%", y: "12%", leadsto: "unknown", floor: "2", type: "bss", access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.MirrorShield && items.Hookshot && items.BossSpirit);
            }
         }, 'Lobby Bottom Left': { x: "44%", y: "53%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit) //Child Temple access
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2); // Adult Temple access
            }
         }, 'Lobby Top Left': { x: "44%", y: "49%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit 
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Slingshot) //Boulder and eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Bow); //Boulder and eye switch
            }
         }, 'Lobby Top Right': { x: "47%", y: "49%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit 
               && items.Slingshot) //Eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bow); //Eye Switch
            }
         }, 'Slug Room Chest': { x: "25%", y: "48%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && items.Glove >= 2 && items.Hammer;
            }
         }, 'Anubis Free Chest': { x: "13%", y: "35%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit;
            }
         }, 'Anubis Fight Chest': { x: "13%", y: "26%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.Slingshot && items.Magic && items.Dins; //Kill Anubis and long way around
            }
         }, 'Dodongo Chest': { x: "29%", y: "29%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 1) //Child climb
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2; //Adult statue room access
            }
         }, 'Statue Room Eye Switch': { x: "47%", y: "26%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2) //Child Statue Room
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow;
            }
         }, 'Shortcut Hallway Eye Switch': { x: "47%", y: "41.5%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 
               && items.Magic && items.Dins && (items.Slingshot || items.Bow) ) //Child opens shortcut hallway
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && ((items.Slingshot && items.Ocarina && items.RequiemofSpirit) || items.Bow) && items.Magic && (items.Dins || (items.Bow && items.Fire)); //Adult opens
            }
         }, 'MQ Sunblock Chest': { x: "23%", y: "44%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         }, 'Sunblock Room Skulltula': { x: "21.5%", y: "59%", leadsto: "unknown", floor: "2", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime && items.Boomerang) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         }, 'MQ Colossus Right Hand': { x: "26%", y: "83%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 3 && items.SongofTime)
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 2; //As Adult
            }
         }, 'Dodongo Room Adult Chest': { x: "25%", y: "36%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         }, 'Statue Room Lower Chest': { x: "56%", y: "18%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         }, 'Statue Room Upper Chest': { x: "59%", y: "20%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         }, 'Leever Room Chest': { x: "54.5%", y: "22%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         }, 'Leever Room Skulltula': { x: "56.5%", y: "32%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         }, 'Child Songs Halfpipe': { x: "79%", y: "10%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         }, 'Songs Halfpipe Skulltula': { x: "82%", y: "12%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         }, 'Lobby Bottom Right': { x: "48%", y: "53%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire && items.Hammer; 
            }
         }, 'Beamos Room Chest': { x: "77%", y: "48.5%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 && items.Bombs || items.Bombchu; 
            }
         }, 'Dinalfos Chest': { x: "87%", y: "57%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime; //SOT puzzle in Beamos Room
            }
         }, 'Gibdo Room Chest': { x: "84.5%", y: "36%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime && items.MirrorShield;
            }
         }, 'MQ Colossus Left Hand': { x: "71%", y: "83%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         }, 'Highest Chest': { x: "47%", y: "39.5%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 2;
            }
         }, 'Knuckle Skulltula 1': { x: "56%", y: "19%", leadsto: "unknown", floor: "3", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 3;
            }
         }, 'Knuckle Skulltula 2': { x: "64%", y: "19%", leadsto: "unknown", floor: "3", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 3;
            }
         }, 'MQ TwinRova': { x: "47%", y: "12.5%", leadsto: "unknown", floor: "2", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && items.MirrorShield && items.SpiritKey >= 2 && items.BossSpirit;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Shadow Temple", x: "79.7%", y: "19.5%", type: "dungeon", mixedtype: "default", keytype: "ShadowKey", found: true, topfloor: 3, floorwdoor: 3,
      chestlist: {
         'Dungeon Door': { x: "99%", y: "50%", leadsto: "unknown", floor: "3", type: "dungeon", access: "dungeon",
            isAvailable: function () {
               return false ; }
         }, 'Keese and Redead': { x: "40.5%", y: "27%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         }, 'Deadhand Chest': { x: "26%", y: "35%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         }, '1st Gibdos Room': { x: "75%", y: "49%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         }, '1st Silver Rupees': { x: "77%", y: "21%", leadsto: "unknown", floor: "2", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         }, 'Silver Rupee Skulltula': { x: "77%", y: "17%", leadsto: "unknown", floor: "2", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         }, 'Like Like Visible': { x: "95%", y: "67%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Like Like Invisible': { x: "95%", y: "70.5%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Crusher Skulltula': { x: "38%", y: "90%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         }, 'Crusher Lower Chest': { x: "38%", y: "86%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Crusher Upper Chest': { x: "44%", y: "85%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         }, 'Crusher Switch Chest': { x: "34%", y: "90%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         }, 'Readeads and Rupees': { x: "61.5%", y: "56%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Single Skull Pot Skulltula': { x: "47%", y: "56%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 2 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot;
            },
         }, 'Skull Pot Bombing': { x: "49%", y: "57%", leadsto: "unknown", floor: "0", type: "freestanding", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         }, 'Readeads and Hint': { x: "95%", y: "39%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         }, '2nd Gibdos Room': { x: "86.5%", y: "27%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         }, 'Gibdos Hidden Chest': { x: "88%", y: "30%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         }, 'Before Boat Skulltula': { x: "79%", y: "19%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 3 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove;
            },
         }, 'Floormaster Room': { x: "19%", y: "39%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Triple Skull Pot Skulltula': { x: "5%", y: "24%", leadsto: "unknown", floor: "0", type: "skulltula", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 4 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby;
            },
         }, 'Spike Wall 1': { x: "16%", y: "11%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Spike Wall  2': { x: "22%", y: "11%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         }, 'Bongo Bongo': { x: "31%", y: "55%", leadsto: "unknown", floor: "0", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 5 && items.BossShadow && (items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.Bow || items.Scarecrow >= 2));
            }
         }, '1st Redead Room': { x: "40.5%", y: "27%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) //Temple access
               && items.Bombs && items.ShadowKey >= 1; //Bombwall + keydoor
            }
         }, '1st Deadhand Chest': { x: "26%", y: "35%", leadsto: "unknown", floor: "3", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots)
               && items.Bombs && items.ShadowKey >= 1
               && items.SongofTime && items.Bow; //Block of time + eye switch
            }
         }, 'MQ 1st Gibdos Room': { x: "75%", y: "49%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         }, 'Skulltulas and Ruppees': { x: "77%", y: "21%", leadsto: "unknown", floor: "2", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         }, 'Fall to Dock Invisible': { x: "81%", y: "21%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         }, 'MQ Like Like Visible': { x: "95%", y: "67%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         }, 'MQ Like Like Invisible': { x: "95%", y: "70.5%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         }, 'Beamos Silver Rupees': { x: "59%", y: "82%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot >= 2; //Longshot requireq for a rupee
            }
         }, 'MQ Crusher Skulltula': { x: "38%", y: "90%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot;
            }
         }, 'MQ Crusher Lower Chest': { x: "38%", y: "86%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         }, 'MQ Crusher Upper Chest': { x: "34%", y: "90%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         }, 'MQ Crusher Switch Chest': { x: "44%", y: "85%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         }, 'MQ Redeads and Rupees': { x: "61.5%", y: "56%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2;
            }
         }, 'Stalfos Chest': { x: "46%", y: "56%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2 && items.Hookshot >= 2;
            }
         }, 'MQ Redeads invisible Chest': { x: "95%", y: "50.5%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         }, '2nd Redead Skulltula': { x: "95%", y: "36.5%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         }, 'MQ 2nd Gibdos Chest': { x: "86.5%", y: "27%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         }, 'MQ Gibdos Hidden Chest': { x: "88%", y: "30%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         }, '2nd Gibdos Skulltula': { x: "85%", y: "24%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         }, 'Dark River Skulltula': { x: "34%", y: "29%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         }, 'MQ Skull Pot Freestanding': { x: "5%", y: "24%", leadsto: "unknown", floor: "0", type: "freestanding", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby
               && items.SongofTime;
            }
         }, 'MQ Spike Wall 1 ': { x: "16%", y: "11%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 5 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         }, 'MQ Spike Wall 2 ': { x: "22%", y: "11%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 5 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         }, '2nd Deadhand': { x: "19%", y: "39%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         }, 'Skulltula Near Boss Door': { x: "30%", y: "49%", leadsto: "unknown", floor: "0", type: "skulltula", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         }, 'MQ Bongo Bongo': { x: "31%", y: "55%", leadsto: "unknown", floor: "0", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.BossShadow;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "Ganon's Tower", x: "44%", y: "14%", type: "dungeon", mixedtype: "default", keytype: "CastleKey", found: true, topfloor: 5, floorwdoor: 1,
      chestlist: {
         'Forest 1': { x: "64%", y: "69%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         'Forest Trial': { x: "78%", y: "83%", leadsto: "unknown", floor: "1", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins));
            }
         },
         'Ice 1': { x: "74%", y: "51%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         'Ice 2': { x: "74%", y: "55%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         'Ice Trial': { x: "95%", y: "52.5%", leadsto: "unknown", floor: "0", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light;
            }
         },
         'Shadow 1': { x: "59%", y: "33%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || 
                  items.Hookshot >= 1 || 
                  items.HoverBoots || 
                  (items.Ocarina >= 1 && items.SongofTime));
            }
         },
         'Shadow 2': { x: "69%", y: "25%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || (
                     (items.Hookshot >= 1 || items.HoverBoots) && 
                     items.Magic && items.Dins) || items.Hookshot >= 2);
            }
         },
         'Shadow Trial': { x: "80%", y: "10%", leadsto: "unknown", floor: "1", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2));
            }
         },
         'Fire Trial': { x: "21.5%", y: "18.5%", leadsto: "unknown", floor: "1", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2;
            }
         },
         'Spirit 1': { x: "34%", y: "67%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         'Spirit 2': { x: "31%", y: "72%", leadsto: "unknown", floor: "1", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         'Spirit Trial': { x: "32%", y: "83%", leadsto: "unknown", floor: "1", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot >= 1;
            }
         },
         'Light 1': { x: "33%", y: "55%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light 2': { x: "30%", y: "57%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light 3': { x: "27%", y: "55%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light 4': { x: "27%", y: "50%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light 5': { x: "30%", y: "49%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light 6': { x: "33%", y: "50%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light Invisible': { x: "30%", y: "53%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         'Light Lullaby': { x: "18%", y: "53%", leadsto: "unknown", floor: "0", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby && items.CastleKey;
            }
         },
         'Light Trial': { x: "4%", y: "53%", leadsto: "unknown", floor: "0", type: "trial", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light && items.CastleKey >= 2;
            }
         },
         'Stalfos Fire Trap': { x: "50%", y: "53%", leadsto: "unknown", floor: "3", type: "chest", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials);
            }
         },
         'GanonDorf': { x: "50%", y: "42%", leadsto: "unknown", floor: "5", type: "boss", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         }, 'Invisible Wall Scrub 1': { x: "48%", y: "70%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            }
         }, 'Invisible Wall Scrub 2': { x: "53%", y: "70%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            }
         }, 'Invisible Wall Scrub 3': { x: "49.5%", y: "74%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            }
         }, 'Invisible Wall Scrub 4': { x: "52.5%", y: "74%", leadsto: "unknown", floor: "0", type: "scrub", access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            }
         }, 'MQ Forest freestanding ': { x: "66%", y: "71%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hookshot;
            },
         }, 'MQ Forest 1 ': { x: "72%", y: "75%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Bow;
            },
         }, 'MQ Forest 2 ': { x: "74%", y: "81%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && (items.Dins || (items.Bow && items.Fire) ); 
            },
         }, 'MQ Forest Trial ': { x: "78%", y: "83%", leadsto: "unknown", floor: "1", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Ocarina && items.SongofTime && items.Bow && items.Magic && items.Light;
            },
         }, 'MQ Ice chest ': { x: "73%", y: "50.5%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         }, 'MQ ice trial ': { x: "95%", y: "52.5%", leadsto: "unknown", floor: "0", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Bottle && items.CastleKey && items.Bow && items.Magic && items.Light;
            },
         }, 'MQ Shadow 1 ': { x: "59%", y: "33%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && ( (items.Hovers && (items.Bow || items.Bombs || items.Glove || (items.Bombchu && BombchuLogic) ) ) || items.Hookshot && items.Bow );
            },
         }, 'MQ Shadow 2 ': { x: "69%", y: "25%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Bow && items.Magic && items.Lens && item.HoverBoots;
            },
         }, 'MQ Shadow trial ': { x: "80%", y: "10%", leadsto: "unknown", floor: "1", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Light && items.Bow && items.Magic && items.Lens && items.HoverBoots;
            },
         }, 'MQ Fire trial ': { x: "21.5%", y: "18.5%", leadsto: "unknown", floor: "1", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && (items.HoverBoots || items.Hookshot >= 2) && items.Bow && items.Magic && items.Light;
            },
         }, 'MQ Light ZL chest ': { x: "30%", y: "53%", leadsto: "unknown", floor: "0", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby;
            },
         }, 'MQ Light trial ': { x: "4%", y: "53%", leadsto: "unknown", floor: "0", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.CastleKey >= 2 && items.Hookshot && items.Bow && items.Magic && items.Light;
            },
         }, 'MQ Spirit 1 ': { x: "34%", y: "67%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer;
            },
         }, 'MQ Spirit 2 ': { x: "31%", y: "72%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer && items.Bombchu;
            },
         }, 'MQ Spirit Sun 1 ': { x: "34%", y: "77%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer && items.Bombchu && items.MirrorShield && items.Bow && items.Magic && items.Fire;
            },
         }, 'MQ Spirit Sun 2 ': { x: "35.5%", y: "74%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer && items.Bombchu && items.MirrorShield && items.Bow && items.Magic && items.Fire;
            },
         }, 'MQ Spirit Sun 3 ': { x: "38%", y: "76%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer && items.Bombchu && items.MirrorShield && items.Bow && items.Magic && items.Fire;
            },
         }, 'MQ Spirit Sun 4 ': { x: "36%", y: "79%", leadsto: "unknown", floor: "1", type: "chest", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Hammer && items.Bombchu && items.MirrorShield && items.Bow && items.Magic && items.Fire;
            },
         }, 'MQ Spirit trial ': { x: "32%", y: "83%", leadsto: "unknown", floor: "1", type: "trial", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Light && items.Hammer && items.Bombchu && items.MirrorShield && items.Bow && items.Magic && items.Fire;
            },
         }, 'MQ Scrub 1 ': { x: "53%", y: "70%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         }, 'MQ Scrub 2 ': { x: "50.5%", y: "70%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         }, 'MQ Scrub 3 ': { x: "48%", y: "70%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         }, 'MQ Scrub 4 ': { x: "52%", y: "74%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         }, 'MQ Scrub 5 ': { x: "49.5%", y: "74%", leadsto: "unknown", floor: "0", type: "scrub", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         },
         'MQ GanonDorf': { x: "50%", y: "42%", leadsto: "unknown", floor: "5", type: "boss", access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); },
   },
   { name: "The Market", x: "50.5%", y: "20.2%", type: "overworld", found: true,
      chestlist: {
         'Guard/Ghostbuster House': { x: "65%", y: "94%", OWER: false, leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[13].found == true ; }
         }, 'Pottery Crate Skulltula': { x: "59%", y: "96.5%", OWER: false, leadsto: "unknown", type: "skulltula", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, '10 Big Poes': { x: "61%", y: "97%", OWER: false, leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () { //Adult only indoor
               return dungeons[13].found == true
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.BigPoe >= 1;
            }
         }, 'Market to Street': { x: "60%", y: "96%", leadsto: "unknown", type: "entrance", access: "entrance",
          isAvailable: function () {
               return dungeons[13].found == true; }
         }, 'Treasure game': { x: "40%", y: "87%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Treasure Chest Mini Game': { x: "40%", y: "87%", leadsto: "unknown", type: "chest", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true && items.Magic && items.Lens
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Bombchu Shop': { x: "22%", y: "91%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Bombchu Sale': { x: "22%", y: "91%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Return Richard': { x: "12%", y: "85%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Back Alley House': { x: "21%", y: "13%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Slingshot Shooting': {
            type: "simple", 
            x: "46%", y: "18%", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Slingshot Mini Game': { x: "46%", y: "18%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Bowling': { x: "38%", y: "42%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Bombchu Bowling 1': { x: "34%", y: "40%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic));}
         },
         'Bombchu Bowling 2': { x: "37%", y: "40%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         }, 'Market to Castle': {
             x: "59.5%", y: "4%", leadsto: "unknown", type: "entrance", access: "entrance",
            isAvailable: function () {
               return dungeons[13].found == true; }
         }, 'Happy Mask Shop': { x: "79%", y: "18%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Market to Temple': { x: "91%", y: "28%", leadsto: "unknown", type: "entrance", access: "entrance",
            isAvailable: function () {
               return dungeons[13].found == true; }
         }, 'Potion Shop': { x: "84%", y: "47%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         }, 'Potion Sale': { x: "84%", y: "47%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Bazar': { x: "84%", y: "66%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Bazaar Sale': { x: "84%", y: "66%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Temple of Time", x: "55.5%", y: "18.2%", type: "overworld", found: true,
      chestlist: {
         'Temple to Market': { x: "78%", y: "95%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[14].found == true; }
          }, 'Temple Gossip 1': { x: "66%", y: "75%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         }, 'Temple Gossip 2': { x: "70%", y: "75%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         }, 'Temple Gossip 3': { x: "74%", y: "75%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         }, 'Temple Gossip 4': { x: "79%", y: "75%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         }, 'Temple of Time': { x: "46%", y: "58%", leadsto: "unknown", type: "alldoor", access: "door",
            isAvailable: function () {
               return dungeons[14].found == true; }
         }, 'Prelude Warp': { x: "48%", y: "48%", leadsto: "unknown", type: "warp", access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.PreludeofLight; }
         },
         'Song for Forest Medallion': { x: "48%", y: "22%", leadsto: "unknown", type: "song", access: "alldoor",
            isAvailable: function () {
               return dungeons[14].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.ForestMedallion;
            }
         },
         'Zelda\'s Secret Weapon': { x: "48%", y: "48%", leadsto: "unknown", type: "NPC", access: "alldoor",
            isAvailable: function () {
               return dungeons[14].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && ( (items.ShadowMedallion && items.SpiritMedallion && castlelogic !== "LACSStones" 
                          && castlelogic !== "LACSMeds" && castlelogic !== "LACSAD")
                        || (items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire 
                            && castlelogic == "LACSStones") 
                        || (items.ForestMedallion && items.FireMedallion && items.WaterMedallion && items.LightMedallion 
                            && items.ShadowMedallion && items.SpiritMedallion && castlelogic == "LACSMeds") 
                        || (items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.ForestMedallion && items.FireMedallion && items.WaterMedallion && items.LightMedallion 
                            && items.ShadowMedallion && items.SpiritMedallion && castlelogic == "LACSAD") 
                       );
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Hyrule Castle", x: "49%", y: "14%", type: "overworld", found: true,
      chestlist: {
         'Castle to Market': { x: "27%", y: "93%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[15].found == true; }
         }, 'Tree to Castle Skulltula': {
           x: "25%", y: "75%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Malon\s Weird Egg': {
           x: "32%", y: "80%", leadsto: "unknown", type: "egg", access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Above Malon': {
            type: "gossip",
           x: "39%", y: "75%", access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Din\'s Fairy Fountain': {
           x: "94%", y: "64%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && (items.Bombs || (items.Bombchu && BombchuLogic));
               }
         }, 'Dins Great Fairy': {
           x: "93%", y: "64%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[15].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina >= 1 && items.ZeldasLullaby;
            }
         }, 'Castle Moat Stone': {
           x: "9%", y: "35%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         }, 'Moat Storms Grotto': {
           x: "53%", y: "30%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms;
               }
         }, 'Storms Grotto Skull': {
           x: "54%", y: "30%", leadsto: "unknown", type: "skulltula", access: "grotto",
            isAvailable: function () {
               return dungeons[15].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms && (items.Bombs || items.Boomerang);
            }
         }, 'Storms Grotto Gossip': {
           x: "52%", y: "30%", leadsto: "unknown", type: "gossip", access: "grotto",
            isAvailable: function () {
               return dungeons[15].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms && items.Bombs;
            }
         }, 'Song from Impa': {
           x: "43%", y: "12%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Mask >= 1;
            }
         },
        'Outside Ganons Skulltula' : {
           x: "64%", y: "68%", leadsto: "unknown", type: "skulltula", access: "outdoor",
               isAvailable: function () {
                  return dungeons[15].found == true &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
               }
         }, 'Gold Gauntlets Doorway': {
           x: "94%", y: "59%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[15].found == true &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                     ) && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby ;
               }
         }, 'Gold Gauntlets Fairy' : { x: "93%", y: "59.5%", leadsto: "unknown", type: "NPC", access: "simple",
               isAvailable: function () {
                  return dungeons[15].found == true &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                     ) && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby ;
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Kakariko Village", x: "65.4%", y: "22%", type: "overworld", found: true,
      chestlist: {
         'Village to Field': { x: "2%", y: "75%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[16] == true; }
         },
         'Song from Sheik': { x: "59%", y: "58%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.ForestMedallion && items.FireMedallion && items.WaterMedallion ;
            }
         }, 'Tree Skulltula': { x: "40%", y: "58%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Redead Grotto': { x: "48%", y: "58%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[16].found == true &&
                  ( (items.Bombs || (items.Bombchu && BombchuLogic)) 
                   || (items.Hammer && 
                       (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'Redead Chest': { x: "48%", y: "58%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[16].found == true &&
                  ( (items.Bombs || (items.Bombchu && BombchuLogic)) 
                   || (items.Hammer && 
                       (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
                  }
         }, 'Tower House': { x: "54%", y: "48%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true; }
         }, 'Behind Shop Skulltula': { x: "48%", y: "25%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Tower Skulltula': { x: "55%", y: "41%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Kakariko Bazar': { x: "51%", y: "33%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true; }
         }, 'Bazar Sale': { x: "46%", y: "33%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true; }
         }, 'Village to Trail': { x: "52.6%", y: "2%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[16].found == true; }
         }, 'Potion Shop front': { x: "59%", y: "34%", leadsto: "unknown", type: "alldoor", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Man on Roof': { x: "62%", y: "50%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true ;
            }
         }, 'Potion Sale': { x: "65%", y: "33%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Potion Shop back': { x: "63%", y: "33%", leadsto: "unknown", type: "alldoor", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Granny\'s Shop': { x: "68%", y: "45%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         }, 'Kakariko Open Grotto': { x: "69%", y: "39.3%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Village Open Grotto': { x: "69%", y: "39.3%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[16].found == true ;
            }
         }, 'Windmill': { x: "78%", y: "59%", leadsto: "unknown", type: "alldoor", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Windmill Song': { x: "82%", y: "64%", leadsto: "unknown", type: "song", access: "alldoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina;
            }
         },
         'Windmill Freestanding': { x: "82%", y: "55%", leadsto: "unknown", type: "freestanding", access: "alldoor",
            isAvailable: function () {
               return dungeons[16].found == true &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                   || (items.Boomerang && 
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Village to Graveyard': { x: "95%", y: "80.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[16].found == true; }
         }, 'Archery Foundation Skulltula': { x: "60%", y: "76%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Archery': { x: "60%", y: "70%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
               }
         },
         'Bow Mini Game': { x: "60%", y: "70%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Bow;
               }
         },
         'Anju\'s Chickens': { x: "63%", y: "82%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  );
            }
         },
         'Anju\'s Adult item': { x: "65%", y: "85%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[16].found == true) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Impa\'s House back': { x: "58%", y: "91%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Impa\'s House Freestanding': { x: "57%", y: "88%", leadsto: "unknown", type: "freestanding", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true}
         },
         'Impa\'s House Cow Milk': { x: "57%", y: "93%", leadsto: "unknown", type: "cow", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  items.Ocarina && items.EponasSong ;
            }
         }, 'Impa’s Roof Skulltula': { x: "52%", y: "92%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Hookshot;
            }
         }, 'Impa\'s House front': { x: "49%", y: "91%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         }, 'Skull House Skulltula': { x: "43%", y: "76%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Skulltula House': { x: "48%", y: "73%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Skulltula House 10': { x: "48%", y: "69%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 10 ;
            }
         },
         'Skulltula House 20': { x: "48%", y: "74%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 20 ;
            }
         },
         'Skulltula House 30': { x: "42%", y: "71.5%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 30 ;
            }
         },
         'Skulltula House 40': { x: "45%", y: "73%", leadsto: "unknown", type: "NPC", access: "simple", type: "indoor",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 40 ;
            }
         },
         'Skulltula House 50': { x: "45%", y: "69%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 50 ;
            }
         }, 'Bottom of The Well': { x: "69%", y: "61.6%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  && items.Ocarina && items.SongofStorms;
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Goron City", x: "70%", y: "06.3%", type: "overworld", found: true,
      chestlist: {
         'City to Trail': { x: "55.5%", y: "92%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[17].found == true; }
         }, 'Ruby Pedestal Skulltula': { x: "55.5%", y: "42%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Little Rolling Goron': { x: "40%", y: "65%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Bombs || (items.Bombchu && BombchuLogic) || items.Bow) ;
            }
         },
         'Medigoron': { x: "28%", y: "85%", leadsto: "unknown", type: "knife", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && items.Wallet >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Hammer || items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         }, 'Medigoron Gossip': { x: "28%", y: "90%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Glove || items.Hammer || items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         },
         'Left Boulder Maze Chest': { x: "4%", y: "11%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove >= 2 || items.Hammer || 
                   (items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) 
                  ) ;
            }
         },
         'Center Boulder Maze Chest': { x: "7%", y: "14%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         }, 'Maze Crate Skulltula': { x: "14.5%", y: "11.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         }, 'Maze Gossip': { x: "9%", y: "11%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         },
         'Right Boulder Maze Chest': { x: "11%", y: "13%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         }, 'Lava Cross Grotto': { x: "89%", y: "12%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         }, 'Lava Scrub 1': { x: "86.4%", y: "12%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         }, 'Lava Scrub 2': { x: "89%", y: "12%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         }, 'Lava Scrub 3': { x: "91.5%", y: "12%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         }, 'City to Woods': { x: "73.5%", y: "93%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[17].found == true && (items.Glove || items.Bow || items.Bombs || 
                                                        (items.Dins && items.Magic) ); }
         }, 'Goron Shop': { x: "47%", y: "47%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[17].found == true &&
                  ( items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove
                   || (items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                   || ( (items.Glove || (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) )
                       && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Goron Sale': { x: "45%", y: "45%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[17].found == true &&
                  ( items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove
                   || (items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                   || ( (items.Glove || (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) )
                       && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'Big Rolling Goron': { x: "42%", y: "28%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || items.Bombchu || items.Glove) ;
            }
         },
         'Spinning Pot Freestanding': { x: "54.5%", y: "52%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Bombs ) && ( (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) );
            }
         },
         'Darunia\'s Dance': { x: "56.5%", y: "8%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.SariasSong && items.ZeldasLullaby;
            }
         }, 'City to Crater': { x: "56.5%", y: "2%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[17].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Lost Woods", x: "75.3%", y: "47%", type: "overworld", found: true,
      chestlist: {
         'Woods to Bridge': { x: "11%", y: "87%", leadsto: "Bridge to Woods", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true; }
         }, 'Deku Sale $40': { x: "14%", y: "93%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Bridge Stone': { x: "11%", y: "93%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true ;
            }
         }, 'Bridge Soil Patch Skulltula': { x: "8%", y: "86%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Bottle ;
            }
         },
         'Skull Kid': { x: "16.5%", y: "65.5%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Ocarina && items.SariasSong ;
            }
         }, 'Woods to Forest': { x: "41.5%", y: "74%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true; }
         },
         'Slingshot Target': { x: "71%", y: "67%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Slingshot ;
            }
         },
         'Ocarina Memory Game': { x: "67%", y: "73%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Ocarina ;
            }
         }, 'Bomb Grotto by City': { x: "63%", y: "42%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'City Grotto Chest': { x: "63%", y: "4.5%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'City Grotto Gossip': { x: "61%", y: "42%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Woods to City': { x: "60%", y: "36%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true; }
         }, 'Woods to River': { x: "92%", y: "43%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true
                && ( (items.IronBoots
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                   ) || items.Scale) ; }
         }, 'Theatre Scrub 1': { x: "58%", y: "21%", leadsto: "unknown", type: "scrub", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            },
         }, 'Theatre Scrub 2': { x: "50%", y: "31%", leadsto: "unknown", type: "scrub", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            },
         }, 'Theatre Soil Patch Skulltula': { x: "56%", y: "23%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Bottle ;
            },
         }, 'Bean Ride Skulltula': { x: "61%", y: "23%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true
               && (items.Hookshot 
                   || (items.Bean && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   ) ) ;
            },
         }, 'Deku Theatre Grotto': { x: "45%", y: "26%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
               }
         },
         'Deku Theater Skull Mask': { x: "45%", y: "28%", leadsto: "unknown", type: "NPC", access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Mask >= 6;
            }
         },
         'Deku Theater Mask of Truth': { x: "45%", y: "28%", leadsto: "unknown", type: "NPC", access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Mask >= 12;
            }
         }, 'Bomb Grotto by Meadow': { x: "57%", y: "3%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'Deku Sale Grotto $40': { x: "57%", y: "3%", leadsto: "unknown", type: "NPC", access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, '2nd Scrub in Grotto': { x: "59%", y: "5%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Woods to Meadow': { x: "59%", y: "0%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Sacred Forest Meadow", x: "80.3%", y: "47%", type: "overworld", found: true,
      chestlist: {
         'Meadow to Woods': { x: "2%", y: "38%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[19].found == true; }
         }, 'Meadow Bomb Grotto': { x: "10%", y: "39%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );}
         },
         'Wolfos Grotto': { x: "10%", y: "39%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[19].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Maze Gossip 1': { x: "18.5%", y: "62%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         }, 'Meadow Maze Skulltula': { x: "40%", y: "76%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            },
         }, 'Meadow Open Grotto': { x: "37%", y: "53%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true;
               }
         }, 'Maze Gossip 2': { x: "29.5%", y: "28%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         },
         'Song from Sheik': { x: "87%", y: "50%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Minuet Warp': { x: "84%", y: "50%", leadsto: "unknown", type: "warp", access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.MinuetofForest; }
         }, 'Meadow Storms Grotto': { x: "80%", y: "75%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true && 
                     items.Ocarina && items.SongofStorms ;
               }
         }, 'Storms Grotto Scrub 1': { x: "79%", y: "76%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[19].found == true && 
                     items.Ocarina && items.SongofStorms ;
            }
         }, 'Storms Grotto Scrub 2': { x: "82%", y: "76%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[19].found == true && 
                     items.Ocarina && items.SongofStorms ;
            }
         },
         'Song from Saria': { x: "80%", y: "50%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && items.Mask >= 2 &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Temple Gossip': { x: "80%", y: "23%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         }, 'Forest Temple': { x: "95%", y: "47%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return dungeons[19].found == true && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Zora's River", x: "78.7%", y: "29.5%", type: "overworld", found: true,
      chestlist: {
         'River to Field': { x: "2%", y: "91%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[20].found == true; }
         }, 'Tree by Entrance Skulltula': { x: "3%", y: "61%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Song of Storms Grotto': { x: "4%", y: "42%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Storms Grotto Scrub 1': { x: "2%", y: "44%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Storms Grotto Scrub 2': { x: "5%", y: "44%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Storms Grotto Scrub 3': { x: "3.5%", y: "40%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Bean Salesman': { x: "16%", y: "40%", leadsto: "unknown", type: "bean", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Frogs in the Rain': { x: "47%", y: "16%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  items.Ocarina && items.SongofStorms &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Frogs Mini Game': { x: "44%", y: "16%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  items.Ocarina && items.SongofStorms && items.SunsSong && items.SariasSong && items.EponasSong && items.ZeldasLullaby && items.SongofTime &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Adult Skulltula by Grotto': { x: "27%", y: "53%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && items.Hookshot &&
                  (Age == "Adut" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Open Grotto': { x: "33%", y: "51%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) ); 
            }
         }, 'River Open Grotto': { x: "35%", y: "48%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Grotto Gossip': { x: "31%", y: "52%", leadsto: "unknown", type: "gossip", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Boulder Grotto': { x: "38%", y: "37%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Above Frogs Gossip': { x: "40%", y: "17%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) ); 
            }
         }, 'Freestanding Lower Ledge': { x: "29.5%", y: "17%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) ); 
            }
         }, 'Adult above Bridge Skulltula': { x: "70%", y: "18%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && items.Hookshot &&
                  (Age == "Adut" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Child Ladder Skulltula': { x: "86%", y: "3%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap )
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Freestanding Upper Ledge': { x: "80%", y: "3%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) ); 
            }
         }, 'River to Woods': { x: "91%", y: "26.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[20].found == true && items.Scale; }
         }, 'Waterfall Gossip': { x: "92%", y: "4%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'River to Domain': { x: "97%", y: "9%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[20].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Zora's Domain", x: "92.9%", y: "34.5%", type: "overworld", found: true,
      chestlist: {
         'Domain to River': { x: "2%", y: "73.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[21].found == true; }
         }, 'Zora Shop': { x: "71%", y: "84.5%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[21].found == true &&
                  ( ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap )
                       && items.Bottle && 
                       (items.Wallet >= 3 || isBridgeOpen() || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         }, 'Zora Sale': { x: "67%", y: "84%", leadsto: "unknown", type: "shop", access: "simple",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  ( ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap )
                       && items.Bottle && 
                       (items.Wallet >= 3 || isBridgeOpen() || OpenFountain 
                        || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership )) ) 
                       )
                   );
            }
         }, 'Storms Grotto': { x: "19%", y: "64%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  items.Ocarina && items.SongofStorms &&
                  ( ( (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Royal Zora Gossip': { x: "75%", y: "35.5%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  ( ( (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Diving Mini Game': { x: "43%", y: "46.5%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Torch Run': { x: "43%", y: "51.5%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Domain to Lake': { x: "48%", y: "77%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return items.Scale && dungeons[21].found == true; }
         }, 'Frozen Waterfall Skulltula': { x: "47%", y: "51.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && items.Hookshot &&
                  (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Thaw King Zora': { x: "76%", y: "28%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) //Can get into domain
                        && ( 
                              ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Cam open fountain as child
                                 && (OpenFountain || items.ZoraLetter) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale )
                              ) 
                              || 
                              (items.Bottle && (items.Wallet >= 3 || isBridgeOpen() || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership )) ) )
                           )
                     ) );
            }
         }, 'Domain to Fountain': { x: "40%", y: "4.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[21].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Zora's Fountain", x: "92.9%", y: "28%", type: "overworld", found: true,
      chestlist: {
         'Fountain to Domain': { x: "14%", y: "58.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[22].found == true; }
         }, 'West Fountain Gossip': { x: "35%", y: "25.5%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                  ( OWERmap
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         }, 'Lord Jabu Jabu\'s Belly': { x: "39%", y: "38%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         }, 'Stand on the Log Skulltula': { x: "27%", y: "69.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && items.Boomerang && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         }, 'Tree by Great Fairy Skulltula': { x: "72%", y: "80.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         }, 'Great Fairy Gossip': { x: "76%", y: "78.5%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                  ( OWERmap
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         }, 'Bombable Doorway': { x: "70%", y: "88.5%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                  ( (OWERmap && (
                             ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) ||
                             ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer ) ) ) )
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
               }
         },
         'Farore\'s Great Fairy Fountain': { x: "70%", y: "88.5%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return dungeons[22].found == true && items.Ocarina && items.ZeldasLullaby &&
                  ( (OWERmap && (
                             ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) ||
                             ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer ) ) ) )
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         }, 'Silver Rock Skulltula': { x: "80%", y: "74.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && items.Glove >= 2 &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         },
         'Iceberg Freestanding': { x: "82%", y: "32.5%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && 
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         },
         'Under Icy Waters Freestanding': { x: "63%", y: "32.5%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && items.IronBoots &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         }, 'Ice Cavern': { x: "60%", y: "2.5%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Death Mountain Trail", x: "62%", y: "13.7%", type: "overworld", found: true,
      chestlist: {
         'Trail to Village': { x: "15%", y: "84.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[23].found == true; }
         }, 'Bombable Wall Skulltula': { x: "15%", y: "73.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Dodongo\'s Cavern': { x: "36%", y: "47%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[23].found == true) &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'Cavern Roof Freestanding': { x: "40%", y: "43%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[23].found == true ;
            }
         }, 'Cavern Soil Patch Skulltula': { x: "33%", y: "47%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return items.Bottle && (OWERmap == false || dungeons[23].found == true) && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
            }
         },
         'Breakable Wall Chest': { x: "45%", y: "60%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Song of Storms Grotto': { x: "50%", y: "58%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         },
         'Storms Grotto chest': { x: "53%", y: "58%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         }, 'Storms Grotto Gossip': { x: "48%", y: "58%", leadsto: "unknown", type: "gossip", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         }, 'Trail to City': { x: "54.5%", y: "53%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[23].found == true; }
         }, 'Lower Red Rock Skulltula': { x: "42%", y: "51%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (items.Hookshot || items.Hammer ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         }, 'Cow Grotto': { x: "45%", y: "55%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Cow Milk Grotto': { x: "45%", y: "55%", leadsto: "unknown", type: "cow", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  items.Ocarina && items.EponasSong &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Upper Red Rock Skulltula': { x: "73%", y: "34%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         }, 'Summit Bombable Door': { x: "82%", y: "13%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Summit Great Fairy Fountain': { x: "82%", y: "13%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  items.Ocarina && items.ZeldasLullaby &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Biggoron\'s Finest Work': { x: "91%", y: "23%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                  ( (items.Trade >= 1 && (items.Bottle && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) ) 
                                          && (items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale ) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                                          ) || OpenFountain || isBridgeOpen() || items.Wallet >= 3) && (items.EponasSong || items.Hookshot >= 2) 
                    )//Get King Z unthawed for eyeball
                   || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) //Valley Carpenter Foreman
                   || items.Trade >= 9); //Claim check/eyedrops
            }
         }, 'Trail to Crater': { x: "87.5%", y: "12.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Trail Owl': { x: "84%", y: "12.5%", leadsto: "unknown", type: "owl", access: "owl",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Summit Gossip': { x: "85%", y: "25%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Death Mountain Crater", x: "65.4%", y: "09%", type: "overworld", found: true,
      chestlist: {
         'Crater to City': { x: "2%", y: "46%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[24].found == true; }
         }, 'Red Rock Grotto': { x: "10.5%", y: "36%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ;
            }
         }, 'Red Rock Grotto Scrub 1': { x: "8.5%", y: "37%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ;
            }
         }, 'Red Rock Grotto Scrub 2': { x: "11.5%", y: "37%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ;
            }
         }, 'Red Rock Grotto Scrub 3': { x: "9%", y: "34%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ;
            }
         },
         'Song from Sheik': { x: "34%", y: "36.3%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                    ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || ((items.Hookshot || items.HoverBoots) && (items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) ))
                     && //access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    ) ;
            }
         }, 'Bolero Warp': { x: "53%", y: "41%", leadsto: "unknown", type: "warp", access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.BoleroofFire; }
         }, 'Soil Patch Skulltula': { x: "47%", y: "42%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Ocarina && items.BoleroofFire && items.Bottle ;
            }
         }, 'Fire Temple': { x: "54%", y: "3%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || ((items.Hookshot || items.HoverBoots) && (items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) ))
                     && //access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Ocarina && items.BoleroofFire) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
         'Volcano Freestanding': { x: "36%", y: "47%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) )
                     && items.HoverBoots  &&//access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Ocarina && items.BoleroofFire) && items.Bean &&
                       (OpenDoor == true || (items.Ocarina && items.SongofTime) ) //can plant bean
                      ) );
            }
         }, 'Red Rocks Doorway': { x: "19%", y: "67%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ); 
            }
         },
         'Great Fairy Fountain': { x: "19%", y: "67%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer && items.Ocarina && items.ZeldasLullaby &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ;}
         }, 'Bombable Grotto': { x: "54%", y: "82%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Crater Grotto Gossip': { x: "51.5%", y: "82%", leadsto: "unknown", type: "gossip", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Bomb Grotto Chest': { x: "54%", y: "82%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         },
         'Wall Freestanding': { x: "54%", y: "69%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
            }
         }, 'Crate Skulltula': { x: "27%", y: "89%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Child Crater Scrub': { x: "34%", y: "73%", leadsto: "unknown", type: "scrub", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         }, 'Cracked Wall Gossip': { x: "89%", y: "79%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         }, 'Crater to Trail': { x: "21.5%", y: "93.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[24].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Lon Lon Ranch", x: "47.4%", y: "45.6%", type: "overworld", found: true,
      chestlist: {
         'Ranch to Field': { x: "82%", y: "3%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[25].found == true; }
         }, 'Talon\'s House': { x: "70%", y: "14%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         'Talon\'s Cucco game': { x: "76%", y: "18%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Mask >= 2 && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Ranch Stables': { x: "60%", y: "14%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         'Stable Cow Milk 1': { x: "51%", y: "19.5%", leadsto: "unknown", type: "cow", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         'Stable Cow Milk 2': { x: "51%", y: "14%", leadsto: "unknown", type: "cow", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         }, '2nd Floor Window Skulltula': { x: "69%", y: "20%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            
            }
         }, 'Tree Skulltula': { x: "76%", y: "26%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Song from Malon': { x: "45%", y: "50%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true)  && items.Mask >= 2 && items.Ocarina && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            
            }
         }, 'Back of Coral Skulltula': { x: "65%", y: "64.5%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Ranch Open Grotto': { x: "73.5%", y: "88%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Open Grotto Scrub 1': { x: "72%", y: "89%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Open Grotto Scrub 2': { x: "75%", y: "89%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Open Grotto Scrub 3': { x: "73.5%", y: "85%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Ranch Silo': { x: "19.5%", y: "84.5%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         'Silo Freestanding': { x: "17%", y: "89%", leadsto: "unknown", type: "freestanding", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Silo Cow Milk 1': { x: "14%", y: "84.5%", leadsto: "unknown", type: "cow", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         'Silo Cow Milk 2': { x: "17.5%", y: "84.5%", leadsto: "unknown", type: "cow", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         }, 'North of Silo Skulltula': { x: "5%", y: "74%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Lake Hylia", x: "40%", y: "81%", type: "overworld", found: true,
      chestlist: {
         'Lake to Field': { x: "35%", y: "2%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[26].found == true; }
         }, 'Beside Lab Gossip': { x: "9%", y: "41%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true ;
            
            }
         },'Lake from Valley': { x: "99%", y: "50%", leadsto: "none", type: "entrance", access: "entrance",
         isAvailable: function () {
            return true ; }
         }, 'Soil Patch Skulltula': { x: "24%", y: "36%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Bottle &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Child Underwater Freestanding': { x: "47%", y: "49%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Scale &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Lake to Domain': { x: "47%", y: "39%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return items.Scale && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            ; }
         }, 'Laboratory': { x: "26.5%", y: "41.5%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true; }
         }, 'Lab Crate Skulltula': { x: "26.5%", y: "41.5%", leadsto: "unknown", type: "skulltula", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.IronBoots && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Diving in the Lab': { x: "22%", y: "41%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.IronBoots || items.Scale >= 2) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Scale >= 2 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         'Lab Roof Freestanding': { x: "24.5%", y: "43%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         }, 'Lab Wall Skulltula': { x: "22%", y: "45%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Lake Owl': { x: "18.5%", y: "58.5%", leadsto: "unknown", type: "owl", access: "owl",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Lake Hylia Grave': { x: "19%", y: "65%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true; }
         }, 'Grave Pull Scrub 1': { x: "17.5%", y: "67%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            },
         }, 'Grave Pull Scrub 2': { x: "17.5%", y: "67%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            },
         }, 'Grave Pull Scrub 3': { x: "19%", y: "64%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            },
         }, 'Serenade Warp': { x: "44.5%", y: "78%", leadsto: "unknown", type: "warp", access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.SerenadeoffWater; }
         }, 'Top of Tree Skulltula': { x: "49.5%", y: "79%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Hookshot >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Perimeter of Lake 1': { x: "13%", y: "82%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            }
         }, 'Perimeter of Lake 2': { x: "80%", y: "86%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            }
         }, 'Fishing Pond': { x: "75%", y: "41%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && 
                  ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
                   || ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ) ; 
            }
         },
         'Child Fishing': { x: "75%", y: "39%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Adult Fishing': { x: "75%", y: "43.5%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         'Shoot the Sun': { x: "65.5%", y: "77%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Bow &&
                  items.Hookshot >= 2 && items.Ocarina //|| 'Morpha'.isopened
                  && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Fire Arrow Island Skulltula': { x: "68%", y: "75%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Water Temple': { x: "46.5%", y: "71%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[26].found == true) && items.Hookshot &&
                  (items.Scale >= 2 || items.IronBoots) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Gerudo Valley", x: "19%", y: "31.5%", type: "overworld", found: true,
      chestlist: {
         'Valley to Field': { x: "94%", y: "53%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[27].found == true; }
         }, 'Right of Plank Skulltula': { x: "79%", y: "36%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Crate Freestanding': { x: "47%", y: "66%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && 
                  ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
                   || ( items.Hookshot >= 2 && Age == "Adult" ) ) ; 
            }
         },
         'Waterfall Freestanding': { x: "54%", y: "2%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[27].found == true}
         }, 'Waterfall Gossip': { x: "46%", y: "6%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[27].found == true ;
            }
         },
         'Valley Cow Milk': { x: "47%", y: "56%", leadsto: "unknown", type: "cow", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.EponasSong &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Soil Patch Skulltula': { x: "47%", y: "60%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Bottle &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Silver Rock Grotto': { x: "57%", y: "66%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Glove >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Above Hammer Rocks Skulltula': { x: "35%", y: "45%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Hammer Rocks Chest': { x: "31%", y: "49%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hammer &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Carpenter Tent': { x: "40%", y: "30%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Behind Tent Skulltula': { x: "30%", y: "25%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Song of Storms Grotto': { x: "33%", y: "27%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Storms Grotto Scrub 1': { x: "33%", y: "27%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Storms Grotto Scrub 2': { x: "36%", y: "27%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Valley to Fortress': { x: "02%", y: "27%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[27].found == true; }
         }, 'Valley to Lake': { x: "99%", y: "50%", leadsto: "Lake from Valley", type: "entrance", access: "entrance",
         isAvailable: function () {
            return true ; }
         }, 
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Gerudo Fortress", x: "15.5%", y: "16.4%", type: "overworld", found: true,
      chestlist: {
         'Fortress to Valley': { x: "32%", y: "84%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[28].found == true; }
         }, 'Fortress Storms Grotto': { x: "37%", y: "55%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Guard Fight': { x: "38%", y: "42%", leadsto: "unknown", type: "guard", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) &&
                  ( (items.Ocarina && items.EponasSong) || (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) 
                   || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Membership Token': { x: "38%", y: "47%", leadsto: "unknown", type: "membership", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) &&
                  ( (items.Ocarina && items.EponasSong) || (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) 
                   || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Fortress Skulltula': { x: "54%", y: "49%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Rooftop Chest': { x: "45%", y: "42%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && (items.HoverBoots || (items.Hookshot && items.Scarecrow >= 2) ) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Gerudo Training Grounds': { x: "33%", y: "65%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[28].found == true) && items.Membership; 
            }
         },
         'Horseback Archery 1000 pts': { x: "85%", y: "68%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Membership && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         'Horseback Archery 1500 pts': { x: "85%", y: "72%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Membership && items.Bow && items.EponasSong && items.Ocarina;
            }
         }, 'Archery Target Skulltula': { x: "80%", y: "12%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         }, 'Fortress to Wasteland': { x: "1%", y: "32%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[28].found == true) && items.Membership; 
             }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Desert Colossus", x: "8.4%", y: "15.9%", type: "overworld", found: true,
      chestlist: {
         'Desert to Wasteland': { x: "93%", y: "41%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[29].found == true; }
         }, 'Cracked Wall Doorway': { x: "64%", y: "20%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && (items.Bombs || (items.Bombchu && BombchuLogic))
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         }, 'Nayru\'s Great Fairy Fountain': { x: "64%", y: "20%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && (items.Bombs || (items.Bombchu && BombchuLogic))
               && items.Ocarina && items.ZeldasLullaby &&
                 ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         }, 'Water Hole Tree Skulltula': { x: "43%", y: "82%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Hookshot &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Requiem Warp': { x: "20%", y: "14%", leadsto: "unknown", type: "warp", access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.RequiemofSpirit; }
         }, 'Desert Strength Grotto': { x: "28%", y: "20%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Glove >= 2 &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Silver Rock Scrub 1': { x: "26%", y: "20%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Glove >= 2 &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Silver Rock Scrub 2': { x: "30%", y: "20%", leadsto: "unknown", type: "scrub", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Glove >= 2 &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         }, 'Northwest Desert Gossip': { x: "3%", y: "63%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         }, 'Spirit Temple': { x: "9%", y: "45%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
               }
         },
         'Song from Sheik': { x: "13%", y: "45%", leadsto: "unknown", type: "song", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         }, 'Soil Patch Skulltula': { x: "12%", y: "51%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bottle ;
            }
         }, 'Bean Ride Skulltula': { x: "52%", y: "36%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  ( (items.Hookshot && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                                        || (items.Ocarina && items.RequiemofSpirit) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    ) || ((OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                          && items.Ocarina && items.RequiemofSpirit && items.Bean ) );
            }
         },
         'Bean to Arch Freestanding': { x: "20.5%", y: "45%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  (OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bean ;
            }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Graveyard", x: "73.7%", y: "19.5%", type: "overworld", found: true,
      chestlist: {
         'Graveyard to Village': { x: "2%", y: "58%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[30].found == true; }
         }, 'Dampe\'s Hut': { x: "17%", y: "73%", leadsto: "unknown", type: "simple", access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         'Dampe Digging': { x: "26%", y: "51%", leadsto: "unknown", type: "NPC", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         }, 'First Row 2nd Grave': { x: "29%", y: "43%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         'Free Chest Grave': { x: "29%", y: "43%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         'Magic Bean Freestanding': { x: "12%", y: "15%", leadsto: "unknown", type: "freestanding", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  ( ( (OpenDoor == true || (items.Ocarina && items.SongofTime) ) && items.Bean )
                   || (items.Boomerang && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Hookshot >= 2 && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) 
                  );
            }
         }, 'Soil Patch Skulltula': { x: "20%", y: "20%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Bottle && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         }, 'Dampe\'s Grave': { x: "24%", y: "13%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         'Dampe Race 1': { x: "23%", y: "13%", leadsto: "unknown", type: "NPC", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Dampe Race 2': { x: "26%", y: "13%", leadsto: "unknown", type: "NPC", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         }, '2nd Row 4th Grave': { x: "39%", y: "66%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         'Redead Grave Chest': { x: "39%", y: "66%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.SunsSong ;
            }
         }, 'South Wall Skulltula': { x: "41%", y: "87%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bottle ;
            }
         }, 'Royal Tomb': { x: "50%", y: "47%", leadsto: "unknown", type: "grotto", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby ;
            }
         },
         'Composer Brothers\' Song': { x: "53%", y: "47%", leadsto: "unknown", type: "song", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby ;
            }
         },
         'Royal Tomb Chest': { x: "49%", y: "47%", leadsto: "unknown", type: "chest", access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby && 
                  items.Magic && (items.Dins || 
                 (items.Bow && items.Fire && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 );
            }
         }, 'Noturne Warp': { x: "61%", y: "45%", leadsto: "unknown", type: "warp", access: "warp",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.NocturneofShadow ;
            }
         }, 'Noturne Gossip': { x: "63%", y: "34%", leadsto: "unknown", type: "gossip", access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.NocturneofShadow
            }
         }, 'Shadow Temple': { x: "95%", y: "45%", leadsto: "unknown", type: "dungeon", access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[30].found == true) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                     && items.Ocarina && items.NocturneofShadow && items.Magic && (items.Dins || items.Fire) ;
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Haunted Wasteland", x: "14%", y: "25%", type: "overworld", found: true,
      chestlist: {
         'Wasteland to Fortress': { x: "90%", y: "85.4%", leadsto: "unknown", type: "entrance", access: "entrance",
            isAvailable: function () {
                  return dungeons[31].found == true; }
         },
         'Carpet Salesman': { x: "72%", y: "65%", leadsto: "unknown", type: "carpet", access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                   items.Wallet >= 2 && ( (items.Ocarina && items.RequiemofSpirit) 
                                      || (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) ) ;
            }
         },
         'Torch Chest': { x: "52%", y: "50%", leadsto: "unknown", type: "chest", access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && items.Magic
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) && (items.Dins || (items.Bow && items.Fire) )
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit && items.Dins) 
                 ) ;
            }
         }, 'Structure Skulltula': { x: "45%", y: "50%", leadsto: "unknown", type: "skulltula", access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && 
                  ( ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     items.Hookshot && ( (items.Ocarina && items.RequiemofSpirit) 
                                        || (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) ) ) 
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                       && items.Boomerang && items.Ocarina && items.RequiemofSpirit) ) ;
            }
         }, 'Wasteland to Desert': { x: "2%", y: "50%", leadsto: "unknown", type: "entrance", access: "entrance",
            isAvailable: function () {
                  return dungeons[31].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Hyrule Field", x: "54%", y: "42%", type: "overworld", found: true,
      chestlist: {
         'Ocarina of Time': { x: "62%", y: "9%", leadsto: "unknown", type: "ocarina", access: "outdoor",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && 
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                     items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire ;
               }
         }, 'Song from Zelda': { x: "58.5%", y: "11%", leadsto: "unknown", type: "song", access: "outdoor",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && 
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                     items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire ;
               }
         }, 'Drawbridge to Street': { x: "58.5%", y: "5.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'NE Lone Tree Grotto' : { x: "72%", y: "5%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'NE Skulltula Grotto' : { x: "72%", y: "5%", leadsto: "unknown", type: "skulltula", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && items.Hookshot &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Boomerang &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );}
         }, 'Field to Village': { x: "87.5%", y: "8%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'Field to River': { x: "95%", y: "26%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'Field to Forest': { x: "92%", y: "52.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'SE Remote Grotto' : { x: "58%", y: "75%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'SE Grotto Chest' : { x: "58%", y: "75%", leadsto: "unknown", type: "chest", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'South Open Grotto' : { x: "35%", y: "83%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return OWERmap == false || dungeons[32].found == true ;
               }
         }, 'Southern Open Grotto' : { x: "35%", y: "83%", leadsto: "unknown", type: "chest", access: "grotto",
               isAvailable: function () {
                  return OWERmap == false || dungeons[32].found == true ;
               }
         }, 'Fenced Bomb Grotto' : { x: "30%", y: "85%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Fenced Grotto Scrub 10$' : { x: "30%", y: "85%", leadsto: "unknown", type: "NPC", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Field to Lake': { x: "25.5%", y: "92%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'Field to Valley': { x: "2%", y: "44.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'Red Rock Grotto' : { x: "12%", y: "43%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Web Grotto Skulltula' : { x: "13%", y: "40.5%", leadsto: "unknown", type: "skulltula", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     items.Hookshot && (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Boomerang && items.Dins &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Web Grotto Cow' : { x: "13%", y: "43.5%", leadsto: "unknown", type: "cow", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic && items.Ocarina && items.EponasSong &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Dins && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Web Grotto Gossip' : { x: "11%", y: "43.5%", leadsto: "unknown", type: "gossip", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Dins && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'NW Lone Tree Grotto' : { x: "29%", y: "19%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Tektite Grotto' : { x: "29%", y: "19%", leadsto: "unknown", type: "freestanding", access: "grotto",
               isAvailable: function () {
               return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) 
                     && (items.IronBoots || items.Scale >= 2) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Scale >= 2 &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'NW GetWet Grotto' : { x: "32%", y: "4.5%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                       ) );
               }
         }, 'Field to Ranch': { x: "46.5%", y: "39.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[32].found == true; }
         }, 'Due North Boulder' : { x: "51%", y: "10%", leadsto: "unknown", type: "grotto", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         }, 'Boula NW of Castle' : { x: "51%", y: "10%", leadsto: "unknown", type: "chest", access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      ) );
               }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Market Street", x: "53.5%", y: "24.2%", type: "overworld", found: true,
      chestlist: {
         'Street to Drawbridge': { x: "47.5%", y: "86%", leadsto: "unknown", type: "entrance", access: "entrance",
          isAvailable: function () {
               return dungeons[33].found == true; }
         }, 'Guard/Ghostbuster House': { x: "60%", y: "61%", leadsto: "unknown", type: "simple", access: "door",
               isAvailable: function () {
                  return dungeons[33].found == true ; }
         }, 'Pottery Crate Skulltula': { x: "90%", y: "63%", leadsto: "unknown", type: "skulltula", access: "simple",
            isAvailable: function () {
               return dungeons[33].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         '10 Big Poes': { x: "90%", y: "55%", leadsto: "unknown", type: "NPC", access: "simple",
            isAvailable: function () { //Adult only indoor
               return dungeons[33].found == true
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.BigPoe >= 1;
            }
         }, 'Streeet to Market': { x: "47.5%", y: "11%", leadsto: "unknown", type: "entrance", access: "entrance",
          isAvailable: function () {
               return dungeons[33].found == true; }
       },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
   { name: "Lost Woods Bridge", x: "70%", y: "54%", type: "overworld", found: true,
      chestlist: {
         'Bridge to Forest': { x: "32%", y: "52.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[34].found == true; }
         }, 'Fairy Ocarina': { x: "50%", y: "52.5%", leadsto: "unknown", type: "ocarina", access: "OWER",
            isAvailable: function () {
               return dungeons[34].found == true; }
         }, 'Bridge to Field': { x: "68%", y: "52.5%", leadsto: "unknown", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[34].found == true; }
         }, 'Bridge to Woods': { x: "49.5%", y: "52.5%", leadsto: "Woods to Bridge", type: "entrance", access: "entrance",
             isAvailable: function () {
                  return dungeons[34].found == true; }
         },
      }, isBeatable: function () { return this.canGetChest();
      }, canGetChest: function () { return generalCanGetChest(this.chestlist); }
   },
];
