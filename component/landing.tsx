import styles from "@/styles/landing.module.css";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Landing = () => {
  const router = useRouter();
  return (
    <Box className={styles.container}>
      <Box className={styles.box}>
        <Box className={styles.imageBox}>
          <img src="/next.svg" alt="Nontanut Image" className={styles.image} />
          <Box className={styles.overlay}>
            <Box className={styles.text}>
              Nontanut
              <br />
              Boonrodsirasoot
            </Box>
          </Box>
        </Box>
        <Box className={styles.aboutBtn}>About Me</Box>
        <Box className={styles.excel} onClick={() => router.push("/excel")}>
          Excel
        </Box>
        <Box className={styles.bi} onClick={() => router.push("/powerBi")}>
          Power BI
        </Box>
        <Box
          className={styles.looker}
          onClick={() => router.push("lookerStudio")}
        >
          Looker Studio
        </Box>
        <Box className={styles.python} onClick={() => router.push("python")}>
          Python
        </Box>
        <Box className={styles.website} onClick={() => router.push("website")}>
          Website
        </Box>
      </Box>
      {/* About Me */}
      <Box className={styles.aboutMeBox}>
        <Box className={styles.aboutMe}>About Me</Box>
        <Box className={styles.introduce}>
          Hi,
          <br />
          My name is Nontanut, but you can call me Pipe. I am 27 years old.
          Currently, I work at iCare-Insurance as an MIS (Management Information
          Systems) officer. Nice to meet you and I hope after you read all of my
          information, it will make you more interested in me.
        </Box>
      </Box>
    </Box>
  );
};
