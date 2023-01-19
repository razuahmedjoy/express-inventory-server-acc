const { createStoreService, getAllStoreService, getStoreByIdService, updateStoreService, deleteStoreService } = require("../services/store.service");

exports.createStore = async (req, res) => {
    try {
        const result = await createStoreService(req.body);
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

exports.getAllStores = async (req, res) => {
    try {
        const stores = await getAllStoreService();

        res.status(200).json({
            status: "success",
            data: stores

        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.getStoreById = async (req, res) => {
    try {
        const store = await getStoreByIdService(req.params.id)
        if (!store) {
            return res.status(400).json({
                status: "fail",
                message: "Could not find store with that id"
            });
        }

        res.status(200).json({
            status: "success",
            data: store
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.updateStore = async (req, res) => {
    try {
        const result = await updateStoreService(id, req.body);
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

exports.deleteStore = async (req, res) => {
    try {

        const result = await deleteStoreService(req.params.id);
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