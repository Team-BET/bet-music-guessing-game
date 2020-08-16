import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Song from "../getSong/song.js";
import SongWrapper from "../songWrapper/songWrapper.js"



function SongLoading(props) {
  const {  isAuthenticated} = useAuth0();
  
  if (isAuthenticated) {
    return UserGreeting() ;
  }
}
function UserGreeting(props) {
  return (
    <div>
      <SongWrapper>
         <Song />
      </SongWrapper>
    </div>
  );
}

export default SongLoading;
