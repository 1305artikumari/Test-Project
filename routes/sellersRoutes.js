const express = require("express");
const sellersController = require("../controllers/sellersController");
const router = express.Router();

router.get("/", sellersController.getSellers);
router.post("/", sellersController.postSellers);
router.post("/:id", sellersController.dltSellers);
router.get("/edit/:id", sellersController.updateSellers);
router.get("/:id", sellersController.getbyidSellers);

router.get("/edit1/:id", sellersController.editQuantity1Sellers);
// router.get("edit/quantity2/:id", sellersController.editQuantity2Sellers);
// router.get("edit/quantity3/:id", sellersController.editQuantity3Sellers);


module.exports = router;
