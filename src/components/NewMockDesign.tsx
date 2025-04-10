import { Box, Text, Heading, Divider } from '@metamask/snaps-sdk/jsx';

export const ExactDesignRiskLabel = () => {
  return (
    <Box>
      {/* Heading for the risk assessment */}
      <Heading>Risk Assessment Result</Heading>
      <Divider />

      {/* Risk Section */}
      <Box>
        <Text>
          Risk:{' '}
          <span role="img" aria-label="red dot">
            🔴
          </span>{' '}
          High
        </Text>
      </Box>

      <Divider />

      {/* Label Section */}
      <Box>
        <Text>
          Label:{' '}
          <span role="img" aria-label="deposit">
            💱
          </span>{' '}
          Deposit: OKX{' '}
          <span role="img" aria-label="scam">
            🔴
          </span>{' '}
          Scam
        </Text>
      </Box>
    </Box>
  );
};
