const intitiasiStateGlobal = {
  data: {
    product: [],
    loading: true,
    error: null,
  },
  dataDetail: {
    productDetail: [],
    loading: true,
    error: null,
  },
};

const getData = (state = intitiasiStateGlobal, action) => {
  switch (action.type) {
    case "GET_DATA_PRODUCT_SUCCESS":
      return {
        ...state,
        data: { product: action.value, loading: action.loading },
      };
    case "GET_DATA_PRODUCT_FAILED":
      return {
        ...state,
        data: { product: action.value, loading: action.loading, error: action.error },
      };
      case "GET_DATA_DETAIL_PRODUCT_SUCCESS":
        return {
          ...state,
          dataDetail: { productDetail: action.value, loading: action.loading },
        };
      case "GET_DATA_DETAIL_PRODUCT_FAILED":
        return {
          ...state,
          dataDetail: { productDetail: action.value, loading: action.loading, error: action.error },
        };
    default:
      return state;
  }
};
export default getData;
