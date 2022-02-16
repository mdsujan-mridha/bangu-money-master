
// get total income in one month 
function getIncome(){
    const incomeInput=document.getElementById('income--input');
    const income=incomeInput.value;
    incomeInput.value='';
    return income;
    

}

// handel total expences 
function expences(){
    const foodInput=document.getElementById('food-expence');
    const foodExpence=foodInput.value;
    foodInput.value='';
    const rentInput=document.getElementById('rent-expence');
    const rentExpence=rentInput.value;
    rentInput.value='';
    const clothesInput=document.getElementById('clothes-expence');
    const clothesExpence=clothesInput.value;
    clothesInput.value='';
    const inTotal=parseFloat(foodExpence) + parseFloat(rentExpence) +parseFloat(clothesExpence);
    return inTotal;
}
document.getElementById('submit-btn').addEventListener('click',function(){
  const total= expences();
  const totalIncome=getIncome();
  const balance=parseFloat(totalIncome)-total;
  const totalExpences=document.getElementById('total-expences');
  const previousTotalExpences=totalExpences.innerText;
  const current=parseFloat(previousTotalExpences)+total;
   totalExpences.innerText=current;
   if(totalIncome>total){
       const getBalance=document.getElementById('balance');
       getBalance.innerText=balance;
   }
   else if(totalIncome==total){
       alert('Now Balance Left for Deposit');
   }
 else{
     alert('Your Balance is low');
 }

})

