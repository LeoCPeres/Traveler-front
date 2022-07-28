import { Flex, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";
import { CustomForm } from "../../components/Form";
import { ImageUpload } from "../../components/ImageUpload";
import { useForm } from "react-hook-form";

type FormValues = {
  file_: FileList;
};

export default function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return "Files is required";
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return "Max file size 10mb";
      }
    }
    return true;
  };

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
          <FormLabel
            fontSize="14px"
            fontWeight="400"
            fontFamily="Heebo"
            mt="24px"
          >
            Foto da cidade
          </FormLabel>
          <ImageUpload
            accept={"image/*"}
            register={register("file_", { validate: validateFiles })}
          />
        </CustomForm>
      </Flex>
    </Flex>
  );
}
