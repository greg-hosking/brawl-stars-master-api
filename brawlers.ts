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
        'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/Shelly.webp',
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
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/star_powers/Shell_Shock.webp',
        },
        {
          id: 23000135,
          name: 'Band-Aid',
          description:
            'When Shelly falls below 40% health, she instantly heals for 2000 health. Band-Aid recharges in 15 seconds.',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/star_powers/Band-Aid.webp',
        },
      ],
      gadgets: [
        {
          id: 23000255,
          name: 'Fast Forward',
          description: 'Shelly dashes ahead, skipping a few unnecessary steps!',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/gadgets/Fast_Forward.webp',
        },
        {
          id: 23000288,
          name: 'Clay Pigeons',
          description:
            "On activation, for the next 5 seconds Shelly's main attacks focus fire to a smaller area with an increased range.",
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/gadgets/Clay_Pigeons.webp',
        },
      ],
      skins: [
        {
          name: 'Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/Shelly.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/neutral.webp',
            },
            {
              name: 'happy',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/happy.webp',
            },
            {
              name: 'sad',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/sad.webp',
            },
            {
              name: 'angry',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/angry.webp',
            },
            {
              name: 'gg',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/gg.webp',
            },
            {
              name: 'clap',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/clap.webp',
            },
            {
              name: 'thanks',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/thanks.webp',
            },
            {
              name: 'phew',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/phew.webp',
            },
            {
              name: 'special',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Shelly/pins/special.webp',
            },
          ],
        },
        {
          name: 'Star Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Star_Shelly/Star_Shelly.webp',
        },
        {
          name: 'Bandita Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Bandita_Shelly/Bandita_Shelly.webp',
        },
        {
          name: 'Boca Juniors Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Boca_Juniors_Shelly/Boca_Juniors_Shelly.webp',
        },
        {
          name: 'America Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/America_Shelly/America_Shelly.webp',
        },
        {
          name: 'U De Chile Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/U_De_Chile_Shelly/U_De_Chile_Shelly.webp',
        },
        {
          name: 'PSG Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/PSG_Shelly/PSG_Shelly.webp',
        },
        {
          name: 'Witch Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Witch_Shelly/Witch_Shelly.webp',
          pins: [
            {
              name: 'neutral',
              imageUrl:
                'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Witch_Shelly/pins/neutral.webp',
            },
          ],
        },
        {
          name: 'True Silver Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/True_Silver_Shelly/True_Silver_Shelly.webp',
        },
        {
          name: 'True Gold Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/True_Gold_Shelly/True_Gold_Shelly.webp',
        },
        {
          name: 'Princess Shelly',
          imageUrl:
            'https://brawl-stars-unofficial-cdn.s3.amazonaws.com/brawlers/Shelly/skins/Princess_Shelly/Princess_Shelly.webp',
        },
      ],
    },
  ],
};
