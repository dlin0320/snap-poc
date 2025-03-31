import { Box, Text, Heading, Divider } from '@metamask/snaps-sdk/jsx';

export const NoSecurityData = ({ toAddress }: { toAddress: string }) => (
  <Box>
    <Heading>Address Information</Heading>
    <Text>Sending to: {toAddress}</Text>
    <Divider />
    <Text>No security information found for this address.</Text>
  </Box>
);
