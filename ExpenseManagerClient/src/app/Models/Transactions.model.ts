export class Transactions {
    date: Date;
    transaction_id: number;
    type: string;
    amount: number;
    category: string;
    sub_category?: string;
    desc?: string;

    constructor(txn?: any) {
    this.date = txn && txn.date                     || null;
    this.transaction_id = txn && txn.transaction_id || null;
    this.type = txn && txn.type                     || 'Expense';
    this.amount = txn && txn.amount                 || 0;
    this.category = txn && txn.category             || null;
    this.sub_category = txn && txn.sub_category     || null;
    this.desc = txn && txn.desc                     || '';
    }

}
