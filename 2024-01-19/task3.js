// Write a JavaScript program that creates a class
// called "BankAccount" with properties for account number
// and balance. Include methods to deposit and withdraw
// money from the account. Create some instances of the
// "BankAccount" class, deposit some money, and withdraw
// a portion of it.

class BankAccount {
	//Privati objekto savybė
	//klasės viduje balance - laukas
	#balance;
	constructor(accountNumber) {
		this.accountNumber = accountNumber;
		this.#balance = 0;
	}

	deposit(amount) {
		this.#balance += amount;
	}

	withdraw(amount) {
		if (amount > this.#balance)
			console.log("Nepakanka lėšų. Šiuo metu turite tik " + this.balance + "€");
		else this.#balance -= amount;
	}

	//Inkapsuliacija/Encapsulation
	get balance() {
		return this.#balance;
	}
}

const myBankAccount = new BankAccount("548965416");
myBankAccount["#balance"] += 400;
// myBankAccount.balance -= 410;

myBankAccount.accountNumber; //account number, šioje vietoje - savybė/property
myBankAccount.deposit(400);
myBankAccount.withdraw(390);

console.log(myBankAccount.balance);
