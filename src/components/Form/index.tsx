import { Flex, Text, Heading, Button, Divider, Box } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";
import { useFormContext } from "../../contexts/FormContext";

interface CustomFormProps {
  children: React.ReactNode;
  stage?: number;
  title: string;
  buttonText?: string;
  subtitle: string;
  maxStages?: number;
}

export function CustomForm({
  children,
  stage = 0,
  title,
  buttonText,
  subtitle,
  maxStages = 2,
}: CustomFormProps) {
  const { handleNextStage, handlePreviousStage } = useFormContext();

  return (
    <Flex
      w="60%"
      borderRadius="16px"
      border="1px solid #DCE2E6"
      direction="column"
      h="100%"
      // as="form"
      bg="#FFF"
    >
      <Flex
        py="39px"
        px="63px"
        borderBottom="1px solid #DCE2E6"
        w="100%"
        h="143px"
        className={stage != 0 ? styles.bgGreen : styles.bgOrange}
        gap="40px"
        align="center"
        borderRadius="16px 16px 0 0"
      >
        {stage != 0 && (
          <Flex
            bg="green.500"
            w="64px"
            h="64px"
            align="center"
            justify="center"
            borderRadius="8px"
          >
            <Text
              color="#FFF"
              fontSize="24px"
              fontWeight="600"
              fontFamily="Barlow"
            >
              {stage}
            </Text>
          </Flex>
        )}

        <Heading
          color={stage != null ? "green.500" : "orange.500"}
          fontWeight="600"
          fontFamily="Barlow"
        >
          {title}
        </Heading>
      </Flex>
      <Flex py="39px" px="63px" w="100%" my="48px" direction="column" bg="#FFF">
        <Text
          fontSize="24px"
          fontWeight="500"
          lineHeight="30px"
          fontFamily="Barlow"
          color="blue.700"
        >
          {subtitle}
        </Text>

        <Divider mt="16px" mb="24px" bg="#DCE2E6" height="1px" />

        {children}
      </Flex>

      <Flex w="100%" align="center" justify="space-between" py="39px" px="63px">
        <Flex align="center" gap="26px">
          <FiAlertCircle color="#F25D27" size="32px" />
          <Text maxWidth="164px">Preencha todos os dados com cuidado.</Text>
        </Flex>

        <Flex gap="2rem" align="center">
          {stage != 1 && (
            <FiArrowLeft cursor="pointer" onClick={handlePreviousStage} />
          )}

          {stage != null && stage < maxStages ? (
            <Button
              bg="blue.500"
              color="#FFF"
              _hover={{ opacity: 0.85 }}
              onClick={() => handleNextStage(maxStages)}
              type="button"
            >
              Próximo
            </Button>
          ) : (
            <Button
              bg="green.500"
              color="#FFF"
              _hover={{ opacity: 0.85 }}
              type="submit"
            >
              {buttonText}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
