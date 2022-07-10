import img from "../src/image/img2.jpg"

export const userColumns = [
   { 
      field: 'id', 
      headerName: 'ID', 
      width: 70 
   },
   {
      field:"username",
      headerName:"User",
      width:230,
      renderCell: (params) =>{
         return(
            <div className="cellWithImg">
               <img className="cellImg" src={params.row.img} alt="avatar"/>
               {params.row.username}
            </div>
         )
      }
   },
   {
      field:"email",
      headerName:"Email",
      width:230,
   },
   {
      field:"address",
      headerName:"Address",
      width:100,
   },
   {
      field:"status",
      headerName:"Status",
      width:160,
      renderCell:(params)=>{
         return(
            <div className= {`cellWithStatus ${params.row.status}`}>
               {params.row.status}
            </div>
         )
      }
   },
]

export const userRows =[
   {
      id:1,
      username:"Jane",
      img:(img),
      status:"active",
      email:"snow@gmail.com",
      age:35
   },
   {
      id:2,
      username:"Snow",
      img:(img),
      status:"passive",
      email:"snow@gmail.com",
      age:31
   },
   {
      id:3,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
   {
      id:4,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
   {
      id:5,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
   {
      id:6,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
   {
      id:7,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },

   {
      id:8,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
   {
      id:9,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },

   {
      id:10,
      username:"John",
      img:(img),
      status:"pending",
      email:"snow@gmail.com",
      age:22
   },
]