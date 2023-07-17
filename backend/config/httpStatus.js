module.exports = {
  httpStatus: {
    EXIST: {
      status: 200,
      send: { msg: 'Already exist' },
    },

    INVALID_DATA: {
      status: 205,
      send: { msg: 'Invalida data' },
    },
    CANNOT_SAVE_USER: {
      status: 500,
      send: { msg: 'Cannot save user' },
    },
    
      USER_ACCESS_GRANTED:{
        status: 200,
        send: { msg: 'User access granted' },
      },
    
  },
};
