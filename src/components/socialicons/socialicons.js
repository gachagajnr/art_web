import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Pinterest,
} from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";
import { sociallinks } from "constants/sociallinks";

function SocialIcons() {
  let size = "30";
  return (
    <Stack direction="horizontal" gap={2}>
      <a href={sociallinks.FACEBOOK} class="link-dark">
        <Facebook size={size} />
      </a>
      <a href="https" class="link-dark">
        <Instagram size={size} />
      </a>

      <a href="https" class="link-dark">
        <Twitter size={size} />
      </a>

      <a href="https" class="link-dark">
        <Linkedin size={size} />
      </a>

      <a href="https" class="link-dark">
        <Pinterest size={size} />
      </a>
    </Stack>
  );
}
export default SocialIcons;
