import{StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#252B48'
  },
  camada: {
    position: 'absolute',
    top: '-0,8%',
    left: '2,5%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '50%',
    borderRadius: 20,
    width: '100%',
    height: 250
  },
  txtId: {
    position: 'absolute',
    color: 'white',
    top: '37%',
    left: '37%',
    fontSize: 50,
    fontWeight: 'bold'
  },
  itens :{
    height: 425,
    backgroundColor:'#202020',
    padding: 10,
    marginHorizontal: 16,
    margin: 5,
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.5)',
    borderRadius: 20
 },
  itensImagem:{
    width: '100%',
    height: 250, 
    borderRadius: 20
 },
   titulo:{
    fontSize: 18,
    color: '#F6F4EB',
    margin: 1,
    fontWeight: 'bold'
  },
  preco:{
    fontSize: 16,
    color: '#FDF4F5',
    margin: 1,
    fontWeight: 'bold'
  },
   botao:{
    type: 'float',
    width: 110,
    height: 52,
    padding: 10,
    marginLeft: 135,
    marginTop: 10,
    borderRadius: 12,
    background: 'linear-gradient(to right, #0B2447, #19376D, #576CBC, #A5D7E8)'
},
  txtBtn: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F6F4EB'
  },

containerProd: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#252B48'
  },
  itensProd: {
    height: 500,
    backgroundColor:'#202020',
    padding: 10,
    marginHorizontal: 16,
    margin: 5,
    borderRadius: 20
  },  
  itensImagemProd:{
    width: '100%',
    height: 250, 
    borderRadius: 20
  },
  txtIdProd:{
    position: 'absolute',
    color: '#DAC0A3',
    top: '4%',
    left: '8%',
    fontSize: 25,
    fontWeight: 'bold'
  },
  tituloProd:{
    marginTop: '2%',
    fontSize: 18,
    color: '#F6F4EB',
    margin: 1,
    fontWeight: 'bold'
  },
  precoProd:{
    marginTop: '2%',
    color: '#FDF4F5',
    fontSize: 16,
    margin: 1,
    fontWeight: 'bold'
  },
  txtBtnProd:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F6F4EB'
  },
   descr:{
    marginTop: '6%',
    color: '#FFFFFF',
    fontWeight: '500',
    wordSpacing: -1,
    textAlign: 'justify'
  }

}

)