import React, { useState, useEffect } from "react";
import { Box, Text, Code } from "@chakra-ui/react";
import { member } from "../member";
import useStore from "../zustand";

function MemberCollection() {
  const { year } = useStore((state) => state);
  const [selectedArray, setSelectedArray] = useState(member);
  const [totalCollection, setTotalCollection] = useState(null);

  useEffect(() => {
    let totalCollectionAmount = 0;

    selectedArray.forEach((member) => {
      const moneyEntry = member.money.find((m) => m.year === year);

      if (moneyEntry && moneyEntry.amount !== null) {
        totalCollectionAmount += moneyEntry.amount;
      }
    });

    setTotalCollection(totalCollectionAmount);
  }, [selectedArray, year]);

  return (
    <>
      <Box p={3} display="flex" flexDirection="column" gap={2}>
        <Box>
          <Text fontWeight="600">Member Collection Details</Text>
          <FirstBox year={year} totalCollection={totalCollection} />
        </Box>
        <Box>
          <Text fontWeight="600">Card Members</Text>

          <Box border="1px solid #000" p={2} borderRadius="md" mt={2} bg="#eee">
            {selectedArray.map((member, index) => {
              const moneyEntry = member.money.find((m) => m.year === year);
              return (
                <MemberComp
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

function FirstBox({ year, totalCollection }) {
  return (
    <Box p={3} mt={1} borderRadius="md" bg="purple.100">
      <Box>
        <Box display="flex" mb={1}>
          <Text mr={1} fontWeight="500">
            Year:
          </Text>
          <Text>{year}</Text>
        </Box>
        <Box display="flex">
          <Text mr={1} fontWeight="500">
            {`Total Amount Recieved: ${totalCollection}`}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function MemberComp({ id, name, money }) {
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
      {money !== null && (
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
      )}
    </Box>
  );
}

export default MemberCollection;
