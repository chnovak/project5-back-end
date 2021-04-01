// create the initial categories in the database

const {Category} = require('../lib/models');

const seedTheDatabase = async () => {
    let categories = await Category.findAll({});
    if (categories.length == 0) {
        await Category.create({name: 'Category 1'});
        await Category.create({name: 'Category 2'});
        await Category.create({name: 'Category 3'});
        await Category.create({name: 'Category 4'});
        await Category.create({name: 'Category 5'});
    }
};

seedTheDatabase()