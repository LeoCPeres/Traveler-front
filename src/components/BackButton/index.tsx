import { Button, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton() {
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }

  return (
    <Button
      onClick={handleBackClick}
      borderColor="gray.200"
      border="1px"
      opacity="0.6"
      borderRadius="10px"
      width="48px"
      height="48px"
    >
      <FiArrowLeft />
    </Button>
  );
}
