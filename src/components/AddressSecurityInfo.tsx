import { Box, Text, Heading, Divider } from '@metamask/snaps-sdk/jsx';

export const AddressSecurityInfo = ({
  toAddress,
  data,
}: {
  toAddress: string;
  data: any;
}) => {
  // Extract data sections
  const blockchainSecurity = data.blockchain_security || [];
  const chainanalysis = data.chainanalysis || [];
  const qlue = data.qlue || [];
  const isSmartContract = data.smart_contract || false;
  const isBlacklisted = data.black_list || false;

  return (
    <Box>
      <Heading>Address Information</Heading>
      <Text>Sending to: {toAddress}</Text>
      <Divider />

      {isSmartContract && (
        <Box>
          <Text>⚠️ This is a smart contract address</Text>
        </Box>
      )}

      {isBlacklisted && (
        <Box>
          <Text>❗ This address is blacklisted</Text>
        </Box>
      )}

      {blockchainSecurity.map((item: any, index: number) => {
        const itemKey = `security-${index}`;
        return (
          <Box key={itemKey}>
            <Text>📊 Blockchain Security:</Text>
            <Text>• {item.name || 'Unknown'}</Text>
            {item.type && item.type !== 'Unknown' && (
              <Text> Type: {item.type}</Text>
            )}
            {item.labels &&
              Array.isArray(item.labels) &&
              item.labels.length > 0 && (
                <Text> Labels: {item.labels.join(', ')}</Text>
              )}
          </Box>
        );
      })}

      {chainanalysis.map((item: any, index: number) => {
        const itemKey = `chain-${index}`;
        return (
          <Box key={itemKey}>
            <Text>🔍 Chain Analysis:</Text>
            <Text>• {item.name || 'Unknown'}</Text>
            {item.type && item.type !== 'Unknown' && (
              <Text> Type: {item.type}</Text>
            )}
            {item.risk && (
              <Text>
                {' '}
                Risk: {item.riskEmoji || ''} {item.risk}
              </Text>
            )}
          </Box>
        );
      })}

      {qlue.map((item: any, index: number) => {
        const itemKey = `qlue-${index}`;
        return (
          <Box key={itemKey}>
            <Text>🧩 QLUE:</Text>
            <Text>• {item.name || 'Unknown'}</Text>
            {item.type && item.type !== 'Unknown' && (
              <Text> Type: {item.type}</Text>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
