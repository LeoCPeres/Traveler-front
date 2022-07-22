import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { setPasswordState, setEmailState } = useAuth();
  const router = useRouter();

  function handleSubmit() {
    router.push("/");
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Image h="100vh" w="100%" src="./images/login.png"></Image>
      </GridItem>
      <GridItem>
        <Flex align="center" justify="center" h="100vh">
          <Box w="100%" paddingX="200">
            <Heading size="xl" fontWeight="semibold" color="blue.700" mb="10">
              Fazer login
            </Heading>

            <FormControl mb="5">
              <Input
                name="email"
                type="email"
                borderBottomRadius="0"
                h="72px"
                borderColor="gray.200"
                placeholder="E-mail"
                size="lg"
                paddingX="5"
                bg="white"
                onChange={(e) => setEmailState(e.target.value)}
              />
              <Input
                name="password"
                type="password"
                borderTopRadius="0"
                h="72px"
                borderColor="gray.200"
                placeholder="Senha"
                size="lg"
                paddingX="5"
                bg="white"
                onChange={(e) => setPasswordState(e.target.value)}
              />

              <Flex align="center" justify="space-between" mt="5">
                <Checkbox size="lg" colorScheme="green" color="gray.300">
                  Lembrar-me
                </Checkbox>
                <Link href="" fontSize="lg" color="gray.300">
                  Esqueci minha senha
                </Link>
              </Flex>

              <Button
                w="100%"
                bg="orange.500"
                h="72px"
                mt="40px"
                color="white"
                _hover={{ bg: "orange.100" }}
                onClick={handleSubmit}
              >
                Acessar plataforma
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
