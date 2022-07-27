import { Flex, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";
import { CustomForm } from "../../components/Form";

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

      <Flex w="100%" align="center" justify="center" mt="48px">
        <CustomForm
          title="Adicione uma cidade"
          buttonText="Concluir cadastro"
          stage="01"
          subtitle="Dados da cidade"
        >
          <FormLabel fontSize="14px" fontWeight="400" fontFamily="Heebo">
            Nome da cidade
          </FormLabel>
          <Input
            h="56px"
            bg="#F5F8FA"
            border="1px solid #DCE2E6"
            focusBorderColor="orange.500"
          />
        </CustomForm>
      </Flex>
    </Flex>
  );
}
