/* Amplify Params - DO NOT EDIT
	API_AUTHORIZEMVP3_GRAPHQLAPIENDPOINTOUTPUT
	API_AUTHORIZEMVP3_GRAPHQLAPIIDOUTPUT
	API_AUTHORIZEMVP3_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const paymentService = require("./services/payment.service");
const orderService = require("./services/order.service");
const uuid = require("uuid");

exports.handler = async (event) => {
    try {
        const { arguments:input } = event; //Fetch the input paramters;
        const { cardInfo, amount, productIds, userId } = input;

        const apiKey = process.env.API_AUTHORIZEMVP3_GRAPHQLAPIKEYOUTPUT;
        orderService.init(apiKey);

        await paymentService.processPayment(cardInfo, amount);

        const orderId = uuid.v4();
        await Promise.all([
            orderService.createOrder({
                id: orderId,
                status: "SUCCESS",
                price: amount,
                userId,
            }),
            orderService.createBulkOrderProducts(orderId, productIds),
        ]);
        return "Payment processed successfully";
    } catch (error) {
        console.log("Error in processing payment", error);
        return "Error in processing payment";
    }
};

