import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import img from "../../image/img2.jpg"

const Single = () => {
   return (
      <div className="single">
         <Sidebar />
         <div className="singleContainer">
            <Navbar />
            <div className="top">
               <div className="left">
                  <div className="editBotton">Edit</div>
                  <h1 className="title">Iformation</h1>
                  <div className="item">
                     <img 
                     src={(img)} 
                     alt="" 
                     className="itemImg" />
                     <div className="details">
                        <h1 className="itemTitle">Jane</h1>
                        <div className="detailItem">
                           <span className="itemKey">Email:</span>
                           <span className="itemValue">jane@gmail.com</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Phone:</span>
                           <span className="itemValue">+1 2432 43 53</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Address:</span>
                           <span className="itemValue">123/Ha Huy Giap phuong Thanh Loc quan 12</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Country:</span>
                           <span className="itemValue">Viet Nam</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right">
                  <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
               </div>
            </div>
            <div className="bottom">
               <h1 className="title">Last Transactions</h1>
               <Table />
            </div>
         </div>
      </div>
   );
};

export default Single;