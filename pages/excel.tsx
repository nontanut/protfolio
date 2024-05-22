import { Footer } from "@/component/footer";
import Nav from "@/component/nav";
import styles from "@/styles/excel.module.css";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Link,
  Box,
} from "@chakra-ui/react";

const data = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/01/05/11/57/database-1954920_1280.jpg",
    title: "Data Source",
    content:
      "In this step, get data from various places is used in data processing. The data files will be different types. You can press preview. to view a sample file or press the download button to inspect",
    step: "Step 1",
    link: "https://drive.google.com/drive/u/0/folders/1LWiNXMv23AfLKr0BTdbVQshLQZVkya7l",
  },
  {
    // image:
    //   "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
    image:
      "https://cdn.pixabay.com/photo/2021/07/12/15/22/light-bulbs-6406640_960_720.jpg",
    title: "ETL or Cleansing",
    content:
      "This step is taking the raw data and using Power Query for ETL or Cleansing Data to keep the data in the most ready-to-use format. before being used to create visualize in the next step",
    step: "Step 2",
    link: "https://drive.google.com/drive/u/0/folders/1rIW75qO0o-UDkuRWorTCdI873fI6GEqZ",
  },
  {
    image: "/excel/Sale_Report.png",
    title: "Visaulize",
    content:
      "This is Power Pivot about Sales Report, Sales Performance and Export Transport Logistics, You can preview for example file and download the file to check more performance but you should change path of file reference to your files location.",
    step: "Step 3",
    link: "https://icins-my.sharepoint.com/:x:/g/personal/nontanut_b_icare-insurance_com1/EVDi4oKckQtBti8El69l5WMB1qbsc2nsJm466jXN_Xaqjw?e=Aygp8A",
  },
];

const Excel = () => {
  return (
    <>
      <div className={styles.nav}>
        <Nav />
      </div>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
        mx={2}
        mb={20}
        pt={100}
      >
        {data.map((items, index) => {
          return (
            <GridItem justifyContent="center" display="flex" key={index}>
              <Card maxW="sm">
                <CardBody>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={items.image}
                      alt="Example Image For Excel file"
                      h="200px"
                    />
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{items.title}</Heading>
                    <Text>{items.content}</Text>
                    <Text color="green.600" fontSize="2xl">
                      {items.step}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="green">
                      <Link
                        href={items.link}
                        isExternal
                        _hover={{ textDecoration: "none" }}
                      >
                        Preview
                      </Link>
                    </Button>

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

      {/* footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Excel;
