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
      starPowers: [
        {
          id: 23000076,
          name: 'Shell Shock',
        },
        {
          id: 23000135,
          name: 'Band-Aid',
        },
      ],
      gadgets: [
        {
          id: 23000255,
          name: 'Fast Forward',
        },
        {
          id: 23000288,
          name: 'Clay Pigeons',
        },
      ],
    },
    {
      id: 16000001,
      name: 'Colt',
      class: classes.damageDealer,
      rarity: rarities.trophyRoad,
      starPowers: [
        {
          id: 23000077,
          name: 'Slick Boots',
        },
        {
          id: 23000138,
          name: 'Magnum Special',
        },
      ],
      gadgets: [
        {
          id: 23000273,
          name: 'Speedloader',
        },
        {
          id: 23000319,
          name: 'Silver Bullet',
        },
      ],
    },
  ],
};
