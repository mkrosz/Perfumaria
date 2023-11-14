import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import styles from './css/Estilo.js';
import dados from './dados';

export default FlatList_ = ({ router, navigation }) => {
  const [itemClicado, setItemClicado] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <View style={styles.itens}>

            <Pressable
              onPress={() => {
                if (itemClicado === item.id) {
                  setItemClicado(null);
                } else {
                  setItemClicado(item.id);
                }
              }}
            >
              <Image
                source={item.imagem}
                style={styles.itensImagem}
              />
              {itemClicado === item.id && (
                <View style={styles.camada}>
                <Text style={styles.txtId}>
                  {item.id}
                </Text>
                </View>
              )}
            </Pressable>
            
            <Text style={styles.titulo}>{item.nome_prod}</Text>
            <Text style={styles.preco}>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.valor)}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Produto', { id: item.id });
              }}
            >
              <Text style={[styles.txtBtn, styles.botao]}>Ver Mais</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};
