import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiStar, FiCoffee } from "react-icons/fi";
import { EditAndDeleteButtons } from "../EditAndDeleteButtons";

export function LocalCard() {
  return (
    <Flex
      w="274px"
      h="100%"
      bg="#FFF"
      borderRadius="16px"
      direction="column"
      border="1px"
      borderColor="gray.200"
      flex="1"
    >
      <Box w="100%">
        <Flex
          position="absolute"
          width="56px"
          bg="orange.500"
          direction="column"
          marginLeft="24px"
          marginTop="-16px"
          h="83px"
          align="center"
          justifyContent="center"
          borderRadius="10px"
          gap="7.5px"
        >
          <FiStar fill="white" color="white" />
          <Heading fontFamily="Barlow" fontSize="20px" color="white">
            4,7
          </Heading>
        </Flex>

        <Image
          src="../images/image-card.png"
          borderRadius="16px 16px 0px 0px"
          objectFit="cover"
          w="100%"
        />
        <Flex
          align="center"
          justify="flex-start"
          padding="24px"
          h="73px"
          borderBottom="1px"
          borderBottomColor="gray.200"
        >
          <Heading fontWeight="600" color="blue.700" fontSize="20px">
            Doce & Companhia
          </Heading>
        </Flex>
        <Flex justify="space-between" w="100%" padding="24px">
          <Text>Comida e bebida</Text>
          <FiCoffee color="#F25D27" size="24" />
        </Flex>
      </Box>
    </Flex>
  );
}
