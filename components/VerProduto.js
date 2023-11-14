import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import { Linking } from 'react-native';
import styles from './css/Estilo';
import dados from './dados';

export default VerProdutos = ({ route, navigation }) => {
  const abrirLink = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error('Erro ao abrir o link: ', err)
    );
  };

  for (var i = 0; i < dados.length; i++) {
    if (route.params.id == dados[i].id) {
      return (
        <View style={styles.containerProd}>

          <Pressable
            onPress={() => abrirLink(dados[i].link)}
            style={({ pressed }) =>[styles.none]}>

            <View style={styles.itensProd}>
              <Image source={dados[i].imagem} style={styles.itensImagemProd} />
              <Text style={styles.txtIdProd}>{dados[i].id}</Text>
              <Text style={styles.tituloProd}>{dados[i].nome_prod}</Text>
              <Text style={styles.precoProd}>
                {Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(dados[i].valor)}
              </Text>
              
              <Text style={styles.descr}>{dados[i].descricao}</Text>
            </View>
          </Pressable>
        </View>
      );
    }
  }
};
