var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var BankView = require('./views/bankView.js');
var sampleAccounts = require('../sample.json');

window.onload = function() {
  console.log('app.js loaded');

  var bank = new Bank();
  console.log( "bank:", bank );

  for( accountData of sampleAccounts ) {
    bank.addAccount( new Account( accountData ) );
  }
  console.log( "accounts:", bank.accounts );

  var bank = new Bank();
  sampleAccounts.forEach( function( account ) {
    bank.addAccount( account );
  });

  var bankView = new BankView( bank );
  bankView.renderAccounts();
};
