import { Box, Text, Heading, Divider, Button } from '@metamask/snaps-sdk/jsx';

export const AccountsList = ({ accounts = [] }: { accounts?: string[] }) => {
  const hasAccounts = accounts && accounts.length > 0;

  return (
    <Box>
      <Heading>Connected Accounts</Heading>
      <Divider />

      {hasAccounts ? (
        <Box>
          <Text>The following accounts are connected:</Text>
          {accounts.map((account, index) => (
            <Box key={`account-${index}`}>
              <Text>
                • Account {`${index + 1}`}: {account}
              </Text>
              <Button name="show-details">Show Details</Button>
            </Box>
          ))}
          <Divider />
        </Box>
      ) : (
        <Box>
          <Text>No accounts are currently connected.</Text>
          <Text>Connect your wallet to use this feature:</Text>
          <Button name="connect-wallet">Connect Wallet</Button>
        </Box>
      )}
    </Box>
  );
};
