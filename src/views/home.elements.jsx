export const items = [1, 2, 3, 4];
export const bannerImgStyle = {
  height: { xs: "50vh", sm: "80vh" },
  objectPosition: "50% 50%",
};
export const promoImgStyle = {
  width: { xs: 200, sm: 300, md: 400, lg: 450, xl: 550 },
  position: "absolute",
  zIndex: 100,
  right: { xs: -60, sm: -110, md: -120, lg: -120, xl: -100 },
  top: { xs: "30%", sm: "50%" },
  transform: "translate(-50%, -50%)",
  filter: "drop-shadow(0px 0px 0px #222)",
};
export const productImgStyle = { height: 304, objectFit: "contain", mt: 2 };
export const iconStyle = { width: "15px", height: "15px" };
const commonStyles = {
  height: "31px",
  borderRadius: "20px",
  border: "1px solid #e1e1e1",
  px: "12px",
  py: 1,
};
export const component1 = {
  ...commonStyles,
  width: "62px",
  bgcolor: "#fff",
};
export const component2 = {
  ...commonStyles,
  width: "53px",
  bgcolor: "#ff8e8e",
};
export const component3 = {
  ...commonStyles,
  width: "90px",
  bgcolor: "#fff",
  border: "1px solid #eda836",
  textTransform: "capitalize",
  "&:hover": {
    bgcolor: "#eda836",
  },
};
