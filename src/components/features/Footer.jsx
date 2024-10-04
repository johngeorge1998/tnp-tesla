import { Container, Text, Flex } from "@mantine/core";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          padding: 30,
          backgroundColor: "black",

          zIndex: 2,
          transition: "background-color 0.3s ease",
        }}
      >
        <Flex align="center" justify="space-between">
          <Text fz={14} fw={500} c="white">
            Tesla
          </Text>
          <Text fz={14} fw={500} c="white">
            TNP India © 2024
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
