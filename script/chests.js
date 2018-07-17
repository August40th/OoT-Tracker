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
    {
        name: "Kokiri Forest",
        x: "75.0%",
        y: "60.0%",
        chestlist: {
            ['Kokiri Sword Chest']: { isAvailable: function() {return true} },
            ['Midos House x4 Chests']: { isAvailable: function() {return true} },
            ['Song of Storms Grotto']: { isAvailable: function() {return items.SongofStorms;} },
        },
        isBeatable: function(){
            if( items.SongofStorms) {
                if (this.canGetChest() == 'available')
                    return 'avialable';
                return 'possible';
            }
            else
                return "unavailable";
    },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
},
    {
        name: "Deku Tree",
        x: "88.0%",
        y: "48.5%",
        chestlist: {
            ['Lobby Chest']: { isAvailable: function () {return true} },
            ['Slingshot Chest']: { isAvailable: function () {return items.DekuShield;} },
            ['Slingshot Room Side Chest']: { isAvailable: function () {return items.DekuShield;} },
            ['Compass Chest']: { isAvailable: function () {return true} },
            ['Compass Room Side Chest']: { isAvailable: function () {return true} },
            ['Basement Chest']: { isAvailable: function () {return true} },
            ['Gohma']: { isAvailable: function () {return items.DekuShield && (items.Slingshot || (items.Stick && items.Nuts));} },
        },
        isBeatable: function(){
            if(items.DekuShield && (items.Slingshot || (items.Stick && items.Nuts))) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Water Temple",
        x: "36.1%",
        y: "91.0%",
        chestlist: {
            ['Compass Chest']: { isAvailable: function () {
                return items.ZoraTunic && items.IronBoots && items.Hookshot; } },
            ['Map Chest']: { isAvailable: function () {
                return items.IronBoots && items.Hookshot; } },
            ['Torches Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && (items.Bow || (items.Dins && items.Magic)) && items.ZeldasLullaby; } },
            ['Dragon Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby && items.SongofTime && items.Bow; } },
            ['Central Pillar Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby ; } },
            ['Cracked Wall Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.Bombs && items.ZeldasLullaby; } },
            ['Central Bow Target Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.Bow && items.Glove && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2); } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby && ((items.Bombs && items.Glove) || items.HoverBoots) && items.Hookshot >= 2; } },
            ['Dark Link Chest']: { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby; } },
            ['River Chest']: { isAvailable:  function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.SongofTime && items.Bow && items.ZeldasLullaby; } },
            ['Morpha']: { isAvailable:  function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot >= 2); } },
        },
        isBeatable: function(){
            if(items.IronBoots && items.Hookshot >= 2) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Gerudo Training Grounds",
        x: "20.7%",
        y: "16.4%",
        chestlist: {
            ['Lobby Right Chest']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow; } },
            ['Lobby Left Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow ; } },
            ['Stalfos Room']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2); } },
            ['Wolfos Room']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2); } },
            ['Silver Block Open Chest']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2; } },
            ['Silver Block Like Like 1']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2; } },
            ['Silver Block Like Like 2 ']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2; } },
            ['Silver Block Like Like 3 Invisible Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2; } },
            ['Shoot Cyclops Statue/s Eye']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow ; } },
            ['Near Scarecrow Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow; } },
            ['Hammer Room Clear Chest']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2); } },
            ['Hammer Room Switch Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2); } },
            ['Maze Right Center Chest']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.SongofTime || items.GTGKey >= 2); } },
            ['Maze Right Side Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.SongofTime || items.GTGKey >= 2); } },
            ['Maze Right Open Key']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.SongofTime || items.GTGKey >= 2); } },
            ['Underwater Silver Rupee Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.IronBoots && (items.HoverBoots || items.SongofTime); } },
            ['Beamos & Lizalfos Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bombs || items.Bombchu); } },
            ['Maze Left Keys x1 Hidden Ceiling Chest']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.GTGKey >= 1 ; } },
            ['Maze Left Chest Keys x2']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.GTGKey >= 2; } },
            ['Maze Left Chest Keys x3']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.GTGKey >= 3; } },
            ['Maze Left Chest Keys x5']: { isAvailable:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.GTGKey >= 5; } },
            ['Maze Final Chest Keys x7']: { isAvailable: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.GTGKey >= 7; } },    
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Spirit Temple",
        x: "02.5%",
        y: "17.0%",
        chestlist: {
            ['Child Switch Chest']: { isAvailable: function () {
                return items.RequiemofSpirit && (items.Boomerang || items.Slingshot); } },
            ['Child Torch Chest']: { isAvailable:  function () {
                return items.RequiemofSpirit && ((items.Dins && items.Magic) || items.Stick); } },
            ['Child Climb East Chest']: { isAvailable:  function () {
                return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2)); } },
            ['Child Climb North Chest']: { isAvailable: function () {
                 return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2)); } },
            ['Sun Block Room Chest']: { isAvailable: function () {
                return ((items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Dins || (items.Fire && items.Bow)) && items.Magic)) ; } },
            ['Silver Gauntlets Chest']: { isAvailable:  function () {
                return (items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2); } },
            ['Map Chest']: { isAvailable:  function () {
                return ((items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2)) && items.Magic && (items.Dins || (items.Fire && items.Bow && items.Glove >= 2)); } },
            ['Compass Chest']: { isAvailable:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.ZeldasLullaby; } },
            ['First Adult Right Chest']: { isAvailable:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || items.Bombs); } },
            ['FloorMaster Left Chest']: { isAvailable:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2; } },
            ['FloorMaster Right Chest']: { isAvailable:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2; } },
            ['Statue/s Hand Chest']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby; } },
            ['Main Room Top NE corner Chest']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby && items.Hookshot; } },
            ['Hallway Left Invisible Chest']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2); } },
            ['Hallway Right Invisible Chest']: { isAvailable: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2); } },
            ['Mirror Shield Chest']: { isAvailable: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2); } },
            ['Near Four Armos Chest']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2) && items.MirrorShield; } },
            ['Boss Key Chest']: { isAvailable: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby && items.Bow && items.Hookshot && (items.Bombs || items.Hammer) ; } },
            ['Topmost Chest']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2) && (items.Hookshot || items.Bow || items.Bombs) && items.MirrorShield; } },
            ['Twinrova']: { isAvailable:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MirrorShield && items.Bombs && items.Hookshot); } },
        },
        isBeatable: function(){
            if(((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MirrorShield && items.Bombs && items.Hookshot) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Bottom of the Well",
        x: "69.3%",
        y: "23.4%",
        chestlist: {
            ['Front Left Hidden Wall']: { isAvailable:  function () {
                return items.SongofStorms; } },
            ['Front Center Bombable']: { isAvailable:  function () {
                return items.SongofStorms && (items.Bombs || items.Bombchu); } },
            ['Center Large Chest']: { isAvailable: function () {
                return items.SongofStorms; } },
            ['Center Small Chest']: { isAvailable:  function () {
                return items.SongofStorms; } },
            ['Back Left Bombable']: { isAvailable:  function () {
                return items.SongofStorms && (items.Bombs || items.Bombchu); } },
            ['Underwater Left Chest']: { isAvailable:  function () {
                return items.SongofStorms && items.ZeldasLullaby; } },
            ['Coffin Key']: { isAvailable:  function () {
                return items.SongofStorms && (items.Scale || items.ZeldasLullaby); } },
            ['Right Bottom Hidden Wall']: { isAvailable:  function () {
                return items.SongofStorms; } },
            ['Locked Pits']: { isAvailable:  function () {
                return items.SongofStorms && items.WellKey >= 1; } },
            ['Behind Right Grate']: { isAvailable:  function () {
                return items.SongofStorms && items.WellKey >= 1; } },
            ['Basement Chest']: { isAvailable:  function () {
                return items.SongofStorms && (items.Bombs || items.Bombchu); } },
            ['Underwater Front Chest']: { isAvailable: function () {
                return items.SongofStorms && items.ZeldasLullaby ; } },
            ['Defeat Boss']: { isAvailable:  function () {
                return items.SongofStorms && (items.ZeldasLullaby || items.Scale) && (items.KokiriSword || items.Stick); } },
            ['Invisible Chest']: { isAvailable:  function () {
                return items.SongofStorms && (items.ZeldasLullaby || items.Scale); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Shadow Temple",
        x: "75.7%",
        y: "20.8%",
        chestlist: {
            ['Map Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && (items.HoverBoots || items.Hookshot); } },
            ['Hover Boots Chest']: { isAvailable: function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && (items.HoverBoots || items.Hookshot); } },
            ['Compass Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots; } },
            ['Early Silver Rupee Chest']: { isAvailable: function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots; } },
            ['Invisible Blades Visible Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; } },
            ['Invisible Blades Invisible Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; } },
            ['Falling Spikes Lower Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; } },
            ['Falling Spikes Upper Chest']: { isAvailable:  function () {
                return     items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Glove; } },
            ['Falling Spikes Switch Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Glove; } },
            ['Invisible Spikes Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; } },
            ['Giant Pot Key']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['Wind Hint Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['After Wind Enemy Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['After Wind Hidden Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['Spike Walls Left Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Hidden Floormaster Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Bongo Bongo']: { isAvailable:  function () {
                return (items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby && items.Bow); } },
        },
        isBeatable: function(){
            if(items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby && items.Bow) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Dodongo's Cavern",
        x: "60.6%",
        y: "08.4%",
        chestlist: {
            ['Map Chest']: { isAvailable:  function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['Compass Chest']: { isAvailable:  function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['Bomb Flower Platform']: { isAvailable:  function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['Bomb Bag Chest']: { isAvailable:  function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['End of Bridge Chest']: { isAvailable:  function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['Chest Above King Dodongo']: { isAvailable: function () {
                return items.Bombs || items.Hammer || items.Glove || items.Bombchu ; } },
            ['King Dodongo']: { isAvailable: function () {
                return items.Glove || items.Bombs ; } },
        },
        isBeatable: function(){
            if((items.Slingshot || items.Bow || items.HoverBoots) && items.Bombs) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Fire Temple",
        x: "65.4%",
        y: "09.0%",
        chestlist: {
            ['Chest Near Boss']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); } },
            ['Fire Dancer Chest']: { isAvailable: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer ; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer; } },
            ['Big Lava Room Bombable Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) &&ZeldasLullaby && items.Bombs; } },
            ['Big Lava Room Open Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); } },
            ['Boulder Maze Lower Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); } },
            ['Boulder Maze Upper Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); } },
            ['Boulder Maze Side Room']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); } },
            ['Boulder Maze Bombable Pit']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && items.Bombs; } },
            ['Scarecrow Chest']: { isAvailable: function () {
                return items.GoronTunic && items.Glove && (items.Bombs || items.Bow || items.Hookshot) && items.Hookshot; } },
            ['Map Chest']: { isAvailable: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot) ; } },
            ['Compass Chest']: { isAvailable: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); } },
            ['Highest Goron Chest']: { isAvailable:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot) && items.SongofTime && items.Hammer; } },
            ['Megaton Hammer Chest']: { isAvailable: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && items.Bombs; } },
            ['Volvagia']: { isAvailable: function () {
                return (items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Bow || items.Hookshot) && (items.SongofTime || items.Bombs)))); } },
        },
        isBeatable: function(){
            if(items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Bow || items.Hookshot) && (items.SongofTime || items.Bombs)))) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Jabu Jabu's Belly",
        x: "91.5%",
        y: "21.0%",
        chestlist: {
            ['Boomerang Chest']: { isAvailable: function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && (items.Slingshot || items.Bombs || items.Boomerang); } },
            ['Map Chest']: { isAvailable:  function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; } },
            ['Compass Chest']: { isAvailable:  function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; } },
            ['Barinade']: { isAvailable:  function () {
                return (((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang); } },
        },
        isBeatable: function(){
            if(((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Ice Cavern",
        x: "90.5%",
        y: "16.0%",
        chestlist: {
            ['Map Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; } },
            ['Compass Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; } },
            ['Heart Piece']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; } },
            ['Iron Boots Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; } },
            ['Sheik in Ice Cavern']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Forest Temple",
        x: "78.5%",
        y: "39.0%",
        chestlist: {
            ['First Chest']: { isAvailable:  function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; } },
            ['Chest Behind Lobby']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; } },
            ['Well Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; } },
            ['Map Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; } },
            ['Outside Hookshot Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },  },
            ['Falling Room Chest']: { isAvailable: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && (items.Bow || (items.Dins && items.Magic)); } },
            ['Block Push Chest']: { isAvailable: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; } },
            ['Boss Key Chest']: { isAvailable: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; } },
            ['Floormaster Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },  },
            ['Bow Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },   },
            ['Red Poe Chest']: { isAvailable:  function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; } },
            ['Blue Poe Chest']: { isAvailable: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; } },
            ['Near Boss Chest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot && items.Bow; } },
            ['Phantom Ganon']: { isAvailable: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot && items.Bow); } },
        },
        isBeatable: function(){
            if((items.SariasSong || items.MinuetofForest) && items.Hookshot && items.Bow) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Ganon's Castle",
        x: "49.0%",
        y: "14.0%",
        chestlist: {
            ['Forest Trial Chest']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Water Trial Left Chest']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Water Trial Right Chest']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Shadow Trial First Chest']: { isAvailable:  function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || items.Hookshot >= 2); } },
            ['Shadow Trial Second Chest']: { isAvailable:  function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || (items.Hookshot >= 2 && items.HoverBoots)); } },
            ['Spirit Trial First Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Hookshot && (items.Magic || items.Bombs); } },
            ['Spirit Trial Second Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Hookshot && items.Magic && items.Bombs && items.Lens; } },
            ['Light Trial First Left Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Second Left Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Third Left Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial First Right Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Second Right Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Third Right Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trail Invisible Enemies Chest']: { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3 && (items.Magic && items.Lens); } },
            ['Light Trial Lullaby Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3 && items.ZeldasLullaby; } },
        },
        trials: {
            ['Forest Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins)); } },
            ['Fire Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.GoronTunic && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2; } },
            ['Water Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light; } },
            ['Shadow Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2)); } },
            ['Spirit Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot; } },
            ['Light Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light; }      },
        },
        isBeatable: function(){
            return generalCanGetChest(this.trials);
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "The Market",
        x: "50.5%",
        y: "20.2%",
        chestlist: {
            ['Zelda\'s Lullaby']: { isAvailable: function () {
                return (true); } },
            ['Child Shooting Gallery']: { isAvailable: function () {
                return (true); } },
            ['Bombchu Bowling 1']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Bombchu Bowling 2']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Treasure Chest Game']: { isAvailable: function () {
                return (items.Lens && items.Magic); } },
            ['Dog Lady']: { isAvailable: function () {
                return (true); } },
            ['10 Big Poes']: { isAvailable: function () {
                return (items.Bow && items.EponasSong && items.Bottle); } },
            ['Hyrule Castle Fairy']: { isAvailable: function () {
                return (items.Bombs && items.ZeldasLullaby); } },
            ['Ganon\'s Castle Fairy']: { isAvailable: function () {
                return (items.Glove >= 3 && items.ZeldasLullaby); } },
            ['Prelude of Light']: { isAvailable: function () {
                return (items.ForestMedallion); } },
            ['Light Arrows']: { isAvailable: function () {
                return (items.ShadowMedallion && items.SpiritMedallion); } },

        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Kakariko Village",
        x: "65.4%",
        y: "22.0%",
        chestlist: {
            ['Anju as Adult']: { isAvailable: function () {
                return (true); } },
            ['Anju\'s Chickens']: { isAvailable: function () {
                return (true); } },
            ['Kakariko Grotto Chest']: { isAvailable: function () {
                return (true); } },
            ['Kakariko Redead Grotto Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer); } },
            ['Cow Heart Piece']: { isAvailable: function () {
                return (true); } },
            ['Man on Roof']: { isAvailable: function () {
                return (items.Hookshot); } },
            ['Adult Shooting Gallery']: { isAvailable: function () {
                return (items.Bow); } },
            ['Song of Storms']: { isAvailable: function () {
                return (true); } },
            ['Windmill Heart Piece']: { isAvailable: function () {
                return (items.SongofTime || items.Boomerang); } },
            ['Dampe Race 1']: { isAvailable: function () {
                return (true); } },
            ['Dampe Race 2']: { isAvailable: function () {
                return (true); } },
            ['Dampe Digging']: { isAvailable: function () {
                return (true); } },
            ['Shield Grave Chest']: { isAvailable: function () {
                return (true); } },
            ['Redead Grave Chest']: { isAvailable: function () {
                return (items.SunsSong); } },
            ['Sun\'s Song']: { isAvailable: function () {
                return (items.ZeldasLullaby); } },
            ['Sun\'s Song Chest']: { isAvailable: function () {
                return (items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic)); } },
            ['Magic Bean Heart Piece']: { isAvailable: function () {
                return (items.Scale || items.Bombs || items.Hookshot >= 2); } },
            ['Nocturne of Shadow']: { isAvailable: function () {
                return (items.ForestMedallion && items.FireMedallion && items.WaterMedallion); } },
            ['Skulltula House 10']: { isAvailable: function () {
                return (items.Skulltula >= 10); } },
            ['Skulltula House 20']: { isAvailable: function () {
                return (items.Skulltula >= 20); } },
            ['Skulltula House 30']: { isAvailable: function () {
                return (items.Skulltula >= 30); } },
            ['Skulltula House 40']: { isAvailable: function () {
                return (items.Skulltula >= 40); } },
            ['Skulltula House 50']: { isAvailable: function () {
                return (items.Skulltula >= 50); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Goron City",
        x: "70.0%",
        y: "06.3%",
        chestlist: {
            ['Left Boulder Maze Chest']: { isAvailable: function () {
                return (items.Glove >= 2 || items.Hammer); } },
            ['Center Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Glove >= 2); } },
            ['Right Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Glove >= 2); } },
            ['Hot Rodder Goron']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Link the Goron']: { isAvailable: function () {
                return (items.Glove || items.Bombs || items.Bow); } },
            ['Spinning Pot Heart Piece']: { isAvailable: function () {
                return ((items.Glove || items.Bombs) && (items.ZeldasLullaby || (items.Magic && items.Dins))); } },
            ['Darunia\'s Joy']: { isAvailable: function () {
                return (items.ZeldasLullaby && items.SariasSong); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Lost Woods",
        x: "75.3%",
        y: "47.0%",
        chestlist: {
            ['Skull Kid']: { isAvailable: function () {
                return (items.SariasSong); } },
            ['Deku Salesman']: { isAvailable: function () {
                return (true); } },
            ['Ocarina Memory Game']: { isAvailable: function () {
                return (true); } },
            ['Target in Woods']: { isAvailable: function () {
                return (items.Slingshot); } },
            ['Bomb Grotto Chest']: { isAvailable: function () {
                return (items.Bombs || (items.Hammer && (item.SariasSong || items.MinuetofForest))); } },
            ['Deku Salesman Grotto']: { isAvailable: function () {
                return (items.Bombs || items.Hammer); } },
            ['Wolfos Grotto Chest']: { isAvailable: function () {
                return (items.Bombs || (items.Hammer && (item.SariasSong || items.MinuetofForest))); } },
            ['Saria\'s Song']: { isAvailable: function () {
                return (true); } },
            ['Minuet of Forest']: { isAvailable: function () {
                return (items.SariasSong || items.MinuetofForest); } },
            ['Deku Theater Skull Mask']: { isAvailable: function () {
                return (true); } },
            ['Deku Theater Mask of Truth']: { isAvailable: function () {
                return (items.SariasSong && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Zora\'s Domain",
        x: "92.9%",
        y: "34.5%",
        chestlist: {
            ['Diving Minigame']: { isAvailable: function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale); } },
            ['Zoras Domain Torch Run']: { isAvailable: function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale); } },
            ['Fairy Fountain']: { isAvailable: function () {
                return (items.ZoraLetter && items.Bombs && items.ZeldasLullaby); } },
            ['Iceberg Heart Piece']: { isAvailable: function () {
                return (items.ZoraLetter && (items.Bombs || items.Scale) && items.ZeldasLullaby); } },
            ['Underwater Heart Piece']: { isAvailable: function () {
                return (items.ZoraLetter && (items.Bombs || items.Scale) && items.IronBoots && items.ZeldasLullaby); } },
            ['King Zora Thawed']: { isAvailable: function () {
                return (items.ZeldasLullaby && items.Bottle && ((items.ZoraLetter && (items.Bombs || items.Scale)) || isBridgeOpen() || items.Wallet)); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Death Mountain",
        x: "62.0%",
        y: "13.7%",
        chestlist: {
            ['Heart Piece Above Dodongo Cavern']: { isAvailable: function () {
                return (items.Bombs || (items.Glove && items.Scale)); } },
            ['Outside Goron City Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer); } },
            ['Outside Goron City Grotto']: { isAvailable: function () {
                return (items.SongofStorms); } },
            ['Bolero of Fire']: { isAvailable: function () {
                return (items.BoleroofFire || (items.HoverBoots && (items.Hammer || items.Bombs || items.Glove)) || (items.Hookshot && items.Glove)); } },
            ['Crater Wall Heart Piece']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || (items.BoleroofFire && (items.HoverBoots || items.Hookshot)) || items.Glove); } },
            ['Crater Magic Bean Heart Piece']: { isAvailable: function () {
                return ((items.Bombs || items.Scale) && items.BoleroofFire); } },
            ['Crater Grotto']: { isAvailable: function () {
                return (items.Bombs || items.Hammer); } },
            ['Crater Fairy Fountain']: { isAvailable: function () {
                return (items.Hammer && items.ZeldasLullaby && (items.Glove || (items.BoleroofFire && items.Hookshot) || items.HoverBoots)); } },
            ['Summit Fairy Fountain']: { isAvailable: function () {
                return ((items.Bombs || items.Hammer) && items.ZeldasLullaby); } },
            ['Biggoron Sword']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || (items.BoleroofFire && (items.HoverBoots || items.Hookshot)) || items.Glove); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
];




//define overworld chests
var chests = [
    {
        name: "Song of Time",
        x: "52.3%",
        y: "30.5%",
        isAvailable: function(){
            if(items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Hyrule Field North Grotto",
        x: "50.0%",
        y: "28.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Hyrule Field Forest Grotto",
        x: "60.0%",
        y: "59.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Hyrule Field South Grotto",
        x: "44.5%",
        y: "64.0%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Hyrule Field Deku Salesman Grotto",
        x: "42.0%",
        y: "64.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Diving Heart Piece Grotto",
        x: "44.0%",
        y: "32.0%",
        isAvailable: function(){
            if((items.Bombs || items.Hammer) && (items.Scale >= 2 || items.IronBoots))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Talon's Chickens Minigame",
        x: "49.0%",
        y: "38.0%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Epona's Song",
        x: "47.0%",
        y: "41.5%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Lon Lon Heart Piece",
        x: "44.0%",
        y: "43.5%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Underwater Bottle",
        x: "38.6%",
        y: "80.0%",
        isAvailable: function(){
            if(items.Scale)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Lake Hylia Sun",
        x: "41.5%",
        y: "91.0%",
        isAvailable: function(){
            if(items.Hookshot >= 2 && items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Diving in the Lab",
        x: "35.2%",
        y: "77.4%",
        isAvailable: function(){
            if(items.Scale >= 2)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Lab Roof Heart Piece",
        x: "35.2%",
        y: "74.0%",
        isAvailable: function(){
            if(items.Scale || items.Bombs || items.Hookshot)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Child Fishing",
        x: "45.0%",
        y: "78.0%",
        isAvailable: function(){
            if(items.KokiriSword)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Adult Fishing",
        x: "46.9%",
        y: "78.0%",
        isAvailable: function(){
            if(items.Hookshot || items.Scale || items.Bombs)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Gerudo Valley Hammer Rocks Chest",
        x: "22.0%",
        y: "38.0%",
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Gerudo Valley Crate Heart Piece",
        x: "24.0%",
        y: "41.5%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Gerudo Valley Waterfall Heart Piece",
        x: "25.5%",
        y: "32.0%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Gerudo Fortress Rooftop Chest",
        x: "18.8%",
        y: "23.0%",
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.HoverBoots || items.Hookshot >= 2)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Horseback Archery Game 1000pts",
        x: "21.7%",
        y: "28.0%",
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.EponasSong && items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Horseback Archery Game 1500pts",
        x: "23.5%",
        y: "28.0%",
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.EponasSong && items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Haunted Wasteland Chest",
        x: "14.0%",
        y: "25.0%",
        isAvailable: function(){
            if(((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && ((items.Dins || (items.Fire && items.Bow)) && items.Magic))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Requiem of Spirit",
        x: "04.5%",
        y: "21.5%",
        isAvailable: function(){
            if( (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Desert Colossus Fairy",
        x: "08.0%",
        y: "19.0%",
        isAvailable: function(){
            if( ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Bombs && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },    
    {
        name: "Desert Colossus Heart Piece",
        x: "06.4%",
        y: "23.5%",
        isAvailable: function(){
            if(items.RequiemofSpirit && (items.Bombs || items.Scale))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Frog Ocarina Game",
        x: "79.8%",
        y: "32.0%",
        isAvailable: function(){
            if((items.Scale || items.Bombs) && items.ZeldasLullaby && items.SariasSong && items.SunsSong && items.EponasSong && items.SongofTime && items.SongofStorms)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Frogs in the Rain",
        x: "78.0%",
        y: "32.0%",
        isAvailable: function(){
            if((items.Scale || items.Bombs) && items.SongofStorms)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zora River Heart Piece 1",
        x: "75.0%",
        y: "30.0%",
        isAvailable: function(){
            if(items.Scale || items.Bombs || items.HoverBoots)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zora River Heart Piece 2",
        x: "86.0%",
        y: "29.2%",
        isAvailable: function(){
            if(items.Scale || items.Bombs || items.HoverBoots)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zora River Grotto",
        x: "75.5%",
        y: "34.5%",
        isAvailable: function(){
            return "available";
        }
    },
]

