const express = require("express");
const storeController = require("../controllers/store.controller");
const router = express.Router();

router.route("/")
.get(storeController.getAllStores)
.post(storeController.createStore);

router.route("/:id")
.get(storeController.getStoreById)
.patch(storeController.updateStore)
.delete(storeController.deleteStore);


module.exports.storeRoutes = router