var defaultItemGrid = [
    [
        "Bow",
        "Hookshot",
        "Hammer",
        "Bombs",
        "Scale",
        "Glove",
        "Nuts"
    ],
    [
        "KokiriSword",
        "BiggoronSword",
        "MirrorShield",
        "ZoraTunic",
        "GoronTunic",
        "IronBoots",
        "HoverBoots"
    ],
    [
        "Dins",
        "Farores",
        "Nayrus",
        "Magic",
        "Fire",
        "Ice",
        "Light"
    ],
    [
        "Slingshot",
        "Boomerang",
        "Lens",
        "Bottle",
        "ZoraLetter",
        "Wallet",
        "Skulltula"
    ],
    [
        "ZeldasLullaby",
        "EponasSong",
        "SunsSong",
        "SariasSong",
        "SongofTime",
        "SongofStorms",
        "Ocarina"
    ],
    [
        "MinuetofForest",
        "BoleroofFire",
        "SerenadeofWater",
        "NocturneofShadow",
        "RequiemofSpirit",
        "PreludeofLight",
        "Scarecrow"
    ],
    [
        "ForestMedallion",
        "FireMedallion",
        "WaterMedallion",
        "ShadowMedallion",
        "SpiritMedallion",
        "LightMedallion"
    ],
    [
        "Mask",
        "blank",
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
        "blank",
        "Trade"
    ]
]

var items = {
    Bow:0,
    Hookshot:0,
    Hammer:false,
    Slingshot:0,
    Boomerang:false,
    Bombs:0,
    Lens:false,
    Dins:false,
    Farores:false,
    Nayrus:false,
    Fire:false,
    Ice:false,
    Light:false,
    Ocarina:0,
    Bottle:0,
    Wallet:0,
    Skulltula:0,
    Stick:0,
    Nuts:0,
    Bombchu:false,
    Mask:0,
    Trade:0,
    Bean:false,
    Heart:false,

    KokiriSword:false,
    MasterSword:true,
    BiggoronSword:false,
    DekuShield:false,
    HylianShield:false,
    MirrorShield:false,
    KokiriTunic:true,
    GoronTunic:false,
    ZoraTunic:false,
    KokiriBoots:true,
    IronBoots:false,
    HoverBoots:false,
    Glove:0,
    Scale:0,
    StoneofAgony:false,
    Magic:0,
    ZoraLetter:false, 

    ZeldasLullaby:false,
    EponasSong:false,
    SunsSong:false,
    SariasSong:false,
    SongofTime:false,
    SongofStorms:false,
    MinuetofForest:false,
    PreludeofLight:false,
    BoleroofFire:false,
    SerenadeofWater:false,
    NocturneofShadow:false,
    RequiemofSpirit:false,
    Scarecrow:0,

    KokiriEmerald:false,
    GoronRuby:false,
    ZoraSapphire:false,
    ForestMedallion:false,
    FireMedallion:false,
    WaterMedallion:false,
    SpiritMedallion:false,
    ShadowMedallion:false,
    LightMedallion:false,
    Rauru:false,
    
    ForestKey:0,
    FireKey:0,
    WaterKey:false,
    SpiritKey:0,
    ShadowKey:0,
    CastleKey:0,
    WellKey:0,
    GTGKey:0,

    blank: false
};

var itemsMin = {
    Bow:0,
    Slingshot:0,
    Bombs:0,    
    Hookshot:0,
    Ocarina:0,
    Bottle:0,
    Glove:0,
    Scale:0,
    Magic:0,
    Wallet:0,
    Skulltula:0,
    Stick:0,
    Nuts:0,
    Mask:0,
    Trade:0,
    Scarecrow:0,
    
    ForestKey:0,
    FireKey:0,
    SpiritKey:0,
    ShadowKey:0,
    CastleKey:0,
    WellKey:0,
    GTGKey:0,
};

var itemsMax = {
    Bow:3,
    Slingshot:3,
    Bombs:3,    
    Hookshot:2,
    Ocarina:1,
    Bottle:4,
    Glove:3,
    Scale:2,
    Magic:2,
    Wallet:2,
    Skulltula:50,
    Stick:3,
    Nuts:3,
    Mask:7,
    Trade:11,
    Scarecrow:2,
    
    ForestKey:5,
    FireKey:8,
    SpiritKey:3,
    ShadowKey:6,
    CastleKey:2,
    WellKey:3,
    GTGKey:9,
};
