import { Button, Text, ActionIcon, Flex, Popover, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import SRed from "../cusred.webp";
import STeal from "../custeal.webp";
import SViolet from "../cusviolet.webp";

import { useState, useEffect } from "react";

const Customize = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(SRed);
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    const preloadImages = [SRed, STeal, SViolet];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setPreloadedImages((prevImages) => [...prevImages, src]);
      };
    });
  }, []);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleColorSelection = (color) => {
    if (color === "red") {
      setBackgroundImage(SRed);
    } else if (color === "teal") {
      setBackgroundImage(STeal);
    } else if (color === "violet") {
      setBackgroundImage(SViolet);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        zIndex: 2,
        color: "white",
        backgroundColor: "#000",
      }}
    >
      {preloadedImages.includes(backgroundImage) && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            transition: "background-image 0.5s ease-in-out",
          }}
        />
      )}

      <Flex
        gap={5}
        align="center"
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          zIndex: 3,
          cursor: "pointer",
        }}
      >
        <ActionIcon variant="transparent" size={40} onClick={handleBackClick}>
          <IconArrowLeft size={30} color="white" />
        </ActionIcon>
        <Text fz={20} fw={500} c="white">
          Home
        </Text>
      </Flex>

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="top"
        withArrow
        shadow="md"
        zIndex={4}
      >
        <Popover.Target>
          <Button
            variant="filled"
            size={isMobile ? "md" : "md"}
            mt={isMobile ? 0 : 30}
            w={230}
            style={{
              position: "absolute",
              bottom: "11%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              textAlign: "center",
            }}
            onMouseEnter={() => setOpened((prev) => !prev)}
          >
            <Text c="white" fz={14} fw={600}>
              Customize
            </Text>
          </Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Box>
            <Flex gap={10}>
              <Box
                w={40}
                h={40}
                bg="#af0015"
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={() => handleColorSelection("red")}
              />
              <Box
                w={40}
                h={40}
                bg="#1c605d"
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={() => handleColorSelection("teal")}
              />
              <Box
                w={40}
                h={40}
                bg="#54024f"
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={() => handleColorSelection("violet")}
              />
            </Flex>
          </Box>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default Customize;
