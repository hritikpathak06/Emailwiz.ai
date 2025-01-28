import {
  BirdIcon,
  Columns,
  Columns2,
  Columns4,
  FlipVertical,
  RectangleEllipsis,
  TextSelectionIcon,
  Twitter,
} from "lucide-react";

import {
  Facebook,
  Frame,
  Framer,
  Link2,
  PanelTop,
  Projector,
  SquareSplitVertical,
  Text,
} from "lucide-react";

import Image from "next/image";

export const sidebar_data_layout = [
  {
    label: "Column",
    type: "column",
    numOfCol: 1,
    icon: FlipVertical,
  },
  {
    label: "2 Column",
    type: "column",
    numOfCol: 2,
    icon: Columns2,
  },
  {
    label: "3 Column",
    type: "column",
    numOfCol: 3,
    icon: Columns,
  },
  {
    label: "4 Column",
    type: "column",
    numOfCol: 4,
    icon: Columns4,
  },
];

export const sidebar_data_elements = [
  {
    icon: RectangleEllipsis,
    label: "Button",
    type: "Button",
    content: "Sample Button",
    url: "#",
    style: {
      textAlign: "center",
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px",
      width: "auto",
      fontSize: "16px",
      borderRadius: "10px",
      fontWeight: "normal",
      objectFit: "contain",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  {
    icon: TextSelectionIcon,
    type: "Text",
    label: "Text",
    textarea: "Sample Text",
    style: {
      backgroundColor: "#fff",
      color: "#000000",
      padding: "10px",
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "normal",
      textTransform: "uppercase", //lowercase , capitilized
    },
    outerStyle: {
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: Image,
    type: "Image",
    label: "Image",
    imageUrl: "/logo.png",
    alt: "Image",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "50%",
      width: "70%",
      margin: "0px",
      borderRadius: "0px",
    },
    outerStyle: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
  {
    icon: Frame,
    type: "Logo",
    label: "Logo",
    imageUrl: "/logo.png",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "30%",
      width: "30%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: PanelTop,
    type: "LogoHeader",
    label: "Logo Header",
    imageUrl: "/logo.png",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "40%",
      width: "40%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: SquareSplitVertical,
    type: "Divider",
    label: "Divider",
    content: "",
    style: {
      color: "#000000",
      padding: "10px",
      width: "100%",
    },
  },
  {
    type: "SocialIcons",
    icon: BirdIcon,
    label: "Social Icons",
    socialIcons: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    options: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    style: {
      width: 40,
      height: 40,
    },
    outerStyle: {
      display: "flex",
      gap: 15,
    },
  },
];
