import { Container, LoadingOverlay, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const VideoInterior = ({ videoData }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!videoData || !videoData.bannerVideo) {
    return (
      <LoadingOverlay
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "black", type: "bars" }}
      />
    );
  }

  return (
    <Container
      fluid
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        color: "white",
        fontFamily: "Gotham, sans-serif",
        textAlign: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={videoData.bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 10%)",
          zIndex: 1,
        }}
      />

      <Text
        fz={isMobile ? 18 : 28}
        fw={600}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "20px 0",
        }}
      >
        {videoData.bannerText}
      </Text>
    </Container>
  );
};

export default VideoInterior;
