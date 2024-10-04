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
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Performance = ({ performanceData }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!performanceData) {
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
          backgroundColor: "#F4F4F4",
          textAlign: "center",
          color: "white",
          fontFamily: "Gotham, sans-serif",
          position: "relative",
        }}
      >
        <Flex
          direction="column"
          p={isMobile ? 30 : 60}
          style={{
            position: "absolute",
            top: isMobile ? "0%" : "0%",
            width: "100%",
          }}
        >
          <Text fz={isMobile ? 24 : 28} fw={600} c="black" ta="left">
            Electric Powertrain
          </Text>
          <Text
            fz={isMobile ? 12 : 14}
            fw={400}
            c="black"
            mt={3}
            ta="left"
            lineClamp={3}
          >
            {performanceData.desc}
          </Text>
        </Flex>

        {!isMobile && (
          <Box
            maw={isMobile ? 600 : 1200}
            p={isMobile ? 20 : 50}
            mt={isMobile ? 50 : 150}
          >
            <Parallax speed={10}>
              <Image
                src={performanceData.chaseImage}
                style={{
                  width: "100%",
                  maxWidth: isMobile ? "80%" : "100%",
                  height: "auto",
                }}
              />
            </Parallax>
          </Box>
        )}

        <Grid
          mt={isMobile ? 80 : 10}
          mb={50}
          gutter={isMobile ? "sm" : 60}
          style={{ width: "100%" }}
          px={isMobile ? 30 : 200}
        >
          <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
            <Flex direction="column" mb={isMobile ? 30 : 0}>
              <Text fz={isMobile ? 18 : 20} fw={600} c="black" ta="left">
                {performanceData.models.modelNormal.name}
              </Text>
              <Text fz={isMobile ? 12 : 14} fw={400} c="black" mt={3} ta="left">
                {performanceData.models.modelNormal.desc}
              </Text>
              <Flex
                gap={isMobile ? 20 : 35}
                mt={20}
                direction={isMobile ? "column" : "row"}
              >
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelNormal.speed}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    0-60 mph
                  </Text>
                </Flex>
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelNormal.range}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    Range (EPA est.)
                  </Text>
                </Flex>
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelNormal.power}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    Peak Power
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
            <Flex direction="column">
              <Text fz={isMobile ? 18 : 20} fw={600} c="black" ta="left">
                {performanceData.models.modelPaid.name}
              </Text>
              <Text fz={isMobile ? 12 : 14} fw={400} c="black" mt={3} ta="left">
                {performanceData.models.modelPaid.desc}
              </Text>
              <Flex
                gap={isMobile ? 20 : 35}
                mt={20}
                direction={isMobile ? "column" : "row"}
              >
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelPaid.speed}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    0-60 mph
                  </Text>
                </Flex>
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelPaid.range}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    Range (EPA est.)
                  </Text>
                </Flex>
                <Flex direction="column" align="center">
                  <Text fz={isMobile ? 20 : 24} fw={600} c="black">
                    {performanceData.models.modelPaid.power}
                  </Text>
                  <Text fz={isMobile ? 12 : 14} fw={600} c="black">
                    Peak Power
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </ParallaxProvider>
  );
};

export default Performance;
