import React, { useEffect, useState } from 'react'
function Record({ allrecorddata, btnclick }) {
  const category = ["mobile", "electronics", "cloth", "food", "all"];
  return (
    <div className="container">
      <center>
        <h1 className='pt-5 pb-5'>All Record</h1>
        {
          category.map((cat, i) => {
            return (
              <>

                <button style={{ backgroundColor: "black", margin: "15px", border: "none", paddingLeft: "18px", paddingTop: "7px", paddingBottom: "7px", color: "white", fontWeight: "700", paddingRight: "18px" }} onClick={() => btnclick(cat)} key={i}>{cat}</button>
              </>
            )
          })
        }
        <br></br><br></br><br></br><br /><br />
        <table style={{ width: "100%" }}>


          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {
              allrecorddata.map((item) => {
                return (
                  <div class="card" style={{ width: "18rem", margin: "20px" }}>
                    <img src={item.image} style={{ objectFit: "cover", height: "320px" }} />
                    <div class="card-body">
                      <center>
                        <h4 class="card-title pt-1 pb-4">{item.name}</h4>
                        <p class="card-text"><strong>Price :- $</strong> {item.price}</p>
                        <p class="card-text ">Qty :-  {item.qty}</p>
                        <p class="card-text ">Category :- {item.category}</p>
                      </center>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </table>
      </center>
    </div>
  );
}


export default Record;