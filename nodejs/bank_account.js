// class BankAccount {
// 	changeAccountType(accountType) {
// 		this.newAccountType = accountType;
// 		return this.newAccountType;
// 	}

// 	constructor({ newAccountType = 'Normal' } = {}) {
// 		this.newAccountType = newAccountType;
// 	}
// }

// const customer = new BankAccount({ newAccountType: 'Gold' });
// console.log(customer.changeAccountType('Prefered'));
//-----------------

// const bank = {
// 	customer: {
// 		currentBalance: 1000,
// 		deductCharges(charges, customerType) {
// 			console.log(this);
// 			if (customerType === 'Gold') {
// 				return this.currentBalance - (charges - (charges * 10) / 100);
// 			} else if (customerType === 'Preferred') {
// 				return this.currentBalance - (charges - (charges * 5) / 100);
// 			} else {
// 				return this.currentBalance - charges;
// 			}
// 		},
// 		addQuarterlyInterest: (customerType) => {
// 			console.log(this);
// 			if (customerType === 'Gold') {
// 				return this.currentBalance + (this.currentBalance * 3.5) / 100;
// 			} else if (customerType === 'Preferred') {
// 				return this.currentBalance + (this.currentBalance * 2.5) / 100;
// 			} else {
// 				return this.currentBalance + (this.currentBalance * 1.5) / 100;
// 			}
// 		},
// 	},
// };

// console.log(bank.customer.deductCharges(25, 'Preferred'));
// console.log(bank.customer.addQuarterlyInterest('Gold'));

const bankAccounts = [
	{
		customerId: 'A10120123',
		accountNumber: '502362145',
		balance: 5000,
		addressLine1: 'Parkway Avenue',
		addressLine2: 'Ubited States',
	},
	{
		customerId: 'A10189636',
		accountNumber: '5023628963',
		balance: 5000,
		addressLine1: 'CC Avenue',
		addressLine2: 'United States',
	},
	{
		customerId: 'A101201231',
		accountNumber: '5023621451',
		balance: 10000,
		addressLine1: 'CA Avenue',
		addressLine2: 'United States',
	},
];

const bankAccountGenerator = (function* () {
	let index = 0;
	while (index < bankAccounts.length) {
		yield bankAccounts[index++];
	}
})();

for (const bankAccount of bankAccountGenerator) {
	console.log(`The customer id is: ${bankAccount.customerId}`);
	if (bankAccount.balance >= 5000) {
		break;
	}
}

for (const bankAccount of bankAccountGenerator) {
	console.log(`The customer id is: ${bankAccount.customerId}`);
}
