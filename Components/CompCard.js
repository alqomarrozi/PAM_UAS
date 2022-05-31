import { View, Image, Text ,ScrollView} from "react-native";

const CompCard = (props) => {
  const handleDetail = (id) => {
    props.navigation.push("Detail Produk", {
      id,
    });
  };

  // console.log(props.data)

  return (
    <ScrollView>
      {props.data.map((product, i) => {
        return (
          <View
            key={i}
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
              height: 'auto',
              margin: 10,
              padding: 5,
              paddingBottom:10
            }}
          >
            <Image
              style={{ width: "100%", height: 200 }}
              source={{
                uri: product.image,
              }}
            />

            <View style={{ margin: 3 }}>
              <Text style={{ fontSize: 18 }}>
                {product.title} {`(${product.phone_name})`}
              </Text>
            </View>

            <View>
              <Text>{product.description}</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text
                onPress={() => handleDetail(product.slug)}
                style={{ fontWeight: "bold", color: "blue" }}
              >
                Detail Produk
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CompCard;
