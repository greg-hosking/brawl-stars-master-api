const classes = {
  damageDealer: {
    id: 1,
    name: 'Damage Dealer',
  },
  tank: {
    id: 2,
    name: 'Tank',
  },
  assassin: {
    id: 3,
    name: 'Assassin',
  },
  support: {
    id: 4,
    name: 'Support',
  },
  hybrid: {
    id: 5,
    name: 'Hybrid',
  },
};

const rarities = {
  trophyRoad: {
    id: 1,
    name: 'Trophy Road',
    color: '#b9eaff',
  },
  rare: {
    id: 2,
    name: 'Rare',
    color: '#68fd58',
  },
  superRare: {
    id: 3,
    name: 'Super Rare',
    color: '#5ab3ff',
  },
  epic: {
    id: 4,
    name: 'Epic',
    color: '#d850ff',
  },
  mythic: {
    id: 5,
    name: 'Mythic',
    color: '#fe5e72',
  },
  legendary: {
    id: 6,
    name: 'Legendary',
    color: '#fff11e',
  },
  chromatic: {
    id: 7,
    name: 'Chromatic',
    color: '#f88f25',
  },
};

export const brawlers = {
  brawlers: [
    {
      id: 16000000,
      name: 'Shelly',
      class: classes.damageDealer,
      rarity: rarities.trophyRoad,
      trophiesToUnlock: 0,
      description:
        "Shelly's spread-fire shotgun blasts the other team with buckshot. Her Super destroys cover and keeps her opponents at a distance!",
      imageUrl:
        'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/Shelly.webp',
      offenseRating: 0.8,
      defenseRating: 0.6,
      utilityRating: 0.4,
      health: {
        level1: 3800,
        level2: 3990,
        level3: 4180,
        level4: 4370,
        level5: 4560,
        level6: 4750,
        level7: 4940,
        level8: 5130,
        level9: 5320,
        level10: 5510,
        level11: 5700,
      },
      movementSpeed: 'normal',
      attack: {
        name: 'Buckshot',
        description:
          "Shelly's boomstick fires a wide spread of pellets to a medium range. The more pellets hit, the greater the damage.",
        damage: {
          level1: 1500,
          level2: 1575,
          level3: 1650,
          level4: 1725,
          level5: 1800,
          level6: 1875,
          level7: 1950,
          level8: 2025,
          level9: 2100,
          level10: 2175,
          level11: 2250,
        },
        range: 'long',
        reloadSpeed: 'normal',
      },
      super: {
        name: 'Super Shell',
        description:
          "Shelly's Super Shell obliterates both cover and enemies. Any survivors get knocked back.",
      },
      starPowers: [
        {
          id: 23000076,
          name: 'Shell Shock',
          description:
            "Shelly's Super shells slow down enemies for 4.5 seconds!",
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/star_powers/Shell_Shock.webp',
        },
        {
          id: 23000135,
          name: 'Band-Aid',
          description:
            'When Shelly falls below 40% health, she instantly heals for 2000 health. Band-Aid recharges in 15 seconds.',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/star_powers/Band-Aid.webp',
        },
      ],
      gadgets: [
        {
          id: 23000255,
          name: 'Fast Forward',
          description: 'Shelly dashes ahead, skipping a few unnecessary steps!',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/gadgets/Fast_Forward.webp',
        },
        {
          id: 23000288,
          name: 'Clay Pigeons',
          description:
            "On activation, for the next 5 seconds Shelly's main attacks focus fire to a smaller area with an increased range.",
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/gadgets/Clay_Pigeons.webp',
        },
      ],
      skins: [
        {
          name: 'Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/Shelly.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/neutral.webp',
            },
            {
              name: 'happy',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/happy.webp',
            },
            {
              name: 'sad',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/sad.webp',
            },
            {
              name: 'angry',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/angry.webp',
            },
            {
              name: 'gg',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/gg.webp',
            },
            {
              name: 'clap',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/clap.webp',
            },
            {
              name: 'thanks',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/thanks.webp',
            },
            {
              name: 'phew',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/phew.webp',
            },
            {
              name: 'special',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/special.webp',
            },
          ],
        },
        {
          name: 'Star Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Star_Shelly/Star_Shelly.webp',
        },
        {
          name: 'Bandita Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Bandita_Shelly/Bandita_Shelly.webp',
        },
        {
          name: 'Boca Juniors Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Boca_Juniors_Shelly/Boca_Juniors_Shelly.webp',
        },
        {
          name: 'America Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/America_Shelly/America_Shelly.webp',
        },
        {
          name: 'U De Chile Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/U_De_Chile_Shelly/U_De_Chile_Shelly.webp',
        },
        {
          name: 'PSG Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/PSG_Shelly/PSG_Shelly.webp',
        },
        {
          name: 'Witch Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Witch_Shelly/Witch_Shelly.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Witch_Shelly/pins/neutral.webp',
            },
          ],
        },
        {
          name: 'True Silver Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/True_Silver_Shelly/True_Silver_Shelly.webp',
        },
        {
          name: 'True Gold Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/True_Gold_Shelly/True_Gold_Shelly.webp',
        },
        {
          name: 'Princess Shelly',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Princess_Shelly/Princess_Shelly.webp',
        },
      ],
    },
    {
      id: 16000001,
      name: 'Colt',
      class: classes.damageDealer,
      rarity: rarities.trophyRoad,
      trophiesToUnlock: 60,
      description:
        'An unlikely hero that often finds himself in the wrong place at the right time. He’s not one to shy away from a mirror and is simply brimming with confidence!',
      imageUrl:
        'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/Colt.webp',
      offenseRating: 1,
      defenseRating: 0.4,
      utilityRating: 0.4,
      health: {
        level1: 2800,
        level2: 2940,
        level3: 3080,
        level4: 3220,
        level5: 3360,
        level6: 3500,
        level7: 3640,
        level8: 3780,
        level9: 3920,
        level10: 4060,
        level11: 4200,
      },
      movementSpeed: 'normal',
      attack: {
        name: 'Six-Shooters',
        description:
          'Colt shoots six straight long-range shots out of his revolvers.',
        damage: {
          level1: 2160,
          level2: 2268,
          level3: 2376,
          level4: 2484,
          level5: 2592,
          level6: 2700,
          level7: 2808,
          level8: 2916,
          level9: 3024,
          level10: 3132,
          level11: 3240,
        },
        range: 'long',
        reloadSpeed: 'normal',
      },
      super: {
        name: 'Bullet Storm',
        description:
          'Colt rattles off a massive burst of bullets that shoot extra far and destroy cover.',
      },
      starPowers: [
        {
          id: 23000077,
          name: 'Slick Boots',
          description: "Colt's movement speed is increased by 13%.",
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/star_powers/Slick_Boots.webp',
        },
        {
          id: 23000138,
          name: 'Magnum Special',
          description:
            "Colt's attack range and bullet speed are increased by 11%.",
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/star_powers/Magnum_Special.webp',
        },
      ],
      gadgets: [
        {
          id: 23000273,
          name: 'Speedloader',
          description: 'Colt instantly reloads 2 ammo.',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/gadgets/Speedloader.webp',
        },
        {
          id: 23000319,
          name: 'Silver Bullet',
          description:
            "Colt's next attack is a powerful shot that deals as much damage as 2 of his regular bullets, while going through obstacles and opponents alike.",
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/gadgets/Silver_Bullet.webp',
        },
      ],
      skins: [
        {
          name: 'Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/Colt.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/neutral.webp',
            },
            {
              name: 'happy',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/happy.webp',
            },
            {
              name: 'sad',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/sad.webp',
            },
            {
              name: 'angry',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/angry.webp',
            },
            {
              name: 'gg',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/gg.webp',
            },
            {
              name: 'clap',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/clap.webp',
            },
            {
              name: 'thanks',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/thanks.webp',
            },
            {
              name: 'phew',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/phew.webp',
            },
            {
              name: 'special',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Colt/pins/special.webp',
            },
          ],
        },
        {
          name: 'Rockstar Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Rockstar_Colt/Rockstar_Colt.webp',
        },
        {
          name: 'River Plate Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/River_Plate_Colt/River_Plate_Colt.webp',
        },
        {
          name: 'Cerro Porteño Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Cerro_Porteno_Colt/Cerro_Porteno_Colt.webp',
        },
        {
          name: 'Atl. Nacional Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Atl_Nacional_Colt/Atl_Nacional_Colt.webp',
        },
        {
          name: 'Club America Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Club_America_Colt/Club_America_Colt.webp',
        },
        {
          name: 'Handsome Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Handsome_Colt/',
        },
        {
          name: 'Royal Agent Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Royal_Agent_Colt/Royal_Agent_Colt.webp',
        },
        {
          name: 'Corsair Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Corsair_Colt/Corsair_Colt.webp',
        },
        {
          name: 'Outlaw Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Outlaw_Colt/Outlaw_Colt.webp',
        },
        {
          name: 'True Silver Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/True_Silver_Colt/True_Silver_Colt.webp',
        },
        {
          name: 'True Gold Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/True_Gold_Colt/True_Gold_Colt.webp',
        },
        {
          name: 'Challenger Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Challenger_Colt/Challenger_Colt.webp',
        },
        {
          name: 'Gunslinger Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Gunslinger_Colt/Gunslinger_Colt.webp',
        },
        {
          name: 'Sharktooth Colt',
          imageUrl:
            'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Sharktooth_Colt/Sharktooth_Colt.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-master-cdn.s3.amazonaws.com/brawlers/Colt/skins/Sharktooth_Colt/pins/neutral.webp',
            },
          ],
        },
      ],
    },
    // {
    //   id: 16000002,
    //   name: 'Bull',
    //   starPowers: [
    //     {
    //       id: 23000078,
    //       name: 'Berserker',
    //     },
    //     {
    //       id: 23000137,
    //       name: 'Tough Guy',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000272,
    //       name: 'T-Bone Injector',
    //     },
    //     {
    //       id: 23000310,
    //       name: 'Stomper',
    //     },
    //   ],
    // },
    // {
    //   id: 16000003,
    //   name: 'Brock',
    //   starPowers: [
    //     {
    //       id: 23000079,
    //       name: 'More Rockets!',
    //     },
    //     {
    //       id: 23000150,
    //       name: 'Rocket No. 4',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000245,
    //       name: 'Rocket Laces',
    //     },
    //     {
    //       id: 23000316,
    //       name: 'Rocket Fuel',
    //     },
    //   ],
    // },
    // {
    //   id: 16000004,
    //   name: 'Rico',
    //   starPowers: [
    //     {
    //       id: 23000080,
    //       name: 'Super Bouncy',
    //     },
    //     {
    //       id: 23000156,
    //       name: 'Robo Retreat',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000246,
    //       name: 'Multiball Launcher',
    //     },
    //     {
    //       id: 23000409,
    //       name: 'Bouncy Castle',
    //     },
    //   ],
    // },
    // {
    //   id: 16000005,
    //   name: 'Spike',
    //   starPowers: [
    //     {
    //       id: 23000081,
    //       name: 'Fertilize',
    //     },
    //     {
    //       id: 23000151,
    //       name: 'Curveball',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000247,
    //       name: 'Popping Pincushion',
    //     },
    //     {
    //       id: 23000406,
    //       name: 'Life Plant',
    //     },
    //   ],
    // },
    // {
    //   id: 16000006,
    //   name: 'Barley',
    //   starPowers: [
    //     {
    //       id: 23000082,
    //       name: 'Medical Use',
    //     },
    //     {
    //       id: 23000158,
    //       name: 'Extra Noxious',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000250,
    //       name: 'Sticky Syrup Mixer',
    //     },
    //     {
    //       id: 23000293,
    //       name: 'Herbal Tonic',
    //     },
    //   ],
    // },
    // {
    //   id: 16000007,
    //   name: 'Jessie',
    //   starPowers: [
    //     {
    //       id: 23000083,
    //       name: 'Energize',
    //     },
    //     {
    //       id: 23000149,
    //       name: 'Shocky',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000251,
    //       name: 'Spark Plug',
    //     },
    //     {
    //       id: 23000295,
    //       name: 'Recoil Spring',
    //     },
    //   ],
    // },
    // {
    //   id: 16000008,
    //   name: 'Nita',
    //   starPowers: [
    //     {
    //       id: 23000084,
    //       name: 'Bear With Me',
    //     },
    //     {
    //       id: 23000136,
    //       name: 'Hyper Bear',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000249,
    //       name: 'Bear Paws',
    //     },
    //     {
    //       id: 23000314,
    //       name: 'Faux Fur',
    //     },
    //   ],
    // },
    // {
    //   id: 16000009,
    //   name: 'Dynamike',
    //   starPowers: [
    //     {
    //       id: 23000085,
    //       name: 'Dyna-Jump',
    //     },
    //     {
    //       id: 23000155,
    //       name: 'Demolition',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000258,
    //       name: 'Fidget Spinner',
    //     },
    //     {
    //       id: 23000294,
    //       name: 'Satchel Charge',
    //     },
    //   ],
    // },
    // {
    //   id: 16000010,
    //   name: 'El Primo',
    //   starPowers: [
    //     {
    //       id: 23000086,
    //       name: 'El Fuego',
    //     },
    //     {
    //       id: 23000140,
    //       name: 'Meteor Rush',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000264,
    //       name: 'Suplex Supplement',
    //     },
    //     {
    //       id: 23000292,
    //       name: 'Asteroid Belt',
    //     },
    //   ],
    // },
    // {
    //   id: 16000011,
    //   name: 'Mortis',
    //   starPowers: [
    //     {
    //       id: 23000087,
    //       name: 'Creepy Harvest',
    //     },
    //     {
    //       id: 23000154,
    //       name: 'Coiled Snake',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000265,
    //       name: 'Combo Spinner',
    //     },
    //     {
    //       id: 23000290,
    //       name: 'Survival Shovel',
    //     },
    //   ],
    // },
    // {
    //   id: 16000012,
    //   name: 'Crow',
    //   starPowers: [
    //     {
    //       id: 23000088,
    //       name: 'Extra Toxic',
    //     },
    //     {
    //       id: 23000143,
    //       name: 'Carrion Crow',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000243,
    //       name: 'Defense Booster',
    //     },
    //     {
    //       id: 23000286,
    //       name: 'Slowing Toxin',
    //     },
    //   ],
    // },
    // {
    //   id: 16000013,
    //   name: 'Poco',
    //   starPowers: [
    //     {
    //       id: 23000089,
    //       name: 'Da Capo!',
    //     },
    //     {
    //       id: 23000144,
    //       name: 'Screeching Solo',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000267,
    //       name: 'Tuning Fork',
    //     },
    //     {
    //       id: 23000350,
    //       name: 'Protective Tunes',
    //     },
    //   ],
    // },
    // {
    //   id: 16000014,
    //   name: 'Bo',
    //   starPowers: [
    //     {
    //       id: 23000090,
    //       name: 'Circling Eagle',
    //     },
    //     {
    //       id: 23000148,
    //       name: 'Snare a Bear',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000263,
    //       name: 'Super Totem',
    //     },
    //     {
    //       id: 23000289,
    //       name: 'Tripwire',
    //     },
    //   ],
    // },
    // {
    //   id: 16000015,
    //   name: 'Piper',
    //   starPowers: [
    //     {
    //       id: 23000091,
    //       name: 'Ambush',
    //     },
    //     {
    //       id: 23000152,
    //       name: 'Snappy Sniping',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000268,
    //       name: 'Auto Aimer',
    //     },
    //     {
    //       id: 23000291,
    //       name: 'Homemade Recipe',
    //     },
    //   ],
    // },
    // {
    //   id: 16000016,
    //   name: 'Pam',
    //   starPowers: [
    //     {
    //       id: 23000092,
    //       name: "Mama's Hug",
    //     },
    //     {
    //       id: 23000139,
    //       name: "Mama's Squeeze",
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000257,
    //       name: 'Pulse Modulator',
    //     },
    //     {
    //       id: 23000404,
    //       name: 'Scrapsucker',
    //     },
    //   ],
    // },
    // {
    //   id: 16000017,
    //   name: 'Tara',
    //   starPowers: [
    //     {
    //       id: 23000093,
    //       name: 'Black Portal',
    //     },
    //     {
    //       id: 23000160,
    //       name: 'Healing Shade',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000266,
    //       name: 'Psychic Enhancer',
    //     },
    //     {
    //       id: 23000356,
    //       name: 'Support From Beyond',
    //     },
    //   ],
    // },
    // {
    //   id: 16000018,
    //   name: 'Darryl',
    //   starPowers: [
    //     {
    //       id: 23000094,
    //       name: 'Steel Hoops',
    //     },
    //     {
    //       id: 23000157,
    //       name: 'Rolling Reload',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000260,
    //       name: 'Recoiling Rotator',
    //     },
    //     {
    //       id: 23000313,
    //       name: 'Tar Barrel',
    //     },
    //   ],
    // },
    // {
    //   id: 16000019,
    //   name: 'Penny',
    //   starPowers: [
    //     {
    //       id: 23000099,
    //       name: 'Heavy Coffers',
    //     },
    //     {
    //       id: 23000142,
    //       name: 'Master Blaster',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000248,
    //       name: 'Salty Barrel',
    //     },
    //     {
    //       id: 23000287,
    //       name: 'Trusty Spyglass',
    //     },
    //   ],
    // },
    // {
    //   id: 16000020,
    //   name: 'Frank',
    //   starPowers: [
    //     {
    //       id: 23000104,
    //       name: 'Power Grab',
    //     },
    //     {
    //       id: 23000153,
    //       name: 'Sponge',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000261,
    //       name: 'Active Noise Canceling',
    //     },
    //     {
    //       id: 23000351,
    //       name: 'Irresistible Attraction',
    //     },
    //   ],
    // },
    // {
    //   id: 16000021,
    //   name: 'Gene',
    //   starPowers: [
    //     {
    //       id: 23000109,
    //       name: 'Magic Puffs',
    //     },
    //     {
    //       id: 23000159,
    //       name: 'Spirit Slap',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000252,
    //       name: 'Lamp Blowout',
    //     },
    //     {
    //       id: 23000352,
    //       name: 'Vengeful Spirits',
    //     },
    //   ],
    // },
    // {
    //   id: 16000022,
    //   name: 'Tick',
    //   starPowers: [
    //     {
    //       id: 23000114,
    //       name: 'Well Oiled',
    //     },
    //     {
    //       id: 23000161,
    //       name: 'Automa-Tick Reload',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000253,
    //       name: 'Mine Mania',
    //     },
    //     {
    //       id: 23000355,
    //       name: 'Last Hurrah',
    //     },
    //   ],
    // },
    // {
    //   id: 16000023,
    //   name: 'Leon',
    //   starPowers: [
    //     {
    //       id: 23000119,
    //       name: 'Smoke Trails',
    //     },
    //     {
    //       id: 23000141,
    //       name: 'Invisiheal',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000276,
    //       name: 'Clone Projector',
    //     },
    //     {
    //       id: 23000408,
    //       name: 'Lollipop Drop',
    //     },
    //   ],
    // },
    // {
    //   id: 16000024,
    //   name: 'Rosa',
    //   starPowers: [
    //     {
    //       id: 23000124,
    //       name: 'Plant Life',
    //     },
    //     {
    //       id: 23000147,
    //       name: 'Thorny Gloves',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000242,
    //       name: 'Grow Light',
    //     },
    //     {
    //       id: 23000348,
    //       name: 'Unfriendly Bushes',
    //     },
    //   ],
    // },
    // {
    //   id: 16000025,
    //   name: 'Carl',
    //   starPowers: [
    //     {
    //       id: 23000129,
    //       name: 'Power Throw',
    //     },
    //     {
    //       id: 23000145,
    //       name: 'Protective Pirouette',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000262,
    //       name: 'Heat Ejector',
    //     },
    //     {
    //       id: 23000317,
    //       name: 'Flying Hook',
    //     },
    //   ],
    // },
    // {
    //   id: 16000026,
    //   name: 'Bibi',
    //   starPowers: [
    //     {
    //       id: 23000134,
    //       name: 'Home Run',
    //     },
    //     {
    //       id: 23000146,
    //       name: 'Batting Stance',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000275,
    //       name: 'Vitamin Booster',
    //     },
    //     {
    //       id: 23000458,
    //       name: 'Extra Sticky',
    //     },
    //   ],
    // },
    // {
    //   id: 16000027,
    //   name: '8-Bit',
    //   starPowers: [
    //     {
    //       id: 23000168,
    //       name: 'Boosted Booster',
    //     },
    //     {
    //       id: 23000181,
    //       name: 'Plugged In',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000259,
    //       name: 'Cheat Cartridge',
    //     },
    //     {
    //       id: 23000318,
    //       name: 'Extra Credits',
    //     },
    //   ],
    // },
    // {
    //   id: 16000028,
    //   name: 'Sandy',
    //   starPowers: [
    //     {
    //       id: 23000186,
    //       name: 'Rude Sands',
    //     },
    //     {
    //       id: 23000187,
    //       name: 'Healing Winds',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000270,
    //       name: 'Sleep Stimulator',
    //     },
    //     {
    //       id: 23000405,
    //       name: 'Sweet Dreams',
    //     },
    //   ],
    // },
    // {
    //   id: 16000029,
    //   name: 'Bea',
    //   starPowers: [
    //     {
    //       id: 23000192,
    //       name: 'Insta Beaload',
    //     },
    //     {
    //       id: 23000193,
    //       name: 'Honeycomb',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000271,
    //       name: 'Honey Molasses',
    //     },
    //     {
    //       id: 23000312,
    //       name: 'Rattled Hive',
    //     },
    //   ],
    // },
    // {
    //   id: 16000030,
    //   name: 'Emz',
    //   starPowers: [
    //     {
    //       id: 23000198,
    //       name: 'Bad Karma',
    //     },
    //     {
    //       id: 23000199,
    //       name: 'Hype',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000274,
    //       name: 'Friendzoner',
    //     },
    //     {
    //       id: 23000459,
    //       name: 'Acid Spray',
    //     },
    //   ],
    // },
    // {
    //   id: 16000031,
    //   name: 'Mr. P',
    //   starPowers: [
    //     {
    //       id: 23000204,
    //       name: 'Handle With Care',
    //     },
    //     {
    //       id: 23000205,
    //       name: 'Revolving Door',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000269,
    //       name: 'Service Bell',
    //     },
    //     {
    //       id: 23000349,
    //       name: 'Porter Reinforcements',
    //     },
    //   ],
    // },
    // {
    //   id: 16000032,
    //   name: 'Max',
    //   starPowers: [
    //     {
    //       id: 23000210,
    //       name: 'Super Charged',
    //     },
    //     {
    //       id: 23000211,
    //       name: 'Run N Gun',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000254,
    //       name: 'Phase Shifter',
    //     },
    //     {
    //       id: 23000311,
    //       name: 'Sneaky Sneakers',
    //     },
    //   ],
    // },
    // {
    //   id: 16000034,
    //   name: 'Jacky',
    //   starPowers: [
    //     {
    //       id: 23000222,
    //       name: 'Counter Crush',
    //     },
    //     {
    //       id: 23000223,
    //       name: 'Hardy Hard Hat',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000256,
    //       name: 'Pneumatic Booster',
    //     },
    //     {
    //       id: 23000486,
    //       name: 'Rebuild',
    //     },
    //   ],
    // },
    // {
    //   id: 16000035,
    //   name: 'Gale',
    //   starPowers: [
    //     {
    //       id: 23000228,
    //       name: 'Blustery Blow',
    //     },
    //     {
    //       id: 23000229,
    //       name: 'Freezing Snow',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000277,
    //       name: 'Spring Ejector',
    //     },
    //     {
    //       id: 23000407,
    //       name: 'Twister',
    //     },
    //   ],
    // },
    // {
    //   id: 16000036,
    //   name: 'Nani',
    //   starPowers: [
    //     {
    //       id: 23000234,
    //       name: 'Autofocus',
    //     },
    //     {
    //       id: 23000235,
    //       name: 'Tempered Steel',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000278,
    //       name: 'Warp Blast',
    //     },
    //     {
    //       id: 23000353,
    //       name: 'Return To Sender',
    //     },
    //   ],
    // },
    // {
    //   id: 16000037,
    //   name: 'Sprout',
    //   starPowers: [
    //     {
    //       id: 23000240,
    //       name: 'Overgrowth',
    //     },
    //     {
    //       id: 23000241,
    //       name: 'Photosynthesis',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000244,
    //       name: 'Garden Mulcher',
    //     },
    //     {
    //       id: 23000315,
    //       name: 'Transplant',
    //     },
    //   ],
    // },
    // {
    //   id: 16000038,
    //   name: 'Surge',
    //   starPowers: [
    //     {
    //       id: 23000283,
    //       name: 'To The Max!',
    //     },
    //     {
    //       id: 23000284,
    //       name: 'Serve Ice Cold',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000285,
    //       name: 'Power Surge',
    //     },
    //     {
    //       id: 23000485,
    //       name: 'Power Shield',
    //     },
    //   ],
    // },
    // {
    //   id: 16000039,
    //   name: 'Colette',
    //   starPowers: [
    //     {
    //       id: 23000300,
    //       name: 'Push It',
    //     },
    //     {
    //       id: 23000301,
    //       name: 'Mass Tax',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000302,
    //       name: 'Na-Ah!',
    //     },
    //     {
    //       id: 23000457,
    //       name: 'Gotcha!',
    //     },
    //   ],
    // },
    // {
    //   id: 16000040,
    //   name: 'Amber',
    //   starPowers: [
    //     {
    //       id: 23000307,
    //       name: 'Wild Flames',
    //     },
    //     {
    //       id: 23000308,
    //       name: "Scorchin' Siphon",
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000309,
    //       name: 'Fire Starters',
    //     },
    //     {
    //       id: 23000488,
    //       name: 'Dancing Flames',
    //     },
    //   ],
    // },
    // {
    //   id: 16000041,
    //   name: 'Lou',
    //   starPowers: [
    //     {
    //       id: 23000324,
    //       name: 'Supercool',
    //     },
    //     {
    //       id: 23000325,
    //       name: 'Hypothermia',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000326,
    //       name: 'Ice Block',
    //     },
    //     {
    //       id: 23000400,
    //       name: 'Cryo Syrup',
    //     },
    //   ],
    // },
    // {
    //   id: 16000042,
    //   name: 'Byron',
    //   starPowers: [
    //     {
    //       id: 23000331,
    //       name: 'Malaise',
    //     },
    //     {
    //       id: 23000332,
    //       name: 'Injection',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000333,
    //       name: 'Shot In The Arm',
    //     },
    //     {
    //       id: 23000461,
    //       name: 'Booster Shots',
    //     },
    //   ],
    // },
    // {
    //   id: 16000043,
    //   name: 'Edgar',
    //   starPowers: [
    //     {
    //       id: 23000338,
    //       name: 'Hard Landing',
    //     },
    //     {
    //       id: 23000339,
    //       name: 'Fisticuffs',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000340,
    //       name: "Let's Fly",
    //     },
    //     {
    //       id: 23000403,
    //       name: 'Hardcore',
    //     },
    //   ],
    // },
    // {
    //   id: 16000044,
    //   name: 'Ruffs',
    //   starPowers: [
    //     {
    //       id: 23000345,
    //       name: 'Air Superiority',
    //     },
    //     {
    //       id: 23000346,
    //       name: 'Field Promotion',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000347,
    //       name: 'Take Cover',
    //     },
    //     {
    //       id: 23000402,
    //       name: 'Air Support',
    //     },
    //   ],
    // },
    // {
    //   id: 16000045,
    //   name: 'Stu',
    //   starPowers: [
    //     {
    //       id: 23000362,
    //       name: 'Zero Drag',
    //     },
    //     {
    //       id: 23000363,
    //       name: 'Gaso-Heal',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000364,
    //       name: 'Speed Zone',
    //     },
    //     {
    //       id: 23000401,
    //       name: 'Breakthrough',
    //     },
    //   ],
    // },
    // {
    //   id: 16000046,
    //   name: 'Belle',
    //   starPowers: [
    //     {
    //       id: 23000369,
    //       name: 'Positive Feedback',
    //     },
    //     {
    //       id: 23000370,
    //       name: 'Grounded',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000371,
    //       name: 'Nest Egg',
    //     },
    //     {
    //       id: 23000463,
    //       name: 'Reverse Polarity',
    //     },
    //   ],
    // },
    // {
    //   id: 16000047,
    //   name: 'Squeak',
    //   starPowers: [
    //     {
    //       id: 23000376,
    //       name: 'Chain Reaction',
    //     },
    //     {
    //       id: 23000377,
    //       name: 'Super Sticky',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000378,
    //       name: 'Windup',
    //     },
    //     {
    //       id: 23000462,
    //       name: 'Residue',
    //     },
    //   ],
    // },
    // {
    //   id: 16000048,
    //   name: 'Grom',
    //   starPowers: [
    //     {
    //       id: 23000383,
    //       name: 'Foot Patrol',
    //     },
    //     {
    //       id: 23000384,
    //       name: 'X-Factor',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000385,
    //       name: 'Watchtower',
    //     },
    //     {
    //       id: 23000460,
    //       name: 'Radio Check',
    //     },
    //   ],
    // },
    // {
    //   id: 16000049,
    //   name: 'Buzz',
    //   starPowers: [
    //     {
    //       id: 23000390,
    //       name: 'Tougher Torpedo',
    //     },
    //     {
    //       id: 23000391,
    //       name: 'Eyes Sharp',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000392,
    //       name: 'Reserve Buoy',
    //     },
    //     {
    //       id: 23000490,
    //       name: 'X-Ray-Shades',
    //     },
    //   ],
    // },
    // {
    //   id: 16000050,
    //   name: 'Griff',
    //   starPowers: [
    //     {
    //       id: 23000397,
    //       name: 'Keep The Change',
    //     },
    //     {
    //       id: 23000398,
    //       name: 'Business Resilience',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000399,
    //       name: 'Piggy Bank',
    //     },
    //     {
    //       id: 23000487,
    //       name: 'Coin Shower',
    //     },
    //   ],
    // },
    // {
    //   id: 16000051,
    //   name: 'Ash',
    //   starPowers: [
    //     {
    //       id: 23000414,
    //       name: 'First Bash',
    //     },
    //     {
    //       id: 23000415,
    //       name: 'Mad As Heck',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000416,
    //       name: 'Chill Pill',
    //     },
    //     {
    //       id: 23000465,
    //       name: 'Rotten Banana',
    //     },
    //   ],
    // },
    // {
    //   id: 16000052,
    //   name: 'Meg',
    //   starPowers: [
    //     {
    //       id: 23000421,
    //       name: 'Force Field',
    //     },
    //     {
    //       id: 23000422,
    //       name: 'Heavy Metal',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000423,
    //       name: 'Jolting Volts',
    //     },
    //     {
    //       id: 23000489,
    //       name: 'Toolbox',
    //     },
    //   ],
    // },
    // {
    //   id: 16000053,
    //   name: 'Lola',
    //   starPowers: [
    //     {
    //       id: 23000431,
    //       name: 'Improvise',
    //     },
    //     {
    //       id: 23000432,
    //       name: 'Sealed With A Kiss',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000433,
    //       name: 'Freeze Frame',
    //     },
    //     {
    //       id: 23000456,
    //       name: 'Stunt Double',
    //     },
    //   ],
    // },
    // {
    //   id: 16000054,
    //   name: 'Fang',
    //   starPowers: [
    //     {
    //       id: 23000438,
    //       name: 'Fresh Kicks',
    //     },
    //     {
    //       id: 23000439,
    //       name: 'Divine Soles',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000440,
    //       name: 'Corn-Fu',
    //     },
    //     {
    //       id: 23000464,
    //       name: 'Roundhouse Kick',
    //     },
    //   ],
    // },
    // {
    //   id: 16000056,
    //   name: 'Eve',
    //   starPowers: [
    //     {
    //       id: 23000452,
    //       name: 'Unnatural Order',
    //     },
    //     {
    //       id: 23000453,
    //       name: 'Happy Surprise',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000454,
    //       name: 'Gotta Go!',
    //     },
    //     {
    //       id: 23000455,
    //       name: 'Motherly Love',
    //     },
    //   ],
    // },
    // {
    //   id: 16000057,
    //   name: 'Janet',
    //   starPowers: [
    //     {
    //       id: 23000470,
    //       name: 'Stage View',
    //     },
    //     {
    //       id: 23000471,
    //       name: 'Vocal Warm Up',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000472,
    //       name: 'Drop The Bass',
    //     },
    //     {
    //       id: 23000473,
    //       name: 'Backstage Pass',
    //     },
    //   ],
    // },
    // {
    //   id: 16000058,
    //   name: 'Bonnie',
    //   starPowers: [
    //     {
    //       id: 23000478,
    //       name: 'Black Powder',
    //     },
    //     {
    //       id: 23000479,
    //       name: 'Wisdom Tooth',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000480,
    //       name: 'Sugar Rush',
    //     },
    //     {
    //       id: 23000481,
    //       name: 'Crash Test',
    //     },
    //   ],
    // },
    // {
    //   id: 16000059,
    //   name: 'Otis',
    //   starPowers: [
    //     {
    //       id: 23000495,
    //       name: 'Stencil Glue',
    //     },
    //     {
    //       id: 23000496,
    //       name: 'Ink Refills',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000497,
    //       name: 'Dormant Star',
    //     },
    //     {
    //       id: 23000498,
    //       name: 'Phat Splatter',
    //     },
    //   ],
    // },
    // {
    //   id: 16000060,
    //   name: 'Sam',
    //   starPowers: [
    //     {
    //       id: 23000503,
    //       name: 'Hearty Recovery',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000505,
    //       name: 'Magnetic Field',
    //     },
    //   ],
    // },
    // {
    //   id: 16000061,
    //   name: 'Gus',
    //   starPowers: [
    //     {
    //       id: 23000511,
    //       name: 'Health Bonanza',
    //     },
    //   ],
    //   gadgets: [
    //     {
    //       id: 23000513,
    //       name: 'Kooky Popper',
    //     },
    //   ],
    // },
  ],
};
