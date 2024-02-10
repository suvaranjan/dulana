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
      gap={2}
      p={5}
    >
      <Avatar size="lg" mb={2} />
      <Button onClick={() => navigate("/card-form/:card-distribution")}>
        Card Distribution
      </Button>
      <Button onClick={() => navigate("/member-collection")}>
        Member Collection
      </Button>
      <Button onClick={() => navigate("/card-form/:card-collection")}>
        Card Collection
      </Button>
    </Box>
  );
}

export default MidBox;
