import React, { useState } from 'react';
import GearIcon from 'mdi-react/GearIcon';
import IconDisplay from './icondisplay';
import Editjob from './JobEdit/JobPopUp/JobMain';
import Addjob from './NewJob/JobPopUp/JobMain';
import '../Pages.css';
import tableData from '../../../Data/tableData.json';
import { Icon, Label, Menu, Table, Modal, Header, Button, Checkbox, Grid  } from 'semantic-ui-react';
import _ from 'lodash';

export default function Job() {
  
       var flag=0, value='All', value1, display=0;
     
    
    const [open, setOpen] = useState(false)
    const [isChecked, setChecked] = useState(true);
    const [selectValue, setselectValue] = useState('');
    const [selectValue1, setselectValue1] = useState('');
    const [searchValue, setsearchValue] = useState('');

  /*-----------------------------------------options for second dropdown-----------*/
    
    const Category = ["None", "Equipment", "Paddock", "Fuel Tank", "Silo", "Livestock"];
    const Priority = ["Low", "Normal", "High", "Safety"];
    const Status = ["Raised", "Raised and Assigned", "In Progress", "On Hold", "Completed"];
    
    let type = null;
    let options = null;
  

if (selectValue === "Priority") 
    type = Priority;
if (selectValue === "Category") 
    type = Category;
if (selectValue === "Status") 
    type = Status;

  
 
/*-----------------------------------------no records found message-----------*/
function ErrorMessage(props) {
  const Display = props.Display;
      
       if(!Display)
       { 
        return (
           <>
         <p style={{"text-align": "center", "color": "grey", "padding": "20px", "align-content": "bottom"}}> No record found</p> 
          
           </>
           );
       }
       
       else{
           return(
           <> </>
           );
       }
}
   
 if(selectValue){
      
      flag=1;
     value=selectValue;
     if(selectValue=="Status")
         value1="Raised";
     if(selectValue=="Priority")
         value1="Low";
     if(selectValue=="Category")
         value1="None";
 }
    if(selectValue1){
    value1=selectValue1; }
    
  /*-----------------------------------------second dropdown displaying-----------*/  
function HandleDropdown(props) {
  const Value = props.Value;
        if (type) {
            options = type.map((el) => <option value={el} key={el}>{el}</option>
                      );
        }
    switch (Value) {
    case 'Priority':
    case 'Status':
    case 'Category':
            return (<>
                          
                <div class="inputfield">
                    <div class="custom_select"> 
                        <select value={selectValue1} onChange={(e) => setselectValue1(e.target.value)}>              
                        {options}
                        </select>
                    </div>
                </div>
                </>
                )
     case 'Asset':
            return (
                <>
                <div class="inputfield">
        
                  <input onChange={(e)=>setsearchValue(e.target.value)} value={searchValue} class='input_value' type="text" placeholder="Search..." />
                </div>
                </>
                )
    case 'Description':
           return  (<>
                          
                    <div class="inputfield">
         
                     <input onChange={(e)=>setsearchValue(e.target.value)} value={searchValue} class='input_value' type="text" placeholder="Search..." />
                    </div>
  
                    </>
                    )
               default:
                 return (<> 
                         </>
                        )
        
}
}

/*-----------------------------------------table fitering using dropdown and completed button-----------*/
const items = tableData.filter((data)=>{

    if(!isChecked && data.status == "Completed")// checking completed button enabled or disabled
        return 
   
    
    if(flag)  //if dropdown filter is selected
   {    if(selectValue=="Status" && data.status == value1)   
          { display=1
              return data}
        else if(selectValue=="Priority" && data.priority == value1)   
           { display=1
              return data}
        else if(selectValue=="Category" && data.category == value1)   
          { display=1
              return data}
        else if(selectValue=="All" || selectValue=="Description" || selectValue=="Asset")   
          { 
              if(selectValue=="Description"){
                if(searchValue==""){
                    display=1
                    return data
                }
                else if(data.description.toLowerCase().includes(searchValue.toLowerCase()) ){ //searching using searchbox
                 
                    display=1
                    return data
                }
              }
              else if(selectValue=="Asset"){
                if(searchValue==""){
                    display=1
                    return data
                }
                  else if(data.asset.toLowerCase().includes(searchValue.toLowerCase())){ //searching using searchbox
                 
                    display=1
                    return data
                  }
             }
              else{
                  display=1
                  return data
              }
             
          
          }
    
        else 
            return
   }
   else {
       display=1
       return data
   }
       
      
    }).map(({status, priority, category, asset, description,duedate,lastupdate }) => (
         
          <Table.Row key={description}>
       
            <Table.Cell> <IconDisplay dataValue={status} /></Table.Cell>
            <Table.Cell> <IconDisplay dataValue={priority} /></Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{category}</Table.Cell>
            <Table.Cell>{asset}</Table.Cell>
            <Table.Cell>{duedate}</Table.Cell>
            <Table.Cell>{lastupdate}</Table.Cell>
            <Table.Cell> <Editjob style={{"padding": "0px", "margin": "0px"}}/></Table.Cell>
       
          </Table.Row>      
   ))
   
   
  return(

<div  className= "table-size">
    
  <div className= "subheader">
           
      <h1 style={{"color": "black", "margin-bottom":"0px"}}>Jobs </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
      
   {/*--------------------------------------------Completed jobs popup----------------------*/}
      
    <Modal style={{ "height": "35%", "width": "30%","position": "relative", "background-color": "rgb(0 0 0 / 62%)" }}
      centered={true}
      open={open}
      trigger={<GearIcon style={{"cursor":"pointer", "color": "black"}}/>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='setting' content='Settings' />
      <Modal.Content>
       <Checkbox toggle onClick={() => setChecked(!isChecked)} 
        checked={isChecked}/>
            
            <span style={{"color":"grey","font-size":"20px"}}>  Show Completed </span>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove'  /> Close
        </Button>
        
      </Modal.Actions>
    </Modal>   
      

      <div className="spacer"></div>
   
{/*--------------------------------------------First Dropdown----------------------*/}
        <Grid.Column >
            <div class="inputfield">
                <div class="custom_select">  
                    <select onChange={(e) => {setselectValue(e.target.value);
                         
                       setselectValue1(e.target.value=="Status"?"Raised":
                         (e.target.value=="Priority"?"Low":
                         (e.target.value=="Category"?"None":" ")));
                         
                       }}>
         
                    <option value="All">All</option>
                    <option value="Status">Status</option>
                    <option value="Priority">Priority</option>
                    <option value="Description">Description</option>
                    <option value="Asset">Asset</option>
                    <option value="Category">Category</option>
                </select>
            </div>
            </div>
        </Grid.Column>
{/*--------------------------------------------Second Dropdown----------------------*/}
        <Grid.Column style={{"margin-left": "10px", "margin-right": "20px"}}>
               
                <HandleDropdown Value={selectValue}/>
        </Grid.Column>
 
{/*--------------------------------------------Add job section----------------------*/}    
<Addjob/> 
                    
</div>


{/* --------------------------------------------table displaying-------------------------------------------------------------------- */}

<Table sortable singleLine selectable color="green" key="green" >
      <Table.Header >
        <Table.Row >
                <Table.HeaderCell >Status </Table.HeaderCell>
                <Table.HeaderCell>Priority</Table.HeaderCell>
                <Table.HeaderCell >Description</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Asset</Table.HeaderCell>
                <Table.HeaderCell>Due date</Table.HeaderCell>
                <Table.HeaderCell>Last Update</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body> {items} </Table.Body>
 <Table.HeaderCell colSpan='8'>
     
     <ErrorMessage Display={display}/>
        
     </Table.HeaderCell>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='8'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
      
  </Table>
  
 

</div>

      );
}


    
 