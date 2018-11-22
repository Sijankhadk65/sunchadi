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
        message: "Customer Phone Should Be 7-12 Characters Long"
      }),
      isRequired({ message: "Customer Phone Is Requred" })
    )()
  }),
  registerWorkerValidation: combineValidators({
    name: composeValidators(
      hasLengthBetween(5, 30)({
        message: "Worker Name Should Be 5-30 Characters Long"
      }),
      isRequired({ message: "Worker Name Is Required" })
    )(),
    address: composeValidators(
      hasLengthBetween(5, 50)({
        message: "Worker Address Should Be 5-50 Characters Long"
      }),
      isRequired({ message: "Worker Address Is Required" })
    )(),
    phone: composeValidators(
      hasLengthBetween(7, 12)({
        message: "Worker Phone Should Be 7-12 Characters Long"
      }),
      isRequired({ message: "Worker Phone Is Requred" })
    )(),
    age: composeValidators(
      hasLengthBetween(1, 2)({
        message: "Worker Age Is Not Suitable For Work"
      }),
      isRequired({ message: "Worker Age Is Required" })
    )()
  })
};
