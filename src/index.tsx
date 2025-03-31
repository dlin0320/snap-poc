import type {
  OnTransactionHandler,
  OnHomePageHandler,
  OnRpcRequestHandler,
  OnUserInputHandler,
  OnInstallHandler,
  OnUpdateHandler,
} from '@metamask/snaps-sdk';
import { UserInputEventType } from '@metamask/snaps-sdk';

import { AccountsError } from './components/AccountsError';
import { AccountsList } from './components/AccountsList';
import { getMockResponse } from './utils';

export const onInstall: OnInstallHandler = async () => {
  console.log('Installing the Snap...');
  await ethereum.request({
    method: 'eth_requestAccounts',
  });
  console.log('Snap installed successfully');
};

export const onUpdate: OnUpdateHandler = async () => {
  console.log('Updating the Snap...');
  await ethereum.request({
    method: 'eth_requestAccounts',
  });
  console.log('Snap updated successfully');
};

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
}) => {
  console.log('chainId', chainId);
  return getMockResponse(transaction);
  // return await getTransactionInsight(transaction, chainId);
};

export const onUserInput: OnUserInputHandler = async ({
  id,
  event,
  context,
}) => {
  console.log(`User input ID: ${id}`);
  console.log('Event:', event);
  console.log('Context:', context);

  if (event.type === UserInputEventType.ButtonClickEvent) {
    if (event.name === 'connect-wallet') {
      try {
        console.log('Connecting wallet...');

        await ethereum.request({
          method: 'eth_requestAccounts',
        });

        console.log('Wallet connected successfully');
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else if (event.name === 'show-details') {
      await snap.request({
        method: 'snap_updateInterface',
        params: {
          id,
          ui: <AccountsList accounts={['0x1234...']} />,
        },
      });
      console.log('Transaction type button clicked');
    }
  }
};

export const onHomePage: OnHomePageHandler = async () => {
  try {
    console.log('Initializing home page...');

    // Request accounts but don't prompt for connection
    const accounts = (await ethereum.request({
      method: 'eth_accounts',
    })) as string[];

    console.log('Found accounts:', accounts);

    const id = await snap.request({
      method: 'snap_createInterface',
      params: {
        ui: <AccountsList accounts={accounts} />,
      },
    });
    console.log('Created interface:', id);
    return { id };
  } catch (error) {
    console.error('Error getting accounts:', error);
    return {
      content: <AccountsError error={(error as Error).message} />,
    };
  }
};

export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  console.log('Origin:', origin);
  console.log('RPC request:', request);
  await snap.request({
    method: 'snap_notify',
    params: {
      type: 'native',
      message: 'Received RPC request',
    },
  });
  return { result: null };
};
