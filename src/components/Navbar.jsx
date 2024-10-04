import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Text,
  UnstyledButton,
  Burger,
  Drawer,
  Flex,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconHelpCircle, IconGlobe, IconUserCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import LogoBlack from "./LogoBlack";

const Navbar = ({ setState }) => {
  const [opened, setOpened] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCustomizeClick = () => {
    navigate("/customize");
  };

  const onHandleMobileMenu = () => {
    setOpened(false);
    setState((prevState) => ({
      ...prevState,
      opened: true,
    }));
  };

  return (
    <>
      <Container
        fluid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: scrolling ? "white" : "transparent",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          fontFamily: "Gotham, sans-serif",
          transition: "background-color 0.3s ease",
        }}
      >
        <Box mah={70} mt={-10}>
          {scrolling ? <LogoBlack /> : <Logo />}
        </Box>

        {!isMobile && (
          <Flex gap={30} justify="center">
            <Text
              fz={14}
              fw={600}
              c={scrolling ? "black" : "#fff"}
              style={{ cursor: "pointer" }}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  opened: true,
                }))
              }
            >
              Vehicles
            </Text>

            <Text
              fz={14}
              fw={600}
              c={scrolling ? "black" : "#fff"}
              style={{ cursor: "pointer" }}
              onClick={handleCustomizeClick}
            >
              Customize
            </Text>
          </Flex>
        )}

        {isMobile && (
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={scrolling ? "black" : "white"}
          />
        )}

        {!isMobile && (
          <Group spacing="md">
            <UnstyledButton>
              <IconHelpCircle size={20} color={scrolling ? "black" : "white"} />
            </UnstyledButton>
            <UnstyledButton>
              <IconGlobe size={20} color={scrolling ? "black" : "white"} />
            </UnstyledButton>
            <UnstyledButton>
              <IconUserCircle size={20} color={scrolling ? "black" : "white"} />
            </UnstyledButton>
          </Group>
        )}
      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="md"
        overlayOpacity={0.55}
        overlayColor="#000"
      >
        <Flex direction="column" gap={15} style={{ padding: "1rem" }}>
          <Text
            component="a"
            href="/"
            style={{ color: "black", textDecoration: "none" }}
            onClick={onHandleMobileMenu}
          >
            Vehicles
          </Text>
          <Text
            component="a"
            href="#"
            style={{ color: "black", textDecoration: "none" }}
            onClick={handleCustomizeClick}
          >
            Customize
          </Text>
        </Flex>
      </Drawer>
    </>
  );
};

export default Navbar;
