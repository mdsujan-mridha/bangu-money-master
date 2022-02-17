
// get total income in one month 
function getIncome(){
    const incomeInput=document.getElementById('income--input');
    const income=incomeInput.value;
    incomeInput.value='';
    if(isNaN(income) || income<0){
        alert('Please Write a valid Number in Income input');
    }
    return income;
}
// handel total expences 
function expences(){
    const foodInput=document.getElementById('food-expence');
    const foodExpence=foodInput.value;
    foodInput.value='';
     if(isNaN(foodExpence) ||foodExpence<0){
         alert('Please write a valid number on food item ');
     }
    const rentInput=document.getElementById('rent-expence');
    const rentExpence=rentInput.value;
    rentInput.value='';
    if(isNaN(rentExpence) ||rentExpence<0){
        alert('Please Write a valid Number on rent item');
    }
    const clothesInput=document.getElementById('clothes-expence');
    const clothesExpence=clothesInput.value;
    clothesInput.value='';
    if(isNaN(clothesExpence) ||clothesExpence<0){
        alert('Please Write a valid Number on  Clothes item');
    }
    const inTotal=parseFloat(foodExpence) + parseFloat(rentExpence) +parseFloat(clothesExpence);
    return inTotal;
}
document.getElementById('submit-btn').addEventListener('click',function(){
  const total= expences();
  const totalIncome=getIncome();
  const leftBalance=parseFloat(totalIncome)-total;
//   const totalExpences=document.getElementById('total-expences');

//    totalExpences.innerText=total;
   if(totalIncome>total){
    //    total expences 
    const totalExpences=document.getElementById('total-expences');
    totalExpences.innerText=total;
     //  left total banalce after calculate
       const getBalance=document.getElementById('balance');
       getBalance.innerText=leftBalance;
   }
   else if(totalIncome==total){
       alert('Now Balance Left for Deposit');
   }
 else if(totalIncome<total){
     alert('Your Balance is low');
 }

})


