import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import UserManagement from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

const testString = "hello world";

console.log(capitalize(testString));
console.log(reverseString(testString));

const loanCalculator = new Finance.LoanCalculator(10000, 5, 2);
console.log(
  `Monthly Payment: ${loanCalculator.calculateMonthlyPayment().toFixed(2)}`
);

const taxCalculator = new Finance.TaxCalculator(50000, 20);
console.log(`Tax: ${taxCalculator.calculateTax()}`);

const admin = new UserManagement.Admin.AdminUser(
  "Alice",
  "alice@example.com",
  false
);
console.log(`Admin: ${admin.name}, Super Admin: ${admin.isSuperAdmin}`);
admin.toggleSuperAdmin();
console.log(`Admin: ${admin.name}, Super Admin: ${admin.isSuperAdmin}`);

console.log(generateFibonacci(100));
console.log(generatePrimeNumbers(50));
