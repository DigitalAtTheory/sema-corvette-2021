import axios from "axios";
import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

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

  const subscriberHash = md5(email.toLowerCase());
  let currentUser;

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

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
    .then((data) => console.log(data.data.id))
    .catch((err) => console.error(err));

  try {
    const getContact = await mailchimp.lists.getListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash
    );
    console.log(getContact.id);
    currentUser = true;
  } catch {
    console.log("There is no user");
    currentUser = false;
  }

  if (!currentUser) {
    console.log("Adding user");
    const addContact = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
      }
    );
    console.log(addContact.id);
  }
  console.log("Adding to customer journey");
  const joinCustomerJourney = await mailchimp.customerJourneys.trigger(
    process.env.MAILCHIMP_DIGITAL_JOURNEY,
    process.env.MAILCHIMP_DIGITAL_STEP,
    {
      email_address: email,
    }
  );

  console.log(joinCustomerJourney);

  console.log(req.body);

  res.status(200).send("Logged");
};
