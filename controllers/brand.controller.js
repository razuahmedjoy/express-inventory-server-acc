const { createBrandService, getAllBrandService, getBrandByIdService, updateBrandService } = require("../services/brand.service")



exports.createBrand = async (req, res) => {
    try {
        const result = await createBrandService(req.body);
        res.status(201).json({
            status: "success",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}
exports.getAllBrands = async (req, res) => {
    try {
        const brands = await getAllBrandService();

        res.status(200).json({
            status: "success",
            data: brands

        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.getBrandById = async (req, res) => {
    const { id } = req.params
    try {
        const brand = await getBrandByIdService(id);
        
        if (!brand) {
            return res.status(400).json({
                status: "fail",
                message: "Could not find brand with that id"
            });
        }
        res.status(200).json({
            status: "success",
            data: brand

        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}


exports.updateBrand = async (req, res) => {
    const { id } = req.params
    const data = req.body;
    try {
        const result = await updateBrandService(id,data);

        if (!result.nModified) {
            return res.status(400).json({
                status: "fail",
                message: "Could not update the brand"
            });
        }
        res.status(200).json({
            status: "success",
            data: result

        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}