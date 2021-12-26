const axios = require("axios").default;

async function main() {
  const callback = await axios({
    method: "POST",
    url: "https://demo.ezcount.co.il/api/createDoc",
    data: {
      developer_email: "elron100duck@gmail.com",
      api_key:
        "95f609a7cf0145e57392c078967ed2a992f2d2d6272d7b2de408c774ac3f7c39",
      type: 400,
      customer_name: "מר חשבונית עוקבת",
      customer_email: "elron100duck@gmail.com",
      auto_balance: true,
      forceItemsIntoNonItemsDocument: true,
      item: [
        {
          catalog_number: "MKT1",
          details: "1 kg of Internet",
          price: 1000,
          amount: 1,
        },
      ],
      payment: [
        {
          payment_type: 3,
          payment_sum: 1000,
          cc_type: 2,
          cc_type_name: "Visa",
          cc_number: "9876",
          cc_deal_type: 2,
          cc_num_of_payments: 5,
          cc_payment_num: 1,
          auto_calc_payments: true,
          // auto_invoice_status: true,
          // auto_invoice_description: "item for invoice"
        },
      ],
      price_total: 1000,
    },
  });
  console.log(callback.data);
}

main().catch((err) => {
  console.error(err);
  proccess.exit(1);
});
