const Product = require("../models/product-model");
const getAllProducts = async (req, res, next) => {
  try {
    const response = await Product.find();
    console.log(response);
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`error from Product controller:${error}`);
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { price, rating, rating_count, id, about, category, url, name } =
      req.body;
    const productExist = await Product.findOne({ url }); // {url: url}
    if (productExist) {
      res.status(202).json({ msg: "Product already exist" });
    } else {
      await Product.create({
        price,
        rating,
        rating_count,
        id,
        about,
        category,
        url,
        name,
      }); // {url: url,name: name}
      return res.status(200).json({ msg: "Product added succesfully" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      res.status(202).json({ msg: "Product does not exist" });
    } else {
      await Product.deleteOne({ _id: id });
      res.status(200).json({ msg: "Product deleted succesfully" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllProducts, addProduct, deleteProduct };