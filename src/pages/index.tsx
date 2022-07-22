import { Box, Button, Flex, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { email } = useAuth();

  return (
    <>
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
            <Heading as="h1" color="blue.700" fontWeight="600">
              Cidades
            </Heading>
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
          <SimpleGrid
            paddingX="196px"
            paddingY="27px"
            gap="40px"
            columns={4}
            w="100%"
            background="gray.100"
            mt="29px"
            minChildWidth="274px"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
