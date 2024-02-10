import { Container, Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="#03DAC6" p={2}>
      <Text textAlign="center" fontSize="2rem" fontWeight="600" mb="0">
        Maa Dulana
      </Text>
      <Text textAlign="center" mt="1">
        Madhupur
      </Text>
    </Box>
  );
}

export default Header;
