import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

function Gallery() {
  return (
    <Box p={2}>
      <Text textAlign="center" fontSize="large" fontWeight="600" mb={5} mt={5}>
        Gallery
      </Text>
      <Box display="flex" alignItems="center" flexDirection="column" gap={5}>
        <Box>
          <iframe
            width="100%"
            height="210"
            src="https://www.youtube.com/embed/MZwOD4N5uow?si=OPzEAMxnM-JsQSNH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="100%"
            height="210"
            src="https://www.youtube.com/embed/f1nnBfjsMMo?si=OWT3rBgL4MAEWlUt"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="100%"
            height="210"
            src="https://www.youtube.com/embed/FC8Um-2T-7s?si=2jZ0CNEUMk_e-ciK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default Gallery;
