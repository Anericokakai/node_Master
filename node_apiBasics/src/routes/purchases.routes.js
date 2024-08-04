export const purchaseRoutes = ({ purchaseService }) => ({
  "/purchase:get": (req, res) => {
    res.write("GET purchases ");
  },
  "/purchases:post": (req, res) => {
    res.write("Post A purchase over here");
  },
});
