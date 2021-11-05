export const increaseOrder = (content) => {
    return {
      type: "INCREASE_ORDER",
      payload: content,
    };
};

export const decreaseOrder = (content) => {
    return {
      type: "DECREASE_ORDER",
      payload: content,
    };
  };

export const totalOrder = (content) => {
    return {
        type: "TOTAL_ORDER",
        payload: content,
    };
};