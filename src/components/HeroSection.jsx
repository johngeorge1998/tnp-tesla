import { Container, Button, Text, Flex, Drawer } from "@mantine/core";
import ModelS from "../components/model-s.webp";
import { useMediaQuery } from "@mantine/hooks";

const HeroSection = ({ state, setState, scrollToFeatureSection }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onHandleDetailes = (number) => {
    setState((prevState) => ({
      ...prevState,
      index: number,
      opened: false,
    }));
    scrollToFeatureSection();
  };

  return (
    <>
      <Container
        fluid
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: `
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${ModelS})
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          fontFamily: "Gotham, sans-serif",
        }}
      >
        <Flex mt={isMobile ? 490 : 475} direction="column">
          <Text fz={isMobile ? 36 : 56} fw={600} c="#fff">
            Model S
          </Text>

          <Flex gap={10}>
            <Button
              onClick={() => onHandleDetailes(0)}
              variant="filled"
              size="md"
              mt={-1}
              radius="xl"
              width={isMobile ? 150 : 200}
            >
              Discover S
            </Button>
            <Button
              variant="outline"
              size="md"
              mt={-1}
              radius="xl"
              color="white"
              width={isMobile ? 150 : 200}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,

                  opened: true,
                }))
              }
            >
              Explore Models
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Drawer
        opened={state.opened}
        onClose={() =>
          setState((prevState) => ({
            ...prevState,

            opened: false,
          }))
        }
        position="right"
        padding="xs"
        size={300}
        withCloseButton={false}
        style={{ zIndex: 3 }}
      >
        <Flex direction="column" gap={10} style={{ padding: "1rem" }} mt={20}>
          <Button
            fz={20}
            fw={500}
            c="black"
            bg="white"
            onClick={() => onHandleDetailes(0)}
          >
            Model S
          </Button>
          <Button
            fz={20}
            fw={500}
            c="black"
            bg="white"
            onClick={() => onHandleDetailes(2)}
          >
            Model X
          </Button>
          <Button
            fz={20}
            fw={500}
            c="black"
            bg="white"
            onClick={() => onHandleDetailes(1)}
          >
            Cybertruck
          </Button>
        </Flex>
      </Drawer>
    </>
  );
};

export default HeroSection;
