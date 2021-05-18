import React , {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Category from '../Category/Category'

function Header() {
const [locations,setLocations] = useState([]);
const [branches, setBranches] = useState([]);
const [images, setImages] = useState([]);
const [subimages, setSubimages] = useState([]);
let history = useHistory();

  function handleClick() {
    history.push({
        pathname: '/category',
        
        state: { data:'hello' }
      });
  }
    useEffect(()=>{
       
        fetch('catalog.json')
        .then(res=>res.json())
        .then(res=>res.data.locations.map(item=>{
            return item.name
        }))
    .then(res=> setLocations(res))
          
},[])   
    
useEffect(()=>{
    fetch('catalog.json')
        .then(res=>res.json())
        .then(res=>res.data.locations.map(item=>{
    return item.branches}))
    .then((res)=>{
        for(let i=0;i<res.length;i++)
        {
         let result =   res[i].map(item=>{
               return item.name
           })
           //console.log(result)
          setBranches( (branch)=> [...branch, result]);
           
        }
        return null;
    })  
    //     return item.name

    //  })
    // )
    // .then(res=> setBranches(...branches, res))
    
        },[])

useEffect(()=>{
            fetch('catalog.json')
                .then(res=>res.json())
                .then(res=>res.data.locations.map(item=>{
            return item.branches}))
            .then((res)=>{
                let r = [];
                for(let i=0;i<res.length;i++)
                {
                 let result =   res[i].map(item=>{
                       return item.categories
                   })
                   r.push(result);
                }
                
                return r;
             }
            )
            .then((res)=>{
                for(let i=0;i<res.length;i++)
                {
                    let r = [];
                    for(let j=0;j<res[i].length;j++)
                {
                    let result =   res[i][j].map(item=>{
                        return  {name:item.name,image:item.image}
                    })
                    r.push(result);
                }
                setImages((image)=>[...image, r])
            }
            return null;
            })
            
                
        },[])


        useEffect(()=>{
            fetch('catalog.json')
                .then(res=>res.json())
                .then(res=>res.data.locations.map(item=>{
            return item.branches}))
            .then((res)=>{
                let r = [];
                for(let i=0;i<res.length;i++)
                {
                 let result =   res[i].map(item=>{
                       return item.categories
                   })
                   r.push(result);
                }
                
                return r;
             }
            )
            .then((res)=>{
                let s = [];
                for(let i=0;i<res.length;i++)
                {
                        let r = [];
                        for(let j=0;j<res[i].length;j++)
                    {
                        let result =   res[i][j].map(item=>{
                            return item.subcategories;
                        }) 
                        r.push(result);
                    }
                    s.push(r);
               
            }
            
            return s;
            })
            .then((res)=>{
                for(let i=0;i<res.length;i++)
                {
                    let r = [];
                    for(let j=0;j<res[i].length;j++)
                {

                    let s=[];
                    for(let k=0;k<res[i][j].length;k++)
                {
                    
                    let result =   res[i][j][k].map(item=>{
                        return  {name:item.name,image:item.image}
                    })
                    s.push(result);
                }
               
                r.push(s);
                    
            }
                setSubimages((simage)=>[...simage, r])
            }
            return null;
        })
            
                

        },[])

return(
        <div>
            
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">RENTAL MANAGEMENT SYSTEM</Navbar.Brand>
  <Navbar.Toggle  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Nav  className="mr-auto">
    
      
      <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
          {
              locations.map((loc, index) =>{
                  return ( 
                      <>
              <NavDropdown.Item onClick={()=> handleClick()}>{loc}</NavDropdown.Item>
              <NavDropdown.Divider />
              </>
              )
            })
          } 
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


        </div>

    )
}

export default Header
