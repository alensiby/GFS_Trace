import React, {useState} from 'react'
import { Button, Checkbox, Icon, Grid, Modal, Input } from 'semantic-ui-react'
import GearIcon from 'mdi-react/GearIcon';
import farm from "../../../../../Data/farmData";

export default function Farmpopup(props) {
  const Value = props.Value;
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [addOpen, setAddOpen] = React.useState(false)
  const [editOpen, setEditOpen] = React.useState(false)
  const [deleteOpen, setDeleteOpen] = React.useState(false)
  const [state, setState] = useState(' '); 
  
  const [farm,setfarm]=useState([
    {value:"Farm1"},
    {value:"Farm2"},
    
])
const addRow=()=>{
  let newFarm={value:{state}}
  setfarm([...farm,newFarm])
  alert("New farm added");
}
const editRow=()=>{
 
  alert("Farm edited");
}
const deleteRow=()=>{
 
  alert("Farm deleted");
}
  return (
    <>
     
      <GearIcon onClick={() => setFirstOpen(true)} style={{"cursor":"pointer", "color": "black"}}/>
      <Modal style={{ "height": "35%", "width": "25%", "background-color": "rgb(0 0 0 / 62%)" }}
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Farm Options</Modal.Header>
        <Modal.Content>
        <div  style={{"margin-left":"35px"}}>
          <Modal.Description>
          
          <Button basic color='green' onClick={() => setAddOpen(true)}>
          <Icon name='plus' />
            Add Farm 
          </Button>
          
          </Modal.Description>
         
         
          <Modal.Description style={{"margin-top":"10px"}}>
          <Button basic color='blue' onClick={() => {setEditOpen(true);
        setState(Value);}}>
          <Icon name='pencil' />
            Edit Farm
          </Button>
          
          </Modal.Description>
         
         
          <Modal.Description style={{"margin-top":"10px"}}>
          <Button basic color='red' onClick={() => setDeleteOpen(true)
          }>
          <Icon name='minus' />
            Delete Farm
          </Button>
          
          </Modal.Description>
         </div>
        </Modal.Content>
        
        <Modal.Actions>
        <Button color='red' onClick={() => setFirstOpen(false)}>
          <Icon name='remove'  /> Cancel
        </Button>
          
        </Modal.Actions>
            
      <Modal
          onClose={() => setAddOpen(false)}
          open={addOpen}
          size='small'
          style={{ "height": "35%", "width": "35%" }}
        >
          <Modal.Header>New Item</Modal.Header>
          <Modal.Content>
          <Input fluid iconPosition='left' placeholder='Name'>
              
          <input onChange={(e) => setState(e.target.value)
          } />
    </Input>
   
          </Modal.Content>
          <Modal.Actions>
          <Button
              icon='close'
              content='Cancel'
              onClick={() => setAddOpen(false)}
            />
            <Button positive
              icon='check'
              content='Save'
              onClick={() => {setAddOpen(false);
              addRow();}}
            />
          </Modal.Actions>
        </Modal>
        
      <Modal
          onClose={() => setEditOpen(false)}
          open={editOpen}
          size='small'
          style={{ "height": "35%", "width": "35%" }}
        >
          <Modal.Header>Edit</Modal.Header>
          <Modal.Content>
          <Input fluid iconPosition='left'>
              
          <input value={state} onChange={(e) => setState(e.target.value)} />
    </Input>
    
          </Modal.Content>
          <Modal.Actions>
          <Button
              icon='close'
              content='Cancel'
              onClick={() => setEditOpen(false)}
            />
            <Button positive
              icon='check'
              content='Save'
              onClick={() => {setEditOpen(false); editRow();}}
            />
          </Modal.Actions>
        </Modal>
        
      <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          size='small'
          style={{ "height": "35%", "width": "25%" }}
        >
          <Modal.Header>Delete</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete the {state}?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button  onClick={() => setDeleteOpen(false)} color="white"
             icon='close' 
             content='Cancel'
             />
            <Button onClick={() => {setDeleteOpen(false);
            deleteRow();}} 
            negative
           
             content='Delete'
             />
          </Modal.Actions>
          
          
        </Modal>
        
      </Modal>
    </>
  )
}



function exampleReducer(state, action) {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return { ...state, closeOnDimmerClick: action.value }
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return { ...state, closeOnEscape: action.value }
    case 'OPEN_MODAL':
      return { ...state, open: true }
    case 'CLOSE_MODAL':
      return { ...state, open: false }
    default:
      throw new Error()
  }
}

function ModalExampleCloseConfig() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
  })
  const { open, closeOnEscape, closeOnDimmerClick } = state

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={closeOnEscape}
          label={{ children: <code>closeOnEscape</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_ESCAPE', value: checked })
          }
        />
        <br />
        <Checkbox
          checked={closeOnDimmerClick}
          label={{ children: <code>closeOnDimmerClick</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_DIMMER_CLICK', value: checked })
          }
        />
      </Grid.Column>

      <Grid.Column>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={open}
          onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
          trigger={<Button>Show Modal</Button>}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} negative>
              No
            </Button>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} positive>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}

