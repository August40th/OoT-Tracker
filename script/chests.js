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

// define dungeon chests
var dungeons = [
   { name: "Kokiri Forest",
      x: "78.9%",
      y: "63.9%",
      type: "overworld",
      chestlist: {
         'Kokiri Sword Chest': {
            isAvailable: function () {
               return "possible"; }
         },
         'Mido\'s House x4 Chests': {
            isAvailable: function () {
               return true; }
         },
         'Fairy Ocarina': {
            isAvailable: function () {
               return true; }
         },
         'Song of Storms Grotto': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms; }
         },
         'Link\'s House Cow Milk': {
            isAvailable: function () {
               return items.Ocarina && items.EponasSong; }
         },
      },
      skulllist: {
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle; }
         },
         'Child Know it All Bros Skulltula': {
            isAvailable: function () {
               return true; }
         },
         'Adult Twin House Roof Skulltula': {
            isAvailable: function () {
               return items.MasterSword && items.Hookshot; }
         },
      },
      shoplist: {
         'Kokiri Shop': {
            isAvailable: function () {
               return true; }
         },
         'Kokiri Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Kokiri Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Kokiri Shop 4': {
            isAvailable: function () {
               return true; }
         },
      },
      gossiplist: {
         'Infront Storms Grotto': {
            isAvailable: function () {
               return true; }
         },
         'Left of Deku Tree': {
            isAvailable: function () {
               return true; }
         },
         'Behind Deku Tree': {
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
   { name: "Deku Tree",
      x: "88.0%",
      y: "48.5%",
      type: "dungeon",
      chestlist: {
         'Lobby Chest': {
            isAvailable: function () {
               return true; }
         },
         '2nd Floor Big Chest': {
            isAvailable: function () {
               return items.DekuShield; }
         },
         '2nd Floor Side Chest': {
            isAvailable: function () {
               return items.DekuShield; }
         },
         'Top Floor Big Chest': {
            isAvailable: function () {
               return true; }
         },
         'Top Floor Side Chest': {
            isAvailable: function () {
               return true; }
         },
         'Basement Chest': {
            isAvailable: function () {
               return true; }
         },
         'Queen Gohma': {
            isAvailable: function () {
               return items.DekuShield && (items.Slingshot || (items.Stick && items.Nuts));
            }
         },
      },
      skulllist: {
         'Top Floor Skulltula': {
            isAvailable: function () {
               return true; }
         },
         'Basement 1st Skulltula': {
            isAvailable: function () {
               return true; }
         },
         'Basement 2nd Skulltula': {
            isAvailable: function () {
               return true; }
         },
         'Basement Bomb Wall Skulltula': {
            isAvailable: function () {
               return items.Boomerang && items.Bombs; }
         },
      },
      MQlist: {
         'Lobby Chest': {
            isAvailable: function () {
               return true; }
         },
         'Top Floor Torch chest': {
            isAvailable: function () {
               return true; }
         },
         'Top Floor Larva kill': {
            isAvailable: function () {
               return true; }
         },
         '2nd Floor Chest': {
            isAvailable: function () {
               return true; }
         },
         'Basement Chest 1': {
            isAvailable: function () {
               return true; }
         },
         'Spiked Log Open Chest': {
            isAvailable: function () {
               return items.Slingshot; }
         },
         'Song of Time Chest': {
            isAvailable: function () {
               return items.Slingshot && items.Ocarina && items.SongofTime; 
            }
         },
         'Queen Gohma': {
            isAvailable: function () {
               return items.DekuShield; }
         },
      },
      MQskulllist: {
         'Lobby Skull in Crate': {
            isAvailable: function () {
               return true; }
         },
         '2nd Floor Skulltule': {
            isAvailable: function () {
               return items.Bombchu; }
         },
         'Basement Ceiling Skulltule': {
            isAvailable:function () {
               return items.Boomerang && items.Ocarina && items.SongofTime;
            }
         },
         'Back Room Skulltula': {
            isAvailable: function () {
               return items.Bombs; }
         },
      },
      MQscrublist: {
         'Basement Scrub': {
            isAvailable: function () {
               return items.Slingshot; }
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
         'Lobby Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic));
            }
         },
         'Armos Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic));
            }
         },
         'Bomb Flower Platform': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic));
            }
         },
         'Top Floor Big Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic)));
            }
         },
         'End of Bridge Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Hammer && items.Bow) || (items.Bombchu && BombchuLogic)));
            }
         },
         'Chest Above King Dodongo': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && (items.Bombs || (items.Bombchu && BombchuLogic)));
            }
         },
         'King Dodongo': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.MasterSword || items.Slingshot) && ((items.Glove && (items.Bombchu && BombchuLogic)) || items.Bombs));
            }
         },
      },
      skulllist: {
         'Baby Dodongos Skulltula': {
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove;
            },
         },
         'Scarecrow Skulltula': {
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove && items.Ocarina && items.Hookshot;
            },
         },
         'Top of the Stairs Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Glove) || (items.Hammer && (items.Bow || (items.Magic && items.Dins)));
            },
         },
         'Behind Stairs Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Glove) || (items.Hammer && (items.Bow || (items.Magic && items.Dins)));
            },
         },
         'Behind Pushblocks Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Glove) && ((items.Slingshot && items.Glove) || items.Bow);
            },
         },
      },
      scrublist: {
         'Lobby Scrub': {
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove;
            },
         },
         '1F Right Scrub Room': {
            isAvailable: function () {
               return items.Bombs || items.Hammer || items.Glove;
            },
         },
         '2F Scrub Room': {
            isAvailable: function () {
               return (items.Bombs || items.Glove) && (items.Slingshot || items.Bow || items.HoverBoots) && (items.Bow || (items.Magic && items.Dins));
            },
         },
      },
      MQlist: {
         'Lobby Swith Chest': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Lobby Boulder Chest': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Teen Dodongo Chest': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Baby Gohma Chest': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Switch Puzzle Chest': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Poe fight Chest': {
            isAvailable: function () {
               return items.Bombs; }
         },
         'Chest Above Boss Room': {
            isAvailable: function () {
               return items.Bombs; }
         },
         'King Dodongo': {
            isAvailable: function () {
               return items.Bombs; }
         }
      },
      MQskulllist: {
         'Song of Time Skulltule': {
            isAvailable: function () {
               return (items.Glove || items.Bombs || items.Hammer) && items.Ocarina && items.SongofTime;
            },
         },
         'Baby Gohma Crate Skulltula': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Lower Lizalfos Skulltula': {
            isAvailable: function () {
               return items.Bombs || items.Hammer; }
         },
         '1F Scrub Room Skulltula': {
            isAvailable: function () {
               return items.Bombs && items.Boomerang; }
         },
         'Back Room Skulltula': {
            isAvailable: function () {
               return items.Bombs; }
         },
      },
      MQscrublist: {
         'Lobby Scrubs x2': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         'Stair Master Scrub': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
         '1st Floor Side Scrub': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
      },
      gossiplist: {
         'Lobby Gossip': {
            isAvailable: function () {
               return items.Glove || items.Bombs || items.Hammer; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   { name: "Jabu Jabu's Belly",
      x: "88.4%",
      y: "18.0%",
      type: "dungeon",
      chestlist: {
         'StingRay Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && (items.Slingshot || items.Boomerang || items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Tentacle Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
         'Bubble Pop Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
         'Barinade': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang;
            }
         },
      },
      skulllist: {
         'Water Switch Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Before Big Octo x2 Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang;
            }
         },
         'Before Brainade Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang;
            }
         },
      },
      scrublist: {
         'Basement Dive to Scrub': {
            isAvailable: function () {
               return ((items.Bombs && items.ZeldasLullaby && items.Ocarina) || items.Scale) && items.ZoraLetter && (items.Slingshot || items.Bombs || items.Boomerang);
            }
         },
      },
      MQlist: {
         'Lobby Switch Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Bombs;
            },
         },
         'Lobby Cow Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; 
            }
         },
         'Underwater Cow Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; }
         },
         'Elevator Room Lower Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; 
            }
         },
         'Basement Chest x2': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot; }
         },
         'Basement Open Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Basement Battle Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter; }
         },
         'Falling Like Like Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Elevator Room Upper Chest': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Cow Milk': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang && items.Ocarina && items.EponasSong; }
         },
         'Chest Near Boss Door': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Barinade': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
      },
      MQskulllist: {
         'Song of Time Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Ocarina && items.SongofTime;
            },
         },
         'Bubble Battle Skulltule': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Invisible Enemies Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Scale) && items.ZoraLetter && items.Slingshot && items.Boomerang; }
         },
         'Skulltula Near Boos Door': {
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
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Front Center Bombable': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Center Large Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Underwater Left Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Coffin Key': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Center Small Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Back Left Bombable': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Right Bottom Hidden Wall': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms;
            }
         },
         'Locked Pits': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.WellKey >= 1 || smallkeys === "Remove");
            }
         },
         'Like Like Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.WellKey >= 1 || smallkeys === "Remove");
            }
         },
         'Basement Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove);
            }
         },
         'Underwater Front Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Dead Hand': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby && (items.KokiriSword || items.Stick);
            }
         },
         ['Invisible Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.SongofStorms && items.Ocarina && items.ZeldasLullaby;
            }
         },
      },
      skulllist: {
         'West Key Door Skulltula': {
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
         'East Key Door Skulltula': {
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
         'Like Like Skulltula': {
            isAvailable: function () {
               return items.Boomerang && items.Ocarina && items.SongofStorms && (items.WellKey >= 3 || smallkeys === "Remove");
            },
         },
      },
      MQlist: {
         'Center Chest': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'Deadhand Chest': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'Deadhand Freestanding': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs; }
         },
         'Inner Room Freestanding': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby; }
         },
         'Basement Chest': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs && items.Slingshot && (items.WellKey >= 1 || smallkeys === "Remove"); }
         },
      },
      MQskulllist: {
         'Tombstone Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.Slingshot; }
         },
         'Coffin Room Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.ZeldasLullaby && items.Bombs && (items.WellKey >= 3 || smallkeys === "Remove"); }
         },
         'Basement Skulltula': {
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
         'Lobby Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot;
            }
         },
         '1st Floor Stalfos': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot;
            }
         },
         'Bubble Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Courtyard Hookshot Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Well Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Push Block Room Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Boss Key Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 2 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Floormaster Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && ((items.Bow && items.ForestKey >= 2 && items.Glove) || (items.HoverBoots && items.ForestKey));
            },
         },
         'Red Poe Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         '2nd Floor Stalfos': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Glove;
            },
         },
         'Blue Poe Chest': {
            isAvailable: function () {
               return items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Checkerboard Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Glove && (items.Bow || (items.Dins && items.Magic));
            }
         },
         'Near Boss Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Phantom Ganon': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.BossForest && items.Hookshot && items.Bow && items.Glove;
            }
         },
      },
      skulllist: {
         'Lobby Skulltula': {
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            }
         },
         'Before 1st Stalfos Skulltula': {
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         },
         'Courtyard island Skulltula': {
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && (items.Bow || items.SongofTime);
            },
         },
         'Outside Floormaster Room Skulltula': {
            isAvailable: function () {
               return (items.ForestKey >= 2 || (items.ForestKey && items.HoverBoots)) && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         },
         'Basement Skulltula': {
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && items.Bow && items.Glove;
            },
         },
      },
      MQlist: {
         'Lobby Chest': {
            isAvailable: function () {
               return items.Hookshot; }
         },
         'Wolfos Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Ocarina && items.SongofTime; }
         },
         'Courtyard Island Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Counrtyard Climb Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Bow; }
         },
         'Well Chest': {
            isAvailable: function () {
               return items.Hookshot && (items.Bow || items.IronBoots); }
         },
         'Above Well Chest': {
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2) || items.Bow); }
         },
         'Gilded Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Redead Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Red Poe Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         '2nd Floor Stalfos': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2; }
         },
         'Blue Poe Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'Courtyard Island Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Checkerboard Room Chest': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Chest Near Boss Door': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow; }
         },
         'Phantom Ganon': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow && items.BossForest; }
         },
      },
      MQskulllist: {
         '1st Hallway Skulltula': {
            isAvailable: function () {
               return items.Hookshot; }
         },
         'Push Block Room Skulltula': {
            isAvailable: function () {
               return items.Hookshot; }
         },
         'West Courtyard Skulltula': {
            isAvailable: function () {
               return items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'Well Skulltula': {
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2 && items.IronBoots) || items.Bow); 
            }
         },
         'East Courtyard Skulltula': {
            isAvailable: function () {
               return items.Hookshot && ((items.Glove && items.ForestKey >= 2 && (items.IronBoots || items.Scale >= 2)) || items.Bow); 
            }
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
            isAvailable: function () {
               return items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         },
         'Flare Dancer Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Gilded Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Lava Room Open Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot));
            }
         },
         'Lava Room Bombable Wall': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Maze Lower Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Side Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Eye Switch Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Maze Upper Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Bombable Pit': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Scarecrow Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina && items.Scarecrow >= 2;
            }
         },
         'Flame Maze Side Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Song of Time Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.FireKey >= 7 || (items.FireKey >= 6 && items.HoverBoots)) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer;
            }
         },
         'Topmost Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer);
            }
         },
         'Volvagia': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.BossFire && ((items.GoronTunic || items.Bottle) && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs)));
            }
         },
      },
      skulllist: {
         'Before 1st Fire Dancer Skulltula': {
            isAvailable: function () {
               return items.Hammer && (items.Hookshot || items.HoverBoots || items.BoleroofFire)
            }
         },
         'Song of Time Lava Room Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.SongofTime && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         'Maze Bombable Wall Skulltula': {
            isAvailable: function () {
               return (items.Bombs || items.Bombchu) && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         '1st Scarecrow Skulltula': {
            isAvailable: function () {
               return items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
         '2nd Scarecrow Skulltula': {
            isAvailable: function () {
               return items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
      },
      MQlist: {
         'Like Like Chest': {
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
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >= 1 ; //Iron Knuckle Access
            }
         },
         'Rusted Switch Chest': {
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >=1 && items.Hammer; //Switch
            }
         },
         'Lava Green Side Room Chest': {
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) ; //Lava Room and Torch
            }
         },
         'Lava Bombable Side Room': {
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
         'Bombable Shortcut Chest': {
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
         'Flare Dancer Freestanding': {
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
         'Volvagia': {
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
      MQskulllist: {
         'Lava Side Room Skulltula': {
            isAvailable: function () {
               return ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.Hammer; //Lava Room
            }
         },
         'Song of Time Climb Skulltula': {
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
         'Flame Maze Side Room': {
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
         'Highest Skulltula': {
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
         ['1st Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['White Wolfos']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Song from Sheik']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
      },
      skulllist: {
         'Above Silver Rupee Skulltula': {
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         'Above Heart Piece Skulltula': {
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         'Ice Block Puzzle Skulltula': {
            isAvailable: function () {
               return items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
      },
      MQlist: {
         'Alcove Switch Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Pilar Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Frozen Freestanding': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Stalfos Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Song from Sheik': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
      },
      MQskulllist: {
         'Red Ice Skulltula': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots) && items.SongofTime;
            }
         },
         'Scarecrow Skulltula': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Crystal Switch Skulltula': {
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
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Shell Blade Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2);
            }
         },
         'Torches Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (items.Bow || (items.Dins && items.Magic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Cracked Wall': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic))) || ((items.Scale >= 2 && items.Hookshot >= 2) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Central Pillar Basement': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.WaterKey || items.Bow) && items.IronBoots && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Central Bow Target': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Bow && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Gilded Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (((items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove) || items.HoverBoots) && (items.Hookshot >= 2 || items.HoverBoots);
            }
         },
         'Dragon Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && (((items.SongofTime && items.Bow && items.WaterKey >= 2)) || (items.ZeldasLullaby && items.Glove));
            }
         },
         'Dark Link': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2));
            }
         },
         'River Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && items.SongofTime && items.Bow;
            }
         },
         'Morpha': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot >= 2) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.BossWater;
            }
         },
      },
      skulllist: {
         'Basement Key Door to Skulltula': {
            isAvailable: function () {
               return (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby) && items.WaterKey && items.Bombs;
            }
         },
         'Before Gilded Chest Skulltula': {
            isAvailable: function () {
               return items.WaterKey && items.IronBoots && items.Hookshot && ((items.Bombs && items.Glove) || items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Top of Central Pillar Skulltula': {
            isAvailable: function () {
               return items.IronBoots && (items.WaterKey && items.Ocarina && items.ZeldasLullaby) || (items.Bow && items.Ocarina && items.ZeldasLullaby) && items.Hookshot >= 2;
            }
         },
         'Platform Room to Dark Link': {
            isAvailable: function () {
               return items.WaterKey && items.Hookshot >= 2;
            }
         },
         'River Room Skulltula': {
            isAvailable: function () {
               return items.SongofTime && items.IronBoots && items.Hookshot;
            }
         },
      },
      MQlist: {
         'Stalfos Chest': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
         'Open Wall Chest': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || 
                       (items.Scale >= 2 && items. Hookshot >= 2 
                        && items.Ocarina && items.ZeldasLullaby) //Underwater or Gold Scale & ZL
                       );
            }
         },
         'Lizalfos Chest': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2))
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches
                       ;
            }
         },
         'Central Pillar Basement': {
            isAvailable: function () {
               return (items.IronBoots && items.Hookshot >= 1 //Temple Access
                       && items.Magic && ( (items.Bow && items.Fire) || (items.Dins && items.Ocarina && items.SongofTime) ) //Torches at the top of Pillar
                       );
            }
         },
         'Dins Ontop Water Jet': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && items.Dins && items.WaterKey >= 1 //Jet room access
                       ;
            }
         },
         'Basement Crate Freestanding': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && (items.Hookshot >= 2 || items.HoverBoots) //Get over the spikes
                       ;
            }
         },
         'Morpha': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.BossWater && items.Hookshot >= 2 //Boos door access
                       ;
            }
         },
      },
      MQskulllist: {
         'Scarecrow Skulltula': {
            isAvailable: function () {
               return items.IronBoots && items.Hookshot >= 1 && items.Ocarina && items.Scarecrow >=2 && items.Magic && items.Bow && items.Fire;
            }
         },
         'Lizalfos Hallway Skulltula': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && items.Dins //Torches to enter room
                       ;
            }
         },
         'Blue Switch Skulltula': {
            isAvailable: function () {
               return (items.IronBoots || items.Scale >= 2) && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'River Skulltula': {
            isAvailable: function () {
               return ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.WaterKey >= 1 //Fight Stalfos and Dark Link
                       ;
            }
         },
         'Dodongo Skulltula': {
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
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Lobby Left Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Stalfos Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Wolfos Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Like Like Open Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 1st Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 2nd Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Invisible Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Cyclops Statue Eyes': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow && (items.SongofTime || items.HoverBoots || items.Hookshot >= 2 || (items.Hookshot));
            }
         },
         'Cyclops Room Top Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow;
            }
         },
         'Fire Enemies Clear': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Fire Enemies Fire Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Maze Right Freestanding': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Central Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Side Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Underwater Silver Rupees': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Ocarina && items.SongofTime && items.IronBoots;
            }
         },
         'Beamos Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Hidden Ceiling Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Left First Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 2 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Left Second Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 4 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Left Third Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 5 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Big Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 7 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
      },
      MQlist: {
         'Lobby Left': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Lobby Right': {
            isAvailable: function () {
               return items.Membership; }
         },
         'White Iron Knuckle': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Skulltula and Stalfos': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Silver Block Chest': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Crystal Switch Chest': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Black Iron Knuckle': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Fire Circle Chest': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Underwater Silver Rupees': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Right Chest x2': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Dinosaur Room': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Hidden Ceiling': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Unlocked Chests x2': {
            isAvailable: function () {
               return items.Membership; }
         },
         'Maze Left Locked Chest': {
            isAvailable: function () {
               return items.Membership && items.GTGKey >= 1; }
         },
         'Maze Left Final Chest': {
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
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Child 1st Floor Torches']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Child Lizalfos East Chest']: {
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Child Lizalfos North Chest']: {
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Large Torch Chest']: {
            isAvailable: function () {
               return items.SpiritKey &&
                  (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))
                     )
                     || (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit) &&
                        items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Magic && (items.Dins || (items.Fire && items.Bow)))));
            }
         },
         ['Sun Block Room Chest']: {
            isAvailable: function () {
               return items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         },
         ['Colossus Right Hand Chest']: {
            isAvailable: function () {
               return (items.RequiemofSpirit && items.SpiritKey >= 2 && items.Ocarina && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.SpiritKey >= 2);
            }
         },
         ['Wolfos Lullaby Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         ['Silver Rupee Halfpipe']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Left Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Right Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Statue\'s Hand after Lullaby']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         ['Top Right after Lullaby']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot);
            }
         },
         ['Four Armos Side Room']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.MirrorShield && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Left Invisible Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Right Invisible Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Colossus Left Hand Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Boss Key Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.ZeldasLullaby && items.Ocarina && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Adult Lizalfos Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && items.MirrorShield && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Twinrova']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.MirrorShield && items.Hookshot && items.BossSpirit);
            }
         },
      },
      skulllist: {
         'Child Torch Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && (items.Slingshot || items.Boomerang);
            },
         },
         'Child Climb Skulltula': {
            isAvailable: function () {
               return items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2 && (items.Hookshot || items.Bow)));
            },
         },
         'Before Child IronKnuckle Skulltula': {
            isAvailable: function () {
               return items.SpiritKey && (items.Ocarina && items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2);
            },
         },
         'Song of Time Skulltula': {
            isAvailable: function () {
               return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2;
            },
         },
         'Top Left Scarecrow Skulltula': {
            isAvailable: function () {
               return items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && ((items.Ocarina && items.Hookshot) || items.Hookshot >= 2);
            },
         },
      },
      MQlist: {
         'Lobby Bottom Left': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit) //Child Temple access
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2); // Adult Temple access
            }
         },
         'Lobby Top Left': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit 
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Slingshot) //Boulder and eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Bow); //Boulder and eye switch
            }
         },
         'Lobby Top Right': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit 
               && items.Slingshot) //Eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bow); //Eye Switch
            }
         },
         'Slug Room Chest': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Glove >= 2 && items.Hammer;
            }
         },
         'Anubis Free Chest': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit;
            }
         },
         'Anubis Chest': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.Slingshot && items.Magic && items.Dins; //Kill Anubis and long way around
            }
         },
         'Dodongo Chest': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 1) //Child climb
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2; //Adult statue room access
            }
         },
         'Statue Room Eye Switch': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2) //Child Statue Room
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow;
            }
         },
         'Shortcut Hallway Eye Switch': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 
               && items.Magic && items.Dins && (items.Slingshot || items.Bow) ) //Child opens shortcut hallway
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && ((items.Slingshot && items.Ocarina && items.RequiemofSpirit) || items.Bow) && items.Magic && (items.Dins || (items.Bow && items.Fire)); //Adult opens
            }
         },
         'Sunblock Chest': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'Colossus Right Hand': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 3 && items.SongofTime)
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 2; //As Adult
            }
         },
         'Dodongo Room Adult Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Statue Room Lower Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Statue Room Upper Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Leever Room Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Child Songs Halfpipe': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Lobby Bottom Right': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire && items.Hammer; 
            }
         },
         'Beamos Room Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 && items.Bombs || items.Bombchu; 
            }
         },
         'Dinalfos Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime; //SOT puzzle in Beamos Room
            }
         },
         'Gibdo Room Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime && items.MirrorShield;
            }
         },
         'Colossus Left Hand': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Highest Chest': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 2;
            }
         },
         'TwinRova': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && items.MirrorShield && items.SpiritKey >= 2 && items.BossSpirit;
            }
         },
      },
      MQskulllist: {
         'Sunblock Room Skulltula': {
            isAvailable: function () {
               return (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime && items.Boomerang) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'Leever Room Skulltula': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Songs Halfpipe Skulltula': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Iron Knuckle Skulltula x2': {
            isAvailable: function () {
               return (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 3;
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
         'Keese and Redead Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         'Deadhand Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         '1st Gibdos Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         '1st Silver Rupees': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         'Like Like Visible Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Like Like Invisible Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Lower Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Upper Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Crushing Spikes Switch Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Readeads and Silver Rupees': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Skull Pot Bombing': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Readead and Hint': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         '2nd Gibdos Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Gibdos Hidden Chest': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Floormaster Room': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Burnable Spike Wall Chest x2': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Bongo Bongo': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 5 && items.BossShadow && (items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.Bow || items.Scarecrow >= 2));
            }
         },
      },
      skulllist: {
         'Invisible Blades Skulltula': {
            isAvailable: function () {
               return items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Crushing Spikes Skulltula': {
            isAvailable: function () {
               return items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Single Skull Pot Skulltula': {
            isAvailable: function () {
               return items.ShadowKey >= 2 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot;
            },
         },
         'Before Boat Ride Skulltula': {
            isAvailable: function () {
               return items.ShadowKey >= 3 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove;
            },
         },
         'Triple Skull Pot Skulltula': {
            isAvailable: function () {
               return items.ShadowKey >= 4 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby;
            },
         },
      },
      MQlist: {
         '1st Redead Room': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) //Temple access
               && items.Bombs && items.ShadowKey >= 1; //Bombwall + keydoor
            }
         },
         '1st Deadhand Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots)
               && items.Bombs && items.ShadowKey >= 1
               && items.SongofTime && items.Bow; //Block of time + eye switch
            }
         },
         '1st Gibdos Room': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Skulltulas and Siler Ruppees': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Fall to Dock Invisible Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Like Like Visible Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'Like Like Invisible Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'Beamos Silver Rupee Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot >= 2; //Longshot requireq for a rupee
            }
         },
         'Crushing Spikes Lower Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'Crushing Spikes Upper Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'Crushing Spikes Switch Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'Redeads and Silver Rupees': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2;
            }
         },
         'Stalfos Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2 && items.Hookshot >= 2;
            }
         },
         'Redeads invisible Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         '2nd Gibdos Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'Gibdos Hidden Chest': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'Skull Pot Freestanding': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby
               && items.SongofTime;
            }
         },
         'Burnable Spike Walls Chest x2 ': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 5 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         '2nd Deadhand': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         'Bongo Bongo': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.BossShadow;
            }
         },
      },
      MQskulllist: {
         'Crushing Spikes Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot;
            }
         },
         '2nd Redead Room Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         '2nd Gibdos Room Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'Dark River Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         },
         'Skulltula Near Boss Door': {
            isAvailable: function () {
               return items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
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
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Ice Chests x2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Spirit Chest x2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu && BombchuLogic);
            }
         },
         ['Shadow Chests x2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || items.Hookshot >= 2) && items.HoverBoots;
            }
         },
         ['Light Chests x6']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Trial Invisible CHest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Trial Lullaby Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby && items.CastleKey;
            }
         },
         ['Boss Key Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials);
            }
         },
         ['GanonDorf']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
      },
      scrublist: {
         'Lower Invisible Wall Scrubs x4': {
            isAvailable: function () {
               return isBridgeOpen();
            }
         },
      },
      MQlist: {
         'Check 1 ': {
            isAvailable: function () {
               return true;
            },
         },
      },
      MQscrublist: {
         'Scrub 1 ': {
            isAvailable: function () {
               return true;
            },
         },
      },
      triallist: {
         ['Forest Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins));
            }
         },
         ['Fire Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2;
            }
         },
         ['Water Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light;
            }
         },
         ['Shadow Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2));
            }
         },
         ['Spirit Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot;
            }
         },
         ['Light Trial Clear']: {
            isAvailable: function () {
               return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light && items.CastleKey >= 2;
            }
         },
      },
      isBeatable: function () {
         return generalCanGetChest(this.trials) && items.BossCastle;
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
         ['Slingshot Mini Game']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Return Richard']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Bombchu Bowling 1']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Bombchu Bowling 2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Treasure Chest Mini Game']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Lens && items.Magic);
            }
         },
         ['10 Big Poes']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Bow && items.EponasSong && items.Bottle);
            }
         },
      },
      skulllist: {
         'Pottery Crate Skulltula': {
            isAvailable: function () {
               return true
            }
         },
      },
      shoplist: {
         'Potion Shop': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 4': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 4': {
            isAvailable: function () {
               return true; }
         },
         'Bombchu Shop': {
            isAvailable: function () {
               return true; }
         },
         'Bombchu Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Bombchu Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Bombchu Shop 4': {
            isAvailable: function () {
               return true; }
         },
      },
      gossiplist: {
         'Outside Temple of Time x4': {
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
      name: "Temple of Time",
      x: "55.5%",
      y: "18.2%",
      type: "overworld",
      chestlist: {
         ['Prelude of Light']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.ForestMedallion);
            }
         },
         ['Zelda\'s Secret Weapon']: {
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
         ['Malon\s Weird Egg']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Song from Impa']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 1);
            }
         },
         ['Dins Great Fairy Fountain']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
      },
      skulllist: {
         'Tree to Castle Skulltula': {
            isAvailable: function () {
               return true
            }
         },
         'Castle Moat Storms Grotto': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && items.Bombs
            }
         },
      },
      gossiplist: {
         'Above Malon': {
            isAvailable: function () {
               return true
            }
         },
         'Castle Moat Stone': {
            isAvailable: function () {
               return true
            }
         },
         'Storms Grotto Stone': {
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
      name: "Kakariko Village",
      x: "65.4%",
      y: "22.0%",
      type: "overworld",
      chestlist: {
         ['Skulltula House 10']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 10);
            }
         },
         ['Skulltula House 20']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 20);
            }
         },
         ['Skulltula House 30']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 30);
            }
         },
         ['Skulltula House 40']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 40);
            }
         },
         ['Skulltula House 50']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Skulltula >= 50);
            }
         },
         ['Anju\'s Chickens']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Man on Roof']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Open Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Kakariko Redead Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic));
            }
         },
         ['Impa\'s House Freestanding']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Impa\'s House Cow Milk']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Anju\'s Adult item']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         ['Windmill Song']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Ocarina;
            }
         },
         ['Windmill Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || items.Boomerang);
            }
         },
         ['Bow Mini Game']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Bow);
            }
         },
         ['Nocturne of Shadow']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.ForestMedallion && items.FireMedallion && items.WaterMedallion);
            }
         },
      },
      skulllist: {
         'Tree Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
         'Behind Shop Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
         'Tower Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
         'Archery Foundation Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
         'Back of Skulltula House Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
         'Impa’s Roof Skulltula': {
            isAvailable: function () {
               return items.Hookshot;
            },
         },
      },
      shoplist: {
         'Potion Shop': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 4': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Bazaar Shop 4': {
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
         ['Link the Goron']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || items.Bow || (items.Bombchu && BombchuLogic));
            }
         },
         ['Medigoron']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Left Boulder Maze Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove >= 2 || items.Hammer);
            }
         },
         ['Center Boulder Maze Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic));
            }
         },
         ['Right Boulder Maze Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic));
            }
         },
         ['Big Rolling Goron']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs);
            }
         },
         ['Spinning Pot Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Glove || items.Bombs) && ((items.Ocarina && items.ZeldasLullaby && items.Stick) || (items.Magic && items.Dins)));
            }
         },
         ['Darunia\'s Dance']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Ocarina && items.ZeldasLullaby && items.SariasSong);
            }
         },
      },
      skulllist: {
         'Rock Maze Crate Skulltula': {
            isAvailable: function () {
               return items.Bombs
            }
         },
         'Ruby Pedestal Skulltula': {
            isAvailable: function () {
               return true;
            },
         },
      },
      scrublist: {
         'Across the Lava Scrubs x3': {
            isAvailable: function () {
               return (items.Ocarina && items.SongofTime) || (items.Hookshot && items.GoronTunic);
            },
         },
      },
      shoplist: {
         'Goron Shop': {
            isAvailable: function () {
               return true; }
         },
         'Goron Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Goron Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Goron Shop 4': {
            isAvailable: function () {
               return true; }
         },
      },
      gossiplist: {
         'Boulder Maze Gossip': {
            isAvailable: function () {
               return true
            }
         },
         'Beside Medigoron': {
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
      name: "Lost Woods",
      x: "75.3%",
      y: "47.0%",
      type: "overworld",
      chestlist: {
         ['Deku Sale $40']: {
            isAvailable: function () {
               return (items.DekuShield || items.Nuts || items.Stick || items.Bombs || (items.Bombchu && BombchuLogic) || items.KokiriSword || items.Boomerang);
            }
         },
         ['Skull Kid']: {
            isAvailable: function () {
               return (items.Ocarina && items.SariasSong);
            }
         },
         ['Ocarina Memory Game']: {
            isAvailable: function () {
               return (items.Ocarina);
            }
         },
         ['Slingshot Target']: {
            isAvailable: function () {
               return (items.Slingshot);
            }
         },
         ['Bomb Grotto Chest']: {
            isAvailable: function () {
               return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic);
            }
         },
         ['Deku Sale Grotto $40']: {
            isAvailable: function () {
               return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && (items.DekuShield || items.Nuts || items.Stick);
            }
         },
         ['Deku Theater Skull Mask']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 6;
            }
         },
         ['Deku Theater Mask of Truth']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.Mask >= 12;
            }
         },
      },
      skulllist: {
         'Bridge Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Theatre Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Bean Ride Skulltula': {
            isAvailable: function () {
               return items.Hookshot || items.Bombs || items.Scale;
            },
         },
      },
      scrublist: {
         '2nd Scrub in Grotto': {
            isAvailable: function () {
               return (items.Bombs || items.Hammer);
            },
         },
         'Outside Deku Theatre x2': {
            isAvailable: function () {
               return true;
            },
         },
      },
      gossiplist: {
         'Bridge Stone': {
            isAvailable: function () {
               return true
            }
         },
         'Grotto Stone': {
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
      name: "Sacred Forest Meadow",
      x: "80.3%",
      y: "47.0%",
      type: "overworld",
      chestlist: {
         ['Minuet of Forest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword;
            }
         },
         ['Wolfos Grotto']: {
            isAvailable: function () {
               return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic);
            }
         },
         ['Saria\'s Song']: {
            isAvailable: function () {
               return items.Mask >= 2;
            }
         },
         ['Fairy Fountain Grotto']: {
            isAvailable: function () {
               return items.Mask >= 2;
            }
         },
      },
      skulllist: {
         'Meadow Maze Skulltula': {
            isAvailable: function () {
               return items.Hookshot;
            },
         },
      },
      scrublist: {
         'Storms Grotto by Temple': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && (items.SariasSong || items.MinuetofForest);
            },
         },
      },
      gossiplist: {
         'Temple Entrance': {
            isAvailable: function () {
               return true
            }
         },
         'Ontop Maze x2': {
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
      name: "Zora's Domain",
      x: "92.9%",
      y: "34.5%",
      type: "overworld",
      chestlist: {
         ['Diving Mini Game']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic));
            }
         },
         ['Torch Run']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic));
            }
         },
         ['Storms Fairy Fountain Grotto']: {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) || (items.MasterSword && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby)));
            }
         },
         ['Thaw King Zora']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Bottle && items.MasterSword && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots) && ((((items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic))) || isBridgeOpen() || items.Wallet >= 3));
            }
         },
      },
      skulllist: {
         'Frozen Waterfall Skulltula': {
            isAvailable: function () {
               return (items.MasterSword && items.Hookshot && items.ZoraLetter && (items.Bombs || items.Scale) && items.ZeldasLullaby && items.Ocarina);
            },
         },
      },
      shoplist: {
         'Zora Shop': {
            isAvailable: function () {
               return true; }
         },
         'Zora Shop 2': {
            isAvailable: function () {
               return true; }
         },
         'Zora Shop 3': {
            isAvailable: function () {
               return true; }
         },
         'Potion Shop 4': {
            isAvailable: function () {
               return true; }
         },
      },
      gossiplist: {
         'Infront King Zora': {
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
      name: "Zora's Fountain",
      x: "92.9%",
      y: "28.0%",
      type: "overworld",
      chestlist: {
         ['Zora Fairy Fountain']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.ZoraLetter || OpenFountain) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         ['Iceberg Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots);
            }
         },
         ['Underwater Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && (items.ZoraLetter || OpenFountain) && items.IronBoots && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots);
            }
         },
      },
      skulllist: {
         'Tree by Great Fairy Skulltula': {
            isAvailable: function () {
               return items.ZoraLetter && ((items.Bombs && items.Ocarina && items.ZeldasLullaby) || items.Scale);
            },
         },
         'Stand on the Log Skulltula': {
            isAvailable: function () {
               return items.ZoraLetter && items.Boomerang && (items.Bombs || items.Scale);
            },
         },
         'Silver Rock Skulltula': {
            isAvailable: function () {
               return (items.MasterSword && items.Glove >= 2 && items.ZoraLetter && (items.Bombs || items.Scale) && items.ZeldasLullaby && items.Ocarina);
            },
         },
      },
      gossiplist: {
         'West Fountain Stone': {
            isAvailable: function () {
               return true
            }
         },
         'Great Fairy Stone': {
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
      name: "Death Mountain Trail",
      x: "62.0%",
      y: "13.7%",
      type: "overworld",
      chestlist: {
         ['Cavern Roof Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic))));
            }
         },
         ['Breakable Wall Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic) || items.Glove);
            }
         },
         ['Storms Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Ocarina && items.SongofStorms);
            }
         },
         ['Summit Fairy Fountain']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         ['Biggoron\'s Finest Work']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (items.Trade >= 1 && (items.ZoraLetter || OpenFountain) && (items.EponasSong || items.Hookshot >= 2)) || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) || items.Trade >= 9);
            }
         },
         ['Cow Milk Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.EponasSong;
            }
         },
      },
      skulllist: {
         'Bombable Wall Skulltula': {
            isAvailable: function () {
               return items.Bombs || items.Hammer
            }
         },
         'Cavern Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle
            }
         },
         'Hammer Rock 1 Skulltula': {
            isAvailable: function () {
               return items.Hammer
            }
         },
         'Hammer Rock 2 Skulltula': {
            isAvailable: function () {
               return items.Hammer
            }
         },
      },
      gossiplist: {
         'Under Summit Fairy': {
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
         ['Bolero of Fire']: {
            isAvailable: function () {
               return items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         },
         ['Bean Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Glove || items.Bombs || items.Bow || (items.Bombchu && BombchuLogic)) && ((items.Bean && items.BoleroofFire) || items.HoverBoots);
            }
         },
         ['Fairy Fountain']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Hammer && items.Ocarina && items.ZeldasLullaby);
            }
         },
         ['Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic));
            }
         },
         ['Wall Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (OpenGate == 1 || (OpenGate == 0 && (items.Mask >= 1 || items.MasterSword || items.Bombs || (items.Dins && items.Magic) || (items.Bombchu && BombchuLogic)))) && ((items.Bombs || (items.Bombchu && BombchuLogic)) ||
                  (items.MasterSword && ((items.BoleroofFire && (items.HoverBoots || items.Hookshot)) || items.Bow || items.Glove)));
            }
         },
      },
      skulllist: {
         'Crate Skulltula': {
            isAvailable: function () {
               return items.Bombs;
            },
         },
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.BoleroofFire && items.Bottle
            }
         },
      },
      scrublist: {
         'Child Climb Summit to Crater Scrub': {
            isAvailable: function () {
               return items.Bombs;
            },
         },
         'Hammer Rock Grotto Scrubs x3': {
            isAvailable: function () {
               return items.Hammer && ((items.Glove || items.Bombs || items.Bow || (items.Magic && items.Dins)) || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)));
            },
         },
      },
      gossiplist: {
         'Cracked wall': {
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
      name: "Lon Lon Ranch",
      x: "47.4%",
      y: "45.6%",
      type: "overworld",
      chestlist: {
         ['Talon\'s Cucco game']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 2;
            }
         },
         ['Stable Cow Milk 1']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Stable Cow Milk 2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Song from Malon']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Mask >= 2 && items.Ocarina;
            }
         },
         ['Silo Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Silo Cow Milk 1']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Silo Cow Milk 2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Race Ingo']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.EponasSong && items.Ocarina;
            }
         },
      },
      skulllist: {
         'Tree Skulltula': {
            isAvailable: function () {
               return true
            }
         },
         'Back of Coral Skulltula': {
            isAvailable: function () {
               return true
            }
         },
         '2nd Floor Window Skulltula': {
            isAvailable: function () {
               return items.Boomerang
            }
         },
         'East of Silo Skulltula': {
            isAvailable: function () {
               return items.Boomerang
            }
         },
      },
      scrublist: {
         'Open Grotto Scrubs x3': {
            isAvailable: function () {
               return true;
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
      name: "Zora's River",
      x: "78.7%",
      y: "29.5%",
      type: "overworld",
      chestlist: {
         'River Heart Piece 1': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'River Open Grotto': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'Fairy Fountain Grotto': {
            isAvailable: function () {
               return (items.MasterSword && items.Hammer) || items.Bombs || (items.Bombchu && BombchuLogic);
            }
         },
         'River Heart Piece 2': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && items.HoverBoots) || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         },
         'Frogs in the Rain': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale)));
            }
         },
         'Frogs Mini Game': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && items.ZeldasLullaby && items.EponasSong && items.SariasSong && items.SunsSong && items.SongofTime && items.SongofStorms));
            }
         },
         'Bean Salesman': {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale));
            }
         }
      },
      skulllist: {
         'Tree by entrance Skulltula': {
            isAvailable: function () {
               return true
            }
         },
         'Adult Skulltula by Grotto': {
            isAvailable: function () {
               return items.Hookshot
            }
         },
         'Adult above Bridge Skulltula': {
            isAvailable: function () {
               return items.Hookshot
            }
         },
         'Child Ladder Skulltula': {
            isAvailable: function () {
               return items.Bombs || items.Scale
            }
         },
      },
      scrublist: {
         'Storms Grotto Scrubs': {
            isAvailable: function () {
               return items.Ocarina && items.SongofStorms && (items.Bombs || items.Bombchu || items.Scale);
            }
         },
      },
      gossiplist: {
         'Above Frogs': {
            isAvailable: function () {
               return true
            }
         },
         'Base of the Waterfall': {
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
      name: "Lake Hylia",
      x: "40.0%",
      y: "81.0%",
      type: "overworld",
      chestlist: {
         ['Child Fishing']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Silver Scale item']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Scale;
            }
         },
         ['Diving in the Lab']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Scale >= 2 || (items.IronBoots && items.Hookshot));
            }
         },
         ['Lab Roof Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));
            }
         },
         ['Adult Fishing']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));
            }
         },
         ['Shoot the Sun']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Bow && items.Hookshot >= 2 && items.Scarecrow >= 2;
            }
         },
      },
      skulllist: {
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle
            }
         },
         'Lab Wall Skulltula': {
            isAvailable: function () {
               return items.Boomerang
            }
         },
         'Fire Arrow Island Skulltula': {
            isAvailable: function () {
               return true
            }
         },
         'Top of Tree Skulltula': {
            isAvailable: function () {
               return items.Hookshot >= 2
            }
         },
         'Lab Crate Skulltula': {
            isAvailable: function () {
               return items.IronBoots && items.Hookshot
            }
         },
      },
      scrublist: {
         'Grave Pull Scrub Grotto': {
            isAvailable: function () {
               return true;
            },
         },
      },
      gossiplist: {
         'Beside Lab Stone': {
            isAvailable: function () {
               return true
            }
         },
         'Perimeter of Lake x2': {
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
      name: "Gerudo Valley",
      x: "19.0%",
      y: "31.5%",
      type: "overworld",
      chestlist: {
         ['Crate Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Waterfall Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0));
            }
         },
         ['Valley Cow Milk 1']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.EponasSong;
            }
         },
         ['Hammer Rocks Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && items.Hammer;
            }
         },
         ['Octorok Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Glove >= 2;
            }
         },
      },
      skulllist: {
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'Right of Plank Skulltula': {
            isAvailable: function () {
               return items.Boomerang;
            },
         },
         'Above Hammer Rocks Skulltula': {
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
         },
         'Behind Tent Skulltula': {
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
         },
      },
      scrublist: {
         'Storms Grotto behind Tent': {
            isAvailable: function () {
               return (items.EponasSong || items.Hookshot >= 2) && items.Ocarina && items.SongofStorms;
            },
         },
      },
      gossiplist: {
         'Base of the Waterfall': {
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
      name: "Gerudo Fortress",
      x: "15.5%",
      y: "16.4%",
      type: "overworld",
      chestlist: {
         ['Guard Fight']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && Keysanity;
            }
         },
         ['Guard Fight 2']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && Keysanity;
            }
         },
         ['Guard Fight 3']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && Keysanity;
            }
         },
         ['Guard Fight 4']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && Keysanity;
            }
         },
         ['Rooftop Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && (items.HoverBoots || (items.Scarecrow >= 2 && items.Hookshot) || items.Hookshot >= 2);
            }
         },
         ['Storms Fairy Fountain Grotto']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && (items.HoverBoots || (items.Scarecrow >= 2 && items.Hookshot) || items.Hookshot >= 2) && items.Ocarina && items.SongofStorms;
            }
         },
         ['Horseback Archery 1000 pts']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         ['Horseback Archery 1500 pts']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
      },
      keysanity: {
         'Fortress Guard 1': {
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
         'Fortress Guard 2': {
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
         'Fortress Guard 3': {
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
         'Fortress Guard 4': {
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
      },
      skulllist: {
         'Gerudo Fortress Skulltula': {
            isAvailable: function () {
               return (items.Ocarina && items.EponasSong) || items.Hookshot >= 2;
            },
         },
         'Horse Archery Target Skulltula': {
            isAvailable: function () {
               return items.Hookshot && ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2);
            },
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
         ['Requiem of Spirit']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && (((items.Ocarina && items.EponasSong) || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || (items.Ocarina && items.RequiemofSpirit));
            }
         },
         ['Desert Bean Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Bean && items.Ocarina && items.RequiemofSpirit
            }
         },
         ['Desert Fairy Fountain']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Ocarina && items.ZeldasLullaby && (items.Bombs || (items.Bombchu && BombchuLogic))) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || items.RequiemofSpirit)
            }
         },
      },
      skulllist: {
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && items.Bottle
            }
         },
         'Bean Ride Skulltula': {
            isAvailable: function () {
               return items.Ocarina && items.RequiemofSpirit && (items.Bombs || items.Scale)
            }
         },
         'Water Hole Tree Skulltula': {
            isAvailable: function () {
               return items.Hookshot && (items.Membership >= 5 && (items.HoverBoots || items.Hookshot >= 2)) || (items.Ocarina && items.RequiemofSpirit);
            },
         },
      },
      scrublist: {
         'Silver Rock Scrub Grotto': {
            isAvailable: function () {
               return items.Glove >= 2 && ((items.Membership >= 5 && (items.HoverBoots || items.Hookshot >= 2)) || (items.Ocarina && items.RequiemofSpirit));
            },
         },
      },
      gossiplist: {
         'Northwest Desert Stone': {
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
      name: "Graveyard",
      x: "73.7%",
      y: "19.5%",
      type: "overworld",
      chestlist: {
         ['Dampe Digging']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)));
            }
         },
         ['Vanilla Shield Grave']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)));
            }
         },
         ['Magic Bean Heart Piece']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.MasterSword && (items.Bean || items.Hookshot >= 2)) || items.Boomerang);
            }
         },
         ['Dampe Race 1']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         ['Dampe Race 2']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword);
            }
         },
         ['Redead Grave']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.SunsSong);
            }
         },
         ['Composer Brothers\' Song']: {
            isAvailable: function () {
               return ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         ['Royal Tomb Chest']: {
            isAvailable: function () {
               return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Ocarina && items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         },
      },
      skulllist: {
         'Soil Patch Skulltula': {
            isAvailable: function () {
               return items.Bottle;
            },
         },
         'North Wall Skulltula': {
            isAvailable: function () {
               return items.Boomerang;
            },
         },
      },
      gossiplist: {
         'Shadow Temple Entrance': {
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
];

//define overworld chests
var chests = [
   {
      name: "Ocarina of Time",
      x: "54.3%",
      y: "28.0%",
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
      name: "Haunted Wasteland Chest",
      x: "14.0%",
      y: "25.0%",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) && (items.Magic && (items.Dins || (items.Bow && items.Fire)))))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Gold Gauntlets Fairy",
      x: "55.5%",
      y: "13.5%",
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
      isAvailable: function () {
         if (items.MasterSword)
            return "available";
         return "unavailable";
      }
   },
]
