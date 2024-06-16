    import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Website using EJS" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

export default router;
