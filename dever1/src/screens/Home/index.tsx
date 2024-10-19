import { LinearGradient } from "expo-linear-gradient";
import { BellSimple, CaretDown, MapPin } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import Sun from "../../assets/01d.svg";
import Sun02d from "../../assets/02d.svg";

export function Home() {
  const [colors, setColors] = useState(["#292A4E", "#715C77", "#C75C2E"]); 

  // Função para definir as cores de fundo conforme o horário do dia
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      setColors(["#FFDEE9", "#B5FFFC"]); 
    } else if (hour >= 12 && hour < 18) {
      setColors(["#FFD89B", "#19547B"]); 
    } else {
      setColors(["#1E3C72", "#2A5298"]); 
    }
  }, []);

  return (
    <LinearGradient colors={colors} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#FFF" size={32} />
            <Text style={styles.headerLeftText}>Floriano, PI</Text>
            <CaretDown color="#FFF" size={32} />
          </View>
          <BellSimple color="#FFF" size={32} />
        </View>

        {}
        <View style={styles.info}>
          <Text style={styles.infoText}>21°C</Text>
          <View style={styles.sunIconContainer}>  
            <Sun width={200} height={200} /> {}
          </View>
          <Text style={styles.infoTextMaxMin}>Max.: 31º Min.: 25º</Text>
        </View>
      </View>

      <View style={styles.infoDetails}>
        <Text style={styles.infoDetailsText}>Previsão dos próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Seg.</Text>
            <View>
              <Sun02d width={40} height={40} /> {}
            </View>
            <Text style={styles.infoDetailsCardPreview}>19°C</Text>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Ter.</Text>
            <View>
              <Sun02d width={40} height={40} />
            </View>
            <Text style={styles.infoDetailsCardPreview}>20°C</Text>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Qua.</Text>
            <View>
              <Sun02d width={40} height={40} />
            </View>
            <Text style={styles.infoDetailsCardPreview}>21°C</Text>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Qui.</Text>
            <View>
              <Sun02d width={40} height={40} />
            </View>
            <Text style={styles.infoDetailsCardPreview}>22°C</Text>
          </View>

          <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>Sex.</Text>
            <View>
              <Sun02d width={40} height={40} />
            </View>
            <Text style={styles.infoDetailsCardPreview}>23°C</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  content: { 
    paddingHorizontal: 40, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  header: {
    width: "100%",
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  headerLeftText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    paddingVertical: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 100,
    fontWeight: "300",
    color: "#FFF",
    textAlign: "center", 
  },
  infoTextMaxMin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
    textAlign: "center", 
  },
  sunIconContainer: {
    marginVertical: 20, 
  },
  infoDetails: {
    gap: 15,
    paddingLeft: 40,
    justifyContent: "center", 
    alignItems: "center",
  },
  infoDetailsText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "center",
  },
  infoDetailsCard: {
    marginRight: 20,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  infoDetailsCardWeekDay: {
    fontSize: 16,
    fontWeight: "600",
  },
  infoDetailsCardPreview: {
    fontSize: 24,
    fontWeight: "300",
  },
});
