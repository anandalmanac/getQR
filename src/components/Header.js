import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <div className="header-wrap">
                <div className="header-logo">
                    <img src="logo.svg" alt="" />
                </div>
                <div className="header-links">
                    <a href="">about us</a>
                    <a href="">Chrome apk</a>
                    <button className='register-btn'>Register</button> 
                    <button className='login-btn' >Login</button>
                </div>

            </div>
            
        </Container>
    )
}

export default Header


const Container=styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
.header-wrap{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo{
        height: 100px;
        
        display: flex;
        align-items: center;
        img{
            width: auto;
            height: 70px;
        }
    }


    .header-links{
        a,button{
            text-decoration: none;
            color: #344FA1;
            margin-left: 22px;
            font-size:16px;
            font-weight: 400;
        }
        a{
            font-size: 18px;
        }
        button{
            background-color: transparent;
            border: 2px solid #344FA1;
            height:50px;
            width: 100px;
            border-radius: 50px;

        }
        .login-btn{
            background-color: #8566FF;
            border: none;
            color: white;
        }
    }
   
}

`