import React, { Component } from 'react'

export default function DocumentNotFound() {
    
        return (
            <div style={{marginLeft:80,width:'600px', height:'600px', marginTop:150,marginBottom:'auto', flexDirection:'column',justifyContent:'center',}}>
                <h2>No documents matched this search.</h2>
                <p style = {{fontSize:12}}>Perform another search or click the arrow on the search field to search for a file by type, customer, etc.</p>
            </div>
        )

}
