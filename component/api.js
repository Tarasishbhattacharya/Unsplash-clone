 async function apicall(url){
     let res=await fetch(url);
     let data=await res.json();
     return data;
 }
 function append(data,location){
     data.map((el)=>{
         let img=document.createElement("img");
         img.src=el.urls.regular;
         location.append(img);
     })
 }
 export  {apicall,append};