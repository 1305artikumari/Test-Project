const sequelize = require('../models/seller');

const getSellers = async (req, res) => {
  try {
    const sellers = await sequelize.findAll();
    // res.json(userdata);
    res.render('index', { sellers }); // Render the 'index.ejs' view with the data
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching Sellers');
  }
}

const getbyidSellers = async (req, res) => {
  try {
    const id = req.params.id;
    const seller = await sequelize.findOne({
      where: { id: id }
    });

    if (!seller) {
      return res.status(404).json({ message: 'Sellers not found' });
    }

    // Create an object containing the updated data
    const seller1 = {
      id: seller.dataValues.id,
      itemName: seller.dataValues.itemName,
      description: seller.dataValues.description,
      price: seller.dataValues.price,
      quantity: seller.dataValues.quantity
    };

    res.render('edit', { seller1 });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching sellers');
  }
}

const postSellers = async (req, res) => {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;
  console.log(`ItemName: ${itemName}, Description: ${description}, Price: ${price}, Quantity: ${quantity}`);

  try {
    const seller = await sequelize.create({
      itemName: itemName,
      description: description,
      price: price,
      quantity: quantity
    });

    console.log("hi");
    // res.status(201).json(user);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating the Seller');
  }
}


const dltSellers = async (req, res) => {
  try {
    const id = req.params.id;
    await sequelize.destroy({ where: { id: id } });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting the sellers');
  }
}

const updateSellers = async (req, res) => {
  try {
    const id = req.params.id;


    const seller = await sequelize.findOne({
      where: { id: id }
    });

    if (!seller) {
      return res.status(404).json({ message: 'sellers not found' });
    }

    const seller1 = {
      itemName: req.query.itemName,
      description: req.query.description,
      price: req.query.price,
      quantity: req.query.quantity
    };

    await sequelize.update(seller1, {
      where: { id: id }
    });

    res.redirect('/');
  } catch (error) {
    // If there is an error during the update process, handle it and send a 500 (Internal Server Error) response
    console.log(error);
    res.status(500).send('Error updating the seller');
  }
};

const editQuantity1Sellers = async (req, res) => {
  console.log("jijdwsjdiwj");
  try {
    const id = req.params.id;
    const seller = await sequelize.findOne({
      where: { id: id }
    });

    if (!seller) {
      return res.status(404).json({ message: 'Sellers not found' });
    }
    const seller1 = {
      itemName: seller.dataValues.itemName,
      description: seller.dataValues.description,
      price: seller.dataValues.price,
      quantity: seller.dataValues.quantity
    };
    let s = seller1.quantity; // Assuming s is a string initially

    // Convert to an integer, subtract 1, and convert back to a string
    s = String(parseInt(s, 10) - 1);


    seller1.dataValues.quantity = s;

    await sequelize.update(seller1, {
      where: { id: id }
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching sellers');
  }
}


module.exports = { getSellers, getbyidSellers, postSellers, dltSellers, updateSellers, editQuantity1Sellers };