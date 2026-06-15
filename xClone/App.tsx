import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./assets/logo-white.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Veja o que está{'\n'}
          acontecendo
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Entrar com Google
          </Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Entrar com Apple
          </Text>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.line} />
        </View>

        <TextInput
          placeholder="Número de telefone"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <View style={styles.phoneButton}>
          <Text style={styles.phoneButtonText}>
            Continuar com telefone
          </Text>
        </View>

        <Text style={styles.terms}>
          Ao continuar, você concorda com nossos Termos,
          Política de Privacidade e Uso de Cookies.
        </Text>

        <View style={styles.loginButton}>
          <Text style={styles.loginText}>
            Entrar com nome de usuário
          </Text>
        </View>
      </View>
    </View>
  );
}