import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({name, price}) => (<View style={styles.item}>
  
    <Text style={styles.text}>
        {name}       
    </Text>
    <Text style={styles.text}>{price}</Text>
  
</View>);


const Separator = () => <View style={styles.separator}></View>

export default function Menu() {

  const renderItem = ({item}) => <Item name={item.name} price={item.price}/>
  const renderSectionHeader = ({section:{title}}) => <View><Text style={styles.header}> {title}</Text></View>
  return (
    <View style={{ flex:0.98 }}>
      <SectionList 
        sections={menuItemsToDisplay} 
        keyExtractor={(index,it) => it+index} 
        renderItem = {renderItem} 
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      > 

      </SectionList>
    </View>
  );
}


const styles = StyleSheet.create({
  
    text:{fontSize:20, color: '#DDB912'},
    item:{flexDirection: 'row', justifyContent: 'space-between', paddingVertical:20, paddingHorizontal:40},
    header: { flex: 0.15, backgroundColor: '#F4CE14', fontSize: 30, textAlign: 'center', flexWrap:'wrap'},
    separator: {borderBottomWidth: 1, borderColor: '#EDEFEE',}
})