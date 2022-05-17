const Category = require('../../models/category');
//const Product = require('../../models/product');

const updateCategory = async (req, res, next) => {
    const categoryID = req.params.categoryID;
    const { name, description } = req.body
    let category;
    try {
        category = await Category.findById(categoryID);

    } catch (err) {
        return res.status(500).json({ message: "Could not update the category. ", err: err })
    }

    category.name = name
    category.description = description;
    category.last_updated = Date.now();

    try {
        await category.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the category. ", err: err })
    }
    return res.status(200).json({ message: "Category updated.", category: category })
}

module.exports = updateCategory