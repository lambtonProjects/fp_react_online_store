export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Computer 01',
      productPrice: 1799,
      description:
        'Mini PC, BOESIIPC Desktop Computer Core i9-11900 (Up to 5.2GHz) Windows 11 Pro, 32G DDR4 RAM/1T SSD, 4K, USB, HDMI, Gigabit Network',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/products/computer01.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/computer01.jpg'),
        require('../database/images/products/computer02.jpg'),
        require('../database/images/products/computer03.jpg'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Computer 02',
      productPrice: 1499,
      description:
        'Mini Desktop Computer, KAMRUI Ιntel Celeron J4125(up to 2.7GHz) Mini PC Windows 10 Pro, Micro Desktop Computer Support Dual Screen, Auto Power on, Ethernet, 2.4G+5G WiFi for Office Business Home Work',
      isOff: false,
      productImage: require('../database/images/products/computer04.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/computer05.jpg'),
        require('../database/images/products/computer06.jpg'),
        require('../database/images/products/computer07.jpg'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'Accessory 01',
      productPrice: 1999,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/accessories/accesories01.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/accesories01.jpg'),
        require('../database/images/accessories/accesories02.jpg'),
        require('../database/images/accessories/accesories03.jpg'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Accessory 02',
      productPrice: 399,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isOff: false,
      productImage: require('../database/images/accessories/accesories04.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/accesories05.jpg'),
        require('../database/images/accessories/accesories06.jpg'),
        require('../database/images/accessories/accesories07.jpg'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Accessory 03',
      productPrice: 1499,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isOff: false,
      productImage: require('../database/images/accessories/accesories08.jpg'),
      isAvailable: false,
      productImageList: [
        require('../database/images/accessories/accesories09.jpg'),
        require('../database/images/accessories/accesories10.jpg'),
        require('../database/images/accessories/accesories01.jpg'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Accessory 04',
      productPrice: 1299,
      description:
        'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
      isOff: false,
      productImage: require('../database/images/accessories/accesories03.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/accesories04.jpg'),
        require('../database/images/accessories/accesories05.jpg'),
        require('../database/images/accessories/accesories06.jpg'),
      ],
    },
  ];