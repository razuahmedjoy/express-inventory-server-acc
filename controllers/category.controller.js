const { createCategoryService, getAllCategoryService, getCategoryById, updateCategoryService, deleteCategoryService } = require("../services/category.service");

exports.createCategory = async (req, res) => {
    try {
        const category = await createCategoryService(req.body);
        res.status(201).json({
            status: "success",
            data: category
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })



    }
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await getAllCategoryService();
        res.status(200).json({
            status: "success",
            data: categories
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })

    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);

        if (!category) {
            return res.status(400).json({
                status: "fail",
                message: "Could not find category with that id"
            });
        }
        res.status(200).json({
            status: "success",
            data: category
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })

    }
}

exports.updateCategory = async () => {
    const { id } = req.params
    const data = req.body;
    try {
        const result = await updateCategoryService(id, data);
        
        console.log(result);

        if (!result.nModified) {
            return res.status(400).json({
                status: "fail",
                message: "Could not update the category"
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

exports.deleteCategory = async (req, res) => {

    try {
        const result = await deleteCategoryService(req.params.id);
        console.log(result);

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