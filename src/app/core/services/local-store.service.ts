import { Injectable } from '@angular/core';

export interface IStoreValue {
  theme?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private readonly storeName = 'amr-home-local-store-values';
  private storeValue: IStoreValue;

  constructor() { 
    this.storeValue = this.getStoreValue();
  }

  getStoreValue(): IStoreValue {
    const value = localStorage.getItem(this.storeName);
    return (this.storeValue = value ? JSON.parse(value) : {});
  }

  setStoreValue(value: IStoreValue) {
    this.storeValue = { ...this.storeValue, ...value };
    localStorage.setItem(this.storeName, JSON.stringify(this.storeValue));
  }
}
