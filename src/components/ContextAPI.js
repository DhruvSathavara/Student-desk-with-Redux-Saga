import React, { useContext, useState, useEffect, createContext, Children } from "react";

const APIContext = createContext();


export function APIContextProvider(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        function fetchData() {
            const { data } = fetch("http://studentdesk.in/api/v1/newarrivals?&apiname=newArrivals").then(response => {
                return response.json().then(data => {
                    console.log(data.data)
                    setUsers(data.data);
                })
            })
        }
        fetchData();
    }, []);
    return (
        <APIContext.Provider value={{users:users, ...props}}>
          {props.children}
        </APIContext.Provider>
    )
}



export default APIContext;

