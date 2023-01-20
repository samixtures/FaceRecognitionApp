import React from "react";
const Rank = ( { name, entries }) => {
    return (
        <div>
            <div className="f3">
                {`${name} your current number of entries is ${entries}`}
            </div>
            <div className="f1">
                {"#5"}
            </div>
        </div>
    );
}

export default Rank;