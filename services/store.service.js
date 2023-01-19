const Store = require('../models/Store');

exports.createStoreService = async (data) => {

    const store = await Store.create(data);
    return store;


}

exports.getAllStoreService = async () => {

    const stores = await Store.find({});
    return stores;


}

exports.getStoreByIdService = async (id) => {

    const store = await Store.findById(id);
    return store;

}

exports.updateStoreService = async (id, data) => {

    const result = await Store.updateOne({ _id: id }, data, {
        runValidators: true
    })
    return result;

}

exports.deleteStoreService = async (id) => {

    const result = await Store.deleteOne({ _id: id });
    return result;

}