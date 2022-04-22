import React from "react";
import SingleNames from "./singleNames";

const Favorites = ({ favoriteNames, setFavoriteNames,arrayOfNames, setArrayOfNames }) => {
    return (
      <div className="selectFavorite">
        <div className="fav">
          <h2>Favorites:</h2>
          {favoriteNames.map((favoriteName, i) => {
            return (
              <SingleNames
                babyName={favoriteName}
                i={i}
                key={i}
                onClick={() => {
                  setArrayOfNames(arrayOfNames.concat(favoriteName));
                  setFavoriteNames(
                    favoriteNames.filter((currentName) => {
                      return !favoriteName.name.includes(currentName.name);
                    })
                  );
                }}
              />
            );
          })}
        </div>
      </div>
    );
}
export default Favorites;