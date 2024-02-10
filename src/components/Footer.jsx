import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box textAlign="center" fontSize="xs" p={2} bg="#eee" mt={3}>
      <Text display="inline" mr={1}>
        Built by
      </Text>
      <Link
        display="inline"
        fontWeight="600"
        href="https://suvaranjan.vercel.app/about"
        color="blue.500"
      >
        suvaranjan
      </Link>
    </Box>
  );
}
