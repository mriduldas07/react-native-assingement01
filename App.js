import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* card */}
        <View style={{ paddingHorizontal: 12 }}>
          <View style={styles.header}>
            <Image source={require("./assets/Oval.png")} />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 700 }}>The Octocat</Text>
              <Text style={{ color: "#0d75f8", fontSize: 16 }}>@octocat</Text>
              <Text style={[{ paddingTop: 5 }, styles.textColor]}>
                Joined 25 Jan 2011
              </Text>
            </View>
          </View>
          <View>
            <Text style={[styles.description, styles.textColor]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </Text>
          </View>
          <View style={styles.repos}>
            <View>
              <Text
                style={[{ fontSize: 16, paddingTop: 15 }, styles.textColor]}
              >
                Repos
              </Text>
              <Text style={styles.reposText}>8</Text>
            </View>
            <View>
              <Text
                style={[{ fontSize: 16, paddingTop: 15 }, styles.textColor]}
              >
                Followers
              </Text>
              <Text style={styles.reposText}>3938</Text>
            </View>
            <View>
              <Text
                style={[{ fontSize: 16, paddingTop: 15 }, styles.textColor]}
              >
                Following
              </Text>
              <Text style={styles.reposText}>9</Text>
            </View>
          </View>
          <View style={styles.socialMedia}>
            <View style={styles.eachMedia}>
              <Image source={require("./assets/003-pin.png")} />
              <Text style={styles.textColor}>San Francisco</Text>
            </View>
            <View style={styles.eachMedia}>
              <Image source={require("./assets/002-url.png")} />
              <Text style={styles.textColor}>https://github.blog</Text>
            </View>
            <View style={styles.eachMedia}>
              <Image source={require("./assets/004-twitter.png")} />
              <Text style={{ color: "#cccccc" }}>Not Available</Text>
            </View>
            <View style={[styles.eachMedia, { paddingBottom: 30 }]}>
              <Image source={require("./assets/001-office-building.png")} />
              <Text style={styles.textColor}>@github</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //common classes
  textColor: {
    color: "gray",
  },
  reposText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  // container classes
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    // margin: 10,
    backgroundColor: "#dcf0fa",
  },
  card: {
    backgroundColor: "white",
    margin: 1,
    padding: 5,
    borderRadius: 17,
  },
  header: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  description: {
    fontSize: 17,
    paddingTop: "10%",
    lineHeight: 35,
  },
  repos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    marginTop: "10%",
    marginBottom: "10%",
    backgroundColor: "#edf7fc",
    borderRadius: 10,
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  eachMedia: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingBottom: 15,
  },
});
