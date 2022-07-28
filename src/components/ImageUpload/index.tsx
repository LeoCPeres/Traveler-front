import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
};

export function ImageUpload(props: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const { register, accept, multiple } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  const onSelectedFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Flex
      bg="gray.100"
      w="100%"
      align="center"
      justify="center"
      h="160px"
      mt="10px"
      borderRadius="16px"
      border={selectedFile == undefined ? "2px dashed #DCE2E6" : "none"}
      cursor="pointer"
      onClick={handleClick}
    >
      <input
        type="file"
        hidden
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        onChange={onSelectedFile}
      />
      {selectedFile != undefined ? (
        <Image
          src={preview}
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="16px"
        />
      ) : (
        <Text
          color="orange.500"
          fontSize="16px"
          fontFamily="Heebo"
          fontWeight="400"
        >
          + Adicionar uma foto
        </Text>
      )}
    </Flex>
  );
}
