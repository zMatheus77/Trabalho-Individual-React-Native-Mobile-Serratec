import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 30,
  },

  title: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  button: {
    height: 55,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },

  dividerText: {
    color: '#888',
    marginHorizontal: 10,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },

  phoneButton: {
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  phoneButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  terms: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 18,
  },

  loginButton: {
    height: 55,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  loginText: {
    color: '#888',
    fontSize: 16,
  },
});

export default styles;