#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let currency = {
    United_States_Dollar__________USD: 1,
    Pakistani_Rupee_______________PKR: 277.6,
    Chinese_Yuan__________________CNY: 7.2,
    United_Arab_Emirates_Dirham___AED: 3.6,
    British_Pound_________________GBP: 0.79,
    Saudi_Riyal___________________SAR: 3.7,
    Indian_Rupee__________________INR: 83.3,
    Russian_Ruble_________________RUB: 92.4,
    Turkish_Lira__________________TRY: 32,
    Euro__________________________EUR: 0.92,
    Irani_Rial____________________IRR: 42075.5,
    Malaysian_Ringgit_____________MYR: 4.7,
    Qatari_Riyal__________________QAR: 3.6,
    Iraqi_Dinar___________________IQD: 1309.3,
    Bangladeshi_Taka______________BDT: 109.6,
    Omani_Riyal___________________OMR: 0.38,
    Bahraini_Dinar________________BHD: 0.37,
    Sri_lankan_Rupee______________LKR: 298.6,
    Japanese_Yen__________________JPY: 151.6,
};
while (condition) {
    let exchange = await inquirer.prompt([
        {
            name: "given",
            type: "list",
            message: "select your own currency type",
            choices: [
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
            name: "return",
            type: "list",
            message: "select your need exchange currency type",
            choices: [
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
            name: "amount",
            type: "input",
            message: "enter your amount",
        }
    ]);
    let givenCurrency = currency[exchange.given];
    let exchangeCurrency = currency[exchange.return];
    let amount = exchange.amount;
    // console.log(amount);
    // console.log(givenCurrency);
    // console.log(exchangeCurrency);
    let store = amount / givenCurrency;
    let change = store * exchangeCurrency;
    let changed = change.toFixed(2);
    console.log(changed);
    let user = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            massage: "select the one of the following option. own your choice exit or again currency exchange.",
            choices: ["exit", "currency change"]
        }
    ]);
    if (user.choice == "currency change") {
        condition = true;
    }
    else if (user.choice == "exit") {
        condition = false;
    }
}
