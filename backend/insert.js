const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insertMany(
      [
          {title:'max 5',description:'micromax5'},
          {title:'max 6',description:'micromax6'},
          {title:'max 7',description:'micromax7'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();