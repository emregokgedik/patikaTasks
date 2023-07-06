#include <stdio.h>
#include <stdlib.h>

#define MAX_ACCOUNTS 100
#define FILENAME "bank.txt"

struct BankAccount {
    int accountNumber;
    char name[50];
    double balance;
};

struct BankAccount accounts[MAX_ACCOUNTS];
int numAccounts = 0;

void createAccount() {
    struct BankAccount newAccount;

    printf("Account Number: ");
    scanf("%d", &newAccount.accountNumber);

    printf("Name: ");
    scanf("%s", newAccount.name);

    printf("Starting Balance: ");
    scanf("%lf", &newAccount.balance);

    accounts[numAccounts] = newAccount;
    numAccounts++;

    printf("New account created.\n");
}

void displayAccounts() {
    if (numAccounts == 0) {
        printf("There is no account.\n");
        return;
    }

    printf("Accounts:\n");
    for (int i = 0; i < numAccounts; i++) {
        printf("Account Number: %d, Name: %s, Balance: %.2f\n", accounts[i].accountNumber, accounts[i].name, accounts[i].balance);
    }
}

int findAccountIndex(int accountNumber) {
    for (int i = 0; i < numAccounts; i++) {
        if (accounts[i].accountNumber == accountNumber) {
            return i;
        }
    }
    return -1;
}

void deposit(int accountNumber, double amount) {
    int accountIndex = findAccountIndex(accountNumber);
    if (accountIndex == -1) {
        printf("Couldn't find any account.\n");
        return;
    }

    accounts[accountIndex].balance += amount;
    printf(" %.2f TL deposited to the account .\n", amount);
}

void withdraw(int accountNumber, double amount) {
    int accountIndex = findAccountIndex(accountNumber);
    if (accountIndex == -1) {
        printf("Couldn't find any account.\n");
        return;
    }

    if (accounts[accountIndex].balance < amount) {
        printf("Insufficient balance.\n");
        return;
    }

    accounts[accountIndex].balance -= amount;
    printf(" %.2f TL withdrawed from the account.\n", amount);
}

void saveAccountsToFile() {
    FILE *file = fopen(FILENAME, "w");
    if (file == NULL) {
        printf("File couldn't open.\n");
        return;
    }

    for (int i = 0; i < numAccounts; i++) {
        fprintf(file, "%d %s %.2f\n", accounts[i].accountNumber, accounts[i].name, accounts[i].balance);
    }

    fclose(file);
    printf("Accounts saved to file.\n");
}

void loadAccountsFromFile() {
    FILE *file = fopen(FILENAME, "r");
    if (file == NULL) {
        printf("File couldn't open.\n");
        return;
    }

    while (fscanf(file, "%d %s %lf", &accounts[numAccounts].accountNumber, accounts[numAccounts].name, &accounts[numAccounts].balance) == 3) {
        numAccounts++;
    }

    fclose(file);
    printf("Accounts loaded from the file.\n");
}

int main() {
    loadAccountsFromFile();

    int choice;

    do {
        printf("\n--- Bank Account Management ---\n");
        printf("1. Create a New Account\n");
        printf("2. Show Accounts\n");
        printf("3. Deposit Cash\n");
        printf("4. Withdraw Cash\n");
        printf("5. Exit\n");
        printf("Your Choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                createAccount();
                break;
            case 2:
                displayAccounts();
                break;
            case 3:
                {
                    int accountNumber;
                    double amount;
                    printf("Account Number: ");
                    scanf("%d", &accountNumber);
                    printf("Amount to Deposit: ");
                    scanf("%lf", &amount);
                    deposit(accountNumber, amount);
                }
                break;
            case 4:
                {
                    int accountNumber;
                    double amount;
                    printf("Account Number: ");
                    scanf("%d", &accountNumber);
                    printf("Amount to Withdraw: ");
                    scanf("%lf", &amount);
                    withdraw(accountNumber, amount);
                }
                break;
            case 5:
                saveAccountsToFile();
                printf("Exiting.\n");
                break;
            default:
                printf("Invalid choice.\n");
                break;
        }
    } while (choice != 5);

    return 0;
}
