import React from "react";

function Itemcard(props) {
    return(
        <div class="col d-flex justify-content-center mt-3">
                            <div class="card ">
                                <img src={props.image}
                                    alt={props.name} height="200" width="200"/>
                            </div>
                        </div>

    );

}

export default Itemcard;