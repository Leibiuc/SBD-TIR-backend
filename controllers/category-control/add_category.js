const Category = require('../../models/category');

const createCategory = async (req, res, next) => {

    const {

        name,
        description

    } = req.body

    let createdCategory;

    try {

        createdCategory = new Category({

            name,
            description,
            last_updated: Date.now()
        })

        await createdCategory.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding category has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Category added!',
        category: createdCategory
    });
};

exports.createCategory = createCategory;