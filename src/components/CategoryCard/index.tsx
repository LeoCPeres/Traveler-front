import { Flex, Checkbox, Text } from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";

export function CategoryCard() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      bg="gray.100"
      borderRadius="10px"
      border="1px solid #DCE2E6"
    >
      <Flex
        align="center"
        justify="space-between"
        px="24px"
        py="32px"
        borderBottom="1px solid #DCE2E6"
      >
        <FiCamera size="40px" color="#F25D27" />
        <Checkbox bg="white" size="lg" />
      </Flex>

      <Flex align="center" justify="flex-start" px="24px" py="32px">
        <Text
          color="blue.700"
          fontSize="20px"
          lineHeight="30px"
          fontWeight="600"
          fontFamily="Barlow"
          maxWidth="76px"
        >
          Comida e Bebida
        </Text>
      </Flex>
    </Flex>
  );
}
