import React from "react";

function Itemcard(props) {
    return(
        <div className="col d-flex justify-content-center mt-3" onClick={() => props.doClick(props.name)}>
                            <div className="card ">
                                <img src={props.image}
                                    alt={props.name} height="200" width="200"/>
                            </div>
                        </div>
    );
}

export default Itemcard;