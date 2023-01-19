const { createBrandService, getAllBrandService } = require("../services/brand.service")



exports.createBrand = async (req, res) => {
    try{
        const result = await createBrandService(req.body);
        res.status(201).json({
            status:"success",
            data:result
        })
        
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}
exports.getAllBrands = async (req, res) => {
    try{
        const brands = await getAllBrandService();
        
        res.status(200).json({
            status:"success",
            data:brands

        })

    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}