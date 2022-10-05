import React from 'react'
// import './nutrition.css'
const NutritionItem = () => {
  return (
    <div className='container-fluid nitem'>
       <h4>Banana</h4>
    <table className="table">
    <thead>
      <tr>
        <th>Calories</th>
        <th >105</th>
        
      </tr>
    </thead>
    <tbody  className='table-group-divider'>
      <tr>
        <td>Carbohydrates</td>
        <td>27</td>
      </tr>
      <tr>
        <td>Fat</td>
        <td>0.1</td>
      </tr>
      <tr>
        <td >Protien</td>
        <td>0.2</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default NutritionItem