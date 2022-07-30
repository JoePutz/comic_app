import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, GridColumn, Menu, MenuItem } from "semantic-ui-react";
import Login_form from "./Login_form";
import { useState } from "react"

function NavBar ({onLogin}) {
    const [loginToggle, changeLoginToggle] = useState(false)
    const handleToggle = () => {
        changeLoginToggle(!loginToggle)
    }
    return (
        <Grid columns='equal'>
            <Grid.Column>
            </Grid.Column>
            <GridColumn width={8}>
                <Menu fluid widths={3}inverted>
                    <MenuItem as={NavLink} to='/' activestyle={{color: "red"}}>Home</MenuItem>
                    <MenuItem as={NavLink} to='/comics' activestyle={{color: "red"}}>Comics</MenuItem>
                    <MenuItem as={NavLink} to='/members' activestyle={{color: "red"}}>Members</MenuItem>
                </Menu>
            </GridColumn>
            <GridColumn>
                <Menu inverted>
                    {!loginToggle?<MenuItem onClick={handleToggle}>Login</MenuItem> :
                    <MenuItem fluid as={Login_form} handleToggle={handleToggle} onLogin={onLogin}> </MenuItem>}
                </Menu>
            </GridColumn>
        </Grid>
    )  
}
export default NavBar