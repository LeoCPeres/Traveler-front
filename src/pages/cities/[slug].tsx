import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";
import { EditAndDeleteButtons } from "../../components/EditAndDeleteButtons";

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
          <Flex gap="24px" align="center">
            <EditAndDeleteButtons />
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

        <Box w="100%">
          <Image src="../images/city.png" objectFit="contain" w="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}
