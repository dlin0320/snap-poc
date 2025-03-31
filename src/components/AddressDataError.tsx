import { Box, Text, Heading, Divider } from '@metamask/snaps-sdk/jsx';

export const AddressDataError = ({ toAddress }: { toAddress: string }) => (
  <Box>
    <Heading>Address Information</Heading>
    <Text>Sending to: {toAddress}</Text>
    <Divider />
    <Text>Failed to fetch address label.</Text>
  </Box>
);
