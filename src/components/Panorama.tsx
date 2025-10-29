import { Card, Container, Title, Text } from "@mantine/core";

const Panorama = () => {
  return (
    <Container size="lg" mt="xl">
      <Title order={2} ta="center" mb="md">
        360° Panorama Viewer
      </Title>

      <Card shadow="md" padding="md" radius="md" withBorder>
        <div className="embed-container">
          <iframe
            src="https://momento360.com/e/u/cf9d2fa965cd40e09d8db2ace56cb52e?utm_campaign=embed&utm_source=other&heading=0.33&pitch=-6.54&field-of-view=68&size=medium&display-plan=true"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </Card>

      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag to look around the scene 🔄
      </Text>

      <style>
        {`
          .embed-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            max-width: 100%;
            border-radius: 12px;
          }

          .embed-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }
        `}
      </style>
    </Container>
  );
};

export default Panorama;
