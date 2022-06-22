// const router = express.Router([options]);
// export default router;

// router.post('/pairs', (req, res) => {
//     console.log(req.body);
//     res.status(200).json(req.body.names);
// })
// router.post('/traditional',(req,res) =>{
//     console.log(req.body);   
//     res.status(200).json(req.body.names);
// })
const express = require("express")
const router = express.Router() //new router



router.post("/pairs", async (req, res) =>{
    res.status(200).json(data);
})
router.post("/traditional", async (req, res) =>{
    res.status(200).json(data);
})

module.exports = router;
