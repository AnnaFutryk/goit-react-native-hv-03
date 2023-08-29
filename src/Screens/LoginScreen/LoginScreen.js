import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export const LoginScreen = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
  };

  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <ImageBackground
      source={require("../../images/bg-photo.png")}
      style={styles.imageBackground}
      imageStyle={{
        minHeight: 812,
      }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.loginTitle}>Увійти</Text>
        <View style={styles.formWrapper}>
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholderTextColor={"#BDBDBD"}
            placeholder="Адреса електронної пошти"
            name="email"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <View style={styles.lastInputWrapper}>
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={true}
              placeholder="Пароль"
              name="password"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            ></TextInput>
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={showPassword}
            >
              <Text style={styles.showPasswordText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.LoginBtnWrap}>
        <TouchableOpacity style={styles.registrationButton} onPress={signUp}>
          <Text style={styles.registrationButtonText}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.registrationTextWrapper}>
          <Text style={styles.registrationLinkText}>Немає акаунту?</Text>
          <TouchableOpacity>
            <Text style={styles.registrationLink}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    position: "relative",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 489,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 32,
  },

  loginTitle: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  formContainer: {
    position: "relative",
  },
  input: {
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#000",
  },
  showPasswordButton: {
    fontSize: 16,
  },
  lastInputWrapper: {
    position: "relative",
  },

  showPasswordText: {
    position: "absolute",
    top: -51,
    right: 16,
    color: "#1B4371",
  },
  LoginBtnWrap: {
    position: "absolute",
    width: "100%",
    top: 538 + 44,
    paddingLeft: 16,
    paddingRight: 16,
  },
  registrationButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
  },
  registrationButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  registrationTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    gap: 4,
  },
  registrationLinkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
  registrationLink: {
    fontSize: 16,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});
