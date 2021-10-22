import Airtable from "airtable";

module.exports = async (req, res) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE
  );

  const {
    entry_id,
    gender,
    age,
    email,
    zip_code,
    privacy_policy,
    manufacturer,
    luftgekühlt,
    race_service,
    oil_change,
    personal_car,
  } = req.body;

  base("Physical").create(
    [
      {
        fields: {
          entry_id,
          gender,
          age: parseInt(age),
          email,
          zip_code: parseInt(zip_code),
          privacy_policy,
          manufacturer,
          luftgekühlt,
          race_service,
          oil_change,
          personal_car,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  res.status(200).send("Logged");
};
