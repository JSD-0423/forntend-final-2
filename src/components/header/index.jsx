import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import FilledIconInput from "../inputs/filled-icon-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";
import PrimaryTextLink from "../links/primary-text-link";

const Header = () => {
  return (
    <Stack
      sx={{
        paddingTop: "30px",
        paddingBottom: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
      >
        {["Handbags", "Watches", "Skincare", "Jewellery", "Apperels"].map(
          (text, index) => {
            return <PrimaryTextLink key={index} text={text} />;
          }
        )}
      </Stack>
    </Stack>
  );
};

export default Header;
