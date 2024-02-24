import { Box, Button, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function MidBox() {
  // const { toggleColorMode } = useColorMode();
  // const handleTheme = () => {
  //   toggleColorMode();
  // };

  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      p={5}
    >
      <Avatar
        size="xl"
        mb={2}
        mt={12}
        src="http://res.cloudinary.com/suvaranjan/image/upload/v1707580260/ffebyb5m7raempogzpzb.jpg"
      />
      <Button
        onClick={() => navigate("/card-form/:card-distribution")}
        colorScheme="blue"
        fontWeight="400"
      >
        Card Distribution
      </Button>
      <Button
        onClick={() => navigate("/card-form/:card-collection")}
        colorScheme="blue"
        fontWeight="400"
      >
        Card Collection
      </Button>
      <Button
        onClick={() => navigate("/card-form/:member-collection")}
        colorScheme="blue"
        fontWeight="400"
      >
        Member Collection
      </Button>
      <Button
        onClick={() => navigate("/card-form/:guest-collection")}
        colorScheme="blue"
        fontWeight="400"
      >
        Guest Collection
      </Button>
    </Box>
  );
}

export default MidBox;
