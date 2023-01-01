const express = require("express");
// const { addClients } = require("../controllers/addClients");
const { getAllAgency,createAgency,createClient,clientDetails, createAgencyAndClient, updateClient, getAll, highTotalBill,  } = require("../controllers/AgencyController");

const router = express.Router();

router.route("/agency/new").post(createAgencyAndClient);
router.route("/agency/:id").put(updateClient)
router.route("/agency/all").get(getAll);
router.route("/agency/high").get(highTotalBill)


module.exports = router;