var defaultItemGrid = [
    [
        "SongofTime",
        "KokiriSword",
        "Mask",
        "LightMedallion",
        "Trade",
        "MasterSword",
        "BiggoronSword",
        "MinuetofForest",
        "ForestKey",
        "BossForest",
        "SongofTime",
        "KokiriSword",
        "Mask",
        "LightMedallion",
        "Trade",
        "MasterSword",
        "BiggoronSword",
        "MinuetofForest",
        "ForestKey",
        "BossForest"
    ],
    [
        "SunsSong",
        "DekuShield",
        "ShadowMedallion",
        "Heart",
        "ForestMedallion",
        "HylianShield",
        "MirrorShield",
        "BoleroofFire",
        "FireKey",
        "BossFire",
        "SunsSong",
        "DekuShield",
        "ShadowMedallion",
        "Heart",
        "ForestMedallion",
        "HylianShield",
        "MirrorShield",
        "BoleroofFire",
        "FireKey",
        "BossFire"
    ],
    [
        "SariasSong",
        "KokiriTunic",
        "SpiritMedallion",
        "Wallet",
        "FireMedallion",
        "GoronTunic",
        "ZoraTunic",
        "SerenadeofWater",
        "WaterKey",
        "BossWater",
        "SariasSong",
        "KokiriTunic",
        "SpiritMedallion",
        "Wallet",
        "FireMedallion",
        "GoronTunic",
        "ZoraTunic",
        "SerenadeofWater",
        "WaterKey",
        "BossWater"
    ],
    [
        "EponasSong",
        "KokiriBoots",
        "ZoraLetter",
        "WaterMedallion",
        "Bottle",
        "IronBoots",
        "HoverBoots",
        "Scarecrow",
        "GTGKey",
        "Membership",
        "EponasSong",
        "KokiriBoots",
        "ZoraLetter",
        "WaterMedallion",
        "Bottle",
        "IronBoots",
        "HoverBoots",
        "Scarecrow",
        "GTGKey",
        "Membership"
    ],
    [
        "ZeldasLullaby",
        "Ocarina",
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
        "Scale",
        "Glove",
        "RequiemofSpirit",
        "SpiritKey",
        "BossSpirit",
        "ZeldasLullaby",
        "Ocarina",
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
        "Scale",
        "Glove",
        "RequiemofSpirit",
        "SpiritKey",
        "BossSpirit"
    ],
    [
        "SongofStorms",
        "Stick",
        "Nuts",
        "Lens",
        "Dins",
        "Fire",
        "Bow",
        "NocturneofShadow",
        "ShadowKey",
        "BossShadow",
        "SongofStorms",
        "Stick",
        "Nuts",
        "Lens",
        "Dins",
        "Fire",
        "Bow",
        "NocturneofShadow",
        "ShadowKey",
        "BossShadow"
    ],
    [
        "WellKey",
        "Slingshot",
        "Bombs",
        "Magic",
        "Farores",
        "Ice",
        "Hookshot",
        "PreludeofLight",
        "CastleKey",
        "BossCastle",
        "WellKey",
        "Slingshot",
        "Bombs",
        "Magic",
        "Farores",
        "Ice",
        "Hookshot",
        "PreludeofLight",
        "CastleKey",
        "BossCastle"
    ],
    [
        "Bean",
        "Boomerang",
        "Bombchu",
        "StoneofAgony",
        "Nayrus",
        "Light",
        "Hammer",
        "BigPoe",
        "Skulltula",
        "GoMode"
        "Bean",
        "Boomerang",
        "Bombchu",
        "StoneofAgony",
        "Nayrus",
        "Light",
        "Hammer",
        "BigPoe",
        "Skulltula",
        "GoMode"
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
    Ocarina:1,
    Bottle:0,
    Wallet:1,
    Skulltula:0,
    Stick:1,
    Nuts:1,
    Bombchu:false,
    Mask:1,
    Trade:0,
    Bean:false,
    Heart:false,

    KokiriSword:false,
    MasterSword:1,
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
    BigPoe:0,
    GoMode:false,
    
    ForestKey:0,
    FireKey:0,
    WaterKey:0,
    SpiritKey:0,
    ShadowKey:0,
    CastleKey:0,
    GTGKey:0,
    WellKey:0,
    
    BossForest:0,
    BossFire:0,
    BossWater:0,
    BossSpirit:0,
    BossShadow:0,
    BossCastle:0,
    Membership:false,

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
    Wallet:1,
    Skulltula:0,
    Stick:1,
    Nuts:1,
    Mask:0,
    Trade:0,
    Scarecrow:0,
    ForestKey:0,
    FireKey:0,
    WaterKey:0,
    SpiritKey:0,
    ShadowKey:0,
    CastleKey:0,
    GTGKey:0,
    WellKey:0,
    BossForest:0,
    BossFire:0,
    BossWater:0,
    BossSpirit:0,
    BossShadow:0,
    BossCastle:0,
    BigPoe:0,
    
    MasterSword:0.
};

var itemsMax = {
    Bow:3,
    Slingshot:3,
    Bombs:3,    
    Hookshot:2,
    Ocarina:2,
    Bottle:4,
    Glove:3,
    Scale:2,
    Magic:2,
    Wallet:4,
    Skulltula:50,
    Stick:3,
    Nuts:3,
    Mask:12,
    Trade:11,
    Scarecrow:2,
    ForestKey:5,
    FireKey:8,
    WaterKey:6,
    SpiritKey:5,
    ShadowKey:5,
    CastleKey:2,
    GTGKey:9,
    WellKey:3,
    BossForest:1,
    BossFire:1,
    BossWater:1,
    BossSpirit:1,
    BossShadow:1,
    BossCastle:1,
    BigPoe:10,
    MasterSword:1,
};
var itemsMaxMQ = {
    ForestKey: 6,
};
