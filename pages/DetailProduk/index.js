import { useEffect,Component } from "react";
import { Text, View, Image ,ScrollView  ,StyleSheet,Dimensions} from "react-native";
import { connect } from "react-redux";
import { getDataActionDetail } from "../../redux/actions";


class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image ,i) =>{
              return (
                <View key={i}>
                <Image style={styles.image} source={image} />
                </View>
              )
            })}
          </ScrollView>
        </View>
      );
    }
    return null;    
  }
}


const { width } = Dimensions.get('window');
const height = width * 0.4

const ProductDetail = (props) => {
  const { id } = props.route.params;

  useEffect(() => {
    props.getDataActionDetail(id);
  }, [id, props.getDataActionDetail]);

  return (
    <>
      {props.data.loading ? (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Tunggu . . </Text>
        </View>
      ) : props.data.error ? (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={{ color: "red", fontSize: 30 }}>{props.data.error}</Text>
        </View>
      ) : (
        <>
        <View
          // key={i}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            display: "flex",
            width: "95%",
            height: 400,
            margin: 10,
            padding: 5,
          }}
        >
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: props.data.productDetail?.data?.phone_images[0],
            }}
          />

          <View style={{ margin: 3 }}>
            <Text style={{ fontSize: 18 ,fontWeight: "bold" }}>
              {props.data.productDetail?.data?.phone_name}{" "}
              {`(${props.data.productDetail?.data?.brand})`}
            </Text>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text
              style={{color: "black",fontSize: 18 }}
            >
              Dimension : {`${props.data.productDetail?.data?.dimension} $`}
            </Text>
            <Text
              style={{color: "black",fontSize: 18 }}
            >
             OS : {props.data.productDetail?.data?.os}
            </Text>
            <Text
              style={{color: "black",fontSize: 18 }}
            >
              Release date : {props.data.productDetail?.data?.release_date}
            </Text>
            <Text
              style={{color: "black",fontSize: 18 }}
            >
              Storage : {props.data.productDetail?.data?.storage}
            </Text>
          </View>
        </View>
        <Carousel images={props.data.productDetail?.data?.phone_images} />

        </>
      )}
    </>
  );
};
const reduxState = (state) => ({
  data: state.dataDetail,
});

const reduxDispatch = () => (dispatch) => {
  return {
    getDataActionDetail: (id) => dispatch(getDataActionDetail(id)),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height,
    width:'100%'
  },
  image: {
    width,
    height,
  },
});
export default connect(reduxState, reduxDispatch)(ProductDetail);
