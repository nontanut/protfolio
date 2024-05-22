import { Footer } from "@/component/footer";
import Nav from "@/component/nav";
import styles from "@/styles/powerBi.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Text,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Raw Data",
    content:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    step: "Step 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Cleansing",
    content:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    step: "Step 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Visaul",
    content:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    step: "Step 3",
  },
];

const PowerBi = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className={styles.nav}>
        <Nav />
      </Box>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
        mx={2}
        mb={20}
        pt={100}
      >
        {data.map((card) => {
          return (
            <GridItem justifyContent="center" display="flex">
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{card.title}</Heading>
                    <Text>{card.content}</Text>
                    <Text color="green.600" fontSize="2xl">
                      {card.step}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="green"
                      onClick={onOpen}
                    >
                      Preview
                    </Button>
                    {/* Preview Modal */}
                    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                      <ModalOverlay />
                      <ModalContent
                        justifyContent="center"
                        display="flex"
                        textAlign="center"
                        alignItems="center"
                        alignContent="center"
                      >
                        <ModalHeader>Example Raw Data</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Image src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="red" mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button variant="ghost">Secondary Action</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Button variant="ghost" colorScheme="green">
                      Download
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>

      <Box className={styles.footer}>
        <Footer />
      </Box>
    </>
  );
};

export default PowerBi;
