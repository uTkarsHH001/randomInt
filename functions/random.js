
exports.handler = async (event, context) => {
    const randomInteger = Math.floor(Math.random() * 100) + 1;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ randomInteger }),
    };
  };
  
  