import { Box, Text, Center } from 'native-base';

function AppBar()
{

  return (
    <Box safeAreaTop bg="green.600" width="100%">
      <Center>
        <Text color="white" fontSize="20" fontWeight="bold">
          Sketch something below
        </Text>
      </Center>
    </Box>
  )
}

export default AppBar;
