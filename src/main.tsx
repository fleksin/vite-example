import { initTomoModal, CONNECT_MAP } from '@tomo-inc/tomo-telegram-sdk'
import '@tomo-inc/tomo-telegram-sdk/dist/styles.css'
async function init() {
  await initTomoModal({
    onConnect: (wall: any) => {
      console.log(wall);
    },
    supportedProviders: ['TON'],
    supportedConnects: [
      CONNECT_MAP.TOMO_MINI_APP,
      CONNECT_MAP.OKX_CONNECT,
      CONNECT_MAP.TON_CONNECT,
    ],
    manifestUrl: 'https://d8o5s6z018yzr.cloudfront.net/manifestUrl.json',
  });
}
init();





