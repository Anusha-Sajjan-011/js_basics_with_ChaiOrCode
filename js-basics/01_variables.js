const accountId = 12345;
let accountEmail= "anusha@gmail.com";
var accountPassword = "12121212";
accountCity= "Shimoga"; //we can also declare a variable like this but its not a good practice
let accountState //undefined because we didnot define any value for this variable

// accountId=2;

accountEmail="anu@gmail.com";
accountPassword="313131";
accountCity="Banagaluru";

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*Prefer not to use var because of issue in block scpe and functional scope*/