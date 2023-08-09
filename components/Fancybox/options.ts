export const defaultOptions = {
  Toolbar: {
    display: {
      left: ['infobar'],
      middle: [],
      right: [],
    },
    enabled: true,
  },
  Fullscreen: {
    autoStart: false,
  },
  Thumbs: {
    type: 'modern', // modern, classic
    showOnStart: false,
    key: 'o',
  },
  keyboard: {
    Delete: 'close',
    Escape: 'close',
    ['q']: 'close',
    Backspace: 'close',
    PageUp: 'next',
    PageDown: 'prev',
    ['k']: 'prev',
    ['p']: 'prev',
    ArrowUp: 'next',
    ['j']: 'next',
    ['n']: 'next',
    ArrowDown: 'prev',
    ArrowRight: 'next',
    ArrowLeft: 'prev',
  },
  Images: {
    initialSize: 'fit', // cover; fit;
  },
  Hash: false, // custom hash  https://fancyapps.com/fancybox/plugins/hash/
};
