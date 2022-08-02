import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, Address, Area, Fullname, MaterialDes, Materialtype, Phonenumber } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {Area}</span>
                    <h2 className="card-title"> {Fullname} </h2>
                    <span className="card-description subtle">
                      {MaterialDes}<br/>Address: {Address}
                    </span>
                    <br/>
                    <span className="card-description subtle">
                      Contact: {Phonenumber}
                    </span>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Pick up</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
