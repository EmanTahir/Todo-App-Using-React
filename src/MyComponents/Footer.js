import React from 'react'  //react arrow function based component (rafc)

export const Footer = () => {
  let footerStyle ={
    position:"relative",
    width:"100%",
    top: "100vh"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
