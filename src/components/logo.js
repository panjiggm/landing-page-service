/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import { Link } from "components/link";
// import LogoSvg from "components/icons/logo";

import logoCyberCave from "../assets/images/logo-cybercave.png";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg white={!isSticky} /> */}
      <Box sx={styles.content}>
        <img src={logoCyberCave} height={35} width={35} />
        <Text
          style={{
            color: isSticky ? "#333" : "#ffff",
            marginLeft: 8,
            fontSize: 22,
          }}
        >
          cybercave
        </Text>
      </Box>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
};
