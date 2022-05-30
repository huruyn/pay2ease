/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';
import { TransactionStatusEnum } from './interac-etransfer/status/transaction-status/TransactionStatusEnum';

export enum TransferType {
  SEND = 'send',
  RECEIVE = 'receive',
  REQUEST = 'request',
}

export type Account = {
  id: number;
  name: string;
  balance: number;
};

export type ContactBase = {
  firstName: string;
  lastName: string;
  email: string;
  nickname?: string;
  phone?: string;
};

export type Contact = ContactBase & {
  id: number;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
};

export type Transaction = {
  status: TransactionStatusEnum;
  id: number;
  contact: Contact;
  amount: number;
  date: string;
  expireDate: string;
  securityQuestion?: string;
  securityAnswer?: string;
};

export type InteracEtransferTransaction = {
  id?: number,
  contactId: number,
  amount: number,
  type: string,
  securityQuestion?: string,
  securityAnswer?: string,
};

export type ZippyCashTransaction = {
  id?: number,
  contactId: number,
  amount: number,
  isCredit: boolean,
  createdDate?: string
};

export type VersionResponse = {
  version: string;
};

export type ErrorDetail = {
  type: string,
  title: string,
  status: number,
  traceId: string,
};

export async function getToken(instance: IPublicClientApplication, account: AccountInfo)
  : Promise<string | null> {
  const accessTokenRequest = {
    scopes: ['https://zippycashdev.onmicrosoft.com/b0b070aa-4e90-4015-af46-59d0ceed5ecc/access_as_user'],
    account,
  };

  let accessToken;
  try {
    const accessTokenResponse = await instance.acquireTokenSilent(accessTokenRequest);
    accessToken = accessTokenResponse.accessToken;
    return accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      await instance.acquireTokenRedirect(accessTokenRequest);
    }
    console.log(error);
  }
  return null;
}

export default class Api {
  constructor(
    private readonly instance: IPublicClientApplication,
    private readonly account: AccountInfo,
  ) { }

  public listAccounts() {
    return this.fetch<Account[]>('get', 'Accounts');
  }

  public listContacts() {
    return this.fetch<Contact[]>('get', 'Contacts');
  }

  public postContact(data: ContactBase) {
    return this.fetch<Contact>('post', 'Contacts', data);
  }

  public putUser() {
    return this.fetch<User>('put', 'User');
  }

  public getInteracEtransferTransactions(type: TransferType) {
    return this.fetch<Transaction[]>('get', `InteracEtransfer/Transactions?type=${type}`);
  }

  public getInteracEtransferTransaction(transactionId: number) {
    return this.fetch<Transaction>('get', `InteracEtransfer/Transactions/${transactionId}`);
  }

  public getInteracEtransferCancelTransaction(transactionId: number) {
    return this.fetch<Transaction>('post', `InteracEtransfer/Transactions/${transactionId}/Cancel`);
  }

  public getInteracEtransferSendReminder(transactionId: number) {
    return this.fetch<Transaction>('post', `InteracEtransfer/Transactions/${transactionId}/Remind`);
  }

  public postInteracEtransferTransaction(data: InteracEtransferTransaction) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/Transactions', data);
  }

  public postDirectDepositStatus(email: string) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/DirectDepositStatus', { email });
  }

  public getZippyCashTransfer(transactionId: number) {
    return this.fetch<Transaction>('get', `Transfers/${transactionId}`);
  }

  public postZippyCashTransfer(data: ZippyCashTransaction) {
    return this.fetch<ZippyCashTransaction>('post', 'Transfers', data);
  }

  public getVersion() {
    return this.fetch<VersionResponse>('get', 'Version');
  }

  private async fetch<TResponse>(method: string, path: string, body?: any) {
    const apiUrl = (<any>window).API_URL;
    if (!apiUrl) {
      throw Error('window.API_URL is undefined');
    }

    const request: RequestInit = {
      method,
      body: body ? JSON.stringify(body) : null,
    };

    if (path !== 'Version') {
      const accessToken = await getToken(this.instance, this.account);
      request.headers = new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      });
    }

    const response = await fetch(`${apiUrl}/${path}`, request);
    // TODO: proper error output here
    if (!response.ok) {
      const error = await response.json() as ErrorDetail;
      throw Error(error.title);
    }
    return (response.status !== 204 ? await response.json() : {}) as TResponse;
  }
}
