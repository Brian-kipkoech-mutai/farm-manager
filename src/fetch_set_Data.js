 
 
import { collection, doc, setDoc,getDoc } from "firebase/firestore";
import { db } from "./firebase";
 
 

const setDocument = async (data) => {
    try {
      const farmManagerCollectionRef = collection(db, 'farm-manager-collection');
      const farmManagerDocRef = doc(farmManagerCollectionRef, '@farm-manager-doc');
      
      
      await setDoc(farmManagerDocRef,{items:data});
      
       
  
      console.log('Data written successfully');
    } catch (error) {
      console.error('Error writing data:', error);
    }
  };
  


  const getDocument = async () => {
    try {
        const farmManagerCollectionRef = collection(db, 'farm-manager-collection');
        const farmManagerDocRef = doc(farmManagerCollectionRef, '@farm-manager-doc');
        
        const docSnapshot = await getDoc(farmManagerDocRef);
        
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const items = data.items; // Access the 'items' field
            
            console.log('Retrieved items:', items);
            return items
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
};

getDocument();
  

  export {setDocument, getDocument};


 



