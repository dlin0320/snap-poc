import { Box, Text, Heading, Divider, Button } from '@metamask/snaps-sdk/jsx';

export const DemoModeToggle = ({
  isDemoMode = false,
}: {
  isDemoMode?: boolean;
}) => {
  return (
    <Box>
      <Heading>Security Analysis Settings</Heading>
      <Divider />
      <Box>
        <Text>Current Mode: {isDemoMode ? '✅ Demo' : '🔄 Live'}</Text>
        <Text>
          {isDemoMode
            ? 'Using mock data for transaction analysis'
            : 'Using live data for transaction analysis'}
        </Text>
        <Divider />
        <Button name="toggle-demo-mode">
          {isDemoMode ? 'Switch to Live Mode' : 'Switch to Demo Mode'}
        </Button>
      </Box>
    </Box>
  );
};
