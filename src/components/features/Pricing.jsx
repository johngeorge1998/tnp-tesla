import { Container, Flex, LoadingOverlay, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ParallaxProvider } from "react-scroll-parallax";

const Pricing = ({ pricingData }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!pricingData) {
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
          height: "100%",
          backgroundColor: "#000",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          fontFamily: "Gotham, sans-serif",
          position: "relative",
        }}
      >
        <Flex
          mt={30}
          direction="column"
          justify="center"
          align="center"
          style={{
            width: "100%",
            height: isMobile ? "30%" : "40%",
            textAlign: "center",
          }}
        >
          <Text
            fz={isMobile ? 28 : 56}
            fw={600}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {pricingData.modalName}
          </Text>

          <Text
            fz={isMobile ? 16 : 28}
            fw={600}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            From {pricingData.price}
          </Text>

          <Text
            fz={isMobile ? 12 : 18}
            fw={600}
            mb={10}
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: isMobile ? 5 : 10,
              textDecoration: "underline",
            }}
          >
            After Est. Gas Savings {pricingData.discount}
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            gap={isMobile ? 10 : 50}
            direction={isMobile ? "column" : "row"}
            my={10}
          >
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.drive}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Drive
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.seats}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Seats
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.doors}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Doors
              </Text>
            </Flex>
          </Flex>

          <Flex
            my={15}
            gap={isMobile ? 10 : 50}
            direction={isMobile ? "column" : "row"}
          >
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.bodytype}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Type
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.battery}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Battery
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.voltage}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Voltage
              </Text>
            </Flex>
          </Flex>

          <Flex
            mb={40}
            gap={isMobile ? 10 : 50}
            direction={isMobile ? "column" : "row"}
          >
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.range}
              </Text>
              <Text fz={14} fw={600} c="white">
                Range (EPA est.)
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.initial}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                0-60 mph
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.speed}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Top Speed
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fz={24} fw={600} c="white">
                {pricingData.specifications.power}
              </Text>
              <Text fz={14} fw={600} c="white" mt={3}>
                Peak Power
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </ParallaxProvider>
  );
};

export default Pricing;
