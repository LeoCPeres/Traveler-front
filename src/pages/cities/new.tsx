import {
  Flex,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { BackButton } from "../../components/BackButton";
import { CustomForm } from "../../components/Form";
import { ImageUpload } from "../../components/ImageUpload";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../contexts/FormContext";
import { CategoryCard } from "../../components/CategoryCard";

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

  const { stage } = useFormContext();

  const maxStages = ["01", "02"];

  const formatedStage = "0" + stage;

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
          {maxStages.map((x) => {
            if (
              Number(x) - 1 == 0 ||
              Number(x) < Number(maxStages[maxStages.length - 1])
            ) {
              return (
                <>
                  <Text
                    fontWeight={Number(formatedStage) == Number(x) ? "500" : ""}
                  >
                    {x}
                  </Text>
                  <span>-</span>
                </>
              );
            } else {
              return (
                <Text
                  fontWeight={Number(formatedStage) == Number(x) ? "500" : ""}
                >
                  {x}
                </Text>
              );
            }
          })}
        </Flex>
      </Flex>

      <Flex w="100%" align="center" justify="center" py="48px">
        <CustomForm
          title={stage == 1 ? "Adicione uma cidade" : "Adicione um local"}
          buttonText="Concluir cadastro"
          stage={stage}
          subtitle={stage == 1 ? "Dados da cidade" : "Dados Básicos"}
          maxStages={2}
        >
          {stage == 1 ? (
            <>
              <FormLabel fontSize="18px" fontWeight="400" fontFamily="Heebo">
                Nome da cidade
              </FormLabel>
              <Input
                h="56px"
                bg="#F5F8FA"
                border="1px solid #DCE2E6"
                focusBorderColor="orange.500"
              />
              <FormLabel
                fontSize="18px"
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
              <FormLabel
                fontSize="18px"
                fontWeight="400"
                fontFamily="Heebo"
                mt="24px"
              >
                Descrição da cidade
              </FormLabel>
              <Textarea
                bg="#F5F8FA"
                border="1px solid #DCE2E6"
                focusBorderColor="orange.500"
                maxLength={320}
                placeholder="Máximo de 320 caracteres"
                h="202px"
              ></Textarea>
            </>
          ) : (
            <>
              <FormLabel fontSize="18px" fontWeight="400" fontFamily="Heebo">
                Nome do local
              </FormLabel>
              <Input
                h="56px"
                bg="#F5F8FA"
                border="1px solid #DCE2E6"
                focusBorderColor="orange.500"
              />
              <FormLabel
                fontSize="18px"
                fontWeight="400"
                fontFamily="Heebo"
                mt="24px"
              >
                Foto do local
              </FormLabel>
              <ImageUpload
                accept={"image/*"}
                register={register("file_", { validate: validateFiles })}
              />
              <FormLabel
                fontSize="18px"
                fontWeight="400"
                fontFamily="Heebo"
                mt="24px"
              >
                Descrição do local
              </FormLabel>
              <Textarea
                bg="#F5F8FA"
                border="1px solid #DCE2E6"
                focusBorderColor="orange.500"
                maxLength={320}
                placeholder="Máximo de 320 caracteres"
                h="202px"
              />
              <FormLabel
                fontSize="18px"
                fontWeight="400"
                fontFamily="Heebo"
                mt="24px"
              >
                Selecione uma categoria
              </FormLabel>
              <SimpleGrid columns={3} gap="16px" mt="18px">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
              </SimpleGrid>
            </>
          )}
        </CustomForm>
      </Flex>
    </Flex>
  );
}
