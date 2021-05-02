const fetch = require('node-fetch')
const imaps = require('imap-simple')
const logger = require('../config/winston')
const authFetch = async (rollnumber, password) => {
  try {
    const res = await fetch('https://webmail.nitt.edu/horde/login.php', {
      credentials: 'include',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0',
        Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Sec-GPC': '1'
      },
      referrer: 'https://webmail.nitt.edu/horde/login.php',
      body: `app=&login_post=1&url=&anchor_string=&horde_user=${rollnumber}&horde_pass=${password}&horde_select_view=auto`,
      method: 'POST',
      mode: 'cors'
    })
    const decodedURL = decodeURIComponent(res.url)
    const urlParams = new URLSearchParams(decodedURL.split('?')[1])

    if (urlParams.get('url') === 'https://webmail.nitt.edu/horde/imp/') {
      return 1
    } else {
      return 0
    }
  } catch (err) {
    console.log(err)
    return 2
  }
}

const authIMAP = async (rollnumber, password) => {
  console.log(rollnumber, password)
  const imapConfig = {
    imap: {
      user: rollnumber,
      password: password,
      host: '203.129.195.133',
      port: 143,
      tls: false,
      authTimeout: 30000
    }
  }
  try {
    const connection = await imaps.connect(imapConfig)
    connection.end()
    logger.info(`${rollnumber} logged in using imap`)
    return 1
  } catch (err) {
    logger.error(err)
    logger.info(`${rollnumber} wrong auth in imap`)
    return 0
  }
}

module.exports = { authFetch, authIMAP }
