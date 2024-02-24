import React, { useState } from "react";
import {
  Box,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useStore from "../zustand";
import { useNavigate, useParams } from "react-router-dom";

function CardForm() {
  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();
  const { type } = useParams();

  const { setVillage, setYear } = useStore((state) => state);

  const handleVillageSelect = (village) => {
    setSelectedVillage(village);
    setVillage(village);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setYear(year);
  };

  const handleSubmit = () => {
    if (
      (!selectedVillage &&
        type !== ":member-collection" &&
        type !== ":guest-collection") ||
      (!selectedYear &&
        type !== ":member-collection" &&
        type !== ":guest-collection")
    ) {
      alert("You have to select both fields");
      return;
    }

    if (type === ":member-collection" && !selectedYear) {
      alert("You have to select year");
      return;
    }

    if (type === ":guest-collection" && !selectedYear) {
      alert("You have to select year");
      return;
    }

    localStorage.setItem("village", selectedVillage);
    localStorage.setItem("year", selectedYear);

    if (type === ":card-distribution") {
      navigate("/card-distribution");
    }
    if (type === ":card-collection") {
      navigate("/card-collection");
    }
    if (type === ":member-collection") {
      navigate("/member-collection");
    }
    if (type === ":guest-collection") {
      navigate("/guest-collection");
    }
  };

  return (
    <Container pt={5}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
        <Text fontWeight="600" fontSize="larger" mb={4}>
          {type === ":card-collection"
            ? "Card Collection"
            : type === ":member-collection"
            ? "Member Collection"
            : type === ":card-distribution"
            ? "Card Distribution"
            : "Guest Collection"}
        </Text>
        {type !== ":member-collection" && type !== ":guest-collection" && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Text fontWeight="500">Select a Village</Text>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontWeight="400"
              >
                {selectedVillage || "Select"}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleVillageSelect("Dhaulimuhan")}>
                  Dhaulimuhan
                </MenuItem>
                <MenuItem onClick={() => handleVillageSelect("Kaimatia")}>
                  Kaimatia
                </MenuItem>
                <MenuItem onClick={() => handleVillageSelect("Kantabania")}>
                  Kantabania
                </MenuItem>
                <MenuItem onClick={() => handleVillageSelect("Jagannath Sahi")}>
                  Jagannath Sahi
                </MenuItem>
                {type === ":card-collection" && (
                  <MenuItem onClick={() => handleVillageSelect("Madhupur")}>
                    Madhupur
                  </MenuItem>
                )}
                {type === ":card-collection" && (
                  <MenuItem onClick={() => handleVillageSelect("Ramchandi")}>
                    Ramchandi
                  </MenuItem>
                )}
                {type === ":card-collection" && (
                  <MenuItem onClick={() => handleVillageSelect("Others")}>
                    Others
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Text fontWeight="500">Select Year</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontWeight="400"
            >
              {selectedYear || "Select"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleYearSelect(2024)}>2024</MenuItem>
              {/* <MenuItem onClick={() => handleYearSelect(2025)}>2025</MenuItem> */}
            </MenuList>
          </Menu>
        </Box>
        <Button mt={2} onClick={handleSubmit} colorScheme="purple">
          Show Details
        </Button>
      </Box>
    </Container>
  );
}

export default CardForm;
