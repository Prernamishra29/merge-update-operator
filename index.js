// Input: Two objects - profile and updates
const profile = { 
    name: "Charlie", 
    age: 29, 
    address: { 
      city: "San Francisco", 
      zipcode: "94101" 
    } 
  };
  
  const updates = { 
    age: 30, 
    address: { 
      zipcode: "94109", 
      country: "USA" 
    } 
  };
  
  // Merging the objects using spread operator
  const mergedProfile = {
    ...profile,
    ...updates,
    address: {
      ...profile.address,
      ...updates.address,
    }
  };
  
  // Output the merged object
  console.log(mergedProfile);
  