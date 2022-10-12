/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";

const services = [
  {
    title: "Cloud Hosting",
    price: 0.63,
  },
  {
    title: "Web Hosting",
    price: 0.75,
  },
  {
    title: "VPS Hosting",
    price: 0.68,
  },
  {
    title: "Content Management",
    price: 0.72,
  },
  {
    title: "Domain",
    price: 0.63,
  },
  {
    title: "Email Hosting",
    price: 0.56,
  },
  {
    title: "Landing Page",
    price: 0.69,
  },
  {
    title: "Shopping Cart",
    price: 0.75,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Solusi ideal untuk Anda"
          title="Tenemukan apa yang Anda cari"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      null,
      "repeat(4, 1fr)",
      "repeat(4, 300px)",
    ],
  },
};
