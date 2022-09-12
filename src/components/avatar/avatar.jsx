import React from "react";

import styles from  "./avatar.module.css"

function Avatar(){
    return (
        <div className={styles.objectAvatar}>
            <img src="34.svg" alt="" className={styles.avatar}/>
            <a href="" className={styles.name}>Henry Jabbawockiez</a>
        </div>
        
    )
}



export default Avatar