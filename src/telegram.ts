/* eslint-disable no-undef */
const setupTelegram = () => {
  try {
    Telegram.WebApp.disableVerticalSwipes()
  } catch (e) {
    console.log('Not in telergam', e)
  }  
}

export default setupTelegram