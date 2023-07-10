import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import IconInput from "../inputs/icon-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";

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
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={6}
      >
        <img src={Logo} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          {["Handbags", "Watches", "Skincare", "Jewellery", "Apperels"].map(
            (text, index) => {
              return (
                <Link>
                  <Typography key={index} variant="h2">
                    {text}
                  </Typography>
                </Link>
              );
            }
          )}
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box sx={{ width: "400px" }}>
          <IconInput
            placeHolder="Search for products or brands..."
            icon={<FiSearch size={25} />}
          />
        </Box>
      </Stack>
      <Stack gap={2} direction={"row"} justifyContent={"space-between"}>
        {[heartIcon, userIcon, bagIcon].map((icon) => {
          return <img src={icon} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Header;
