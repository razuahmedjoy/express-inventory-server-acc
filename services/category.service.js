const Category = require('../models/Category');

exports.createCategoryService = async (data)=>{
    const category = await Category.create(data);
    return category;

}

exports.getAllCategoryService = async ()=>{
    const categories = await Category.find({});
    return categories;
}

exports.getCategoryById = async (id)=>{
    const category = await Category.findById({_id:id});
    return category;
}

exports.updateCategoryService = async (id,data)=>{
    const result = await Category.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;


}

exports.deleteCategoryService = async (id)=>{
    const result = await Category.deleteOne({_id:id});
    return result;
}