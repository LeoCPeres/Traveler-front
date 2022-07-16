import { Button, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton() {
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }

  return (
    <Link
      onClick={handleBackClick}
      background="transparent"
      borderColor="#DCE2E6"
      border="1px"
      borderStyle="solid"
      borderRadius="10px"
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <FiArrowLeft />
    </Link>
  );
}
