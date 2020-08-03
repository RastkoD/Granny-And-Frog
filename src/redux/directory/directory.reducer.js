const INITIAL_STATE = {
  sections: [
    {
      title: 'birthday',
      imageUrl:
        'https://manage.teakandtwine.com/storage/images/12387/3e3179e2eba4c736f5a21b4bcd7ad2d7.jpg',
      id: 1,
      linkUrl: 'shop/birthday',
    },
    {
      title: 'wedding',
      imageUrl:
        'https://manage.teakandtwine.com/storage/images/25312/e7fa4a47f2bf9473f92f1f4c86e23f8f.jpg',
      id: 2,
      linkUrl: 'shop/wedding',
    },
    {
      title: 'popular',
      imageUrl:
        'https://manage.teakandtwine.com/storage/images/24701/46e56b190addb949787cf89ded78b75c.png',
      id: 3,
      linkUrl: 'shop/popular',
    },
    {
      title: 'women',
      imageUrl:
        'https://manage.teakandtwine.com/storage/images/22704/feed35c39cb8a660ea20f88780a5f1a2.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women',
    },
    {
      title: 'men',
      imageUrl:
        'https://i2.wp.com/gratefulgadget.com/wp-content/uploads/2018/09/Happy-Hour-Gift-Box-wood-bottle-opener-playing-cards-cohiba-cigar-cutter-cocktail-kit-blackjack.jpg?resize=680%2C453&ssl=1',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
