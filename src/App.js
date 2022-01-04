/*"StAuth10244: I Hetal Patel, 000821900 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."*/
// Starter code for the front-end, includes examples of accessing all server 
// API routes with AJAX requests.

import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


function Pets() {
  
  // isLoaded keeps track of whether the initial load of pet data from the
  // server has occurred.  pets is the array of pets data in the table, and 
  // searchResults is the array of pets data after a search request.
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = React.useState(3);
  const [editId, setEditId] = React.useState(3);
  const [animal, setAnimal] = React.useState();
  const [description, setDescription] = React.useState();
  const [price, setPrice] = React.useState();
  const [age, setAge] = React.useState();
  const [buttonName, setbuttonName] = React.useState("Add");  

  // fetches all pet data from the server

  function fetchPets()
  {
    fetch("http://localhost:3001/api?act=getall")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setPets(result);
      })    
  }
  useEffect(fetchPets, []);
  
  const handleAnimalChange=(event)=>{
    setAnimal(event.target.value);   
  }
  const handleDescriptionChange=(event)=>{
    setDescription(event.target.value);
  }
  const handleAgeChange=(event)=>{
    setAge(event.target.value);
  }
  const handlePriceChange=(event)=>{
    setPrice(event.target.value); 
  }
  const handleSearchChange=(event)=>{
    setSearch(event.target.value); 
  }

  /*function addPet()
  {
    setId(id+1);
    if(id>0&&animal!=null&&description!=null&&age>0&&price>0){
    fetch("http://localhost:3001/api?act=add&id="+id+ "&animal="+animal+"&description="+description +"&age="+age+"&price="+price)
    .then(res => res.json())
    .then(
      (result) => {
        fetchPets();
      })
      setAnimal("");  
      setDescription("");  
      setAge("");  
      setPrice("");  
      setSearch("");
      setbuttonName("Add");
    }
    else{
        alert(" Please enter all required data and make sure age and price are positive value.");
    }
       
  }*/

  function deletePet(newId)
  {
      fetch("http://localhost:3001/api?act=delete&id="+newId)
    .then(res => res.json())
    .then(
      (result) => {
        fetchPets();
      })    
  }

  function editPet(id){    
    for(let i=0;i<pets.length;i++){
      if(pets[i].id==id){        
        setAnimal(pets[i].animal);
        setDescription(pets[i].description);
        setPrice(pets[i].price);
        setAge(pets[i].age);
        setbuttonName("Save");
        setEditId(pets[i].id);
      }      
    }    
  }

  function updatePet(editId)
  {
    let newPet=[];
    newPet=pets.filter(x=>x.id==editId);
   // console.log("Edit"+ editId );
    if(newPet.length>0){
      for(let i=0;i<newPet.length;i++){
        //console.log(i+"="+newPet[i].id);      
        if(newPet[i].id==editId){ 
          if(id>0&&animal!=null&&description!=null&&age>0&&price>0){       
            fetch("http://localhost:3001/api?act=update&id="+editId+"&animal="+animal+"&description="+description +"&age="+age+"&price="+price)
            .then(res => res.json())
            .then(
              (result) => {
                fetchPets();   
             });
            setAnimal("");  
            setDescription("");  
            setAge("");  
            setPrice("");  
            setSearch("");
            setbuttonName("Add");
            setEditId("");
      }else{
        alert(" Please enter all required data and make sure age and price are positive value.");
    }  
    }
  }
}else{
        setId(id+1);
        if(id>0&&animal!=null&&description!=null&&age>0&&price>0){
        fetch("http://localhost:3001/api?act=add&id="+id+ "&animal="+animal+"&description="+description +"&age="+age+"&price="+price)
        .then(res => res.json())
        .then(
          (result) => {
            fetchPets();
          })
          setAnimal("");  
          setDescription("");  
          setAge("");  
          setPrice("");  
          setSearch("");
          setbuttonName("Add");
          setEditId("");
          
        }
        else{
            alert(" Please enter all required data and make sure age and price are positive value.");
        }        
      }    
  }  
  
  // Searches for pets in the pet inventory.  Again we use hardcoded data but
  // we could build a custom fetch URL string.
  function searchPet()
  {
    if(search!=""){
      fetch("http://localhost:3001/api?act=search&term="+search)
    .then(res => res.json())
    .then(
      (result) => {
        setSearchResults(result);
      });
      
    }
    else{
      let emptyArray=[];
      setSearchResults(emptyArray);
      alert("Enter somthing in search box!! ");
    }
  }
  function clearAll(){
    setAnimal("");  
    setDescription("");  
    setAge("");  
    setPrice("");  
    setSearch("");
    setbuttonName("Add");
    setEditId("");
  }
 

  // If data has loaded, render the table of pets, buttons that execute the 
  // above functions when they are clicked, and a table for search results. 
  // Notice how we can use Material UI components like Button if we import 
  // them as above.
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5); 
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Server API Usage Demonstration</h1>
        <Container maxWidth="md">
        <div className="searchContainer">
          <TextField id="Search"label="Search" variant="filled" value={search} onChange={handleSearchChange} sx={{ m: 1, width: '50ch' }}/>   
          <Button variant="contained" onClick={searchPet} sx={{ m: 1}}>Search</Button>
        </div>
        </Container>
        <br />       
        <h2>Search Results</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
             <TableCell align="center" style={{backgroundColor:"#bfe8f5",fontSize:"15pt"}}>Animal</TableCell>
            <TableCell align="center" style={{backgroundColor:"#bfe8f5",fontSize:"15pt"}}>Description&nbsp;</TableCell>
            <TableCell align="center" style={{backgroundColor:"#bfe8f5",fontSize:"15pt"}}>Age&nbsp;</TableCell>
            <TableCell align="center"style={{backgroundColor:"#bfe8f5",fontSize:"15pt"}}>Price&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResults.map((row) => (
            <StyledTableRow key={row.id}>
              <TableCell align="center">{row.animal}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <h2>List Of Pets</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{fontSize:"15pt"}}>Animal</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:"15pt"}}>Description&nbsp;</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:"15pt"}}>Age&nbsp;</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:"15pt"}}>Price&nbsp;</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:"15pt"}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.animal}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">
              <Button className="tableButton"  size="large"  startIcon={<DeleteIcon fontSize="inherit"/>} onClick={()=>deletePet(row.id)}>                
              </Button>
              <Button className="tableButton"  size="large"  startIcon={<EditIcon fontSize="inherit"/>} onClick={()=>editPet(row.id)}>                
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>      
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={pets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}/>  
        <br />
        <h2>Add / Update Pet</h2>
        <Container maxWidth="md-12">
          <div className="addUpdateContainer">
              <TextField maxRows={10} required id="outlined-required" label="Animal" variant="filled" value={animal} onChange={handleAnimalChange} sx={{ m: 1, width: '30ch' }}/>&nbsp;
              <TextField required id="outlined-required" label="Description" variant="filled" value={description} onChange={handleDescriptionChange} sx={{ m: 1, width: '30ch' }} />&nbsp; <br/>     
              <TextField id="age"label="Age" type="number" InputLabelProps={{shrink: true,}} variant="filled" value={age} onChange={handleAgeChange} sx={{ m: 1, width: '10ch' }}/>&nbsp;
              <TextField id="Price"label="Price" type="number" InputLabelProps={{shrink: true,}} variant="filled" value={price} onChange={handlePriceChange}  sx={{ m: 1, width: '10ch' }}/>
              <br/>
              <Button className="addButton" variant="contained" onClick={()=>updatePet(editId)} sx={{ m: 1}}>{buttonName}</Button>
              <Button className="addButton" variant="contained" onClick={clearAll} sx={{ m: 1}}>Clear</Button>
        </div>
      </Container>        
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <Pets />
    </div>
  );
}

//Table Design 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default App;
