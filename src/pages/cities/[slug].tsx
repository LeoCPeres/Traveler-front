import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton/BackButton";

export default function City() {
  return (
    <Flex h="100vh" direction="row" background="gray.100" marginLeft="96px">
      <Flex width="100%" height="100%" direction="column">
        <Flex
          background="#FFF"
          w="100%"
          height="96px"
          paddingY="25px"
          paddingX="115px"
          justifyContent="space-between"
          alignItems="center"
        >
          <BackButton />
          <Button
            background="green.500"
            w="214px"
            color="#FFF"
            colorScheme="green"
            h="48px"
            _hover={{ opacity: 0.85 }}
          >
            + Adicionar Perfil
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
