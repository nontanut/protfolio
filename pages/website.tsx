import { Footer } from "@/component/footer";
import Nav from "@/component/nav";
import { Slider } from "@/component/slide/slider";
import styles from "@/styles/website.module.css";
import { Box } from "@chakra-ui/react";
import { Web } from "@/component/website/website";

const Website = () => {
  return (
    <>
      <Box className={styles.nav}>
        <Nav />
      </Box>

      <Web />

      <Box className={styles.footer}>
        <Footer />
      </Box>
    </>
  );
};

export default Website;
