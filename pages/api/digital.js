import axios from "axios";

module.exports = async (req, res) => {
  const {
    entry_id,
    gender,
    age,
    email,
    zip_code,
    privacy_policy,
    manufacturer,
    sema_builds,
    oil_change,
    personal_car,
  } = req.body;

  await axios
    .post(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Digital`,
      {
        fields: {
          entry_id,
          gender,
          age: parseInt(age),
          email,
          zip_code: parseInt(zip_code),
          privacy_policy,
          manufacturer,
          sema_builds,
          oil_change,
          personal_car,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  res.status(200).send("Logged");
};
