const ApiContracts = require("authorizenet").APIContracts;
const ApiControllers = require("authorizenet").APIControllers;

module.exports.processPayment = (cardInfo, amount) => {
  return new Promise((resolve, reject) => {

    const loginId = process.env.LOGIN_ID;
    const transactionKey = process.env.TRANSACTION_KEY;

    const { cc, cvv, expire } = cardInfo;

    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(loginId);
    merchantAuthenticationType.setTransactionKey(transactionKey);

    const creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(cc);
    creditCard.setExpirationDate(expire);
    creditCard.setCardCode(cvv);

    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    const transactionSetting = new ApiContracts.SettingType();
    transactionSetting.setSettingName("recurringBilling");
    transactionSetting.setSettingValue("false");

    const transactionSettingList = [];
    transactionSettingList.push(transactionSetting);

    const transactionSettings = new ApiContracts.ArrayOfSetting();
    transactionSettings.setSetting(transactionSettingList);

    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(
      ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
    );
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(amount);
    transactionRequestType.setTransactionSettings(transactionSettings);

    const createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);

    //pretty print request
    //   console.log(JSON.stringify(createRequest.getJSON(), null, 2));

    //Defaults to sandbox
    //   ctrl.setEnvironment(SDKConstants.endpoint.production);

    const ctrl = new ApiControllers.CreateTransactionController(
      createRequest.getJSON()
    );
    ctrl.execute(() => {
      const apiResponse = ctrl.getResponse();

      const response = new ApiContracts.CreateTransactionResponse(apiResponse);

      //pretty print response
      console.log(JSON.stringify(response, null, 2));

      if (response != null) {
        if (
          response.getMessages().getResultCode() ==
          ApiContracts.MessageTypeEnum.OK
        ) {
          if (response.getTransactionResponse().getMessages() != null) {
            console.log(
              "Successfully created transaction with Transaction ID: " +
                response.getTransactionResponse().getTransId()
            );
            console.log(
              "Response Code: " +
                response.getTransactionResponse().getResponseCode()
            );
            console.log(
              "Message Code: " +
                response
                  .getTransactionResponse()
                  .getMessages()
                  .getMessage()[0]
                  .getCode()
            );
            console.log(
              "Description: " +
                response
                  .getTransactionResponse()
                  .getMessages()
                  .getMessage()[0]
                  .getDescription()
            );
            resolve(response);
          } else {
            console.log("Failed Transaction.");
            if (response.getTransactionResponse().getErrors() != null) {
              console.log(
                "Error Code: " +
                  response
                    .getTransactionResponse()
                    .getErrors()
                    .getError()[0]
                    .getErrorCode()
              );
              console.log(
                "Error message: " +
                  response
                    .getTransactionResponse()
                    .getErrors()
                    .getError()[0]
                    .getErrorText()
              );
              reject(
                "Error message: " +
                  response
                    .getTransactionResponse()
                    .getErrors()
                    .getError()[0]
                    .getErrorText()
              );
            }
          }
        } else {
          console.log("Failed Transaction.");
          if (
            response.getTransactionResponse() != null &&
            response.getTransactionResponse().getErrors() != null
          ) {
            console.log(
              "Error Code: " +
                response
                  .getTransactionResponse()
                  .getErrors()
                  .getError()[0]
                  .getErrorCode()
            );
            console.log(
              "Error message: " +
                response
                  .getTransactionResponse()
                  .getErrors()
                  .getError()[0]
                  .getErrorText()
            );
            reject(
              response
                .getTransactionResponse()
                .getErrors()
                .getError()[0]
                .getErrorText()
            );
          } else {
            console.log(
              "Error Code: " + response.getMessages().getMessage()[0].getCode()
            );
            console.log(
              "Error message: " +
                response.getMessages().getMessage()[0].getText()
            );
            reject(response.getMessages().getMessage()[0].getText());
          }
        }
      } else {
        console.log("Null Response.");
        reject("Null response");
      }
    });
  });
};
