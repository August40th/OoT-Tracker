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
                ['Mido\'s House x4 Chests']: { isAvailable: function() {return true} },
                ['Fairy Ocarina']: { isAvailable: function() {return true} },
                ['Song of Storms Grotto']: { isAvailable: function() {return items.Ocarina && items.SongofStorms;} },
        },
        isBeatable: function(){
            return this.canGetChest();
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
            ['2nd Floor Big Chest']: { isAvailable: function () {return items.DekuShield;} },
            ['2nd Floor Side Chest']: { isAvailable: function () {return items.DekuShield;} },
            ['Top Floor Big Chest']: { isAvailable: function () {return true} },
            ['Top Floor Side Chest']: { isAvailable: function () {return true} },
            ['Basement Chest']: { isAvailable: function () {return true} },
            ['Queen Gohma']: { isAvailable: function () {return items.DekuShield && (items.Slingshot || (items.Stick && items.Nuts));} },
        },
        isBeatable: function(){
            return this.canGetChest();
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
                return items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2 && items.Ocarina && items.ZeldasLullaby); } },
            ['Map Chest']: { isAvailable: function () {
                return items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2); } },
            ['Torches Chest']: { isAvailable: function () {
                return items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)) && (items.Bow || (items.Dins && items.Magic)) && items.Ocarina && items.ZeldasLullaby; } },
            ['Dragon Chest']: { isAvailable: function () {
                return items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)) && items.Ocarina && (((items.SongofTime && items.Bow && items.WaterKey >= 2)) || (items.ZeldasLullaby && items.Glove)); } },
            ['Central Pillar Basement']: { isAvailable: function () {
                return items.MasterSword && (items.WaterKey || items.Bow) && items.IronBoots && items.Hookshot && items.Ocarina && items.ZeldasLullaby ; } },
            ['Cracked Wall']: { isAvailable: function () {
                return items.MasterSword && ((items.IronBoots && items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic))) || ((items.Scale >=2 && items.Hookshot >=2) && items.Ocarina && items.ZeldasLullaby); } },
            ['Central Bow Target']: { isAvailable: function () {
                return items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)) && items.Bow && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2); } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)) && (((items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove) || items.HoverBoots) && (items.Hookshot >= 2 || items.HoverBoots); } },
            ['Dark Link']: { isAvailable: function () {
                return items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)); } },
            ['River Chest']: { isAvailable:  function () {
                return items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >=2 && items.Hookshot >=2)) && items.Ocarina && items.SongofTime && items.Bow; } },
            ['Morpha']: { isAvailable:  function () {
                return items.MasterSword && ((items.IronBoots && items.Hookshot >= 2) || (items.Scale >=2 && items.Hookshot >=2)) && items.BossWater; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Gerudo Training Ground",
        x: "20.7%",
        y: "16.4%",
        chestlist: {
            ['Lobby Right Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow; } },
            ['Lobby Left Chest']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow; } },
            ['Stalfos Room']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },
            ['Wolfos Room']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot; } },
            ['Like Like Open Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2; } },
            ['Like Like Room 1st Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2; } },
            ['Like Like Room 2nd Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2; } },
            ['Like Like Invisible Chest']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2; } },
            ['Cyclops Statue Eyes']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow && (items.SongofTime || items.HoverBoots || items.Hookshot >=2 || (items.Hookshot)); } },
            ['Cyclops Room Top Room']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow; } },
            ['Fire Enemies Clear']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot; } },
            ['Fire Enemies Fire Chest']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot; } },           
            ['Maze Right Open Key']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2); } },
            ['Maze Right Central Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2); } },
            ['Maze Right Side Chest']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2); } },            
            ['Underwater Silver Rupees']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Ocarina && items.SongofTime && items.IronBoots; } },
            ['Beamos Room']: { isAvailable: function () {
                return items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Hidden Ceiling Chest']: { isAvailable: function () {
                return items.MasterSword && items.GTGKey && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },
            ['Maze Left First Chest']: { isAvailable:  function () {
                return items.MasterSword && items.GTGKey >= 2 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },
            ['Maze Left Second Chest']: { isAvailable:  function () {
                return items.MasterSword && items.GTGKey >= 4 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },
            ['Maze Left Third Chest']: { isAvailable:  function () {
                return items.MasterSword && items.GTGKey >= 5 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },
            ['Maze Big Chest']: { isAvailable: function () {
                return items.MasterSword && items.GTGKey >= 7 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()); } },                                               
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
            ['Child Switch Room']: { isAvailable: function () {
                return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic)); } },
            ['Child 1st Floor Torches']: { isAvailable:  function () {
                return (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest ==0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic)); } },
            ['Child Lizalfos East Chest']: { isAvailable:  function () {
                return items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic))))); } },
            ['Child Lizalfos North Chest']: { isAvailable: function () {
                return items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic))))); } },
            ['Large Torch Chest']: { isAvailable:  function () {
                return items.SpiritKey && 
			(	(items.Ocarina && items.RequiemofSpirit && 
				 (items.Slingshot || items.Boomerang || (items.Bombchu && BombchuLogic)) && 
				 (items.Bombs || (items.Bombchu && BombchuLogic)) 
				)
			 ||	( ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit) && 
				  items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Magic && (items.Dins || (items.Fire && items.Bow))) ) ); } },
            ['Sun Block Room Chest']: { isAvailable: function () {
                return items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit && (items.Bombs|| (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Dins || (items.Fire && items.Bow)) && items.Magic)) ; } },
            ['Colossus Right Hand Chest']: { isAvailable:  function () {
                return (items.RequiemofSpirit && items.SpiritKey >= 2 && items.Ocarina && (items.Bombs|| (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.SpiritKey >= 2); } },            
            ['Wolfos Lullaby Chest']: { isAvailable:  function () {
                return items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.Ocarina && items.ZeldasLullaby; } },
            ['Silver Rupee Halfpipe']: { isAvailable:  function () {
                return items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)); } },
            ['Floormaster Left Chest']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)); } },
            ['Floormaster Right Chest']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)); } },            
            ['Statue\'s Hand after Lullaby']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby; } },
            ['Top Right after Lullaby']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot); } },
            ['Four Armos Side Room']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey >= 2 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.MirrorShield && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Left Invisible Chest']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit); } },
            ['Right Invisible Chest']: { isAvailable: function () {
                return items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit); } },
            ['Colossus Left Hand Chest']: { isAvailable: function () {
                return items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit); } },
            ['Boss Key Chest']: { isAvailable: function () {
                return items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.ZeldasLullaby && items.Ocarina && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit); } },
            ['Adult Lizalfos Chest']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && items.MirrorShield && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit); } },
            ['Twinrova']: { isAvailable:  function () {
                return items.MasterSword && items.SpiritKey >= 3 &&(((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.MirrorShield && items.Hookshot && items.BossSpirit); } },
            },
        isBeatable: function(){
            return this.canGetChest();
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
                return items.Ocarina && items.SongofStorms; } },
            ['Front Center Bombable']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Center Large Chest']: { isAvailable: function () {
                return items.Ocarina && items.SongofStorms; } },
            ['Underwater Left Chest']: { isAvailable:  function () {
                return items.SongofStorms && items.Ocarina && items.ZeldasLullaby; } },
            ['Coffin Key']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && (items.Scale || items.ZeldasLullaby); } },
            ['Center Small Chest']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms; } },
            ['Back Left Bombable']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Right Bottom Hidden Wall']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms; } },
            ['Locked Pits']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && items.WellKey >= 1; } },
            ['Like Like Chest']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && items.WellKey >= 1; } },
            ['Basement Chest']: { isAvailable:  function () {
                return items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove); } },
            ['Underwater Front Chest']: { isAvailable: function () {
                return items.SongofStorms && items.Ocarina && items.ZeldasLullaby ; } },
            ['Dead Hand']: { isAvailable:  function () {
                return items.SongofStorms && items.Ocarina && items.ZeldasLullaby && (items.KokiriSword || items.Stick); } },
            ['Invisible Chest']: { isAvailable:  function () {
                return items.SongofStorms && items.Ocarina && items.ZeldasLullaby; } },
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
            ['Keese and Redead Room']: { isAvailable:  function () {
                return items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot); } },
            ['Deadhand Room']: { isAvailable: function () {
                return items.MasterSword && items.NocturneofShadow  && items.Magic&& items.Magic && items.Dins && (items.HoverBoots || items.Hookshot); } },
            ['1st Gibdos Room']: { isAvailable:  function () {
                return items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots; } },
            ['1st Silver Rupees']: { isAvailable: function () {
                return items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots; } },
            ['Like Like Visible Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Like Like Invisible Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Falling Spikes Lower Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Falling Spikes Upper Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove; } },
            ['Falling Spikes Switch Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic))  && items.Glove; } },
            ['Readeads and Silver Rupees']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Skull Pot Bombing']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot; } },
            ['Readead and Hint']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot; } },
            ['2nd Gibdos Room']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot; } },
            ['Gibdos Hidden Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot; } },
            ['Floormaster Room']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby; } },            
            ['Burnable Spikes Left Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby; } },
            ['Bongo Bongo']: { isAvailable:  function () {
                return items.MasterSword && items.ShadowKey >= 5 && items.BossShadow && (items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.Bow || items.Scarecrow >= 2)); } },
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
            ['Lobby Chest']: { isAvailable:  function () {
                return items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic) ; } },
            ['Armos Chest']: { isAvailable:  function () {
                return items.Bombs || (items.MasterSword && items.Hammer) || items.Glove || (items.Bombchu && BombchuLogic) ; } },
            ['Bomb Flower Platform']: { isAvailable:  function () {
                return items.Bombs || (items.MasterSword && items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic) ; } },
            ['Top Floor Big Chest']: { isAvailable:  function () {
                return (items.MasterSword || items.Slingshot) && items.Bombs || (items.Hammer && items.Bow) || items.Glove || (items.Bombchu && BombchuLogic) ; } },
            ['End of Bridge Chest']: { isAvailable:  function () {
                return (items.MasterSword || items.Slingshot) && items.Bombs || (items.Hammer && items.Bow) || (items.Bombchu && BombchuLogic) ; } },
            ['Chest Above King Dodongo']: { isAvailable: function () {
                return (items.MasterSword || items.Slingshot) && items.Bombs || (items.Bombchu && BombchuLogic) ; } },
            ['King Dodongo']: { isAvailable: function () {
                return (items.MasterSword || items.Slingshot) && (items.Glove && (items.Bombchu && BombchuLogic)) || items.Bombs ; } },
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
                return items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); } },
            ['Fire Dancer Chest']: { isAvailable: function () {
                return items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer ; } },
            ['Boss Key Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer; } },
            ['Lava Room Open Chest']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) ; } },
            ['Lava Room Bombable Wall']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Maze Lower Chest']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Maze Side Room']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Map Chest']: { isAvailable: function () {
                return items.MasterSword && ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove; } },           
            ['Maze Upper Chest']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove; } },
            ['Maze Bombable Pit']: { isAvailable:  function () {
                return items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Scarecrow Chest']: { isAvailable: function () {
                return items.MasterSword && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina && items.Scarecrow >= 2; } },
            ['Flame Maze Side Room']: { isAvailable: function () {
                return items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove; } },
            ['Song of Time Block']: { isAvailable:  function () {
                return items.MasterSword && (items.FireKey >= 7 || (items.FireKey >=6 && items.HoverBoots)) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer; } },
            ['Megaton Hammer Chest']: { isAvailable: function () {
                return items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer); } },
            ['Volvagia']: { isAvailable: function () {
                return items.MasterSword && items.BossFire && ((items.GoronTunic || items.Bottle) && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs))); } },
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
                return (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && (items.Slingshot || items.Boomerang || items.Bombs || (items.Bombchu && BombchuLogic) ); } },
            ['Map Chest']: { isAvailable:  function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)  || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang; } },
            ['Compass Chest']: { isAvailable:  function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)  || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang; } },
            ['Barinade']: { isAvailable:  function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)  || items.Scale) && (items.ZoraLetter || OpenFountain) && items.Boomerang; } },
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
            ['1st Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots); } },
            ['Alcove Chest']: { isAvailable:  function () {
                return items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots); } },
            ['Alcove Heart Piece']: { isAvailable:  function () {
                return items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots); } },
            ['White Wolfos']: { isAvailable:  function () {
                return items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots); } },
            ['Sheilk in Ice Cavern']: { isAvailable:  function () {
                return items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots); } },
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
            ['Lobby Chest']: { isAvailable:  function () {
                return items.MasterSword && items.Hookshot; } },
            ['1st Floor Stalfos']: { isAvailable: function () {
                return items.MasterSword && items.Hookshot; } },           
            ['Bubble Chest']: { isAvailable: function () {
                return items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >=2 && items.Bow && items.Glove)); },  }, 
            ['Courtyard Hookshot Chest']: { isAvailable: function () {
                return items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >=2 && items.Bow && items.Glove)); },  }, 
            ['Well Chest']: { isAvailable: function () {
                return items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >=2 && items.Bow && items.Glove)); },  }, 
            ['Push Block Room Chest']: { isAvailable: function () {
                return items.MasterSword && items.ForestKey && items.Hookshot && items.Bow && items.Glove; } },
            ['Boss Key Chest']: { isAvailable: function () {
                return items.MasterSword && items.ForestKey >= 2 && items.Hookshot && items.Bow && items.Glove; } },
            ['Floormaster Chest']: { isAvailable: function () {
                return items.MasterSword && items.Hookshot && ((items.Bow && items.ForestKey >= 2 && items.Glove) || (items.HoverBoots && items.ForestKey)); },  },
            ['Red Poe Chest']: { isAvailable:  function () {
                return items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove; } },
            ['2nd Floor Stalfos']: { isAvailable: function () {
                return items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Glove; },   },            
            ['Blue Poe Chest']: { isAvailable: function () {
                return items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove; } },
            ['Checkerboard Chest']: { isAvailable: function () {
                return items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >=3 && items.HoverBoots)) && items.Hookshot && items.Glove && (items.Bow || (items.Dins && items.Magic)); } },
            ['Near Boss Chest']: { isAvailable: function () {
                return items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >=3 && items.HoverBoots)) && items.Hookshot && items.Bow && items.Glove; } },
            ['Phantom Ganon']: { isAvailable: function () {
                return items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >=3 && items.HoverBoots)) && items.BossForest && items.Hookshot && items.Bow && items.Glove; } },
        },
        isBeatable: function(){
            return this.canGetChest();
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
            ['Forest Chest']: { isAvailable: function () { 
                return items.MasterSword && isBridgeOpen(); } },
            ['Ice Chests x2']: { isAvailable: function () { 
                return items.MasterSword && isBridgeOpen(); } },
            ['Spirit Chest x2']: { isAvailable:  function () {
                return items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu && BombchuLogic); } },
            ['Shadow Chests x2']: { isAvailable:  function () {
                return items.MasterSword && isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || items.Hookshot >= 2) && items.HoverBoots; } },
            ['Light Chests x6']: { isAvailable:  function () {
                return items.MasterSword && isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Invisible CHest']: { isAvailable:  function () {
                return items.MasterSword && isBridgeOpen() && items.Glove >= 3; } },
            ['Light Trial Lullaby Chest']: { isAvailable:  function () {
                return items.MasterSword && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby && items.CastleKey; } },
            ['Boss Key Chest']: { isAvailable: function () {
                return items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials); } },
            ['GanonDorf']: { isAvailable: function () {
                return items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light; } },
        },
        trials: {
            ['Forest Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins)); } },
            ['Fire Trial Clear']: { isAvailable:  function () {
                return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2; } },
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
            return generalCanGetChest(this.trials) && items.BossCastle;
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
            ['Slingshot Mini Game']: { isAvailable: function () {
                return (true); } },
            ['Return Richard']: { isAvailable: function () {
                return (true); } },
            ['Malon\s Weird Egg']: { isAvailable: function () {
                return (true); } },
            ['Song from Impa']: { isAvailable: function () {
                return (items.Mask >= 1); } },
            ['Bombchu Bowling 1']: { isAvailable: function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Bombchu Bowling 2']: { isAvailable: function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)); } },
            ['Treasure Chest Mini Game']: { isAvailable: function () {
                return (items.Lens && items.Magic); } },                       
            ['Child Fairy Fountain']: { isAvailable: function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby; } },
            ['Prelude of Light']: { isAvailable: function () {
                return (items.MasterSword && items.ForestMedallion); } },
            ['Zelda\'s Secret Weapon']: { isAvailable: function () {
                return (items.MasterSword && items.ShadowMedallion && items.SpiritMedallion); } },
            ['Gold Gauntlets Fairy']: { isAvailable: function () {
                return (items.MasterSword && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby); } },           
            ['10 Big Poes']: { isAvailable: function () {
                return (items.MasterSword && items.Bow && items.EponasSong && items.Bottle); } },
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
            ['Man on Roof']: { isAvailable: function () {
                return true; } },
            ['Open Grotto']: { isAvailable: function () {
                return (true); } },
            ['Kakariko Redead Grotto']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)); } },
            ['Cow Heart Piece']: { isAvailable: function () {
                return (true); } },
            ['Anju\'s Adult item']: { isAvailable: function () {
                return (items.MasterSword); } },            
            ['Windmill Song']: { isAvailable: function () {
                return items.MasterSword && items.Ocarina; } },
            ['Windmill Heart Piece']: { isAvailable: function () {
                return items.MasterSword || items.Boomerang; } },
            ['Bow Mini Game']: { isAvailable: function () {
                return (items.MasterSword && items.Bow); } },                   
            ['Nocturne of Shadow']: { isAvailable: function () {
                return (items.MasterSword && items.ForestMedallion && items.FireMedallion && items.WaterMedallion); } },            
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
                return items.MasterSword && (items.Glove || items.Bombs || items.Bow || (items.Bombchu && BombchuLogic)); } },  
            ['Left Boulder Maze Chest']: { isAvailable: function () {
                return items.MasterSword && (items.Glove >= 2 || items.Hammer); } },
            ['Center Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic)); } },
            ['Right Boulder Maze Chest']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && (items.Hammer || items.Glove >= 2)) || (items.Bombchu && BombchuLogic)); } },
            ['Big Rolling Goron']: { isAvailable: function () {
                return (items.Bombs); } },
            ['Spinning Pot Heart Piece']: { isAvailable: function () {
                return ((items.Glove || items.Bombs) && ((items.Ocarina && items.ZeldasLullaby && items.Stick) || (items.Magic && items.Dins))); } },
            ['Darunia\'s Dance']: { isAvailable: function () {
                return (items.Ocarina && items.ZeldasLullaby && items.SariasSong); } },         
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
                return (items.DekuShield || items.Nuts || items.Stick || items.Bombs || (items.Bombchu && BombchuLogic) || items.KokiriSword || items.Boomerang); } },
            ['Skull Kid']: { isAvailable: function () {
                return (items.Ocarina && items.SariasSong); } },
            ['Ocarina Memory Game']: { isAvailable: function () {
                return (items.Ocarina); } },
            ['Slingshot Target']: { isAvailable: function () {
                return (items.Slingshot); } },
            ['Bomb Grotto Chest']: { isAvailable: function () {
                return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic); } },
            ['Deku Sale Grotto $40']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && (items.DekuShield || items.Nuts || items.Stick); } },
            ['Wolfos Grotto']: { isAvailable: function () {
                return items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic); } },
            ['Saria\'s Song']: { isAvailable: function () {
                return items.Mask >= 2; } },            
            ['Deku Theater Skull Mask']: { isAvailable: function () {
                return items.Mask >= 6; } },
            ['Deku Theater Mask of Truth']: { isAvailable: function () {
                return items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.Mask >= 12; } },
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
            ['Diving Mini Game']: { isAvailable: function () {
                return items.Bombs || items.Scale || (items.Bombchu && BombchuLogic); } },
            ['Torch Run']: { isAvailable: function () {
                return items.Bombs || items.Scale || (items.Bombchu && BombchuLogic); } },
            ['Zora Fairy Fountain']: { isAvailable: function () {
                return (items.ZoraLetter || OpenFountain) && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby; } },
            ['Iceberg Heart Piece']: { isAvailable: function () {
                return items.MasterSword && (items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots); } },
            ['Underwater Heart Piece']: { isAvailable: function () {
                return items.MasterSword && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic)) && (items.ZoraLetter || OpenFountain) && items.IronBoots && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots); } },
            ['Thaw King Zora']: { isAvailable: function () {
                return items.Bottle && items.MasterSword && ((items.Ocarina && items.ZeldasLullaby) || items.HoverBoots) && ((((items.ZoraLetter || OpenFountain) && (items.Bombs || items.Scale || (items.Bombchu && BombchuLogic))) || isBridgeOpen() || items.Wallet >= 3)); } },
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
            ['Cavern Roof Heart Piece']: { isAvailable: function () {
                return true; } },
            ['Breakable Wall Chest']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic) || items.Glove); } },
            ['Storms Grotto']: { isAvailable: function () {
                return (items.Ocarina && items.SongofStorms); } },
            ['Bolero of Fire']: { isAvailable: function () {
                return items.MasterSword && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins)); } },
            ['Crater Bean Heart Piece']: { isAvailable: function () {
                return (items.Bean && items.BoleroofFire) || (items.MasterSword && items.HoverBoots); } },            
            ['Crater Fairy Fountain']: { isAvailable: function () {
                return items.MasterSword && items.Hammer && items.Ocarina && items.ZeldasLullaby; } },
            ['Crater Grotto']: { isAvailable: function () {
                return (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)); } },
            ['Crater Wall Heart Piece']: { isAvailable: function () {
                return (items.Bombs || (items.Bombchu && BombchuLogic)) || (items.MasterSword && (items.BoleroofFire && (items.HoverBoots || items.Hookshot)) || items.Bow || items.Glove); } },
            ['Summit Fairy Fountain']: { isAvailable: function () {
                return ((items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)) && items.Ocarina && items.ZeldasLullaby); } },
            ['Biggoron\'s Finest Work']: { isAvailable: function () {
                return (items.MasterSword && items.Trade >= 1 && (items.ZoraLetter || OpenFountain) && (items.EponasSong || items.Hookshot >= 2)) || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) || items.Trade >= 9; } },
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
            ['Talon\'s Cucco game']: { isAvailable: function() {return items.Mask >= 2;} },
            ['Song from Malon']: { isAvailable: function() {return items.Mask >= 2 && items.Ocarina;} },
            ['Silo Heart Piece']: { isAvailable: function() {return true;} },
            ['Race Ingo']: { isAvailable: function() {return items.MasterSword && items.EponasSong && items.Ocarina;} },
        },
        isBeatable: function(){
            return this.canGetChest();
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
            ['River Heart Piece 1']: { isAvailable: function() {return items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale);} },
            ['River Open Grotto']: { isAvailable: function() {return items.MasterSword || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale);} },
            ['River Heart Piece 2']: { isAvailable: function() {return (items.MasterSword && items.HoverBoots) || (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale);} },           
            ['Frogs in the Rain']: { isAvailable: function() {return items.Ocarina && items.SongofStorms && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale);} },
            ['Frogs Mini Game']: { isAvailable: function() {return items.Ocarina && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && items.ZeldasLullaby && items.EponasSong && items.SariasSong && items.SunsSong && items.SongofTime && items.SongofStorms;} },
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
        x: "40.0%",
        y: "81.0%",
        chestlist: {
            ['Child Fishing']: { isAvailable: function() {return true;} },
            ['Silver Scale item']: { isAvailable: function() {return items.Scale;} },
            ['Diving in the Lab']: { isAvailable: function() {return items.MasterSword && (items.Scale >= 2 || (items.IronBoots && items.Hookshot));} },
            ['Lab Roof Heart Piece']: { isAvailable: function() {return items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));} },
            ['Adult Fishing']: { isAvailable: function() {return items.MasterSword && (items.Bean || (items.Hookshot && items.Scarecrow >= 2));} },
            ['Shoot the Sun']: { isAvailable: function() {return items.MasterSword && items.Bow && items.Hookshot >= 2 && items.Scarecrow >= 2;} },
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
            ['Hammer Rocks Chest']: { isAvailable: function() { return ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && items.Hammer; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
        {
        name: "Gerudo Fortress",
        x: "15.5%",
        y: "16.4%",
        chestlist: {
            ['Fortress Rooftop Chest']: { isAvailable: function() { return ((items.Ocarina && items.EponasSong) || items.Hookshot >= 2 || isFortressOpen()) && items.MasterSword && (items.HoverBoots || (items.Scarecrow >= 2 && items.Hookshot) || items.Hookshot >= 2); } },
            ['Horseback Archery 1000 pts']: { isAvailable: function() { return isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina; } },
            ['Horseback Archery 1500 pts']: { isAvailable: function() { return isFortressOpen() && items.MasterSword && items.Bow && items.EponasSong && items.Ocarina; } },
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
        y: "15.9%",
        chestlist: {           
            ['Requiem of Spirit']: { isAvailable: function() {return (items.MasterSword && (((items.Ocarina && items.EponasSong) || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || (items.Ocarina && items.RequiemofSpirit); } },
            ['Desert Bean Heart Piece']: { isAvailable: function() {return items.MasterSword && items.Bean && items.Ocarina && items.RequiemofSpirit} },          
            ['Desert Fairy Fountain']: { isAvailable: function() {return (items.Ocarina && items.ZeldasLullaby && (items.Bombs || (items.Bombchu && BombchuLogic))) && (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) || items.RequiemofSpirit)} },
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
            ['Vanilla Shield Grave']: { isAvailable: function () {
                return (true); } },
            ['Magic Bean Heart Piece']: { isAvailable: function () {
                return (items.MasterSword && (items.Bean || items.Hookshot >= 2)) || items.Boomerang; } }, 
            ['Dampe Race 1']: { isAvailable: function () {
                return (items.MasterSword); } },
            ['Dampe Race 2']: { isAvailable: function () {
                return (items.MasterSword); } },          
            ['Redead Grave']: { isAvailable: function () {
                return (items.Ocarina && items.SunsSong); } },
            ['Composer Brothers\' Song']: { isAvailable: function () {
                return (items.Ocarina && items.ZeldasLullaby); } },
            ['Royal Tomb Chest']: { isAvailable: function () {
                return (items.Ocarina && items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic)); } },                          
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
            if(items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "South East Grotto",
        x: "60.0%",
        y: "59.0%",
        isAvailable: function(){
            if(items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic))
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
        name: "Bomb Grotto Deku Sale 10$",
        x: "42.0%",
        y: "64.0%",
        isAvailable: function(){
            if(items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Tektite Grotto",
        x: "42.0%",
        y: "33.0%",
        isAvailable: function(){
            if ( 
		    ( 
			( (items.Bombs || (items.Bombchu && BombchuLogic)
			  ) 
			  || (items.Hammer && items.MasterSword)
			)
		    )
		   && (items.Scale >= 2 || (items.MasterSword && items.IronBoots)
		      )
	        )
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Haunted Wasteland Chest",
        x: "14.0%",
        y: "25.0%",
        isAvailable: function() {
		if (items.MasterSword && (((items.EponasSong || isFortressOpen()) && items.HoverBoots) || items.Hookshot >= 2) && (items.Magic && (items.Dins || (items.Bow && items.Fire))))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Skulltula & Hint Grotto",
        x: "36.1%",
        y: "42.0%",
        isAvailable: function(){
    		if (items.Magic && ( (items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || ( ( (items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)) ) ) )
	        return "available"; 
            return "unavailable";
        }
    },
    {
        name: "Skulltula Grotto",
        x: "57.3%",
        y: "26.0%",
        isAvailable: function(){
        	if ( ( (items.Bombs || (items.Bombchu && BombchuLogic)
		       ) && items.Boomerang
		     ) || ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)
			    ) && items.MasterSword && items.Hookshot
			  ) 
		   )
        	return "available";
            return "unavailable";
        }
    },    
]
