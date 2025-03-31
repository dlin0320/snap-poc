import type {
  ChainId,
  OnTransactionResponse,
  Transaction,
} from '@metamask/snaps-sdk';

import { AddressDataError } from './components/AddressDataError';
import { AddressSecurityInfo } from './components/AddressSecurityInfo';
import { MockResponse } from './components/MockResponse';
import { NoDestinationAddress } from './components/NoDestinationAddress';
import { NoSecurityData } from './components/NoSecurityData';

export const getChainName = (chainId: ChainId) => {
  const chainNum = Number(chainId.split(':')[1]);
  const chainMap: { [key: number]: string } = {
    1: 'ethereum',
    56: 'binance',
    137: 'polygon',
    43114: 'avalanche',
  };
  return chainMap[chainNum] ?? 'unknown';
};

export const getRiskEmoji = (risk: string): string => {
  if (risk === 'Low') {
    return '🟢';
  }
  if (risk === 'Medium') {
    return '🟡';
  }
  if (risk === 'High') {
    return '🔴';
  }
  return '';
};

export const getTransactionInsight = async (
  transaction: Transaction,
  chainId: ChainId,
): Promise<OnTransactionResponse | null> => {
  const baseUrl = `http://192.168.200.130:7001/v1/get_label/cors`;
  const toAddress = transaction.to;

  if (!toAddress) {
    return {
      content: <NoDestinationAddress />,
    };
  }

  try {
    const response = await fetch(
      `${baseUrl}?chain_name=${getChainName(
        chainId,
      )}&address=${toAddress}&source_list_code=111&search_flag=true&quick_mode=false`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch address label: ${response.status}`);
    }

    const { data } = await response.json();
    console.log(data);

    // Determine if any meaningful data exists
    const hasData =
      (data.blockchain_security || []).some(
        (item: any) => item.name !== 'Unknown',
      ) ||
      (data.chainanalysis || []).some((item: any) => item.name !== 'Unknown') ||
      (data.qlue || []).some((item: any) => item.name !== 'Unknown') ||
      data.smart_contract ||
      data.black_list;

    // Preprocess risk emojis for each item
    if (data.chainanalysis && Array.isArray(data.chainanalysis)) {
      data.chainanalysis.forEach((item: any) => {
        if (item.risk) {
          item.riskEmoji = getRiskEmoji(item.risk);
        }
      });
    }

    // Return appropriate component based on data
    if (hasData) {
      return {
        content: <AddressSecurityInfo toAddress={toAddress} data={data} />,
      };
    }
    return {
      content: <NoSecurityData toAddress={toAddress} />,
    };
  } catch (error) {
    console.error('Error fetching address label:', error);
    return {
      content: <AddressDataError toAddress={toAddress} />,
    };
  }
};

export const getMockResponse = async (
  transaction: Transaction,
): Promise<OnTransactionResponse | null> => {
  const toAddress =
    transaction.to || '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b';

  const baseUrl = 'https://etherscan.io';

  const blockExplorerUrl = `${baseUrl}/address/${toAddress}`;

  return {
    content: (
      <MockResponse
        toAddress={toAddress}
        riskLevel="High"
        label="Scammer"
        blockExplorerUrl={blockExplorerUrl}
      />
    ),
  };
};
