import { Box, Text, Heading, Divider, Link } from '@metamask/snaps-sdk/jsx';

type RiskLevel = 'High' | 'Medium' | 'Low';

const getRiskEmoji = (risk: RiskLevel): string => {
  switch (risk) {
    case 'High':
      return '🔴';
    case 'Medium':
      return '🟠';
    case 'Low':
      return '🟢';
    default:
      return '⚠️';
  }
};

export const MockResponse = ({
  toAddress,
  riskLevel,
  label,
  blockExplorerUrl,
}: {
  toAddress: string;
  riskLevel: RiskLevel;
  label: string;
  blockExplorerUrl: string;
}) => {
  return (
    <Box>
      <Heading>Transaction Security Alert</Heading>
      <Text>Sending to: {toAddress}</Text>
      <Divider />

      <Box>
        <Text>
          {getRiskEmoji(riskLevel)} Risk Level: {riskLevel}
        </Text>
        <Text>Label: {label}</Text>
      </Box>

      <Divider />

      <Box>
        <Text>View address on block explorer:</Text>
        <Link href={blockExplorerUrl}>View on Etherscan</Link>
      </Box>
    </Box>
  );
};
