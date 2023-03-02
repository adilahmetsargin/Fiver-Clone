import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { BiMessageDetail } from "react-icons/bi";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: false,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>Maria Anders</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              79.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>
              110.<sup>99</sup>
            </td>
            <td>Roland Mendel</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
              39.<sup>99</sup>
            </td>
            <td>Helen Bennett</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
              119.<sup>99</sup>
            </td>
            <td>Yoshi Tannamuri</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>
              49.<sup>99</sup>
            </td>
            <td>Giovanni Rovelli</td>
            <td>
              <BiMessageDetail cursor="pointer" width="25px" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
