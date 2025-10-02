const getCurrentData = (req, res) => {
      const data = require('../database/data.json');
      res.json(data);
}

const getPreviousData = (req, res) => {
      const previousData = require('../database/previous_data.json');
      res.json(previousData);
}

module.exports = {
      getCurrentData,
      getPreviousData
};