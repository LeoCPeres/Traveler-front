import { Flex, Heading, Text } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";

export default function New() {
  return (
    <Flex h="100vh" direction="column" background="gray.100" marginLeft="96px">
      <Flex
        background="#FFF"
        w="100%"
        height="96px"
        paddingY="25px"
        paddingX="112px"
        justifyContent="space-between"
        alignItems="center"
      >
        <BackButton />
        <Text
          color="gray.300"
          fontSize="20px"
          fontFamily="Barlow"
          fontWeight="500"
        >
          Adicionar um perfil
        </Text>

        <Flex align="center" gap="8px">
          <Text fontWeight="500">01</Text>
          <span>-</span>
          <Text>02</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
