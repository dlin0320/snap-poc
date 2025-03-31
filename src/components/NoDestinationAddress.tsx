import { Box, Text, Heading } from '@metamask/snaps-sdk/jsx';

export const NoDestinationAddress = () => (
  <Box>
    <Heading>Address Information</Heading>
    <Text>No destination address found in this transaction.</Text>
  </Box>
);
