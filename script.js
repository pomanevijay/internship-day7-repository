console.log("Hello");

// let age = 20;
// if (age >= 18) {
//     console.log("You are eligible for a driving license.");
// }



let score= 85;
if (score >= 90)
     {
    console.log("Grade: A");
} 
else if (score >= 80) 
    {
    console.log("Grade: B");
}
 else if (score >= 70) 
    {
    console.log("Grade: C");
} 
else if (score >= 60) 
    {
    console.log("Grade: D");
}



let ch = 'a';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch + " is a vowel.");
        break;
    default:
        console.log(ch + " is a consonant.");
}



let age = 20;
let status = (age >= 18) ? "Eligible to drive!" : "Not eligible to drive!";
console.log(status);


// for(let i = 1; i <= 10; i++) {

//     console.log("i=",i);
// }

for(let i = 1; i <= 10; i++) {
    if(i%2 == 0) {
        console.log("i=", i , " Even");
    }   
    else 
        {
        console.log("i=", i , "  Odd");
    }        
}

console.log("while loop:");
let i = 1;
while(i <= 5) {
    console.log("i=", i);
    i++;
}

console.log("do-while loop:");
let j = 1;
do {
    console.log("j=", j);
    j++;
} while(j <= 5);

console.log("break statement:");
for(let i = 1; i <= 10 ; i++)  {
    console.log("i=", i);
    if(i == 4) {
    break;
    }
}

console.log("continue statement:");
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) {    
        continue;
    }
    console.log("i=", i);
}   