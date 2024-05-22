import {
  Box,
  Image,
  Button,
  Link,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ShowCaseWebsite } from "@/component/website/websiteData";
import { Slider } from "../slide/slider";
import { useState } from "react";

export const Web = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold" textAlign="center">
            {ShowCaseWebsite[current].title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Slider index={current} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Link</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {ShowCaseWebsite.map((data, index) => {
          return (
            <>
              <Box
                minH={["300px", "300px", "500px"]}
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={index === 0 ? 50 : 0}
                bg="teal"
                key={index}
              >
                <Box
                  display="flex"
                  flexDirection={
                    index === 1
                      ? ["column", "column", "row-reverse"]
                      : ["column", "column", "row"]
                  }
                  alignItems="center"
                >
                  <Box
                    w={["100%", "100%", "50%"]}
                    minH={["300px", "300px", "500px"]}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    p={0}
                  >
                    <Image
                      src={data.image}
                      h="300px"
                      w={["100%", "70%", "70%"]}
                    />
                  </Box>
                  <Box
                    w={["100%", "100%", "50%"]}
                    minH={["300px", "300px", "500px"]}
                    bg="teal"
                    textAlign="start"
                    p={5}
                    color="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box fontWeight="bold" my={2}>
                      {data.title}
                    </Box>
                    <Box my={2}>{data.content}</Box>
                    <Box my={2}>
                      <Button
                        colorScheme="gray"
                        mr={2}
                        my={[2, 0, 0]}
                        onClick={() => {
                          onOpen(), setCurrent(index);
                        }}
                      >
                        Preview
                      </Button>
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        color="white"
                        _hover={{
                          bg: "white",
                          color: "teal",
                        }}
                      >
                        <Link
                          href={data.link}
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          Link
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
