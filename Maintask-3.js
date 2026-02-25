function paymentSystem(money){
  let totalPayment = 50000
  if(money < totalPayment){
    return console.log("uang anda Kurang bro!")
  }
  let charge = money - totalPayment
  let calculateMoney = 0
  let text = "";
  
  while(calculateMoney <= charge){
    if(charge>=100000){
      calculateMoney =+ 100000
      text =+ "100000 + "
      console.log("kondisi1")
    }else if(charge>=50000){
      canlculateMoney =+ 50000
      text =+ "50000 + "
      console.log("kondisi2")
    }else if(charge>=10000){
      canlculateMoney =+ 10000
      text =+ "10000 + "
      console.log("kondisi3")
    }else if(charge>2000){
      canlculateMoney =+2000
      text =+ "2000 + "
      console.log("kondisi4")
    }else{
      canlculateMoney =+1000
      text =+ "1000 + "
      console.log("kondisi5")
      }
  }
  return console.log(text)
}

paymentSystem(160000)
