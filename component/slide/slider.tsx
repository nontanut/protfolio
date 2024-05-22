import { Box, Image } from "@chakra-ui/react";
import { Data } from "../slide/sliderData";
import styles from "@/styles/slider.module.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Slider = (props: { index: number }) => {
  const [current, setCurrent] = useState(0);

  const currentItem = Data.find((value, index) => index === props.index);

  if (!currentItem) return;

  const length = currentItem.length;

  const prevSlide = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent(current - 1);
  };

  const nextSlide = () => {
    current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.slider}>
        <ArrowBackIcon className={styles.leftArrow} onClick={prevSlide} />
        <ArrowForwardIcon onClick={nextSlide} className={styles.rightArrow} />
        {currentItem.map((data, index) => {
          return (
            <Box
              className={
                index === current ? `${styles.slideActive}` : `${styles.slide}`
              }
              key={index}
            >
              {index === current && (
                <Box>
                  <Image
                    src={data.image}
                    alt={data.title}
                    className={styles.image}
                  />
                  <Box className={styles.text}>{data.title}</Box>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
