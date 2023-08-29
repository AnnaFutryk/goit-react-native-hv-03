import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const addAvatar = (e) => {
    e.preventDefault();
  };

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
        <View style={styles.avatar}>
          <Image
            source={require("../../images/avatar.jpg")}
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.addButton} onPress={addAvatar}>
            <Image
              source={require("../../images/added.png")}
              style={styles.addButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.registrationTitle}>Реєстрація</Text>
        <View style={styles.formWrapper}>
          <TextInput
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            placeholder="Логін"
            placeholderTextColor={"#BDBDBD"}
            name="login"
            onFocus={() => setIsLoginFocused(true)}
            onBlur={() => setIsLoginFocused(false)}
          />
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
      <View style={styles.BtnWrap}>
        <TouchableOpacity style={styles.registrationButton} onPress={signUp}>
          <Text style={styles.registrationButtonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registrationLinkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
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
    minHeight: 549,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 32,
  },
  avatar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
    width: 120,
    aspectRatio: 1,
    marginTop: "-25%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addButton: {
    position: "absolute",
    width: 44,
    height: 44,
    right: -24,
    bottom: 7,
  },
  addButtonIcon: {
    width: 44,
    height: 44,
  },
  registrationTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
  },
  formWrapper: {
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
  BtnWrap: {
    position: "absolute",
    width: "100%",
    bottom: 45 + 34,
    // top: 604 + 44,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 43,
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
  registrationLinkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
});
