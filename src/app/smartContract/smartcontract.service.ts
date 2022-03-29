import { Injectable } from '@angular/core';
import { TezosToolkit } from '@taquito/taquito';
import { TezBridgeSigner } from '@taquito/tezbridge-signer';

const tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');
tezos.setProvider({ signer: new TezBridgeSigner() });
// const tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');

@Injectable({
  providedIn: 'root'
})
export class SmartcontractService {

  constructor() { }
}
