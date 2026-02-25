function paymentSystem(money){
  const currency = {
    }
  let totalPayment = 50000
  if(money < totalPayment){
    return console.log("uang anda Kurang bro!")
  }
  let charge = money - totalPayment
  let calculateMoney = 0
  while(charge !== 0){
    if(charge>=100000){
      charge -= 100000
    }else if(charge>=50000){
      charge -= 50000
    }else if(charge>=10000){
      charge-= 10000
    }else if(charge>2000){
       charge-= 2000
    }else{
       charge-=1000
      }
  }
  
  return console.log(`Kembalian sebesar ${charge}
  berapa lembar 
  Rp.100.000 :
  Rp.50.000  :
  Rp.20.000  :
  Rp.10.000  :
  Rp.5.000   :
  Rp.1.000   :
  `)
}

paymentSystem(160000)
