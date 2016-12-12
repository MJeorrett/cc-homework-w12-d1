var Bank = require('../bank');
var Account = require('../account');
var assert = require('assert');

describe('bank', function() {
  it('should start off with no bank accounts ', function() {
    var bank = new Bank();
    assert.equal(0, bank.accounts.length);
  });
  it('should be able to add account', function() {
    var bank = new Bank();
    var account = new Account({owner:'Jay',amount:50, type:'business'});
    bank.addAccount(account);
    assert.deepEqual(account, bank.accounts[0]);
  });
  it('find account by owner name', function() {
    var bank = new Bank();
    var account = new Account({owner:'Jay',amount:50, type:'business'});
    bank.addAccount(account);
    var foundAccount = bank.findAccountByOwnerName('Jay');
    assert.deepEqual(account, foundAccount);
  });
  // Find the total account value.
  it('should find the total account value', function() {
    var bank = new Bank();
    var account1 = new Account({owner:'Jay',amount:50, type:'business'});
    var account2 = new Account({owner:'Val',amount:150, type:'business'});
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(200, bank.totalCash());
  });
  // Find the average value.
  it('should find the average value', function() {
    var bank = new Bank();
    var account1 = new Account({owner:'Jay',amount:50, type:'business'});
    var account2 = new Account({owner:'Val',amount:150, type:'business'});
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(100, bank.accountAverage());
  });
  it("should find the total value for an account type", function() {
    var bank = new Bank();
    var account1 = new Account({owner:'Jay',amount:50, type:'business'});
    var account2 = new Account({owner:'Val',amount:150, type:'business'});
    var account3 = new Account({owner:'Kieth',amount:150, type:'personal'});
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.equal( 200, bank.totalCash('business') );
  });
  it("should increase amount of account passed to payInterestOnAccount() by 10%", function() {
    var bank = new Bank();
    var mockAccount = { amount: 100 };
    bank.payInterestOnAccount( mockAccount );
    assert.equal( 110, mockAccount.amount );
  });
  it("should pay interest on all accounts", function() {
    var bank = new Bank();
    var mockAccount1 = { amount: 100 };
    var mockAccount2 = { amount: 90 };
    var mockAccount3 = { amount: 130 };
    bank.addAccount( mockAccount1 );
    bank.addAccount( mockAccount2 );
    bank.addAccount( mockAccount3 );
    bank.payInterestOnAllAccounts();
    assert.equal( 110, mockAccount1.amount );
    assert.equal( 99, mockAccount2.amount );
    assert.equal( 143, mockAccount3.amount );
  });
});
