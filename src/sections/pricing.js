/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import PriceTable from "components/cards/price-table";
import SlickArrow from "components/slick-arrow";

const data = [
  {
    id: 1,
    title: "Startup Pack",
    subtitle:
      "Untuk Company Profile yang ingin mempresentasikan bisnis anda ke dunia maya",
    price: "3.000.000",
    isRecommended: false,
    buttonText: "Beli",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Website & Hosting",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Domain & Email`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Halaman Tak Terbatas`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Fitur Custom By Request`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Tanya-jawab`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Integrasi layanan jual-beli produk`,
      },
    ],
  },
  {
    id: 2,
    title: "Premium Pack",
    subtitle:
      "Untuk Situs yang ingin memliki fitur update konten atau produk secara rutin",
    price: "5.000.000",
    isRecommended: true,
    buttonText: "Beli",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Website & Hosting",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Domain & Email`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Halaman Tak Terbatas`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `1 Fitur Custom By Request`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Tanya-jawab & Bantuan`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Integrasi layanan jual-beli produk`,
      },
    ],
  },
  {
    id: 3,
    title: "Ultimate Pack",
    subtitle:
      "Untuk Situs yang serba bisa, dapat berinteraksi lebih dengan pengunjung atau calon customer",
    price: "7.500.000",
    isRecommended: false,
    buttonText: "Beli",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Website & Hosting",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Domain & Email`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Halaman Tak Terbatas`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `2 Fitur Custom By Request`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Tanya-jawab & Bantuan`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Integrasi layanan jual-beli produk`,
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Pas untuk bisnis Anda"
          title="Temui paket harga yang sesuai untuk Anda"
        />
        <Slider sx={styles.grid} {...settings}>
          {data?.map((price, index) => (
            <PriceTable price={price} key={index} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 8],
    },
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, null, "repeat(3, 1fr)"],
    alignItems: [null, null, null, null, "flex-end"],
    ".slick-slide > div": {
      p: ["35px", "40px", null, "35px 23px 23px", 0],
    },
    ".slick-arrow": {
      bottom: -5,
    },
  },
};
