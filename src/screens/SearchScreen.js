import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi =  async (searchTerm) => {
        
        try { 

        const response= await  yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses)
    } catch (err) {
         setErrorMessage('Something wentt wrong')
    };
}
    //call searchApi when component is first rendered


   return <View>
       <SearchBar  
       term={term} 
       onTermChange={setTerm} 
       onTermSubmit={() => searchApi(term)}
       />
       {errorMessage ?  <Text>{errorMessage}</Text> : null}
       <Text> We have founs {results.length} results</Text>
   </View>
};

const styles = StyleSheet.create({

});

export default SearchScreen;