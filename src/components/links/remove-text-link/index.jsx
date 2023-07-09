import { Link } from "@mui/material";

const removeTextLink = (text = "remove", remove) => {
  return (
    <Link
      //   onClick={() => {
      //     remove();
      //   }}
      color="error"
    >
      {text}
    </Link>
  );
};

export default removeTextLink;
