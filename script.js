fetch("https://permit.parkingguru.com/no/GuestWebSetup/CreateGpWebCheckin", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-GB,en;q=0.9,nb-NO;q=0.8,nb;q=0.7,ko-KR;q=0.6,ko;q=0.5,en-US;q=0.4",
    "content-type": "application/json; charset=UTF-8",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://permit.parkingguru.com/no/GuestWebSetup/Parking",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"cmnt\":\"\",\"days\":\"1\",\"extnidfc\":\"\",\"gustname\":\"\",\"hours\":0,\"nmbrplte\":\"RK24040\",\"stupidno\":\"509\",\"vlidfromtmst\":null,\"vliduntltmst\":null}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});