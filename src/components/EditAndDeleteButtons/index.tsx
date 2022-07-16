import { Button, Flex } from "@chakra-ui/react";
import { FiEdit3, FiTrash } from "react-icons/fi";

export function EditAndDeleteButtons() {
  return (
    <Flex flex="1" gap="4px">
      <Button
        borderRadius="10px 0px 0px 10px"
        background="transparent"
        borderColor="gray.200"
        border="1px"
        opacity="0.6"
        w="48px"
      >
        <FiEdit3 />
      </Button>
      <Button
        borderRadius="0px 10px 10px 0px"
        background="transparent"
        borderColor="gray.200"
        border="1px"
        w="48px"
        opacity="0.6"
      >
        <FiTrash opacity="100%" />
      </Button>
    </Flex>
  );
}
