import { Box, Text, Heading, Divider, Button } from '@metamask/snaps-sdk/jsx';

export const AccountsError = ({ error }: { error: string }) => (
  <Box>
    <Heading>Account Connection Error</Heading>
    <Divider />
    <Text>There was an error connecting to your accounts:</Text>
    <Text>{error}</Text>
    <Divider />
    <Text>Try connecting again:</Text>
    <Button name="connect-wallet">Connect Wallet</Button>
  </Box>
);
