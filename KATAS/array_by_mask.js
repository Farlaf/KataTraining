function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function createPhoneNumber(numbers) {

  let phone = "(xxx) xxx-xxxx";

  for(let i = 0; i < numbers.length; i++) {
    phone = phone.replace('x', numbers[i]);
  }

  return phone;

}

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}



createPhoneNumber([8,9,3,7,4,5,0,9,5,7]);