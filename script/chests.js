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
        x: "78.9%",
        y: "63.9%",
        chestlist: {
            ['Kokiri Sword Chest']: { isAvailable: function() {return true} },
            ['Mido\s House x4 Chests']: { isAvailable: function() {return true} },
            ['Fairy Ocarina']: { isAvailable: function() {return true} },
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
            ['Queen Gohma']: { isAvailable: function () {return items.DekuShield && (items.Slingshot || (items.Stick && items.Nuts));} },
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
                return items.IronBoots && items.Hookshot; } },
            ['Map Chest']: { isAvailable: function () {
                return items.IronBoots && items.Hookshot; } },
            ['Torches Chest']: { isAvailable: function () {
                return (items.IronBoots && items.Hookshot) && (items.Bow || (items.Dins && items.Magic)) && items.ZeldasLullaby; } },
            ['Dragon Chest']: { isAvailable: function () {
                return (items.IronBoots && items.Hookshot) && items.ZeldasLullaby && items.SongofTime && items.Bow; } },
            ['Central Pillar Basement']: { isAvailable: function () {
                return items.WaterKey && items.IronBoots && items.Hookshot && items.ZeldasLullaby ; } },
            ['Cracked Wall']: { isAvailable: function () {
                return (items.IronBoots && items.Hookshot) && ((items.Bombs && items.ZeldasLullaby && items.WaterKey) || items.Bombchu); } },
            ['Central Bow Target']: { isAvailable: function () {
                return (items.IronBoots && items.Hookshot) && items.Bow && items.Glove && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2); } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.WaterKey >= 3 && items.IronBoots && items.Hookshot && items.ZeldasLullaby && ((items.Bombs && items.Glove) || items.HoverBoots) && items.Hookshot >= 2; } },
            ['Dark Link']: { isAvailable: function () {
                return items.WaterKey >= 2 && items.IronBoots && items.Hookshot && items.ZeldasLullaby; } },
            ['River Chest']: { isAvailable:  function () {
                return items.WaterKey >= 2 && items.IronBoots && items.Hookshot && items.SongofTime && items.Bow && items.ZeldasLullaby; } },
            ['Morpha']: { isAvailable:  function () {
                return (items.IronBoots && items.Hookshot >= 2); } },
        },
        isBeatable: function(){
            return this.canGetChest();
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
                return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && (items.Glove >= 2 && items.SpiritKey))); } },
            ['Child Climb North Chest']: { isAvailable: function () {
                 return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && (items.Glove >= 2 && items.SpiritKey))); } },
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
            ['Underwater Left Chest']: { isAvailable:  function () {
                return items.SongofStorms && items.ZeldasLullaby; } },
            ['Coffin Key']: { isAvailable:  function () {
                return items.SongofStorms && (items.Scale || items.ZeldasLullaby); } },
            ['Center Small Chest']: { isAvailable:  function () {
                return items.SongofStorms; } },
            ['Back Left Bombable']: { isAvailable:  function () {
                return items.SongofStorms && (items.Bombs || items.Bombchu); } },
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
        x: "79.7%",
        y: "19.5%",
        chestlist: {
            ['Map Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && (items.HoverBoots || items.Hookshot); } },
            ['Hover Boots Chest']: { isAvailable: function () {
                return items.NocturneofShadow && items.Dins && (items.HoverBoots || items.Hookshot); } },
            ['Compass Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots; } },
            ['Early Silver Rupee Chest']: { isAvailable: function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots; } },
            ['Like Like Visible Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs; } },
            ['Like Like Invisible Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs; } },
            ['Falling Spikes Lower Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs; } },
            ['Falling Spikes Upper Chest']: { isAvailable:  function () {
                return     items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Glove; } },
            ['Falling Spikes Switch Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Glove; } },
            ['Redead & Silver Rupees']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs; } },
            ['Skull Pot Key']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['Wind Hint Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['After Wind Enemy Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['After Wind Hidden Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot; } },
            ['Spike Walls Left Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Hidden Floormaster Chest']: { isAvailable:  function () {
                return items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; } },
            ['Bongo Bongo']: { isAvailable:  function () {
                return (items.NocturneofShadow && items.Dins && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby && items.Bow); } },
        },
        isBeatable: function(){
            return this.canGetChest();
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
            return this.canGetChest();
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
                return (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); } },
            ['Fire Dancer Chest']: { isAvailable: function () {
                return (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer ; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer; } },
            ['Lava Room Open Chest']: { isAvailable:  function () {
                return items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) ; } },
            ['Lava Room Bombable Wall']: { isAvailable:  function () {
                return items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || items.Bombchu); } },
            ['Maze Lower Chest']: { isAvailable:  function () {
                return items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Maze Side Room']: { isAvailable:  function () {
                return items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Map Chest']: { isAvailable: function () {
                return ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove; } },           
            ['Maze Upper Chest']: { isAvailable:  function () {
                return items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Maze Bombable Pit']: { isAvailable:  function () {
                return items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bombchu); } },
            ['Scarecrow Chest']: { isAvailable: function () {
                return items.FireKey >= 5 && items.Glove && items.Hookshot && items.Scarecrow >= 2; } },
            ['Compass Chest']: { isAvailable: function () {
                return items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove; } },
            ['Song of Time Block']: { isAvailable:  function () {
                return (items.FireKey >= 7 || items.HoverBoots) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer; } },
            ['Megaton Hammer Chest']: { isAvailable: function () {
                return items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || items.Bombchu || items.Hammer); } },
            ['Volvagia']: { isAvailable: function () {
                return (items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs))); } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Jabu Jabu's Belly",
        x: "88.4%",
        y: "18.0%",
        chestlist: {
            ['Boomerang Chest']: { isAvailable: function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.Slingshot || items.Boomerang); } },
            ['Map Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang; } },
            ['Compass Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang; } },
            ['Barinade']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.Boomerang; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Ice Cavern",
        x: "93.5%",
        y: "18.0%",
        chestlist: {
            ['Map Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.ZeldasLullaby || items.HoverBoots); } },
            ['Compass Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.ZeldasLullaby || items.HoverBoots); } },
            ['Heart Piece']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.ZeldasLullaby || items.HoverBoots); } },
            ['Iron Boots Chest']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.ZeldasLullaby || items.HoverBoots); } },
            ['Ice Cavern Song']: { isAvailable:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && (items.ZeldasLullaby || items.HoverBoots); } },
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
                return items.Hookshot; } },
            ['Chest Behind Lobby']: { isAvailable: function () {
                return items.Hookshot; } },           
            ['Map Chest']: { isAvailable: function () {
                return items.Hookshot; } },
            ['Courtyard Hookshot Chest']: { isAvailable: function () {
                return items.Hookshot; },  }, 
            ['Well Chest']: { isAvailable: function () {
                return items.Hookshot; } },
            ['Block Push Chest']: { isAvailable: function () {
                return items.Hookshot && items.Bow && items.ForestKey; } },
            ['Boss Key Chest']: { isAvailable: function () {
                return items.Hookshot && items.Bow && items.ForestKey >= 2; } },
            ['Floormaster Chest']: { isAvailable: function () {
                return items.Hookshot && ((items.Bow && items.ForestKey >= 2) || (items.HoverBoots && items.ForestKey)); },  },
            ['Red Poe Chest']: { isAvailable:  function () {
                return items.Hookshot && items.Bow && items.ForestKey >= 3; } },
            ['Bow Chest']: { isAvailable: function () {
                return items.Hookshot && items.Bow && items.ForestKey >= 3; },   },            
            ['Blue Poe Chest']: { isAvailable: function () {
                items.Hookshot && items.Bow && items.ForestKey >= 3; } },
            ['Falling Room Chest']: { isAvailable: function () {
                return items.Hookshot &&  items.ForestKey >= 4 && (items.Bow || (items.Dins && items.Magic)); } },
            ['Near Boss Chest']: { isAvailable: function () {
                return items.Hookshot && items.Bow && items.ForestKey >= 5; } },
            ['Phantom Ganon']: { isAvailable: function () {
                return items.Hookshot && items.Bow && items.ForestKey >= 5; } },
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
        name: "Ganon's Tower",
        x: "49.0%",
        y: "14.0%",
        chestlist: {
            ['Forest Trial']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Water Trial Left']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Water Trial Right']: { isAvailable: function () { 
                return isBridgeOpen(); } },
            ['Shadow Trial 1']: { isAvailable:  function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || items.Hookshot >= 2); } },
            ['Shadow Trial 2']: { isAvailable:  function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || (items.Hookshot >= 2 && items.HoverBoots)); } },
            ['Spirit Trial 1']: { isAvailable:  function () {
                return isBridgeOpen() && items.Hookshot; } },
            ['Spirit Trial 2']: { isAvailable:  function () {
                return isBridgeOpen() && items.Hookshot && items.Bombchu; } },
            ['Light Trial Left 1']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Left 2']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Left 3']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Right 1']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Right 2']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Right 3']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trail Center']: { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3 && (items.Magic && items.Lens); } },
            ['Light Trial Lullaby Chest']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3 && items.ZeldasLullaby && items.CastleKey; } },
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
                return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light && items.CastleKey >= 2; }      },
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
            ['Impa\s Song']: { isAvailable: function () {
                return (items.Mask >= 1); } },
            ['Slingshot Mini Game']: { isAvailable: function () {
                return (true); } },
            ['Return Richard']: { isAvailable: function () {
                return (true); } },
            ['Bombchu Bowling 1']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Bombchu Bowling 2']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Treasure Chest Mini Game']: { isAvailable: function () {
                return (items.Lens && items.Magic); } },                       
            ['Hyrule Castle Fairy']: { isAvailable: function () {
                return (items.Bombs || items.Bombchu) && items.ZeldasLullaby; } },
            ['Prelude of Light']: { isAvailable: function () {
                return (items.ForestMedallion); } },
            ['Zelda\s Secret Weapon']: { isAvailable: function () {
                return (items.ShadowMedallion && items.SpiritMedallion); } },
            ['Ganon\'s Castle Fairy']: { isAvailable: function () {
                return (items.Glove >= 3 && items.ZeldasLullaby); } },           
            ['10 Big Poes']: { isAvailable: function () {
                return (items.Bow && items.EponasSong && items.Bottle); } },
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
            ['Anju\'s Chickens']: { isAvailable: function () {
                return (true); } },
            ['Anju Adult item']: { isAvailable: function () {
                return (items.MasterSword); } },
            ['Cow Heart Piece']: { isAvailable: function () {
                return (true); } },
            ['Windmill Song']: { isAvailable: function () {
                return items.MasterSword && items.Ocarina; } },
            ['Windmill Heart Piece']: { isAvailable: function () {
                return items.MasterSword || items.Boomerang; } },             
            ['Man on Roof']: { isAvailable: function () {
                return true; } },
            ['Kakariko Grotto']: { isAvailable: function () {
                return (true); } },
            ['Kakariko Redead Grotto']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Bombchu); } },
            ['Adult Shooting Gallery']: { isAvailable: function () {
                return (items.Bow); } },                   
            ['Nocturne of Shadow']: { isAvailable: function () {
                return (items.ForestMedallion && items.FireMedallion && items.WaterMedallion); } },            
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
            ['Link the Goron']: { isAvailable: function () {
                return (items.Glove || items.Bombs || items.Bow || items.Bombchu); } },  
            ['Left Boulder Maze Chest']: { isAvailable: function () {
                return (items.Glove >= 2 || items.Hammer); } },
            ['Center Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Glove >= 2 || items.Bombchu); } },
            ['Right Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Glove >= 2 || items.Bombchu); } },
            ['Big Rolling Goron']: { isAvailable: function () {
                return (items.Bombs); } },
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
            ['Minuet of Forest']: { isAvailable: function () {
                return items.MasterSword; } },           
            ['Deku Sale $40']: { isAvailable: function () {
                return (items.DekuShield || items.Nuts || items.Stick); } },
            ['Skull Kid']: { isAvailable: function () {
                return (items.SariasSong); } },
            ['Ocarina Memory Game']: { isAvailable: function () {
                return (items.Ocarina); } },
            ['Slingshot Target']: { isAvailable: function () {
                return (items.Slingshot); } },
            ['Bomb Grotto Chest']: { isAvailable: function () {
                return items.Bombs || items.Hammer || items.Bombchu; } },
            ['Deku Sale Grotto $40']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Bombchu) && (items.DekuShield || items.Nuts || items.Stick); } },
            ['Wolfos Grotto']: { isAvailable: function () {
                return items.Bombs || items.Hammer || items.Bombchu; } },
            ['Saria\'s Song']: { isAvailable: function () {
                return items.Mask >= 2; } },            
            ['Deku Theater Skull Mask']: { isAvailable: function () {
                return items.Mask >= 4; } },
            ['Deku Theater Mask of Truth']: { isAvailable: function () {
                return items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.Mask >= 7; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Zora's Domain",
        x: "92.9%",
        y: "34.5%",
        chestlist: {
            ['Diving Minigame']: { isAvailable: function () {
                return true; } },
            ['Torch Run']: { isAvailable: function () {
                return true; } },
            ['Fairy Fountain']: { isAvailable: function () {
                return items.ZoraLetter && (items.Bombs || items.Bombchu); } },
            ['Iceberg Heart Piece']: { isAvailable: function () {
                return (items.ZoraLetter && (items.Bombs || items.Scale || items.Bombchu) && items.ZeldasLullaby); } },
            ['Underwater Heart Piece']: { isAvailable: function () {
                return items.ZoraLetter && items.IronBoots && (items.ZeldasLullaby || items.HoverBoots); } },
            ['Thaw King Zora']: { isAvailable: function () {
                return (items.ZeldasLullaby || items.HoverBoots) && ((items.ZoraLetter && (items.Bombs || items.Scale || items.Bombchu)) || isBridgeOpen() || items.Wallet >= 2); } },
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
            ['Heart Piece Above Dodongo\s Cavern']: { isAvailable: function () {
                return true; } },
            ['Breakable Wall Chest']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Bombchu); } },
            ['Storms Grotto']: { isAvailable: function () {
                return (items.SongofStorms); } },
            ['Bolero of Fire']: { isAvailable: function () {
                return items.BoleroofFire || items.HoverBoots || items.Hookshot; } },
            ['Crater Bean Heart Piece']: { isAvailable: function () {
                return (items.Bean && items.BoleroofFire); } },            
            ['Crater Fairy Fountain']: { isAvailable: function () {
                return items.Hammer && items.ZeldasLullaby; } },
            ['Crater Grotto']: { isAvailable: function () {
                return (items.Bombs || items.Hammer || items.Bombchu); } },
            ['Crater Wall Heart Piece']: { isAvailable: function () {
                return true; } },
            ['Summit Fairy Fountain']: { isAvailable: function () {
                return ((items.Bombs || items.Hammer || items.Bombchu) && items.ZeldasLullaby); } },
            ['Biggoron\s Finest Work']: { isAvailable: function () {
                return (items.Trade >= 1 && items.ZoraLetter && (items.EponasSong || items.Hookshot >= 2)) || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) || items.Trade >= 9; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Lon Lon Ranch",
        x: "47.4%",
        y: "45.6%",
        chestlist: {
            ['Talon\s Cucco game']: { isAvailable: function() {return items.Mask >= 2;} },
            ['Malon\s Song']: { isAvailable: function() {return items.Mask >= 2 && items.Ocarina;} },
            ['Silo Heart Piece']: { isAvailable: function() {return true;} },
            ['Race Ingo']: { isAvailable: function() {return items.MasterSword && items.EponasSong;} },
        },
        isBeatable: function(){
            if( items.EponasSong && items.Mask >=2) {
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
        name: "Zora's River",
        x: "78.7%",
        y: "29.5%",
        chestlist: {
            ['River Heart Piece 1']: { isAvailable: function() {return true;} },
            ['River Open Grotto']: { isAvailable: function() {return true;} },
            ['River Heart Piece 2']: { isAvailable: function() {return items.HoverBoots || (items.Bombs || items.Bombchu || items.Scale);} },           
            ['Frogs in the Rain']: { isAvailable: function() {return items.SongofStorms && (items.Bombs || items.Bombchu || items.Scale);} },
            ['Frogs mini game']: { isAvailable: function() {return (items.Bombs || items.Bombchu || items.Scale) && items.ZeldasLullaby && items.EponasSong && items.SariasSong && items.SunsSong && items.SongofTime;} },
            ['Bean Salesman']: { isAvailable: function() {items.Bombs || items.Bombchu || items.Scale;} },    
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Lake Hylia",
        x: "42.0%",
        y: "80.0%",
        chestlist: {
            ['Scarecrow Song setup']: { isAvailable: function() { return items.Ocarina; } },
            ['Scarecrow Song']: { isAvailable: function() { return items.Scarecrow && items.MasterSword; } },
            ['Child Fishing']: { isAvailable: function() {return items.KokiriSword;} },
            ['Silver Scale item']: { isAvailable: function() {return items.Scale;} },
            ['Diving in the Lab']: { isAvailable: function() {return items.Scale >= 2 || (items.IronBoots && items.Hookshot);} },
            ['Lab Roof Heart Piece']: { isAvailable: function() {return items.Bean || (items.Hookshot && items.Scarecrow >= 2);} },
            ['Adult Fishing']: { isAvailable: function() {return items.Bean || (items.Hookshot && items.Scarecrow >= 2);} },
            ['Shoot the Sun']: { isAvailable: function() {return items.Bow && items.Hookshot >= 2 && items.Scarecrow >= 2;} },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
},
    {
        name: "Gerudo Valley",
        x: "19.0%",
        y: "31.5%",
        chestlist: {
            ['Crate Heart Piece']: { isAvailable: function() { return true; } },
            ['Waterfall Heart Piece']: { isAvailable: function() { return true; } },
            ['Hammer Rocks Chest']: { isAvailable: function() { return (items.EponasSong || items.Hookshot >= 2) && items.Hammer; } },
            ['Gerudo Fortress Rooftop Chest']: { isAvailable: function() { return (items.EponasSong || items.Hookshot >= 2) && items.HoverBoots || items.Hookshot >= 2; } },
            ['Horseback Archery 1000 pts']: { isAvailable: function() { return items.Bow && items.EponasSong; } },
            ['Horseback Archery 1500 pts']: { isAvailable: function() { return items.Bow && items.EponasSong; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Desert Colossus",
        x: "8.4%",
        y: "18.0%",
        chestlist: {
            
            ['Haunted Wasteland Chest']: { isAvailable: function() {return ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && (items.Magic && (items.Dins || (items.Bow && items.Fire))) } },
            ['Requiem of Spirit']: { isAvailable: function() {return (items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit} },
            ['Desert Bean Heart Piece']: { isAvailable: function() {return items.Bean && items.RequiemofSpirit} },          
            ['Fairy Fountain']: { isAvailable: function() {return items.ZeldasLullaby && (items.Bombs || items.Bombchu)} },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Graveyard",
        x: "73.7%",
        y: "19.5%",
        chestlist: {            
            ['Dampe Digging']: { isAvailable: function () {
                return (true); } },
            ['Magic Bean Heart Piece']: { isAvailable: function () {
                return (items.Bean || items.Hookshot >= 2); } }, 
            ['Dampe Race 1']: { isAvailable: function () {
                return (items.MasterSword); } },
            ['Dampe Race 2']: { isAvailable: function () {
                return (items.MasterSword); } },
            ['Vanilla Shield Grave']: { isAvailable: function () {
                return (true); } },
            ['Redead Grave']: { isAvailable: function () {
                return (items.SunsSong); } },
            ['Composer Brother\s Song']: { isAvailable: function () {
                return (items.ZeldasLullaby && items.Ocarina); } },
            ['Royal Tomb Chest']: { isAvailable: function () {
                return (items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic)); } },                          
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
        name: "Ocarina of Time",
        x: "54.3%",
        y: "28.0%",
        isAvailable: function(){
            if(items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Grotto West of Castle Gate",
        x: "50.0%",
        y: "28.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer || items.Bombchu)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "South East Grotto",
        x: "60.0%",
        y: "59.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer || items.Bombchu)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Southern Open Grotto",
        x: "44.5%",
        y: "64.0%",
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Deku Sale Bomb Grotto $10",
        x: "42.0%",
        y: "64.0%",
        isAvailable: function(){
            if(items.Bombs || items.Hammer || items.Bombchu)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Tektite Grotto",
        x: "42.0%",
        y: "33.0%",
        isAvailable: function(){
            if((items.Bombs || items.Hammer || items.Bombchu) && (items.Scale >= 2 || items.IronBoots))
                return "available";
            return "unavailable";
        }
    },
]
