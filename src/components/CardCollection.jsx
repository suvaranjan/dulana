import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Code,
} from "@chakra-ui/react";
import useStore from "../zustand";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { dhaulimuhanAll } from "../card/dhaulimuhan/dhaulimuhan-all";
import { kantabaniaAll } from "../card/kantabaniaAll";
import { kaimatiaAll } from "../card/kaimatiaAll";
import { jagannathsahiAll } from "../card/jaganathsahiAll";
import { bramhin } from "../card/dhaulimuhan/brahmin";
import { railway } from "../card/dhaulimuhan/railway";
import { tubi } from "../card/dhaulimuhan/tubi";

function CardCollection() {
  const { village, year } = useStore((state) => state);
  const [selectedSahi, setSelectedSahi] = useState("All");
  const [defaultArray, setDefaultArray] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    // Set default array based on the village
    if (village === "Dhaulimuhan") {
      setDefaultArray(dhaulimuhanAll);
    } else if (village === "Kantabania") {
      setDefaultArray(kantabaniaAll);
    } else if (village === "Kaimatia") {
      setDefaultArray(kaimatiaAll);
    } else if (village === "Jagannath Sahi") {
      setDefaultArray(jagannathsahiAll);
    }
  }, [village]);

  useEffect(() => {
    // Set selected array based on the selected sahi
    if (selectedSahi === "All") {
      setSelectedArray(defaultArray);
    } else if (selectedSahi === "Tubi") {
      setSelectedArray(tubi);
    } else if (selectedSahi === "Railway") {
      setSelectedArray(railway);
    } else if (selectedSahi === "Brahmin") {
      setSelectedArray(bramhin);
    }
  }, [selectedSahi, defaultArray]);

  // Calculate total cards
  const totalCards =
    village === "Dhaulimuhan"
      ? dhaulimuhanAll.length
      : village === "Kantabania"
      ? kantabaniaAll.length
      : village === "Kaimatia"
      ? kaimatiaAll.length
      : village === "Jagannath Sahi"
      ? jagannathsahiAll.length
      : 0;

  return (
    <>
      <Box p={3} display="flex" flexDirection="column" gap={2}>
        <Box>
          <Text fontWeight="600">Card Collection Details</Text>
          <FirstBox village={village} year={year} totalCards={totalCards} />
        </Box>
        <Box>
          <Text fontWeight="600">Card Members</Text>
          {village === "Dhaulimuhan" && (
            <DhaulimuhanSahi
              selectedSahi={selectedSahi}
              setSelectedSahi={setSelectedSahi}
            />
          )}

          <Box border="1px solid #000" p={2} borderRadius="md" mt={2} bg="#eee">
            {selectedArray.map((member, index) => {
              const moneyEntry = member.money.find((m) => m.year === year);
              return (
                <Member
                  id={index + 1}
                  name={member.name}
                  money={moneyEntry.amount}
                  key={index}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CardCollection;

function FirstBox({ village, year, totalCards }) {
  return (
    <Box p={3} mt={1} borderRadius="md" bg="purple.100">
      <Box>
        <Box display="flex" mb={1}>
          <Text mr={1} fontWeight="500">
            Village:
          </Text>
          <Text>{village}</Text>
        </Box>
        <Box display="flex" mb={1}>
          <Text mr={1} fontWeight="500">
            Year:
          </Text>
          <Text>{year}</Text>
        </Box>
        <Box display="flex" mb={1}>
          <Text mr={1} fontWeight="500">
            Total Cards:
          </Text>
          <Text>{totalCards}</Text>
        </Box>
        <Box display="flex">
          <Text mr={1} fontWeight="500">
            Total Amount Recieved:
          </Text>
          <Code colorScheme="orange">not updated</Code>
        </Box>
      </Box>
    </Box>
  );
}

function DhaulimuhanSahi({ selectedSahi, setSelectedSahi }) {
  return (
    <Box
      bg="purple.100"
      p={2}
      display="flex"
      alignItems="center"
      borderRadius="md"
      mt={1}
    >
      <Text mr={2} fontWeight="500">
        Select Area
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="purple"
          fontWeight="400"
          size="sm"
        >
          {selectedSahi}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSelectedSahi("All")}>All</MenuItem>
          <MenuItem onClick={() => setSelectedSahi("Tubi")}>Tubi</MenuItem>
          <MenuItem onClick={() => setSelectedSahi("Railway")}>
            Railway
          </MenuItem>
          <MenuItem onClick={() => setSelectedSahi("Brahmin")}>
            Brahmin Sahi
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

function Member({ id, name, money }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      border="1px solid #000"
      mb={2}
      p={2}
      borderRadius="md"
      bg="#FAFAFA"
    >
      <Box display="flex" fontWeight="500">
        <Text mr={1}>{id}.</Text>
        <Text>{name}</Text>
      </Box>
      {/* {money !== null && (
        <Code
          colorScheme="green"
          p={1}
          display="inline"
        >{`Amount Recieved - ${money}`}</Code>
      )}
      {money == null && (
        <Code colorScheme="red" p={1}>
          No amount recieved
        </Code>
      )} */}
      <Code colorScheme="orange">Amount will be updated at 15/02/2024</Code>
    </Box>
  );
}
