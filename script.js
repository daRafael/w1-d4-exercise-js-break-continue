console.log("Ready to go! 🚀");


for (i = 0; i <= 20; i++) {

  if(i !== 0 && i % 7 === 0) {
    console.log(`${i} is divisible by 7!`)
    continue;
  }

  if (i % 2 === 0) {
    console.log(i, 'even');
  } 
  else if (i % 2 === 1) {
    console.log(i, 'odd');
  }
}