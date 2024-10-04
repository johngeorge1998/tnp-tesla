import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  LoadingOverlay,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Specs = ({ specData }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!specData) {
    return (
      <LoadingOverlay
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "black", type: "bars" }}
      />
    );
  }

  return (
    <ParallaxProvider>
      <Container
        fluid
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          fontFamily: "Gotham, sans-serif",
          position: "relative",
        }}
      >
        <Grid
          gutter={isMobile ? "sm" : "xl"}
          style={{ padding: isMobile ? "10px 20px" : "70px" }}
        >
          <Grid.Col span={12}>
            <Flex
              direction={isMobile ? "column" : "row"}
              justify="center"
              align="center"
              gap={isMobile ? 20 : 50}
            >
              <Box maxWidth={700} style={{ flex: 1 }}>
                <Parallax speed={10}>
                  <Image
                    src={specData.img1}
                    style={{ width: "85%", height: "auto" }}
                  />
                </Parallax>
              </Box>

              <Box style={{ flex: 1 }}>
                <Flex
                  direction="column"
                  justify="center"
                  align={isMobile ? "center" : "flex-start"}
                  mt={isMobile ? 20 : 100}
                >
                  <Text
                    fz={isMobile ? 18 : 24}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                  >
                    Stay Connected
                  </Text>
                  <Text
                    fz={isMobile ? 12 : 14}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                    lineClamp={3}
                  >
                    {specData.desc1}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>

        <Grid
          gutter={isMobile ? "sm" : "xl"}
          style={{ padding: isMobile ? "10px 20px" : "70px" }}
        >
          <Grid.Col span={12}>
            <Flex
              direction={isMobile ? "column-reverse" : "row"}
              justify="center"
              align="center"
              gap={isMobile ? 20 : 50}
            >
              <Box style={{ flex: 1 }}>
                <Flex
                  direction="column"
                  justify="center"
                  align={isMobile ? "center" : "flex-start"}
                  mt={isMobile ? 20 : 100}
                >
                  <Text
                    fz={isMobile ? 18 : 24}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                  >
                    Immersive Sound
                  </Text>
                  <Text
                    fz={isMobile ? 12 : 14}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                    lineClamp={3}
                  >
                    {specData.desc2}
                  </Text>
                </Flex>
              </Box>

              <Box maxWidth={700} style={{ flex: 1 }}>
                <Parallax speed={15}>
                  <Image
                    src={specData.img2}
                    style={{ width: "85%", height: "auto" }}
                  />
                </Parallax>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>

        <Grid
          gutter={isMobile ? "sm" : "xl"}
          style={{ padding: isMobile ? "10px 20px" : "70px" }}
        >
          <Grid.Col span={12}>
            <Flex
              direction={isMobile ? "column" : "row"}
              justify="center"
              align="center"
              gap={isMobile ? 20 : 50}
            >
              <Box maxWidth={700} style={{ flex: 1 }}>
                <Parallax speed={10}>
                  <Image
                    src={specData.img3}
                    style={{ width: "85%", height: "auto" }}
                  />
                </Parallax>
              </Box>

              <Box style={{ flex: 1 }}>
                <Flex
                  direction="column"
                  justify="center"
                  align={isMobile ? "center" : "flex-start"}
                  mt={isMobile ? 20 : 100}
                >
                  <Text
                    fz={isMobile ? 18 : 24}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                  >
                    Room for Everything
                  </Text>
                  <Text
                    fz={isMobile ? 12 : 14}
                    fw={600}
                    ta={isMobile ? "center" : "left"}
                    lineClamp={3}
                  >
                    {specData.desc3}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </ParallaxProvider>
  );
};

export default Specs;
