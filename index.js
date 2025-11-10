exports.handler = async (event) => {
  console.log("Lambda executada!");
  return {
    statusCode: 200,
    body: "OK"
  };
};
