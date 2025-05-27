import React from 'react'
import '../style/mainSection.css'
const MainSection = () => {
      return (

            <>
                  <div className="main-section">
                        <div className="content">
                              <h1>Welcome to <span>SomCoder</span></h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab exercitationem nihil numquam laudantium quidem enim. Ad odit dolorem corporis?</p>
                              <button>Learn More</button>
                        </div>
                        <div className="image">
                              <img src="https://img.freepik.com/premium-vector/software-engineer-writing-code-computer-coder-programming-database-programmer-typing-script-solves-problems-algorithm-digital-development-flat-isolated-vector-illustration-white_633472-6162.jpg" alt="" />
                        </div>
                  </div>
            </>

      )
}

export default MainSection