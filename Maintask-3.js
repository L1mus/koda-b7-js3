function paymentSystem(money) {
  const currency = {
    100000: 0,
    50000: 0,
    20000: 1,
    10000: 3,
    5000: 0,
    1000: 0,
  };

  const paperMoney = {
    100000: 0,
    50000: 0,
    20000: 0,
    10000: 0,
    5000: 0,
    1000: 0,
  };
  let totalPayment = 50000;
  if (money < totalPayment) {
    return console.log("uang anda Kurang bro!");
  }
  let charge = money - totalPayment;
  const valuesArr = Object.values(currency);
  console.log(valuesArr.some((value) => value > 0));

  if (valuesArr.every((value) => value === 0)) {
    return console.log("Maaf uang kembalian tidak ada");
  } else {
    while (charge !== 0) {
      if (valuesArr.reduce((a, b) => a + b) < charge) {
        console.log(valuesArr.reduce((a, b) => a + b))
        return console.log("uang kembalian kurang bro!");
      } else {
        if (charge >= 100000) {
          charge -= 100000;
          paperMoney[100000] += 1;
          currency[100000] -= 1;
        } else if (charge >= 50000) {
          charge -= 50000;
          paperMoney[50000] += 1;
          currency[50000] -= 1;
        } else if (charge >= 20000) {
          charge -= 20000;
          paperMoney[20000] += 1;
          currency[20000] -= 1;
        } else if (charge >= 10000) {
          charge -= 10000;
          paperMoney[10000] += 1;
          currency[10000] -= 1;
        } else if (charge > 5000) {
          charge -= 5000;
          paperMoney[5000] += 1;
          currency[5000] -= 1;
        } else if (charge > 2000) {
          charge -= 20000;
          paperMoney[20000] += 1;
          currency[20000] -= 1;
        } else if (charge > 1000) {
          charge -= 1000;
          paperMoney[1000] += 1;
          currency[1000] -= 1;
        }
      }
    }
  }

  return console.log(`Kembalian sebesar Rp.${charge}
  berapa lembar
  Rp.100.000 : ${paperMoney[100000]}
  Rp.50.000  : ${paperMoney[50000]}
  Rp.20.000  : ${paperMoney[20000]}
  Rp.10.000  : ${paperMoney[10000]}
  Rp.5.000   : ${paperMoney[5000]}
  Rp.1.000   : ${paperMoney[1000]}
  `);
}

paymentSystem(100000);
