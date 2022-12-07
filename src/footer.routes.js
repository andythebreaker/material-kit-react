// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "_",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <GitHubIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <GitHubIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "_",
      items: [
        { name: "_", href: "https://www.creative-tim.com/presentation" },
        { name: "_", href: "https://www.creative-tim.com/templates/free" },
        { name: "_", href: "https://www.creative-tim.com/templates/premium" },
        { name: "_", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "_",
      items: [
        { name: "_", href: "https://iradesign.io/" },
        { name: "_", href: "https://www.creative-tim.com/bits" },
        { name: "_", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "_",
      items: [
        { name: "_", href: "https://www.creative-tim.com/contact-us" },
        { name: "_", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "_", href: "https://services.creative-tim.com/" },
        { name: "_", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "_",
      items: [
        { name: "_", href: "https://www.creative-tim.com/terms" },
        { name: "_", href: "https://www.creative-tim.com/privacy" },
        { name: "_", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} _ by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        andythebreaker
      </MKTypography>
      .
    </MKTypography>
  ),
};
