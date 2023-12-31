import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY.CLOUD.NAME, 
  api_key: process.env.CLOUDINARY.API.KEY, 
  api_secret: process.env.CLOUDINARY.API.SECRET
});


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
     const response = await  cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as upload option get failed
        return null;
    }
}


export{uploadOnCloudinary}