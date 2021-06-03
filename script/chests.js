function generalCanGetChest(chestlist) {
   var canGet = 0;
   var unopened = 0
   for (var key in chestlist) {
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
      return "available";
   if (canGet == 0)
      return "unavailable"
   return "possible"
}
// (OWER == false || (OWER == true && dungeon[].found == true) ) && (Randomstart == false || (Randomstart == true && dungeon[].entrance[].access == true) )
// define dungeon chests
var dungeons = [
   { name: "Kokiri Forest",
      x: "78.9%",
      y: "63.9%",
      type: "overworld",
      chestlist: {
         'Forest to Field': {
          x: "75.0%",
          y: "58.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
       },
         'Fairy Ocarina': {
            type: "ocarina",
            access: "entrance",
            isAvailable: function () {
               return true; }
         },
         'Mido\'s House': {
            type: "simple",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Mido\'s House x4 Chests': {
            type: "chest",
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Know It All Bro\'s': {
            type: "simple",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Child Know it All Bros Skulltula': {
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Kokiri Sword Chest': {
            type: "chest",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Link\'s House': {
            type: "alldoor",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Link\'s House Cow': {
            type: "cow",
            access: "alldoor",
            isAvailable: function () {
               return items.Ocarina && items.EponasSong; }
         },
         'Saria\'s House': {
            type: "simple",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Twin\'s House': {
            type: "simple",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Adult Twin\'s House Roof Skulltula': {
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () {
               return items.MasterSword && items.Hookshot; }
         },
         'Soil Patch Skulltula': {
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle; }
         },
         'Kokiri Shop': {
            type: "simple",
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Kokiri Sale': {
            type: "shop",
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Infront Storms Grotto': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Song of Storms Grotto': {
            type: "grotto",
            access: "grotto",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms; }
         },
         'Storms Grotto Chest': {
            type: "chest",
            access: "grotto",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms; }
         },
         'Storms Grotto Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Forest to Woods': {
          x: "78.9%",
          y: "56.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
       },
         'Left of Deku Tree Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Behind Deku Tree Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         'Inside the Deku Tree': {
            type: "dungeon",
            access: "door",
            isAvailable: function () {
               return (items.DekuShield && OpenDeku == 0) || (items.KokiriSword&& items.DekuShield);}
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   { name: "Deku Tree",
      x: "88.0%",
      y: "48.5%",
      type: "dungeon",
      chestlist: {
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield);}
         },
         '2nd Floor Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (items.DekuShield && OpenDeku == 0) || (items.KokiriSword&& items.DekuShield); }
         },
         '2nd Floor Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (items.DekuShield && OpenDeku == 0) || (items.KokiriSword&& items.DekuShield); }
         },
         'Top Floor Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Top Floor Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Top Floor Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Basement Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Basement 1st Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Basement 2nd Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Queen Gohma': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (items.DekuShield && OpenDeku == 0) || (items.KokiriSword&& items.DekuShield);
            }
         },
         'Basement Bomb Wall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Boomerang && items.Bombs && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Lobby Skull in Crate': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'MQ Lobby Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Top Floor Torch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Top Floor Larva Kill': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'MQ 2nd Floor Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         '2nd Floor Skulltule': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Bombchu && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Basement Chest 1': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return OpenDeku == 0 || (items.KokiriSword&& items.DekuShield); }
         },
         'Spiked Log Open Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Slingshot && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Song of Time Chest': {
            access: "master",
            type: "chest",
            isAvailable: function () {
               return items.Slingshot && items.Ocarina && items.SongofTime && ( OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); 
            }
         },
         'Basement Ceiling Skulltule': {
            type: "skulltula",
            access: "master",
            isAvailable:function () {
               return items.Boomerang && items.Ocarina && items.SongofTime && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield));
            }
         },
         'Back Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Bombs && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Basement Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return items.Slingshot && (OpenDeku == 0 || (items.KokiriSword&& items.DekuShield)); }
         },
         'MQ Queen Gohma': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return (items.DekuShield && OpenDeku == 0) || (items.KokiriSword&& items.DekuShield); }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   { name: "Dodongo's Cavern",
      x: "60.6%",
      y: "08.4%",
      type: "dungeon",
      chestlist: {
         'Lobby Gossip': {
            type: "gossip",
            access: "vanilla",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Baby Dodongos Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove; }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove && items.Ocarina && items.Hookshot; }
         },
         '1F Right Scrub Room': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove; }
         },
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic)); }
         },
         'Lobby Scrub': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove; }
         },
         'Armos Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic)); }
         },
         'Top of the Stairs Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Glove) || (items.Hammer && (items.Bow || (items.Magic && items.Dins))); }
         },
         'Behind Stairs Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Glove) || (items.Hammer && (items.Bow || (items.Magic && items.Dins))); }
         },
         'Bomb Flower Platform': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic)); }
         },
         'Top Floor Big Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic)));
            }
         },
         '2F Scrubs x2': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Glove || items.Hammer) && (items.Slingshot || items.Bow || items.HoverBoots) && (items.Bow || (items.Magic && items.Dins)); }
         },
         'End of Bridge Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Hammer && items.Bow) || (items.Bombchu && BombchuLogic)));
            }
         },
         'Behind Pushblocks Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Glove) && ((items.Slingshot && items.Glove) || items.Bow);
            }
         },
         'Chest Above King Dodongo': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Bombchu && BombchuLogic)));
            }
         },
         'King Dodongo': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && ((items.Glove && (items.Bombchu && BombchuLogic)) || items.Bombs));
            }
         },
         'Lobby Scrubs x2': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Lobby Mud Wall Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Lobby Boulder Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Glove || items.Bombs || items.Hammer) && items.Ocarina && items.SongofTime; }
         },
         'Stair Master Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Teen Dodongo Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Baby Gohma Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Crate Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         '2F Lizalfos Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Bombs || items.Hammer; }
         },
         '2F Platform Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         '1F Side Route Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         '1F Scrub Keese Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Bombs && items.Boomerang; }
         },
         'Poe fight Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Bombs; }
         },
         'Back Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Bombs; }
         },
         'Chest Above Boss Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Bombs; }
         },
         'MQ King Dodongo': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return items.Bombs; }
         }
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },{ name: "Jabu Jabu's Belly",
      x: "88.4%",
      y: "18.0%",
      type: "dungeon",
      chestlist: {
         'Water Switch Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Basement Dive to Scrub': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return ((items.Bombs && items.ZeldasLullaby && items.Ocarina) || items.Scale) && items.ZoraLetter && (items.Slingshot || items.Bombs || items.Boomerang);
            }
         },
         'StingRay Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && (items.Slingshot || items.Boomerang || items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Tentacle Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
         'Bubble Pop Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
         'Before Big Octo x2 Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang;
            }
         },
         'Before Brainade Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang;
            }
         },
         'Barinade': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
         'Lobby Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Bombs;
            },
         },
         'Lobby Cow Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; 
            }
         },
         'Underwater Cow Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; }
         },
         'Elevator Room Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; 
            }
         },
         'Basement Chest x2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; }
         },
         'Basement Open Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Basement Battle Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Ocarina && items.SongofTime;
            },
         },
         'Bubble Battle Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Invisible Enemies Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Falling Like Like Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Elevator Room Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Top Floor Standing Cow': {
            type: "cow",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang && items.Ocarina && items.EponasSong; }
         },
         'Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Skulltula Near Boos Door': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'MQ Barinade': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   { name: "Bottom of the Well",
      x: "69.3%",
      y: "23.4%",
      type: "dungeon",
      chestlist: {
         'Front Left Hidden Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Front Center Bombable': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Center Large Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Underwater Left Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Coffin Key': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Center Small Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Back Left Bombable': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'West Key Door Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
         'East Key Door Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
         'Right Bottom Hidden Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Locked Pits': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.WellKey >= 1 || smallkeys === "Remove");
            }
         },
         'Like Like Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.WellKey >= 1 || smallkeys === "Remove");
            }
         },
         'Like Like Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
         'Basement Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove);
            }
         },
         'Underwater Front Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Dead Hand': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby && (items.KokiriSword || items.Stick);
            }
         },
         ['Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Center Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'MQ Deadhand Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'Deadhand Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs; }
         },
         'Inner Room Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'MQ Basement Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs && items.Slingshot && (items.WellKey >= 1 || smallkeys === "Remove"); }
         },
         'Tombstone Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.Slingshot; }
         },
         'Coffin Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs && (items.WellKey >= 3 || smallkeys === "Remove"); }
         },
         'Basement Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs && items.Slingshot && (items.WellKey >= 3 || smallkeys === "Remove"); }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "WellKey"
   },
   { name: "Forest Temple",
      x: "78.5%",
      y: "39.0%",
      type: "dungeon",
      chestlist: {
         'Lobby Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            }
         },
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot;
            }
         },
         'Torch Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         },
         '1st Floor Stalfos': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot;
            }
         },
         'Bubble Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Courtyard Island Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Courtyard Island Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && (items.Bow || items.SongofTime);
            },
         },
         'Well Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Push Block Room Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Hallway Twist Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 2 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Floormaster Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && ((items.Bow && items.ForestKey >= 2 && items.Glove) || (items.HoverBoots && items.ForestKey));
            },
         },
         'West Courtyard Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.ForestKey >= 2 || (items.ForestKey && items.HoverBoots)) && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         },
         'Red Poe Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         '2nd Floor Stalfos': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Glove;
            },
         },
         'Blue Poe Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Checkerboard Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Glove && (items.Bow || (items.Dins && items.Magic));
            }
         },
         'Near Boss Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Basement Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && items.Bow && items.Glove;
            },
         },
         'Phantom Ganon': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.BossForest && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Lobby Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot; }
         },
         '1st Hallway Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Hookshot; }
         },
         'Wolfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && items.SongofTime; }
         },
         'Courtyard Island Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Counrtyard Climb Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Bow; }
         },
         'West Courtyard Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'Well Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2 && items.IronBoots) || items.Bow); 
            }
         },
         'Well Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && (items.Bow || items.IronBoots); }
         },
         'Above Well Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2) || items.Bow); }
         },
         'Gilded Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Redead Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Push Block Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Hookshot; }
         },
         'Red Poe Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         '2nd Floor Stalfos': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2; }
         },
         'Blue Poe Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'Courtyard Island Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'East Courtyard Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2 && (items.IronBoots || items.Scale >= 2)) || items.Bow); 
            }
         },
         'Checkerboard Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow; }
         },
         'MQ Phantom HorsePig': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow && items.BossForest; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "ForestKey"
   },
   { name: "Fire Temple",
      x: "65.4%",
      y: "04.0%",
      type: "dungeon",
      chestlist: {
         'Chest Near Boss': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         },
         'Before 1st Fire Dancer Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hammer && (items.Hookshot || items.HoverBoots || items.BoleroofFire)
            }
         },
         'Flare Dancer Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Under Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Song of Time Lava Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Ocarina && items.SongofTime && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         'Lava Room Open Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot));
            }
         },
         'Lava Room Bombable Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Maze Lower Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Bombable Wall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.Bombs || items.Bombchu) && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         'Maze Side Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Eye Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Maze Upper Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Bombable Pit': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         '1st Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
         '2nd Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
         'Scarecrow Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina && items.Scarecrow >= 2;
            }
         },
         'Flame Maze Side Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Song of Time Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.FireKey >= 7 || (items.FireKey >= 6 && items.HoverBoots)) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer;
            }
         },
         'Topmost Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer);
            }
         },
         'Volvagia': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.BossFire && ((items.GoronTunic || items.Bottle) && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs)));
            }
         },
         'Like Like Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () { 
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )
                      );
            }
         },
         'Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Magic && (items.Dins || (items.Bow && items.Fire)) &&
                       ((items.BoleroofFire && items.Ocarina) //Warp
                        || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || items.Dins) //:ink the Goron
                            )
                        )
                      ); //Boss Door access
            }
         },
         'Flare Dancer Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >= 1 ; //Iron Knuckle Access
            }
         },
         'Rusted Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >=1 && items.Hammer; //Switch
            }
         },
         'Lava Green Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) ; //Lava Room and Torch
            }
         },
         'Lava Bombable Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && (items.Bombs || (items.Bombchu && BombchuLogic) ) //Bombwall
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Torch
                      ;
            }
         },
         'Lava Side Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.Hammer; //Lava Room
            }
         },
         'Song of Time Climb Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                      && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      && items.SongofTime && items.Ocarina && items.Glove //Block of Time climb, strength for push block
                      ;
            }
         },
         'Bombable Shortcut Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 1 && (items.Bombs || (BombchuLogic && items.Bombchu)) //Keydoor, bombwall to rusted switch
                      ;
            }
         },
         'Maze Upper Gate': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                        && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         },
         'Maze Lower Gate': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //No Hookshot needed
                       ;
            }
         },
         'Maze Side Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                       && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         },
         'Flame Maze Side Room': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         },
         'Bombwall Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      && items.Bombs || (BombchuLogic && items.Bombchu) //Bombwall
                      ;
            }
         },
         'Flare Dancer Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey>= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         },
         'Highest Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 3 //Amother KeyDoor
                      ;
            }
         },
         'Highest Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 5;
            }
         },
         'MQ Volvagia': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ))
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Boss Door access
                        && items.BossFire && items.Hammer && (items.Hoverboots //Boss Key, Hammer, and Hovers...
                                                             || (items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                                                             && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                                                             && items.FireKey >= 4)) ; //or Deep Fire
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "FireKey"
   },
   {
      name: "Ice Cavern",
      x: "93.5%",
      y: "18.0%",
      type: "dungeon",
      chestlist: {
         'Above Silver Rupee Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         ['1st Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Freestanding']: {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         'Ice Block Puzzle Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         ['White Wolfos']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Song from Sheik']: {
            type: "song",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Red Ice Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots) && items.SongofTime;
            }
         },
         'Pilar Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Frozen Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Crystal Switch Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'MQ Sheik Song': {
            type: "song",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Water Temple",
      x: "36.1%",
      y: "91.0%",
      type: "dungeon",
      chestlist: {
         'Water Jet Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Spike Ball Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2);
            }
         },
         'Torches to Shellblades': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (items.Bow || (items.Dins && items.Magic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Cracked Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic))) || ((items.Scale >= 2 && items.Hookshot >= 2) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Central Bow Target': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Bow && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Basement Key Door to Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby) && items.WaterKey && items.Bombs;
            }
         },
         'Boulder Hall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.WaterKey && items.IronBoots && items.Hookshot && ((items.Bombs && items.Glove) || items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Boulder Hall Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (((items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove) || items.HoverBoots) && (items.Hookshot >= 2 || items.HoverBoots);
            }
         },
         'Top of Central Pillar Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.IronBoots && (items.WaterKey && items.Ocarina && items.ZeldasLullaby) || (items.Bow && items.Ocarina && items.ZeldasLullaby) && items.Hookshot >= 2;
            }
         },
         'Central Pillar Basement': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.WaterKey || items.Bow) && items.IronBoots && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Dragon Mouth Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && (((items.SongofTime && items.Bow && items.WaterKey >= 2)) || (items.ZeldasLullaby && items.Glove));
            }
         },
         'Platform Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.WaterKey && items.Hookshot >= 2;
            }
         },
         'Dark Link': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2));
            }
         },
         'River Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.SongofTime && items.IronBoots && items.Hookshot;
            }
         },
         'River Eye Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && items.SongofTime && items.Bow;
            }
         },
         'Morpha': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot >= 2) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.BossWater;
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
         'Open Wall Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || 
                       (items.Scale >= 2 && items. Hookshot >= 2 
                        && items.Ocarina && items.ZeldasLullaby) //Underwater or Gold Scale & ZL
                       );
            }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.IronBoots && items.Hookshot >= 1 && items.Ocarina && items.Scarecrow >=2 && items.Magic && items.Bow && items.Fire;
            }
         },
         'Blue Switch Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.IronBoots || items.Scale >= 2) && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Lizalfos Hallway Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && items.Dins //Torches to enter room
                       ;
            }
         },
         'Lizalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2))
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches
                       ;
            }
         },
         'MQ Central Pillar Basement': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.IronBoots && items.Hookshot >= 1 //Temple Access
                       && items.Magic && ( (items.Bow && items.Fire) || (items.Dins && items.Ocarina && items.SongofTime) ) //Torches at the top of Pillar
                       );
            }
         },
         'Dins Ontop Water Jet': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && items.Dins && items.WaterKey >= 1 //Jet room access
                       ;
            }
         },
         'Basement Crate Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && (items.Hookshot >= 2 || items.HoverBoots) //Get over the spikes
                       ;
            }
         },
         'MQ Morpha': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.BossWater && items.Hookshot >= 2 //Boos door access
                       ;
            }
         },
         'MQ River Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.WaterKey >= 1 //Fight Stalfos and Dark Link
                       ;
            }
         },
         'Dodongo Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "WaterKey"
   },
   {
      name: "Gerudo Training Ground",
      x: "20.7%",
      y: "16.4%",
      type: "dungeon",
      chestlist: {
         'Lobby Right Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Lobby Left Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Stalfos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Wolfos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Like Like Open Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 1st Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 2nd Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Invisible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Cyclops Statue Eyes': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow && (items.SongofTime || items.HoverBoots || items.Hookshot >= 2 || (items.Hookshot));
            }
         },
         'Cyclops Room Top Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow;
            }
         },
         'Fire Enemies Clear': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Fire Trap Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Maze Right Freestanding': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Central Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Underwater Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Ocarina && items.SongofTime && items.IronBoots;
            }
         },
         'Beamos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Left 1 Key Hidden Ceiling': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 2 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 2 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 4 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 4 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 5 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 5 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Center Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 7 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'MQ Lobby Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'MQ Lobby Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'White Iron Knuckle': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Skulltula and Stalfos': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Silver Block Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Crystal Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Black Iron Knuckle': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'MQ Fire Trap Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'MQ Underwater Silver Rupees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'MQ Maze Right Chest x2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Dinosaur Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Hidden Ceiling': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Unlocked Chests x2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Locked Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership && items.GTGKey >= 1; }
         },
         'MQ Maze Center Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Membership && items.Hammer && items.GTGKey >= 3; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "GTGKey"
   },
   {
      name: "Spirit Temple",
      x: "02.5%",
      y: "17.0%",
      type: "dungeon",
      chestlist: {
         ['Child Switch Room']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Child 1st Floor Torches']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Child Torch Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && (items.Slingshot || items.Boomerang);
            },
         },
         'Child Climb Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2 && (items.Hookshot || items.Bow)));
            },
         },
         ['Child Lizalfos East Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Child Lizalfos North Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Large Torch Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey &&
                  (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))
                     )
                     || (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit) &&
                        items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Magic && (items.Dins || (items.Fire && items.Bow)))));
            }
         },
         ['Sun Block Room Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         },
         'Before Child IronKnuckle Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && (items.Ocarina && items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2);
            },
         },
         ['Colossus Right Hand Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (items.RequiemofSpirit && items.SpiritKey >= 2 && items.Ocarina && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.SpiritKey >= 2);
            }
         },
         ['Wolfos Lullaby Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2;
            },
         },
         ['Silver Rupee Halfpipe']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Left Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Right Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Top Right after Lullaby']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot);
            }
         },
         ['Statue\'s Hand after Lullaby']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Top Left Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && ((items.Ocarina && items.Hookshot) || items.Hookshot >= 2);
            },
         },
         ['Four Armos Side Room']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.MirrorShield && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Left Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Right Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Colossus Left Hand Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Fire Trap Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.ZeldasLullaby && items.Ocarina && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Adult Lizalfos Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && items.MirrorShield && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Twinrova']: {
            type: "bss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.MirrorShield && items.Hookshot && items.BossSpirit);
            }
         },
         'Lobby Bottom Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit) //Child Temple access
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2); // Adult Temple access
            }
         },
         'Lobby Top Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit 
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Slingshot) //Boulder and eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Bow); //Boulder and eye switch
            }
         },
         'Lobby Top Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit 
               && items.Slingshot) //Eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bow); //Eye Switch
            }
         },
         'Slug Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Glove >= 2 && items.Hammer;
            }
         },
         'Anubis Free Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit;
            }
         },
         'Anubis Fight Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.Slingshot && items.Magic && items.Dins; //Kill Anubis and long way around
            }
         },
         'Dodongo Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 1) //Child climb
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2; //Adult statue room access
            }
         },
         'Statue Room Eye Switch': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2) //Child Statue Room
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow;
            }
         },
         'Shortcut Hallway Eye Switch': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 
               && items.Magic && items.Dins && (items.Slingshot || items.Bow) ) //Child opens shortcut hallway
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && ((items.Slingshot && items.Ocarina && items.RequiemofSpirit) || items.Bow) && items.Magic && (items.Dins || (items.Bow && items.Fire)); //Adult opens
            }
         },
         'MQ Sunblock Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'Sunblock Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime && items.Boomerang) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'MQ Colossus Right Hand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 3 && items.SongofTime)
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 2; //As Adult
            }
         },
         'Dodongo Room Adult Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Statue Room Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Statue Room Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Leever Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Leever Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Child Songs Halfpipe': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Songs Halfpipe Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Lobby Bottom Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire && items.Hammer; 
            }
         },
         'Beamos Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 && items.Bombs || items.Bombchu; 
            }
         },
         'Dinalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime; //SOT puzzle in Beamos Room
            }
         },
         'Gibdo Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime && items.MirrorShield;
            }
         },
         'MQ Colossus Left Hand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Highest Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 2;
            }
         },
         'Iron Knuckle Skulltula x2': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 3;
            }
         },
         'MQ TwinRova': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && items.MirrorShield && items.SpiritKey >= 2 && items.BossSpirit;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "SpiritKey"
   },
   {
      name: "Shadow Temple",
      x: "79.7%",
      y: "19.5%",
      type: "dungeon",
      chestlist: {
         'Keese and Redead Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         'Deadhand Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         '1st Gibdos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         '1st Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         'Silver Rupee Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Like Like Visible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Like Like Invisible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Crushing Spikes Lower Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Upper Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Crushing Spikes Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Readeads and Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Single Skull Pot Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.ShadowKey >= 2 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot;
            },
         },
         'Skull Pot Bombing': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Readeads and Hint': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         '2nd Gibdos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Gibdos Hidden Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Before Boat Ride Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.ShadowKey >= 3 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove;
            },
         },
         'Floormaster Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Triple Skull Pot Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return items.ShadowKey >= 4 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby;
            },
         },
         'Burnable Spike Wall Chest x2': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Bongo Bongo': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 5 && items.BossShadow && (items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.Bow || items.Scarecrow >= 2));
            }
         },
         '1st Redead Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) //Temple access
               && items.Bombs && items.ShadowKey >= 1; //Bombwall + keydoor
            }
         },
         '1st Deadhand Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots)
               && items.Bombs && items.ShadowKey >= 1
               && items.SongofTime && items.Bow; //Block of time + eye switch
            }
         },
         'MQ 1st Gibdos Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Skulltulas and Silver Ruppees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Fall to Dock Invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'MQ Like Like Visible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'MQ Like Like Invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'Beamos Silver Rupee Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot >= 2; //Longshot requireq for a rupee
            }
         },
         'MQ Crushing Spikes Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot;
            }
         },
         'MQ Crushing Spikes Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Crushing Spikes Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Crushing Spikes Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Redeads and Silver Rupees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2;
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2 && items.Hookshot >= 2;
            }
         },
         'MQ Redeads invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         '2nd Redead Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'MQ 2nd Gibdos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'MQ Gibdos Hidden Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },'2nd Gibdos Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'Dark River Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         },
         'MQ Skull Pot Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby
               && items.SongofTime;
            }
         },
         'MQ Burnable Spike Walls Chest x2 ': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 5 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         '2nd Deadhand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         'Skulltula Near Boss Door': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         },
         'MQ Bongo Bongo': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.BossShadow;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "ShadowKey"
   },
   {
      name: "Ganon's Tower",
      x: "44.0%",
      y: "14.0%",
      type: "dungeon",
      chestlist: {
         ['Forest Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Forest Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins));
            }
         },
         ['Ice Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Ice Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Ice Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light;
            }
         },
         ['Shadow Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || 
                  items.Hookshot >= 1 || 
                  items.HoverBoots || 
                  (items.Ocarina >= 1 && items.SongofTime));
            }
         },
         ['Shadow Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || (
                     (items.Hookshot >= 1 || items.HoverBoots) && 
                     items.Magic && items.Dins) || items.Hookshot >= 2);
            }
         },
         ['Shadow Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2));
            }
         },
         ['Fire Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2;
            }
         },
         ['Spirit Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         ['Spirit Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         ['Spirit Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot >= 1;
            }
         },
         ['Light Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 3']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 4']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 5']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 6']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Lullaby Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby && items.CastleKey;
            }
         },
         ['Light Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light && items.CastleKey >= 2;
            }
         },
         ['Boss Key Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials);
            }
         },
         ['GanonDorf']: {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
         'Lower Invisible Wall Scrubs x4': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return isBridgeOpen();
            }
         },
         'MQ Check 1 ': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return true;
            },
         },
         'MQ Scrub 1 ': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return true;
            },
         },
         ['MQ GanonDorf']: {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
      requiredKey: "CastleKey"
   },
   {
      name: "The Market",
      x: "50.5%",
      y: "20.2%",
      type: "overworld",
      chestlist: {
         'Topdown to Drawbridge': {
          x: "52.5%",
          y: "27.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
         },
         'Guard/Ghostbuster House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Pottery Crate Skulltula': {
            type: "skulltula", 
            access: "simple",
            isAvailable: function () {
               return true
            }
         },
         ['10 Big Poes']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Bow && items.EponasSong && items.Bottle);
            }
         },
         'Topdown to Market': {
          x: "50.5%",
          y: "27.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
       },
       'Market to Topdown': {
          x: "52.0%",
          y: "23.4%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
         },
         'Treasure game': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Treasure Chest Mini Game']: {
            type: "chest", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Lens && items.Magic);
            }
         },
         'Bombchu Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Bombchu Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         ['Return Richard']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Back Alley House': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Slingshot Shooting': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Slingshot Mini Game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Bowling': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Bombchu Bowling 1']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Bombchu Bowling 2']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Market to Castle': {
             x: "52.5%",
            y: "19.0%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
               return true; }
         },
         'Happy Mask Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Market to Temple': {
            x: "55.0%",
            y: "22.2%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
               return true; }
         },
         'Potion Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Potion Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Bazar': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Bazaar Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Temple of Time",
      x: "55.5%",
      y: "18.2%",
      type: "overworld",
      chestlist: {
         'Temple to Market': {
            x: "56.0%",
            y: "18.6%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
          },
         'Temple Gossip 1': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Temple Gossip 2': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Temple Gossip 3': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Temple Gossip 4': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Temple of Time': {
            type: "alldoor", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Prelude Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.PreludeofLight; }
         },
         ['Song for Forest Medallion']: {
            type: "song", 
            access: "alldoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.ForestMedallion);
            }
         },
         ['Zelda\'s Secret Weapon']: {
            type: "NPC", 
            access: "alldoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.ShadowMedallion && items.SpiritMedallion);
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Hyrule Castle",
      x: "49.0%",
      y: "14.0%",
      type: "overworld",
      chestlist: {
         'Castle to Market': {
            x: "52.5%",
            y: "16.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Tree to Castle Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Malon\s Weird Egg': {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Above Malon': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Din\'s Fairy Fountain': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Dins Great Fairy': {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Castle Moat Stone': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Castle Moat Storms Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         'Moat Storms Grotto Skull': {
            type: "skulltula", 
            access: "grotto",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.Bombs
            }
         },
         'Storms Grotto Gossip': {
            type: "gossip",
            access: "grotto",
            isAvailable: function () {
               return true
            }
         },
         'Song from Impa': {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 1);
            }
         },
         'Gold Gauntlets Doorway': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby))
               }
         },
         'Gold Gauntlets Fairy' : {
            x: "55.5%",
            y: "13.5%",
            type: "NPC", 
            access: "simple",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby))
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Kakariko Village",
      x: "65.4%",
      y: "22.0%",
      type: "overworld",
      chestlist: {
         'Village to Field': {
            x: "62.0%",
            y: "24.6%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.ForestMedallion && items.FireMedallion && items.WaterMedallion);
            }
         },
         'Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Redead Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Redead Chest']: {
            type: "unique", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic));
            }
         },
         'Tower House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Behind Shop Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Tower Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Kakariko Bazar': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Bazar Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Village to Trail': {
            x: "64.2%",
            y: "22.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Potion Shop front': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Man on Roof']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Potion Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Potion Shop back': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Granny\'s Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Kakariko Open Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Village Open Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Windmill': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Windmill Song']: {
            type: "song", 
            access: "alldoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Ocarina;
            }
         },
         ['Windmill Freestanding']: {
            type: "freestanding", 
            access: "alldoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || items.Boomerang);
            }
         },
         'Village to Graveyard': {
            x: "70.0%",
            y: "27.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Archery Foundation Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Archery': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Bow Mini Game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Bow);
            }
         },
         ['Anju\'s Chickens']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Anju\'s Adult item']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         'Impa\'s House back': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Impa\'s House Freestanding']: {
            type: "freestanding", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Impa\'s House Cow Milk']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         'Impa’s Roof Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot;
            },
         },
         'Impa\'s House front': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Skull House Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Skulltula House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Skulltula House 10']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 10);
            }
         },
         ['Skulltula House 20']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 20);
            }
         },
         ['Skulltula House 30']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 30);
            }
         },
         ['Skulltula House 40']: {
            type: "NPC", 
            access: "simple",
            type: "indoor",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 40);
            }
         },
         ['Skulltula House 50']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 50);
            }
         },
         'Bottom of The Well': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Goron City",
      x: "70.0%",
      y: "06.3%",
      type: "overworld",
      chestlist: {
         'City to Trail': {
            x: "65.0%",
            y: "10.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Ruby Pedestal Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         ['Little Rolling Goron']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || items.Bow || (items.Bombchu && BombchuLogic));
            }
         },
         ['Medigoron']: {
            type: "knife", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Medigoron Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Left Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove >= 2 || items.Hammer);
            }
         },
         ['Center Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic));
            }
         },
         'Maze Crate Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bombs
            }
         },
         'Maze Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Right Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic));
            }
         },
         'Lava Cross Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         'Lava Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (items.Ocarina && items.SongofTime) || (items.Hookshot && items.GoronTunic);
            },
         },
         'City to Woods': {
            x: "69.0%",
            y: "18.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Goron Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Goron Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         ['Big Rolling Goron']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs);
            }
         },
         ['Spinning Pot Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Glove || items.Bombs) && ((items.Ocarina && items.ZeldasLullaby && items.Stick) || (items.Magic && items.Dins)));
            }
         },
         ['Darunia\'s Dance']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Ocarina && items.ZeldasLullaby && items.SariasSong);
            }
         },
         'City to Crater': {
            x: "69.0%",
            y: "09.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lost Woods",
      x: "75.3%",
      y: "47.0%",
      type: "overworld",
      chestlist: {
         'Bridge to Forest': {
            x: "72.7%",
            y: "50.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Fairy Ocarina': {
            type: "ocarina",
            access: "OWER",
            isAvailable: function () {
               return true; }
         },
         'Bridge to Field': {
            x: "69.0%",
            y: "48.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Deku Sale $40']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (items.DekuShield || items.Nuts || items.Stick || items.Bombs || (items.Bombchu && BombchuLogic) || items.KokiriSword || items.Boomerang);
            }
         },
         'Bridge Stone': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Bridge Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle;
            },
         },
         ['Skull Kid']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (items.Ocarina && items.SariasSong);
            }
         },
         'Woods to Forest': {
            x: "78.7%",
            y: "52.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Slingshot Target']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (items.Slingshot);
            }
         },
         ['Ocarina Memory Game']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (items.Ocarina);
            }
         },
         'Bomb Grotto by City': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['City Grotto Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic);
            }
         },
         'City Grotto Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Woods to City': {
            x: "80.8%",
            y: "49.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Woods to River': {
            x: "82.8%",
            y: "51.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Theatre Scrub x2': {
            type: "scrub", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            },
         },
         'Theatre Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Bean Ride Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot || items.Bombs || items.Scale;
            },
         },
         'Deku Theatre Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Deku Theater Skull Mask']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 6;
            }
         },
         ['Deku Theater Mask of Truth']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.Mask >= 12;
            }
         },
         'Bomb Grotto by Meadow': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Deku Sale Grotto $40']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && (items.DekuShield || items.Nuts || items.Stick);
            }
         },
         '2nd Scrub in Grotto': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (items.Bombs || items.Hammer);
            },
         },
         'Woods to Meadow': {
            x: "82.8%",
            y: "46.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Sacred Forest Meadow",
      x: "80.3%",
      y: "47.0%",
      type: "overworld",
      chestlist: {
         'Meadow to Woods': {
            x: "80.0%",
            y: "46.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Maze Gossip 1': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Maze Gossip 2': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword;
            }
         },
         'Minuet Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.MinuetofForest; }
         },
         'Meadow Storms Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         'Storms Grotto by Temple': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && (items.SariasSong || items.MinuetofForest);
            },
         },
         'Wolfos Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Wolfos Grotto']: {
            type: "unique", 
            access: "grotto",
            isAvailable: function () {
               return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic);
            }
         },
         'Meadow Maze Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot;
            },
         },
         'Meadow Open Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         ['Song from Saria']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return items.Mask >= 2;
            }
         },
         'Temple Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Forest Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's River",
      x: "78.7%",
      y: "29.5%",
      type: "overworld",
      chestlist: {
         'River to Field': {
            x: "70.0%",
            y: "35.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Tree by Entrance Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            type: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Storms Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && (items.Bombs || items.Bombchu || items.Scale);
            }
         },
         'Bean Salesman': {
            type: "bean", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'Frogs in the Rain': {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale)));
            }
         },
         'Frogs Mini Game': {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && items.ZeldasLullaby && items.EponasSong && items.SariasSong && items.SunsSong && items.SongofTime && items.SongofStorms));
            }
         },
         'Adult Skulltula by Grotto': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot
            }
         },
         'Open Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'River Open Grotto': {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return true
            }
         },
         'Adult above Bridge Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot
            }
         },
         'Boulder Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Freestanding Lower Ledge': {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'Above Frogs Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Child Ladder Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bombs || items.Scale
            }
         },
         'Freestanding Upper Ledge': {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && items.HoverBoots) || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'River to Woods': {
            x: "87.8%",
            y: "33.3%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Waterfall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'River to Domain': {
            x: "87.0%",
            y: "28.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's Domain",
      x: "92.9%",
      y: "34.5%",
      type: "overworld",
      chestlist: {
         'Domain to River': {
            x: "90.0%",
            y: "29.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Zora Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Zora Shop': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return true; }
         },
         'Storms Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return true; }
         },
         'Royal Zora Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Diving Mini Game']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic));
            }
         },
         ['Torch Run']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic));
            }
         },
         'Domain to Lake': {
            x: "92.9%",
            y: "32.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Frozen Waterfall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (items.MasterSword && items.Hookshot && items.ZoraLetter && (items.Bombs || items.Scale) && items.ZeldasLullaby && items.Ocarina);
            },
         },
         ['Thaw King Zora']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Bottle && items.MasterSword && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots) && ((((items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic))) || isBridgeOpen() || items.Wallet >= 3));
            }
         },
         'Domain to Fountain': {
            x: "94.9%",
            y: "22.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's Fountain",
      x: "92.9%",
      y: "28.0%",
      type: "overworld",
      chestlist: {
         'Fountain to Domain': {
            type: "entrance", 
            access: "entrance",
            x: "92.5%",
            y: "21.0%",
             isAvailable: function () {
                  return true; }
         },
         'West Fountain Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Lord Jabu Jabu\'s Belly': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         'Stand on the Log Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.ZoraLetter && items.Boomerang && (items.Bombs || items.Scale);
            },
         },
         'Tree by Great Fairy Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.ZoraLetter && ((items.Bombs && items.Ocarina && items.ZeldasLullaby) || items.Scale);
            },
         },
         'Great Fairy Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Bombable Doorway': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Farore\'s Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.ZoraLetter || OpenFountain) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Silver Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (items.MasterSword && items.Glove >= 2 && items.ZoraLetter && (items.Bombs || items.Scale) && items.ZeldasLullaby && items.Ocarina);
            },
         },
         ['Iceberg Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots);
            }
         },
         ['Under Icy Waters Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && (items.ZoraLetter || OpenFountain) && items.IronBoots && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots);
            }
         },
         'Ice Cavern': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Death Mountain Trail",
      x: "62.0%",
      y: "13.7%",
      type: "overworld",
      chestlist: {
         'Trail to Village': {
            x: "63.1%",
            y: "18.6%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Bombable Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bombs || items.Hammer
            }
         },
         'Dodongo\'s Cavern': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Cavern Roof Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic))));
            }
         },
         'Cavern Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle
            }
         },
         ['Breakable Wall Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic) || items.Glove);
            }
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Trail Storms Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Ocarina && items.SongofStorms);
            }
         },
         'Storms Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return true
            }
         },
         'Trail to City': {
            x: "62.6%",
            y: "12.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Lower Red Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hammer
            }
         },
         'Cow Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Cow Milk Grotto']: {
            type: "cow", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.EponasSong;
            }
         },
         'Upper Red Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hammer
            }
         },
         'Sumit Fairy Fountain': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Summit Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         ['Biggoron\'s Finest Work']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (items.Trade >= 1 && (items.ZoraLetter || OpenFountain) && (items.EponasSong || items.Hookshot >= 2)) || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) || items.Trade >= 9);
            }
         },
         'Trail to Crater': {
            x: "64.6%",
            y: "04.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Trail Owl': {
            x: "62.0%",
            y: "02.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Summit Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Death Mountain Crater",
      x: "65.4%",
      y: "09.0%",
      type: "overworld",
      chestlist: {
         'Crater to City': {
            x: "68.6%",
            y: "05.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Red Rock Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Red Rock Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return items.Hammer && ((items.Glove || items.Bombs || items.Bow || (items.Magic && items.Dins)) || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)));
            },
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         },
         'Bolero Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.BoleroofFire; }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Ocarina && items.BoleroofFire && items.Bottle
            }
         },
         'Fire Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Volcano Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || items.Bow || (items.Bombchu && BombchuLogic)) && ((items.Bean && items.BoleroofFire) || items.HoverBoots);
            }
         },
         'Red Rocks Doorway': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Hammer && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Bombable Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Bomb Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return true
            }
         },
         ['Crater Bombable Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic));
            }
         },
         ['Wall Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Bombs || (items.Bombchu && BombchuLogic)) ||
                  (items.MasterSword && ((items.BoleroofFire && (items.HoverBoots || items.Hookshot)) || items.Bow || items.Glove)));
            }
         },
         'Crate Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bombs;
            },
         },
         'Child Climb Summit to Crater Scrub': {
            type: "scrub", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bombs;
            },
         },
         'Cracked Wall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Crater to Trail': {
            x: "66.6%",
            y: "02.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lon Lon Ranch",
      x: "47.4%",
      y: "45.6%",
      type: "overworld",
      chestlist: {
         'Ranch to Field': {
            x: "48.4%",
            y: "38.5%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Talon\'s House': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Talon\'s Cucco game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 2;
            }
         },
         'Ranch Stables': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Stable Cow Milk 1']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Stable Cow Milk 2']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         '2nd Floor Window Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Boomerang
            }
         },
         'Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Song from Malon']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 2 && items.Ocarina;
            }
         },
         'Back of Coral Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Ranch Open Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Open Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return true;
            }
         },
         'Ranch Silo': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Silo Freestanding']: {
            type: "freestanding", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Silo Cow Milk 1']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Silo Cow Milk 2']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         'North of Silo Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Boomerang
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lake Hylia",
      x: "40.0%",
      y: "81.0%",
      type: "overworld",
      chestlist: {
         'Lake to Field': {
            x: "39.0%",
            y: "70.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Beside Lab Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle;
            }
         },
         ['Child Underwater Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Scale;
            }
         },
         'Lake to Domain': {
            x: "39.3%",
            y: "80.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Laboratory': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Lab Crate Skulltula': {
            type: "skulltula", 
            access: "simple",
            isAvailable: function () {
               return items.IronBoots && items.Hookshot;
            }
         },
         ['Diving in the Lab']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Scale >= 2 || (items.IronBoots && items.Hookshot));
            }
         },
         ['Lab Roof Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));
            }
         },
         'Lab Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Boomerang;
            }
         },
         'Lake Owl': {
            x: "32.0%",
            y: "83.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Lake Hylia Grave': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Grave Pull Scrub x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return true;
            },
         },
         'Serenade Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.SerenadeoffWater; }
         },
         'Top of Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot >= 2;
            }
         },
         'Perimeter of Lake 1': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Perimeter of Lake 2': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         'Fishing Pond': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Child Fishing']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Adult Fishing']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));
            }
         },
         ['Shoot the Sun']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Bow && items.Hookshot >= 2 && items.Scarecrow >= 2;
            }
         },
         'Fire Arrow Island Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return true;
            }
         },
         'Water Temple': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Gerudo Valley",
      x: "19.0%",
      y: "31.5%",
      type: "overworld",
      chestlist: {
         'Valley to Field': {
            x: "30.0%",
            y: "37.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Right of Plank Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Boomerang;
            },
         },
         ['Crate Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Waterfall Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         'Waterfall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return true
            }
         },
         ['Valley Cow Milk']: {
            type: "cow", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Silver Rock Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return items.Glove >= 2; }
         },
         'Above Hammer Rocks Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
         },
         ['Hammer Rocks Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && items.Hammer;
            }
         },
         'Carpenter Tent': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Behind Tent Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Storms Grotto behind Tent': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (items.EponasSong || items.Hookshot >= 2) && items.Ocarina && items.SongofStorms;
            },
         },
         'Valley to Fortress': {
            x: "20.0%",
            y: "37.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Gerudo Fortress",
      x: "15.5%",
      y: "16.4%",
      type: "overworld",
      chestlist: {
         'Fortress to Valley': {
            x: "18.0%",
            y: "31.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Fortress Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Guard Fight']: {
            type: "guard", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && smallkeys == 'Keysanity';
            }
         },
         'Fortress Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
         ['Rooftop Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && (items.HoverBoots || (items.Scarecrow >= 2 && items.Hookshot) || items.Hookshot >= 2);
            }
         },
         'Gerudo Training Grounds': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Horseback Archery 1000 pts']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         ['Horseback Archery 1500 pts']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         'Archery Target Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
         },
         'Fortress to Wasteland': {
            x: "17.0%",
            y: "23.4%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Desert Colossus",
      x: "8.4%",
      y: "15.9%",
      type: "overworld",
      chestlist: {
         'Desert to Wasteland': {
            x: "8.4%",
            y: "25.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Cracked Wall Doorway': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         'Nayru\'s Great Fairy Fountain': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return true; }
         },
         ['Nayru\'s Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Ocarina && items.ZeldasLullaby && (items.Bombs || (items.Bombchu && BombchuLogic))) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || items.RequiemofSpirit)
            }
         },
         'Water Hole Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Hookshot && (items.Membership >= 5 && (items.HoverBoots || items.Hookshot >= 2)) || (items.Ocarina && items.RequiemofSpirit);
            },
         },
         'Requiem Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.RequiemofSpirit; }
         },
         'Desert Strength Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         'Silver Rock Scrub Grotto': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return items.Glove >= 2 && ((items.Membership >= 5 && (items.HoverBoots || items.Hookshot >= 2)) || (items.Ocarina && items.RequiemofSpirit));
            },
         },
         'Northwest Desert Gossip': {
            isAvailable: function () {
               return true
            }
         },
         'Spirit Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && (((items.Ocarina && items.EponasSong) || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || (items.Ocarina && items.RequiemofSpirit));
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Bottle
            }
         },
         'Bean Ride Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && (items.Bombs || items.Scale)
            }
         },
         ['Bean to Arch Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Bean && items.Ocarina && items.RequiemofSpirit
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Graveyard",
      x: "73.7%",
      y: "19.5%",
      type: "overworld",
      chestlist: {
         'Graveyard to Village': {
            x: "72.7%",
            y: "25.5%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Dampe\'s Hut': {
            type: "simple", 
            access: "outdoor",
            isAvailable: function () {
               return true; }
         },
         ['Dampe Digging']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)));
            }
         },
         'Free Chest Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Free Chest Grave']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)));
            }
         },
         ['Magic Bean Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && (items.Bean || items.Hookshot >= 2)) || items.Boomerang);
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Dampe\'s Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Dampe Race 1']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         ['Dampe Race 2']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         'Redead Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Redead Grave Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SunsSong);
            }
         },
         'South Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Boomerang;
            },
         },
         'Royal Tomb': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return true; }
         },
         ['Composer Brothers\' Song']: {
            type: "song", 
            access: "grotto",
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         ['Royal Tomb Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Ocarina && items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         },
         'Noturne Warp': {
            type: "warp",
            access: "warp",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow
            }
         },
         'Noturne Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow
            }
         },
         'Shadow Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Haunted Wasteland",
      x: "14.0%",
      y: "25.0%",
      type: "overworld",
      chestlist: {
         'Wasteland to Fortress': {
            x: "14.0%",
            y: "23.4%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
                  return true; }
         },
         ['Carpet Salesman']: {
            type: "carpet", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2))
            }
         },
         ['Torch Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) && (items.Magic && (items.Dins || (items.Bow && items.Fire))))
            }
         },
         'Structure Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2))
            }
         },
         'Wasteland to Desert': {
            x: "11.0%",
            y: "25.0%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Hyrule Field",
      x: "54.0%",
      y: "42.0%",
      type: "overworld",
      chestlist: {
         'Ocarina of Time': {
            x: "54.3%",
            y: "28.0%",
            type: "ocarina", 
            access: "outdoor",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
               }
         },
         'Song from Zelda': {
            x: "54.3%",
            y: "28.0%",
            type: "song", 
            access: "outdoor",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
               }
         },
         'North West of Castle Grotto' : {
            x: "50.0%",
            y: "28.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'Grotto West of Castle Gate' : {
            x: "50.0%",
            y: "28.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'South East Remote Grotto' : {
            x: "60.0%",
            y: "59.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'South East Grotto' : {
            x: "60.0%",
            y: "59.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'South Open Grotto' : {
            x: "44.5%",
            y: "64.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0))
               }
         },
         'Southern Open Grotto' : {
            x: "44.5%",
            y: "64.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0))
               }
         },
         'Fenced Bomb Grotto' : {
            x: "42.0%",
            y: "64.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'Bomb Grotto Deku Sale 10$' : {
            x: "42.0%",
            y: "64.0%",
            type: "NPC", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'North West Lone Tree Grotto' : {
            x: "42.0%",
            y: "33.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'Tektite Grotto' : {
            x: "42.0%",
            y: "33.0%",
            type: "freestanding", 
            access: "grotto",
               isAvailable: function () {
               return (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (
                  ((items.Bombs || (items.Bombchu && BombchuLogic)) || (items.Hammer && items.MasterSword)) )
                  && (items.Scale >= 2 || (items.MasterSword && items.IronBoots) ) ))
               }
         },
         'Paradox Grotto' : {
            x: "36.1%",
            y: "42.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (((( (items.Bombs || (items.Bombchu && BombchuLogic))) || (items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
               }
         },
         'Web Grotto Skulltula' : {
            x: "36.1%",
            y: "42.0%",
            type: "skulltula", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Magic && ((items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || (((items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
               }
         },
         'Web Grotto Cow' : {
            x: "36.1%",
            y: "42.0%",
            type: "cow", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Magic && ((items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || (((items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
               }
         },
         'Web Grotto Gossip' : {
            x: "36.1%",
            y: "42.0%",
            type: "gossip", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Magic && ((items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || (((items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
               }
         },
         'North East Lone Tree Grotto' : {
            x: "57.3%",
            y: "26.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Bombs || (items.Bombchu && BombchuLogic)
                     ) && items.Boomerang) || ((items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && items.MasterSword && items.Hookshot) ))
               }
         },
         'Skulltula Grotto' : {
            x: "57.3%",
            y: "26.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Bombs || (items.Bombchu && BombchuLogic)
                     ) && items.Boomerang) || ((items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && items.MasterSword && items.Hookshot) ))
               }
         },
         'Fairy Fountain Grotto' : {
            x: "44.0%",
            y: "25.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
               }
         },
         'Field to Forest': {
            x: "64.0%",
            y: "44.4%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Ranch': {
            x: "48.4%",
            y: "34.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to River': {
            x: "67.6%",
            y: "38.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Village': {
            x: "60.0%",
            y: "27.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Drawbridge to Topdown': {
            x: "52.0%",
            y: "30.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Valley': {
            x: "32.0%",
            y: "42.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Lake': {
            x: "41.0%",
            y: "65.6%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
];

//define overworld chests
var chests = [
   {
      name: "Ocarina of Time",
      x: "54.3%",
      y: "28.0%",
      type: "freestanding", 
      access: "outdoor",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Grotto West of Castle Gate",
      x: "50.0%",
      y: "28.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "South East Grotto",
      x: "60.0%",
      y: "59.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Southern Open Grotto",
      x: "44.5%",
      y: "64.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Bomb Grotto Deku Sale 10$",
      x: "42.0%",
      y: "64.0%",
      type: "NPC", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Tektite Grotto",
      x: "42.0%",
      y: "33.0%",
      type: "freestanding", 
      access: "grotto",
      isAvailable: function () {
         if (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) &&
            (
               ((items.Bombs || (items.Bombchu && BombchuLogic)
                  )
                  || (items.Hammer && items.MasterSword)
               )
            )
            && (items.Scale >= 2 || (items.MasterSword && items.IronBoots)
            )
         ))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Gold Gauntlets Fairy",
      x: "55.5%",
      y: "13.5%",
      type: "NPC", 
      access: "simple",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Skulltula, Hint, Cow Milk Grotto",
      x: "36.1%",
      y: "42.0%",
      type: "skulltula", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Magic && ((items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || (((items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Skulltula Grotto",
      x: "57.3%",
      y: "26.0%",
      type: "skulltula", 
      access: "grotto",
      isAvailable: function () {
         if (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Bombs || (items.Bombchu && BombchuLogic)
               ) && items.Boomerang
            ) || ((items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)
               ) && items.MasterSword && items.Hookshot
            )
         ))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Fairy Fountain Grotto",
      x: "44.0%",
      y: "25.0%",
      type: "grotto", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Ganon\'s Castle Skulltula",
      x: "52.0%",
      y: "15.0%",
      type: "skulltula", 
      access: "outdoor",
      isAvailable: function () {
         if (items.MasterSword)
            return "available";
         return "unavailable";
      }
   },
]
