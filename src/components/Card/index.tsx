import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export function Card() {
  return (
    <Link
      _hover={{ textDecoration: "none" }}
      href="/cities/aguas-mornas"
      flex="1"
    >
      <Flex
        w="100%"
        h="100%"
        bg="#FFF"
        borderRadius="16px"
        direction="column"
        border="1px"
        flex="1"
        borderColor="gray.200"
      >
        <Box w="100%">
          <Image
            src="../images/image-card.png"
            borderRadius="16px 16px 0px 0px"
            objectFit="cover"
            w="100%"
          />
        </Box>

        <Flex direction="column" padding="24px">
          <Heading fontWeight="600" color="blue.700" fontSize="20px">
            Águas Mornas
          </Heading>
          <Text fontWeight="400" color="gray.500">
            13 locais
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
