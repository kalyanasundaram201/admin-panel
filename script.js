var api= 'https://adminpaneldata-edyoda-sourav.herokuapp.com/admin/data'
var tablebody=document.getElementById("table-body")
var infowarper=document.getElementById("info-wrapper")
var inputelement=document.getElementById("search-box")
var userData=[]

function userRowClicked(id){
    var previousActiveUser=document.getElementsByClassName("active")[0]
    previousActiveUser.classList.remove("active")
    var activeHighlightedUser=document.getElementById(id)
    activeHighlightedUser.classList.add("active")
   var activeHighlightedUserDetails=userData.find((user,i)=>{
       if(user.id==id){
           return true
       }
   })
   var contentinfoElement=document.getElementById("info-wrapper")
   contentinfoElement.innerHTML=`
   <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            
      <div id="content ${activeHighlightedUserDetails.id}" class="info-content">
                <div><b>User selected:</b> ${activeHighlightedUserDetails.firstName}${activeHighlightedUserDetails.lastName} </div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        ${activeHighlightedUserDetails.description}
                    </textarea>
                </div>
                <div><b>Address:</b> ${activeHighlightedUserDetails.address.streetAddress}</div>
                <div><b>City:</b>${activeHighlightedUserDetails.address.city}</div>
                <div><b>State:</b> ${activeHighlightedUserDetails.address.state}</div>
                <div><b>Zip:</b> ${activeHighlightedUserDetails.address.zip}</div>
            </div>`
 
}

$.get(api,function(response){
    userData=response
    response.map((user,i)=>{
        console.log(user)
        tablebody.innerHTML+=`
        <tr id="${user.id}"  class="data-row ${i==2 ?`active`:""}" onClick="userRowClicked(${user.id})">
        <td class="column1">${user.id}</td>
        <td class="column2">${user.firstName}</td>
        <td class="column3">${user.lastName}</td>
        <td class="column4">${user.email}</td>
        <td class="column5">${user.phone}</td> 
        </tr>`

        if(i==2){
      infowarper.innerHTML=`
      <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            
      <div id="content ${user.id}" class="info-content">
                <div><b>User selected:</b> ${user.firstName}${user.lastName} </div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        ${user.description}
                    </textarea>
                </div>
                <div><b>Address:</b> ${user.address.streetAddress}</div>
                <div><b>City:</b>${user.address.city}</div>
                <div><b>State:</b> ${user.address.state}</div>
                <div><b>Zip:</b> ${user.address.zip}</div>
            </div>`
            
        

        }
        

    })
    
})
function inputchanged(){
    var userFirstName=inputelement.value
    var filteredusers=userData.filter((user,i)=>{
        if(user.firstName.includes(userFirstName)){
        return true
        }
    })
    tablebody.innerHTML=``
    var infoContentDiv=document.getElementsByClassName("info-content")[0]

    filteredusers.map((user,i)=>{
        tablebody.innerHTML=`<tr id="${user.id}"  class="data-row ${user.id==infoContentDiv.id ?`active`:""}" onClick="userRowClicked(${user.id})">
        <td class="column1">${user.id}</td>
        <td class="column2">${user.firstName}</td>
        <td class="column3">${user.lastName}</td>
        <td class="column4">${user.email}</td>
        <td class="column5">${user.phone}</td> 
        </tr>`


    })
}







{/* <div class="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
            </div> */}


 



