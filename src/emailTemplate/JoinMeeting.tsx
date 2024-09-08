import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface JoinMeetingEmailProps {
  id: string;
  name: string;
}

export default function JoinMeetingEmail({
  id,name
}: JoinMeetingEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Join Link</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Join our meeting </Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {name},</Heading>
        </Row>
        <Row>
          <Text>
            You can join the meeting by clicking the button below.
          </Text>
        </Row>
        <Row>
          <Text>
            Meeting ID: {id}
          </Text>
        </Row>
        <Row>
            <Button
              href={`http://localhost:3000/room/${id}`}
              style={{ color: '#61dafb' }}
            >
              Verify here
            </Button>
          </Row>
      </Section>
    </Html>
  );
}
