import { Box, Flex, Image, Link } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <Flex
      height="100vh"
      background="orange.500"
      width="96px"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      paddingY="32px"
      position="fixed"
    >
      <Link href="/">
        <Image src="../icons/logo.svg" />
      </Link>
      <Flex direction="column" gap="50px">
        <Link href="/cities">
          <Image src="../icons/cities.svg" />
        </Link>
        <Link>
          <Image src="../icons/categories.svg" />
        </Link>
        <Link>
          <Image src="../icons/comments.svg" />
        </Link>
      </Flex>

      <Link href="/login">
        <Image src="../icons/logout.svg" />
      </Link>
    </Flex>
  );
}
