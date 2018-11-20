import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthBetween
} from "revalidate";

export default {
  registerCustomerValidation: combineValidators({
    name: composeValidators(
      hasLengthBetween(5, 30)({
        message: "Customer Name Should Be 5-30 Characters Long"
      }),
      isRequired({ message: "Customer Name Is Required" })
    )(),
    address: composeValidators(
      hasLengthBetween(5, 50)({
        message: "Customer Address Should Be 5-50 Characters Long"
      }),
      isRequired({ message: "Customer Address Is Required" })
    )(),
    phone: composeValidators(
      hasLengthBetween(7, 12)({
        message: "Customer Name Should Be 7-12 Characters Long"
      }),
      isRequired({ message: "Customer Phone Is Requred" })
    )()
  })
};
