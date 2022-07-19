import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";
import { EditAndDeleteButtons } from "../../components/EditAndDeleteButtons";
import { FiCamera } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
import { LocalCard } from "../../components/LocalCard";

export default function City() {
  return (
    <>
      <Sidebar />
      <Flex h="100vh" direction="row" background="gray.100" marginLeft="96px">
        <Flex width="100%" height="100%" direction="column">
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

          <Flex paddingX="112px" paddingY="80px" gap="256px">
            <Box w="50%">
              <Heading
                fontFamily="Barlow"
                color="blue.700"
                fontWeight="600"
                fontSize="54px"
              >
                Florianópolis
              </Heading>
              <Text
                marginTop="40px"
                marginBottom="32px"
                fontSize="20px"
                fontFamily="Heebo"
                color="blue.700"
              >
                Capital do estado de Santa Catarina no sul do Brasil, é
                maioritariamente constituída pela Ilha de Santa Catarina, com 54
                km de comprimento.
              </Text>
              <Text fontFamily="Heebo">
                É famosa pelas suas praias, incluindo estâncias turísticas
                populares como a Praia dos Ingleses na extremidade norte da
                ilha.
              </Text>
            </Box>
            <Flex gap="32px">
              <Flex
                bg="#FFF"
                borderRadius="20px"
                border="1px"
                borderColor="gray.200"
                w="160px"
                h="268px"
                direction="column"
              >
                <Flex
                  h="104px"
                  padding="37px"
                  w="100%"
                  __css={{ borderBottom: "1px solid #DCE2E6" }}
                >
                  <FiCamera color="#F25D27" size={36} />
                </Flex>

                <Flex padding="32px" direction="column" gap="16px">
                  <Heading color="blue.700">67</Heading>
                  <Text>Pontos Turísticos</Text>
                </Flex>
              </Flex>
              <Flex
                bg="#FFF"
                borderRadius="20px"
                border="1px"
                borderColor="gray.200"
                w="160px"
                h="268px"
                direction="column"
              >
                <Flex
                  h="104px"
                  padding="37px"
                  w="100%"
                  __css={{ borderBottom: "1px solid #DCE2E6" }}
                >
                  <FiCamera color="#F25D27" size={36} />
                </Flex>

                <Flex padding="32px" direction="column" gap="16px">
                  <Heading color="blue.700">67</Heading>
                  <Text>Pontos Turísticos</Text>
                </Flex>
              </Flex>
              <Flex
                bg="#FFF"
                borderRadius="20px"
                border="1px"
                borderColor="gray.200"
                w="160px"
                h="268px"
                direction="column"
              >
                <Flex
                  h="104px"
                  padding="37px"
                  w="100%"
                  __css={{ borderBottom: "1px solid #DCE2E6" }}
                >
                  <FiCamera color="#F25D27" size={36} />
                </Flex>

                <Flex padding="32px" direction="column" gap="16px">
                  <Heading color="blue.700">67</Heading>
                  <Text>Pontos Turísticos</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex paddingX="112px" direction="column">
            <Heading color="blue.700" fontWeight="600">
              Top avaliados
            </Heading>

            <Flex gap="32px" mt="64px" mb="80px">
              <LocalCard />
              <LocalCard />
              <LocalCard />
              <LocalCard />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
