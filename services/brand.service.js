const Brand = require('../models/Brand');

exports.createBrandService = async (data)=>{
    try{
        const brand = await Brand.create(data);
        return brand;
    }catch(error){
        throw new Error(error.message);
    }
}

exports.getAllBrandService = async ()=>{
    try{
        const brands = await Brand.find({}).select("-products -suppliers");
        
        return brands;
    }catch(error){
        throw new Error(error.message);
    }
}

exports.getBrandByIdService = async (id)=>{
    try{
        const brand = await Brand.findById(id);
       
        return brand;

    }catch(error){
        throw new Error(error.message);
    }
}

exports.updateBrandService = async (id,data)=>{
    try{
        const result = await Brand.updateOne({_id:id},data,{
            runValidators:true
        });
        return result
    }catch(error){
        throw new Error(error.message);
    }
}
