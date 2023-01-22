import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { quicklinks } from "constants/quicklinks";

function QuickLinks() {
  return (
    <Container>
      <Row as="div">
        {quicklinks.map((links) => {
          return (
            <Col sm>
              <Stack gap={0}>
                <h6>{links.title}</h6>
                {links.meta.map((met) => {
                  return (
                    <a
                      href={met.to}
                      class="link-secondary"
                      style={{ textDecoration: "none", fontSize: 15 }}
                    >
                      {met.name}
                    </a>
                  );
                })}
              </Stack>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default QuickLinks;
