#! /usr/bin/env node

import inquirer from "inquirer"

let currency : any = {
    United_States_Dollar__________USD : 1,
    Pakistani_Rupee_______________PKR : 277.6,
    Chinese_Yuan__________________CNY : 7.2,
    United_Arab_Emirates_Dirham___AED : 3.6,
    British_Pound_________________GBP : 0.79,
    Saudi_Riyal___________________SAR :3.7,
    Indian_Rupee__________________INR :83.3,
    Russian_Ruble_________________RUB : 92.4,
    Turkish_Lira__________________TRY : 32,
    Euro__________________________EUR : 0.92,
    Irani_Rial____________________IRR :42075.5,
    Malaysian_Ringgit_____________MYR : 4.7,
    Qatari_Riyal__________________QAR : 3.6,
    Iraqi_Dinar___________________IQD : 1309.3,
    Bangladeshi_Taka______________BDT : 109.6,
    Omani_Riyal___________________OMR : 0.38,
    Bahraini_Dinar________________BHD : 0.37,
    Sri_lankan_Rupee______________LKR : 298.6,
    Japanese_Yen__________________JPY : 151.6,

};

let exchange : any = await inquirer.prompt([
    {
        name : "given",
        type : "list",
        message : "select your own currency type",
        choices : [
            "United_States_Dollar__________USD",
            "Pakistani_Rupee_______________PKR",
            "Chinese_Yuan__________________CNY",
            "United_Arab_Emirates_Dirham___AED",
            "British_Pound_________________GBP",
            "Saudi_Riyal___________________SAR",
            "Indian_Rupee__________________INR",
            "Russian_Ruble_________________RUB",
            "Turkish_Lira__________________TRY",
            "Euro__________________________EUR",
            "Irani_Rial____________________IRR",
            "Malaysian_Ringgit_____________MYR",
            "Qatari_Riyal__________________QAR",
            "Iraqi_Dinar___________________IQD",
            "Bangladeshi_Taka______________BDT",
            "Omani_Riyal___________________OMR",
            "Bahraini_Dinar________________BHD",
            "Sri_lankan_Rupee______________LKR",
            "Japanese_Yen__________________JPY",
        ]
    },
    {
        name : "return",
        type : "list",
        message : "select your need exchange currency type",
        choices : [
            "United_States_Dollar__________USD",
            "Pakistani_Rupee_______________PKR",
            "Chinese_Yuan__________________CNY",
            "United_Arab_Emirates_Dirham___AED",
            "British_Pound_________________GBP",
            "Saudi_Riyal___________________SAR",
            "Indian_Rupee__________________INR",
            "Russian_Ruble_________________RUB",
            "Turkish_Lira__________________TRY",
            "Euro__________________________EUR",
            "Irani_Rial____________________IRR",
            "Malaysian_Ringgit_____________MYR",
            "Qatari_Riyal__________________QAR",
            "Iraqi_Dinar___________________IQD",
            "Bangladeshi_Taka______________BDT",
            "Omani_Riyal___________________OMR",
            "Bahraini_Dinar________________BHD",
            "Sri_lankan_Rupee______________LKR",
            "Japanese_Yen__________________JPY",
        ]
    },
    {
        name : "amount",
        type : "input",
        message : "enter your amount",
    }
]);

let givenCurrency :any = currency[exchange.given];
let exchangeCurrency :any = currency[exchange.return];
let amount : any = exchange.amount;

// console.log(amount);
// console.log(givenCurrency);
// console.log(exchangeCurrency);


let store : any = amount / givenCurrency ;
let change : any = Math.floor(store * exchangeCurrency) ;

console.log(change);