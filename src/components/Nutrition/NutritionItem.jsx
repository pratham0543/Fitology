import React from 'react'
// import './nutrition.css'
const NutritionItem = ({name,nutrition}) => {
  return (
    <div className='container-fluid nitem'>
       <h4>{name}</h4>
    <table className="table">
    <thead>
      <tr>
        <th>Calories</th>
        <th >{nutrition.calories}</th>
        
      </tr>
    </thead>
    <tbody  className='table-group-divider'>
      <tr>
        <td>Carbohydrates</td>
        <td>{nutrition.carbohydrates_total_g}</td>
      </tr>
      <tr>
        <td>Fat</td>
        <td>{nutrition.fat_total_g}</td>
      </tr>
      <tr>
        <td >Protien</td>
        <td>{nutrition.protein_g}</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default NutritionItem